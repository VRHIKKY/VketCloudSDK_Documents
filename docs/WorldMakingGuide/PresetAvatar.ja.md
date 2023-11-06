# プリセットアバターを追加する

![PresetAvatar_1](img/PresetAvatar_1.jpg)

VketCloudSDKでは、ワールドに入ったユーザーが手持ちのアバター以外に使えるプリセットアバターを設定できます。<br>
設定されたアバターは「設定画面」-->「マイページ」-->「アバター」-->「プリセットアバター」にて一覧表示され、ワールドの中でユーザーが自由に着脱することができます。

なお、プリセットアバターを追加するにあたって、追加したいアバターをあらかじめ[vrm形式に変換](https://vrm.dev/vrm/how_to_make_vrm/index.html)する必要があります。<br>

## 1. テクスチャが圧縮されたアバターを作成する

スマートフォン上でもアバターが表示できるようにテクスチャの圧縮を行います。<br>

テクスチャの圧縮方法は[ワールドテクスチャの圧縮](../heoexporter/he_TextureCompression.md)と同じツールを使用して行えます。

## 2. AvatarFileを作成する
### 2.1 HEOWorldSettingからAvatarFileを新規作成する

VketCloudSDKではAvatarFileというファイルにアバター情報を設定し、ワールドのビルド時にプリセットアバターとして反映します。

![PresetAvatar_2](./img/PresetAvatar_2.jpg)

[HEOWorldSetting](../HEOComponents/HEOWorldSetting.md)内のAvatarsタブ下の`CreateAvatarFile`を押すことで、新しいAvatarFileを作成します。

AvatarFileリスト右下の +/- を押すことで、プリセットアバターのリストに項目を追加/削除することができます。<br>
リストから削除した場合でも、元のAvatarFileのデータが残ります。

!!! note
        以下の画像のようにAvatarFileリストが表示されず、「CreatAvatarFileForOldData」ボタンが表示されている場合があります。<br>
        これは、古いSDKのアバターデータ情報が残っている時に見られます。<br>
        ボタンを押すことで、元々あったアバター情報がAvatarFileリスト形式に書き出されます。

![PresetAvatar_3](./img/PresetAvatar_3.jpg)

### 2.2 AvatarFileの中身を設定する

![AvatarFile_1](./img/AvatarFile_1.jpg)

ProjectビューでAvatarFileを選択することで、Inspectorビュー上に中身が表示されます。<br>
設定できる項目はタブ別に分類されています。

各項目の仕様詳細は[AvatarFile](AvatarFile.md)に記載されています。

#### 2.2.1 .vrmタブ

![AvatarFile_1](./img/AvatarFile_1.jpg)

アバターの.vrmを登録することができます。<br>
また、圧縮アバターの.hrmファイルについても登録可能です。

#### 2.2.2 Motionタブ

![AvatarFile_2](./img/AvatarFile_2.jpg)

モーションの登録が可能です。

#### 2.2.3 Emotionタブ

![AvatarFile_3](./img/AvatarFile_3.jpg)

エモートが登録できます。

#### 2.2.4 Objectsタブ

![AvatarFile_4](./img/AvatarFile_4.jpg)

アバターの持つオブジェクトが登録できます。

## 3. WorldSettingsに入れる

![PresetAvatar_4](./img/PresetAvatar_4.jpg)

WorldSettingsのAvatarFileリストにAvatarFileを入れます。<br>
これによってプリセットアバターの一覧にアバターが追加されます。

![PresetAvatar_5](./img/PresetAvatar_5.jpg)

また、AvatarFileリスト上でも枠を選択することで簡易編集画面を出すことができます。<br>
全項目が表示されるわけではないので、AvatarFileをProjectビューで選んでからInspectorビューを編集する方法を使うことをおすすめします。