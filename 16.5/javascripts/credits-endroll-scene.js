// エンドロールの背景に流す Three.js のシーン
// credits-endroll.js から、再生時にだけ読み込まれます。
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

var STAR_COUNT = 3500;
var STAR_DEPTH = 320;
var SHARD_COUNT = 28;

// 色相を時間とともに回す (カメレオンカラー)
var HUE_GLSL = [
  "vec3 hsv2rgb(vec3 c) {",
  "  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);",
  "  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);",
  "  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);",
  "}"
].join("\n");

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// 星用の丸くぼけた点のテクスチャ
function createStarTexture() {
  var size = 64;
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  var context = canvas.getContext("2d");
  var gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.25, "rgba(200,220,255,0.8)");
  gradient.addColorStop(1, "rgba(120,160,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function createStars() {
  var positions = new Float32Array(STAR_COUNT * 3);
  for (var i = 0; i < STAR_COUNT; i++) {
    var angle = Math.random() * Math.PI * 2;
    var radius = 4 + Math.pow(Math.random(), 0.7) * 70;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius;
    positions[i * 3 + 2] = -Math.random() * STAR_DEPTH;
  }
  var geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  var material = new THREE.PointsMaterial({
    color: 0xffffff,
    map: createStarTexture(),
    size: 0.6,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  return new THREE.Points(geometry, material);
}

function createPlanet(uniforms) {
  var planet = new THREE.Group();

  // 縁が光る球 (フレネル)
  var glow = new THREE.Mesh(
    new THREE.IcosahedronGeometry(8, 5),
    new THREE.ShaderMaterial({
      uniforms: uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: [
        "varying vec3 vNormal;",
        "varying vec3 vView;",
        "void main() {",
        "  vec4 mv = modelViewMatrix * vec4(position, 1.0);",
        "  vNormal = normalize(normalMatrix * normal);",
        "  vView = normalize(-mv.xyz);",
        "  gl_Position = projectionMatrix * mv;",
        "}"
      ].join("\n"),
      fragmentShader: [
        "uniform float uTime;",
        "uniform float uPulse;",
        "varying vec3 vNormal;",
        "varying vec3 vView;",
        HUE_GLSL,
        "void main() {",
        "  float f = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.2);",
        "  vec3 col = hsv2rgb(vec3(fract(uTime * 0.04 + vNormal.y * 0.18), 0.65, 1.0));",
        "  float a = f * (0.9 + uPulse * 1.5) + 0.04;",
        "  gl_FragColor = vec4(col * a, a);",
        "}"
      ].join("\n")
    })
  );

  // ポリゴンの面を見せるワイヤーフレーム
  var wireMaterial = new THREE.LineBasicMaterial({
    color: 0x6fa8ff,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  var wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(8.06, 2)),
    wireMaterial
  );

  // 惑星の輪
  var ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x6fa8ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  var ring = new THREE.Mesh(new THREE.RingGeometry(10.8, 11.3, 160), ringMaterial);
  var ringOuter = new THREE.Mesh(new THREE.RingGeometry(12.2, 12.35, 160), ringMaterial);
  var rings = new THREE.Group();
  rings.add(ring, ringOuter);
  rings.rotation.set(Math.PI * 0.42, 0, 0.18);

  planet.add(glow, wire, rings);
  return { group: planet, wire: wire, rings: rings, wireMaterial: wireMaterial, ringMaterial: ringMaterial };
}

function createShards() {
  var shards = [];
  var group = new THREE.Group();
  var geometries = [
    new THREE.OctahedronGeometry(1),
    new THREE.TetrahedronGeometry(1),
    new THREE.IcosahedronGeometry(1, 0)
  ];
  for (var i = 0; i < SHARD_COUNT; i++) {
    var material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true,
      metalness: 0.4,
      roughness: 0.35,
      emissive: 0x000000
    });
    var mesh = new THREE.Mesh(geometries[i % geometries.length], material);
    var scale = 0.25 + Math.random() * 0.6;
    mesh.scale.setScalar(scale);
    group.add(mesh);
    shards.push({
      mesh: mesh,
      radius: 13 + Math.random() * 9,
      height: (Math.random() - 0.5) * 8,
      speed: (0.08 + Math.random() * 0.12) * (Math.random() < 0.5 ? -1 : 1),
      phase: Math.random() * Math.PI * 2,
      spin: 0.4 + Math.random() * 1.2,
      hue: Math.random()
    });
  }
  return { group: group, shards: shards };
}

export function createScene(host, getProgress) {
  var canvas = document.createElement("canvas");
  canvas.className = "vkc-endroll__canvas";
  host.insertBefore(canvas, host.firstChild);

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 1);

  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.008);

  var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 500);
  camera.position.set(0, 0, 10);

  var uniforms = { uTime: { value: 0 }, uPulse: { value: 0 } };

  var stars = createStars();
  var planet = createPlanet(uniforms);
  var shards = createShards();
  planet.group.add(shards.group);
  scene.add(stars, planet.group);

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));
  var keyLight = new THREE.PointLight(0x6fa8ff, 400, 80);
  scene.add(keyLight);
  var rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
  rimLight.position.set(-5, 8, 6);
  scene.add(rimLight);

  var pointer = { x: 0, y: 0 };
  function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  }
  window.addEventListener("pointermove", onPointerMove);

  function resize() {
    var width = host.clientWidth;
    var height = host.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  var clock = new THREE.Clock();
  var warp = 0;
  var pulse = 0;
  var wasFinished = false;
  var hueColor = new THREE.Color();
  var starPositions = stars.geometry.attributes.position;
  var frameId = 0;

  function frame() {
    frameId = requestAnimationFrame(frame);
    var dt = Math.min(clock.getDelta(), 0.05);
    var time = clock.elapsedTime;
    var progress = getProgress();
    var finished = progress >= 1;

    // 終盤でワープのように加速し、ロゴが出たら落ち着かせる
    var warpTarget = progress > 0.9 && !finished ? 1 : 0;
    warp += (warpTarget - warp) * Math.min(1, dt * 1.8);
    if (finished && !wasFinished) pulse = 1;
    wasFinished = finished;
    pulse = Math.max(0, pulse - dt * 0.6);

    var speed = 5 + warp * 140;
    for (var i = 0; i < STAR_COUNT; i++) {
      var z = starPositions.getZ(i) + speed * dt;
      if (z > camera.position.z) z -= STAR_DEPTH;
      starPositions.setZ(i, z);
    }
    starPositions.needsUpdate = true;
    stars.material.size = 0.6 + warp * 1.2;

    // 惑星は画面下からせり上がり、最後はロゴの背後に来る
    var eased = easeInOut(Math.min(1, progress));
    planet.group.position.set(0, lerp(-17, 0, eased), lerp(-46, -34, eased));
    planet.group.rotation.y += dt * 0.07;
    planet.wire.rotation.y -= dt * 0.03;
    planet.rings.rotation.z += dt * 0.05;
    planet.group.scale.setScalar(1 + pulse * 0.08);

    hueColor.setHSL((time * 0.04) % 1, 0.75, 0.62);
    planet.wireMaterial.color.copy(hueColor);
    planet.ringMaterial.color.copy(hueColor);
    planet.ringMaterial.opacity = 0.35 + pulse * 0.5;
    keyLight.color.copy(hueColor);
    keyLight.position.set(0, planet.group.position.y + 4, planet.group.position.z + 14);

    for (var s = 0; s < shards.shards.length; s++) {
      var shard = shards.shards[s];
      var angle = shard.phase + time * shard.speed;
      shard.mesh.position.set(
        Math.cos(angle) * shard.radius,
        shard.height + Math.sin(time * 0.6 + shard.phase) * 0.8,
        Math.sin(angle) * shard.radius
      );
      shard.mesh.rotation.x += dt * shard.spin;
      shard.mesh.rotation.y += dt * shard.spin * 0.7;
      shard.mesh.material.color.setHSL((shard.hue + time * 0.05) % 1, 0.7, 0.6);
      shard.mesh.material.emissive.setHSL((shard.hue + time * 0.05) % 1, 0.8, 0.12 + pulse * 0.3);
    }

    uniforms.uTime.value = time;
    uniforms.uPulse.value = pulse;

    // マウスに少しだけカメラを追従させる
    camera.position.x += (pointer.x * 1.8 - camera.position.x) * Math.min(1, dt * 2);
    camera.position.y += (-pointer.y * 1.2 - camera.position.y) * Math.min(1, dt * 2);
    camera.fov = 60 + warp * 14;
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, -30);

    renderer.render(scene, camera);
  }

  requestAnimationFrame(function () {
    canvas.classList.add("is-visible");
  });
  frame();

  return function dispose() {
    cancelAnimationFrame(frameId);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("resize", resize);
    scene.traverse(function (object) {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (object.material.map) object.material.map.dispose();
        object.material.dispose();
      }
    });
    renderer.dispose();
    canvas.remove();
  };
}
