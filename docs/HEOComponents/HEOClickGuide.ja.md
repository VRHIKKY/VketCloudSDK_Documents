# HEOClickGuide

![HEOClickGuide_1](./img/HEOClickGuide_1.jpg)

コンポーネントの`ON`を選択すると、一定のエリア内に入るとクリックガイドを出現させるためのオブジェクト類を生成します。<br>
`OFF`を選択すると、生成されたオブジェクトは**削除**されます。

## 使い方
`HEOClickGuide`を押した際、`HEOClickGuide`がアタッチされたオブジェクトの子に`[オブジェクト名_clickArea]`(以下、`clickArea`)が生成されます。<br>
また、`World`オブジェクトの外に`[オブジェクト名_clickguide]`(以下、`clickguide`)が生成されます。

![HEOClickGuide_2](./img/HEOClickGuide_2.jpg)

`clickArea`では`clickGuide`の表示/非表示を[HEOAreaCollider](./HEOAreacollider.md)及び[Show/HideItem](../Actions/Item/ShowHideItem.md)を使用して切りかえています。<br>

![HEOClickGuide_3](./img/HEOClickGuide_3.jpg)

生成時の初期状態では`clickArea`はデフォルトのキューブと同一のサイズです。<br>
下記画像のように、ガイドを表示させたい範囲に応じて`clickArea`のサイズ調整を行うことをおすすめします。

![HEOClickGuide_4](./img/HEOClickGuide_4.jpg)

`clickArea`では[Enable/DisableClickableNode](../Actions/Node/EnableDisableClickableNode.md)を使用して元オブジェクトのクリック判定のオンオフを切り替えることができます。

![HEOClickGuide_5](./img/HEOClickGuide_5.jpg)

生成元のオブジェクトでは、例として[OpenWeb](../Actions/System/Openweb.md)及び[HEOCollider](./HEOCollider.md)にて`Clickable`を設定することで、クリックガイドが表示されている際にのみウェブページを開くギミックが実装できます。

![HEOClickGuide_6](./img/HEOClickGuide_6.jpg)

`clickguide`にはクリックガイド用の画像を表示するための[HEOPlane](./HEOPlane.md)があります。<br>
初期状態では`Billboard`及び`Show`が無効となっているため、有効に切り替えることをおすすめします。

![HEOClickGuide_7](./img/HEOClickGuide_7.jpg)

ビルドした際のクリックガイドの見た目は以下の通りです。

`clickArea`内にいて、クリックガイドが表示されている状態：

![HEOClickGuide_8](./img/HEOClickGuide_8.jpg)

`clickArea`外にいて、クリックガイドが非表示の状態：

![HEOClickGuide_9](./img/HEOClickGuide_9.jpg)
