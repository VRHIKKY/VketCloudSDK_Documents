# Enable/DisableClickableNode

![EnableDisableClickableNode](img/EnableDisableClickableNode.jpg)

This action enables you to switch between being able to click on the Objects below and not.

- [HEOActionTrigger](../../HEOComponents/HEOActionTrigger.md)
- [HEOVideoTrigger](../../HEOComponents/HEOVideoTrigger.md)
- HEOTweetTrigger (obsolete)
- HEOClickable (obsolete)

These components are categorized as "clickable", and can detect a click on your browser.

For the Target, specify an [HEOField](../../HEOComponents/HEOField.md) or an [HEOObject](../../HEOComponents/HEOObject.md), which is the parent that hold the Objects you wish to control. As for Clickable In Target, specify the child objects that has the above components. If you set an [HEOObject](../../HEOComponents/HEOObject.md) in Target, you'll need to enter the Object's name in text.

The mesh itself will not go invisible. If you wish it to, check [Show/HideNode](./ShowHideNode.md), which is categorized as the same action class.
