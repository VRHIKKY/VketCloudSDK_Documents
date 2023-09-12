!!! note
     We skipped releasing the 3.5 series. However, later versions also incorporate the following functional fixes:

# 3.5.4
- Fixed a bug that the volume may not return when transitioning to another tab and returning.

# 3.5.3
- Fixed a bug where LightMap accuracy was low on some Android models.
- Fixed a bug that could cause loading to fail after world transition.
- Fixed a bug where Bloom values were written even when Bloom was off.
- Added menu to open release directory.

# 3.5.2
- Fixed a bug where invisible jump button can be clicked on PC.
- Fixed a bug where normal line was not recalculated during bone animation.
- Fixed a bug that kept the chat log view visible in camera mode.
- Fixed a bug that the text was misaligned when the chat log view was vertical screen.
- Fixed a bug that the nameplate hiding setting in the config was not reflected.
- Fixed a bug that the second display state of the balloon was different.
- Fixed a bug that Bloom did not work on Pixel6.
- Added setting field for dummy avatar.
- Removed HepExporter.

# 3.5.1
- Fixed a bug where VRM motions without SpringBone were not played correctly.

# 3.5.0
- Released HeliScript.
- Adjusted the camera behavior when blocked by a collider.
- A dummy avatar is now displayed over a certain distance. (It is necessary to add "dummyavatar" to the Scene file)
- Added openmovieviewer to action.
- Improved speed by not performing motion processing for avatars outside the screen.
- Implemented automatic blinking of avatars.
- Implemented avatar lip sync.
- Replaced with a safe one when an invalid avatar number was specified. (This deals with the issue of Cookie save)
- Made it possible to adjust the movement speed with the virtual pad.
- Some avatar VRMs have been replaced with BlendShape compatible versions. (For automatic blinking and lip syncing)
- Improved nameplates so they don't block the camera.
- Added correction when rotating the camera.
- You can also move with the cross key.
- Added master volume slider to config.
- Changed the darkness of the round shadow when the avatar leaves the ground.
- Enabled to specify the white fade-in time in the Scene file.
- Fixed a bug that particles could not be regenerated after the second time.
- Fixed a bug that the zoom state was not restored when switching TPS/FPS mode.
- Fixed a bug where new users' voices could be heard even if they were muted.
- Fixed a bug where other players' voices could be heard during initial loading.
- Fixed a bug that the character limit of name input was not performed properly.
- Fixed a bug that virtual pad does not work in FPS mode.
- A set of files output to the Release folder is now stored in a folder that includes the world name.