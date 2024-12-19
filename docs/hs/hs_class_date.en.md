# Date Class

The Date class is for handling date and time on HeliScript.

Date class internally holds the time passed from the UNIX epoch (January 1 1970 12:00:00 am).

Date class is a variable class, which can be updated by calling SetYear(), AddHour(), and other functions to update the internal data after instantiation.
To save the Date data before update, please consider copying by using Clone().

If Date class is set with a value over a certain range, the data will be overlapped automatically. For example, if a Date class with the date "May 33 1990" was generated, it will be normalized to "June 2 1990".

## Date and TimeSpan

Date class is for representing a specific date and time, while TimeSpan is used for representing a time interval.

## Date utility functions

### hsCreateDate

`Date hsCreateDate(int year, int month = 1, int day = 1, int hour = 0,  int minite = 0,  int second = 0, int millisecond = 0)`

Create a Date instance with the defined date in the current local time zone.

### hsCreateDateUTC

`Date hsCreateDateUTC(int year, int month = 1, int day = 1, int hour = 0,  int minite = 0,  int second = 0, int millisecond = 0)`

Create a Date instance with the defined date in UTC.

### hsParseDate
`Date hsParseDate(string dateStr)`

Parse the ISO 8601 formatted string and create a Date instance.<br>

If the string parsing fails, it will return null.

***

## Constant Values

The following constant values are for expressing the day of the week:

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

## Constructor

### Date
`public Date()`

Create a class with the current time in the local time zone.

## Methods

### ToString
`string ToString()`

Returns the instance's date info based on the local time zone, by converting it to an ISO 8601 format string.

### ToUTCString
`string ToUTCString()`

Returns the instance's date info based on UTC, by converting it to an ISO 8601 format string.

### Clone
`Date Clone()`

Returns a new Date instance with the current instance's date info copied.

### Equals
`bool Equals(Date other)`

Returns true when the current instance and other has the same date.

### GetEpochSeconds
`int GetEpochSeconds()`

Returns the past seconds from the UNIX epoch.

## Methods (Get value based on local time zone)

### GetYear
`int GetYear()`

Gets the year value based on the local time zone.

### GetMonth
`int GetMonth()`

Gets the month value based on the local time zone, starting with 1. (Range: 1-12)

### GetDayOfYear
`int GetDayOfYear()`

Gets the day of year based on the local time zone, starting with 1. (Range: 1-366)

### GetDayOfWeek
`int GetDayOfWeek()`

Gets the day of week based on the local time zone, starting with 0. (Range: 0-6)

### GetDay
`int GetDay()`

Gets the day of month based on the local time zone, starting with 1. (Range: 1-31)

### GetHours
`int GetHours()`

Gets the hour based on the local time zone, starting with 0. (Range: 0-23)

### GetMinutes
`int GetMinutes()`

Gets the minute based on the local time zone, starting with 0. (Range: 0-59)

### GetSeconds
`int GetSeconds()`

Gets the second based on the local time zone, starting with 0. (Range: 0-59)

### GetMilliseconds
`int GetMilliseconds()`

Gets the millisecond based on the local time zone, starting with 0. (Range: 0-999)

## Methods (Get value based on UTC)

### GetUTCYear
`int GetUTCYear()`

Gets the year value based on UTC.

### GetUTCMonth
`int GetUTCMonth()`

Gets the month value based on UTC, starting with 1. (Range: 1-12)

### GetUTCDayOfYear
`int GetUTCDayOfYear()`

Gets the day of year based on UTC, starting with 1. (Range: 1-366)

### GetUTCDayOfWeek
`int GetUTCDayOfWeek()`

Gets the day of week based on UTC, starting with 0. (Range: 0-6)

### GetUTCDay
`int GetUTCDay()`

Gets the day of month based on UTC, starting with 1. (Range: 1-31)

### GetUTCHours
`int GetUTCHours()`

Gets the hour based on UTC, starting with 0. (Range: 0-23)

### GetUTCMinutes
`int GetUTCMinutes()`

Gets the minute based on UTC, starting with 0. (Range: 0-59)

### GetUTCSeconds
`int GetUTCSeconds()`

Gets the second based on UTC, starting with 0. (Range: 0-59)

### GetUTCMilliseconds
`int GetUTCMilliseconds()`

Gets the millisecond based on UTC, starting with 0. (Range: 0-999)

## Methods (Set Date values)

### SetYear
`void SetYear(int value)`

Set the instance's year by the given value.

### SetMonth
`void SetMonth(int value)`

Set the instance's month by the given value.

### SetDay
`void SetDay(int value)`

Set the instance's day by the given value.

### SetHours
`void SetHours(int value)`

Set the instance's hour by the given value.

### SetMinutes
`void SetMinutes(int value)`

Set the instance's minute by the given value.

### SetSeconds
`void SetSeconds(int value)`

Set the instance's second by the given value.

### SetMilliseconds
`void SetMilliseconds(int value)`

Set the instance's millisecond by the given value.

## Methods (Adding/Subtracting Date values)

These methods are for adding date values to a Date instance.<br>
If the given value is negative, subtraction will be done.

### AddYear
`void AddYear(int value)`

Add the given value to the instance's year.

### AddMonth
`void AddMonth(int value)`

Add the given value to the instance's month.

### AddDay
`void AddDay(int value)`

Add the given value to the instance's day.

### AddHours
`void AddHours(int value)`

Add the given value to the instance's hour.

### AddMinutes
`void AddMinutes(int value)`

Add the given value to the instance's minute.

### AddSeconds
`void AddSeconds(int value)`

Add the given value to the instance's second.

### AddMilliseconds
`void AddMilliseconds(int value)`

Add the given value to the instance's millisecond.

## Methods (Operation)

### Until
`TimeSpan Until(Date date)`

Gets the time interval from the date and time of this instance to the date and time of the argument `date` as a `TimeSpan`.
This operation can be represented as `date - this` in arithmetic.

### Since
`TimeSpan Since(Date date)`

Gets the time interval from the date and time of the argument `date` to the date and time of this instance as a `TimeSpan`.
This operation can be represented as `this - date` in arithmetic.

### Add
`Date Add(TimeSpan span)`

Adds the time interval of the argument `span` to the date and time of this instance and returns the result as a new `Date` instance.

### Sub
`Date Sub(TimeSpan span)`

Subtracts the time interval of the argument `span` from the date and time of this instance and returns the result as a new `Date` instance.

## Methods (Comparison)

### Equals
`bool Equals(Date other)`

Returns `true` if the date and time represented by this instance and the argument `other` are the same.

### IsAfter
`bool IsAfter(Date date)`

Compares this instance with the argument `Date` and returns `true` if this instance is later than the argument `Date`.

### IsBefore
`bool IsBefore(Date date)`

Compares this instance with the argument `Date` and returns `true` if this instance is earlier than the argument `Date`.

### Compare
`int Compare(Date date)`

Compares this instance with the argument `Date` and returns `0` if they are the same, `1` if this instance is later, and `-1` if this instance is earlier.
