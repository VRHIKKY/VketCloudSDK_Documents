
# Dateクラス

特定の日時を表現するクラスです。

Dateクラスは、内部にUNIXエポック (1970年1月1日午前0時0分0秒) からの経過時間を保持しています。

Dateクラスは可変であり、インスタンス生成後に SetYear() や AddHour() などのメソッドを呼びだすことで、Dateの内部データを更新することが可能です。
変更前のDateの状態を保持したい場合は、Clone() メソッドによるコピー生成を検討してください。

Dateクラスに、既定の範囲を超えた値を設定した場合、自動でオーバーラップが行われます。例えば、「1990年5月33日」を表現するDateクラスを生成すると、実際には「1990年6月2日」となるよう正規化が行われます。

## Dateのユーティリティー関数

### hsCreateDate
`Date hsCreateDate(int year, int month = 1, int day = 1, int hour = 0,  int minite = 0,  int second = 0, int millisecond = 0)`

現在のローカルタイムゾーンで、指定した日時のDateインスタンスを生成する。

### hsCreateDateUTC
`Date hsCreateDateUTC(int year, int month = 1, int day = 1, int hour = 0,  int minite = 0,  int second = 0, int millisecond = 0)`

UTCにおける、指定した日時のDateインスタンスを生成する。

***

## 定数値

週の曜日を表現する定数値です。
```
const int DAYS_SUNDAY = 0;
const int DAYS_MONDAY = 1;
const int DAYS_TUESDAY = 2;
const int DAYS_WEDNESDAY = 3;
const int DAYS_THURSDAY = 4;
const int DAYS_FRIDAY = 5;
const int DAYS_SATURDAY = 6;
```

***

## コンストラクタ

### Date
`public Date()`

ローカルタイムゾーンにおける、現在時刻を表現するクラスを生成します。

## メソッド

### ToString
`string ToString()`

このインスタンスが持つ日時情報を、ローカルタイムゾーンにおける ISO 8601形式の文字列に変換して返します。

### ToUTCString
`string ToUTCString()`

このインスタンスが持つ日時情報を、UTCにおける ISO 8601形式の文字列に変換して返します。

### Clone
`Date Clone()`

このインスタンスの持つ日時情報がコピーされた、新たなDateインスタンスを生成して返します。

### Equals
`bool Equals(Date other)`

このインスタンスと、引数otherが表す日時が同じである場合に true を返します。

### GetEpochSeconds
`int GetEpochSeconds()`

UNIXエポックからの経過秒数を返します。

## メソッド (ローカルタイムゾーンに基づく日時取得)

### GetYear
`int GetYear()`

ローカルタイムゾーンに基づく「年」を返します。

### GetMonth
`int GetMonth()`

ローカルタイムゾーンに基づく、1を起点とした「月」を返します。(範囲: 1から12)

### GetDayOfYear
`int GetDayOfYear()`

ローカルタイムゾーンに基づく、1を起点とした年間積算日を返します。(範囲: 1から366)ｓ

### GetDayOfWeek
`int GetDayOfWeek()`

ローカルタイムゾーンに基づく、0を起点とした「曜日」を返します。(範囲: 0から6)

### GetDay
`int GetDay()`

ローカルタイムゾーンに基づく、1を起点とした月の日付を返します。(範囲: 1から31)

### GetHours
`int GetHours()`

ローカルタイムゾーンに基づく、0を起点とした「時間」を返します。(範囲: 0から23)

### GetMinutes
`int GetMinutes() `

ローカルタイムゾーンに基づく、0を起点とした「分」を返します。(範囲: 0から59)

### GetSeconds
`int GetSeconds()`

ローカルタイムゾーンに基づく、0を起点とした「秒」を返します。(範囲: 0から59)

### GetMilliseconds
`int GetMilliseconds()`

ローカルタイムゾーンに基づく、0を起点とした「ミリ秒」を返します。(範囲: 0から999)


## メソッド (UTCに基づく日時取得)

### GetUTCYear
`int GetUTCYear()`

UTCに基づく「年」を返します。

### GetUTCMonth
`int GetUTCMonth()`

UTCに基づく、1を起点とした「月」を返します。(範囲: 1から12)

### GetUTCDayOfYear
`int GetUTCDayOfYear()`

UTCに基づく、1を起点とした年間積算日を返します。(範囲: 1から366)ｓ

### GetUTCDayOfWeek
`int GetUTCDayOfWeek()`

UTCに基づく、0を起点とした「曜日」を返します。(範囲: 0から6)

### GetUTCDay
`int GetUTCDay()`

UTCに基づく、1を起点とした月の日付を返します。(範囲: 1から31)

### GetUTCHours
`int GetUTCHours()`

UTCに基づく、0を起点とした「時間」を返します。(範囲: 0から23)

### GetUTCMinutes
`int GetUTCMinutes() `

UTCに基づく、0を起点とした「分」を返します。(範囲: 0から59)

### GetUTCSeconds
`int GetUTCSeconds()`

UTCに基づく、0を起点とした「秒」を返します。(範囲: 0から59)

### GetUTCMilliseconds
`int GetUTCMilliseconds()`

UTCに基づく、0を起点とした「ミリ秒」を返します。(範囲: 0から999)


## メソッド (日時の設定)

### SetYear
`void SetYear(int value)`

このインスタンスの「年」を、引数valueの値に更新します。

### SetMonth
`void SetMonth(int value)`

このインスタンスの「月」を、引数valueの値に更新します。

### SetDay
`void SetDay(int value)`

このインスタンスの「日」を、引数valueの値に更新します。

### SetHours
`void SetHours(int value)`

このインスタンスの「時間」を、引数valueの値に更新します。

### SetMinutes
`void SetMinutes(int value)`

このインスタンスの「分」を、引数valueの値に更新します。

### SetSeconds
`void SetSeconds(int value)`

このインスタンスの「秒」を、引数valueの値に更新します。

### SetMilliseconds
`void SetMilliseconds(int value)`

このインスタンスの「ミリ秒」を、引数valueの値に更新します。

## メソッド (日時の設定)

### SetYear
`void SetYear(int value)`

このインスタンスの「年」を、引数valueの値に更新します。

### SetMonth
`void SetMonth(int value)`

このインスタンスの「月」を、引数valueの値に更新します。

### SetDay
`void SetDay(int value)`

このインスタンスの「日」を、引数valueの値に更新します。

### SetHours
`void SetHours(int value)`

このインスタンスの「時間」を、引数valueの値に更新します。

### SetMinutes
`void SetMinutes(int value)`

このインスタンスの「分」を、引数valueの値に更新します。

### SetSeconds
`void SetSeconds(int value)`

このインスタンスの「秒」を、引数valueの値に更新します。

### SetMilliseconds
`void SetMilliseconds(int value)`

このインスタンスの「ミリ秒」を、引数valueの値に更新します。



## メソッド (日時の加算・減算)
Dateインスタンスに対して、日時の加算を行うメソッドです。
引数が負数の場合、減算が行われます。

### AddYear
`void AddYear(int value)`

このインスタンスの「年」に、引数valueの値を加算します。

### AddMonth
`void AddMonth(int value)`

このインスタンスの「月」に、引数valueの値を加算します。

### AddDay
`void AddDay(int value)`

このインスタンスの「日」に、引数valueの値を加算します。

### AddHours
`void AddHours(int value)`

このインスタンスの「時間」に、引数valueの値を加算します。

### AddMinutes
`void AddMinutes(int value)`

このインスタンスの「分」に、引数valueの値を加算します。

### AddSeconds
`void AddSeconds(int value)`

このインスタンスの「秒」に、引数valueの値を加算します。

### AddMilliseconds
`void AddMilliseconds(int value)`

このインスタンスの「ミリ秒」に、引数valueの値を加算します。