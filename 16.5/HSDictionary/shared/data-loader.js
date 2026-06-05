/**
 * VKC Item メソッドリファレンス - データローダー
 * JSONファイルからデータを非同期で読み込む
 */

// グローバル変数（data.jsとの互換性維持）
// var を使用して再宣言可能にする
var methodData = {};
var sampleCodes = {};
var categories = {};
var categoryNames = [];
var categoryIcons = {};
var categoryTranslations = {};
var japaneseKeywords = {};
var relatedMethods = {};
var components = [];
var frequentMethods = [];
var methodWarnings = {};
var argumentDetails = {};
var methodDifficulty = {};
var topics = {};
var methodToTopics = {};
var i18n = {};

// 翻訳用（methods.jsonに統合）
var methodDescTranslations = {};
var sampleDescTranslations = {};
var topicTranslations = {};

// メソッドからカテゴリーへのマッピング
var methodToCategory = {};

// データ読み込み状態
var dataLoaded = false;

/**
 * 全てのJSONデータを読み込む
 * @param {string} basePath - JSONファイルのベースパス（デフォルト: 'data/item/'）
 * @returns {Promise<boolean>} - 読み込み成功時にtrue
 */
async function loadAllData(basePath = 'data/item/') {
  try {
    // 並列でJSONファイルを読み込み
    const [
      methodsRes,
      samplesRes,
      categoriesRes,
      keywordsRes,
      relatedRes,
      topicsRes,
      i18nRes,
      metaRes
    ] = await Promise.all([
      fetch(basePath + 'methods.json'),
      fetch(basePath + 'samples.json'),
      fetch(basePath + 'categories.json'),
      fetch(basePath + 'keywords.json'),
      fetch(basePath + 'related.json'),
      fetch(basePath + 'topics.json'),
      fetch(basePath + 'i18n.json'),
      fetch(basePath + 'meta.json')
    ]);

    // JSONをパース
    const methodsData = await methodsRes.json();
    const samplesData = await samplesRes.json();
    const categoriesData = await categoriesRes.json();
    const keywordsData = await keywordsRes.json();
    const relatedData = await relatedRes.json();
    const topicsData = await topicsRes.json();
    const i18nData = await i18nRes.json();
    const metaData = await metaRes.json();

    // グローバル変数に設定
    methodData = methodsData;
    sampleCodes = samplesData;
    categories = categoriesData.categories;
    categoryNames = Object.keys(categories);
    categoryIcons = categoriesData.icons;
    categoryTranslations = categoriesData.translations;
    japaneseKeywords = keywordsData;
    relatedMethods = relatedData;
    components = metaData.components;
    frequentMethods = metaData.frequentMethods;
    methodWarnings = metaData.warnings;
    argumentDetails = metaData.arguments;
    i18n = i18nData;

    // Topics処理
    topics = {};
    topicTranslations = {};
    Object.entries(topicsData.topics).forEach(([id, topic]) => {
      topics[id] = {
        id: topic.id,
        icon: topic.icon,
        title: topic.ja.title,
        summary: topic.ja.summary,
        content: topic.ja.content,
        relatedMethods: topic.relatedMethods
      };
      topicTranslations[id] = {
        title: topic.en.title,
        summary: topic.en.summary,
        content: topic.en.content
      };
    });
    methodToTopics = topicsData.methodToTopics;

    // メソッド説明の翻訳を抽出
    methodDescTranslations = {};
    sampleDescTranslations = {};
    Object.entries(methodsData).forEach(([name, data]) => {
      if (data.descEn) {
        methodDescTranslations[name] = data.descEn;
      }
    });
    Object.entries(samplesData).forEach(([name, data]) => {
      if (data.descEn) {
        sampleDescTranslations[name] = data.descEn;
      }
    });

    // メソッドからカテゴリーへのマッピングを生成
    methodToCategory = {};
    Object.entries(categories).forEach(([cat, methods]) => {
      methods.forEach(m => methodToCategory[m] = cat);
    });

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
