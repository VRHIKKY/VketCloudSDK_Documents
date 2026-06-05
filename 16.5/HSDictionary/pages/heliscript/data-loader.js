/**
 * HeliScript API リファレンス - データローダー
 * heliScript_methods.json と heliScript_categories.json を読み込む
 */

// グローバル変数
var methodData = {};           // 全メソッドデータ（フラット化済み）
var categories = {};           // カテゴリー定義
var categoryNames = [];        // カテゴリー名リスト
var categoryIcons = {};        // カテゴリーアイコン
var categoryTranslations = {}; // カテゴリー翻訳
var classNames = [];           // クラス名リスト (Player, Component, Layer)
var classDescriptions = {};    // クラス説明
var methodToCategory = {};     // メソッド→カテゴリーマッピング
var methodToClass = {};        // メソッド→クラスマッピング
var relatedMethods = {};       // 関連メソッド
var favorites = [];            // お気に入り
var i18n = {};                 // 翻訳データ

// データ読み込み状態
var dataLoaded = false;

/**
 * 全てのJSONデータを読み込む
 * @param {string} basePath - JSONファイルのベースパス
 * @returns {Promise<boolean>} - 読み込み成功時にtrue
 */
async function loadAllData(basePath = '../../data/hs/') {
  try {
    // JSONファイルを読み込み
    const [methodsRes, categoriesRes] = await Promise.all([
      fetch(basePath + 'heliScript_methods.json'),
      fetch(basePath + 'heliScript_categories.json')
    ]);

    const rawMethods = await methodsRes.json();
    const rawCategories = await categoriesRes.json();

    // クラス名リストを取得
    classNames = Object.keys(rawMethods);

    // クラス説明を取得
    classNames.forEach(className => {
      classDescriptions[className] = {
        name: rawMethods[className].className,
        desc: rawMethods[className].classDescription,
        descEn: rawMethods[className].classDescriptionEn
      };
    });

    // メソッドデータをフラット化
    methodData = {};
    classNames.forEach(className => {
      const classData = rawMethods[className];

      // utilityFunctions
      if (classData.utilityFunctions) {
        Object.entries(classData.utilityFunctions).forEach(([name, data]) => {
          methodData[name] = {
            ...data,
            class: className,
            methodType: 'utility'
          };
          methodToClass[name] = className;
        });
      }

      // methods
      if (classData.methods) {
        Object.entries(classData.methods).forEach(([name, data]) => {
          methodData[name] = {
            ...data,
            class: className,
            methodType: 'method'
          };
          methodToClass[name] = className;
        });
      }

      // callbacks (Component only)
      if (classData.callbacks) {
        Object.entries(classData.callbacks).forEach(([name, data]) => {
          methodData[name] = {
            ...data,
            class: className,
            methodType: 'callback'
          };
          methodToClass[name] = className;
        });
      }
    });

    // カテゴリーデータを処理
    categories = {};
    categoryNames = [];
    categoryIcons = {};
    categoryTranslations = { ja: {}, en: {} };

    classNames.forEach(className => {
      const classCategories = rawCategories[className]?.categories || {};

      Object.entries(classCategories).forEach(([catId, catData]) => {
        const fullCatId = `${className}_${catId}`;

        // メソッドリストを取得（methods または callbacks）
        const methodList = catData.methods || catData.callbacks || [];

        categories[fullCatId] = methodList;
        categoryIcons[fullCatId] = catData.icon || 'label';
        categoryTranslations.ja[fullCatId] = catData.name || catId;
        categoryTranslations.en[fullCatId] = catData.nameEn || catData.name || catId;

        if (!categoryNames.includes(fullCatId)) {
          categoryNames.push(fullCatId);
        }

        // メソッド→カテゴリーマッピング
        methodList.forEach(methodName => {
          methodToCategory[methodName] = fullCatId;
        });
      });
    });

    // 関連メソッドを生成（同じカテゴリーのメソッド）
    relatedMethods = {};
    Object.entries(methodData).forEach(([name, data]) => {
      const category = methodToCategory[name];
      if (category && categories[category]) {
        relatedMethods[name] = categories[category]
          .filter(m => m !== name)
          .slice(0, 5); // 最大5件
      }
    });

    // i18nデータを生成
    i18n = {
      ja: {
        siteTitle: 'HeliScript API リファレンス',
        all: 'すべて',
        favorites: 'お気に入り',
        functionType: 'カテゴリー',
        searchPlaceholder: 'メソッド名・説明で検索...',
        searchHint: 'メソッド名・説明で検索可能',
        sortNameAsc: '名前 A→Z',
        sortNameDesc: '名前 Z→A',
        sortCategory: 'カテゴリー順',
        noResults: '条件に一致するメソッドがありません',
        recentMethods: '最近見たメソッド',
        clear: 'クリア',
        tooltipHint: 'クリックで詳細表示',
        hasSample: 'サンプルあり',
        arguments: '引数',
        sampleCode: 'サンプルコード',
        relatedMethods: '関連メソッド',
        copyUrl: 'URLをコピー',
        copyMethod: '関数名をコピー',
        copied: 'コピーしました！',
        viewDetails: '詳細を見る',
        results: '件',
        showingAll: 'すべて表示中',
        reset: 'リセット',
        kbClose: '閉じる',
        kbReset: 'リセット',
        kbDarkMode: 'ダークモード'
      },
      en: {
        siteTitle: 'HeliScript API Reference',
        all: 'All',
        favorites: 'Favorites',
        functionType: 'Category',
        searchPlaceholder: 'Search by method name or description...',
        searchHint: 'Search by method name or description',
        sortNameAsc: 'Name A→Z',
        sortNameDesc: 'Name Z→A',
        sortCategory: 'By Category',
        noResults: 'No methods match the criteria',
        recentMethods: 'Recently Viewed',
        clear: 'Clear',
        tooltipHint: 'Click for details',
        hasSample: 'Has Sample',
        arguments: 'Arguments',
        sampleCode: 'Sample Code',
        relatedMethods: 'Related Methods',
        copyUrl: 'Copy URL',
        copyMethod: 'Copy Method Name',
        copied: 'Copied!',
        viewDetails: 'View Details',
        results: 'results',
        showingAll: 'Showing All',
        reset: 'Reset',
        kbClose: 'Close',
        kbReset: 'Reset',
        kbDarkMode: 'Dark Mode'
      }
    };

    dataLoaded = true;
    return true;
  } catch (error) {
    console.error('データの読み込みに失敗しました:', error);
    return false;
  }
}

/**
 * データが読み込まれているか確認
 * @returns {boolean}
 */
function isDataLoaded() {
  return dataLoaded;
}
