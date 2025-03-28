# ワールド入場時間を制限する

## 概要

Vket Cloudのイベント機能では24時間以上のイベントを設定することはできません。  
そのため、数日間限定のイベントや、毎日7時から10時までの間など、24時間以上の期間や特定の時間帯のみワールドに入れるようにしたい場面では、標準のイベント機能では要件を満たすことは困難です。

本ページでは、JavaScriptを活用し、標準のイベント機能では難しい24時間以上のイベントや特定の時間だけ入れるワールドの作り方を紹介します。

!!! failure "注意"
    - 有料プラン限定の機能を使用します。<br>
    - ワールドを「公開」にしている場合、入れない期間であってもワールドへのアクセスリンクは表示されたままとなります。<br>
    - ワールド内にいる人を時間外で追い出す機能ではありません。

!!! note "検証環境"
    - **SDKバージョン** : 13.7.7<br>
    - **OS** : Windows 10<br>
    - **Unity** : 22019.4.31.f1<br>
    - **ブラウザ** : Google Chrome

## 手順

### ① JavaScriptの入稿

JS入稿により、下記の `accsesfilter.js` を使用ワールドに組み込みます。  
時間外のリダイレクトページURLと時間設定を「カスタム項目」内で行う必要があります。

```javascript
const urlParams = new URLSearchParams(window.location.search);
const worldId = urlParams.get('worldid') || 0;

// カスタム項目
const redirectURL = ""; // イベント時間外のリダイレクトページURLを記載
const termList = { // 期間設定。日付をMM-DDで指定し、開始時間と終了時間をhh:mmで指定する。
    "4-1" : { "StartDate": "17:00", "EndDate":"22:00"}, // 4月1日は17時から22時まで入室可能
    "4-2" : { "StartDate": "10:00", "EndDate":"20:00"}, // 4月2日は10時から20時まで入室可能
};

const currentDate = new Date();
var termKey = (currentDate.getMonth() + 1) + "-" + currentDate.getDate();

const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const currentTime = `${hours}:${minutes}`;

console.log("現在は" + termKey + " " + currentTime + " " + "です");

// 期間の入力が無い場合は無条件でリダイレクト
if(termList[termKey] == null) { OpenRedirectPage(); }

console.log("開場時間は" + termList[termKey]["StartDate"] + " " + termList[termKey]["EndDate"]);

let isInterm = false;
// 期間内かどうかを確認
if (currentTime <= termList[termKey]["EndDate"]) {
    if (currentTime >= termList[termKey]["StartDate"]) {
        // 期間内ならそのまま通す
        isInterm = true;
    }
}

// 期間外の場合は通常ワールドへ
if (!isInterm) {
    OpenRedirectPage();
}

function OpenRedirectPage() {
    // 通常ワールドへ遷移する場合はそのURLを指定する
    window.location.href = redirectURL;
}
```

以上を組み込むだけで、設定は完了です。