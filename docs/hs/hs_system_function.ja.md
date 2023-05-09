
# 組み込み関数 - システム

!!! 情報 Info
    Vket Cloudの基盤システム(ブラウザやOS)へのアクセスを実現する関数。

***

### hsSystemOutput(string)
`void hsSystemOutput(string text)`
引数で指定した文字列をコンソールに出力する。

### hsSystemIsDebugMode()
`bool hsSystemIsDebugMode()`
Vket Cloudがデバッグモードで動作している場合は true を返す。

### hsSystemGetTime()
`int hsSystemGetTime()`
アプリが起動してからの経過時間をミリ秒単位で返す。

### hsSystemGetDeltaTime()
`float hsSystemGetDeltaTime()`
最後のフレームから、現在のフレームまでの経過時間を秒単位で返す。

### hsGetDate(ref int, ref int, ref int, ref int, ref int, ref int, ref int)
`void hsGetDate(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minite, ref int second)`

### hsWebOpen(string)
`void hsWebOpen(string url)`
urlを開く。