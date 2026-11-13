// クレジットページのエンドロール演出
// どのページでも「chameleon」とキー入力すると再生されます。
(function () {
  "use strict";

  var COMMAND = "chameleon".split("");
  var HASH = "#endroll";
  // スクロール速度 (px/秒)
  var SPEED = 70;

  // 3D シーンのモジュールは、このスクリプトと同じフォルダに置く
  var SCENE_URL = document.currentScript
    ? new URL("credits-endroll-scene.js", document.currentScript.src).href
    : null;
  // 画面の端に近い文字ほど奥に傾ける角度 (度)
  var DRUM_ANGLE = 38;

  var progress = 0;
  var overlay = null;
  var animation = null;
  var stopScene = null;
  var drumFrame = 0;

  function isTyping(target) {
    if (!target) return false;
    var tag = target.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function creditsUrl() {
    var link = document.getElementById("footer-credits-link");
    return link ? link.href : null;
  }

  function onKeydown(event) {
    if (overlay) {
      if (event.key === "Escape") {
        close();
      } else if (event.key === " " && animation) {
        event.preventDefault();
        if (animation.playState === "paused") animation.play(); else animation.pause();
      }
      return;
    }
    if (isTyping(event.target)) return;

    var key = (event.key || "").toLowerCase();
    if (key === COMMAND[progress]) {
      progress++;
      if (progress === COMMAND.length) {
        progress = 0;
        // 最後の "n" はテーマの「次のページ」ショートカットと重なるので止める
        event.preventDefault();
        event.stopImmediatePropagation();
        trigger();
      }
    } else {
      progress = key === COMMAND[0] ? 1 : 0;
    }
  }

  function trigger() {
    if (document.querySelector(".vkc-credits")) {
      play();
      return;
    }
    var url = creditsUrl();
    if (url) window.location.href = url.split("#")[0] + HASH;
  }

  function play() {
    var source = document.querySelector(".vkc-credits");
    if (!source || overlay) return;

    overlay = document.createElement("div");
    overlay.className = "vkc-endroll";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Credits");

    var closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "vkc-endroll__close";
    closeButton.setAttribute("aria-label", "Close");
    closeButton.textContent = "ESC";
    closeButton.addEventListener("click", close);

    var track = document.createElement("div");
    // ページ本文と同じスタイルを当てるため md-typeset を付ける
    track.className = "vkc-endroll__track md-typeset";
    var roll = source.cloneNode(true);
    roll.classList.add("vkc-credits--roll");
    track.appendChild(roll);

    overlay.appendChild(track);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
    document.documentElement.classList.add("vkc-endroll-open");

    // 背景クリックで閉じる (リンクのクリックは除く)
    overlay.addEventListener("click", function (event) {
      if (!event.target.closest("a")) close();
    });

    requestAnimationFrame(function () {
      overlay.classList.add("is-visible");
      closeButton.focus({ preventScroll: true });

      if (prefersReducedMotion() || !track.animate) {
        overlay.classList.add("is-static");
        return;
      }

      // 最後のロゴが画面中央で止まるようにスクロール量を計算する
      var viewport = overlay.clientHeight;
      var finale = roll.querySelector(".vkc-credits__finale");
      var stopAt = finale
        ? finale.offsetTop + finale.offsetHeight / 2 - viewport / 2
        : roll.offsetHeight;
      var distance = viewport + stopAt;

      animation = track.animate(
        [
          { transform: "translateY(" + viewport + "px)" },
          { transform: "translateY(" + (-stopAt) + "px)" }
        ],
        { duration: (distance / SPEED) * 1000, easing: "linear", fill: "forwards", delay: 600 }
      );
      animation.onfinish = function () {
        overlay && overlay.classList.add("is-finished");
      };

      startDrum(roll, overlay);
      stopScene = startScene(overlay, getProgress);
    });
  }

  // スクロールの進み具合 (0〜1)
  function getProgress() {
    if (!animation) return 0;
    var timing = animation.effect.getComputedTiming();
    if (timing.progress === null) return animation.playState === "finished" ? 1 : 0;
    return timing.progress;
  }

  // 文字を画面上の位置に応じて奥へ傾け、ドラムが回るように見せる
  function startDrum(roll, host) {
    var items = roll.querySelectorAll(
      ".vkc-credits__kicker, .vkc-credits__title, .vkc-credits__team, " +
      ".vkc-credits__role, .vkc-credits__names li, .vkc-credits__logo"
    );
    function frame() {
      var half = host.clientHeight / 2;
      for (var i = 0; i < items.length; i++) {
        var rect = items[i].getBoundingClientRect();
        var n = Math.max(-1.2, Math.min(1.2, (rect.top + rect.height / 2 - half) / half));
        items[i].style.transform =
          "perspective(900px) rotateX(" + (-n * DRUM_ANGLE).toFixed(2) + "deg) " +
          "translateZ(" + (-Math.abs(n) * 140).toFixed(1) + "px)";
      }
      drumFrame = requestAnimationFrame(frame);
    }
    frame();
  }

  // Three.js の背景シーンを読み込む。失敗しても黒背景のまま再生を続ける
  function startScene(host, getProgressFn) {
    var stopped = false;
    var dispose = null;
    if (SCENE_URL) {
      import(SCENE_URL)
        .then(function (module) { return module.createScene(host, getProgressFn); })
        .then(function (cleanup) {
          if (stopped) cleanup(); else dispose = cleanup;
        })
        .catch(function (error) {
          console.warn("[credits] 3D scene is unavailable:", error);
        });
    }
    return function () {
      stopped = true;
      if (dispose) dispose();
    };
  }

  function close() {
    if (!overlay) return;
    var closing = overlay;
    overlay = null;
    if (animation) {
      animation.cancel();
      animation = null;
    }
    cancelAnimationFrame(drumFrame);
    if (stopScene) {
      // フェードアウトが終わってから 3D シーンを破棄する
      setTimeout(stopScene, 400);
      stopScene = null;
    }
    closing.classList.remove("is-visible");
    document.documentElement.classList.remove("vkc-endroll-open");
    setTimeout(function () { closing.remove(); }, 400);
    if (window.location.hash === HASH) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  // テーマのショートカットより先に受け取るため、window のキャプチャで登録する
  window.addEventListener("keydown", onKeydown, true);

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("[data-vkc-endroll-play]");
    if (button) button.addEventListener("click", play);
    if (window.location.hash === HASH) play();
  });
})();
