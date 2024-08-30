# How to install VketCloudSDK

To install the VketCloudSDK, the Unity Package Manager and the VketCloudSDK install wizard is required.
  
## Step 1. Open a project in Unity

Open a project created using a supported Unity version ([Unity Pre-prep](OperatingEnvironment.md){target=_blank}) or create a new project.
Select "3D" as the template.

!!! caution "Notes about project names and path (directory) names"
    If a space is included in the project / project path (directory) name, it may cause build errors and other unexpected issues. <br>
    Also avoid using full-width characters such as CJK characters.

    OK) MyProject　　NG) My Project , マイ　プロジェクト

![SetupSDK_External](img/SetupSDK_External_01.jpg)

---

## Step 2. Register Registry information

!!! note caution
    On the release of Version 9.3, the SDK installation registry has been changed to the install wizard.<br>
    If you want to install the install wizard on an existing project, you **must** create a new registry by selecting "+", and **do not overwrite** the existing SDK registry.<br>
    After installing the install wizard, proceed to [Installing a specified version / Updating an existing SDK](#installing-a-specified-version-updating-an-existing-sdk).

![SetupSDK_External](img/SetupSDK_External_02.jpg)

Open the "Project Settings" window from the Unity menu Edit > Project Settings.
  
Select "Package Manager" from the left tab in the window and describe as follows.
  
| item | value |
| ---- | ---- |
| Name |VketCloudSDK Install Wizard|
| URL |https://registry.npmjs.com|
| Scope(s) |com.hikky.vketcloudsdk-install-wizard|  

Finally, press the "Save" button to save the settings.
  
!!! note
    If the registry contains a space or any unneeded characters, the error below may appear.<br>
    If the error appears, please check if a space is contained by mistake.

![SetupSDK_External](img/SetupSDK_External_03.jpg)

---

## Step 3. Install the VketCloudSDK Install Wizard via Package Manager
  
Open the "Packages" window from Unity's menu Window > Package Manager.

![SetupSDK_External](img/SetupSDK_External_04.jpg)

Select "My Registries" from the dropdown at the top of the window.

![SetupSDK_External](img/SetupSDK_External_05.jpg)

Select the VketCloudSDK Install Wizard from the displayed list and press the “Install” button to start the installation.<br>

![SetupSDK_External](img/SetupSDK_External_06.jpg)

Installation is complete if the window and Unity menu is displayed as below:

![SetupSDK_External](img/SetupSDK_External_07.jpg)

![SetupSDK_External](img/SetupSDK_External_08.jpg)

If the project path contains a space or full-width characters, the following warning will appear at startup.

![SetupSDK_External](img/SetupSDK_External_28.jpg)

## Step 4. Install the SDK using the VketCloudSDK Install wizard

To install the SDK on a new project, use the SDK Install Wizard.

1\. Use the wizard window opened by the above steps, or select the SDK Installation Wizard on the Unity menu.

![SetupSDK_External](img/SetupSDK_External_08.jpg)

By opening the Install Wizard, the window will appear as below.

![InstallationWizard_Window](img/InstallationWizard_Window.jpg)

2\. Select the "Next" button to select the preferred language. This language will be used throughout the Installation Wizard.

![SetupSDK_External](img/SetupSDK_External_09.jpg)

3\. The window for setting the recommended initial settings will appear. Complete all four settings to proceed.


If Unity 2019 is installed, complete the following settings:

![SetupSDK_External](img/SetupSDK_External_10.jpg)


If Unity 2022 or later is installed, complete the following settings

![SetupSDK_External](img/SetupSDK_External_27.jpg)


### Setting Standard Shader Quality

!!! caution "Setting Standard Shader Quality"
    On Ver12.3 and later versions, setting the standard shader quality has been added as a required setting.<br>
    If not set the SDK will cause a build error, so make sure to set on install.

The physically based rendering on Vket Cloud uses the same algorithm (GGX) as Unity's Medium level, so you will need to make some changes in the settings.

1. Click Project Settings... from Edit in the Unity menu bar  

1. Open Edit/ProjectSettings/Graphics

  ![SetupSDK_External](img/SetupSDK_External_11.jpg)

2. Once the Project Settings window opens, in the Graphics settings tab, under "Tier Settings," uncheck "Use Defaults" for the "Low (Tier 1)" option, and change the "Standard Shader Quality" setting to "Medium."

  ![SetupSDK_External](img/SetupSDK_External_12.jpg)

3. Repeat the process for "Medium (Tier 2)" and "High (Tier 3)" options located below "Low (Tier 1)."

  ![SetupSDK_External](img/SetupSDK_External_13.jpg)

### Setting Color Space

From Edit >Project Settings, set the  Color Space as Linear.

  ![SetupSDK_External](img/SetupSDK_External_14.jpg)

### Setting LightMap Encoding

Likewise above, check the Configuration in the Project Settings and change the Lightmap Encoding to "Normal Quality" from the pull-down menu.

![SetupSDK_External](img/SetupSDK_External_15.jpg)

### Setting API compatibility level (Only for Unity 2019.4)

!!! note caution
    For Unity 2022 or later, this setting is not required.
    SDK 13.7 and later versions support both Unity 2019 and Unity 2022.

1. When the Project Settings window appears, click Player from the list.  

2. Check the Configuration in the Project Settings and change the Api Compatibility Level to ".NET 4.x" from the pull-down menu.

![SetupSDK_External](img/SetupSDK_External_16.jpg)

---

4\.  By finishing each setting, a check mark will appear on each article. <br>  By ignoring the settings and selecting the "Next" button, a window of warning will appear.

  ![SetupSDK_External](img/SetupSDK_External_17.jpg)

5\. By selecting "Next", the version selection window will appear.<br> The SDK version can be chosen from stable, latest, archive versions.

!!! note caution
    The archive versions are deprecated and planned to be unaccessible in the near future.<br>
    Do not use these versions for setting up new world projects.

  ![SetupSDK_External](img/SetupSDK_External_18.jpg)

6\. After selecting version and proceeding by selecting the "install" button, the package import will begin.

![SetupSDK_External](img/SetupSDK_External_19.jpg)

7\.　After waiting approx. 2~5 minutes, the installation will be completed with the window below.<br>
The SDK manual and community discord server can be accessed from this window.

![SetupSDK_External](img/SetupSDK_External_20.jpg)

8\. In the Unity menu, click on "Login" under the "VketCloudSDK" item.<br>
A Web browser will open automatically.

![SetupSDK_External](img/SetupSDK_External_21.jpg)

9\. Log in to your Vket account through the web browser, then click the "Open Unity Editor" button.

![SetupSDK_External](img/SetupSDK_External_22.jpg)

## Installing a specified version / Updating an existing SDK

For a project with an existing SDK, the SDK Version Manager can be used for switching and updating SDK versions.<br>

### Version switch via SDK Version Manager

1\. By selecting VketCloudSDK_Wizard > SDK Version Manager, the version selection window will appear.

![SetupSDK_External](img/SetupSDK_External_23.jpg)

2\. Select the new version to be installed, and press the "Install" button.

!!! note caution
    The archive versions are deprecated and planned to be unaccessible in the near future.<br>
    Do not use these versions for setting up new world projects.

![SetupSDK_External](img/SetupSDK_External_24.jpg)

3\. By selecting the install button, the import window will appear as below.

![SetupSDK_External](img/SetupSDK_External_25.jpg)

4\. As the installation is completed, the version completion window will appear as below.

![SetupSDK_External](img/SetupSDK_External_26.jpg)

The SDK manual and community discord server can be accessed from this window.

!!! note caution
      On updating an existing SDK, Components may be gone missing after the update.<br>
      We strongly recommend to take a backup of the pre-update project by duplicating files.

!!! note caution
    If issues such as build errors appear on updating the SDK, please refer to the page below:<br>
    [Version Update Troubleshooting](../troubleshooting/VersionUpdateTroubleshooting.md)

!!! note caution
    The version switching methods below remains to be usable, using the version manager is recommended.

### Version switching via Package Manager

After registering the registry information on [Step 2.](#step-2-register-registry-information), open the Package Manager via "Window" --> "Package Manager".<br>
In the Package Manager, make sure that the VketCloudSDK shows up on switching the registry view to "My Registries".<br>

![SetupSDK_PackageManager_1](./img/SetupSDK_PackageManager_1.jpg)

On selecting "See all versions", all released SDK versions will be listed.<br>
Select the SDK version to be installed, then proceed by selecting the "Install" or "Update to [Version]" on the bottom right to install the SDK.

![SetupSDK_PackageManager_2](./img/SetupSDK_PackageManager_2.jpg)

### Version switching via manifest.json

Editing the manifest.json is also available for switching versions.<br>
To open the project's manifest.json, right click on the Project window and select "Show in Explorer", which enables to locate the file in "Projects"-->[Project Name]-->"Packages".

![SetupSDK_ManifestJson_1](./img/SetupSDK_ManifestJson_1.jpg)

![SetupSDK_ManifestJson_2](./img/SetupSDK_ManifestJson_2.jpg)

By editing the version number on the right side of `"com.hikky.vketcloudsdk"`, the installing / updating version will be switched.

![SetupSDK_ManifestJson_3](./img/SetupSDK_ManifestJson_3.jpg)

!!! caution "Solution to VketCloudSDK not showing on Unity menu"
      If VketCloudSDK fails to show on the Unity menu, it may appear by rebooting the editor.<br>
      One of the reasons may be the lack of essential SDK packages, as the Deeplink package may fail to be imported automatically.<br>
      If such cases occur, please try a [manual package import](../troubleshooting/InstallingDeeplink.md).<br>

      As the EditorTutorialSystem may also rarely fail to be imported automatically, add the package below following the instructions on [Step 2.](#step-2-register-registry-information) on such occurence.

|  item  |  value  |
| ---- | ---- |
|  Name  |  EditorTutorialSystem  |
|  URL  |  https://registry.npmjs.org  |
|  Scope(s)  |  com.hikky.editortutorialsystem  |
