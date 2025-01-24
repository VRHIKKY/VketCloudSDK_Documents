# 12.0.0

## HeliodorLib (Engine used in worlds displayed in the browser)

### Bug Fixes
- Collision detection was not calculated in world coordinate system when moving items.
- Made MToon shaders unaffected by vertex color.
- Fixed an issue where web fonts could not be loaded.
- Nameplates for nearby dummy avatars were not displayed.
- Forced the use of WebGL1.0 internally on MacOS Chrome120 to prevent screen display corruption.
- Blocking another user temporarily did not grey out their icon, instead made the icon disappear.
- Always set video textures to Clamp mode to avoid them turning completely black in WebGL1.0.
- Emotes executed from HeliScript did not trigger gtag calls.
- Screen sharing did not end when a player closed their tab, preventing other players from starting screen share.
- Made IsTextureLoaded return false until the compression texture list's preparation is finished.
- Emotes and icons mismatch after changing the emote set and reloading.
- First addition of audio elements in PostLoad failed.
- Avatar tab in the menu did not revert back to MyAvatar and preset avatars toggle.
- Corrected the internal format specification for creating floating-point textures in WebGL1 for stability improvement.
- Forced Clamp setting for video texture sources not set to Clamp in WebGL1.0 to avoid black screens.
- Forced the use of WebGL1.0 on Android Chrome 120 to circumvent rendering issues.
- Removed unnecessary WebGL function calls in text drawing.
- EC integration related fixes.
- Enabled MyRoomButton functionality.
- Adjusted parameters to stabilize collision detection with small objects on the ground.
- Temporary blocking is possible even when already blocked.
- Adjusted the behavior of the play button in the video window.
- Emotes and icons mismatch after changing the emote set and reloading.
- Avatar tab in the menu did not revert back to MyAvatar and preset avatars toggle.
- Fixed an issue where some iOS devices would stop with an error due to a function call limit.
- Out-of-memory access on iOS 16.4 and earlier.
- Out-of-memory access when dynamically generating UI elements.
- The tab did not revert back to preset avatars after selection.
- Exiting fullscreen in MovieViewer in the old UI caused all UIs to disappear.
- Screen sharing notification was sent to all players when a new player joined even after screen sharing had ended.
- Rendering for glTF models appeared darker in parts.
- Text did not display when using UI clone.
- Corrections to the English translations for avatar display count and microphone permission.
- Blocked users were visible in text chat.
- The blocker becomes visible to the blocked party if the blocked party reloads.
- The blocked user remains invisible to the blocker after temporary unblocking.
- GUI proliferation when creating multiple Particles in ParticleEditor.
- Bounding box calculation for glb objects now considers WorldMatrix.

### UI Features & Adjustments
- Implemented delayed loading for Canvas.
- 9slice.
- UVArea.

### UI Bug Fixes
- Removed the 20-character limit from voice chat channel names.
- Fixed the play button in the video playback window not reverting to its original state.
- Adjusted the overly large hitbox in the world detail UI.
- Allowed names longer than 20 characters without error.
- Made the knobs on sliders movable for on and off positions.

### Feature Additions & Adjustments
- Support for Carnelian.
- Implemented a feature to make objects obstructing the camera invisible through alpha blending.
- Popup display above nameplates when emotes are executed.
- Enabled kick and ban functions.
- Allowed specifying "motions" at the root of Scene files for use in the activity class.
- Display of area information in the config.
- Changed the maximum distance for TPS camera to 10.0m, which can be modified with "tpsmaxdistance" in the Scene file.
- Doubled the setting width for the camera's left, center, and right.
- Changed the description method for items' properties in Scene files (old methods are still readable).
- Unified guest user icons to a gray silhouette.
- Changed hel_openPage to open in the same tab asynchronously on iOS if opening in a separate tab is not possible.
- Allocated 50% of the initial loading ratio to Canvas and GUI.
- Lowered the loading priority for images in layers with AutoLoading set to false.
- Added a low-resolution rendering setting to the config.
- Added SSAO settings to the config and Scene files.
- Referenced devicePixelRatio for correct scaling even when viewport width=device-width is specified.
- Supported glTF bone animations.
- Supported facial expressions for emotions.
- Adjusted to aim for around 60fps on PC.
- Temporarily replaced avatars of inactive users with dummy avatars.
- Temporarily replaced the avatars of users using MyAvatar when they become inactive.
- Added lightmapintensity and lightintensity to Scene file rendering.
- Added Sprite,Texture to F2 key debug features.
- Implemented easing for movement speed.
- Implemented Pager for MyAvatarList.
- Corrected the threshold for VarianceShadowMap to fix thin shadows.
- Adjusted Fresnel calculations.
- Corrected coordinate correction for text textures.
- Clipped TextImage drawing with clip rectangles.
- Enabled texture use even when drawing VRM/MToon outlines.
- Supported MixedLighting for VRM.
- Changed character click detection to capsule shape.
- Added "forcecollidertargetavataronly" to item properties in Scene files, forcing collider target to AvatarOnly.
- Fixed nameplate height for dummy avatars.
- Displayed dummy avatar while loading avatar changes.
- Displayed nameplates even while player avatars are loading.
- Implemented page switching in the MyAvatar selection screen.
- Temporarily switched to dummy avatars when the browser becomes inactive.
- Skipped mirror processing when Mirror's Node or ItemView is hidden.
- Displayed texture memory usage in debug status.
- Allowed exporting HRM without textures in ASTC, ETC2 types.

### Heliscript
- Changed the method name for string conversion of int, float types to ToString().
- Added Player.ChangeActivityMotion(), SetNextActivityMotion() to play motions set in an activity.
- Fixed "/" separated processing in functions like hsItemGet() to support nested activities.
- Added hsSendGtag() for sending Gtag from HeliScript.
- Fixed the handling of custom state and custom data in components of items within an activity using hsNetSetCustomState() and hsNetSendCustomData().
- Allowed receiving OnUnselectNode() and OnUnselectAvatar() events in components when tapping a different type of object than the last.
- Made SetUVOffset() callable from HeliScript components set on HEOObject.
- Added Item.GetParentItem() for components within an activity's item to obtain the parent (the item itself).
- Added hsIsMobile() to determine whether the execution environment is mobile.
- Added Split() method to string.
- Item properties change now triggers OnChangedProperty() callback.
- Update() callback can be received by components attached to AreaCollider.
- Made Item.SetUVOffset available for "object" type.
- Added Item.GetParentItem() for obtaining the parent activity.
- Added hsCameraGetPos(), hsCameraGetPosVector3() to obtain camera position.
- Added hsMD5HashFromString().
- Added hsGetDateLocal().

## SDK (Editor extension tool for creating worlds in Unity)

### Bug Fixes
- Fixed error loading external VRM.
- Corrected HEM preview error.
- Fixed a bug where the last frame might not be exported during clip output.
- Updated the scene update mark to appear instantly when the target object is updated in UI.
- Fixed a bug occurring when pressing UpdateTextureList.
- Corrected HEM visualization error.
- Fixed an error where MyAvatar could not be edited.
- Fixed the error of missing 3D Item>HEO file.

### Feature Additions
- Added accordion for Advanced Options in HEO component inspector.
- Added a button to call Gitignore from template in OtherSettings.
- Added Fast Build without UI feature (sets CanvasList.json to empty during build).
- Added EnableNode, DisableNode actions.
- Preview for HEO, VRM, HEM in inspector.
- Added HEOBackgroundColor.
- Set shader for VRM file imports to MToon.
- Added Priority field to sort items by their Priority value.
- Implemented Character Space feature in HEOTextPlane.
- Displayed a message for unregistered users on login failure.
- Excluded objects with EditorOnly tag from build.
- Displayed license plan and team name in VketCloudSettings settings.
- Added feature to analyze binary for file safety.
- Adjusted so that Disable Node is written into world.json.
- Added import guidance for tutorial scenes, including import from Menu and a dedicated Learning screen.
- Ping and load the corresponding scene at the start of the imported tutorial.
- Changed Package Directory from Vket Cloud SDK to com.hikky.heliodorlib.
- Added right-click menu items.
- Stabilized major modules and improved functionality.
- Changed "HeliScript" display to Japanese.
- Disaggregated UX/UI for use with VketCloudSetting.
- Revised settings screen icons.
- Moved videotigger override from HEOField to VideoTrigger.
- Added HEOScript to the list directly when specifying HELScript hs files.
- Refreshed AssetDatabse after processing Export Field.
- Added features to the world uploader screen (Ver.2.0).
- Added IBL settings for diffuse, specular in Rendering Setting.
- Implemented Debug Console 2.0.
- Added avatar icon display menu.
- Implemented TextureImportViewer2.0.
- Visualization and editing function for Activity.
- Added VRM data compression process to Export Process System as an option.
- Added priority setting UI feature.

### Functionality Changes
- Changed file support from .heo or .vrm to .heo or .vrm or .glb.
- Updated DespawnHeight value in EssentialObjectsGenerator.cs from -1 to -10.
- Revamped HEOActivityUI.
- Set initial focus on SearchText input field.
- Changed to display actions by category.
- Dynamically displayed button list from package.json, Samples~ directory.
- Removed SystemSE from AudioType in HEOAudio.

### Particle Editor
- Fixed a bug that caused an error during save under specific conditions.
- Removed non-functional items from the UI.
- Changed behavior of Scale property.
- Made Rate over Distance in Emission parameters functional.
- Adjusted some value ranges to [0,1].
- Corrected the issue where Shape's HemiSphere was rotated -90° compared to Unity's.
- Fixed the problem where changing Position resulted in double parallel movement.
- Ensured ColorOverLifetimeModule's ColorKey saves alpha values.