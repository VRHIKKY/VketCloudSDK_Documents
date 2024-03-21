# 12.3.4

## SDK (Editor extension tool for creating worlds in Unity)
### Bug Fixes for AvatarFile and MyAvatar

- Updating Motion files and others in Avatar File and performing a build does not apply updates to the scene json.
- In AvatarFile and MyAvatar, changes in the Action list disappear when Unity is restarted without building.
- In AvatarFile's Use Action, descriptions of Actions are not made to the scene file during build.
- When specifying a Unity object in AvatarFile's Use Action, the specification becomes none upon Unity restart.
- If an Action to specify a Node is set in AvatarFile, the Node specification is removed upon Unity restart.

### Bug Fixes for HEOScript Component

- When Heliscript is registered in BasicSettings, adding HEOScript automatically inputs settings into Heliscript, but the component is not registered.

### Bug Fixes for HEOTextplane Component

- Duplicating HEO Text Plane in Unity with Scene Preview set to true changes the preview of the original and applies text changes in an unintended way.
- Trying to preview text with Scene Preview turned off in HEO Text Plane does not display the preview.

### When Exporting an Item Containing HEOVideoTrigger as an Activity

- Video file paths written in .json are different between Windows and Mac.
- On Mac, the loop setting is not described in the output .json.

### When Exporting an Item Containing HEOParticle as an Activity

- Video file paths written in .json are different between Windows and Mac.

### Bug Fixes for Toolbar's VketCloudSDK > Help

- Pressing Help under English settings displays the manual in Japanese.

### Bug Fixes for Install Wizard 2.0.1

- Settings for Graphics Tier1, Tier2, and Tier3 are not included in the recommended settings.
- The display of Install Wizard in Light Mode is not appropriate.
- HIKKY logo
- Help link text on essential pages
- Unable to delete Tests.meta file included in Install Wizard, leading to a warning alert.
- Unable to install the latest version of com.hikky.editortutorialsystem with Install Wizard.


# 12.3.0

## HeliodorLib (Engine used in worlds displayed in the browser)

### Bug Fixes
- Incorrect click detection on avatars when using dummy avatars.
- MToon's _Color parameter not being multiplied correctly.
- English version incorrectly labels blocking as "強制退出"
- Some VRM eyes turning white.
- Support for receiving OnNetReceivePosJoin, OnNetReceivePosLeave in subscenes.
- Unable to receive custom state and custom data in subscenes and activities.
- Profiles not updating immediately on iOS.

### Feature Additions & Adjustments
- Transparency animations are now executed only in TPS mode.
- Added the ability to configure initial entry and entry failure handling in the scene file.
- (HeliScript) Reduced stack usage: Avoid looping through instructions for list's new, Resize(), Add().
