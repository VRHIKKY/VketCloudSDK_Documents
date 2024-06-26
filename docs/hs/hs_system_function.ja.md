
# 組み込み関数 - システム

!!! 情報 Info
    Vket Cloudの基盤システム(ブラウザやOS)へのアクセスを実現する関数です。

***

## システム

### hsSystemOutput
`void hsSystemOutput(string text)`

引数で指定した文字列をコンソールに出力する。

### hsSystemWriteLine
`void hsSystemWriteLine(string text)`
引数で指定した文字列をコンソールに出力し、最後に改行を出力する。

!!! note caution
    現バージョンにおいて、文字列にアポストロフィ / シングルクォート( ' ' , U+0027)を含めると動作が停止するエラーが確認されております。<br>
    恐れ入りますが、文字列では同記号の使用を避けるようお願い致します。

### hsSystemIsDebugMode
`bool hsSystemIsDebugMode()`

Vket Cloudがデバッグモードで動作している場合は true を返す。

### hsIsMobile
`bool hsIsMobile()`

アプリがモバイルデバイスで実行されている場合は true を返す。

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
`float hsGetCurrentWorldId()`

ワールドIDを取得する。

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