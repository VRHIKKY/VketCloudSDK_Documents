# Version 14.4.12

## SDK (Editor extension tool for creating worlds in Unity)

## Fixed Bugs
- Fixed build errors that occurred when setting `VKCItemAreaCollider`, `VKCNodeActionTrigger`, or `VKCSettingNameplate`.
- Addressed an issue where selecting the analog clock activity in `VKCAttributeScript` and upgrading from 13.7.7 to 14.1.0 caused the Heliscript item to be removed.
- Resolved a problem where two finger icons were displayed under certain conditions for `VKC Attribute Clickable UI`.
- Fixed an issue where thumbnails reverted to an unselected state after following certain steps in the World Uploader.
- Corrected layout issues in the World Uploader when selecting images in the detailed settings section.
- Prevented non-png/jpeg files from being selectable when "AllFiles" was specified in the World Uploader.
- Fixed an issue where pressing the play button in the editor failed to make Vket-chan appear in the scene.
- Resolved a problem where preview text was not displayed for `VKC TextPlane` even when entering custom text.
- Fixed an issue where Gizmos icon rendering priorities reset after saving the scene.
- Addressed a problem in SDK 14.2.1 where exported HEO details from the "Export Field" feature could not be viewed.
- Resolved inconsistencies in icon sizes displayed in the hierarchy.
- Fixed an issue where the wrong icons were displayed when multiple components were attached.
- Addressed disappearing Gizmos icons for `VKCAreaCollider` when deselected.
- Fixed non-functional shortcuts.
- Corrected an issue where objects became invisible or the screen turned black when setting `VKCItemobject` rotation values to specific configurations (X:90/Y:90/Z:180).
- Resolved an issue where JSON override values remained after detaching a JSON file in `VKCItemActivity`.
- Addressed a problem where `BuildAndRun` and feedback data were not sent to Firebase after keeping Unity Editor open for an extended period.
- Fixed a build failure issue caused by selecting an image for `VKCSettingNameplate`.
- Addressed a problem where video replacement was not functional in `VKCNodeVideoTrigger`.
- Resolved an issue where Gizmos icons other than `VKCAreaCollider` disappeared when deselected.
- Ensured `VKC Item Camera` Gizmos icons are visible without selection.
- Fixed display issues when setting priority values for `VKC` components to four digits.
- Resolved a bug where `Texture` values could not be set in `UI > Editor > VKCItemPlane`.
- Adjusted initial window display settings for `UI > EditorWindow > Startup Info`.
- Fixed a bug in `HEMExporter` where `.hem` files could not be exported.
- Addressed a problem where JSON overrides were not cleared when the activity's JSON was set to null in `Editor > VKCItemActivity`.
- Restored build buttons and others in the toolbar (`UI > EditorWindow`), previously missing in SDK 14.2.1.
- Fixed an issue where camera previews persisted even after deselecting objects with `VKCItemCamera`.
- Resolved display issues with specific rotation values in `VKCItemobject`.
- Fixed problems with video replacement after previewing in `UI > Editor > VKCItemVideoTrigger`.
- Addressed text and button display issues in the World Uploader (`UI > EditorWindow > World Uploader`).
- Resolved a bug where negative values could be entered for `Rendering Priority` in `Editor > Hierarchy View > Gizmos`.
- Adjusted text alignment to top-left and centered icons in the SDK Debug Console (`UI > EditorWindow SDK Debug Console`).
- Modified `CopyOperation` to handle file extensions case-insensitively (`Core > Build > CopyOperation`).
- Ensured all resources like file streams are properly closed after use in the SDK.

## Unresolved Issues
- In SDK 14.4.12, `Tutorial-Visual` is temporarily unavailable due to maintenance.
  - To use Visual features, please reuse content created in versions 14.2.1 or 13.7.7.
- [Windows & Mac] `VKCNodeActionTrigger`, `VKC Item Activity`, `VKC Setting Nameplate`, and `VKCSetting Spawn` display improperly when carried over from 13.7.7 to 14.4.12.
  - This issue is caused by a serialization problem with Unity's `Reorderable List`, requiring manual adjustments during migration.
- `VKC Item Text Plane` displays inconsistently between in-game builds and Unity's Play Mode.
  - The in-game build display is correct; use `Build And Run` to verify text display.
- [Mac Only] Icons displayed in the hierarchy may not update immediately.
  - Use `VketCloudSDK > Tools > Debug Console` to refresh and resolve the issue.
- `VKC Attribute Clickable UI` finger icons overlap with Gizmos icons by default.
  - Disabling Gizmos in Unity Editor reveals the finger icons.
- The emote function displayed at the bottom-right of the game window in Play Mode does not work.
  - Use `Build And Run` to verify emote functionality.
  