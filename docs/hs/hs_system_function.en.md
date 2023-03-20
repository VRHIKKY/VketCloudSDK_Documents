
# Built-in functions - system

Functions that enable access to Vket Cloud's underlying system (browser and OS).


***

## System

###hsSystemOutput(string)
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

### hsGetDate(ref int, ref int, ref int, ref int, ref int, ref int, ref int)
`void hsGetDate(ref int year, ref int month, ref int day, ref int week, ref int hour, ref int minute, ref int second)`



***


## Web
### hsWebOpen(string)
`void hsWebOpen(string url)`

Open url.