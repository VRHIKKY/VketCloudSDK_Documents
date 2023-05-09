
# Built-in functions - system

!!! Note Info
    Functions that enable access to Vket Cloud's underlying system (browser and OS).

***

### hsSystemOutput(string)
`void hsSystemOutput(string text)`
Outputs the string specified by the argument to the console.

### hsSystemIsDebugMode()
`bool hsSystemIsDebugMode()`
Returns true if Vket Cloud is running in debug mode.

### hsSystemGetTime()
`int hsSystemGetTime()`
Returns the elapsed time in milliseconds since the app started.

### hsSystemGetDeltaTime()
`float hsSystemGetDeltaTime()`
Returns the elapsed time in seconds from the last frame to the current frame.

### hsGetDate(int year, int month, int day, int week, int hour, int minute, int second)
`void hsGetDate(int year, int month, int day, int week, int hour, int minute, int second)`
Returns the date time based on the specified argument.

### hsWebOpen(string)
`void hsWebOpen(string url)`
Open url.