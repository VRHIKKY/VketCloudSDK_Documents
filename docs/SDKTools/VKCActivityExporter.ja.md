# VKC Activity Exporter

VKC Activity ExporterはActivityをエクスポートするためのSDKツールです。このツールを使用して**VKCActivityExporter**オブジェクトを作成することで、Activityのエクスポートが可能となります。

エクスポートされたActivityは[VKC Item Activity](../VKCComponents/VKCItemActivity.md)を使用してワールド内に複数展開できるほか、フォルダのzipファイル / Unitypackage化によって[Vket Store](https://store.vket.com){target=_blank}や[Vket Cloudマイページ](https://cloud.vket.com/){target=_blank}からアクセスできる「アセットストア」などに公開することで他のユーザーとも共有が可能です。

Activityの概要と使い方については[VKC Item Activity](../VKCComponents/VKCItemActivity.md)をご参照ください。

## 使い方

1. HierarchyでActivityとしてエクスポートしたいオブジェクトをまとめて選択します。

    ![VKCActivityExporter_1](img/VKCActivityExporter_1.jpg)

2. オブジェクトを選択した状態で右クリックして、`Export as Activity`(日本語名：アクティビティとしてエクスポート)を選択します。

    ![VKCActivityExporter_2](img/VKCActivityExporter_2.jpg)

    注意として、選択されたオブジェクトにActivityに含められるHEOコンポーネントがアタッチされている場合において`Export as Activity`が選択可能になります。

    Activityに含められるHEOコンポーネントの一覧は後述の[Activityに含められるHEOコンポーネント](#_6)をご参照ください。

3. `Export as Activity`をクリックすると**VKC Activity Exporter**オブジェクトを作成します。<br>選択されたオブジェクトは**VKC Activity Exporter**オブジェクトの子オブジェクトに移動します。

    ![VKCActivityExporter_3](img/VKCActivityExporter_3.jpg)

## Activityのエクスポート方法

![VKCActivityExporter_4](img/VKCActivityExporter_4.jpg)

`VKC Activity Exporter`のインスペクターでエクスポートできます。

| 名称 | 機能 |
| ---- | ---- |
| HeliScript | HeliScriptの追加/削除ができます。<br>追加されたHeliScriptは[VKC Attribute Script](../VKCComponents/VKCAttributeScript.md)と同様に使用できます。 |
| Motion | Motionの追加/削除ができます。<br> 追加されたモーションはアクティビティのjsonファイルに記載され、プレイヤーに対して[Player.ChangeActivityMotion()](../hs/hs_class_player.md#changeactivitymotion)または[Player.SetNextActivityMotion()](../hs/hs_class_player.md#setnextactivitymotion)を実行するとプレイヤーがモーションを再生します。|
| Thumbnail | Activityのサムネイルを設定できます。<br> 画像が「.png」ファイルではない場合は、Warningを表示します。 |

!!! bug "VKC Item ObjectにVRMを設定しActivityをエクスポートした際のビルドエラーについて"
    Ver12.x現在、[VKC Item Object](../VKCComponents/VKCItemObject.md)にVRMを設定してActivityを書き出した際に、ファイルの読み込みエラーに由来するビルドエラーの発生が確認されています。<br>
    本不具合については次回のSDKにて修正が予定されています。<br>
    回避方法として、後述のdataフォルダ下にモデルデータを配置してjsonを手動で書き換えることでビルドエラーの回避が可能です。

![VKCActivityExporter_9](img/VKCActivityExporter_9.jpg)

``` json
{
  "scripts": [],
  "motions": {},
  "items": [
    {
      "name": "GameObject",
      //filenameをdata/avatar下のvrmファイル名に書き換え
      "filename": "./data/avatar/Vketchan_MToon_blendshape.vrm",
      "pose": "",
// 以下省略
```

## エクスポート

Activity Exporter下部の「**Export**」ボタンをクリックすると、Activityのエクスポートが始まります。

1. エクスポートのフォルダを選択します。選択されたフォルダの名前はActivityファイルの名前として使用されるため、空のフォルダを作成して命名することを推奨します。
    ![VKCActivityExporter_5](img/VKCActivityExporter_5.jpg)

2. フォルダを選択すると、Activityのエクスポートが始まります。エクスポートが完了すると、以下のメッセージが表示されます。

    ![VKCActivityExporter_6](img/VKCActivityExporter_6.jpg)

### フォルダにエクスポートされるファイル

![VKCActivityExporter_7](img/VKCActivityExporter_7.jpg)

Activityをエクスポートする際に指定したフォルダ内では以下のファイルが生成されます。

- フォルダ名と同名のJSONファイル（Activityの構成を定義付けます）

- 日本語版READMEファイル (以下、英語版READMEと共にアクティビティを外部配布する際にご自由に書いた上でご使用ください)

- 英語版READMEファイル

- dataフォルダ

Activityで使っているテクスチャ、3Dモデル、HeliScriptなどのアセットは**data**フォルダに格納されます。

Activityを他のクリエイターに配布する際は、このフォルダをzipもしくはUnitypackageに圧縮/変換した上で配布を行います。

なお、配布の際はdataフォルダ下のテクスチャ/3Dモデルなどのデータが第三者の著作権等を侵害しないこと、[Vket Cloudエンジン利用規約](https://account.vket.com/terms#vket-cloud){target=_blank}を十分確認した上で配布を行ってください。

## Activity / Propertyの設定について

[VKC Item Activity](../VKCComponents/VKCItemActivity.md)にてアクティビティを使用する際、設定のためにActivityの`Overrides`(Property)項目を定義し、HeliScriptにて参照することができます。

Propertyを追加するには編集したいアクティビティのjsonファイルを開き、`properties`に例として以下のようにキーと値を追加のうえで保存します。

```json
//中略
      "components": [],
      "properties": {
          "isShowVketChan":"0",
          "VketChanName":"VketChan 01",
          "VketChanCount":"1"
      },
      "lookatcamera": false,
//中略
```

設定したPropertyは[VKC Item Activity](../VKCComponents/VKCItemActivity.md)にてアクティビティのjsonを読み込んだ際に`overrides`にて表示され、ワールド制作者がアクティビティの設定に使用できます。

![VKCActivityExporter_8](img/VKCActivityExporter_8.jpg)

また、各PropertyはHeliScriptにて[Item.GetProperty()](../hs/hs_class_item.md#getproperty)および[Item.SetProperty()](../hs/hs_class_item.md#setproperty)を使用して参照と書き込みができます。

なお、Propertyのキー及び値は必ず**string**型で返されるため、別の変数型で扱いたい場合は型変換を行ってください。

```csharp
component VketChan
{
    Item m_Item; //自分自身

    //Activityのパラメーター
    string isShowVketChan;

    public VketChan() 
    {
//hsSystemOutput("アクティビティ読み込み完了" + "\n");
    m_Item = new Item();
    m_Item = hsItemGetSelf();

//パラメーターを読み込んで初期化
    isShowVketChan = m_Item.GetProperty("isShowVketChan");
    }

// 以下、通常のHeliScriptと同様に isShowVketChanを使用できます

}
```

## Activityに含められるVKCコンポーネント

- [VKC Item Activity](../VKCComponents/VKCItemActivity.md)

- [VKC Node Rotate Animation](../VKCComponents/VKCNodeRotateAnimation.md)

- [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)

- [VKC Item Audio](../VKCComponents/VKCItemAudio.md)

- [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)

- [VKC Item Camera](../VKCComponents/VKCItemCamera.md)

- [VKC Node Collider](../VKCComponents/VKCNodeCollider.md)

- [VKC Item Field](../VKCComponents/VKCItemField.md)

- [VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md)

- [VKC Item Object](../VKCComponents/VKCItemObject.md)

- [VKC Item Particle](../VKCComponents/VKCItemParticle.md)

- [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

- [VKC Node Shadow](../VKCComponents/VKCNodeShadow.md)

- [VKC Item Spot](../VKCComponents/VKCItemSpot.md)

- [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

- [VKC Node UV Scroller](../VKCComponents/VKCNodeUVScroller.md)

- [VKC Node Video Trigger](../VKCComponents/VKCNodeVideoTrigger.md) * SDK Ver12.3.4以降

!!! warning "Activityエクスポート時のVKC Node Video Triggerについて"
    SDK Ver12.3.4以降では[VKC Node Video Trigger](../VKCComponents/VKCNodeVideoTrigger.md)をアクティビティに含めてエクスポートすることができるようになりました。<br>
    ただしAutoplayには対応していないため、動画を再生する際は手動クリックあるいは[VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)による再生を行う必要があります。

## Activityに含められない / サポート外のVKCコンポーネント

- [VKC Attribute Action Trigger](../VKCComponents/VKCAttributeActionTrigger.md)

- [VKC Node Cylinder Collider](../WorldMakingGuide/Collider.md)

- [VKC Node Blend Shape Translator](../VKCComponents/VKCNodeBlendShapeTranslator.md)

- [VKC Node LOD Level](../VKCComponents/VKCNodeLODLevel.md)

- [VKC Node Mirror](../VKCComponents/VKCNodeMirror.md)

- [VKC Node Reflection Probe Type](../VKCComponents/VKCNodeReflectionProbeType.md)

- [VKC Attribute Property](../VKCComponents/VKCAttributeProperty.md)

- [VKC Attribute Script](../VKCComponents/VKCAttributeScript.md)

- [VKC Node Video Trigger](../VKCComponents/VKCNodeVideoTrigger.md) * SDK Ver12.3.4以前
