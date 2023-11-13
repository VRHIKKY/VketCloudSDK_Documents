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
    When updating from Ver5.4 to Ver9.3, there is a risk that the HEOWorldSetting > Avatars > Avatar File settings may be missing, so please make a backup before doing this as well.

## Version Information Not Updated on Settings Window

After updating an existing project to Ver9.3, the version information on the bottom right of the settings window may remain to be the older version after build.

![VersionUpdateTroubleshooting_2](./img/VersionUpdateTroubleshooting_2.jpg)

This can be solved by clearing the cache by VketCloudSDK > Clear Cache.

![VersionUpdateTroubleshooting_3](./img/VersionUpdateTroubleshooting_3.jpg)