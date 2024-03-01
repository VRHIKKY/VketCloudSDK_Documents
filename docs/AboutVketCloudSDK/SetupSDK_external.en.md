# How to install VketCloudSDK

To install the VketCloudSDK, the Unity Package Manager and the VketCloudSDK install wizard is required.
  
---

## Step 1. Open a project in Unity

Open a project of a supported version ([Unity Pre-prep](OperatingEnvironment.md){target=_blank}) or create a new project.
Select "3D" as the template, if you need one.

!!! note caution
    If you put a space in the project name, it may cause build failures and other issues. <br>
    We advise to avoid using full-width characters such as CJK characters.

    OK) MyProject NG) My Project , マイ　プロジェクト

---

## Step 2. Register Registry information

!!! note caution
    On the release of Version 9.3, the SDK installation registry has been changed to the install wizard.<br>
    If you want to install the install wizard on an existing project, you **must** create a new registry by selecting "+", and **do not overwrite** the existing SDK registry.<br>
    After installing the install wizard, proceed to [Installing a specified version / Updating an existing SDK](#installing-a-specified-version-updating-an-existing-sdk).

![SetupSDK_NewRegistry](img/SetupSDK_NewRegistry.jpg)

Open the "Project Settings" window from the Unity menu Edit > Project Settings.
  
Select "Package Manager" from the left tab in the window and describe as follows.
  
| item | value |
| ---- | ---- |
| Name |VketCloudSDK Install Wizard|
| URL |https://registry.npmjs.com|
| Scope(s) |com.hikky.vketcloudsdk-install-wizard|  

   ![Package](img/package.jpg)
  Finally, press the "Save" button to save the settings.
  
!!! note
    If the registry contains a space or any unneeded characters, the error below may appear.<br>
    If the error appears, please check if a space is contained by mistake.

![SetupSDK_RegistrySpaceError](img/SetupSDK_RegistrySpaceError.jpg)

---

## Step 3. Install the VketCloudSDK Install Wizard via Package Manager
  
Open the "Packages" window from Unity's menu Window > Package Manager.

Select "My Registries" from the dropdown at the top of the window.

   ![registry](img/registry.jpg)

Select the VketCloudSDK Install Wizard from the displayed list and press the “Install” button to start the installation.<br>

Installation is complete if the window and Unity menu is displayed as below:

![InstallationWizard_Window](img/InstallationWizard_Window.jpg)

![InstallationWizard_Menu](img/InstallationWizard_Menu.jpg)

## Step 4. Install the SDK using the VketCloudSDK Install wizard

To install the SDK on a new project, use the SDK Install Wizard.

1\. Select the SDK Installation Wizard on the Unity menu.

![InstallationWizard_Menu](img/InstallationWizard_Menu.jpg)

    By opening the Install Wizard, the window will appear as below.

![InstallationWizard_Window](img/InstallationWizard_Window.jpg)

2\. Select the "Next" button to select the preferred language. This language will be used throughout the Installation Wizard.

![InstallationWizard_2_en](img/InstallationWizard_2_en.jpg)

3\. The window for setting the recommended initial settings will appear. Complete all three settings to proceed.<br>  Although the recommended settings may be ignored, SDK functionality cannot be guaranteed in such case.

![InstallationWizard_3_en](img/InstallationWizard_3.jpg)

### Setting API compatibility level

1. Click Project Settings... from Edit in the Unity menu bar  

2. When the Project Settings window appears, click Player from the list.  

3. Check the Configuration in the Project Settings and change the Api Compatibility Level to ".NET 4.x" from the pull-down menu.

![ApiCompatibilityLevelSetting](img/ApiCompatibilityLevelSetting.jpg)

### Setting LightMap Encoding

Likewise above, check the Configuration in the Project Settings and change the Lightmap Encoding to "Normal Quality" from the pull-down menu.

![LightMapEncoding](img/LightMapEncoding.jpg)

### Setting Color Space

From Edit >Project Settings, set the  Color Space as Linear.

![linear](img/linear.jpg)

### Setting Standard Shader Quality

!!! caution "Setting Standard Shader Quality"
    On Ver12.3 and later versions, setting the standard shader quality has been added as a required setting.<br>
    If not set the SDK will cause a build error, so make sure to set on install.

The physically based rendering on Vket Cloud uses the same algorithm (GGX) as Unity's Medium level, so you will need to make some changes in the settings.

1. Open Edit/ProjectSettings/Graphics
    ![OpenGraphics.jpg](he_image/OpenGraphics.jpg)

2. In the Tier Settings, uncheck "Use Defaults" on Low, Medium, and High
    ![TierSettings.jpg](he_image/TierSettings.jpg)

3. In the Tier Settings, change the "Standard Shader Quality" on Low, Medium, and High, to "Medium"
    ![StandardShaderQuality.jpg](he_image/StandardShaderQuality.jpg)

---

4\.  By finishing each setting, a check mark will appear on each article. <br>  By ignoring the settings and selecting the "Next" button, a window of warning will appear.

![InstallationWizard_4_en](img/InstallationWizard_4_en.jpg)

5\. By selecting "Next", the version selection window will appear.<br> The SDK version can be chosen from stable, latest, archive versions.

!!! note caution
    The archive versions are deprecated and planned to be unaccessible in the near future.<br>
    Do not use these versions for setting up new world projects.

![InstallationWizard_5_en](img/InstallationWizard_5.jpg)

6\. After selecting version and proceeding by selecting the "install" button, the package import will begin.

![InstallationWizard_6_en](img/InstallationWizard_6_en.jpg)

7\.　After waiting approx. 2~5 minutes, the installation will be completed with the window below.<br>
The SDK manual and community discord server can be accessed from this window.

![InstallationWizard_7_en](img/InstallationWizard_7_en.jpg)

## Installing a specified version / Updating an existing SDK

For a project with an existing SDK, the SDK Version Manager can be used for switching and updating SDK versions.<br>

### Version switch via SDK Version Manager

1\. By selecting VketCloudSDK_Wizard > SDK Version Manager, the version selection window will appear.

![SDKVersionManager_1](img/SDKVersionManager_1.jpg)

2\. Select the new version to be installed, and press the "Install" button.

!!! note caution
    The archive versions are deprecated and planned to be unaccessible in the near future.<br>
    Do not use these versions for setting up new world projects.

![InstallationWizard_5_en](img/InstallationWizard_5.jpg)

3\. By selecting the install button, the import window will appear as below.

![SDKVersionManager_3_en](img/SDKVersionManager_3_en.jpg)

4\. As the installation is completed, the version completion window will appear as below.

![SDKVersionManager_4_en](img/SDKVersionManager_4_en.jpg)

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

!!! note 
      If VketCloudSDK fails to show on the Unity menu, it may appear by rebooting the editor.<br>
      One of the reasons may be the lack of essential SDK packages, as the Deeplink package may fail to be imported automatically.<br>
      If such cases occur, please try a [manual package import](../troubleshooting/InstallingDeeplink.md).<br>
      
      As the EditorTutorialSystem may also rarely fail to be imported automatically, add the package below following the instructions on [Step 2.](#step-2-register-registry-information) on such occurence.

|  item  |  value  |
| ---- | ---- |
|  Name  |  EditorTutorialSystem  |
|  URL  |  https://registry.npmjs.org  |
|  Scope(s)  |  com.hikky.editortutorialsystem  |