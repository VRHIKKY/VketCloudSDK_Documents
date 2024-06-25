# VKC Item Area Collider

![HEOAreaCollider](img/HEOAreaCollider.jpg)

VKC Item Area Colliderは、オブジェクトに対してアクションを導入することができるコンポーネントです。<br/>
コライダーにプレイヤーが進入した際にアクションを実行します。

VKC Item Area Colliderをアタッチするオブジェクトには[VKC Node Collider](./VKCNodeCollider.md)とColliderがアタッチされている必要があります。<br>
なお、VKC Item Area Colliderをオブジェクトにアタッチすると[VKC Node Collider](./VKCNodeCollider.md)とBox Colliderが自動で追加されます。<br>
[VKC Node Collider](./VKCNodeCollider.md)のtypeはAreaに設定されている必要があります。

![VKC Node Collider](img/HEOCollider_1.jpg)

Actions,LeaveActionsそれぞれにおいてAddをクリックすることで任意のアクションを設定できます。<br>
反対に、Deleteをクリックすることで最後尾のアクションを削除できます。

|  Label |  function  |
| ----   | ---- |
| Actions | エリア進入時のアクションを設定します。 |
| LeaveActions | エリア退出時のアクションを設定します。 |

アクションについては[アクションの概要](../Actions/ActionsOverview.md)を参照してください。<br>
コライダーについては[Unity制作ガイドライン - コライダー](../WorldMakingGuide/UnityGuidelines.md)を参照してください。

## コライダーの衝突 / エリア範囲判定について

ワールド内でのコライダーの衝突 / エリア範囲判定は画像オレンジ円のようにプレイヤーの下半身にて判定されます。<br>
また、以下のようなコリジョンの可視化は[VketCloudSettings / BasicSettings](../VketCloudSettings/BasicSettings.md)から[デバッグモード](../WorldEditingTips/DebugMode.md#f3)を有効にした上でF3キーを押すと切り替えできます。

![VKCNodeCollider_2](img/HEOCollider_2.jpg)
