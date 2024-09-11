# Date Class

The Date class is for handling date and time on HeliScript.

Date class internally holds the time passed from the UNIX epoch (January 1 1970 12:00:00 am).

Date class is a variable class, which can be updated by calling SetYear(), AddHour(), and other functions to update the internal data after instantiation.
To save the Date data before update, please consider copying by using Clone().

If Date class is set with a value over a certain range, the data will be overlapped automatically. For example, if a Date class with the date "May 33 1990" was generated, it will be normalized to "June 2 1990".

## Date utility functions

### hsCreateDate

`Date hsCreateDate(int year, int month = 1, int day = 1, int hour = 0,  int minite = 0,  int second = 0, int millisecond = 0)`

Create a Date instance with the defined date in the current local time zone.

### hsCreateDateUTC

`Date hsCreateDateUTC(int year, int month = 1, int day = 1, int hour = 0,  int minite = 0,  int second = 0, int millisecond = 0)`

Create a Date instance with the defined date in UTC.

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

Get the year value based on the local time zone.

### GetMonth
`int GetMonth()`

Get the month value based on the local time zone, starting with 1. (Range: 1-12)

### GetDayOfYear
`int GetDayOfYear()`

Get the day of year based on the local time zone, starting with 1. (Range: 1-366)

### GetDayOfWeek
`int GetDayOfWeek()`

Get the day of week based on the local time zone, starting with 0. (Range: 0-6)

### GetDay
`int GetDay()`

Get the day of month based on the local time zone, starting with 1. (Range: 1-31)

### GetHours
`int GetHours()`

Get the hour based on the local time zone, starting with 0. (Range: 0-23)

### GetMinutes
`int GetMinutes()`

Get the minute based on the local time zone, starting with 0. (Range: 0-59)

### GetSeconds
`int GetSeconds()`

Get the second based on the local time zone, starting with 0. (Range: 0-59)

### GetMilliseconds
`int GetMilliseconds()`

Get the millisecond based on the local time zone, starting with 0. (Range: 0-999)

## Methods (Get value based on UTC)

### GetUTCYear
`int GetUTCYear()`

Get the year value based on UTC.

### GetUTCMonth
`int GetUTCMonth()`

Get the month value based on UTC, starting with 1. (Range: 1-12)

### GetUTCDayOfYear
`int GetUTCDayOfYear()`

Get the day of year based on UTC, starting with 1. (Range: 1-366)

### GetUTCDayOfWeek
`int GetUTCDayOfWeek()`

Get the day of week based on UTC, starting with 0. (Range: 0-6)

### GetUTCDay
`int GetUTCDay()`

Get the day of month based on UTC, starting with 1. (Range: 1-31)

### GetUTCHours
`int GetUTCHours()`

Get the hour based on UTC, starting with 0. (Range: 0-23)

### GetUTCMinutes
`int GetUTCMinutes()`

Get the minute based on UTC, starting with 0. (Range: 0-59)

### GetUTCSeconds
`int GetUTCSeconds()`

Get the second based on UTC, starting with 0. (Range: 0-59)

### GetUTCMilliseconds
`int GetUTCMilliseconds()`

Get the millisecond based on UTC, starting with 0. (Range: 0-999)

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
