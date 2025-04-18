# Build Error / How to troubleshoot issues

## Build Errors

![BuildError](img/BuildError.jpg)

Build And Run launches your web browser, but the contents may not be displayed properly.

This can be caused by several reasons, but the common issues are the following:

|  Cause |  Solution  |
| ----   | ---- |
| The avatar list is empty | Register at least one avatar |
| Element in [VketCloudSettings/BasicSettings/HeliScript](../VketCloudSettings/BasicSettings.md) is empty. | Delete the element that is being [`None` or `Missing`](../VketCloudSettings/BasicSettings.md). |
| The .heo export is failing. | Please check the Unity Console or [Debug Console](../debugconsole/debugconsole.md) for red errors. |
| Error in the Unity cache. | Clear your cache from Preferences |
| Error in the browser cache. | Clear your cache of your browser |
| Cannot find the necessary file (404) | From the error log explained below, find the 404-ing file and change it to a different file format that Vket Cloud supports. |
| The directory path / file name in your Unity Project contains spaces or full-width characters | Delete any spaces or double-byte characters. |
| HeliScript Errors | Please see the [Error Log](#checking-the-error-log) to solve the issue. |

!!! warning "First build on Mac environments"
    Depending on your Mac environment, the first Build and Run may result to display "Can't Find the Server" or cause a Build Error.<br>
    If this issue happens, try Build and Run again or reload the browser to solve the issue.

### If changes you made are not showing up

There are cases where the changes you made in Unity does not apply in the web browser.

In most cases, this is caused by **the cache keeping old information**.

|  Cause |  How to Fix  |
| ----   | ---- |
| Your web browser still has the cache of old information. | Hard reload the web page using Ctrl+Shift+R. |

Cache in Unity can be cleared by clearing the cache by Vket Cloud SDK > Clear Cache.

![VersionUpdateTroubleshooting_3](./img/VersionUpdateTroubleshooting_3.jpg)

HeliScript/gimmicks may not work due to browser cache after version switching.<br>
If such issue happens, try clearing the browser cache.

![VersionUpdateTroubleshooting_4_en](img/VersionUpdateTroubleshooting_4_en.jpg)

### Checking the Error Log

To find the cause of build errors, check your web browser's console.

It will differ depending on the browser, but for Chrome, go to the three dots on the top right, select other tools, and open Developer tools.

![DeveloperTool](img/DeveloperTool.jpg)

The info on the console is not always linked with Vket Cloud's build error, but any red error is highly likely to be the main cause.

![DeveloperToolConsole](img/DeveloperToolConsole.jpg)

!!! warning "How to check HeliScript function errors while loading"
    On SDK Ver13.4 and later versions, the [Debug Mode's](../WorldEditingTips/DebugMode.md) message window showing HeliScript errors during world loading has been omitted as part of UI adjustments.<br>
    If the world loading stops, please check if any errors are happening by opening the console tab on the browser's Developer Mode.<br>
    Please note that the debug message window will appear as previous SDK versions after world loading.

### Checking the imported library

Sometimes the build error may be caused by library or script imported from Package Manager or others.

In such cases, the error can be fixed by reimporting the newly imported library that is likely to be the cause.

!!! warning "caution"
        As the EditorTutorialSystem package may rarely fail to be imported automatically, causing build errors, add the package below using the [Package Manager](../AboutVketCloudSDK/SetupSDK_external.md) on such occurrence.

### Using the Debug Console / DebugMode

The SDK provides tools for debugging, which on the Unity editor the debug console can be used, while on the browser the debug mode can be enabled to solve issues.
Refer to the pages below for instructions.

[Debug Console](../debugconsole/debugconsole.md)

[Debug Mode](../WorldEditingTips/DebugMode.md)

## Browser window blackouts

If the browser window remains to blackout on entering the world, check the following:

|  Cause |  How to Fix |
| ----   | ---- |
| Hardware Acceleration on the browser is disabled | Enable hardware acceleration via the browser settings |
| A gamepad is connected on the PC | Disconnect the gamepad connected to the PC |
| Build Error is unsolved | See [Build Error](./BuildError.md) for instructions |

For example, if the browser is Chrome, enabling "Use hardware acceleration when available" via the "System" section on settings may fix the blackout.

![BrowserBlackWindow](./img/BrowserBlackWindow_en.jpg)

## Error Message List

| エラーメッセージ | Timing of message appearance | Cause | Notes |
|----------------|------------------------------|-------|-------|
| バイナリ出力に失敗しました | During HeliScript check in loading | When `T` in a member variable list (`list<T>`) is a class and is `new`ed at the definition | An error saying "バイナリ出力に失敗しました" appears and the process freezes during the loading screen |
| return文の最後に【;】がありません | During HeliScript check in loading | Forgot the `;` at the end of the return statement |  |
| クラスの中でのオブジェクト初期化は出来ません | During HeliScript check in loading | Initializing objects inside the class |  |
| 【Vector3】は定数型として有効ではありません | During HeliScript check in loading | Tried to define a Vector3 class constant with `const`<br>`const` can only be applied to `int`, `float`, `bool`, and `string` |  |
| 引数配列型次元数【1】に対して、引数の次元数は【0】です | During HeliScript check in loading | Attempting to pass a non-list argument to a `list` parameter |  |
| 【◯◯】はクラスメンバ名としては無効です | During HeliScript check in loading | Forgot to specify the method’s return type |  |
| 関数【×××】の第◯引数は◯◯値ではなく◯◯参照です | During HeliScript check in loading | Incorrect type passed as an argument |  |
| float値に剰余演算は適用できません | During HeliScript check in loading | Attempted to perform a modulo operation on a float (e.g., `float % int`) |  |
| クラス【◯◯】にメンバ【××】は存在しません | During HeliScript check in loading | Incorrect class method name specified |  |
| delegate型でないオブジェクトを使って関数が呼び出されました | During HeliScript check in loading | Incorrect method name specified |  |
| 関数定義ブロックの最後に【}】がありません | During HeliScript check in loading | This appears along with method name errors<br>`}` was forgotten |  |
| 【 REF 】命令 範囲外アクセスエラー (Page = ◯, Index = ◯) 要素数 = ◯ at {クラス名}::{メソッド名} | During method execution | An out-of-range reference<br>Attempted to reference a null Vector3 or Quaternion | It’s unclear what "Page" refers to.<br>Page or element count can be negative. |
| 【 CALLMETHOD 】命令 Null reference error: Method "{クラス名}@{メソッド名}" was called from null object. at Helicopter::Helicopter | During method execution | The class instance on which the method was executed is null<br>Forgot initialization or called before initialization |  |
| 関数呼び出しの深さ制限に到達しました | During method execution | Infinite loop in repeated processing |  |
