# Adding Preset Avatars

![PresetAvatar_1](img/PresetAvatar_1.jpg)

In VketCloudSDK, the world may provide a variety of preset avatars in addition to the users' own avatars.<br>
The preset avatar list can be accessed via "Setting"-->"Mypage"-->"Avatar"-->"Preset Avatar".

Before setting a preset avatar, the character model must be converted to the [VRM format](https://vrm.dev/en/vrm/how_to_make_vrm/index).<br>

## 1. Create an avatar with its texture compressed

For optimising avatars to appear on smartphones, texture compression is essential.<br

Texture compression method is same as the [Texture Compression](../heoexporter/he_TextureCompression.md).

## 2. Creating an AvatarFile
### 2.1 Create an AvatarFile via HEOWorldSetting

VketCloudSDK stores avatar infomation in an AvatarFile format, using the file to list preset avatars on world build.

![PresetAvatar_2](./img/PresetAvatar_2.jpg)

By pressing `CreateAvatarFile` in the Avatars tab of [HEOWorldSetting](../HEOComponents/HEOWorldSetting.md), a new AvatarFile is created.

By pressing the +/- on the bottom right of the AvatarFile list, a new article on the preset avatar list will be added/deleted.<br>
The AvatarFile will not be deleted even if the list article is deleted.

!!! note
        There may be edge cases where the AvatarFile list won't appear and the "CreateAvatarFileForOldData" will appear.<br>
        This is due to old avatar data remaining when using older SDK projects by newer versions.<br>
        By pressing the button, the old avatar data will be converted to an AvatarFile list.

![PresetAvatar_3](./img/PresetAvatar_3.jpg)

### 2.2 Setting content in the AvatarFile

![AvatarFile_1](./img/AvatarFile_1.jpg)

By selecting an AvatarFile in the project, the content will be displayed on the Inspector View.<br>
The settings are divided by category tabs.

Each category details are on the [AvatarFile](AvatarFile.md) page.

#### 2.2.1 .vrm

![AvatarFile_1](./img/AvatarFile_1.jpg)

The avatar's .vrm may be registered here.<br>
The .hrm files of the compressed avatar data can be designated as well.

#### 2.2.2 Motion

![AvatarFile_2](./img/AvatarFile_2.jpg)

The motion may be registered here.<br>

#### 2.2.3 Emotion

![AvatarFile_3](./img/AvatarFile_3.jpg)

The emote animation may be registered here.<br>

#### 2.2.4 Objects

![AvatarFile_4](./img/AvatarFile_4.jpg)

The objects to be held by the avatar may be registered here.<br>

## 3. Implementing AvatarFile to the WorldSettings

![PresetAvatar_4](./img/PresetAvatar_4.jpg)

Put the AvatarFile into the AvatarFile list of the WorldSettings.<br>
This will add the avatar to the preset avatar view.

![PresetAvatar_5](./img/PresetAvatar_5.jpg)

The AvatarFile can also be edited by selecting on the AvatarFile list.<br>
As this view does not show the entire settings, we recommend to select the AvatarFile on the project view, then editing it on the Inspector view.