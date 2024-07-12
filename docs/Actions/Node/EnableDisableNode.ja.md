# Enable/Disable Node

![EnableDisableNode](img/EnableDisableNode_1.jpg)

選択したノードに対してメッシュ表示・非表示や、コライダー有効化・無効化、クリック可能ノードの有効化・無効化をまとめて設定するアクションです。

本アクションによって、[Show/Hide Node](ShowHideNode.md)、[Enable Disable Collider](./EnableDisableCollider.md)、そして[Enable Disable Clickable Node](./EnableDisableClickableNode.md)の設定をまとめて行うことができます。一方で、明示的に設定項目のどれかだけを有効にしたい場合は各アクションを使い分けするのが有効です。

| 名称 | パラメータ | デフォルト値 | 説明 |
| ---- | ---- | ---- | ---- |
| Enablenode | Target(Node) | None | 対象となる[VKC Item Field](../../VKCComponents/VKCItemField.md)配下のノードを選択します。 |
|  | Show | false | trueにすることで、アクション実行時、アイテムに含まれるノードの`メッシュ`を表示します。 |
|  | Enable Collider | false | trueにすることで、アクション実行時、アイテムに含まれるノードの`当たり判定用のコライダー`を有効化します。 |
|  | Enable Clickable Node| false | trueにすることで、アクション実行時、アイテムに含まれるノードの`クリック判定`を有効化します。 |
| Disablenode | Target(Node) | None | 対象となる[VKC Item Field](../../VKCComponents/VKCItemField.md)配下のノードを選択します。 |
|  | Hide | false | trueにすることで、アクション実行時、アイテムに含まれるノードの`メッシュ`を非表示にします。 |
|  | Disable Collider| false | trueにすることで、アクション実行時、アイテムに含まれるノードの`当たり判定用のコライダー`を無効化します。 |
|  | Disable Clickable Node| false | trueにすることで、アクション実行時、アイテムに含まれるノードの`クリック判定`を無効化します。 |
