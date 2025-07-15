# Version 15.8.0

## WebXR
### Feature Adjustments
- Changed cursor design

### Bug Fixes
- Fixed an issue where UI elements other than normal menus could not be clicked
- Applied emergency fix for an issue where the entire screen would turn black when using mirrors or normal shadow maps in the world  
※In the current version, mirrors are changed to white materials, and normal shadows cannot be used properly.

## UI
### Bug Fixes
- Fixed an issue where the member list in the upper left corner sometimes showed a discrepancy with the actual number of people in the world
- Fixed an issue where global text chat messages were still displayed between users even after blocking or temporarily blocking each other

## HeliScript
### Function Additions
- Added hsSendToastNotice function
  - Function to display arbitrary toast notifications in the upper right corner of the screen
- Added hsSendLocalData function and OnReceiveLocalData callback
  - Function to send and receive data locally only without network synchronization