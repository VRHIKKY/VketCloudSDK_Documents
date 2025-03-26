# Version 15.0.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Load Acceleration

#### Item Duplication Functionality
- Added a function to duplicate items placed using VKC Item Object.

### UI

#### Feature Adjustments
- Adjusted the position of the SNS sharing button.
- Modified the slider to display the adjustment amount (e.g., volume) alongside it.
- Changed the touchpad hit detection from the stick image to the base.
- Changed the background of the text chat mini window from a button to an image.
- With the integration of MyVket features, the in-game UI now links to the [VketCloud official website](https://cloud.vket.com).
- Added an option to automatically switch to low-resolution mode when FPS drops.

#### Bug Fixes
- Fixed an issue where sound settings were reset when unmuting the master volume.
- Fixed misalignment between the slider bar and the knob.
- Fixed issues with avatar type settings when using preset avatars.

### Interaction
- Changed the player's collider detection to a capsule.
- Fixed an issue where UVScroll moved excessively upon returning to a tab.
- Improved click behavior when other players and the camera overlap.

### Network

#### Bug Fixes
- Fixed an issue with the presenter's microphone during live broadcasts.
- Improved the live channel disconnection process.
- Fixed an issue where other users' MyAvatars disappeared upon returning to a tab.
- Fixed an issue where guest usernames appeared empty.

### Scene Settings

#### Bug Fixes
- Fixed build errors that occurred when using specific text elements within scene files.

### HeliScript

#### New Function Additions
- Added various functions for dynamic UI generation.
- Added the `Item.SetVolume()` function to adjust audio volume.
- Added an `Item.SwitchVideo` function equivalent to `Item.PlayVideo`.
- Added the `hsCanvasGetGUIText()` function to retrieve GUI text elements.
- Added the `Item.SetPropertyWithoutNotify()` function, which does not trigger `OnChangedProperty`.
- Added the `hsCameraSetFPSMode()` function for switching between FPS/TPS modes.
- Added various functions to dynamically control Bloom and Light Scattering.
- Added the `OnEmoteChanged()` callback function, which is triggered when executing an emote.
- Added functionality to generate a Date class from an ISO8601 formatted string.
