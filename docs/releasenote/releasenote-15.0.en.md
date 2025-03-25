# Version 15.0.0

## HeliodorLib (Engine used in browser-displayed worlds)

### WebXR
- Adjust the UI appearance (including alpha settings) to match the specifications.
- Fix the display position of UI windows.
- Add functionality to toggle the microphone with the left X button.
- Add functionality to display the menu with Quest’s B or Y button.
- Assign the jump function to the right controller’s A button.
- Change controller rotation from 45° increments to continuous rotation.
- Adjust the position and size of icons.
- Fix issues with noise generation and heavy performance in the Quest browser.

### Load Acceleration

#### Feature Additions

##### Item Duplication Functionality
- Add item duplication functionality for activity-type items.
- Add functionality to duplicate the actions associated with items.
- Implement basic and Object-type item duplication functionality.
- Enable the use of the HS duplication function.
- Optimize instance rendering for identical items.

##### Low-Resolution Texture Creation
- Implement changes to incorporate the low-resolution texture usage flag into HEO.
- Add low-resolution texture pack functionality.

##### draco Compression Functionality
- Support DRACO compression.
- Add DRACO compression settings at both global and game object levels.

### UI

#### Feature Adjustments
- Adjust the position of the SNS sharing button.
- Modify the slider to display the adjustment amount (e.g., volume) alongside it.
- Change the touchpad hit detection from the stick image to the base.
- Change the background of the text chat mini window from a button to an image.
- Implement in-game UI changes in response to the MyVket closure.
- Implement additional UI adjustments related to the MyVket closure.

#### Bug Fixes
- Fix the issue where sound settings reset upon unmuting the master volume.
- Fix the misalignment between the slider bar and the knob.
- Fix issues with avatar type settings when using preset avatars.

### Interaction
- Change the hit detection for area colliders to a capsule shape.
- Fix the issue where UVScroll moves excessively upon returning to a tab.
- Improve click behavior for the inside and outside of the player's capsule collider.
- Change the player's collider detection to a capsule shape.

### Network

#### Bug Fixes
- Fix the issue with the presenter’s microphone during live broadcasts.
- Improve the live channel disconnection process.
- Fix the issue where other users’ MyAvatars disappear upon returning to a tab.
- Fix the issue where guest usernames become empty.
- Add an option to automatically switch to low-resolution mode when FPS drops.

### Scene Settings

#### New Feature Additions
- Enable setting initial values for camera settings via the scene file.
- Allow the use of item duplication functionality in scene files.
- Enable the addition of real-time point lights to scenes.

#### Bug Fixes
- Fix build errors that occur when using specific text elements in scene files.
- Resolve build errors related to point light shaders when using WebGL1.

### Particle Editor

#### New Feature Additions
- Add functionality to specify curves for Rate over Time.
- Implement random color functionality.
- Add save/load functionality for color types (updated for version upgrade).
- Implement and apply input fields for Start Position data.
- Add functionality to rearrange the order of the particle list via the context menu.
- Ensure that existing emits continue to be displayed when particle emission stops.

#### Bug Fixes
- Fix the issue where the highlight turns completely black when selecting with the mouse cursor.
- Adjust item scaling appropriately.
- Fix the issue that prevented numerical input.

### HeliScript

#### New Function Additions
- Add functions for dynamic UI generation.
- Add functionality to control volume in percentage via HeliScript.
- Add an Item.SwitchVideo function equivalent to Item.PlayVideo.
- Add functionality for pre-calculating the area of CanvasText elements.
- Add functionality to trigger an HS callback when an item enters a collider.
- Add functionality to output debug logs for all VMs.
- Add `hsCanvasGetGUIText()`.
- Add an `Item.SetProperty()` function that does not trigger `OnChangedProperty`.
- Add an `Item.SetPropertyWithoutNotify()` function that does not trigger callbacks.
- Add functionality to generate a Date from an ISO8601 formatted string.
- Enable switching between FPS/TPS modes via scene files and HeliScript.
- Enable rendering control via HeliScript.
- Add functionality to trigger an HS callback when executing an emote.
- Add an option to automatically switch to low-resolution mode when FPS drops below a certain threshold.

#### Function Adjustments
- Change the return type of `system.Item_CreateClone`.
- Enhance error display when calling HS callbacks from JavaScript.
- Standardize the behavior of `SetShow()` for LayerBundle and Layer.
- Add reference counter incrementing within the same VM after GetComponent processing.
- Fix the syntax error log output during modulus operations with floats.
- Resolve warnings due to duplicate variable definitions.
- Fix the issue with retrieving boolean values from cookies.
- Fix the issue where slider callbacks did not fire during user interaction.
- Ensure proper invocation of the slider's Rate retrieval method.
- Update various documentation (for dynamic duplication functions, parent item retrieval, mathematical functions, and new features for Date and TimeSpan).

### For Creators

#### Feature Adjustments
- Refactor HEO animation-related code (originally implemented with a humanoid assumption).
- Fix issues where hair and accessory animations were not properly reflected during VRM export.
- Investigate issues with character motion playback in HEM animation output when using MotionExport.

#### Housing
- Change the housing category to “floor” only (SubType support).
- Fix 90° Y-axis rotation issues with wall-mounted furniture.
- Fix the operation of the invite friend toggle.
- Resolve the issue where the clone list was not cleared when F9 was pressed.

#### UI
- Fix issues where some GUI images were not in powers of two.

#### Shader Compiler
- Planned implementation of the shader compiler.

#### Fast Reset
- Add fast reset functionality.

#### Internal Implementation Reorganization
- Implement CI checks for build and type errors in TypeScript.
- Modify network processing to call `OnNetReceivePosJoin/Leave` from the C++ layer.
- Resolve TypeScript errors.
- Fix the leave processing for coordinate channels when `allow_multi` is false.
- Remove the deletion command for archive files.
- Discontinue the use of archive files and change to a specification that aggregates `.o` paths in a text file.
- Implement support for adding DRACO header files in the build script.
- Fix build errors in OpenVR mode.
- Fix point light shader errors when using WebGL1.
- Change the HUD’s Z value to negative to always display it at the back.
- Implement automatic assignment of the UnityAnimator component in HEOAnimator.
- Eliminate duplicate management by removing unnecessary synchronization.
- Conduct error investigation during ExportMotion.
- Fix shader build errors when GLB files are placed.
- Fix the bug where the minimum distance in player hit detection was overwritten.
- Implement ETC2 compression support for text textures (mobile & web only).
- Implement SDK version upgrade.
- Implement automatic placement of necessary files.
- Improve the output process of HPKPacker.
- Add functionality for status changes upon room entry.
- Fix the issue with voice channel connection.

#### AI Chat
- Implement smartphone support for AI chat.
- Implement a test version of AI chat.

#### MyAvatar Refactor
- Fix in-game display issues when switching preset avatars.
- Refactor MyAvatar sequences (removing CustomState).
- Add functionality for setting the AvatarType.
- Add functionality to obtain support status for compressed textures.

#### SMCN
- Update the SmcnSDK version and add settings for splitting.
