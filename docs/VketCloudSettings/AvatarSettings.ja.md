# VKC Setting Avatar

![AvatarSettings_1](img/AvatarSettings_1.jpg)

AvatarSettingsはワールド内におけるアバターに関する設定を扱います。

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Avatar icon show | false | 名前の横にアイコンを表示します。<br>プリセットアバターの場合はそのアバターのアイコン、マイアバターを使用している場合は、自分のアカウントのアイコンを表示します。 |
| Dummy Avatar | dummy_human_02 | 遠方や描画制限がかかった場合に描画するダミーアバターのためのheoファイルを指定します。 |
| Avatar Files | Vketchan_v1.6_Mtoon_blendshape,<br>Vketchan2_v1.6_Mtoon_blendshape,<br>Vketnyan_Mtoon_blendshape,<br>LesserMokuri_blendshape  | ワールド内にて使える[プリセットアバター](../WorldMakingGuide/PresetAvatar.md)を設定します。<br>プリセットアバターを設定するには、あらかじめアバター情報をまとめた[アバターファイル](../WorldMakingGuide/AvatarFile.md)を用意します。<br>Vket Cloud SDKではデフォルトのアバターとして[Vketちゃん1号](https://store.vket.com/ja/items/656){target=blank}, [Vketちゃん2号](https://store.vket.com/ja/items/657){target=blank}, [Vketにゃん](https://store.vket.com/ja/items/7140){target=blank}, そして[レッサーモクリ](https://store.vket.com/ja/items/2157){target=blank}を用意しています。 |
| CreateAvatarFile | | 新規のアバターファイルを生成します。 |

!!! note caution
    `Avatar Files`にて空欄がある / 1つも設定されていない場合はビルドエラーが発生したり、初期状態のアバターが表示されない状態となります。必ず最低1体はアバターを割り当ててください。
