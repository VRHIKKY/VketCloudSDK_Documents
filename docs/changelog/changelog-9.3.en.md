# SDK Manual Change Log - Ver 9.3

## Added Pages

-  World Editing Tips
    - [Editing Multiple HEOComponents](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/WorldEditingTips/MultiSelect_HEOComponents.html)
    - [Disable Contribute GI of Unlit Materials](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/WorldEditingTips/DisableContributeGITool.html)
    - [Using EditorOnly Tags](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/WorldEditingTips/EditorOnlyTag.html)
- HEO Components
    - [HEOActivity](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/HEOComponents/HEOActivity.html)
    - [HEOBackgroundTexture](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/HEOComponents/HEOBackgroundTexture.html)
- HeliScript
    - [HeliScript/Built-in functions - ChatGPT](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_system_chatgpt.html)
    - [HeliScript/Built-in functions - Physics](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_system_physics.html)

## Edited Pages

- About Vket Cloud SDK
    - [How to install VketCloud SDK](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/AboutVketCloudSDK/SetupSDK_external.html)
        - Added instructions on how to use the install wizard / version manager
    - [How to use avatars](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/AboutVketCloudSDK/SetupAvatar.html)
        - Updated instructions on adding avatars
- World Making Guide
    - [Specification Limit of Vket Cloud](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/WorldMakingGuide/UnityGuidelines.html)
        - Added note on placing objects with same names, which are not recommended
    - [AvatarFile](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/WorldMakingGuide/AvatarFile.html)
        - Updated settings and images
- World Optimization
    - [Texture Compression](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/heoexporter/he_TextureCompression.html)
        - Deleted info of deprecated dxt conversion likewise former pvrtc conversion
- HEO Components
    - [HEOField](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/HEOComponents/HEOField.html)
        - Added Settings including description for Look at Camera
    - [HEOObject](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/HEOComponents/HEOObject.html)
        - Added settings such as shadow caster / receiver, foreground rendering, circle shadow, lookatcamera, etc.
        - Added explanation on how to use object/motion preview
    - [HEOPlane](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/HEOComponents/HEOPlane.html)
        - Added settings (lookatcamera) and related descriptions
    - [HEOPlayer](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en//HEOComponents/HEOPlayer.html)
        - Added settings such as TPS Rotation, Jump Velocity, Move Speed, etc.
    - [HEOTextPlane](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/HEOComponents/HEOTextPlane.html)
        - Added settings (textalignment, charaspace, linespace, overflowwrap, lookatcamera) and related descriptions
    - [HEOWorldSetting](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/HEOComponents/HEOWorldSetting.html)
        - Added specification/details on using gamepad
        - Added explanation for setting up avatars
        - Added Voice Attenuation, TPS Pitch Max Distance, and SpecularMipMapCount
        - Deleted Multi Play Mode In Local Build Setting (In the current version, the world is multi play mode by default!)
- Actions
    - [CallScript](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/Actions/Programmatic/CallScript.html)
        - Replaced image to match Ver9.3
    - [Warp](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/Actions/System/Warp.html)
        - Changed from position designation to target object designation

- HeliScript
    - [HeliScript/String](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_string.html)
    - [HeliScript/Built-in functions - system](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_system_function.html)
        - Added caution on using apostrophe / single quotations in strings
    - [HeliScript/Vector3](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_struct_vector3.html)
    - [HeliScript/Player](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_class_player.html)
    - [HeliScript/Item](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_class_item.html)
    - [HeliScript/Built-in functions - system](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_system_function.html)
    - [HeliScript/Built-in functions - network](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_system_function_net.html)
    - [HeliScript/Built-in functions - GUI](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/hs/hs_system_function_gui.html)
        - Updated methods useable on current version
- Trouble shooting
    - [Version Update Troubleshooting](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/troubleshooting/VersionUpdateTroubleshooting.html)
        - Changed page title
        - Added information on settings that may reset on updating to Ver9.3
        - Added solution for version information not updated on settings window / HeliScript and gimmicks not working after update
        - Added solution for file shown as corrupt after update

## Deleted Pages

- Auto Texture Compression
- Actions
    - GTag
    - CallJavascript
    - Jumpworld
    - Showlayer
- HeliScript
    - Built-in Functions - JavaScript
- HEOTweetTrigger
- Check Tool (Please use [debug console](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/en/debugconsole/debugconsole.html) for this version)
