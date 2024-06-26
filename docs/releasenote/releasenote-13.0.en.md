# Version 13.0.0

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