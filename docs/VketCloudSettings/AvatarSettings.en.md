# VKC Setting Avatar

![AvatarSettings_1](img/AvatarSettings_1.jpg)

AvatarSettings handles the avatar settings in world.

|  Label | Initial Value | function |
| ---- | ---- | ---- |
| Avatar icon show | false | Displays an icon next to the name.<br> Preset avatars come with their own icons. If you're using a custom avatar, your account icon will be displayed. |
| Dummy Avatar | dummy_human_02 | Specify the Dummy Avatar that will be rendered instead of normal avatars, when the avatar is in a distant location or the rendering limit has been reached. |
| Avatar Files | Vketchan_v1.6_Mtoon_blendshape,<br>Vketchan2_v1.6_Mtoon_blendshape,<br>Vketnyan_Mtoon_blendshape,<br>LesserMokuri_blendshape  | Designate [Preset Avatars](../WorldMakingGuide/PresetAvatar.md) which can be used in world.<br> To allocate a new preset avatar, an [avatar file](../WorldMakingGuide/AvatarFile.md) handling all the information is required.<br>Vket Cloud SDK provides 4 preset avatars: [Vketchan 01](https://store.vket.com/en/items/656){target=blank}, [Vketchan 02](https://store.vket.com/en/items/657){target=blank}, [Vket-Nyan](https://store.vket.com/en/items/7140){target=blank}, and[LESSER MOKURI](https://store.vket.com/en/items/2157){target=blank}.  |
| CreateAvatarFile | | Generate a new avatar file. |

!!! note caution
   If `Avatar Files` is empty or has no contents, it may lead to build errors or no avatars displayed on default. Please allocate at least one avatarfile to prevent this error.
