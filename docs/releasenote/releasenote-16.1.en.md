# Version 16.1.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Core Functionality

#### Bug Fixes
- Fixed issue where MToon outline mask textures were not reflected

### HeliScript

#### Feature Additions
- Support for RemoveProperty functionality
- Added all physics-related actions to HeliScript
- Support for getting node names in OnLongPressedItem

#### Bug Fixes
- Fixed to properly handle multiple touches for each finger individually
- Fixed issue where camera binding occurred when passing 0 as argument to fade in/out related functions
- Fixed issue where OnReceiveTextChat(), OnReceiveCustomData(), etc. were executed twice upon reception
- Fixed issue where node index could not be obtained with hsItemRaycast
- Fixed issue where enum could not be set as default argument

### UI/UX

#### Bug Fixes
- Fixed issue where profile input area went behind MyAvatar icon
- Fixed issue where Screen Resolution text was cut off in English setting
- Fixed issue where toast notification UI disappeared after opening and closing settings screen
- Fixed issue where camera rotated significantly when starting drag at screen edge