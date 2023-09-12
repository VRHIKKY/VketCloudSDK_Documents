# 3.8.3
- Prevented the browser from starting when the build failed.
- Removed lonic.zip and added DotNetZip instead.
- When selecting heo or vrm with HEOObject, the target will now be filtered.
- .hep specified by HEOParticle is now filtered.
- Fixed a bug that caused respawn colliders to remain generated in the scene when the build failed.
- Fixed an issue where OpenReleaseDirectory was not working on mac.
- Fixed some spelling mistakes in English notation.

# 3.8.2
- Fixed the issue of crash on iOS14 observed after Ver. 3.8.

# 3.8.1
- Fixed the phenomenon of click detection in the world penetrating the UI.
- Removed unnecessary processing that was executed every frame.

# 3.8.0
- The rotate specification of spawns/spot in the Scene file is now reflected in the X-axis rotation of the TPS camera mode.
- Removed DXT texture compression for round shadows.
- Implemented real-time shadows.
- Implemented UI animations.
- Added depth of field filter on camera mode.
- Added a function to limit the camera mode movable range by radius.
- Supported WebFont.
- Enabled to specify WebColor for color change of clone text.
- The height of the headbone can now be reflected even for avatars loaded by drag and drop.
- You can now open the web page by clicking the URL in the chat log.
- HEOSameTexOptimizer now supports the latest HEO file format.
- Added HeliScript/hsPlayerGetID.
- Added HeliScript/OnClickedAvatar.
- Added HeliScript/global component setting function.
- Supported HeliScript/Heliport.
- Fixed the phenomenon that the object of the specified material is hidden for a moment immediately after playing the video.
- Fixed the phenomenon that the screenshot of camera mode failed on iOS.
- Fixed the phenomenon that your own avatar can hide the click detection of objects during single play.
- Background download will now be stopped when HLS video playback is stopped.