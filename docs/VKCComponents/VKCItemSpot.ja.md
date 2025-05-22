# VKC Item Spot

![HEOSpot](img/HEOSpot_1.jpg)

VKC Item Spotはワールド入場時のプレイヤーの初期位置をURLクエリに応じて変更するために使用します。

通常のワールド入場時の初期位置を変更したい場合は[HEOPlayer](HEOPlayer.md)の設定を変更します。

|  名称 |  機能  |
| ----   | ---- |
| Show | VKC Item Spotでは動作しません。 |

## 詳細設定

| 名称 | 初期値 |  説明  |
| ---- | ---- | ---- |
| Auto Loading | True | 自動ローディングの有効/無効を切り替えます。 |
| Clickable | False | VKC Item Spotでは動作しません。 |
| Show Photo Mode | True | VKC Item Spotでは動作しません。 |
| Item Render Priority | 0 | ワールド内のItemの描画優先度を変更できます。 |

## VKC Item Spotの設定方法

新規のゲームオブジェクトを作成し、VKC Item Spotコンポーネントをアタッチした上で名前を`Spot1`, `Spot2`のように任意の`Spot{x}`に設定します。

本ゲームオブジェクトのPositionがURLクエリを適用した際のプレイヤー入場時の初期位置になります。

![HEOSpot](img/HEOSpot_2.jpg)

ワールドにアクセスする際、`&spaceindex=1`のように `spaceindex={x}` というクエリをURL内に追加すると、設定VKC Item Spotの位置にプレイヤーが配置された状態で入室できます。

URLクエリ未指定時の初期位置：

![HEOSpot](img/HEOSpot_3.jpg)

URLクエリ指定時の初期位置：

![HEOSpot](img/HEOSpot_4.jpg)