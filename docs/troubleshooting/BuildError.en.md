
# Build Error
![BuildError](img/BuildError.jpg)

Build And Run launches your web browser, but the contents may not be displayed properly.

This can be caused by several reasons, but the common issues are the following:

|  Cause |  How to Fix  |
| ----   | ---- |
| The avatar list is empty. | Register at least one avatar. |
| Element in `HEOWorldSettings/BasicInfo/HeliScript` is empty. | Delete the element that is being [`None` or `Missing`](../HEOComponents/HEOWorldSetting.md). |
| The .heo export is failing. | Please check the Unity Console for red errors. |
| Error in the Unity cache. | Clear your cache from Preferences |
| Error in the browser cache. | Clear your cache of your browser |
| Cannot find the necessary file (404) | From the error log explained below, find the 404-ing file and change it to a different file format that Vket Cloud supports. |

## Checking the Error Log

To find the cause of build errors, check your web browser's console.

It will differ depending on the browser, but for Chrome, go to the three dots on the top right, select other tools, and open Developer tools.

![DeveloperTool](img/DeveloperTool.jpg)

The info on the console is not always linked with Vket Cloud's build error, but any red error is highly likely to be the main cause.

![DeveloperToolConsole](img/DeveloperToolConsole.jpg)

## Checking the imported library

Sometimes the build error may be caused by library or script imported from Package Manager or others.

In such cases, the error can be fixed by reimporting the newly imported library that is likely to be the cause.

