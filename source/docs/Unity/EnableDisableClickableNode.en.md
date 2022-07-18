
# Enable/DisableClickableNode
![EnableDisableClickableNode](img/EnableDisableClickableNode.jpg)

This action enables you to switch between being able to click on the Objects below and not.

These components are categorized as "clickable", and can detect a click on your browser.

- HEOActionTrigger
- HEOVideoTrigger
- HEOTweetTrigger
- HEOCatalogTrigger
- HEOCliclakable (obsolete)

For the Target, specify an HEOField or an HEOObject, which is the parent that hold the Objects you wish to control. As for Clickable In Target, specify the child objects that has the above components. If you've set an HEOObject in Target, you'll need to enter the Object's name in text.

The mesh itself will not go invisible. If you wish it to, check Show/HideNode, which is categorized as the same action class.