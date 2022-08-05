
# Enable/DisableClickableNode
![EnableDisableClickableNode](img/EnableDisableClickableNode.jpg)

このアクションは、以下のオブジェクトがクリックできるかどうかを切り替えます。

- HEOActionTrigger
- HEOVideoTrigger
- HEOTweetTrigger
- HEOCatalogTrigger
- HEOCliclakable (obsolete)

これらのコンポーネントはclickableという種類に属し、ブラウザ上でのマウスクリックを検知します。

Targetは、上記のコンポーネントが属するHEOFieldもしくはHEOObjectを指定できます。
Clickable in Targetには、対象となる上記コンポーネントがアタッチされたオブジェクトになります。
TargetにHEOObjectを指定した場合はテキストでオブジェクト名を入力する必要があります。

なお、ボタン自体のメッシュ非表示には対応していないので、同じアクションクラスに属する[Show/HideNode](ShowHideNode.md)を併用してください。
