
# **Unity Pre-prep**
VketCloudSDK requires the following.

- **Unity 2019.4.31f1**

If the above version of Unity is not installed:

Step 1. Download Unity Hub ([From here](https://unity3d.com/get-unity/download))  
  
Step 2. Find and download the specified version from [Unity -Download Archive](https://unity3d.com/jp/get-unity/download/archive) (Click the “Unity Hub” option)
![DownloadVersion](img/DownloadVersion.jpg)  

## **Setting up Unity**
### Setting the Android Build Support module

1. You will also need to install Unity's **Android Build Support Module**.
![AddModules](img/AddModules.jpg)
![AndroidSupportInstall](img/AndroidSupportInstall.jpg)

2. After installing, open up a Unity project and go to File > Build Settings and change the Platform to Android mode.
![PlatformSetting](img/PlatformSettings.jpg)  

3. If the Unity mark is displayed in the Android item, this procedure is completed.  
  
### **Setting API compatibility level**
1. Click Project Settings... from Edit in the Unity menu bar  

2. When the Project Settings window appears, click Player from the list.  

3. Check the Configuration in the PC settings and change the Api Compatibility Level to ".NET 4.x" from the pull-down menu.
    ![ApiCompatibilityLevelSetting](img/ApiCompatibilityLevelSetting.jpg)


### **Setting Color Space**
Set each item from Setting each Edit >Project Settings as follows.

|  item  |  value  |
| ---- | ---- |
| Player > Other Settings > Rendering > Color Space | Linear | 

   ![liner](img/liner.jpg)