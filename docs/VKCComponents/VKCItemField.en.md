# VKC Item Field

![VKC Item Field](img/VKCItemField1.jpg)

Objects with VKC Item Field attached will be packed into .heo during BuildAndRun. Make sure to set objects you want to include in the .heo file as children of the object with VKC Item Field.

For tips on how to place VKC Item Field, see [Tips on using VKC Item Field](../WorldMakingGuide/HEOFieldTips.md).

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Show | true | Sets the display state of objects |
| Auto Loading | true | Activates Dynamic Loading |
| Load Collider |  | Generates a collider that will load a designated object on enter |
| UnLoad Collider |  | Generates a collider that will unload a designated object on enter |

!!! note info
     Multiple VKC Item Fields can be placed in the scene.

!!! note
    The `Billboard` setting in pre-Ver9.3 components has been renamed to `Look at Camera`.<br>
    If the scene data is migrated from past SDK versions, the `Billboard` setting value will be reflected to `Look at Camera`.

---

## Configure dynamic loading

VketCloud allows objects to be loaded when entering a specific area after entering the world. This is called "dynamic loading". You may set the dynamic loading by following the below steps.

### Load initiator

1. Uncheck "Dynamic loading" of the VKC Item Field component of the object to be loaded.
2. Open the load collider item and press "Generate load collider" to generate an area collider to be used for loading.
3. Set the generated collider for loading as a child object of VKC Item Field that is loaded from the beginning, and adjust the position and range.

![VKC Item Field](img/VKCItemField2.jpg)

### Unload initiator

1. Open the Unload Collider item and press "Generate Unload Collider" to generate an area collider to be used for loading.
2. Set the generated collider for unloading as a child object of VKC Item Field and adjust the position and range.

!!! note caution
     The set colliders can be deleted from the list by pressing the X button on the right side of each item, but the objects will remain and must be deleted manually.

---

## Advanced Options

![VKC Item Field](img/VKCItemField3.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Clickable | false | Allows click the object |
| Alpha Animation Target | false | Becomes transparent when obstructing the camera |
| Item Render Priority | 0 | Sets the item rendering priority |
| Collision Detection | true | Toggles whether object collision detection is enabled|
| Show Photo Mode | true | Specifies whether it is displayed in photo mode |
