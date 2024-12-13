# TimeSpan Class

A class that represents a time interval.

While Date represents a specific point in time on a calendar, TimeSpan represents the interval between two points in time, regardless of culture or region. Therefore, TimeSpan does not contain information related to the calendar, such as weeks or months.

If a value beyond the predefined range is set in the TimeSpan class, it will automatically overlap. For example, if you create a TimeSpan class that represents "17 days 29 hours 32 minutes," it will be normalized to "18 days 5 hours 32 minutes."

Time intervals can be zero or negative.

## Utility Functions for TimeSpan

### hsCreateTimeSpanWithZero
`TimeSpan hsCreateTimeSpanWithZero()`

Generates a TimeSpan initialized to 0. (Equivalent to calling the TimeSpan constructor)

### hsCreateTimeSpanUTCNow
`TimeSpan hsCreateTimeSpanUTCNow()`

Returns the time interval from the UNIX epoch (00:00:00 UTC on January 1, 1970) to the time this function is called as a TimeSpan.

### hsCreateTimeSpanFromDays
`TimeSpan hsCreateTimeSpanFromDays(int days, int hours = 0, int minutes = 0, int seconds = 0, int milliSeconds = 0)`

Generates an instance of TimeSpan with the specified days, hours, minutes, seconds, and milliseconds.

### hsCreateTimeSpanFromHours
`TimeSpan hsCreateTimeSpanFromHours(int hours, int minutes = 0, int seconds = 0, int milliSeconds = 0)`

Generates an instance of TimeSpan with the specified hours, minutes, seconds, and milliseconds.

### hsCreateTimeSpanFromMinutes
`TimeSpan hsCreateTimeSpanFromMinutes(int minutes = 0, int seconds = 0, int milliSeconds = 0)`

Generates an instance of TimeSpan with the specified minutes, seconds, and milliseconds.

### hsCreateTimeSpanFromSeconds
`TimeSpan hsCreateTimeSpanFromSeconds(int seconds, int milliSeconds = 0)`

Generates an instance of TimeSpan with the specified seconds and milliseconds.

### hsCreateTimeSpanFromMilliseconds
`TimeSpan hsCreateTimeSpanFromMilliseconds(int milliSeconds)`

Generates an instance of TimeSpan with the specified milliseconds.

***

## Constructor

### TimeSpan
`TimeSpan()`

Generates a TimeSpan initialized to 0.

## Methods

### Clone
`TimeSpan Clone()`

Duplicates this instance and returns it as a new TimeSpan instance.

### ToString
`string ToString()`

Returns the date and time information held by this instance as a string.

### IsZero
`bool IsZero()`

Returns true if the length of the time interval held by this instance is 0.

### IsNegative
`bool IsNegative()`

Returns true if the length of the time interval held by this instance is negative.

## Methods (Getting Date and Time)

### GetDays
`int GetDays()`

Returns the "days" part of the time interval held by this instance.

### GetHours
`int GetHours()`

Returns the "hours" part of the time interval held by this instance. The range of values is -23 to 23.

### GetMinutes
`int GetMinutes()`

Returns the "minutes" part of the time interval held by this instance. The range of values is -59 to 59.

### GetSeconds
`int GetSeconds()`

Returns the "seconds" part of the time interval held by this instance. The range of values is -59 to 59.

### GetMilliseconds
`int GetMilliseconds()`

Returns the "milliseconds" part of the time interval held by this instance. The range of values is -999 to 999.

## Methods (Getting Total Date and Time)

### ToDays
`int ToDays()`

Gets the entire time interval held by this instance as "days."

More detailed information than days is truncated.

For example, calling ToDays() on a TimeSpan of "2 days 5 hours 30 minutes 15 seconds" will return 2.

### ToHours
`int ToHours()`

Gets the entire time interval held by this instance as "hours."

More detailed information than hours is truncated.

For example, calling ToHours() on a TimeSpan of "2 days 5 hours 30 minutes 15 seconds" will result in "2 * 24 hours + 5 hours = 53 hours," and the result will be 53.

### ToMinutes
`int ToMinutes()`

Gets the entire time interval held by this instance as "minutes."

More detailed information than minutes is truncated.

For example, calling ToMinutes() on a TimeSpan of "2 days 5 hours 30 minutes 15 seconds" will result in "(2 * 24 + 5) * 60 minutes + 30 minutes = 3180 minutes," and the result will be 3180.

### ToSeconds
`int ToSeconds()`

Gets the entire time interval held by this instance as "seconds."

More detailed information than seconds is truncated.

For example, calling ToSeconds() on a TimeSpan of "2 days 5 hours 30 minutes 15 seconds 40 milliseconds" will result in "((2 * 24 + 5) * 60 + 30) * 60 seconds + 15 seconds = 192615 seconds," and the result will be 192600.

### ToMilliseconds
`int ToMilliseconds()`

Gets the entire time interval held by this instance as "milliseconds."

For example, calling ToMilliseconds() on a TimeSpan of "2 days 5 hours 30 minutes 15 seconds 40 milliseconds" will result in "(((2 * 24 + 5) * 60 + 30) * 60 + 15) * 1000 milliseconds + 40 milliseconds = 192615040 milliseconds," and the result will be 192615040.

## Methods (Arithmetic)

### Add
`TimeSpan Add(TimeSpan span)`

Adds the time interval of the argument `span` to this instance and returns the result as a new instance.

### Sub
`TimeSpan Sub(TimeSpan span)`

Subtracts the time interval of the argument `span` from this instance and returns the result as a new instance.

### Negate
`TimeSpan Negate()`

Returns a new TimeSpan instance with the sign of the time interval held by this instance reversed.

## Methods (Comparison)

### Equals
`bool Equals(TimeSpan span)`

Compares this instance with the argument `TimeSpan` and returns true if they are equal.

### GreaterThan
`bool GreaterThan(TimeSpan span)`

Compares this instance with the argument `TimeSpan` and returns true if this instance is greater.

### LessThan
`bool LessThan(TimeSpan span)`

Compares this instance with the argument `TimeSpan` and returns true if this instance is smaller.

### Compare
`int Compare(TimeSpan span)`

Compares this instance with the argument `TimeSpan` and returns 0 if they are the same, 1 if this instance is greater, and -1 if this instance is smaller.
