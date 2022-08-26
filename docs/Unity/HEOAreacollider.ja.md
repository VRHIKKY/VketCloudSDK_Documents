# HEOAreacollider
![HEOAreacollider](img/HEOAreaCollider.jpg)

HEOAreaColliderは、オブジェクトに対してアクションを導入することができるコンポーネントです。<br/>
コライダーにプレイヤーが進入した際にアクションを実行します。

HEOAreaColliderをアタッチするオブジェクトにはHEOCollider,Colliderがアタッチされている必要があります。
HEOColliderのtypeはAreaに設定されている必要があります。

![HEOCollider](img/HEOCollider.jpg)

Actions,LeaveActionsそれぞれにおいて<br/>
Addをクリックすることで任意のアクションを設定できます。<br/>
Deleteをクリックすることで最後尾のアクションを削除できます。

|  Label |  function  |
| ----   | ---- |
| Actions | エリア進入時のアクションを設定します。 |
| LeaveActions | エリア退出時のアクションを設定します。 |

アクションについては[アクションの概要](ActionsOverview.md)を参照してください。<br>
コライダーについては[Unity制作ガイドライン - コライダー](../heoexporter/he_UnityGuidelines.md)を参照してください。


