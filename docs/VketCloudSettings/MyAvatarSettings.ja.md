# MyAvatarSettings

![MyAvatarSettings_1](img/MyAvatarSettings_1.jpg)

MyAvatarSettingsでは、ワールド内における[マイアバター](../AboutVketCloudSDK/SetupAvatar.md)の扱いに関する設定を行います。

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| `Use MyAvatar` | true | プレイヤーがマイアバターを使用できるか否か設定します。 |
| `NSFW` | false | NSFW（Not Safe For Work: 閲覧注意）なアバターの表示を制限します。|
| `Polygon` | 50000 | そのワールド内で使用できるマイアバターのポリゴン上限を指定します。 |
| `Motion` | | マイアバターが使用するモーションを指定します。|

---

## Motion設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| `Motion Name` | | モーション名を設定します。 |
| `.hem` | | モーション再生時に使用するアニメーションファイル(.hem)を指定します。 |
| `loop` | true | アニメーションをループ再生するか設定します。 |
| `Use Action` | false | モーション再生時に実行するアクションを設定します。<br> 具体的には、本項目を有効にした上で`Setting`から実行するアクションを設定します。<br>`.hem`が空欄のモーションを追加することで、モーション再生時にパーティクルだけ再生する、といった用途等に利用できます。 |
| `Draw Circle Shadow` | true | モーション再生時に丸影を描画するかどうか設定します。 |
| `Collision Detection` | true | モーション再生時に衝突判定をおこなうかどうか設定します。 |

### モーションについて

デフォルトで設定されているアニメーション及びモーション名はSDK側で使用しているモーションです。<br>
[アニメーションファイルを用意し差し替える](../HEMAnimationConverter/AnimationConverter.md)ことで待機・歩行・切り返しなどのマイアバターのアニメーションを差し替えることができます。<br>
ワールドにて用意したプリセットアバターのアニメーションを設定するにはアバター設定にて指定した[アバターファイル](../WorldMakingGuide/AvatarFile.md)を編集します。

---

## Objects設定

![MyAvatarSettings_3](img/MyAvatarSettings_3.jpg)

マイアバターにオブジェクト（.heoファイル、パーティクル、音声）を指定します。<br>
3Dモデルを設定したい場合は [.heoファイルへの変換](../WorldMakingGuide/HEOExporter_Tutorial.md)が必要です。

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| `Name` | 空欄 | オブジェクトの名前を設定します。 |
| `Object Type` | Heo | オブジェクトの種類を設定します。<br>`Heo`: [.heoファイル](../WorldMakingGuide/HEOExporter_Tutorial.md), `Hep`: パーティクル,`Audio`: 音声 |
| `File` | 空欄 | 使用するファイルを指定します。 |
| `Position`| 0,0,0 | Targetからの相対座標を指定します。 |
| `Rotation` | 0,0,0 | Targetからの相対角度を指定します。 | 
| `Target` | 空欄 | Position及びRotationの基準となるボーン名を指定します。<br>ボーン名は[VRMヒューマノイド](https://vrm.dev/univrm/humanoid/humanoid_overview){target=_blank}のフォーマットに由来しており、記載する際はスネークケースにします(例： head, leftLowerLeg, leftThumbProximal...) |
