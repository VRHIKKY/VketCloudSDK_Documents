# VKC Activity Exporter

[VKC Activity Exporter](../HEOComponents/VKC Activity Exporter.md)はActivityをエクスポートするためのSDKツールです。このツールを使用して**VKCActivityExporter**オブジェクトを作成することで、Activityのエクスポートが可能となります。

エクスポートされたActivityは[HEOActivity](../HEOComponents/HEOActivity.md)を使用してワールド内に複数展開できるほか、フォルダのzipファイル / Unitypackage化によって[Vket Store](https://store.vket.com){target=_blank}や[Vket Cloudマイページ](https://cloud.vket.com/){target=_blank}からアクセスできる「アセットストア」などに公開することで他のユーザーとも共有が可能です。

Activityの概要と使い方については[HEOActivity](../HEOComponents/HEOActivity.md)をご参照ください。

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
| HeliScript | HeliScriptの追加/削除ができます。<br>追加されたHeliScriptは[HEOScript](../HEOComponents/HEOScript.md)と同様に使用できます。 |
| Motion | Motionの追加/削除ができます。<br> 追加されたモーションはアクティビティのjsonファイルに記載され、アクティビティ内の[HEOObject](../HEOComponents/HEOObject.md)に対して[Item.ChangeMotion()](../hs/hs_class_item.md#changemotion)を実行すると再生できます。<br>また、モーションの実行対象をプレイヤーのアバターにしたい場合は[Player.ChangeActivityMotion()](../hs/hs_class_player.md)または[Player.SetActivityMotion()](../hs/hs_class_player.md)を実行します。|
| Thumbnail | Activityのサムネイルを設定できます。<br> 画像が「.png」ファイルではない場合は、Warningを表示します。 |

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

![VKCActivityExporter_8](img/VKCActivityExporter_8.jpg)

[HEOProperty](../HEOComponents/HEOProperty.md)と同様に、エクスポートされたActivityの`Overrides`には値を設定することができます。

## Activityに含められるHEOコンポーネント

- [HEOAnimation](../HEOComponents/HEOAnimation.md)

- [HEOCollider](../HEOComponents/HEOCollider.md)

- [HEOCylinderCollider](../HEOComponents/HEOCylinderCollider.md)

- [HEOMeshCollider](../HEOComponents/HEOMeshCollider.md)

- [HEOMirror](../HEOComponents/HEOMirror.md)

- [HEOUVScroller](../HEOComponents/HEOUVScroller.md)

- [HEOShadow](../HEOComponents/HEOShadow.md)

- [HEOReflectionProbe](../HEOComponents/HEOReflectionProbe.md)

- [HEOLODLevel](../HEOComponents/HEOLODLevel.md)

- [HEOObject](../HEOComponents/HEOObject.md)

- [HEOPlane](../HEOComponents/HEOPlane.md)

- [HEOTextPlane](../HEOComponents/HEOTextPlane.md)

- [HEOSpot](../HEOComponents/HEOSpot.md)

- [HEOParticle](../HEOComponents/HEOParticle.md)

- [HEOField](../HEOComponents/HEOField.md)

- [HEOCamera](../HEOComponents/HEOCamera.md)

- [HEOBackgroundTexture](../HEOComponents/HEOBackgroundTexture.md)

- [HEOAudio](../HEOComponents/HEOAudio.md)

- [HEOAreacollider](../HEOComponents/HEOAreacollider.md)

- [HEOActivity](../HEOComponents/HEOActivity.md)

## Activityに含められない / サポート外のHEOコンポーネント

- [HEOCylinderCollider](../HEOComponents/HEOCylinderCollider.md)

- [HEOLODLevel](../HEOComponents/HEOLODLevel.md)

- [HEOMirror](../HEOComponents/HEOMirror.md)

- [HEOInfo](../HEOComponents/HEOInfo.md)

- [HEOObjectType](../HEOComponents/HEOObjectType.md)

- [HEOVideoTrigger](../HEOComponents/HEOVideoTrigger.md)

- [HEOActionTrigger](../HEOComponents/HEOActionTrigger.md)

- [HEOScript](../HEOComponents/HEOScript.md)

- [HEOProperty](../HEOComponents/HEOProperty.md)
