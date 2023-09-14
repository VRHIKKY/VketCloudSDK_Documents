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

Select VketCloudSDK from the displayed list and press the “Install” button to start the installation.
  

Installation is complete if the item "VketCloudSDK" is added to the Unity menu.

   ![header](img/header.png)

!!! note 
      If VketCloudSDK fails to show on the Unity menu, it may appear by rebooting the editor.<br>
      One of the reasons may be the lack of essential SDK packages, as the Deeplink package may fail to be imported automatically.<br>
      If such cases occur, please try a [manual package import](../troubleshooting/InstallingDeeplink.md).<br>