# AvatarSettings

![AvatarSettings_1](img/AvatarSettings_1.jpg)

AvatarSettings handles the avatar settings in world.

|  Label | Initial Value | function |
| ---- | ---- | ---- |
| `Dummy Avatar` | dummy_human_02 | Specify the Dummy Avatar that will be rendered instead of normal avatars, when the avatar is in a distant location or the rendering limit has been reached. |
| `Avatar Files` | Vketchan_v1.6_Mtoon_blendshape | Designate [Preset Avatars](../WorldMakingGuide/PresetAvatar.md) which can be used in world.<br> To allocate a new preset avatar, an [avatar file](../WorldMakingGuide/AvatarFile.md) handling all the information is required. |
| `Avatar Files` | Vketchan_v1.6_Mtoon_blendshape,<br>Vketchan2_v1.6_Mtoon_blendshape,<br>Vketnyan_Mtoon_blendshape,<br>LesserMokuri_blendshape  | Designate [Preset Avatars](../WorldMakingGuide/PresetAvatar.md) which can be used in world.<br> To allocate a new preset avatar, an [avatar file](../WorldMakingGuide/AvatarFile.md) handling all the information is required.<br>VketCloudSDK provides 4 preset avatars: [Vketchan 01](https://store.vket.com/en/items/656){target=blank}, [Vketchan 02](https://store.vket.com/en/items/657){target=blank}, [Vket-Nyan](https://store.vket.com/en/items/7140){target=blank}, and[LESSER MOKURI](https://store.vket.com/en/items/2157){target=blank}.  |
| `CreateAvatarFile` | | Generate a new avatar file. |

!!! note caution
   If `Avatar Files` is empty or has no contents, it may lead to build errors or no avatars displayed on default. Please allocate at least one avatarfile to prevent this error.

![HEOWorldSetting_AvatarFileError_1](../troubleshooting/img/HEOWorldSetting_AvatarFileError_1.jpg)

As the SDK has a default avatarfile, select this file if there is an empty entry in the list.

![HEOWorldSetting_AvatarFileError_2](../troubleshooting/img/HEOWorldSetting_AvatarFileError_2.jpg)
