
# Enable/DisableClickableNode
![EnableDisableClickableNode](img/EnableDisableClickableNode.jpg)

This action enables you to switch between being able to click on the Objects below and not.

- HEOActionTrigger
- HEOVideoTrigger
- HEOTweetTrigger
- HEOCatalogTrigger
- HEOCliclakable (obsolete)

The components will be categorized as clickable, and will detect a click on your browser.

For Target, you may specify HEOField or HEOObject, which contain the above components.
As for Clickable In Target, you may specify the above components attached to the Object.
If you specify HEOObject for Target, you will need to have the name of the Object in text.

The button itself is not supported by mesh filter, so please also check [Show/HideNode](ShowHideNode.md), which is categorized as the same action class.