
# **Unity Pre-prep**
VketCloudSDK requires the following.

- **Unity 2019.4.31f1**

If the above version of Unity is not installed:

Step 1. Download Unity Hub ([From here](https://unity3d.com/get-unity/download){target=_blank})  
  
Step 2. Find and download the specified version from [Unity -Download Archive](https://unity3d.com/jp/get-unity/download/archive){target=_blank} (Click the “Unity Hub” option)
![DownloadVersion](img/DownloadVersion.jpg)  

Please use one of the below systems when running Unity.
- Windows 10, 64-bit
- macOS 10.12+.

Also, we recommend the below systems when entering your world built with VketCloudSDK.

- PC: A computer that supports web browsers such as Chrome / Firefox / Safari / Edge.
- iOS: iPhone X or later, iPhone SE (2nd generation) or later
- Android: Android 11 or later / RAM: 8GB or more / For Google Pixel series, Pixel 5 or later

---

!!! note warning
    The below items will be automatically changed by the SDK, but sometimes the settings may be nullified.<br>
    In that case, please follow the below steps to manually change the settings,

    **Setting API compatibility level**

    1. Click Project Settings... from Edit in the Unity menu bar  

    2. When the Project Settings window appears, click Player from the list.  

    3. Check the Configuration in the Project Settings and change the Api Compatibility Level to ".NET 4.x" from the pull-down menu.

    ![ApiCompatibilityLevelSetting](img/ApiCompatibilityLevelSetting.jpg)

    **Setting LightMap Encoding**

    Likewise above, check the Configuration in the Project Settings and change the Lightmap Encoding to "Normal Quality" from the pull-down menu.

    ![LightMapEncoding](img/LightMapEncoding.jpg)

    **Setting Color Space**
    From Edit >Project Settings, set the  Color Space as Linear.

    ![linear](img/linear.jpg)