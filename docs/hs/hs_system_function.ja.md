
# 組み込み関数 - システム

!!! info "情報"
    Vket Cloudの基盤システム(ブラウザやOS)へのアクセスを実現する関数です。

***

## システム

### hsSystemOutput

`void hsSystemOutput(string text)`

引数で指定した文字列をコンソールに出力する。

### hsSystemWriteLine

`void hsSystemWriteLine(string text)`
引数で指定した文字列をコンソールに出力し、最後に改行を出力する。

!!! warning "caution"
    現バージョンにおいて、文字列にアポストロフィ / シングルクォート( ' ' , U+0027)を含めると動作が停止するエラーが確認されております。<br>
    恐れ入りますが、文字列では同記号の使用を避けるようお願い致します。

### hsSystemIsDebugMode

`bool hsSystemIsDebugMode()`

Vket Cloudがデバッグモードで動作している場合は true を返す。

### hsIsMobile

`bool hsIsMobile()`

アプリがモバイルデバイスで実行されている場合は true を返す。

### hsGetSDKVersion

`string hsGetSDKVersion()`

VketCloudSDKの現在のバージョン文字列を返す。

### hsSystemGetTime

`int hsSystemGetTime()`

アプリが起動してからの経過時間をミリ秒単位で返す。

### hsSystemGetDeltaTime

`float hsSystemGetDeltaTime()`

最後のフレームから、現在のフレームまでの経過時間を秒単位で返す。

### hsGetDate

`void hsGetDate(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minute, ref int second)`

現在のローカルの日時を取得します。

年(year), 月(month), day(day) は、1から始まります。

週(week) は、{ 0=日, 1=月, ..., 6=土 } と続きます。

### hsGetDateLocal

`void hsGetDateLocal(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minute, ref int second)`

現在のローカルの日時を取得します。

それぞれの数値の意味は、 hsGetDate() を確認してください。

### hsGetDateUTC

`void hsGetDateUTC(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minute, ref int second)`

現在の日時をUTCで取得します。

それぞれの数値の意味は、hsGetDate() を確認してください。

### hsGetEpochSeconds

`int GetEpochSeconds()`

UNIXエポック (UTCにおける1970年1月1日午前0時0分0秒) からの経過秒数を返します。

### hsGetTimezoneOffset

`int hsGetTimezoneOffset()`

システム上の現在のタイムゾーンと、UTCタイムゾーンの差を分単位で返します。

### hsGetCurrentWorldId

`string hsGetCurrentWorldId()`

ワールドIDを取得する。

***

## トースト通知

### hsSendToastNotice

`void hsSendToastNotice(int noticeTypeID, string message, float viewTime, string identifyKey)`  

画面右端から登場アニメーション付きでメッセージを通知します。  
最大5件表示で、5件表示された状態でさらに通知を追加すると内部で保持し、  
表示枠に空きが出来たら追加します。  

また、エラー通知以外はクリックをすると残り表示秒数に関係なく消すことが可能です。

#### noticeTypeID (int)  
通知するメッセージ種類のID。  IDとアイコンの対応は以下の通り。
|ID|TYPE|
|---|---|
|00|INFO|
|10|WARNING|
|20|ERROR|
|nn|INFO (規定外はすべてINFOにされます)|

#### viewTime (float)  
通知が画面で表示される時間を設定できます。  
1 = 1秒で、登場/退場アニメーション時間はこの秒数に含まれません。（それぞれ0.5秒）  

#### identifyKey (string)  
ユーザーが任意で埋め込める識別キー。  

トースト通知がクリックされた/時間超過で消えた時に発火されるLocalイベント`OnReceiveLocalData(string key, string data)`に識別タグとして使えます。  

`string key`は固定で`"toast"`の文字列が入っています。  
`string data`に発火した通知情報が文字列として入っています。  

#### ● dataに格納されている情報  
```json
{
  "noticeTypeID" : "通知種類のID",
  "identifyKey" : "ユーザーが`identifyKey`で決めた識別用文字列",
  "message": "通知で表示していたメッセージ",
  "sendAction": "このデータが送信されたタイミング"
}
```
#### ● sendActionの送信タイミング
| sendAction | 値 |
| --- | --- | 
| OnClick | ユーザーがトーストをクリックした |
| ViewTimeOver | viewTimeで設定した時間を超えた場合 |
| OnForceQuit | トースト通知をクリックして消した場合(InfoとWarningのみ) |


#### ● サンプルコード
```cs
// サンプル
// localDataを受け取る窓口
public void OnReceiveLocalData(string key, string data){
    if(key != "toast") { return; }
    string identifyKey = GetNoticeIdentifyKey(data);

    hsSystemWriteLine("トースト通知 識別キー : %s" % identifyKey);
}

// localDataで届いたstring型のJson形式データから、識別キーを抜き出す
private string GetNoticeIdentifyKey(string data){
    JsVal toastData = makeJsValFromJson(data);
    return toastData.GetProperty("identifyKey").GetStr();
}
```

***

## 基本型の変換 (キャスト)

### int(float)

`int int(float)`

浮動小数点数を整数値に変換します。

### float(int)

`float float(int)`

整数値を浮動小数点数値に変換します。

### bool(int)

`bool bool(int)`

整数値を真偽値に変換します。

0 は true、それ以外の値は false に変換されます。

### string(int)

`string string(int)`

整数値を文字列に変換します。

### string(float)

`string string(float)`

浮動小数点数値を文字列に変換します。

***

## Web

### hsWebOpen(string)

`void hsWebOpen(string url)`

urlを開く。

### hsWebReload
`void hsWebReload()`

Webページをリロードします。

***

## 言語

### hsGetLang()

`string hsGetLang()`

現在のシステムの言語を返します。(JavaScriptのnavigator.languageの値に相当する文字列を返します)

### hsIsLangJA()

`bool hsIsLangJA()`

現在のシステムの言語が日本語の場合にtrueを返します。

### hsIsLangEN()

`bool hsIsLangEN()`

現在のシステムの言語が英語の場合にtrueを返します。
