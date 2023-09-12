# 3.7.3
- The format for saving screenshots on iOS has been changed from PNG to JPEG, and the problem of saving failures in some environments has been fixed.
- Changed avatar data settings so that they can be set for each file by introducing AvatarFile.
- Added a tool to check if each asset is configured for VketCloud.
- You can now view the past changelogs in the control panel.

# 3.7.2
- Fixed a bug that the round shadow drawing covered the avatar.
- Added search window and scroll to action list popup.
- Added an option to not group the files output to the Release folder into a folder with the world name.
- Disabled ibl preferences.

# 3.7.0
- The seek bar is no longer displayed in full screen mode during screen sharing.
- Added HEOSameTexOptimizer.py to unify textures.
- Added HRM files for preset avatars.
- Improved nameplate drawing process.
- Improved collision detection between camera and collider in camera mode.
- Up to 50 nameplates can now be displayed.
- When the video playback without specifying a loop ends, it will now return to the original state.
- Increased the maximum number of characters in the chat log to 200 half-width characters.
- Supported VRM/UnlitTexture and VRM/UnlitTransparent shaders.
- Disabled emote while jumping.
- Improved movement animations for other players.
- Enabled anisotropic filtering.
- Improved VRM outline drawing.
- Fixed a bug where anti-aliasing was not enabled when saving images in shooting mode on iOS.
- Supported some VRM files that could not be read.
- Prevented shadows from floating with other players while jumping.
- Changelog in the control panel will now be sorted.
- Reorderable action list.
- Added particle editor launch shortcut.
- Added configuration field for ibl.
- Animation converter now supports motion capture data.
- Added checkbox to HEOField to enable dynamic loading.
- Changed lighting settings to refer to directional lights in the scene.