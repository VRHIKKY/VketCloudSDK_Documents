# AvatarFile
AvatarFileはVketCloudSDKにて[プリセットアバターの追加](PresetAvatar.md)などのために使用するファイルです。<br>
本ファイルにはVket Cloud上でアバターを動作させるための情報を設定します。

## 一般情報

| 名称 | 機能 |
| ---- | ---- |
| Thumbnail(Japanese) | 言語設定が日本語の際のアバターのサムネイルを設定します。<br> 設定されたサムネイルはワールド内設定画面にて使用されます。|
| Thumbnail(English) | 言語設定が英語の際のアバターのサムネイルを設定します。<br> 設定されたサムネイルはワールド内設定画面にて使用されます。|

サムネイルは、ワールド内設定画面のプリセットアバターのサムネイルとして以下のように使用されます。<br>
また、設定画面でのアバターの表示の順番は[HEOWorldSetting > Avatar > Avatar File](../HEOComponents/HEOWorldSetting.md)にて設定された順番で表示されます。<br>
なお、サムネイル画像はpng形式で比率が1:1のものが使用できます。

![AvatarFile_Result](img/AvatarFile_Result.jpg)

## .vrm
初期設定で表示するVRM形式のアバターを指定する項目です。

![AvatarFile_1](img/AvatarFile_1.jpg)

| 名称 | 機能 |
| ---- | ---- |
| .vrm | アバターに使用するモデルを設定します。 |
| Height | アバターのカメラ基準位置を設定します。0にすると、足元を中心にカメラが追従します。 |
| Hrm Png | [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_png.hrmファイルを指定します。 |
| Hrm Astc |  [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_astc.hrmファイルを指定します。|
| Hrm Etc 2 |  [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_etc.hrmファイルを指定します。 |
| Hrm Dxt |  [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_dxt.hrmファイルを指定します。 |

## Motion
各ユーザーが使用できるモーションを設定する項目です。Vket Cloudでは任意のモーションを追加することができ、`.hem`という独自のファイル形式を採用しています。<br>
[アニメーションファイルを用意し差し替える](../HEMAnimationConverter/AnimationConverter.md)ことで待機・歩行などのアバターのアニメーションを差し替えることができます。<br>


![AvatarFile_2](img/AvatarFile_2.jpg)

| 名称 | 初期値 | 機能 |
| ----   | ---- | ---- |
| Motion Name | | モーション名を設定します。 |
| .hem | | モーションファイルを設定します。 |
| Loop | true | モーションをループ再生するか設定します。歩きや待機モーションではオンにしてください。|
| Use Action | false | モーション再生時に実行するアクションを設定します。<br> 具体的には、本項目を有効にした上で`Setting`から実行するアクションを設定します。|
| Draw Circle Shadow | true | モーション再生時に丸影を描画するかどうか設定します。 |
| Collision Detection | true | モーション再生時に衝突判定をおこなうかどうか設定します。 |

## Emotion
アバターが使用できるエモートを設定する項目です。Vket Cloudでは任意のエモートを追加することができ、`.hem`という独自のファイル形式を採用しています。

![AvatarFile_3](img/AvatarFile_3.jpg)

| 名称 | 初期値 | 機能 |
| ----   | ---- | ---- |
| .hem |  | アバターが使用するエモートを指定します。 |
| loop | false | アニメーションをループ再生するか設定します。 |
| useAction |   | エモート再生開始時に実行するアクションを設定します。<br> 具体的には、本項目を有効にした上で`Setting`から実行するアクションを設定します。|

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
| Target | 空欄 | Position及びRotationの基準となるボーン名を指定します。<br>ボーン名は[VRMヒューマノイド](https://vrm.dev/univrm/humanoid/humanoid_overview)のフォーマットに由来しており、記載する際はスネークケースにします(例： head, leftLowerLeg, leftThumbProximal...) |