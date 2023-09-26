# AvatarFile
AvatarFileはVketCloudSDKにて[プリセットアバターの追加](PresetAvatar.md)などのために使用するファイルです。<br>
本ファイルにはVket Cloud上でアバターを動作させるための情報を設定します。

## .vrm
初期設定で表示するVRM形式のアバターを指定する項目です。

![AvatarFile_1](img/AvatarFile_1.jpg)

| ラベル | 機能 |
| ---- | ---- |
| .vrm | アバターに使用するモデルを設定します。 |
| Height | アバターのカメラ基準位置を設定します。0にすると、足元を中心にカメラが追従します。 |
| Hrm Png | [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_png.hrmファイルを指定します。 |
| Hrm Astc |  [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_astc.hrmファイルを指定します。|
| Hrm Etc 2 |  [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_etc.hrmファイルを指定します。 |
| Hrm Dxt |  [テクスチャ圧縮](../heoexporter/he_TextureCompression.md)の結果生成された[モデル名]_dxt.hrmファイルを指定します。 |

## Motion
各ユーザーが使用できるモーションを設定する項目です。Vket Cloudでは任意のモーションを追加することができ、`.hem`という独自のファイル形式を採用しています。

![AvatarFile_2](img/AvatarFile_2.jpg)

| ラベル | 機能 |
| ---- | ---- |
| Motion Name | モーション名を設定します。 |
| .hem | モーションファイルを設定します。 |
| loop | モーションをループ再生します。歩きや待機モーションではオンにしてください。 |
| useAction | モーション再生開始時に呼び出すアクションを設定します。 |

## Emotion
各ユーザーが使用できるエモートを設定する項目です。Vket Cloudでは任意のエモートを追加することができ、`.hem`という独自のファイル形式を採用しています。

![AvatarFile_3](img/AvatarFile_3.jpg)

| ラベル | 機能 |
| ---- | ---- |
| Emotion Name | エモート名を設定します。 |
| .hem |エモートファイルを設定します。 |
| loop | エモートをループ再生します。 |
| useAction | エモート再生開始時に呼び出すアクションを設定します。 |

## Objects
アバターに対して任意のアセットを持たせるための項目です。  
Heo・Hep・Audioの3つの形式に対応しています。

![AvatarFile_4](img/AvatarFile_4.jpg)

| ラベル | 機能 |
| ----   | ---- |
| Name | 固有の名前を設定します。 |
| Objecttype | 持たせるオブジェクトのタイプを指定します。.heo、.hep、audioが使用できます。 |
| File | アセットを指定します。 |
| Position | `target`からのオフセットを設定できます。 |
| Rotation | 回転角度を設定できます。 |
| Target | 座標基準となるボーンを指定します。ex. right, left, ... |