# Version 16.5.8

## SDK (Editor Extension Tool for Creating Worlds in Unity)

### Fixed Issues

- **VKC Item Clone > Build**
    - Fixed an issue where having an object with VKC Item Clone in the scene caused a Null Reference error during build, resulting in build failure

- **VKC Item Object > Instance Draw**
    - Fixed an issue where the Instance Draw option was displayed twice in the advanced settings

- **VKC Node Collider > Auto Attach**
    - Fixed an issue where VKC Node Collider was not automatically attached during build, which could cause nodes with VKC Attribute Action Trigger to stop responding to clicks

- **HPKPacker.exe**
    - Fixed an issue where HPKPacker.exe was not included in the external SDK package

- **VKC Attribute Script > HeliScript File Name and Component Name**
    - Fixed issues that occurred when the HeliScript file name and component name were different, such as HeliScript becoming none or an unintended component name being entered when adding a new component

- **VKC Attribute Script > Scene JSON**
    - Fixed an issue where the previous component name remained in the components field of the scene JSON after changing the component name

- **VKC Item Point Light**
    - Fixed an issue where the component contents were not displayed in the Inspector and builds failed

---

# Version 16.5.0

## SDK (Editor Extension Tool for Creating Worlds in Unity)

### Main Features

- **My Assets / Activity Import Function**
    - Added the ability to display and import assets from cloud.vket.com's My Assets as a list

- **World Profiler**
    - Added a profiler function to analyze and visualize world performance

### New Features

- **VKC World Setting > Rendering Setting**
    - Added the ability to import values from rendering JSON

- **VKC Item Object > Instance Draw**
    - Added the Instance Draw parameter

- **Build Setting > Folder Deletion Function**
    - Added an option to disable the automatic folder deletion function during upload (internal use)

- **CopyOperation > File Compression**
    - Added compression for various files within Activity (textures, HEO, VRM, HEP)

- **hs File Line Ending Unification**
    - Added processing to unify line endings to LF so that hs files with mixed CRLF and LF can be built

- **Upload UI Panel Width Saving**
    - Improved to save the left panel width of the upload UI

- **VKC Item Camera > ItemCamera**
    - Added the ItemCamera parameter

- **HeliScript File Creation Button**
    - Updated the label to be more intuitive

- **DebugConsole > Error Dialog**
    - Improved the error dialog to display more clearly when Activity is being edited

- **HEOCamera > autoscreensize**
    - Added the autoscreensize parameter

- **BaseSetting > World Name Warning**
    - Added a warning display and automatic length adjustment when the world name is too long

- **DRACO Compression/Decompression**
    - Added DRACO compression/decompression functionality

- **ReadHEOFile Refactoring**
    - Removed unnecessary dependencies and created a script for DLL conversion

- **VKC Item Object > collider**
    - Added the collider parameter

- **VKC Components > Action Hiding**
    - Hidden multi-node actions from display

- **CameraSettings > Various Parameters**
    - Added xrotatereverse, yrotatereverse, defaulttpscamerapitchangletype, and cameraspeed parameters
      - *Note: This feature will become available after the upcoming HeliodorLib update.*

- **Texture Import Viewer > Warning**
    - Added a warning for scene save requirement

- **HeliScript Template Registration Screen**
    - Created a template registration screen

- **VKC Video Node > EventMap**
    - Implemented the EventMap auto-generation interface

- **Heliodor Version Switching for Testing**
    - Added an extension for SDK developers to switch Heliodor versions during testing

- **Asset Name Validator > Warning Improvement**
    - Added a selection button to display warnings only once when renaming multiple files

- **VKC Item PointLight > Show Parameter**
    - Added the Show parameter

### Bug Fixes

- **VketCloudSetting > PlayModeManager**
    - Fixed a bug where an error occurred when playing a standard scene

- **VKC Helper > Create VKC Object**
    - Fixed a bug where the main thread would deadlock

- **DebugConsole > Multiple Builds**
    - Fixed a bug where textures would be stripped when performing multiple builds

- **Build&Run > hem Files**
    - Fixed a bug where placing a hem file inside an Activity would cause a build error

- **HEO Script > Deletion Process**
    - Fixed an issue where HEOScript-side scripts would remain after deletion from the settings side

- **FileDeploymentConfig**
    - Fixed a bug where checkboxes were not enabled when created via asset selection

- **WorldCameraSetting > UI**
    - Fixed the button width to accommodate label text that was wider than the button

- **VketCloudSetting > BasicInfo**
    - Fixed to allow building even when HeliScript contains Null

- **HeliodorLib Encrypted png**
    - Fixed to prevent errors by overriding Import Settings for custom encrypted png files (Phase 2)

- **GameObjectGenerator**
    - Fixed Asset Generator > GameObject generation

- **VKCItemActivity > ScenePreview**
    - Fixed an issue where turning on ScenePreview would throw an Exception

- **Translation Database**
    - Fixed an issue where characters such as line breaks were not displayed correctly

- **Hierarchy > HierarchyHelper**
    - Fixed an issue where having a MissingScript would cause errors and make the corresponding object uninteractable

- **VKCAttributeScript**
    - Fixed an issue where setting an hs file in SDK 15.1.0 would cause a build error

- **VKCNodeRotateAnimation**
    - Fixed an issue where in-scene visualization was not working

- **Scene Preview > Checkmark**
    - Fixed an issue where it could not be turned OFF once turned ON

- **HEO > ScenePreview**
    - Fixed an issue where Shaders were not applied correctly

- **VKCVideoTrigger > Label Display**
    - Fixed an issue where the ItemObject link flag label was too long and would be cut off

- **VKC Text Plane > Rotation**
    - Fixed an issue where the display would reset to 0 when pressing Build & Run or in-scene visualization after rotating

- **VKC Item Pointlight/Clone**
    - Partially fixed HeliScript Component scene file writing
