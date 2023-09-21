# How to install VketCloud SDK

To install VketCloud SDK, you need to use the Package Manager of Unity.
  
---
### Step 1. Open a project in Unity
Open a project of a supported version ([Unity Pre-prep](OperatingEnvironment.md){target=_blank}) or create a new project.
Select "3D" as the template, if you need one.

!!! note caution
If you put a space in the project name, the build may fail.
OK) MyProject NG) My Project

---
### Step 2. Register Registry information
Open the "Project Settings" window from the Unity menu Edit > Project Settings.
  
Select "Package Manager" from the left tab in the window and describe as follows.
  
| item | value |
| ---- | ---- |
| Name | VketCloud SDK |
| URL | https://registry.npmjs.com |
| Scope(s) | com.hikky.vketcloudsdk |

   ![Package](img/package.png)
  Finally, press the "Save" button to save the settings.
  
---
### Step 3. Install VketCloudSDK package from Package Manager
  
Open the "Packages" window from Unity's menu Window > Package Manager.

Select "My Registries" from the dropdown at the top of the window.

   ![registry](img/registry.png)

Select VketCloudSDK from the displayed list and press the “Install” button to start the installation.<br>
As on default the latest SDK version will be installed, follow the instructions below if you want to [install a specified version](#installing-a-specified-version--updating-an-existing-sdk).

Installation is complete if the item "VketCloudSDK" is added to the Unity menu.

   ![header](img/header.png)

## Installing a specified version / Updating an existing SDK
For installing a specified SDK version, or updating an existing SDK on project, switch the SDK version via the Package Manager or by editing manifest.json.

!!! note caution
      On updating an existing SDK, Components may be gone missing after the update.<br>
      We strongly recommend to take a backup of the pre-update project by duplicating files.

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
