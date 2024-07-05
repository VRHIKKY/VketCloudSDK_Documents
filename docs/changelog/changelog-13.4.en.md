# SDK Manual Change Log - Ver 13.4

## July 05 2024 Update

## July 05 2024 - Added Pages

- SDK Tools
  - [Scene Preview (β)](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/SDKTools/ScenePreview.html)

## July 05 2024 - Edited Pages

- World Editing Tips
  - [Build Options](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/WorldEditingTips/BuildOptions.html)
    - Added description about VketCloudSDK > Build Option settings

---

## June 28 2024 Update

## June 28 2024 - Added Pages

- SDK Tools
  - [Advanced Usage](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/GUITools/AdvancedUsage.html)

## June 28 2024 - Edited Pages

- VketCloudSettings
  - [BasicSettings](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/VketCloudSettings/BasicSettings.html)
    - Changed description about World ID
- HeliScript
  - Added translation to pages not having English
  - Fixed issue of features only written on Japanese page
  - Added miscellaneous reformats and descriptions
  - Built in Functions
    - [network](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_system_function_net.html)
      - Deleted callback functions not existing on this version: OnVCPlayerJoin and OnVCPlayerLeave

---

## June 26 2024 Update

## June 26 2024 - Added Pages

- VKCComponents
  - VKCAttribute
    - [VKCAttributeClickableUI](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/VKCComponents/VKCAttribute/VKCAttributeClickableUI.html)
  - VKCNode
    - [VKCNodeAlphaAnimation](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/VKCComponents/VKCNode/VKCNodeAlphaAnimation.html)
- World Making Guide
  - [File Deployment Config](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/WorldMakingGuide/FileDeploymentConfig.html)
- HeliScript
  - Built-in Classes And Functions
    - [Date](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_class_date.html) *English version WIP
  - Built-in Functions
    - [HSGUIModel](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_system_function_gui_HSGUIModel.html) *English version WIP
    - [Rendering](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_system_function_rendering.html) *English version WIP
- SDK Tools
  - [GUITools - Overview and Setup](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/GUITools/Setup.html)
  - [How to Use](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/GUITools/HowToUse.html)

## June 26 2024 - Edited Pages

- VKCComponents

- About VketCloudSDK
  - [Login to SDK](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/AboutVketCloudSDK/LoginSDK.html)
    - Added troubleshooting note for macOS, Safari users
- Trouble shooting
  - [SDK does not appear after install](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/troubleshooting/InstallingDeeplink.html)
    - Added troubleshooting note for macOS, Safari users
- World Making Guide
  - [AvatarFile](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/WorldMakingGuide/AvatarFile.html)
    - Added info about .hrm files, revised description about animation, deleted content about Emotion
- VKCComponents
- [VKCItemActivity](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/VKCComponents/VKCItemActivity.html)
  - Added Edit mode description and how to use
 　- [VKCNodeCollider](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/VKCComponents/VKCNodeCollider.html)
  - Added info about new collider target type "Self Player Only".
  - Added info about new extrusion parameters.
  - [VKCSettingMyAvatar](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/VketCloudSettings/MyAvatarSettings.html)
    - Updated images, deleted content about Emotion
- HeliScript
  - [Components / Callback functions](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_component.html)
    - Added description about OnClickNode()
  - Built-in Classes And Functions : Added functions and description about features
    - [Vector3](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_struct_vector3.html)
      - Added functions: makeVector3Dot(), makeVector3Cross()
    - [Quaternion](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_struct_quaternion.html)
      - Added functions: makeQuaternionFromTo(), makeQuaternionLook()
    - [Item](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_class_item.html)
      - Added functions: Pause(), Restart(), SetPlayTime(), GetPlayTime()
      - Added functions: LoadMotion(), FacialEmoteFixed()
      - Added description about SetProperty()
    - [Player](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_class_player.html)
      - Added functions: SetControlEnabled(), SetJumpVelocity(), GetPresetAvatar()
  - Built-in Functions
    - [GUI](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_system_function_gui.html)
      - Added functions: hsCanvasIsPortrait(), hsCanvasSetConfigClosedFlag(), hsCanvasAddGUI(), and other functions using HSGUIModel class
    - [Camera](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_system_function_camera.html)
      - Added function: hsCameraGetQuaternion() *English version WIP
  - Statements and flow control
    - [Definition/declaration](https://vrhikky.github.io/VketCloudSDK_Documents/13.4/en/hs/hs_statement_def.html)
      - Added global functions: makeQuaternionFromTo(), makeQuaternionLook()
