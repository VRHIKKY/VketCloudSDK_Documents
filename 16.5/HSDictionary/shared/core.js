/**
 * HSDictionary 共通コア機能
 * テーマ、コピー、ハイライト、ユーティリティなど
 */

(function() {
// ===== テーマ管理 =====
const ThemeManager = {
  STORAGE_KEY: 'hsdictionary_theme',

  init(toggleElement) {
    if (!toggleElement) return;

    // 保存されたテーマを適用
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // トグルイベント
    toggleElement.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem(this.STORAGE_KEY, newTheme);
    });
  },

  get() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  },

  set(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }
};

// ===== コピー機能 =====
const Clipboard = {
  successElement: null,
  successTimeout: null,

  init(successElement) {
    this.successElement = successElement;
  },

  async copy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        this.showSuccess();
        return true;
      } catch {
        return this.fallbackCopy(text);
      }
    }
    return this.fallbackCopy(text);
  },

  fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;left:-9999px;top:0;';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    let success = false;
    try {
      success = document.execCommand('copy');
    } catch {
      // コピー失敗
    }

    document.body.removeChild(textarea);

    if (success) {
      this.showSuccess();
    } else {
      alert('コピーに失敗しました。手動でコピーしてください。');
    }

    return success;
  },

  showSuccess() {
    if (!this.successElement) return;

    if (this.successTimeout) {
      clearTimeout(this.successTimeout);
    }

    this.successElement.classList.add('show');
    this.successTimeout = setTimeout(() => {
      this.successElement.classList.remove('show');
    }, 2000);
  }
};

// ===== シンタックスハイライト =====
function highlightCode(code) {
  // HTMLエスケープ
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // プレースホルダーで保護しながらハイライト
  const placeholders = [];

  function protect(match) {
    const index = placeholders.length;
    placeholders.push(match);
    return `__HL_${index}__`;
  }

  function restore(text) {
    return text.replace(/__HL_(\d+)__/g, (_, i) => placeholders[i]);
  }

  // 1. 文字列を先に保護（"..." や '...'）
  html = html.replace(/"(?:[^"\\]|\\.)*"/g, m => protect(`<span class="hl-string">${m}</span>`));
  html = html.replace(/'(?:[^'\\]|\\.)*'/g, m => protect(`<span class="hl-string">${m}</span>`));

  // 2. コメントを保護（// ...）
  html = html.replace(/\/\/[^\n]*/g, m => protect(`<span class="hl-comment">${m}</span>`));

  // 3. キーワード
  const keywords = ['let', 'const', 'var', 'function', 'if', 'else', 'for', 'while', 'return', 'new', 'this', 'true', 'false', 'null', 'void'];
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'g');
    html = html.replace(regex, '<span class="hl-keyword">$1</span>');
  });

  // 4. 型名（先頭大文字）
  html = html.replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="hl-type">$1</span>');

  // 5. 数値
  html = html.replace(/\b(\d+\.?\d*f?)\b/g, '<span class="hl-number">$1</span>');

  // 6. 関数呼び出し（.methodName( の形式）
  html = html.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '.<span class="hl-function">$1</span>(');

  // プレースホルダーを復元
  return restore(html);
}

// ===== Markdownレンダラー =====
function renderMarkdown(text) {
  let html = text.trim();

  // コードブロックを一時保存
  const codeBlocks = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const index = codeBlocks.length;
    codeBlocks.push({ lang, code: code.trim() });
    return `__CODE_BLOCK_${index}__`;
  });

  // インラインコード
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // 見出し
  html = html.replace(/^## (.+)$/gm, '<h3 class="topic-h2">$1</h3>');
  html = html.replace(/^### (.+)$/gm, '<h4 class="topic-h3">$1</h4>');

  // 太字
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // 段落
  html = html.replace(/\n\n+/g, '</p><p>');
  html = '<p>' + html + '</p>';
  html = html.replace(/<p>\s*<h/g, '<h');
  html = html.replace(/h([234])>\s*<\/p>/g, 'h$1>');

  // コードブロックを復元
  codeBlocks.forEach((block, index) => {
    const highlightedCode = highlightCode(block.code);
    html = html.replace(
      `__CODE_BLOCK_${index}__`,
      `<pre class="topic-code"><code>${highlightedCode}</code></pre>`
    );
  });

  // 空のpタグを除去
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

// ===== ユーティリティ =====
function splitDescription(desc) {
  // 「。」で分割して用途要約と仕様説明に分ける
  const sentences = desc.split('。').filter(s => s.trim());
  if (sentences.length >= 2) {
    return {
      purpose: sentences[0] + '。',
      detail: sentences.slice(1).join('。') + (sentences.length > 1 ? '。' : '')
    };
  }
  return {
    purpose: desc,
    detail: ''
  };
}

function getShortDesc(desc) {
  // 最初の句点までを取得（最大30文字）
  const firstSentence = desc.split('。')[0];
  if (firstSentence.length > 30) {
    return firstSentence.substring(0, 28) + '...';
  }
  return firstSentence;
}

function isInputFocused() {
  const activeElement = document.activeElement;
  return activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
}

// ===== クリックパーティクル =====
function createClickParticles(x, y) {
  const particleCount = 6;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'click-particle';

    // ランダムな方向に飛散
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
    const distance = 20 + Math.random() * 20;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--dx', dx + 'px');
    particle.style.setProperty('--dy', dy + 'px');

    document.body.appendChild(particle);

    // アニメーション終了後に削除
    setTimeout(() => {
      particle.remove();
    }, 600);
  }
}

function initClickParticles() {
  document.addEventListener('click', (e) => {
    createClickParticles(e.clientX, e.clientY);
  });
}

// ===== LocalStorage名前空間ヘルパー =====
const Storage = {
  prefix: 'hsdictionary',

  setPrefix(namespace) {
    this.prefix = `hsdictionary_${namespace}`;
  },

  get(key, defaultValue = null) {
    const value = localStorage.getItem(`${this.prefix}_${key}`);
    if (value === null) return defaultValue;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  },

  set(key, value) {
    const serialized = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(`${this.prefix}_${key}`, serialized);
  },

  remove(key) {
    localStorage.removeItem(`${this.prefix}_${key}`);
  }
};

// ===== エクスポート（グローバル） =====
window.HSDictionary = {
  ThemeManager,
  Clipboard,
  Storage,
  highlightCode,
  renderMarkdown,
  splitDescription,
  getShortDesc,
  isInputFocused,
  createClickParticles,
  initClickParticles
};
})();
