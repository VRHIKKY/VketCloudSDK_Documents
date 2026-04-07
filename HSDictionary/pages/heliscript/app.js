/**
 * HeliScript API リファレンス - アプリケーションロジック
 *
 * 機能:
 * - クラスフィルター（Player / Component / Layer）
 * - カテゴリーフィルター
 * - 検索機能
 * - お気に入り機能
 * - ダークモード切替
 * - ポップアップ表示
 * - キーボードショートカット
 */

// データパス
const DATA_BASE_PATH = '../../data/hs/';

// LocalStorage名前空間
const STORAGE_PREFIX = 'hsdictionary_heliscript';

// 共通コアからユーティリティを取得
const { highlightCode, splitDescription, getShortDesc, isInputFocused } = window.HSDictionary;

// ===== 状態管理 =====
let currentClass = 'all';
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'name-asc';
let currentMethod = '';
let currentCode = '';
let tooltipTimeout = null;
let showFavoritesOnly = false;
let viewHistory = [];
let currentLanguage = 'ja';

// ===== DOM要素の参照 =====
const elements = {};

// ===== 初期化 =====
function init() {
  // DOM要素を取得
  elements.classFilters = document.getElementById('class-filters');
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
  elements.popupHasCode = document.getElementById('popup-has-code');
  elements.popupArgs = document.getElementById('popup-args');
  elements.popupArgsSection = document.getElementById('popup-args-section');
  elements.popupRelated = document.getElementById('popup-related');
  elements.popupRelatedSection = document.getElementById('popup-related-section');
  elements.popupCode = document.getElementById('popup-code');
  elements.popupCodeSection = document.getElementById('popup-code-section');
  elements.popupClose = document.getElementById('popup-close');
  elements.popupFavorite = document.getElementById('popup-favorite');
  elements.copyMethodBtn = document.getElementById('copy-method');
  elements.copyCodeBtn = document.getElementById('copy-code');
  elements.shareUrlBtn = document.getElementById('share-url');
  elements.copySuccess = document.getElementById('copy-success');
  elements.themeToggle = document.getElementById('theme-toggle');
  elements.favoritesToggle = document.getElementById('favorites-toggle');
  elements.favoritesCount = document.getElementById('favorites-count');
  elements.sortSelect = document.getElementById('sort-select');
  elements.activeFilters = document.getElementById('active-filters');
  elements.historySection = document.getElementById('history-section');
  elements.historyMethods = document.getElementById('history-methods');
  elements.historyClear = document.getElementById('history-clear');
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
  initHistory();
  initSort();
  initUrlParams();
  initKeyboardShortcuts();

  // 初期フィルター適用
  applyFilters();
}

// ===== 設定の保存・読み込み =====
function loadSettings() {
  const savedFavorites = localStorage.getItem(`${STORAGE_PREFIX}_favorites`);
  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  }

  const savedTheme = localStorage.getItem('hsdictionary_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  const savedHistory = localStorage.getItem(`${STORAGE_PREFIX}_history`);
  if (savedHistory) {
    viewHistory = JSON.parse(savedHistory);
  }

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
  applyLanguage(currentLanguage);
  updateLangLabel();

  elements.langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
    applyLanguage(currentLanguage);
    updateLangLabel();
    saveLanguage(currentLanguage);
    initGrid();
    applyFilters();
  });
}

function updateLangLabel() {
  elements.langLabel.textContent = currentLanguage === 'ja' ? 'JP' : 'EN';
}

function applyLanguage(lang) {
  const translations = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key]) {
      el.placeholder = translations[key];
    }
  });

  updateFilterTexts();
}

function updateFilterTexts() {
  const allClassBtn = elements.classFilters?.querySelector('[data-class="all"] .tab-text');
  if (allClassBtn) {
    allClassBtn.textContent = t('all');
  }

  const allCatBtn = elements.categoryFilters?.querySelector('[data-cat="all"] .cat-text');
  if (allCatBtn) {
    allCatBtn.textContent = t('all');
  }
}

function t(key) {
  return i18n[currentLanguage]?.[key] || key;
}

function getCategoryName(categoryId) {
  return categoryTranslations[currentLanguage]?.[categoryId] || categoryId;
}

function getMethodDesc(methodName, data) {
  if (currentLanguage === 'en' && data.descEn) {
    return data.descEn;
  }
  return data.desc || '';
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
  // クラスタブを生成
  elements.classFilters.innerHTML =
    `<button class="itemtype-tab active" data-class="all"><span class="tab-text">${t('all')}</span></button>` +
    classNames.map(c => {
      const displayName = classDescriptions[c]?.name || c;
      return `<button class="itemtype-tab" data-class="${c}">${displayName}</button>`;
    }).join('');

  // カテゴリーフィルターを生成
  updateCategoryFilters();

  // クラスタブのイベント
  elements.classFilters.addEventListener('click', (e) => {
    const tab = e.target.closest('.itemtype-tab');
    if (tab) {
      elements.classFilters.querySelectorAll('.itemtype-tab').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      currentClass = tab.dataset.class;
      currentCategory = 'all'; // カテゴリーをリセット
      updateCategoryFilters();
      applyFilters();
    }
  });

  // カテゴリーフィルターのイベント
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

function updateCategoryFilters() {
  // 現在のクラスに関連するカテゴリーのみ表示
  let filteredCategories = [];

  if (currentClass === 'all') {
    filteredCategories = categoryNames;
  } else {
    filteredCategories = categoryNames.filter(cat => cat.startsWith(currentClass + '_'));
  }

  elements.categoryFilters.innerHTML =
    `<button class="filter-btn active" data-cat="all"><span class="material-icons">apps</span><span class="cat-text">${t('all')}</span> <span class="filter-count"></span></button>` +
    filteredCategories.map(c => {
      const icon = categoryIcons[c] || 'label';
      const name = getCategoryName(c);
      return `<button class="filter-btn" data-cat="${c}"><span class="material-icons">${icon}</span><span class="cat-text">${name}</span> <span class="filter-count"></span></button>`;
    }).join('');
}

function resetFilters() {
  currentClass = 'all';
  currentCategory = 'all';
  currentSearch = '';
  showFavoritesOnly = false;

  elements.classFilters.querySelectorAll('.itemtype-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.class === 'all');
  });

  updateCategoryFilters();
  elements.searchInput.value = '';
  elements.favoritesToggle.classList.remove('active');
  applyFilters();
}

function initResetButton() {
  elements.resetBtn = document.getElementById('reset-filters');
  if (elements.resetBtn) {
    elements.resetBtn.addEventListener('click', resetFilters);
  }
}

window.resetFilters = resetFilters;

// ===== グリッド生成 =====
function createMethodCard(name, data) {
  const category = methodToCategory[name] || 'unknown';
  const categoryIcon = categoryIcons[category] || 'label';
  const isFavorite = favorites.includes(name);
  const desc = getMethodDesc(name, data);
  const categoryDisplay = getCategoryName(category);
  const className = methodToClass[name] || '';
  const methodType = data.methodType || 'method';

  // シグネチャを取得（配列の場合は最初のものを使用）
  const sig = Array.isArray(data.sig) ? data.sig[0] : data.sig;

  return `<div class="method-card"
    data-name="${name.toLowerCase()}"
    data-method="${name}"
    data-class="${className}"
    data-category="${category}"
    data-type="${methodType}">
    <div class="method-title-row">
      <span class="method-category-icon material-icons">${categoryIcon}</span>
      <div class="method-name">${name}</div>
      <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-method="${name}" onclick="toggleFavorite(event, '${name}')">
        <span class="material-icons">${isFavorite ? 'bookmark' : 'bookmark_border'}</span>
      </button>
    </div>
    <div class="method-sig">${sig}</div>
    <div class="method-desc">${desc}</div>
    <div class="method-card-footer">
      <div class="method-meta">
        <span class="method-category"><span class="material-icons">${categoryIcon}</span>${categoryDisplay}</span>
        <span class="method-components">${className}</span>
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

  cards.forEach(card => {
    const name = card.dataset.name;
    const methodName = card.dataset.method;
    const className = card.dataset.class;
    const cat = card.dataset.category;

    const matchClass = currentClass === 'all' || className === currentClass;
    const matchCategory = currentCategory === 'all' || cat === currentCategory;
    const matchFavorites = !showFavoritesOnly || favorites.includes(methodName);

    // 検索マッチング
    const data = methodData[methodName];
    const desc = data ? (getMethodDesc(methodName, data) || '').toLowerCase() : '';
    const matchSearch = currentSearch === '' ||
      name.includes(currentSearch.toLowerCase()) ||
      desc.includes(currentSearch.toLowerCase());

    if (matchClass && matchCategory && matchSearch && matchFavorites) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  updateStats(visibleCount);
}

function updateStats(visibleCount) {
  if (visibleCount === 0) {
    elements.noResults.style.display = 'block';
    elements.stats.textContent = '0 ' + t('results');
  } else {
    elements.noResults.style.display = 'none';
    elements.stats.textContent = visibleCount + ' ' + t('results');
  }

  updateActiveFilters();
  updateCategoryCounts();
}

function updateCategoryCounts() {
  const counts = { all: 0 };

  // 現在表示中のカテゴリーの件数を初期化
  elements.categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.dataset.cat;
    counts[cat] = 0;
  });

  // 各メソッドをカウント
  Object.entries(methodData).forEach(([name, data]) => {
    const className = methodToClass[name];
    const matchClass = currentClass === 'all' || className === currentClass;
    const matchFavorites = !showFavoritesOnly || favorites.includes(name);

    const desc = (getMethodDesc(name, data) || '').toLowerCase();
    const matchSearch = currentSearch === '' ||
      name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      desc.includes(currentSearch.toLowerCase());

    if (matchClass && matchSearch && matchFavorites) {
      counts.all++;
      const cat = methodToCategory[name];
      if (counts[cat] !== undefined) {
        counts[cat]++;
      }
    }
  });

  elements.categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.dataset.cat;
    const countSpan = btn.querySelector('.filter-count');
    if (countSpan) {
      countSpan.textContent = `(${counts[cat] || 0})`;
    }
  });
}

function updateActiveFilters() {
  const tags = [];

  if (currentClass !== 'all') {
    const className = classDescriptions[currentClass]?.name || currentClass;
    tags.push({ label: className, type: 'class' });
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
    case 'class':
      currentClass = 'all';
      elements.classFilters.querySelectorAll('.itemtype-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.class === 'all');
      });
      updateCategoryFilters();
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
    if (card && card.dataset.method && !e.target.closest('.favorite-btn')) {
      const data = methodData[card.dataset.method];
      if (data && data.sample) {
        clearTimeout(tooltipTimeout);
        tooltipTimeout = setTimeout(() => {
          showTooltip(card.dataset.method, e.clientX, e.clientY);
        }, 300);
      } else {
        clearTimeout(tooltipTimeout);
        hideTooltip();
      }
    } else {
      clearTimeout(tooltipTimeout);
      hideTooltip();
    }
  });
}

function showTooltip(methodName, x, y) {
  const data = methodData[methodName];
  if (!data || !data.sample) return;

  elements.tooltipTitle.textContent = methodName;
  elements.tooltipCode.textContent = data.sample;

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
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.method-card');
    if (card && card.dataset.method && !e.target.closest('.favorite-btn')) {
      showPopup(card.dataset.method);
    }
  });

  elements.popupRelated.addEventListener('click', (e) => {
    const item = e.target.closest('.popup-related-item');
    if (item && item.dataset.method) {
      showPopup(item.dataset.method);
    }
  });

  elements.popupClose.onclick = hidePopup;

  elements.popupOverlay.onclick = (e) => {
    if (e.target === elements.popupOverlay) hidePopup();
  };

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

  const data = methodData[methodName];
  if (!data) return;

  const category = methodToCategory[methodName] || 'unknown';
  const categoryIcon = categoryIcons[category] || 'label';

  elements.popupCategoryIcon.textContent = categoryIcon;
  elements.popupTitle.textContent = methodName;

  // シグネチャ（複数ある場合はすべて表示）
  const sigs = Array.isArray(data.sig) ? data.sig : [data.sig];
  elements.popupSig.innerHTML = sigs.map(s => `<div>${s}</div>`).join('');

  // サンプルコードインジケーター
  if (data.sample) {
    elements.popupHasCode.style.display = 'inline-flex';
  } else {
    elements.popupHasCode.style.display = 'none';
  }

  // 公式ドキュメントリンク
  if (data.docUrl) {
    // ドキュメントURLのベースを設定
    const baseDocUrl = 'https://vrhikky.github.io/VketCloudSDK_Documents/latest/';
    elements.popupDocLink.href = baseDocUrl + data.docUrl;
    elements.popupDocLink.style.display = 'inline-flex';
  } else {
    elements.popupDocLink.style.display = 'none';
  }

  // 説明
  const desc = getMethodDesc(methodName, data);
  const descParts = splitDescription(desc);
  elements.popupPurpose.textContent = descParts.purpose;
  elements.popupDetail.textContent = descParts.detail;

  // 引数詳細
  if (data.params && data.params.length > 0) {
    elements.popupArgs.innerHTML = data.params.map(p => `
      <div class="popup-arg">
        <div class="popup-arg-header">
          <span class="popup-arg-name">${p.name}</span>
          <span class="popup-arg-type">${p.type}</span>
        </div>
        <div class="popup-arg-desc">${p.desc || ''}</div>
      </div>
    `).join('');
    elements.popupArgsSection.style.display = 'block';
  } else {
    elements.popupArgsSection.style.display = 'none';
  }

  // 関連メソッド
  const related = relatedMethods[methodName];
  if (related && related.length > 0) {
    elements.popupRelated.innerHTML = related.map(m => {
      const relatedData = methodData[m];
      const shortDesc = relatedData ? getShortDesc(getMethodDesc(m, relatedData)) : '';
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
  if (data.sample) {
    currentCode = data.sample;
    elements.popupCode.innerHTML = highlightCode(currentCode);
    elements.popupCodeSection.style.display = 'block';
  } else {
    // サンプルがない場合はシンプルな呼び出し例を生成
    const sig = Array.isArray(data.sig) ? data.sig[0] : data.sig;
    currentCode = `// ${methodName} の使用例\n${sig}`;
    elements.popupCode.innerHTML = highlightCode(currentCode);
    elements.popupCodeSection.style.display = 'block';
  }

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

window.toggleFavorite = toggleFavorite;

// ===== URL パラメータ機能 =====
function initUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const methodParam = params.get('method');

  if (methodParam && methodData[methodParam]) {
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
    const catA = methodToCategory[nameA] || 'zzz';
    const catB = methodToCategory[nameB] || 'zzz';

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
  const index = viewHistory.indexOf(methodName);
  if (index !== -1) {
    viewHistory.splice(index, 1);
  }

  viewHistory.unshift(methodName);

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

// ===== キーボードショートカット =====
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hidePopup();
    }

    if (e.key === '/' && !isInputFocused()) {
      e.preventDefault();
      elements.searchInput.focus();
    }

    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault();
      elements.themeToggle.click();
    }

    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault();
      resetFilters();
    }
  });
}

// ===== コピー機能 =====
function doCopy(text) {
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
window.HSDictionary.initClickParticles();

// ===== アプリケーション起動 =====
document.addEventListener('DOMContentLoaded', async () => {
  const loaded = await loadAllData(DATA_BASE_PATH);
  if (loaded) {
    init();
  } else {
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
