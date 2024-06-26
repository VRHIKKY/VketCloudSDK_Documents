# Build and Run

To check and test the created world,the world can be entered in local environment by running "Build and Run".

## How to build / Build Options

To build a scene with VketCloudSDK, make sure you have placed the [required components](WorldBasicComponents.md) and initiate the build from VketCloudSDK > Build And Run.
  
![BuildAndRun](img/BuildAndRun.jpg)

!!! note question "If you can't build"
     There may be various reasons causing the build error. Please refer to [Troubleshooting](../troubleshooting/BuildError.md).

!!! note "Build Options"
    The build options on VketCloudSDK > Settings > "Build" can designate settings such as auto texture compression on build.<br>
    For details, refer to [Build Options](../WorldEditingTips/BuildOptions.md).

On build options, the creator can set various settings for world assets on build.

To edit build options, Open VketCloudSDK > Settings, and select the "Build" tab.

If the build succeeds, the browser will automatically open. Please check if the contents of the scene are properly reflected.

![BuildAndRun](img/buildsuccess.jpg)

!!! note tip "Clear Cache"
    The build cache stored in the VketCloudSDK will be overwrited every build, therefore clearing cache is unrequired.<br>
    However, some build errors may be related to the cache in rare cases such as after upgrading the SDK, so consider clearing cache in such situation.<br>
    - VketCloudSDK > Clear Cache<br>
    Also, by selecting - VketCloudSDK > Build Option > Auto Clear Cache, the clear cache may be enabled before every build. This setting is not required on usual builds.

## What happens on running "Build and Run""

Running "Build and Run" will convert objects with the [VKC Item Field](../VKCComponents/VKCItemField.md) component and all its child objects into a .heo file format. ".heo" is a 3D file format used exclusively by Vket Cloud's drawing engine.

The built files are then copied to the `[project name]\release\data` folder. This folder will contain all the assets needed to run the world in a browser.

### Overview of release folder  

|  Location  |  File  |  Description  |
| ---- | ---- | ---- |
|  \release  |  main.html  |  Open this html in your browser to start the 3D world  |
|  \release\data\Field\ [world name]\ [object name]  |  [object name].heo  |  3D object in the world  |
|  \release\data\Scene  |  [world name].json  |  Scene data that describes the world setup  |

Note that the act of uploading a manually altered release folder is **strictly prohibited** by license terms of use. Please use it only as one of the debugging means.
