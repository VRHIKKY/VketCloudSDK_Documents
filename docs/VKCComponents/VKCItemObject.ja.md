# VKC Item Object

![VKCItemObject_1](img/VKCItemObject_1.jpg)

VKC Item Objectは、動的なオブジェクトをシーンに生成するために使用します。<br>
ここではあらかじめ生成したheoファイルだけではなく、vrm、 [hrm](../WorldOptimization/TextureCompression.md)、 glb形式のファイルも配置できます。

???+ note "このオブジェクトタイプを使用可能なItemクラス"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [SetPos](../hs/hs_class_item.md#setpos)
    - [GetPos](../hs/hs_class_item.md#getpos)
    - [GetWorldPos](../hs/hs_class_item.md#getworldpos)
    - [SetQuaternion](../hs/hs_class_item.md#setquaternion)
    - [GetQuaternion](../hs/hs_class_item.md#getquaternion)
    - [GetWorldQuaternion](../hs/hs_class_item.md#getworldquaternion)
    - [GetWorldRotate](../hs/hs_class_item.md#getworldrotate)
    - [GetScale](../hs/hs_class_item.md#getscale)
    - [SetScale](../hs/hs_class_item.md#setscale)
    - [MovePos](../hs/hs_class_item.md#movepos)
    - [IsMoving](../hs/hs_class_item.md#ismoving)
    - [Play](../hs/hs_class_item.md#play)
    - [Stop](../hs/hs_class_item.md#stop)
    - [IsPlay](../hs/hs_class_item.md#isplay)
    - [Pause](../hs/hs_class_item.md#pause)
    - [Restart](../hs/hs_class_item.md#restart)
    - [SetPlayTime](../hs/hs_class_item.md#setplaytime)
    - [GetPlayTime](../hs/hs_class_item.md#getplaytime)
    - [SetShow](../hs/hs_class_item.md#setshow)
    - [IsShow](../hs/hs_class_item.md#isshow)
    - [ChangeMotion](../hs/hs_class_item.md#changemotion)
    - [LoadMotion](../hs/hs_class_item.md#loadmotion)
    - [LoadMotion](../hs/hs_class_item.md#loadmotion)
    - [FacialEmoteFixed](../hs/hs_class_item.md#facialemotefixed)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [IsLoading](../hs/hs_class_item.md#isloading)
    - [IsLoaded](../hs/hs_class_item.md#isloaded)
    - [GetNodeIndexByName](../hs/hs_class_item.md#getnodeindexbyname)
    - [GetNodeNameByIndex](../hs/hs_class_item.md#getnodenamebyindex)
    - [SetShowNode](../hs/hs_class_item.md#setshownode)
    - [IsShowNode](../hs/hs_class_item.md#isshownode)
    - [SetUVOffset](../hs/hs_class_item.md#setuvoffset)
    - [PlayVideo](../hs/hs_class_item.md#playvideo)
    - [StopVideo](../hs/hs_class_item.md#stopvideo)
    - [IsPlayVideo](../hs/hs_class_item.md#isplayvideo)
    - [ReplaceItem](../hs/hs_class_item.md#replacetexture)
    - [ReplaceTexture](../hs/hs_class_item.md#replaceitem)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [GetProperty](../hs/hs_class_item.md#getproperty)
    - [CallComponentMethod](../hs/hs_class_item.md#callcomponentmethod)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

## 設定項目

### 基本設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Show | true | オブジェクトの表示 / 非表示を切り替えます。 |
| File Mode | | heo, vrm, hrm, glbファイルのいずれかを指定します。<br>vrmモデルの[テクスチャ圧縮](../WorldOptimization/TextureCompression.md)を行っている場合はhrmに該当のファイルを指定します。 |
| Scene Preview | false | オブジェクトの生成された状態をUnityシーン上でプレビューします。<br>詳細は下記「プレビュー機能」にて解説します。 |
| Enable Bone | false | アーマチュアによるアニメーションを再生する場合はオンにします。 |
| Circle Shadow | false | オブジェクトの足元に丸影を投影するか切り替えます。 |
| Look at Camera | false | カメラ方向に対して常に正面を向くようになります。 |
| Object Mode | None | None、Pose、Motionから任意に選択します。PoseもしくはMotionを選択した場合、追加でhemファイルを指定する必要があります。 |
| Pickable | false | 掴む機能の有効化する。詳細は以下参照 |

### Pickable

!!! warning "SDK14.4.12でご使用いただけません"
    SDK14.4.12で機能がロールバックのためご使用いただけません。
    既にリリース済のSDK14.5.6のバージョン以降では修正済となりますので、最新版をご使用ください。

![VKCItemObject_8](img/VKCItemObject_8.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Display Name (ja) | "" | 日本語表示名 |
| Display Name (en) | "" | 英語表示名 |
| Enable Collision Detection | false | 掴んだ後に、衝突判定の有効化するかの設定をします。 |
| Bone Name | "hips" | 掴む対象のボーン名を指定します。 |
| Offset Position | (0, 0, 0) | 掴んだ際のボーン位置からのオフセット位置を指定します。 |
| Offset Rotation | (0, 0, 0) | 掴んだ際のボーン回転からのオフセット回転を指定します。 |
| Offset Scale | (1, 1, 1) | 掴んだ際のボーンスケールからのオフセットスケールを指定します。 |

### Advanced

![VKCItemObject_2](img/VKCItemObject_2.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Clickable | false | オブジェクトがクリックされた際の判定を発生させるか否かを設定します。 |
| Auto Loading | true | [動的ローディング](VKCItemField.md)にて使用します。<br> デフォルトはtrueで初回ローディング時に読み込まれます。 |
| Light Scattering Target | true | [ライトスキャッタリング](../VketCloudSettings/RenderingSettings.md)が有効になっている際に、スキャッタリングの影響を受けるかを設定します。 |
| Shadow Caster | false | [シャドウマッピング](../VketCloudSettings/RenderingSettings.md)が有効になっている際に、本オブジェクトの影を他のオブジェクトに投影するか設定します。 |
| Shadow Receiver | false | [シャドウマッピング](../VketCloudSettings/RenderingSettings.md)が有効になっている際に、他オブジェクトの影を本オブジェクトへと投影するか設定します。 |
| Foreground Rendering | false |最前面描画(深度値を考慮せずに一番手前に描画)を行うか設定します。 |
| Depth Buffer Target | true | 深度バッファを描き込むかどうかを設定します。 |
| Opaque Alpha Blend | false | Trueのとき、アルファブレンド描画を強制的に不透明描画パスで行います。 | 
| Alpha Animation Target | false| カメラがオブジェクトによって遮られた際、視界確保のために透過するかを設定します。詳細は[VKCNodeAlphaAnimation](../VKCComponents/VKCNodeAlphaAnimation.md)をご参照ください。 |
| Item Render Priority || Itemの描画順序を決定します。<br>詳細は[RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md)をご参照ください。 |
| Show Photo Mode | false | 撮影モード中にそのitemを表示するかどうかを設定します |
| Force Raycast Check Disable | false | Item単位でraycastの判定を強制的に無効にするかどうかを設定します |
| Force Collider Disable | false | 強制的にコライダーを無効にします |
| Begin Actions | | モーション再生時にトリガーする[アクション](../Actions/ActionsOverview.md)を設定できます。 |
| End Actions | | モーション終了時にトリガーする[アクション](../Actions/ActionsOverview.md)を設定できます。 |

## Mode - Pose設定項目

![VKCItemObject_3](img/VKCItemObject_3.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| .hem | | モーションファイルを設定します。 |
| Scene Preview | false | オブジェクトの生成された状態をUnityシーン上でプレビューします。<br>詳細は下記「プレビュー機能」にて解説します。 |

## Mode - Motion設定項目

![VKCItemObject_4](img/VKCItemObject_4.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| .hem | | モーションファイルを設定します。 |
| Scene Preview | false | オブジェクトの生成された状態をUnityシーン上でプレビューします。<br>詳細は下記「プレビュー機能」にて解説します。 |
| Loop | false | モーションをループ再生するか設定します。歩きや待機モーションではオンにしてください。|
| Draw Circle Shadow | true | モーション再生時に丸影を描画するかどうか設定します。 |
| Collision Detection | true | モーション再生時に衝突判定をおこなうかどうか設定します。 |
| Actions | false | モーション再生時に実行する[アクション](../Actions/ActionsOverview.md)を設定します。|

## プレビュー機能

Scene Previewを有効にすると、以下のように設定したオブジェクトファイルが生成位置にプレビュー表示されます。

![VKCItemObject_5](img/VKCItemObject_5.jpg)

また、Object Modeにて`Pose`もしくは`Motion`を選択すると、モーションのHEMファイルがUnityのAnimationClipに変換されてプレビューができます。

![VKCItemObject_6](img/VKCItemObject_6.jpg)

Scene Previewを有効にすると出現するスライダーをドラッグすると、HEOオブジェクトのアクションを調整できます。<br>
なお、このスライダーはモーションをプレビューするだけで、ビルド時のオブジェクトには反映されません。

![VKCItemObject_7](img/VKCItemObject_7.jpg)

!!! warning "caution"
    以前のバージョンにて作成されたheoファイルのプレビューを有効にした際に、該当のモデルが正常に表示されない場合があります。<br>
    恐れ入りますが、表示不具合が発生した際はheoファイルの再作成をお試しください。
