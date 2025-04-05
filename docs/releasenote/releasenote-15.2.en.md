# Version 15.2.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Graphics

#### Bug Fixes
- Fixed an issue where material tiling was not applied during light baking.

### WebXR

#### Feature Adjustments
- Changed motion tracking to use the latest MediaPipe API.

### HeliScript

#### Function Additions
- Added the ability to change the projection of the VKC Item Camera from HeliScript.

### UI

#### New Features
- Implemented a dialog that displays on-screen to trigger a reload when a build error occurs.
- Added functionality to enable sliding of the user list in the voice chat channel.

#### Feature Adjustments
- Adjusted so that, during large-scale events, performers' nameplates are displayed under the same conditions as avatar displays.
- Modified the delayed-loading UI to load before the avatars.

#### Bug Fixes
- Fixed an issue where, if the movement speed had been changed, switching avatars would revert the speed to its previous setting.
