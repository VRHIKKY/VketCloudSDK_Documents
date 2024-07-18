# 13.5.0

## HeliodorLib (Engine used in browser-displayed world)

### Feature Additions and Adjustments
- The extrusion parameter of HEO is now off by default.
- Added a setting to toggle click movement on and off.
- When accessing resources from activities, always refer to the local URL instead of the CDN.
- Adjustments related to X embedding.

### Bug Fixes
- Fixed an issue where login state checks were performed twice, causing achievement notifications to fail.
- Resolved a visual issue when applying SetRotate to TextPlane items.
- Fixed a problem where moving to a higher position with click movement resulted in a big jump.
- Adjusted the size of the action list.
- Corrected an issue where the end animation of the emote palette shifted to the lower left.
- Fixed position misalignment in text chat.
- Resolved an issue where the scale of the MeshCollider was squared.