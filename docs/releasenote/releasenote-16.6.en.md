# Version 16.6.0

## HeliodorLib (Engine used in worlds displayed in browsers)

### Core System
- Fixed an issue where changing the screen ratio while using the item camera would cause it to remain expanded in the previous ratio.

### WebXR
- Implemented the ability to grab items in VR
- Fixed an issue where anti-aliasing was not working in WebXR
- Fixed an issue where cameras or avatars did not follow changes in HMD height.

### UI
- Fixed an issue where the microphone icon on the nameplate would remain ON when moving between coordinate channels.

### HeliScript
- Added support for Item.SetQuaternion in Particles
- Added Item.PostLoad to dynamically start low-resolution texture replacement.
- Added a feature to direct an Item's gaze in a specified direction.
- Improved to allow classes without default constructors to be specified as list types.
- Added support for raycasting to hit Activities.
