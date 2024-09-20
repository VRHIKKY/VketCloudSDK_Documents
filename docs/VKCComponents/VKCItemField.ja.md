# VKC Item Field

![VKC Item Field](img/VKCItemField1.jpg)

VKC Item Fieldがアタッチされたオブジェクトは、BuildAndRun時に.heoとしてパックされます。.heoファイルに含めたいオブジェクトは、必ずVKC Item Field以下に配置してください。

VKC Item Fieldの詳しい配置方法については[VKC Item Fieldの使い方](../WorldMakingGuide/HEOFieldTips.md)を参照ください。

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Show | true | オブジェクトの表示状態を管理します |
| Auto Loading | true | 動的ローディングの有効/無効を切り替えます |
| Load Collider |  | 範囲に入った際に特定のオブジェクトをロードするコライダーを生成します |
| UnLoad Collider |  | 範囲に入った際に特定のオブジェクトをアンロードするコライダーを生成します |

!!! note info
    VKC Item Fieldはシーンに複数配置することができます。

!!! note info
    Ver9.3以前の`Billboard`設定は`Look at Camera`に名称が変更されました。<br>
    以前のSDKバージョンからシーンデータを移植した場合、`Billboard`の設定は`Look at Camera`に引き継がれます。

???+ note "このオブジェクトタイプを使用可能なItemクラス"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [GetPos](../hs/hs_class_item.md#getpos)
    - [GetWorldPos](../hs/hs_class_item.md#getworldpos)
    - [SetQuaternion](../hs/hs_class_item.md#setquaternion)
    - [GetQuaternion](../hs/hs_class_item.md#getquaternion)
    - [GetWorldQuaternion](../hs/hs_class_item.md#getworldquaternion)
    - [GetWorldRotate](../hs/hs_class_item.md#getworldrotate)
    - [GetScale](../hs/hs_class_item.md#getscale)
    - [SetScale](../hs/hs_class_item.md#setscale)
    - [SetShow](../hs/hs_class_item.md#setshow)
    - [IsShow](../hs/hs_class_item.md#isshow)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [IsLoading](../hs/hs_class_item.md#isloading)
    - [IsLoaded](../hs/hs_class_item.md#isloaded)
    - [GetNodeIndexByName](../hs/hs_class_item.md#getnodeindexbyname)
    - [GetNodeNameByIndex](../hs/hs_class_item.md#getnodenamebyindex)
    - [GetNodePosByIndex](../hs/hs_class_item.md#getnodeposbyindex)
    - [SetShowNode](../hs/hs_class_item.md#setshownode)
    - [IsShowNode](../hs/hs_class_item.md#isshownode)
    - [SetRotateNode](../hs/hs_class_item.md#setrotatenode)
    - [SetEnableCollider](../hs/hs_class_item.md#setenablecollider)
    - [IsEnableCollider](../hs/hs_class_item.md#isenablecollider)
    - [SetClickableNode](../hs/hs_class_item.md#setclickablenode)
    - [IsClickableNode](../hs/hs_class_item.md#isclickablenode)
    - [SetUVOffset](../hs/hs_class_item.md#setuvoffset)
    - [PlayVideo](../hs/hs_class_item.md#playvideo)
    - [StopVideo](../hs/hs_class_item.md#stopvideo)
    - [IsPlayVideo](../hs/hs_class_item.md#isplayvideo)
    - [ReplaceItem](../hs/hs_class_item.md#replacetexture)
    - [ReplaceTexture](../hs/hs_class_item.md#replaceitem)
    - [SetPhysicsEnable](../hs/hs_class_item.md#setphysicsenable)
    - [IsPhysicsFixed](../hs/hs_class_item.md#isphysicsfixed)
    - [GetPhysicsIDByNodeName](../hs/hs_class_item.md#getphysicsidbynodename)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [GetProperty](../hs/hs_class_item.md#getproperty)
    - [CallComponentMethod](../hs/hs_class_item.md#callcomponentmethod)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

---

## 動的ローディング設定方法

VketCloudでは、ワールドに入った後に特定のエリアへ侵入した時にオブジェクトをロードさせることができます。これを、「動的ローディング」と呼びます。設定方法は、以下のとおりです。

### ロード発火側

1. ロードされるオブジェクトが持つVKC Item Fieldコンポーネントの「動的ローディング」のチェックを外す。
2. ロードコライダーの項目を開き、「ロードコライダー生成」を押してロードに使うエリアコライダーを生成する。
3. 生成されたロード用のコライダーを最初から読み込まれるVKC Item Fieldの子オブジェクトにし、位置や範囲を調整する。

![VKC Item Field](img/VKCItemField2.jpg)

### アンロード発火側

1. アンロードコライダーの項目を開き、「アンロードコライダー生成」を押してロードに使うエリアコライダーを生成する。
2. 生成されたアンロード用のコライダーをVKC Item Fieldの子オブジェクトにし、位置や範囲を調整する。

!!! note caution
    設定されたコライダーは、各項目の右側にあるXボタンを押すことでリストから消すことができますが、オブジェクトは残ったままになるので、そちらは手動で削除が必要になります。

---

## 高度な設定

![VKC Item Field](img/VKCItemField3.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Clickable | false | クリックできるようになります |
| Alpha Animation Target | false | カメラを遮ったときに透過されます |
| Item Render Priority |  0 | アイテムレンダー優先度を設定します |
| Collision Detection | true | オブジェクトの衝突判定を検知するか切り替えます |
| Show Photo Mode | true | 撮影モードで表示されるかどうかを指定します | 
