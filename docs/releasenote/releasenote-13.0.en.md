# Version 13.0.0

## SDK (Editor extension tool for creating worlds in Unity)

### New Features
- **HEOActivity Editing:** Added functionality for editing HEOActivity.
- **File Deployment Config:** New configuration options for file deployment.
- **VKC Attribute Clickable UI:** Added clickable UI attributes within VKC.
- **VKC Node Alpha Animation:** Added alpha animation options for VKC nodes.
- **GUITools Package Distribution:** Distributed the GUITools package for enhanced GUI editing capabilities.

### Modified Features
- **Debug Console Updates:**
  - Now throws an error if HEO Fields are overlapping in the hierarchy.
  - Displays a warning if the Mesh setting 'Read/Write Enabled' is not active in FBX files when imported into Unity projects, and automatically sets FBX file R/W to true.
- **Compression Function Speed Improvement:** Enhanced the function to compress to powers of two for faster operation.
- **Avatar File Organization:**
  - Removed the 'Emotion' field.
  - Removed the 'Height' field (now automatically retrieved from the avatar's VRM by the engine).
- **HEOActivity JSON Selection:** Restricted search functionality to JSON files within the Assets folder only.
- **File Icon Asset Updates:** Updated the asset for file icons.
- **Component Name Changes:** Renamed various components.
- **Name Change from HEOObjectType to VKCNodeReflectionProbeDetectType.**
- **Action Trigger Type PopUp Consolidation:** Reviewed and consolidated the states of Type PopUp for Action Triggers.
- **Basic Settings:**
  - Changed the label from 'World Name' to 'World ID'.
  - Added 'File Deployment Config' settings.
- **Avatar Settings:**
  - Made default avatar files (e.g., Vketchan_v1.6_MToon_blendshape.asset, vketnyan) non-editable.
  - Added a new 'File Mode' setting for avatar files (options include VRM/HRM).
- **HEO Collider Updates:**
  - Added a new 'Player' option to Collider Target settings.

### Deprecated Features
- **Build Options > UI-less Build Acceleration:** Removed the feature that sped up builds without UI.
- **My Avatar Setting > Emotion:** Removed the Emotion functionality.
- **Avatar File > Emotion:** Removed the Emotion functionality from avatar files.

## HeliodorLib (Engine used in browser-displayed worlds)

### Feature Enhancements and Adjustments

- **(HEOExporter)** Enabled the parent object of reflection probes to be properly located even if game objects are not placed at the root.
- **Player Motion Update** Now updates motion even outside the camera range for the player’s own avatar.
- **Particle Effects** Included in the DrawCall count.
- **Debugger Rendering** Added a button to copy settings to the clipboard.
- **"adjustposdownward" Parameter** Added to Scene files for type=object items to adjust the shadow position to the collision point below.
- **Loading Issue** Mitigated the problem where initial loading pauses at 20%.
- **Expression BlendShape Limits** Eased the restriction on the number of BlendShapes.
- **"uselightscattering" Parameter** Added to Scene files to enable light scattering per item.
- **Clickable Movement** (Available only on PC).
- **Shadow Drawing** No longer draws shadows if there is no collider at the foot.
- **Button Interaction** Multiplied color display to make it clear when buttons, such as HUDs, are clicked.
- **GUI Image Loading** Keeps buttons like HUDs in a non-selectable state until GUI image loading is complete.
- **UVAreaRate** Added to Canvas.
- **Clickable UI** Can now be configured solely via the scene file.
- **In-game Loading Screen** Removed display elements for loading screens (supports full-screen HTML loading).
- **Text Chat Log Window** Displays emoticons.
- **Target Focus** Allows focusing on the clicked target.
- **"transitiontopage" Action** Added to open web pages in the same tab.
- **"showphotomode" Flag** Added to Scene files to indicate whether an item should be displayed in photo mode.
- **Additional Motions** Added turn-around and counterturn motions.
- **Generic Notification Window**
- **Default Value for "avatariconshow"** Changed to false in Scene files.
- **"DebugLog" Action** Added.
- **HEO MToon Outline Mask Support**
- **Pack File Support** for Canvas and GUI images.
- **Android Chrome 122** From version 122 onwards, uses WebGL2.0 without breaking the display, even if WebGL2.0 is enabled.
- **Autoplay on First Touch** Implemented click handling with autoplay:true in the activity class.
- **Photo Mode Preview** Darkens the surroundings and adds a frame to make it clearer that it's a preview.
- **Emote Server Support**
- **Emote Popup** Draws regardless of the nameplate display flag.
- **Particle Item Unload Process** Implemented.
- **Dummy Avatar Index** For players using preset avatars, the dummy avatar index is calculated from the preset avatar index.
- **Nameplate Width** Adjusted according to the actual font drawing size.
- **"tpsxrotateenable" Setting** Added to Scene files to allow X-axis rotation of the TPS camera.

### Bug Fixes

- **Camera Type Issues** Fixed the bug where switching to TPS mode during type=camera use would reflect the camera position at the player's position.
- **(Script)** Fixed bugs where some ItemTypes would not return correct values for GetPos/GetWorldPos/GetRotate/GetWorldRotate.
- **SSAO Texture Format** Corrected the issue where RGBA8 instead of R8 texture format was used.
- **SeekBar Z-Value** Matched with the Z-value of the layer's mask.
- **Texture Size Fetching** Made ApplyUVArea return a failure when texture size cannot be obtained.
- **SeekBar Resize Bug**
- **Sound Effect Freezes** Freezes if Play() is called after Stop() before completion via onended.
- **Profile Button Over Avatar Target**
- **Text Rendering Bugs**
- **Blocking Issues** Fixed bugs related to blocking not being reflected immediately upon reload.
- **Relative Position in Activity Class** for particle effects.
- **Block Display after Reload**
- **ShadowMap Issue** Fixed the bug where switching avatars would stop displaying the player's shadow.
- **Collider Debug Display Error**
- **9slice Display Issue**
- **Two-Finger Button Press Restriction**
- **Button Interaction Bug** Fixed issue where pressing outside and moving the cursor inside the button would start the press.
- **Button Client Area Click Response**
- **Item Load Failure** After unloading a type=object item and loading it again, it failed to load.
- **Single Quote Syntax Error** Fixed a browser environment issue where single quotes in log outputs would cause JavaScript syntax errors.
- **Occlusion Culling** Adjusted OnEnterView/OnLeaveView to exclude/include occluded items appropriately.

### HeliScript

- **Avatar Number Retrieval**
- **Player.SetControlEnabled** (Set permission for player control)
- **Player.SetJumpVelocity** (Change jump speed

 settings)
- **CameraRotate Argument in Player.SetPos** Now if set to false, the camera does not rotate in TPS mode.
- **Json and JsVal Conversion**
- **Layer Path Search** Implemented hsLayerGetPortrait(), hsLayerGetLandscape().
- **Activity Canvas Retrieval** with hsLayerGet().
- **GUI Methods** Added to the Layer class.
- **Item.ChangeMotion** Added default argument for blend time.
- **Item.LoadMotion**
- **hsCallComponentMethod(), hsCallCanvasComponentMethod()**
- **Item.SetBlendShapeRate**
- **Item.SetPlayTime/GetPlayTime** Implemented. Adjusts and retrieves playtime settings for type=object.
- **Item.Pause/Restart** Implemented. Applies to type=object motions.