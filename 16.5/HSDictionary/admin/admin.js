/**
 * VKC メソッドリファレンス - 管理画面
 */

// ===== グローバル状態 =====
const state = {
  data: null,
  originalData: null,
  currentSection: 'itemtypes',
  changes: new Set(),
  iconPickerCallback: null,
  isSaving: false
};

// よく使うMaterial Icons
const COMMON_ICONS = [
  'code', 'settings', 'visibility', 'play_circle', 'pause_circle',
  'info', 'warning', 'error', 'help', 'lightbulb',
  'category', 'widgets', 'extension', 'build', 'tune',
  'add_circle', 'remove_circle', 'check_circle', 'cancel',
  'open_with', 'swap_horiz', 'swap_vert', 'sync', 'refresh',
  'volume_up', 'volume_off', 'music_note', 'videocam',
  'image', 'photo_camera', 'palette', 'brush', 'texture',
  'public', 'language', 'translate', 'school', 'menu_book',
  'person', 'group', 'sports_soccer', 'emoji_events',
  'timer', 'schedule', 'event', 'date_range',
  'layers', 'view_in_ar', '3d_rotation', 'filter_hdr',
  'location_on', 'explore', 'map', 'near_me',
  'flash_on', 'highlight', 'wb_sunny', 'nightlight',
  'speed', 'trending_up', 'show_chart', 'analytics',
  'lock', 'lock_open', 'security', 'verified_user',
  'link', 'link_off', 'attachment', 'cloud',
  'folder', 'description', 'article', 'note',
  'bug_report', 'developer_mode', 'terminal', 'data_object'
];

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', init);

async function init() {
  setupEventListeners();
  await loadData();
}

function setupEventListeners() {
  // ナビゲーション
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchSection(item.dataset.section));
  });

  // 保存ボタン
  document.getElementById('save-all-btn').addEventListener('click', saveAllChanges);

  // 追加ボタン
  document.getElementById('add-itemtype').addEventListener('click', () => openAddItemTypeModal());
  document.getElementById('add-category').addEventListener('click', () => openAddCategoryModal());
  document.getElementById('add-method').addEventListener('click', () => openAddMethodModal());
  document.getElementById('add-topic').addEventListener('click', () => openAddTopicModal());

  // メソッド検索
  document.getElementById('method-search').addEventListener('input', (e) => {
    const categoryFilter = getDropdownValue('method-category-filter');
    renderMethodList(e.target.value, categoryFilter);
  });

  // カスタムドロップダウンの初期化
  setupCustomDropdown('method-category-filter', (value) => {
    const searchQuery = document.getElementById('method-search').value;
    renderMethodList(searchQuery, value);
  });

  // ドロップダウン外クリックで閉じる
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.custom-dropdown.open').forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  // モーダル
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-save').addEventListener('click', handleModalSave);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // アイコンピッカー
  document.getElementById('icon-picker-close').addEventListener('click', closeIconPicker);
  document.getElementById('icon-picker-cancel').addEventListener('click', closeIconPicker);
  document.getElementById('icon-picker-select').addEventListener('click', selectIcon);
  document.getElementById('icon-picker-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeIconPicker();
  });
  document.getElementById('icon-search').addEventListener('input', filterIcons);

  // 削除確認
  document.getElementById('delete-confirm-close').addEventListener('click', closeDeleteConfirm);
  document.getElementById('delete-confirm-cancel').addEventListener('click', closeDeleteConfirm);
  document.getElementById('delete-confirm-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeDeleteConfirm();
  });

  // キーボードショートカット
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeIconPicker();
      closeDeleteConfirm();
    }
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      if (state.changes.size > 0) saveAllChanges();
    }
  });

  // アクションボタンのイベント委譲（XSS対策）
  document.addEventListener('click', handleActionClick);

  // 未保存変更の警告
  window.addEventListener('beforeunload', (e) => {
    if (state.changes.size > 0) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}

// アクションボタンのクリックハンドラ（イベント委譲）
function handleActionClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const name = btn.dataset.name;

  switch (action) {
    case 'delete-itemtype':
      deleteItemType(name);
      break;
    case 'edit-category':
      openEditCategoryModal(name);
      break;
    case 'delete-category':
      deleteCategory(name);
      break;
    case 'edit-method':
      openEditMethodModal(name);
      break;
    case 'delete-method':
      deleteMethod(name);
      break;
    case 'edit-topic':
      openEditTopicModal(name);
      break;
    case 'delete-topic':
      deleteTopic(name);
      break;
    case 'open-icon-picker':
      openIconPicker(btn.dataset.target);
      break;
    case 'add-argument':
      addArgumentField();
      break;
    case 'remove-argument':
      removeArgumentField(btn);
      break;
    case 'remove-tag':
      removeTag(btn);
      break;
  }
}

// ===== データ読み込み =====
async function loadData() {
  const loadingEl = document.getElementById('loading');
  let helpTimeoutId = null;

  // 3秒後にヘルプリンクを表示
  helpTimeoutId = setTimeout(() => {
    const helpLink = document.createElement('div');
    helpLink.className = 'loading-help';
    helpLink.innerHTML = `
      <a href="#" id="loading-help-link">
        <span class="material-icons">help_outline</span>
        読み込みが終わらない場合
      </a>
    `;
    loadingEl.appendChild(helpLink);

    document.getElementById('loading-help-link').addEventListener('click', (e) => {
      e.preventDefault();
      showLoadingHelp();
    });
  }, 3000);

  try {
    const response = await fetch('/api/data');

    // タイムアウトをクリア
    if (helpTimeoutId) clearTimeout(helpTimeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || '不明なエラー');
    }

    state.data = result.data;
    state.originalData = JSON.parse(JSON.stringify(result.data));

    loadingEl.style.display = 'none';
    switchSection('itemtypes');
    updateStatus('準備完了', 'success');
  } catch (error) {
    // タイムアウトをクリア
    if (helpTimeoutId) clearTimeout(helpTimeoutId);

    loadingEl.innerHTML = `
      <span class="material-icons" style="color: var(--danger-color);">error</span>
      <p>データの読み込みに失敗しました</p>
      <p style="font-size: 0.85rem; color: var(--text-muted);">${escapeHtml(error.message)}</p>
      <div class="loading-help-content" style="margin-top: 16px;">
        <p style="font-weight: 500; margin-bottom: 8px;">ローカルサーバーを起動していますか？</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">
          管理画面を使用するには、まずサーバーを起動してください:
        </p>
        <div style="background: var(--bg-tertiary); padding: 12px; border-radius: 6px; margin-top: 8px; font-family: monospace; font-size: 0.85rem;">
          <strong>Windows:</strong> start-server.bat をダブルクリック<br>
          <strong>または:</strong> python scripts/server.py
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 12px;">
          サーバー起動後、<a href="http://localhost:8000/admin.html" style="color: var(--accent-color);">http://localhost:8000/admin.html</a> にアクセスしてください。
        </p>
      </div>
    `;
    updateStatus('読み込みエラー', 'error');
  }
}

// ローディングヘルプを表示
function showLoadingHelp() {
  const loadingEl = document.getElementById('loading');
  const existingHelp = loadingEl.querySelector('.loading-help');
  if (existingHelp) existingHelp.remove();

  const helpContent = document.createElement('div');
  helpContent.className = 'loading-help-content';
  helpContent.innerHTML = `
    <p style="font-weight: 500; margin-bottom: 8px;">ローカルサーバーを起動していますか？</p>
    <p style="font-size: 0.85rem; color: var(--text-muted);">
      管理画面を使用するには、まずサーバーを起動してください:
    </p>
    <div style="background: var(--bg-tertiary); padding: 12px; border-radius: 6px; margin-top: 8px; font-family: monospace; font-size: 0.85rem;">
      <strong>Windows:</strong> start-server.bat をダブルクリック<br>
      <strong>または:</strong> python scripts/server.py
    </div>
    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 12px;">
      サーバー起動後、<a href="http://localhost:8000/admin.html" style="color: var(--accent-color);">http://localhost:8000/admin.html</a> にアクセスしてください。
    </p>
  `;
  loadingEl.appendChild(helpContent);
}

// ===== セクション切り替え =====
function switchSection(section) {
  state.currentSection = section;

  // ナビゲーション更新
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });

  // セクション表示切り替え
  document.querySelectorAll('.admin-section').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(`section-${section}`).style.display = 'block';

  // コンテンツ描画
  switch (section) {
    case 'itemtypes':
      renderItemTypeList();
      break;
    case 'categories':
      renderCategoryList();
      break;
    case 'methods':
      populateCategoryFilter();
      renderMethodList();
      break;
    case 'topics':
      renderTopicList();
      break;
  }
}

// カテゴリーフィルターのオプションを更新
function populateCategoryFilter() {
  const dropdown = document.getElementById('method-category-filter');
  const menu = dropdown.querySelector('.dropdown-menu');
  const categories = state.data.categories?.categories || {};
  const icons = state.data.categories?.icons || {};
  const currentValue = getDropdownValue('method-category-filter');

  // メニューをクリア
  menu.innerHTML = '';

  // 「すべて」オプションを追加
  const allItem = document.createElement('div');
  allItem.className = 'dropdown-item' + (currentValue === '' ? ' selected' : '');
  allItem.dataset.value = '';
  allItem.innerHTML = '<span class="material-icons dropdown-item-icon">filter_list</span><span class="dropdown-item-text">すべてのカテゴリー</span>';
  menu.appendChild(allItem);

  // カテゴリーオプションを追加
  Object.keys(categories).sort().forEach(cat => {
    const item = document.createElement('div');
    item.className = 'dropdown-item' + (cat === currentValue ? ' selected' : '');
    item.dataset.value = cat;
    const icon = icons[cat] || 'code';
    item.innerHTML = `<span class="material-icons dropdown-item-icon">${escapeHtml(icon)}</span><span class="dropdown-item-text">${escapeHtml(cat)}</span>`;
    menu.appendChild(item);
  });

  // クリックイベントを再設定
  menu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      const textEl = item.querySelector('.dropdown-item-text');
      const iconEl = item.querySelector('.dropdown-item-icon');
      selectDropdownItemWithIcon(dropdown, item.dataset.value, textEl?.textContent || item.textContent, iconEl?.textContent || 'filter_list');
    });
  });
}

// カスタムドロップダウンのセットアップ
function setupCustomDropdown(id, onChange) {
  const dropdown = document.getElementById(id);
  const trigger = dropdown.querySelector('.dropdown-trigger');

  // ドロップダウン情報を保存
  dropdown.dataset.value = '';
  dropdown._onChange = onChange;

  // トリガークリックでトグル
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    // 他のドロップダウンを閉じる
    document.querySelectorAll('.custom-dropdown.open').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  });
}

// ドロップダウンアイテムを選択
function selectDropdownItem(dropdown, value, label) {
  const labelEl = dropdown.querySelector('.dropdown-label');
  labelEl.textContent = label;
  dropdown.dataset.value = value;
  dropdown.classList.remove('open');

  // 選択状態を更新
  dropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.classList.toggle('selected', item.dataset.value === value);
  });

  // コールバック実行
  if (dropdown._onChange) {
    dropdown._onChange(value);
  }
}

// ドロップダウンアイテムを選択（アイコン付き）
function selectDropdownItemWithIcon(dropdown, value, label, icon) {
  const trigger = dropdown.querySelector('.dropdown-trigger');
  const labelEl = trigger.querySelector('.dropdown-label');
  let iconEl = trigger.querySelector('.dropdown-icon');

  // ラベル更新
  labelEl.textContent = label;

  // アイコン更新（存在する場合）
  if (iconEl) {
    iconEl.textContent = icon;
  }

  dropdown.dataset.value = value;
  dropdown.classList.remove('open');

  // 選択状態を更新
  dropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.classList.toggle('selected', item.dataset.value === value);
  });

  // コールバック実行
  if (dropdown._onChange) {
    dropdown._onChange(value);
  }
}

// ドロップダウンの現在値を取得
function getDropdownValue(id) {
  const dropdown = document.getElementById(id);
  return dropdown.dataset.value || '';
}

// フォーム用ドロップダウンの初期化
function initFormDropdown(id) {
  const dropdown = document.getElementById(id);
  if (!dropdown) return;

  const trigger = dropdown.querySelector('.dropdown-trigger');
  const menu = dropdown.querySelector('.dropdown-menu');

  // トリガークリックでトグル
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    // 他のドロップダウンを閉じる
    document.querySelectorAll('.custom-dropdown.open').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  });

  // アイテムクリックで選択
  menu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const value = item.dataset.value;
      const label = item.textContent;

      // ラベル更新
      dropdown.querySelector('.dropdown-label').textContent = label;
      dropdown.dataset.value = value;
      dropdown.classList.remove('open');

      // 選択状態更新
      menu.querySelectorAll('.dropdown-item').forEach(i => {
        i.classList.toggle('selected', i.dataset.value === value);
      });
    });
  });
}

// ===== ItemType管理 =====
function renderItemTypeList() {
  const container = document.getElementById('itemtype-list');
  const components = state.data.meta?.components || [];

  if (components.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="material-icons">widgets</span><p>ItemTypeがありません</p></div>';
    return;
  }

  container.innerHTML = components.map(comp => {
    const methodCount = countMethodsForItemType(comp);
    return `
      <div class="list-item" data-itemtype="${escapeHtml(comp)}">
        <div class="list-item-main">
          <div class="list-item-icon">
            <span class="material-icons">widgets</span>
          </div>
          <div class="list-item-info">
            <div class="list-item-title">${escapeHtml(comp)}</div>
            <div class="list-item-subtitle">${methodCount}件のメソッドで使用</div>
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn danger" data-action="delete-itemtype" data-name="${escapeHtml(comp)}" ${methodCount > 0 ? 'disabled title="使用中のため削除できません"' : ''}>
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function countMethodsForItemType(itemType) {
  if (!state.data.methods) return 0;
  return Object.values(state.data.methods).filter(m =>
    m.components && m.components.includes(itemType)
  ).length;
}

function openAddItemTypeModal() {
  const modal = document.getElementById('modal-body');
  document.getElementById('modal-title').textContent = 'ItemType追加';

  modal.innerHTML = `
    <div class="form-group">
      <label class="form-label">ItemType名<span class="required">*</span></label>
      <input type="text" class="form-input" id="input-itemtype-name" placeholder="例: MyCustomItem">
      <div class="form-hint">英数字で入力してください</div>
    </div>
  `;

  modal.dataset.mode = 'add-itemtype';
  openModal();
}

function addItemType(name) {
  if (!name || !name.trim()) {
    showToast('ItemType名を入力してください', 'error');
    return;
  }

  const trimmedName = name.trim();
  if (!state.data.meta.components) {
    state.data.meta.components = [];
  }

  if (state.data.meta.components.includes(trimmedName)) {
    showToast('このItemTypeは既に存在します', 'error');
    return;
  }

  state.data.meta.components.push(trimmedName);
  state.data.meta.components.sort();
  markChanged('meta');
  renderItemTypeList();
  closeModal();
  showToast(`ItemType「${trimmedName}」を追加しました`, 'success');
}

function deleteItemType(name) {
  const methodCount = countMethodsForItemType(name);
  if (methodCount > 0) {
    showToast(`${methodCount}件のメソッドで使用中のため削除できません`, 'error');
    return;
  }

  openDeleteConfirm(`ItemType「${name}」を削除しますか？`, () => {
    const index = state.data.meta.components.indexOf(name);
    if (index > -1) {
      state.data.meta.components.splice(index, 1);
      markChanged('meta');
      renderItemTypeList();
      showToast(`ItemType「${name}」を削除しました`, 'success');
    }
  });
}

// ===== カテゴリー管理 =====
function renderCategoryList() {
  const container = document.getElementById('category-list');
  const categories = state.data.categories?.categories || {};
  const icons = state.data.categories?.icons || {};
  const translations = state.data.categories?.translations || {};

  const categoryNames = Object.keys(categories);
  if (categoryNames.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="material-icons">category</span><p>カテゴリーがありません</p></div>';
    return;
  }

  container.innerHTML = categoryNames.map(cat => {
    const methodCount = (categories[cat] || []).length;
    const icon = icons[cat] || 'category';
    const enName = translations[cat] || cat;

    return `
      <div class="list-item" data-category="${escapeHtml(cat)}">
        <div class="list-item-main">
          <div class="list-item-icon">
            <span class="material-icons">${escapeHtml(icon)}</span>
          </div>
          <div class="list-item-info">
            <div class="list-item-title">${escapeHtml(cat)}</div>
            <div class="list-item-subtitle">${escapeHtml(enName)} ・ ${methodCount}件のメソッド</div>
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" data-action="edit-category" data-name="${escapeHtml(cat)}">
            <span class="material-icons">edit</span>
          </button>
          <button class="action-btn danger" data-action="delete-category" data-name="${escapeHtml(cat)}" ${methodCount > 0 ? 'disabled title="メソッドが所属しているため削除できません"' : ''}>
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openAddCategoryModal() {
  const modal = document.getElementById('modal-body');
  document.getElementById('modal-title').textContent = 'カテゴリー追加';

  modal.innerHTML = `
    <div class="form-group">
      <label class="form-label">カテゴリー名（日本語）<span class="required">*</span></label>
      <input type="text" class="form-input" id="input-cat-name-ja" placeholder="例: 移動・回転">
    </div>
    <div class="form-group">
      <label class="form-label">カテゴリー名（英語）<span class="required">*</span></label>
      <input type="text" class="form-input" id="input-cat-name-en" placeholder="例: Movement & Rotation">
    </div>
    <div class="form-group">
      <label class="form-label">アイコン</label>
      <button type="button" class="icon-select-btn" data-action="open-icon-picker" data-target="input-cat-icon">
        <span class="material-icons preview-icon" id="preview-icon-input-cat-icon">category</span>
        <span class="icon-name" id="icon-name-input-cat-icon">category</span>
        <span class="material-icons">arrow_drop_down</span>
      </button>
      <input type="hidden" id="input-cat-icon" value="category">
    </div>
  `;

  modal.dataset.mode = 'add-category';
  openModal();
}

function openEditCategoryModal(catName) {
  const modal = document.getElementById('modal-body');
  document.getElementById('modal-title').textContent = 'カテゴリー編集';

  const icons = state.data.categories?.icons || {};
  const translations = state.data.categories?.translations || {};
  const icon = icons[catName] || 'category';
  const enName = translations[catName] || catName;

  modal.innerHTML = `
    <div class="form-group">
      <label class="form-label">カテゴリー名（日本語）<span class="required">*</span></label>
      <input type="text" class="form-input" id="input-cat-name-ja" value="${escapeHtml(catName)}">
    </div>
    <div class="form-group">
      <label class="form-label">カテゴリー名（英語）<span class="required">*</span></label>
      <input type="text" class="form-input" id="input-cat-name-en" value="${escapeHtml(enName)}">
    </div>
    <div class="form-group">
      <label class="form-label">アイコン</label>
      <button type="button" class="icon-select-btn" data-action="open-icon-picker" data-target="input-cat-icon">
        <span class="material-icons preview-icon" id="preview-icon-input-cat-icon">${escapeHtml(icon)}</span>
        <span class="icon-name" id="icon-name-input-cat-icon">${escapeHtml(icon)}</span>
        <span class="material-icons">arrow_drop_down</span>
      </button>
      <input type="hidden" id="input-cat-icon" value="${escapeHtml(icon)}">
    </div>
  `;

  modal.dataset.mode = 'edit-category';
  modal.dataset.originalName = catName;
  openModal();
}

function saveCategory(isEdit, originalName) {
  const nameJa = document.getElementById('input-cat-name-ja').value.trim();
  const nameEn = document.getElementById('input-cat-name-en').value.trim();
  const icon = document.getElementById('input-cat-icon').value;

  if (!nameJa || !nameEn) {
    showToast('カテゴリー名を入力してください', 'error');
    return;
  }

  if (!state.data.categories.categories) {
    state.data.categories.categories = {};
  }
  if (!state.data.categories.icons) {
    state.data.categories.icons = {};
  }
  if (!state.data.categories.translations) {
    state.data.categories.translations = {};
  }

  if (isEdit && originalName !== nameJa) {
    // 名前変更の場合、旧データを新名前に移行
    state.data.categories.categories[nameJa] = state.data.categories.categories[originalName] || [];
    delete state.data.categories.categories[originalName];
    delete state.data.categories.icons[originalName];
    delete state.data.categories.translations[originalName];
  } else if (!isEdit && state.data.categories.categories[nameJa]) {
    showToast('このカテゴリー名は既に存在します', 'error');
    return;
  }

  if (!isEdit) {
    state.data.categories.categories[nameJa] = [];
  }

  state.data.categories.icons[nameJa] = icon;
  state.data.categories.translations[nameJa] = nameEn;

  markChanged('categories');
  renderCategoryList();
  closeModal();
  showToast(`カテゴリー「${nameJa}」を${isEdit ? '更新' : '追加'}しました`, 'success');
}

function deleteCategory(catName) {
  const categories = state.data.categories?.categories || {};
  const methodCount = (categories[catName] || []).length;

  if (methodCount > 0) {
    showToast(`カテゴリーに属する関数があります（${methodCount}件）`, 'error');
    return;
  }

  openDeleteConfirm(`カテゴリー「${catName}」を削除しますか？`, () => {
    delete state.data.categories.categories[catName];
    delete state.data.categories.icons[catName];
    delete state.data.categories.translations[catName];
    markChanged('categories');
    renderCategoryList();
    showToast(`カテゴリー「${catName}」を削除しました`, 'success');
  });
}

// ===== メソッド管理 =====
function renderMethodList(searchQuery = '', categoryFilter = '') {
  const container = document.getElementById('method-list');
  const methods = state.data.methods || {};
  const categories = state.data.categories?.categories || {};
  const icons = state.data.categories?.icons || {};

  // メソッドからカテゴリーへのマッピングを構築
  const methodToCategory = {};
  Object.entries(categories).forEach(([cat, methodList]) => {
    (methodList || []).forEach(m => methodToCategory[m] = cat);
  });

  let methodNames = Object.keys(methods);

  // カテゴリーフィルター
  if (categoryFilter) {
    methodNames = methodNames.filter(name => methodToCategory[name] === categoryFilter);
  }

  // 検索フィルター
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    methodNames = methodNames.filter(name =>
      name.toLowerCase().includes(query) ||
      (methods[name].desc || '').toLowerCase().includes(query)
    );
  }

  methodNames.sort();

  if (methodNames.length === 0) {
    let emptyMessage = 'メソッドがありません';
    if (searchQuery && categoryFilter) {
      emptyMessage = '検索条件とカテゴリーに一致するメソッドがありません';
    } else if (searchQuery) {
      emptyMessage = '検索結果がありません';
    } else if (categoryFilter) {
      emptyMessage = 'このカテゴリーにメソッドがありません';
    }
    container.innerHTML = `<div class="empty-state"><span class="material-icons">search_off</span><p>${emptyMessage}</p></div>`;
    return;
  }

  container.innerHTML = methodNames.map(name => {
    const method = methods[name];
    const category = methodToCategory[name] || '未分類';
    const icon = icons[category] || 'code';
    const components = method.components || [];

    return `
      <div class="list-item" data-method="${escapeHtml(name)}">
        <div class="list-item-main">
          <div class="list-item-icon">
            <span class="material-icons">${escapeHtml(icon)}</span>
          </div>
          <div class="list-item-info">
            <div class="list-item-title">${escapeHtml(name)}</div>
            <div class="list-item-subtitle">${escapeHtml(category)} ・ ${components.length > 0 ? components.join(', ') : '全ItemType'}</div>
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" data-action="edit-method" data-name="${escapeHtml(name)}">
            <span class="material-icons">edit</span>
          </button>
          <button class="action-btn danger" data-action="delete-method" data-name="${escapeHtml(name)}">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openAddMethodModal() {
  openMethodModal(null);
}

function openEditMethodModal(methodName) {
  openMethodModal(methodName);
}

function openMethodModal(methodName) {
  const modal = document.getElementById('modal-body');
  const isEdit = methodName !== null;
  document.getElementById('modal-title').textContent = isEdit ? 'メソッド編集' : 'メソッド追加';

  const method = isEdit ? (state.data.methods[methodName] || {}) : {};
  const sample = state.data.samples?.[methodName] || {};
  const keywords = state.data.keywords?.[methodName] || [];
  const related = state.data.related?.[methodName] || [];
  const warnings = state.data.meta?.warnings?.[methodName] || null;
  const args = state.data.meta?.arguments?.[methodName] || [];

  // カテゴリー取得
  const categories = state.data.categories?.categories || {};
  let currentCategory = '';
  Object.entries(categories).forEach(([cat, methods]) => {
    if (methods.includes(methodName)) currentCategory = cat;
  });

  // カテゴリーオプション（カスタムドロップダウン用）
  const categoryItems = Object.keys(categories).sort().map(cat =>
    `<div class="dropdown-item${cat === currentCategory ? ' selected' : ''}" data-value="${escapeHtml(cat)}">${escapeHtml(cat)}</div>`
  ).join('');

  // ItemType取得
  const components = state.data.meta?.components || [];
  const methodComponents = method.components || [];

  modal.innerHTML = `
    <!-- 基本情報 -->
    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">info</span> 基本情報</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">メソッド名<span class="required">*</span></label>
          <input type="text" class="form-input" id="input-method-name" value="${escapeHtml(methodName || '')}" ${isEdit ? 'readonly' : ''}>
        </div>
        <div class="form-group">
          <label class="form-label">カテゴリー<span class="required">*</span></label>
          <div class="custom-dropdown form-dropdown" id="input-method-category" data-value="${escapeHtml(currentCategory)}">
            <button class="dropdown-trigger" type="button">
              <span class="dropdown-label">${currentCategory ? escapeHtml(currentCategory) : '選択してください'}</span>
              <span class="material-icons dropdown-arrow">expand_more</span>
            </button>
            <div class="dropdown-menu">
              <div class="dropdown-item${!currentCategory ? ' selected' : ''}" data-value="">選択してください</div>
              ${categoryItems}
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">シグネチャ</label>
        <input type="text" class="form-input" id="input-method-sig" value="${escapeHtml(method.sig || '')}" placeholder="例: void MovePos(Vector3 Pos, bool CollisionDetection)">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">説明（日本語）<span class="required">*</span></label>
          <textarea class="form-textarea" id="input-method-desc">${escapeHtml(method.desc || '')}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">説明（英語）</label>
          <textarea class="form-textarea" id="input-method-desc-en">${escapeHtml(method.descEn || '')}</textarea>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">ドキュメントURL</label>
        <input type="text" class="form-input" id="input-method-url" value="${escapeHtml(method.url || '')}" placeholder="https://...">
      </div>
      <div class="form-group">
        <label class="form-label">対応ItemType</label>
        <div class="checkbox-group" id="input-method-components">
          ${components.map(comp => `
            <label class="checkbox-item ${methodComponents.includes(comp) ? 'checked' : ''}">
              <input type="checkbox" value="${escapeHtml(comp)}" ${methodComponents.includes(comp) ? 'checked' : ''}>
              <span class="checkmark"><span class="material-icons">check</span></span>
              ${escapeHtml(comp)}
            </label>
          `).join('')}
        </div>
        <div class="form-hint">チェックなしの場合、全ItemTypeで利用可能として扱います</div>
      </div>
    </div>

    <!-- 引数 -->
    <div class="form-section">
      <div class="dynamic-list">
        <div class="dynamic-list-header">
          <span class="dynamic-list-title"><span class="material-icons" style="font-size:1rem;vertical-align:middle;">tune</span> 引数</span>
          <button type="button" class="dynamic-list-add" data-action="add-argument">
            <span class="material-icons">add</span>追加
          </button>
        </div>
        <div class="dynamic-list-items" id="arguments-list">
          ${args.length === 0 ? '<div class="dynamic-list-empty">引数がありません</div>' : args.map((arg, i) => renderArgumentItem(arg, i)).join('')}
        </div>
      </div>
    </div>

    <!-- サンプルコード -->
    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">code</span> サンプルコード</div>
      <div class="form-group">
        <label class="form-label">コード</label>
        <textarea class="form-textarea code-textarea" id="input-sample-code" rows="8">${escapeHtml(sample.code || '')}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">説明（日本語）</label>
          <input type="text" class="form-input" id="input-sample-desc" value="${escapeHtml(sample.desc || '')}">
        </div>
        <div class="form-group">
          <label class="form-label">説明（英語）</label>
          <input type="text" class="form-input" id="input-sample-desc-en" value="${escapeHtml(sample.descEn || '')}">
        </div>
      </div>
    </div>

    <!-- 警告・Tips -->
    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">warning</span> 警告・Tips</div>
      <div class="form-row">
        <div class="form-group" style="flex:0 0 140px;">
          <label class="form-label">タイプ</label>
          <div class="custom-dropdown form-dropdown" id="input-warning-type" data-value="${escapeHtml(warnings?.type || '')}">
            <button class="dropdown-trigger" type="button">
              <span class="dropdown-label">${warnings?.type === 'warning' ? '警告' : warnings?.type === 'info' ? '情報' : warnings?.type === 'tip' ? 'Tips' : 'なし'}</span>
              <span class="material-icons dropdown-arrow">expand_more</span>
            </button>
            <div class="dropdown-menu">
              <div class="dropdown-item${!warnings?.type ? ' selected' : ''}" data-value="">なし</div>
              <div class="dropdown-item${warnings?.type === 'warning' ? ' selected' : ''}" data-value="warning">警告</div>
              <div class="dropdown-item${warnings?.type === 'info' ? ' selected' : ''}" data-value="info">情報</div>
              <div class="dropdown-item${warnings?.type === 'tip' ? ' selected' : ''}" data-value="tip">Tips</div>
            </div>
          </div>
        </div>
        <div class="form-group" style="flex:1;">
          <label class="form-label">メッセージ（日本語）</label>
          <input type="text" class="form-input" id="input-warning-msg" value="${escapeHtml(warnings?.message || '')}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">メッセージ（英語）</label>
        <input type="text" class="form-input" id="input-warning-msg-en" value="${escapeHtml(warnings?.messageEn || '')}">
      </div>
    </div>

    <!-- 関連メソッド -->
    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">link</span> 関連メソッド</div>
      <div class="form-group">
        <div class="tag-input-container" id="related-tags">
          ${related.map(r => `<span class="tag"><span class="tag-text">${escapeHtml(r)}</span><button type="button" class="tag-remove" data-action="remove-tag"><span class="material-icons">close</span></button></span>`).join('')}
          <input type="text" class="tag-input" id="input-related" placeholder="メソッド名を入力してEnter">
        </div>
      </div>
    </div>

    <!-- キーワード -->
    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">label</span> 検索キーワード（日本語）</div>
      <div class="form-group">
        <div class="tag-input-container" id="keyword-tags">
          ${keywords.map(k => `<span class="tag"><span class="tag-text">${escapeHtml(k)}</span><button type="button" class="tag-remove" data-action="remove-tag"><span class="material-icons">close</span></button></span>`).join('')}
          <input type="text" class="tag-input" id="input-keywords" placeholder="キーワードを入力してEnter">
        </div>
      </div>
    </div>
  `;

  // タグ入力のイベント設定
  setupTagInput('input-related', 'related-tags');
  setupTagInput('input-keywords', 'keyword-tags');

  // モーダル内カスタムドロップダウンの初期化
  initFormDropdown('input-method-category');
  initFormDropdown('input-warning-type');

  // チェックボックスイベント
  modal.querySelectorAll('.checkbox-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') return;
      e.preventDefault(); // labelの標準動作を防ぐ（二重トグル防止）
      const checkbox = item.querySelector('input');
      checkbox.checked = !checkbox.checked;
      item.classList.toggle('checked', checkbox.checked);
    });
  });

  modal.dataset.mode = isEdit ? 'edit-method' : 'add-method';
  modal.dataset.originalName = methodName || '';
  openModal();
}

function renderArgumentItem(arg, index) {
  return `
    <div class="dynamic-list-item" data-index="${index}">
      <div class="dynamic-list-item-content">
        <div class="form-row">
          <div class="form-group" style="flex:0 0 150px;">
            <input type="text" class="form-input" placeholder="引数名" value="${escapeHtml(arg.name || '')}">
          </div>
          <div class="form-group" style="flex:0 0 120px;">
            <input type="text" class="form-input" placeholder="型" value="${escapeHtml(arg.type || '')}">
          </div>
          <div class="form-group" style="flex:1;">
            <input type="text" class="form-input" placeholder="説明（日本語）" value="${escapeHtml(arg.desc || '')}">
          </div>
        </div>
        <div class="form-row" style="margin-top:8px;">
          <div class="form-group" style="flex:0 0 150px;">
            <input type="text" class="form-input" placeholder="デフォルト値" value="${escapeHtml(arg.default || '')}">
          </div>
          <div class="form-group" style="flex:1;">
            <input type="text" class="form-input" placeholder="例" value="${escapeHtml(arg.example || '')}">
          </div>
        </div>
      </div>
      <button type="button" class="dynamic-list-item-remove" data-action="remove-argument">
        <span class="material-icons">close</span>
      </button>
    </div>
  `;
}

function addArgumentField() {
  const container = document.getElementById('arguments-list');
  const empty = container.querySelector('.dynamic-list-empty');
  if (empty) empty.remove();

  const index = container.children.length;
  const html = renderArgumentItem({}, index);
  container.insertAdjacentHTML('beforeend', html);
}

function removeArgumentField(btn) {
  const item = btn.closest('.dynamic-list-item');
  item.remove();

  const container = document.getElementById('arguments-list');
  if (container.children.length === 0) {
    container.innerHTML = '<div class="dynamic-list-empty">引数がありません</div>';
  }
}

function setupTagInput(inputId, containerId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = input.value.trim();
      if (value) {
        const container = document.getElementById(containerId);
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerHTML = `<span class="tag-text">${escapeHtml(value)}</span><button type="button" class="tag-remove" data-action="remove-tag"><span class="material-icons">close</span></button>`;
        container.insertBefore(tag, input);
        input.value = '';
      }
    }
  });
}

function removeTag(btn) {
  btn.closest('.tag').remove();
}

// タグからテキストを安全に取得
function getTagText(tagElement) {
  const textEl = tagElement.querySelector('.tag-text');
  return textEl ? textEl.textContent.trim() : '';
}

function saveMethod(isEdit, originalName) {
  const name = document.getElementById('input-method-name').value.trim();
  const category = getDropdownValue('input-method-category');
  const sig = document.getElementById('input-method-sig').value.trim();
  const desc = document.getElementById('input-method-desc').value.trim();
  const descEn = document.getElementById('input-method-desc-en').value.trim();
  const url = document.getElementById('input-method-url').value.trim();

  if (!name) {
    showToast('メソッド名を入力してください', 'error');
    return;
  }
  if (!category) {
    showToast('カテゴリーを選択してください', 'error');
    return;
  }
  if (!desc) {
    showToast('説明を入力してください', 'error');
    return;
  }

  // ItemType取得
  const componentCheckboxes = document.querySelectorAll('#input-method-components input:checked');
  const selectedComponents = Array.from(componentCheckboxes).map(cb => cb.value);

  if (selectedComponents.length === 0) {
    showToast('対応ItemTypeを1つ以上選択してください', 'error');
    return;
  }

  // 引数取得
  const argItems = document.querySelectorAll('#arguments-list .dynamic-list-item');
  const args = Array.from(argItems).map(item => {
    const inputs = item.querySelectorAll('input');
    return {
      name: inputs[0].value.trim(),
      type: inputs[1].value.trim(),
      desc: inputs[2].value.trim(),
      default: inputs[3].value.trim(),
      example: inputs[4].value.trim()
    };
  }).filter(arg => arg.name);

  // サンプル取得
  const sampleCode = document.getElementById('input-sample-code').value;
  const sampleDesc = document.getElementById('input-sample-desc').value.trim();
  const sampleDescEn = document.getElementById('input-sample-desc-en').value.trim();

  // 警告取得
  const warningType = getDropdownValue('input-warning-type');
  const warningMsg = document.getElementById('input-warning-msg').value.trim();
  const warningMsgEn = document.getElementById('input-warning-msg-en').value.trim();

  // 関連メソッド取得
  const relatedTags = document.querySelectorAll('#related-tags .tag');
  const related = Array.from(relatedTags).map(tag => getTagText(tag));

  // キーワード取得
  const keywordTags = document.querySelectorAll('#keyword-tags .tag');
  const keywords = Array.from(keywordTags).map(tag => getTagText(tag));

  // データ更新
  if (!isEdit && state.data.methods[name]) {
    showToast('このメソッド名は既に存在します', 'error');
    return;
  }

  // 最終バリデーション（防御的チェック）
  if (!selectedComponents || selectedComponents.length === 0) {
    showToast('対応ItemTypeを1つ以上選択してください（保存前チェック）', 'error');
    return;
  }

  // メソッドデータ（componentsは必須フィールド）
  state.data.methods[name] = {
    sig: sig,
    desc: desc,
    descEn: descEn || undefined,
    url: url || undefined,
    components: selectedComponents  // 必須: 常に配列として保存
  };

  // サンプルデータ
  if (sampleCode) {
    state.data.samples[name] = {
      code: sampleCode,
      desc: sampleDesc || undefined,
      descEn: sampleDescEn || undefined
    };
  } else {
    delete state.data.samples[name];
  }

  // カテゴリー更新
  Object.keys(state.data.categories.categories).forEach(cat => {
    const idx = state.data.categories.categories[cat].indexOf(originalName || name);
    if (idx > -1) state.data.categories.categories[cat].splice(idx, 1);
  });
  if (!state.data.categories.categories[category]) {
    state.data.categories.categories[category] = [];
  }
  state.data.categories.categories[category].push(name);
  state.data.categories.categories[category].sort();

  // 引数データ
  if (!state.data.meta.arguments) state.data.meta.arguments = {};
  if (args.length > 0) {
    state.data.meta.arguments[name] = args;
  } else {
    delete state.data.meta.arguments[name];
  }

  // 警告データ
  if (!state.data.meta.warnings) state.data.meta.warnings = {};
  if (warningType && warningMsg) {
    state.data.meta.warnings[name] = {
      type: warningType,
      message: warningMsg,
      messageEn: warningMsgEn || undefined
    };
  } else {
    delete state.data.meta.warnings[name];
  }

  // 関連メソッド
  if (related.length > 0) {
    state.data.related[name] = related;
  } else {
    delete state.data.related[name];
  }

  // キーワード
  if (keywords.length > 0) {
    state.data.keywords[name] = keywords;
  } else {
    delete state.data.keywords[name];
  }

  markChanged('methods');
  markChanged('samples');
  markChanged('categories');
  markChanged('meta');
  markChanged('related');
  markChanged('keywords');

  const searchQuery = document.getElementById('method-search').value;
  const categoryFilter = getDropdownValue('method-category-filter');
  renderMethodList(searchQuery, categoryFilter);
  closeModal();
  showToast(`メソッド「${name}」を${isEdit ? '更新' : '追加'}しました`, 'success');
}

function deleteMethod(name) {
  openDeleteConfirm(`メソッド「${name}」を削除しますか？\n関連するサンプルコード、キーワード、引数情報も削除されます。`, () => {
    delete state.data.methods[name];
    delete state.data.samples[name];
    delete state.data.keywords[name];
    delete state.data.related[name];
    if (state.data.meta.arguments) delete state.data.meta.arguments[name];
    if (state.data.meta.warnings) delete state.data.meta.warnings[name];

    // カテゴリーからも削除
    Object.keys(state.data.categories.categories).forEach(cat => {
      const idx = state.data.categories.categories[cat].indexOf(name);
      if (idx > -1) state.data.categories.categories[cat].splice(idx, 1);
    });

    markChanged('methods');
    markChanged('samples');
    markChanged('categories');
    markChanged('meta');
    markChanged('related');
    markChanged('keywords');

    const searchQuery = document.getElementById('method-search').value;
    const categoryFilter = getDropdownValue('method-category-filter');
    renderMethodList(searchQuery, categoryFilter);
    showToast(`メソッド「${name}」を削除しました`, 'success');
  });
}

// ===== トピック管理 =====
function renderTopicList() {
  const container = document.getElementById('topic-list');
  const topics = state.data.topics?.topics || {};

  const topicIds = Object.keys(topics);
  if (topicIds.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="material-icons">school</span><p>トピックがありません</p></div>';
    return;
  }

  container.innerHTML = topicIds.map(id => {
    const topic = topics[id];
    const icon = topic.icon || 'school';
    const title = topic.ja?.title || id;
    const relatedCount = (topic.relatedMethods || []).length;

    return `
      <div class="list-item" data-topic="${escapeHtml(id)}">
        <div class="list-item-main">
          <div class="list-item-icon">
            <span class="material-icons">${escapeHtml(icon)}</span>
          </div>
          <div class="list-item-info">
            <div class="list-item-title">${escapeHtml(title)}</div>
            <div class="list-item-subtitle">${relatedCount}件の関連メソッド</div>
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" data-action="edit-topic" data-name="${escapeHtml(id)}">
            <span class="material-icons">edit</span>
          </button>
          <button class="action-btn danger" data-action="delete-topic" data-name="${escapeHtml(id)}">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openAddTopicModal() {
  openTopicModal(null);
}

function openEditTopicModal(topicId) {
  openTopicModal(topicId);
}

function openTopicModal(topicId) {
  const modal = document.getElementById('modal-body');
  const isEdit = topicId !== null;
  document.getElementById('modal-title').textContent = isEdit ? 'トピック編集' : 'トピック追加';

  const topic = isEdit ? (state.data.topics?.topics?.[topicId] || {}) : {};
  const ja = topic.ja || {};
  const en = topic.en || {};
  const relatedMethods = topic.relatedMethods || [];

  modal.innerHTML = `
    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">info</span> 基本情報</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">トピックID<span class="required">*</span></label>
          <input type="text" class="form-input" id="input-topic-id" value="${escapeHtml(topicId || '')}" ${isEdit ? 'readonly' : ''} placeholder="例: coordinate-system">
          <div class="form-hint">英数字とハイフンのみ</div>
        </div>
        <div class="form-group">
          <label class="form-label">アイコン</label>
          <button type="button" class="icon-select-btn" data-action="open-icon-picker" data-target="input-topic-icon">
            <span class="material-icons preview-icon" id="preview-icon-input-topic-icon">${escapeHtml(topic.icon || 'school')}</span>
            <span class="icon-name" id="icon-name-input-topic-icon">${escapeHtml(topic.icon || 'school')}</span>
            <span class="material-icons">arrow_drop_down</span>
          </button>
          <input type="hidden" id="input-topic-icon" value="${escapeHtml(topic.icon || 'school')}">
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">translate</span> 日本語</div>
      <div class="form-group">
        <label class="form-label">タイトル<span class="required">*</span></label>
        <input type="text" class="form-input" id="input-topic-title-ja" value="${escapeHtml(ja.title || '')}">
      </div>
      <div class="form-group">
        <label class="form-label">概要</label>
        <input type="text" class="form-input" id="input-topic-summary-ja" value="${escapeHtml(ja.summary || '')}">
      </div>
      <div class="form-group">
        <label class="form-label">本文（Markdown対応）</label>
        <textarea class="form-textarea" id="input-topic-content-ja" rows="6">${escapeHtml(ja.content || '')}</textarea>
      </div>
    </div>

    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">language</span> English</div>
      <div class="form-group">
        <label class="form-label">Title</label>
        <input type="text" class="form-input" id="input-topic-title-en" value="${escapeHtml(en.title || '')}">
      </div>
      <div class="form-group">
        <label class="form-label">Summary</label>
        <input type="text" class="form-input" id="input-topic-summary-en" value="${escapeHtml(en.summary || '')}">
      </div>
      <div class="form-group">
        <label class="form-label">Content (Markdown)</label>
        <textarea class="form-textarea" id="input-topic-content-en" rows="6">${escapeHtml(en.content || '')}</textarea>
      </div>
    </div>

    <div class="form-section">
      <div class="form-section-title"><span class="material-icons">link</span> 関連メソッド</div>
      <div class="form-group">
        <div class="tag-input-container" id="topic-related-tags">
          ${relatedMethods.map(m => `<span class="tag"><span class="tag-text">${escapeHtml(m)}</span><button type="button" class="tag-remove" data-action="remove-tag"><span class="material-icons">close</span></button></span>`).join('')}
          <input type="text" class="tag-input" id="input-topic-related" placeholder="メソッド名を入力してEnter">
        </div>
      </div>
    </div>
  `;

  setupTagInput('input-topic-related', 'topic-related-tags');

  modal.dataset.mode = isEdit ? 'edit-topic' : 'add-topic';
  modal.dataset.originalId = topicId || '';
  openModal();
}

function saveTopic(isEdit, originalId) {
  const id = document.getElementById('input-topic-id').value.trim();
  const icon = document.getElementById('input-topic-icon').value;
  const titleJa = document.getElementById('input-topic-title-ja').value.trim();
  const summaryJa = document.getElementById('input-topic-summary-ja').value.trim();
  const contentJa = document.getElementById('input-topic-content-ja').value;
  const titleEn = document.getElementById('input-topic-title-en').value.trim();
  const summaryEn = document.getElementById('input-topic-summary-en').value.trim();
  const contentEn = document.getElementById('input-topic-content-en').value;

  if (!id) {
    showToast('トピックIDを入力してください', 'error');
    return;
  }
  if (!/^[a-z0-9-]+$/.test(id)) {
    showToast('トピックIDは英小文字、数字、ハイフンのみ使用できます', 'error');
    return;
  }
  if (!titleJa) {
    showToast('タイトル（日本語）を入力してください', 'error');
    return;
  }

  // 関連メソッド取得
  const relatedTags = document.querySelectorAll('#topic-related-tags .tag');
  const relatedMethods = Array.from(relatedTags).map(tag => getTagText(tag));

  if (!isEdit && state.data.topics?.topics?.[id]) {
    showToast('このトピックIDは既に存在します', 'error');
    return;
  }

  if (!state.data.topics) state.data.topics = { topics: {}, methodToTopics: {} };
  if (!state.data.topics.topics) state.data.topics.topics = {};

  state.data.topics.topics[id] = {
    id: id,
    icon: icon,
    ja: {
      title: titleJa,
      summary: summaryJa,
      content: contentJa
    },
    en: {
      title: titleEn || titleJa,
      summary: summaryEn || summaryJa,
      content: contentEn || contentJa
    },
    relatedMethods: relatedMethods
  };

  // methodToTopicsを更新
  if (!state.data.topics.methodToTopics) state.data.topics.methodToTopics = {};

  // 既存のマッピングをクリア
  Object.keys(state.data.topics.methodToTopics).forEach(method => {
    const idx = state.data.topics.methodToTopics[method].indexOf(id);
    if (idx > -1) state.data.topics.methodToTopics[method].splice(idx, 1);
    if (state.data.topics.methodToTopics[method].length === 0) {
      delete state.data.topics.methodToTopics[method];
    }
  });

  // 新しいマッピングを追加
  relatedMethods.forEach(method => {
    if (!state.data.topics.methodToTopics[method]) {
      state.data.topics.methodToTopics[method] = [];
    }
    if (!state.data.topics.methodToTopics[method].includes(id)) {
      state.data.topics.methodToTopics[method].push(id);
    }
  });

  markChanged('topics');
  renderTopicList();
  closeModal();
  showToast(`トピック「${titleJa}」を${isEdit ? '更新' : '追加'}しました`, 'success');
}

function deleteTopic(id) {
  const topic = state.data.topics?.topics?.[id];
  const title = topic?.ja?.title || id;

  openDeleteConfirm(`トピック「${title}」を削除しますか？`, () => {
    delete state.data.topics.topics[id];

    // methodToTopicsからも削除
    Object.keys(state.data.topics.methodToTopics || {}).forEach(method => {
      const idx = state.data.topics.methodToTopics[method].indexOf(id);
      if (idx > -1) state.data.topics.methodToTopics[method].splice(idx, 1);
      if (state.data.topics.methodToTopics[method].length === 0) {
        delete state.data.topics.methodToTopics[method];
      }
    });

    markChanged('topics');
    renderTopicList();
    showToast(`トピック「${title}」を削除しました`, 'success');
  });
}

// ===== モーダル操作 =====
function openModal() {
  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

function handleModalSave() {
  const modal = document.getElementById('modal-body');
  const mode = modal.dataset.mode;

  switch (mode) {
    case 'add-itemtype':
      addItemType(document.getElementById('input-itemtype-name').value);
      break;
    case 'add-category':
      saveCategory(false);
      break;
    case 'edit-category':
      saveCategory(true, modal.dataset.originalName);
      break;
    case 'add-method':
      saveMethod(false);
      break;
    case 'edit-method':
      saveMethod(true, modal.dataset.originalName);
      break;
    case 'add-topic':
      saveTopic(false);
      break;
    case 'edit-topic':
      saveTopic(true, modal.dataset.originalId);
      break;
  }
}

// ===== アイコンピッカー =====
function openIconPicker(targetInputId) {
  state.iconPickerCallback = targetInputId;

  const grid = document.getElementById('icon-grid');
  const currentIcon = document.getElementById(targetInputId).value;

  grid.innerHTML = COMMON_ICONS.map(icon => `
    <div class="icon-option ${icon === currentIcon ? 'selected' : ''}" data-icon="${icon}">
      <span class="material-icons">${icon}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.icon-option').forEach(opt => {
    opt.addEventListener('click', () => {
      grid.querySelectorAll('.icon-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      document.getElementById('icon-manual-input').value = opt.dataset.icon;
    });
  });

  document.getElementById('icon-manual-input').value = currentIcon;
  document.getElementById('icon-search').value = '';
  document.getElementById('icon-picker-overlay').classList.add('active');
}

function closeIconPicker() {
  document.getElementById('icon-picker-overlay').classList.remove('active');
  state.iconPickerCallback = null;
}

function filterIcons() {
  const query = document.getElementById('icon-search').value.toLowerCase();
  document.querySelectorAll('#icon-grid .icon-option').forEach(opt => {
    const icon = opt.dataset.icon;
    opt.style.display = icon.includes(query) ? '' : 'none';
  });
}

function selectIcon() {
  if (!state.iconPickerCallback) return;

  const selected = document.querySelector('#icon-grid .icon-option.selected');
  const manualInput = document.getElementById('icon-manual-input').value.trim();
  const icon = manualInput || (selected ? selected.dataset.icon : 'category');

  document.getElementById(state.iconPickerCallback).value = icon;
  document.getElementById(`preview-icon-${state.iconPickerCallback}`).textContent = icon;
  document.getElementById(`icon-name-${state.iconPickerCallback}`).textContent = icon;

  closeIconPicker();
}

// ===== 削除確認 =====
let deleteConfirmCallback = null;

function openDeleteConfirm(message, callback) {
  document.getElementById('delete-confirm-message').textContent = message;
  deleteConfirmCallback = callback;
  document.getElementById('delete-confirm-overlay').classList.add('active');

  document.getElementById('delete-confirm-ok').onclick = () => {
    if (deleteConfirmCallback) deleteConfirmCallback();
    closeDeleteConfirm();
  };
}

function closeDeleteConfirm() {
  document.getElementById('delete-confirm-overlay').classList.remove('active');
  deleteConfirmCallback = null;
}

// ===== 変更管理 =====
function markChanged(fileKey) {
  state.changes.add(fileKey);
  updateChangeCount();
}

function updateChangeCount() {
  const count = state.changes.size;
  const countEl = document.getElementById('change-count');
  const saveBtn = document.getElementById('save-all-btn');

  if (count > 0) {
    countEl.textContent = `${count}件のファイルに変更あり`;
    countEl.classList.add('has-changes');
    saveBtn.disabled = false;
  } else {
    countEl.textContent = '変更なし';
    countEl.classList.remove('has-changes');
    saveBtn.disabled = true;
  }
}

// ===== 保存 =====
async function saveAllChanges() {
  if (state.changes.size === 0) return;
  if (state.isSaving) return;

  state.isSaving = true;
  document.getElementById('save-all-btn').disabled = true;
  updateStatus('保存中...', 'saving');

  const fileMap = {
    'methods': 'methods.json',
    'samples': 'samples.json',
    'categories': 'categories.json',
    'keywords': 'keywords.json',
    'related': 'related.json',
    'topics': 'topics.json',
    'meta': 'meta.json',
    'i18n': 'i18n.json'
  };

  let successCount = 0;
  let errorCount = 0;

  for (const key of state.changes) {
    const filename = fileMap[key];
    if (!filename) continue;

    try {
      const response = await fetch(`/api/save/${filename}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state.data[key])
      });

      const result = await response.json();
      if (result.success) {
        successCount++;
      } else {
        errorCount++;
        showToast(`${filename}の保存に失敗: ${result.error}`, 'error');
      }
    } catch (error) {
      errorCount++;
      showToast(`${filename}の保存エラー: ${error.message}`, 'error');
    }
  }

  state.isSaving = false;

  if (errorCount === 0) {
    state.changes.clear();
    state.originalData = JSON.parse(JSON.stringify(state.data));
    updateChangeCount();
    updateStatus('保存完了', 'success');
    showToast(`${successCount}件のファイルを保存しました`, 'success');
  } else {
    updateChangeCount();
    updateStatus('一部保存失敗', 'error');
  }
}

// ===== ステータス更新 =====
function updateStatus(text, type) {
  document.getElementById('status-text').textContent = text;
  const indicator = document.getElementById('status-indicator');
  indicator.className = 'status-indicator';
  if (type === 'saving') indicator.classList.add('saving');
  if (type === 'error') indicator.classList.add('error');
}

// ===== トースト通知 =====
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = document.getElementById('toast-icon');
  const msg = document.getElementById('toast-message');

  toast.className = 'toast ' + type;
  icon.textContent = type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'warning';
  msg.textContent = message;

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== ユーティリティ =====
function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
}
