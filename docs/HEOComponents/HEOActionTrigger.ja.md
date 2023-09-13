# HEOActionTrigger
![HEOActionTrigger](img/HEOActionTrigger.jpg)

HEOActionTriggerは、オブジェクトに対してアクションを導入することができるコンポーネントです。<br/>
コライダーをクリックした際にアクションを実行します。

HEOActionTriggerをアタッチするオブジェクトにはColliderがアタッチされている必要があります。

Addをクリックすることで任意のアクションを設定できます。<br/>
Deleteをクリックすることで最後尾のアクションを削除できます。

アクションについては[アクションの概要](../Actions/ActionsOverview.md)を参照してください。<br>
コライダーについては[Unity制作ガイドライン - コライダー](../WorldMakingGuide/UnityGuidelines.md)を参照してください。

!!! note caution
        SDKバージョン4.8では、コライダーを挟んでもClickableなオブジェクトが別のコライダーを挟んでもクリックできる不具合が確認されております。<br>
        プレイヤーが対象のオブジェクトをクリックできる位置をワールド構造によって制限するか、[HEOClickGuide](HEOClickGuide.md)を参考に範囲外のクリックを受け付けない実装をお勧めします。