# Sceneビューにおけるギズモの表示

VketCloudSDKを導入すると、Sceneビューに一部のVKCコンポーネントがギズモとして表示されるようになります

![Gizmos_1](./img/Gizmos_1.jpg)

## RenderingSetting
「指向性光源」の枠にライトが指定されていない場合、デフォルトの色と向きを持つライトのギズモが表示されます。
「指向性光源」の枠にライトが指定されている場合、指定されたライトの色と向きを参照したギズモが表示されます。
![Gizmos_2](./img/Gizmos_2.jpg)
![Gizmos_3](./img/Gizmos_3.jpg)


## DespawnHeightSettings
コンポーネントが付いたオブジェクトを中心としてエリアサイズを参照し、黄色と黒の市松模様で落下した際に初期位置に戻る判定の範囲と高さを表示します。
![Gizmos_4](./img/Gizmos_4.jpg)
![Gizmos_5](./img/Gizmos_5.jpg)

## PlayerSetting
プレイヤーが入場する初期位置であることを示すギズモが表示されます。
飛び出た矢印の向きはプレイヤーが入場した際の向きを示します。
![Gizmos_6](./img/Gizmos_6.jpg)
![Gizmos_7](./img/Gizmos_7.jpg)


## 各アイテムのギズモ
VKCItemオブジェクトの場所にItemの種類や状態に応じたアイコンが表示されます。
![Gizmos_8](./img/Gizmos_8.jpg)


アイコンは該当コンポーネントの状態によって色が変化します<br>
白：正常な状態です。<br>
黄：警告が発生しています。<br>
赤：エラーが発生しています。<br>

アイコン下の数字
RenderingSettingで設定されているレンダー優先度の数字が表示されています。
![Gizmos_9](./img/Gizmos_9.jpg)


| コンポーネント名 | アイコン |
|-----------------|-------------------------------------------|
| VKCItemField    | ![VKCItemField](./img/Gizmos_ItemField.jpg) |
| VKCItemObject   | ![VKCItemObject](./img/Gizmos_ItemObject.jpg) |
| VKCItemActivity | ![VKCItemActivity](./img/Gizmos_ItemActivity.jpg) |
| VKCItemParticle | ![VKCItemParticle](./img/Gizmos_ItemParticle.jpg) |
| VKCItemAudio    | ![VKCItemAudio](./img/Gizmos_ItemAudio.jpg) |
| VKCItemPlane    | ![VKCItemPlane](./img/Gizmos_ItemPlane.jpg) |
| VKCItemTextPlane| ![VKCItemTextPlane](./img/Gizmos_ItemTextPlane.jpg) |
| VKCItemCamera   | ![VKCItemCamera](./img/Gizmos_ItemCamera.jpg) |
| VKCItemSpot     | ![VKCItemSpot](./img/Gizmos_ItemSpot.jpg) |
