/**
 * VKC Item メソッド逆引き辞書 - アプリケーションロジック
 *
 * このファイルには以下の機能が含まれます:
 * - フィルター機能（コンポーネント、カテゴリー）
 * - 検索機能（日本語対応）
 * - お気に入り機能（LocalStorage保存）
 * - ダークモード切替
 * - ツールチップ表示
 * - ポップアップ表示（関連メソッド、引数詳細、警告表示）
 * - マトリクス表示
 * - キーボードショートカット
 * - コピー機能
 */

// データパス（pages/item/からの相対パス）
const DATA_BASE_PATH = '../../data/item/';

// LocalStorage名前空間
const STORAGE_PREFIX = 'hsdictionary_item';

// 共通コアからユーティリティを取得
const { highlightCode, renderMarkdown, splitDescription, getShortDesc, isInputFocused } = window.HSDictionary;

// ===== 状態管理 =====
let currentComponent = 'all';
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'name-asc'; // ソート順
let currentMethod = '';
let currentCode = '';
let tooltipTimeout = null;
let showFavoritesOnly = false;
let favorites = [];
let viewHistory = []; // 閲覧履歴
let currentLanguage = 'ja'; // 現在の言語

// ===== DOM要素の参照 =====
const elements = {};

// ===== 初期化 =====
function init() {
  // DOM要素を取得
  elements.componentFilters = document.getElementById('component-filters');
  elements.categoryFilters = document.getElementById('category-filters');
  elements.searchInput = document.getElementById('search');
  elements.stats = document.getElementById('stats');
  elements.methodGrid = document.getElementById('method-grid');
  elements.noResults = document.getElementById('no-results');
  elements.tooltip = document.getElementById('tooltip');
  elements.tooltipTitle = document.getElementById('tooltip-title');
  elements.tooltipCode = document.getElementById('tooltip-code');
  elements.popupOverlay = document.getElementById('popup-overlay');
  elements.popupCategoryIcon = document.getElementById('popup-category-icon');
  elements.popupTitle = document.getElementById('popup-title');
  elements.popupDocLink = document.getElementById('popup-doc-link');
  elements.popupSig = document.getElementById('popup-sig');
  elements.popupPurpose = document.getElementById('popup-purpose');
  elements.popupDetail = document.getElementById('popup-detail');
  elements.popupWarning = document.getElementById('popup-warning');
  elements.popupHasCode = document.getElementById('popup-has-code');
  elements.popupArgs = document.getElementById('popup-args');
  elements.popupArgsSection = document.getElementById('popup-args-section');
  elements.popupRelated = document.getElementById('popup-related');
  elements.popupRelatedSection = document.getElementById('popup-related-section');
  elements.popupCode = document.getElementById('popup-code');
  elements.popupClose = document.getElementById('popup-close');
  elements.popupFavorite = document.getElementById('popup-favorite');
  elements.copyMethodBtn = document.getElementById('copy-method');
  elements.copyCodeBtn = document.getElementById('copy-code');
  elements.shareUrlBtn = document.getElementById('share-url');
  elements.copySuccess = document.getElementById('copy-success');
  elements.themeToggle = document.getElementById('theme-toggle');
  elements.favoritesToggle = document.getElementById('favorites-toggle');
  elements.favoritesCount = document.getElementById('favorites-count');
  elements.matrixToggle = document.getElementById('matrix-toggle');
  elements.matrixOverlay = document.getElementById('matrix-overlay');
  elements.matrixClose = document.getElementById('matrix-close');
  elements.matrixTableBody = document.getElementById('matrix-table-body');
  elements.frequentSection = document.getElementById('frequent-section');
  elements.frequentMethods = document.getElementById('frequent-methods');
  elements.sortSelect = document.getElementById('sort-select');
  elements.activeFilters = document.getElementById('active-filters');
  elements.historySection = document.getElementById('history-section');
  elements.historyMethods = document.getElementById('history-methods');
  elements.historyClear = document.getElementById('history-clear');
  // Topics elements
  elements.topicsChips = document.getElementById('topics-chips');
  elements.popupKnowledgeSection = document.getElementById('popup-knowledge-section');
  elements.popupKnowledgeToggle = document.getElementById('popup-knowledge-toggle');
  elements.popupKnowledgeContent = document.getElementById('popup-knowledge-content');
  elements.topicModalOverlay = document.getElementById('topic-modal-overlay');
  elements.topicModalIcon = document.getElementById('topic-modal-icon');
  elements.topicModalTitleText = document.getElementById('topic-modal-title-text');
  elements.topicModalBody = document.getElementById('topic-modal-body');
  elements.topicModalMethods = document.getElementById('topic-modal-methods');
  elements.topicModalClose = document.getElementById('topic-modal-close');
  // Language toggle elements
  elements.langToggle = document.getElementById('lang-toggle');
  elements.langLabel = document.getElementById('lang-label');

  // 設定を読み込み
  loadSettings();

  // 機能を初期化
  initLanguage();
  initTheme();
  initFilters();
  initResetButton();
  initGrid();
  initSearch();
  initTooltip();
  initPopup();
  initFavorites();
  initMatrix();
  initFrequentMethods();
  initHistory();
  initSort();
  initTopics();
  initUrlParams();
  initKeyboardShortcuts();

  // 初期フィルター適用
  applyFilters();
}

// ===== 設定の保存・読み込み =====
function loadSettings() {
  // お気に入りを読み込み
  const savedFavorites = localStorage.getItem(`${STORAGE_PREFIX}_favorites`);
  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  }

  // テーマを読み込み（共通設定）
  const savedTheme = localStorage.getItem('hsdictionary_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // 履歴を読み込み
  const savedHistory = localStorage.getItem(`${STORAGE_PREFIX}_history`);
  if (savedHistory) {
    viewHistory = JSON.parse(savedHistory);
  }

  // 言語を読み込み（共通設定）
  const savedLang = localStorage.getItem('hsdictionary_language');
  if (savedLang) {
    currentLanguage = savedLang;
  }
}

function saveFavorites() {
  localStorage.setItem(`${STORAGE_PREFIX}_favorites`, JSON.stringify(favorites));
}

function saveTheme(theme) {
  localStorage.setItem('hsdictionary_theme', theme);
}

function saveLanguage(lang) {
  localStorage.setItem('hsdictionary_language', lang);
}

// ===== 言語切替 =====
function initLanguage() {
  // 初期言語を適用
  applyLanguage(currentLanguage);
  updateLangLabel();

  // トグルクリックイベント
  elements.langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
    applyLanguage(currentLanguage);
    updateLangLabel();
    saveLanguage(currentLanguage);
    // 動的コンテンツを再描画
    initGrid();
    applyFilters();
    renderTopicChips();
  });
}

function updateLangLabel() {
  elements.langLabel.textContent = currentLanguage === 'ja' ? 'JP' : 'EN';
}

function applyLanguage(lang) {
  const translations = i18n[lang];

  // data-i18n属性を持つ要素を更新
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  // data-i18n-placeholder属性を持つ要素を更新
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key]) {
      el.placeholder = translations[key];
    }
  });

  // フィルターボタンのテキストを更新
  updateFilterTexts();
}

function updateFilterTexts() {
  // ItemTypeの「すべて」ボタン
  const allCompBtn = elements.componentFilters.querySelector('[data-comp="all"] .tab-text');
  if (allCompBtn) {
    allCompBtn.textContent = t('all');
  }

  // カテゴリーフィルターの「すべて」ボタン
  const allCatBtn = elements.categoryFilters.querySelector('[data-cat="all"] .cat-text');
  if (allCatBtn) {
    allCatBtn.textContent = t('all');
  }

  // カテゴリーフィルターの各カテゴリーボタン
  categoryNames.forEach(cat => {
    const btn = elements.categoryFilters.querySelector(`[data-cat="${cat}"] .cat-text`);
    if (btn) {
      btn.textContent = getCategoryName(cat);
    }
  });
}

// 翻訳取得ヘルパー
function t(key) {
  return i18n[currentLanguage][key] || key;
}

// カテゴリー名を取得（翻訳対応）
function getCategoryName(category) {
  return categoryTranslations[currentLanguage][category] || category;
}

// メソッド説明を取得（翻訳対応）
function getMethodDesc(methodName, jaDesc) {
  if (currentLanguage === 'en' && methodDescTranslations[methodName]) {
    return methodDescTranslations[methodName];
  }
  return jaDesc;
}

// サンプル説明を取得（翻訳対応）
function getSampleDesc(methodName, jaDesc) {
  if (currentLanguage === 'en' && sampleDescTranslations[methodName]) {
    return sampleDescTranslations[methodName];
  }
  return jaDesc;
}

// トピック情報を取得（翻訳対応）
function getTopicData(topicId) {
  const topic = topics[topicId];
  if (!topic) return null;

  if (currentLanguage === 'en' && topicTranslations[topicId]) {
    const enTopic = topicTranslations[topicId];
    return {
      ...topic,
      title: enTopic.title,
      summary: enTopic.summary,
      content: enTopic.content
    };
  }
  return topic;
}

// ===== ダークモード =====
function initTheme() {
  elements.themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    saveTheme(newTheme);
  });
}

// ===== フィルター機能 =====
function initFilters() {
  // ItemTypeタブを生成（一体型タブデザイン）
  elements.componentFilters.innerHTML =
    `<button class="itemtype-tab active" data-comp="all"><span class="tab-text">${t('all')}</span></button>` +
    components.map(c => `<button class="itemtype-tab" data-comp="${c}">${c}</button>`).join('');

  // カテゴリーフィルターを生成（アイコン＋件数付き）
  elements.categoryFilters.innerHTML =
    `<button class="filter-btn active" data-cat="all"><span class="material-icons">apps</span><span class="cat-text">${t('all')}</span> <span class="filter-count"></span></button>` +
    categoryNames.map(c => `<button class="filter-btn" data-cat="${c}"><span class="material-icons">${categoryIcons[c] || 'label'}</span><span class="cat-text">${getCategoryName(c)}</span> <span class="filter-count"></span></button>`).join('');

  // ItemTypeタブのイベント（closest で子要素クリックにも対応）
  elements.componentFilters.addEventListener('click', (e) => {
    const tab = e.target.closest('.itemtype-tab');
    if (tab) {
      elements.componentFilters.querySelectorAll('.itemtype-tab').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      currentComponent = tab.dataset.comp;
      applyFilters();
    }
  });

  // カテゴリーフィルターのイベント（closest で子要素クリックにも対応）
  elements.categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (btn) {
      elements.categoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      applyFilters();
    }
  });
}


// ===== フィルターリセット機能 =====
function resetFilters() {
  // 状態をリセット
  currentComponent = 'all';
  currentCategory = 'all';
  currentSearch = '';
  showFavoritesOnly = false;

  // ItemTypeタブのUI更新
  elements.componentFilters.querySelectorAll('.itemtype-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.comp === 'all');
  });

  // カテゴリーフィルターのUI更新
  elements.categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === 'all');
  });

  // 検索ボックスをクリア
  elements.searchInput.value = '';

  // お気に入りフィルターを解除
  elements.favoritesToggle.classList.remove('active');

  // フィルター適用
  applyFilters();
}

// リセットボタンの初期化
function initResetButton() {
  elements.resetBtn = document.getElementById('reset-filters');
  if (elements.resetBtn) {
    elements.resetBtn.addEventListener('click', resetFilters);
  }
}

// グローバル関数として公開
window.resetFilters = resetFilters;

// ===== グリッド生成 =====
function createMethodCard(name, data) {
  const category = methodToCategory[name] || 'その他';
  const categoryIcon = categoryIcons[category] || 'label';
  const isFavorite = favorites.includes(name);
  const desc = getMethodDesc(name, data.desc);
  const categoryDisplay = getCategoryName(category);

  return `<div class="method-card"
    data-name="${name.toLowerCase()}"
    data-method="${name}"
    data-components="${data.components.join(',')}"
    data-category="${category}">
    <div class="method-title-row">
      <span class="method-category-icon material-icons">${categoryIcon}</span>
      <div class="method-name">${name}</div>
      <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-method="${name}" onclick="toggleFavorite(event, '${name}')">
        <span class="material-icons">${isFavorite ? 'bookmark' : 'bookmark_border'}</span>
      </button>
    </div>
    <div class="method-sig">${data.sig}</div>
    <div class="method-desc">${desc}</div>
    <div class="method-card-footer">
      <div class="method-meta">
        <span class="method-category"><span class="material-icons">${categoryIcon}</span>${categoryDisplay}</span>
        <span class="method-components">${data.components.join(', ')}</span>
      </div>
    </div>
    <div class="method-card-hint">${t('viewDetails')}</div>
  </div>`;
}

function initGrid() {
  elements.methodGrid.innerHTML = Object.entries(methodData)
    .map(([name, data]) => createMethodCard(name, data))
    .join('');
}

// ===== フィルター適用 =====
function applyFilters() {
  const cards = document.querySelectorAll('.method-card');
  let visibleCount = 0;

  // 日本語検索のマッチングメソッドを取得
  const jpMatches = getJapaneseSearchMatches(currentSearch);

  cards.forEach(card => {
    const name = card.dataset.name;
    const methodName = card.dataset.method;
    const comps = card.dataset.components.split(',');
    const cat = card.dataset.category;

    const matchComponent = currentComponent === 'all' || comps.includes(currentComponent);
    const matchCategory = currentCategory === 'all' || cat === currentCategory;
    const matchFavorites = !showFavoritesOnly || favorites.includes(methodName);

    // 検索マッチング（メソッド名 or 日本語キーワード）
    const matchSearch = currentSearch === '' ||
      name.includes(currentSearch.toLowerCase()) ||
      jpMatches.includes(methodName);

    if (matchComponent && matchCategory && matchSearch && matchFavorites) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  updateStats(visibleCount);
}

function getJapaneseSearchMatches(searchText) {
  if (!searchText) return [];

  const matches = new Set();

  // 日本語キーワードでマッチング
  Object.entries(japaneseKeywords).forEach(([keyword, methods]) => {
    if (keyword.includes(searchText) || searchText.includes(keyword)) {
      methods.forEach(m => matches.add(m));
    }
  });

  return Array.from(matches);
}

function updateStats(visibleCount) {
  if (visibleCount === 0) {
    elements.noResults.style.display = 'block';
    elements.stats.textContent = '0 ' + t('results');
  } else {
    elements.noResults.style.display = 'none';
    elements.stats.textContent = visibleCount + ' ' + t('results');
  }

  // 有効フィルタ条件を表示
  updateActiveFilters();

  // カテゴリー別件数を更新
  updateCategoryCounts();
}

// カテゴリー別のヒット件数を更新
function updateCategoryCounts() {
  const jpMatches = getJapaneseSearchMatches(currentSearch);
  const counts = { all: 0 };

  // 各カテゴリーの件数を初期化
  categoryNames.forEach(cat => {
    counts[cat] = 0;
  });

  // 各メソッドをカウント（カテゴリー以外のフィルター条件を適用）
  Object.entries(methodData).forEach(([name, data]) => {
    const comps = data.components;

    // カテゴリー以外のフィルター条件をチェック
    const matchComponent = currentComponent === 'all' || comps.includes(currentComponent);
    const matchFavorites = !showFavoritesOnly || favorites.includes(name);
    const matchSearch = currentSearch === '' ||
      name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      jpMatches.includes(name);

    if (matchComponent && matchSearch && matchFavorites) {
      counts.all++;
      const cat = methodToCategory[name] || 'その他';
      if (counts[cat] !== undefined) {
        counts[cat]++;
      }
    }
  });

  // ボタンの件数表示を更新
  elements.categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.dataset.cat;
    const countSpan = btn.querySelector('.filter-count');
    if (countSpan) {
      countSpan.textContent = `(${counts[cat]})`;
    }
  });
}

function updateActiveFilters() {
  const tags = [];

  if (currentComponent !== 'all') {
    tags.push({ label: currentComponent, type: 'component' });
  }
  if (currentCategory !== 'all') {
    tags.push({ label: getCategoryName(currentCategory), type: 'category' });
  }
  if (showFavoritesOnly) {
    tags.push({ label: t('favorites'), type: 'favorites' });
  }
  if (currentSearch) {
    tags.push({ label: `"${currentSearch}"`, type: 'search' });
  }

  if (tags.length === 0) {
    elements.activeFilters.innerHTML = '<span class="no-filter-text">' + t('showingAll') + '</span>';
  } else {
    elements.activeFilters.innerHTML = tags.map(tag =>
      `<span class="active-filter-tag" data-type="${tag.type}">
        ${tag.label}
        <span class="material-icons" onclick="clearFilter('${tag.type}')">close</span>
      </span>`
    ).join('');
  }
}

function clearFilter(type) {
  switch (type) {
    case 'component':
      currentComponent = 'all';
      elements.componentFilters.querySelectorAll('.itemtype-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.comp === 'all');
      });
      break;
    case 'category':
      currentCategory = 'all';
      elements.categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === 'all');
      });
      break;
    case 'favorites':
      showFavoritesOnly = false;
      elements.favoritesToggle.classList.remove('active');
      break;
    case 'search':
      currentSearch = '';
      elements.searchInput.value = '';
      break;
  }
  applyFilters();
}

window.clearFilter = clearFilter;

// ===== 検索機能 =====
function initSearch() {
  elements.searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    applyFilters();
  });
}

// ===== ツールチップ機能 =====
function initTooltip() {
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.method-card');
    if (card && card.dataset.method && sampleCodes[card.dataset.method] && !e.target.closest('.favorite-btn')) {
      clearTimeout(tooltipTimeout);
      tooltipTimeout = setTimeout(() => {
        showTooltip(card.dataset.method, e.clientX, e.clientY);
      }, 300);
    } else {
      clearTimeout(tooltipTimeout);
      hideTooltip();
    }
  });
}

function showTooltip(methodName, x, y) {
  const sample = sampleCodes[methodName];
  if (!sample) return;

  elements.tooltipTitle.textContent = methodName;
  elements.tooltipCode.textContent = sample.code;

  elements.tooltip.style.left = '0px';
  elements.tooltip.style.top = '0px';
  elements.tooltip.classList.add('show');

  const tooltipWidth = elements.tooltip.offsetWidth;
  const tooltipHeight = elements.tooltip.offsetHeight;
  const margin = 15;

  let posX = x + margin;
  let posY = y + margin;

  if (posX + tooltipWidth > window.innerWidth) {
    posX = x - tooltipWidth - margin;
  }
  if (posX < 0) posX = margin;

  if (posY + tooltipHeight > window.innerHeight) {
    posY = y - tooltipHeight - margin;
  }
  if (posY < 0) posY = margin;

  elements.tooltip.style.left = posX + 'px';
  elements.tooltip.style.top = posY + 'px';
}

function hideTooltip() {
  elements.tooltip.classList.remove('show');
}

// ===== ポップアップ機能 =====
function initPopup() {
  // カードクリックでポップアップ表示
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.method-card');
    if (card && card.dataset.method && !e.target.closest('.favorite-btn')) {
      showPopup(card.dataset.method);
    }
  });

  // 関連メソッドクリック
  elements.popupRelated.addEventListener('click', (e) => {
    const item = e.target.closest('.popup-related-item');
    if (item && item.dataset.method) {
      showPopup(item.dataset.method);
    }
  });

  // 閉じるボタン
  elements.popupClose.onclick = hidePopup;

  // オーバーレイクリックで閉じる
  elements.popupOverlay.onclick = (e) => {
    if (e.target === elements.popupOverlay) hidePopup();
  };

  // コピーボタン
  elements.copyMethodBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    doCopy(currentMethod);
  };

  elements.copyCodeBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    doCopy(currentCode);
  };

  elements.shareUrlBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = new URL(window.location.href);
    url.searchParams.set('method', currentMethod);
    doCopy(url.toString());
  };
}

function showPopup(methodName) {
  hideTooltip();
  currentMethod = methodName;
  updateUrlParam(methodName);
  addToHistory(methodName);

  const sample = sampleCodes[methodName];
  const data = methodData[methodName];
  const category = methodToCategory[methodName] || 'その他';
  const categoryIcon = categoryIcons[category] || 'label';

  // カテゴリーアイコン
  elements.popupCategoryIcon.textContent = categoryIcon;

  // タイトル
  elements.popupTitle.textContent = methodName;

  // シグネチャ
  elements.popupSig.textContent = data ? data.sig : '';

  // サンプルコードインジケーター
  if (sample) {
    elements.popupHasCode.style.display = 'inline-flex';
  } else {
    elements.popupHasCode.style.display = 'none';
  }

  // 公式ドキュメントリンク
  if (data && data.docUrl) {
    elements.popupDocLink.href = data.docUrl;
    elements.popupDocLink.style.display = 'inline-flex';
  } else {
    elements.popupDocLink.style.display = 'none';
  }

  // 説明（用途要約 + 仕様説明）
  const jaDesc = sample ? sample.desc : (data ? data.desc : '説明なし');
  const desc = sample ? getSampleDesc(methodName, jaDesc) : getMethodDesc(methodName, jaDesc);
  const descParts = splitDescription(desc);
  elements.popupPurpose.textContent = descParts.purpose;
  elements.popupDetail.textContent = descParts.detail;

  // 警告・注意点
  const warning = methodWarnings[methodName];
  if (warning) {
    const iconName = warning.type === 'warning' ? 'warning' : (warning.type === 'info' ? 'info' : 'lightbulb');
    elements.popupWarning.innerHTML = `
      <span class="material-icons">${iconName}</span>
      <span class="popup-warning-text">${warning.message}</span>
    `;
    elements.popupWarning.className = `popup-warning ${warning.type}`;
    elements.popupWarning.style.display = 'flex';
  } else {
    elements.popupWarning.style.display = 'none';
  }

  // 引数詳細
  const args = argumentDetails[methodName];
  if (args && Object.keys(args).length > 0) {
    elements.popupArgs.innerHTML = Object.entries(args).map(([argName, argData]) => `
      <div class="popup-arg">
        <div class="popup-arg-header">
          <span class="popup-arg-name">${argName}</span>
          <span class="popup-arg-type">${argData.type}</span>
          ${argData.default ? `<span class="popup-arg-default">= ${argData.default}</span>` : ''}
        </div>
        <div class="popup-arg-desc">${argData.desc}</div>
        ${argData.note ? `<div class="popup-arg-desc" style="font-style:italic">${argData.note}</div>` : ''}
        <code class="popup-arg-example">${argData.example}</code>
      </div>
    `).join('');
    elements.popupArgsSection.style.display = 'block';
  } else {
    elements.popupArgsSection.style.display = 'none';
  }

  // 関連メソッド（補足説明付き）
  const related = relatedMethods[methodName];
  if (related && related.length > 0) {
    elements.popupRelated.innerHTML = related.map(m => {
      const relatedData = methodData[m];
      const jaDesc = relatedData ? relatedData.desc : '';
      const shortDesc = relatedData ? getShortDesc(getMethodDesc(m, jaDesc)) : '';
      return `
        <div class="popup-related-item" data-method="${m}">
          <span class="popup-related-name">${m}</span>
          <span class="popup-related-desc">${shortDesc}</span>
        </div>
      `;
    }).join('');
    elements.popupRelatedSection.style.display = 'block';
  } else {
    elements.popupRelatedSection.style.display = 'none';
  }

  // サンプルコード
  currentCode = sample ? sample.code : `myItem.${methodName}();`;
  elements.popupCode.innerHTML = highlightCode(currentCode);

  // 関連知識（トピック）
  updatePopupKnowledge(methodName);

  elements.popupOverlay.classList.add('show');
}

function hidePopup() {
  elements.popupOverlay.classList.remove('show');
  updateUrlParam(null);
}

// ===== お気に入り機能 =====
function initFavorites() {
  updateFavoritesCount();

  elements.favoritesToggle.addEventListener('click', () => {
    showFavoritesOnly = !showFavoritesOnly;
    elements.favoritesToggle.classList.toggle('active', showFavoritesOnly);
    applyFilters();
  });
}

function toggleFavorite(event, methodName) {
  event.preventDefault();
  event.stopPropagation();

  const index = favorites.indexOf(methodName);
  if (index === -1) {
    favorites.push(methodName);
  } else {
    favorites.splice(index, 1);
  }

  saveFavorites();
  updateFavoritesCount();
  updateFavoriteButtons();

  if (showFavoritesOnly) {
    applyFilters();
  }
}

function updateFavoritesCount() {
  elements.favoritesCount.textContent = favorites.length;
}

function updateFavoriteButtons() {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const methodName = btn.dataset.method;
    const isFavorite = favorites.includes(methodName);
    btn.classList.toggle('active', isFavorite);
    btn.querySelector('.material-icons').textContent = isFavorite ? 'bookmark' : 'bookmark_border';
  });
}

// グローバル関数として公開
window.toggleFavorite = toggleFavorite;

// ===== マトリクス表示 =====
function initMatrix() {
  elements.matrixToggle.addEventListener('click', () => {
    generateMatrix();
    elements.matrixOverlay.classList.add('show');
  });

  elements.matrixClose.addEventListener('click', () => {
    elements.matrixOverlay.classList.remove('show');
  });

  elements.matrixOverlay.addEventListener('click', (e) => {
    if (e.target === elements.matrixOverlay) {
      elements.matrixOverlay.classList.remove('show');
    }
  });
}

function generateMatrix() {
  const methodNames = Object.keys(methodData).sort();

  let html = '';
  methodNames.forEach(name => {
    const data = methodData[name];
    html += '<tr>';
    html += `<td>${name}</td>`;
    components.forEach(comp => {
      const supported = data.components.includes(comp);
      html += `<td class="${supported ? 'supported' : 'not-supported'}">${supported ? '●' : '-'}</td>`;
    });
    html += '</tr>';
  });

  elements.matrixTableBody.innerHTML = html;
}

// ===== URL パラメータ機能 =====
function initUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const methodParam = params.get('method');

  if (methodParam && methodData[methodParam]) {
    // 少し遅延させてDOMが準備完了してから開く
    setTimeout(() => {
      showPopup(methodParam);
    }, 100);
  }
}

function updateUrlParam(methodName) {
  const url = new URL(window.location.href);
  if (methodName) {
    url.searchParams.set('method', methodName);
  } else {
    url.searchParams.delete('method');
  }
  window.history.replaceState({}, '', url);
}

// ===== ソート機能 =====
function initSort() {
  elements.sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    sortAndRenderGrid();
  });
}

function sortAndRenderGrid() {
  const entries = Object.entries(methodData);

  entries.sort((a, b) => {
    const [nameA] = a;
    const [nameB] = b;
    const catA = methodToCategory[nameA] || 'その他';
    const catB = methodToCategory[nameB] || 'その他';

    switch (currentSort) {
      case 'name-asc':
        return nameA.localeCompare(nameB);
      case 'name-desc':
        return nameB.localeCompare(nameA);
      case 'category':
        return catA.localeCompare(catB) || nameA.localeCompare(nameB);
      default:
        return 0;
    }
  });

  elements.methodGrid.innerHTML = entries
    .map(([name, data]) => createMethodCard(name, data))
    .join('');

  applyFilters();
}

// ===== よく使うメソッド =====
function initFrequentMethods() {
  elements.frequentMethods.innerHTML = frequentMethods.map(name => `
    <span class="frequent-chip" data-method="${name}">${name}</span>
  `).join('');

  elements.frequentMethods.addEventListener('click', (e) => {
    const chip = e.target.closest('.frequent-chip');
    if (chip && chip.dataset.method) {
      showPopup(chip.dataset.method);
    }
  });
}

// ===== 履歴機能 =====
const MAX_HISTORY = 10;

function initHistory() {
  renderHistory();

  elements.historyClear.addEventListener('click', () => {
    viewHistory = [];
    saveHistory();
    renderHistory();
  });

  elements.historyMethods.addEventListener('click', (e) => {
    const chip = e.target.closest('.history-chip');
    if (chip && chip.dataset.method) {
      showPopup(chip.dataset.method);
    }
  });
}

function addToHistory(methodName) {
  // 既存の履歴から削除（重複防止）
  const index = viewHistory.indexOf(methodName);
  if (index !== -1) {
    viewHistory.splice(index, 1);
  }

  // 先頭に追加
  viewHistory.unshift(methodName);

  // 最大数を超えたら古いものを削除
  if (viewHistory.length > MAX_HISTORY) {
    viewHistory = viewHistory.slice(0, MAX_HISTORY);
  }

  saveHistory();
  renderHistory();
}

function saveHistory() {
  localStorage.setItem(`${STORAGE_PREFIX}_history`, JSON.stringify(viewHistory));
}

function renderHistory() {
  if (viewHistory.length === 0) {
    elements.historySection.style.display = 'none';
    return;
  }

  elements.historySection.style.display = 'block';
  elements.historyMethods.innerHTML = viewHistory.map(name => `
    <span class="history-chip" data-method="${name}">${name}</span>
  `).join('');
}

// ===== トピック機能 =====
function initTopics() {
  // フッターのトピックチップを生成
  renderTopicChips();

  // トピックチップクリックでモーダル表示
  elements.topicsChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.topic-chip');
    if (chip && chip.dataset.topic) {
      showTopicModal(chip.dataset.topic);
    }
  });

  // ポップアップ内の関連知識トグル
  elements.popupKnowledgeToggle.addEventListener('click', () => {
    elements.popupKnowledgeSection.classList.toggle('expanded');
  });

  // ポップアップ内のトピックリンククリック
  elements.popupKnowledgeContent.addEventListener('click', (e) => {
    const link = e.target.closest('.popup-knowledge-link');
    if (link && link.dataset.topic) {
      showTopicModal(link.dataset.topic);
    }
  });

  // トピックモーダルのクローズ
  elements.topicModalClose.addEventListener('click', hideTopicModal);
  elements.topicModalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.topicModalOverlay) hideTopicModal();
  });

  // トピックモーダル内の関連メソッドクリック
  elements.topicModalMethods.addEventListener('click', (e) => {
    const chip = e.target.closest('.topic-method-chip');
    if (chip && chip.dataset.method) {
      hideTopicModal();
      showPopup(chip.dataset.method);
    }
  });
}

function renderTopicChips() {
  const topicIds = Object.keys(topics);
  elements.topicsChips.innerHTML = topicIds.map(id => {
    const topic = getTopicData(id);
    return `
    <button class="topic-chip" data-topic="${topic.id}">
      <span class="material-icons">${topic.icon}</span>
      <span class="topic-chip-title">${topic.title}</span>
      <span class="topic-chip-summary">${topic.summary}</span>
    </button>
  `;
  }).join('');
}

function showTopicModal(topicId) {
  const topic = getTopicData(topicId);
  if (!topic) return;

  elements.topicModalIcon.textContent = topic.icon;
  elements.topicModalTitleText.textContent = topic.title;
  elements.topicModalBody.innerHTML = renderMarkdown(topic.content);
  elements.topicModalMethods.innerHTML = topic.relatedMethods.map(m => `
    <span class="topic-method-chip" data-method="${m}">${m}</span>
  `).join('');

  elements.topicModalOverlay.classList.add('show');
}

function hideTopicModal() {
  elements.topicModalOverlay.classList.remove('show');
}

function updatePopupKnowledge(methodName) {
  const topicIds = methodToTopics[methodName];

  if (!topicIds || topicIds.length === 0) {
    elements.popupKnowledgeSection.style.display = 'none';
    return;
  }

  elements.popupKnowledgeSection.style.display = 'block';
  elements.popupKnowledgeSection.classList.remove('expanded');

  elements.popupKnowledgeContent.innerHTML = topicIds.map(topicId => {
    const topic = getTopicData(topicId);
    if (!topic) return '';
    return `
      <div class="popup-knowledge-link" data-topic="${topicId}">
        <span class="material-icons">${topic.icon}</span>
        <div class="popup-knowledge-info">
          <span class="popup-knowledge-title">${topic.title}</span>
          <span class="popup-knowledge-summary">${topic.summary}</span>
        </div>
        <span class="material-icons popup-knowledge-arrow-right">chevron_right</span>
      </div>
    `;
  }).join('');
}

// 注: renderMarkdownは shared/core.js から読み込んでいます

// ===== キーボードショートカット =====
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Escキーでポップアップ/マトリクス/トピックモーダルを閉じる
    if (e.key === 'Escape') {
      hidePopup();
      hideTopicModal();
      elements.matrixOverlay.classList.remove('show');
    }

    // / キーで検索にフォーカス（入力欄以外で）
    if (e.key === '/' && !isInputFocused()) {
      e.preventDefault();
      elements.searchInput.focus();
    }

    // Ctrl+D でダークモード切替
    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault();
      elements.themeToggle.click();
    }

    // Ctrl+M でマトリクス表示
    if (e.ctrlKey && e.key === 'm') {
      e.preventDefault();
      elements.matrixToggle.click();
    }

    // Ctrl+R でフィルターリセット（ブラウザのリロードを防ぐ）
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault();
      resetFilters();
    }
  });
}

// ===== コピー機能 =====
// 注: isInputFocused, splitDescription, getShortDesc, highlightCode は
// shared/core.js から読み込んでいます
function doCopy(text) {
  // モダンなClipboard APIを試す
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopySuccess();
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.cssText = 'position:fixed;left:-9999px;top:0;';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (e) {
    // コピー失敗
  }

  document.body.removeChild(textarea);

  if (success) {
    showCopySuccess();
  } else {
    alert('コピーに失敗しました。手動でコピーしてください。');
  }
}

function showCopySuccess() {
  elements.copySuccess.classList.add('show');
  setTimeout(() => {
    elements.copySuccess.classList.remove('show');
  }, 2000);
}

// ===== クリックパーティクル =====
// 共通コアのinitClickParticlesを使用
window.HSDictionary.initClickParticles();

// ===== アプリケーション起動 =====
document.addEventListener('DOMContentLoaded', async () => {
  // JSONファイルからデータを読み込み（相対パスを指定）
  const loaded = await loadAllData(DATA_BASE_PATH);
  if (loaded) {
    init();
  } else {
    // エラー表示
    document.body.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: sans-serif;">
        <h1>データの読み込みに失敗しました</h1>
        <p>HTTPサーバー経由でアクセスしてください。</p>
        <p style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
          <strong>起動方法:</strong><br>
          <code>start-server.bat</code> を実行して<br>
          <a href="http://localhost:8000/">http://localhost:8000/</a> にアクセス
        </p>
      </div>
    `;
  }
});
