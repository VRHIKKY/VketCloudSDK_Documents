# 3.9.6
- Fixed an issue where MToon's rim light texture was not reflected correctly.
- Fixed the problem of stains displayed on the screen when using Bloom while using MToon.
- Fixed an issue of the physics engine where the CenterOffset was not reflected.
- Fixed an issue of physics engine where objects not set to Enable can be moved.
- Added Item.SetScale/GetScale to HeliScript.
- Fixed an issue where Bloom was not working.

# 3.9.5
- Fixed a crash occuring when you try changing to a preset avatar from My Avatar and press OK.

# 3.9.4
- Fixed an issue of overlapped the display positions when multiple text chats arrived while the tab was inactive.
- Fixed an issue of item loading where colliders are loaded without the position adjustment.
- Fixed an issue where HEODespawnHeight area size was reset when exiting Unity.

# 3.9.3
- Fixed an issue of broken polygon rendering due to SpringBone behavior on some VRMs.
- Added dummyavatars to specify multiple dummy avatars in the Scene file.
- Added support for VRM outline mask.

# 3.9.2
- ColliderTarget now works even in camera mode.
- Fixed an issue where the camera position may drop when using My Avatar.

# 3.9.1
- Fixed an issue of crash on iOS14, which was ovserved after Ver. 3.8.
- Fixed an issue where the camera mode filters introduced in 3.9 did not work.

# 3.9.0
- Implemented the My Avatar filter function.
- Changed to draw dummy avatars by instance drawing.
- Implemented Canvas dynamic loading feature.
- Improved PBR of StandardShader.
- Added mono/sepia filters for camera modes.
- Your own avatar is now loaded with priority over other avatars.
- Added functionality to implement target UI/target emote.
- Enabled to place components on Canvas.
- Added Item.SetQuaternion/GetQuaternion to HeliScript.
- Added Player.SetEmotion/Emote to HeliScript.
- Added hsCanvasSetGUIPos to HeliScript.
- Added hsCameraGetXVector to HeliScript.
- Added hsCanvasWorldToScreenPos to HeliScript.
- Fixed an issue where click detection penetrates UI such as HUD.
- Fixed an issue where NormalMap was not working on ReflectionProbe.