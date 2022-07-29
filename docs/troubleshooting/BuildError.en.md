
# Build Error
![BuildError](img/BuildError.jpg)

BuildAndRun launches your web browser, but the contents do not show.

The following might have caused this to happen.

|  Cause |  How to Fix  |
| ----   | ---- |
| The avatar list is empty. | Register at least one avatar. |
| The .heo export is failing. | Please check the Unity Console for red errors. |
| An error in the cache. | Clear your cache from Preferences |
| Cannot find the necessary file (404) | From the error log explained below, find the 404-ing file and change it to a different file format that Vket Cloud supports. |

## Checking the Error Log

To find the cause of build errors, check your web browser's console.

It will differ depending on the browser, but for Chrome, press F12 or go to the three dots on the top right, select other tools, and Developer tools.

![DeveloperTool](img/DeveloperTool.jpg)

The info on the console is not always linked with Vket Cloud's build error, but there is a high chance that any red error is the main cause.

![DeveloperToolConsole](img/DeveloperToolConsole.jpg)

