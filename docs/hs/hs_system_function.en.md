
# Built-in functions - system

!!! Note Info
    Functions that enable access to Vket Cloud's underlying system (browser and OS).

***

## System

### hsSystemOutput

`void hsSystemOutput(string text)`

Outputs the string specified by the argument to the console.

### hsSystemWriteLine

`void hsSystemWriteLine(string text)`

Outputs the string specified by the argument to the console, added with a return.

!!! note caution
    In the current version, if a string includes an apostrophe / single quote (' ' , U+0027), the process will stop due to error.<br>
    Therefore, please avoid using the quotation within strings.

### hsSystemIsDebugMode

`bool hsSystemIsDebugMode()`

Returns true if Vket Cloud is running in debug mode.

### hsIsMobile

`bool hsIsMobile()`

Returns true if Vket Cloud is running in a mobile device.

### hsSystemGetTime

`int hsSystemGetTime()`

Returns the elapsed time in milliseconds since the app started.

### hsSystemGetDeltaTime

`float hsSystemGetDeltaTime()`

Returns the elapsed time in seconds from the last frame to the current frame.

### hsGetDate

`void hsGetDate(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minute, ref int second)`

Returns the local date time based on the specified argument.

The year, month, and day value will start from 1.

The week value will designate the day of week as { 0=sun, 1=mon, ..., 6=sat }.

### hsGetDateLocal

`void hsGetDateLocal(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minute, ref int second)`

Returns the local date time based on the specified argument.

Refer to hsGetDate() for arguments.

### hsGetDateUTC

`void hsGetDateUTC(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minute, ref int second)`

Returns the date time by UTC.

Refer to hsGetDate() for arguments.

### hsGetEpochSeconds

`int GetEpochSeconds()`

Returns the total seconds counted from the UNIX epoch (January 1, 1970 12:00:00 am)

### hsGetTimezoneOffset

`int hsGetTimezoneOffset()`

Returns the offset of local timezone and UTC timezone by minutes.

### hsGetCurrentWorldId

`float hsGetCurrentWorldId()`

Returns the current world ID.

***

## Type Casts

### int(float)

`int int(float)`

Converts float value to integer.

### float(int)

`float float(int)`

Converts integer to float value.

### bool(int)

`bool bool(int)`

Converts integer to boolean value.

0 will be converted to true, while other values will be converted to false.

### string(int)

`string string(int)`

Converts integer to string.

### string(float)

`string string(float)`

Converts float value to string.

***

## Web

### hsWebOpen(string)

`void hsWebOpen(string url)`

Opens the url designated by string.

***

## Language

### hsGetLang()

`string hsGetLang()`

Returns the current system language. (Returns string value likewise navigator.language in Javascript. )

### hsIsLangJA()

`bool hsIsLangJA()`

Returns `true` if current system language is Japanese.

### hsIsLangEN()

`bool hsIsLangEN()`

Returns `true` if current system language is English.
