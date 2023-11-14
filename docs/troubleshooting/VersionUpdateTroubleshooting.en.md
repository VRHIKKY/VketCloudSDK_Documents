# Version Update Troubleshooting

##  Missing Components After Version Update

After committing a [SDK version upgrade](../AboutVketCloudSDK/SetupSDK_external.md), the components created in the previous version may be shown as Missing.

![MissingComponents_1](./img/MissingComponent_1.jpg)

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