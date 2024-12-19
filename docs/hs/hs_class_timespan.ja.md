# TimeSpanクラス

時間間隔を表現するクラスです。

Dateがカレンダー上のある1点の日時を表すのに対し、TimeSpanは文化や地域に関係なく、「ある日時から、別の日時までの時間間隔」を表現します。このため、TimeSpanは週や月といった暦に関係する情報を持ちません。

TimeSpanクラスに、既定の範囲を超えた値を設定した場合、自動でオーバーラップが行われます。例えば、「17日29時間32分」を表現するTimeSpanクラスを生成すると、実際には「18日5時間32分」となるよう正規化が行われます。

時間間隔は、0や負の値をとることができます。

## TimeSpanのユーティリティー関数

### hsCreateTimeSpanWithZero
`TimeSpan hsCreateTimeSpanWithZero()`

0 で初期化したTimeSpanを生成します。(TimeSpanのコンストラクタ呼び出しと同等の機能)

### hsCreateTimeSpanUTCNow
`TimeSpan hsCreateTimeSpanUTCNow()`

UNIXエポック(UTCにおける1970年1月1日午前0時0分0秒)から、この関数を呼び出した時刻までの時間間隔を、TimeSpanとして返します。

### hsCreateTimeSpanFromDays
`TimeSpan hsCreateTimeSpanFromDays(int days, int hours = 0, int minutes = 0, int seconds = 0, int milliSeconds = 0)`

指定した日数、時間、分、秒、ミリ秒でTimeSpanのインスタンスを生成します。

### hsCreateTimeSpanFromHours
`TimeSpan hsCreateTimeSpanFromHours(int hours, int minutes = 0, int seconds = 0, int milliSeconds = 0)`

指定した時間、分、秒、ミリ秒でTimeSpanのインスタンスを生成します。

### hsCreateTimeSpanFromMinutes
`TimeSpan hsCreateTimeSpanFromMinutes(int minutes = 0, int seconds = 0, int milliSeconds = 0)`

指定した分、秒、ミリ秒でTimeSpanのインスタンスを生成します。

### hsCreateTimeSpanFromSeconds
`TimeSpan hsCreateTimeSpanFromSeconds(int seconds, int milliSeconds = 0)`

指定した秒、ミリ秒でTimeSpanのインスタンスを生成します。

### hsCreateTimeSpanFromMilliseconds
`TimeSpan hsCreateTimeSpanFromMilliseconds(int milliSeconds)`

指定したミリ秒でTimeSpanのインスタンスを生成します。

***

## コンストラクタ

### TimeSpan
`TimeSpan()`

0 で初期化されたTimeSpanを生成します。

## メソッド

### Clone
`TimeSpan Clone()`

このインスタンスを複製し、新たなTimeSpanインスタンスとして返します。

### ToString
`string ToString()`

このインスタンスが持つ日時情報を文字列化して返します。

### IsZero
`bool IsZero()`

このインスタンスが持つ時間間隔の長さが 0 の場合にtrueを返します。

### IsNegative
`bool IsNegative()`

このインスタンスが持つ時間間隔の長さが負の場合にtrueを返します。

## メソッド (日時の取得)

### GetDays
`int GetDays()`

このインスタンスが持つ時間間隔の、「日数」の部分を返します。

### GetHours
`int GetHours()`

このインスタンスが持つ時間間隔の、「時間」の部分を返します。値の範囲は -23 から 23 までになります。

### GetMinutes
`int GetMinutes()`

このインスタンスが持つ時間間隔の、「分」の部分を返します。値の範囲は -59 から 59 までになります。

### GetSeconds
`int GetSeconds()`

このインスタンスが持つ時間間隔の、「秒」の部分を返します。値の範囲は -59 から 59 までになります。

### GetMilliseconds
`int GetMilliseconds()`

このインスタンスが持つ時間間隔の、「ミリ秒」の部分を返します。値の範囲は -999 から999 までになります。

## メソッド (トータル日時の取得)

### ToDays
`int ToDays()`

このインスタンスが持つ時間間隔の全体を、「日数」として取得します。

日数より詳細な情報は切り捨てられます。

例えば、「2日5時間30分15秒」のTimeSpanに対して ToHours() を呼び出すと、結果は 2 が返ります。

### ToHours
`int ToHours()`

このインスタンスが持つ時間間隔の全体を、「時間」として取得します。

時間より詳細な情報は切り捨てられます。

例えば、「2日5時間30分15秒」のTimeSpanに対して ToHours() を呼び出すと、「2 * 24時間 + 5時間 = 53時間」となり、結果は 53 が返ります。

### ToMinutes
`int ToMinutes()`

このインスタンスが持つ時間間隔の全体を、「分」として取得します。

分より詳細な情報は切り捨てられます。

例えば、「2日5時間30分15秒」のTimeSpanに対して ToMinutes() を呼び出すと、「(2 * 24 + 5) * 60分 + 30分 = 3210分」となり、結果は 3180 が返ります。

### ToSeconds
`int ToSeconds()`

このインスタンスが持つ時間間隔の全体を、「秒」として取得します。

秒より詳細な情報は切り捨てられます。

例えば、「2日5時間30分15秒40ミリ秒」のTimeSpanに対して ToSeconds() を呼び出すと、「((2 * 24 + 5) * 60 + 30) * 60秒 + 15秒 = 192615秒」となり、結果は 192600 が返ります。

### ToMilliseconds
`int ToMilliseconds()`

このインスタンスが持つ時間間隔の全体を、「ミリ秒」として取得します。

例えば、「2日5時間30分15秒40ミリ秒」のTimeSpanに対して ToMilliseconds() を呼び出すと、「(((2 * 24 + 5) * 60 + 30) * 60 + 15) * 1000ミリ秒 + 40ミリ秒 = 192615040ミリ秒」となり、結果は 192615040 が返ります。

## メソッド (演算)

### Add
`TimeSpan Add(TimeSpan span)`

このインスタンスに、引数spanの時間間隔を加算し、結果を新しいインスタンスとして返します。

### Sub
`TimeSpan Sub(TimeSpan span)`

このインスタンスから、引数spanの時間間隔を減算し、結果を新しいインスタンスとして返します。

### Negate
`TimeSpan Negate()`

このインスタンスの持つ時間間隔の正負が逆転した、新しいTimeSpanインスタンスを返します。

## メソッド (比較)

### Equals
`bool Equals(TimeSpan span)`

このインスタンスと、引数のTimeSpanを比較し、等しい場合に true を返します。

### GreaterThan
`bool GreaterThan(TimeSpan span)`

このインスタンスと、引数のTimeSpanを比較し、自身が大きければ true を返します。

### LessThan
`bool LessThan(TimeSpan span)`

このインスタンスと、引数のTimeSpanを比較し、自身が小さければ true を返します。

### Compare
`int Compare(TimeSpan span)`

このインスタンスと、引数のTimeSpanを比較し、同じなら0を、自分が大きければ1を、自分が小さければ-1を返します。
