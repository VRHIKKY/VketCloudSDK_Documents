# GUITools - Overview and Setup

GUITools is a derivative tool outside of VketCloudSDK designed to edit and save the Activity Canvas GUI for VKC Item Activities in worlds created in Vket Cloud. The tools are primarily divided into GUI Importer and GUI Exporter, and the json files saved by the edits made in GUITools are referenced at the time of world loading. If a new UI is added, it needs to be defined by HeliScript. For more details, see [Advanced Implementation](AdvancedUse.md) and [Built-in Functions - GUI](../hs/hs_system_function_gui.md).

## A. Preparation

As preparation, set up the Unity project and install the VketCloudSDK according to the procedures in [How to Install VketCloudSDK](../AboutVketCloudSDK/SetupSDK_external.md).

!!! caution "Points to Note When Setting Up the Environment"

    - The editor version should be 2019.4.31f1
    - Use the 3D template
    - Ensure the project name does not include spaces, Hiragana, Katakana, Kanji, or any other double-byte characters

From here on, explanations will be provided with Unity's Layout in "2 by 3" and the Project view in One Column Layout.

## B. Installing GUITools

![GUITools_Setup_01](img/GUITools_Setup_01.jpg)

Select Edit > Project Settings… from the top tab in Unity.

![GUITools_Setup_02](img/GUITools_Setup_02.jpg)

Choose Package Manager, click +, and enter the following information, then select Apply.

| Item | Input |
| ---- | ---- |
| Name | VketCloudSDK_GUITools |
| URL  | https://registry.npmjs.com |
| Scope(s) | com.hikky.vketcloudguitools |

After applying, select Window > Package Manager from the Unity top tab.

![GUITools_Setup_03](img/GUITools_Setup_03.jpg)

When you switch the display tab to My Registries, `VketCloudSDK_GUITools` should be displayed.

![GUITools_Setup_04](img/GUITools_Setup_04.jpg)

Click the Install button to perform the installation.

![GUITools_Setup_05](img/GUITools_Setup_05.jpg)

Once the installation is complete, VketCloudGUITools is now installed. Confirm that 'VketCloudGUITools' is displayed in the Unity top tab.

## C. Installing UniTask

If UniTask is not automatically imported depending on the environment, please install UniTask from the PackageManager.

![GUITools_Setup_03](img/GUITools_Setup_03.jpg)

Click the + button in the upper left corner, and select Add package from git URL…

![GUITools_Setup_06](img/GUITools_Setup_06.jpg)

Copy the following URL into the textbox that appears and click the Add button

*Skip this step if UniTask is already included in the project

`https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask`

![GUITools_Setup_07](img/GUITools_Setup_07.jpg)