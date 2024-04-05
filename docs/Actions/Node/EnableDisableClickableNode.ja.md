# Enable/DisableClickableNode

![EnableDisableClickableNode](img/EnableDisableClickableNode.jpg)

このアクションは、以下のオブジェクトがクリックできるかどうかを切り替えます。

- [HEOActionTrigger](../../HEOComponents/HEOActionTrigger.md)
- [HEOVideoTrigger](../../HEOComponents/HEOVideoTrigger.md)
- HEOTweetTrigger (現バージョンでは廃止済み)
- HEOClickable (現バージョンでは廃止済み)

これらのコンポーネントはclickableという種類に属し、ブラウザ上でのマウスクリックを検知します。

Targetは、上記のコンポーネントが属する[HEOField](../../HEOComponents/HEOField.md)もしくは[HEOObject](../../HEOComponents/HEOObject.md)を指定できます。
Clickable in Targetには、対象となる上記コンポーネントがアタッチされたオブジェクトになります。
Targetに[HEOObject](../../HEOComponents/HEOObject.md)を指定した場合はテキストでオブジェクト名を入力する必要があります。

なお、ボタン自体のメッシュ非表示には対応していないので、同じアクションクラスに属する[Show/HideNode](ShowHideNode.md)を併用してください。
