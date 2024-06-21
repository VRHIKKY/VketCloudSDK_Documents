# Enable/Disable Node

![EnableDisableNode](img/EnableDisableNode_1.jpg)

Enable/Disable Node is an action handling the target node's show/hide, enable/disable collider, and enable/disable click ability.

Using this action will set the node's parameters as [Show/HideNode](ShowHideNode.md), [EnableDisableCollider](./EnableDisableCollider.md), and [EnableDisableClickableNode](./EnableDisableClickableNode.md) at once. If explicit toggle of each parameter is needed, the mentioned actions should be used.

| Name | Parameter | Default Value | Function |
| ---- | ---- | ---- | ---- |
| Enablenode | Target(Node) | None | Selects the target node placed under an [VKC Item Field](../../VKCComponents/VKCItemField.md) object. |
|  | Show | false | If enabled, show the target node's `mesh`. |
|  | Enable Collider | false | If set to true, enable the target node's `collider`. |
|  | Enable Clickable Node | false | If set to true, enable the target node's `clickable colllider`. |
| Disablenode | Target(Node) | None |  Selects the target node placed under an [VKC Item Field](../../VKCComponents/VKCItemField.md) object. |
|  | Hide | false | If enabled, hide the target node's `mesh`. |
|  | Disable Collider| false | If set to true, disable the target node's `collider`. |
|  | Disable Clickable Node | false | If set to true, disable the target node's `clickable colllider`. |
