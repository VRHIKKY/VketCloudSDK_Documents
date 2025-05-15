# Version 15.5.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Visual
### Bug Fixes
- Fixed an issue where loading would not complete when both Wait Time(s) and Scroll Time(s) were set to 0
- Fixed a bug where when Scroll Time(s) was set to 0, it would actually display as if it were set to 0.02 seconds

### Sound
#### Bug Fixes
- Fixed an issue where BGM would sometimes not play on Android devices

### RTC (Real-Time Communication)
#### Bug Fixes
- Fixed an issue where changing to a MyAvatar after entering a world with a preset avatar, then moving to another channel would revert back to the preset avatar and prevent further synchronization of changes
- Fixed an issue where MyAvatar changes of other players were not reflected when re-entering the same coordinate channel
- Fixed a rare issue where players wearing MyAvatars would appear invisible when entering a room
- Fixed an issue in certain worlds where players wearing MyAvatars would appear as initial preset avatars when returning to the original room after moving to a different room

### Debug
#### Feature Adjustments
- Improved error handling to enable error dialog display for WebAssembly errors
