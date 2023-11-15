# Version Update Troubleshooting

##  Missing Components After Version Update

After committing a [SDK version upgrade](../AboutVketCloudSDK/SetupSDK_external.md), the components created in the previous version may be shown as Missing.

![VersionUpdateTroubleshooting_1](img/VersionUpdateTroubleshooting_1.jpg)

The missing components will be usable by reattaching/fixing the values on the components.<br>
Taking a backup of the pre-updated world is **strongly** recommended for reattaching the components.

The components listed below may potentially be shown as missing:

- HEO Animation
- HEO Collider
- HEO Cylinder Collider
- HEO lbl Cube Map
- HEO Info
- HEO Mesh Collider
- HEO Mirror
- HEO Object Type
- HEO Reflection Probe
- HEO Shadow
- HEO LOD Level
- HEO UV Scroller

!!! note caution
    When updating from Ver5.4 to Ver9.3, the HEOWorldSetting > Avatars > Avatar File settings may be missing, set the file by the procedure below on such occasion.

If the HEOWorldSetting > Avatars > Avatar File settings is empty, or has no contents, it may lead to build errors or no avatars displayed on default.<br>

![HEOWorldSetting_AvatarFileError_1](img/HEOWorldSetting_AvatarFileError_1.jpg)

As the SDK has a default avatarfile, select this file if there is an empty entry in the list after switching the version.

![HEOWorldSetting_AvatarFileError_2](img/HEOWorldSetting_AvatarFileError_2.jpg)

## Version Information Not Updated on Settings Window / HeliScript and Gimmick not working

After updating an existing project to Ver9.3, the version information on the bottom right of the settings window may remain to be the older version after build.

![VersionUpdateTroubleshooting_2](./img/VersionUpdateTroubleshooting_2.jpg)

This can be solved by clearing the cache by VketCloudSDK > Clear Cache.

![VersionUpdateTroubleshooting_3](./img/VersionUpdateTroubleshooting_3.jpg)

!!! note caution
    HeliScript/gimmicks may not work due to browser cache after version switching.<br>
    If such issue happens, try clearing the browser cache.

![VersionUpdateTroubleshooting_4_en](img/VersionUpdateTroubleshooting_4_en.jpg)

## File corruption error appears after updating SDK version

If an updated / non-existing script is attached on a project with an updated SDK, the message below may show up on opening the scene: 

![VersionUpdateTroubleshooting_5](img/VersionUpdateTroubleshooting_5.jpg)

If this issue appears, fix it by deleting the Library and Temp folder in the project folder and reboot the project. 

### How to Fix

1\. Close the Unity project if open.

2\. Open the Unity project with SDK on the explorer.<br>*This can be done by right-clicking the project on Unity Hub, and select "Show in Explorer"

![VersionUpdateTroubleshooting_6_en](img/VersionUpdateTroubleshooting_6_en.jpg)

3\. Delete the Library and Temp folder:

![VersionUpdateTroubleshooting_7](img/VersionUpdateTroubleshooting_7.jpg)

4\. Reopen the Unity project, and check if the error has been solved!
