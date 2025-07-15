
# Built-in functions - system

!!! info "Note"
    Functions that enable access to Vket Cloud's underlying system (browser and OS).

***

## System

### hsSystemOutput

`void hsSystemOutput(string text)`

Outputs the string specified by the argument to the console.

### hsSystemWriteLine

`void hsSystemWriteLine(string text)`

Outputs the string specified by the argument to the console, added with a return.

!!! warning "caution"
    In the current version, if a string includes an apostrophe / single quote (' ' , U+0027), the process will stop due to error.<br>
    Therefore, please avoid using the quotation within strings.

### hsSystemIsDebugMode

`bool hsSystemIsDebugMode()`

Returns true if Vket Cloud is running in debug mode.

### hsIsMobile

`bool hsIsMobile()`

Returns true if Vket Cloud is running in a mobile device.

### hsGetSDKVersion

`string hsGetSDKVersion()`

Returns the current version string of VketCloudSDK.

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

`string hsGetCurrentWorldId()`

Returns the current world ID.

***

## Toast Notification

### hsSendToastNotice

`void hsSendToastNotice(int noticeTypeID, string message, float viewTime, string identifyKey)`  

Displays a notification message with slide-in animation from the right edge of the screen.  
Maximum 5 notifications can be displayed simultaneously. When additional notifications are sent while 5 are already displayed, they are queued internally and will be shown when display slots become available.  

Non-error notifications can be dismissed by clicking, regardless of remaining display time.

#### noticeTypeID (int)  
Notification message type ID. The correspondence between ID and icon is as follows:
|ID|TYPE|
|---|---|
|00|INFO|
|10|WARNING|
|20|ERROR|
|nn|INFO (all non-standard values default to INFO)|

#### viewTime (float)  
Sets the time the notification is displayed on screen.  
1 = 1 second, entry/exit animation time is not included in this duration. (0.5 seconds each)  

#### identifyKey (string)  
Identification key that users can embed arbitrarily.  

When a toast notification is clicked or dismissed after timeout, it triggers a Local event `OnReceiveLocalData(string key, string data)` that can use this as an identification tag.  

`string key` is fixed as the string `"toast"`  
`string data` contains the notification information as a string.  

#### Information stored in data  
```json
{
  "noticeTypeID" : "notification type ID",
  "identifyKey" : "identification string set by user in `identifyKey`",
  "message": "message displayed in notification",
  "sendAction": "timing when this data was sent"
}
```
#### sendAction timing
| sendAction | Value |
| --- | --- | 
| OnClick | User clicked the toast |
| ViewTimeOver | When the time set in viewTime is exceeded |
| OnForceQuit | When toast notification is clicked and dismissed (Info and Warning only) |


#### Sample Code
```cs
// Sample
// Handler for receiving localData
public void OnReceiveLocalData(string key, string data){
    if(key != "toast") { return; }
    string identifyKey = GetNoticeIdentifyKey(data);

    hsSystemWriteLine("Toast notification identify key : %s" % identifyKey);
}

// Extract identification key from string JSON format data received via localData
private string GetNoticeIdentifyKey(string data){
    JsVal toastData = makeJsValFromJson(data);
    return toastData.GetProperty("identifyKey").GetStr();
}
```

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

### hsWebReload

`void hsWebReload()`

Reloads the web page.

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
