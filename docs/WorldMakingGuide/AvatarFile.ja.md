# AvatarFile

AvatarFileはVket Cloud SDKにて[プリセットアバターの追加](PresetAvatar.md)などのために使用するファイルです。<br>
本ファイルにはVket Cloud上でアバターを動作させるための情報を設定します。

!!! note "Emotion機能について"
    `Emotion`機能をご使用になる場合は、SDK12.3.4までのバージョンをご利用ください。<br>
    SDK13.0より新しいバージョンでは`Emotion`機能はお使い頂けませんのでご了承ください。

## 一般情報

| 名称 | 機能 |
| ---- | ---- |
| Thumbnail(Japanese) | 言語設定が日本語の際のアバターのサムネイルを設定します。  <br>設定されたサムネイルはワールド内設定画面にて使用されます。 |
| Thumbnail(English) | 	言語設定が英語の際のアバターのサムネイルを設定します。<br>設定されたサムネイルはワールド内設定画面にて使用されます。 |

!!! note "Avatar Settingsの項目について"
    Avatar Settingsの設定項目は[Vket Cloud Settings](../VketCloudSettings/Overview.md)のSetting modeを`Advanced`へ切り替える事で、`Avatar Settings`のオブジェクトがHierarchy上に現れ、設定変更が可能になります。

なお、サムネイル画像はpng形式で比率が1:1のものが使用できます。

![AvatarFile_Result](img/AvatarFile_Result.jpg)

## Avatar

アバターデータを`.vrm`または`.hrm`から選択できます。

サムネイルは、ワールド内設定画面のプリセットアバターのサムネイルとして以下のように使用されます。<br>
また、設定画面でのアバターの表示の順番は[VketCloudSettings > Avatar Settings > Avatar Setting > Avatar File](../VketCloudSettings/AvatarSettings.md)にて設定された順番で表示されます。<br>

### .vrm

アバターデータに`.vrm`を指定する場合、以下の項目が設定可能です。

![AvatarFile_1](img/AvatarFile_1.jpg)

| 名称 | 機能 |
| ---- | ---- |
| .vrm | アバターに使用するモデルを設定します。 |

なお、サムネイル画像はpng形式で比率が1:1のものが使用できます。

### .hrm

アバターデータに`.hrm`を指定する場合、以下の項目が設定可能です。

![AvatarFile_1](img/AvatarFile_2.jpg)

| 名称 | 機能 |
| ---- | ---- |
| .hrm Png | [テクスチャ圧縮](../WorldOptimization/TextureCompression.md)の結果生成された[モデル名]_png.hrmファイルを指定します。 |
| .hrm Astc |  [テクスチャ圧縮](../WorldOptimization/TextureCompression.md)の結果生成された[モデル名]_astc.hrmファイルを指定します。|
| .hrm Etc 2 |  [テクスチャ圧縮](../WorldOptimization/TextureCompression.md)の結果生成された[モデル名]_etc.hrmファイルを指定します。 |

!!! note "テクスチャ圧縮について"
    テクスチャ圧縮ツールについては、サーバー側で自動圧縮を行うために将来のバージョンでの廃止が予定されております。<br>
    代替の軽量化手段として、元のテクスチャサイズを変更する方法がSDKToolとして用意されています。<br>
    詳しくは[テクスチャ圧縮](../WorldOptimization/TextureCompression.md)をご確認ください。

## Motion

各ユーザーが使用できるモーションを設定する項目です。Vket Cloudでは任意のモーションを追加することができ、`.hem`という独自のファイル形式を採用しています。<br>
[アニメーションファイルを用意し差し替える](../HEMAnimationConverter/AnimationConverter.md)ことで待機・歩行や、振り向く・切り返すなどのアバターのアニメーションを差し替えることができます。<br>

![AvatarFile_3](img/AvatarFile_3.jpg)

| 名称 | 初期値 | 機能 |
| ----   | ---- | ---- |
| Motion Name | | モーション名を設定します。 |
| .hem | | モーションファイルを設定します。 |
| Loop | true | モーションをループ再生するか設定します。歩きや待機モーションではオンにしてください。|
| Use Action | false | モーション再生時に実行するアクションを設定します。<br> 具体的には、本項目を有効にした上で`Setting`から実行するアクションを設定します。|
| Draw Circle Shadow | true | モーション再生時に丸影を描画するかどうか設定します。 |
| Collision Detection | true | モーション再生時に衝突判定をおこなうかどうか設定します。 |

## Objects

アバターに対して任意のアセットを持たせるための項目です。<br>
Heo・Hep・Audioの3つの形式に対応しています。<br>
3Dモデルを設定したい場合は [.heoファイルへの変換](../WorldMakingGuide/HEOExporter_Tutorial.md)が必要です。

![AvatarFile_4](img/AvatarFile_4.jpg)

| 名称 | 初期値 | 機能 |
| ----   | ---- | ---- |
| Name | 空欄 | オブジェクトの名前を設定します。 |
| Object Type | Heo | オブジェクトの種類を設定します。<br>`Heo`: [.heoファイル](../WorldMakingGuide/HEOExporter_Tutorial.md), `Hep`: パーティクル,`Audio`: 音声 |
| File | 空欄 | 使用するファイルを指定します。 |
| Position| 0,0,0 | Targetからの相対座標を指定します。 |
| Rotation | 0,0,0 | Targetからの相対角度を指定します。 | 
| Target | 空欄 | Position及びRotationの基準となるボーン名を指定します。<br>ボーン名は[VRMヒューマノイド](https://vrm.dev/univrm/humanoid/humanoid_overview){target=_blank}のフォーマットに由来しており、記載する際はスネークケースにします(例： head, left_lower_leg, left_thumb_proximal...)|
