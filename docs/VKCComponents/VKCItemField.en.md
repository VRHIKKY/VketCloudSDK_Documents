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

!!! info "Note"
     Multiple VKC Item Fields can be placed in the scene.

!!! note
    The `Billboard` setting in pre-Ver9.3 components has been renamed to `Look at Camera`.<br>
    If the scene data is migrated from past SDK versions, the `Billboard` setting value will be reflected to `Look at Camera`.

???+ note "Available methods for this object type"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [GetPos](../hs/hs_class_item.md#getpos)
    - [GetWorldPos](../hs/hs_class_item.md#getworldpos)
    - [SetQuaternion](../hs/hs_class_item.md#setquaternion)
    - [GetQuaternion](../hs/hs_class_item.md#getquaternion)
    - [GetWorldQuaternion](../hs/hs_class_item.md#getworldquaternion)
    - [GetWorldRotate](../hs/hs_class_item.md#getworldrotate)
    - [GetScale](../hs/hs_class_item.md#getscale)
    - [SetScale](../hs/hs_class_item.md#setscale)
    - [SetShow](../hs/hs_class_item.md#setshow)
    - [IsShow](../hs/hs_class_item.md#isshow)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [IsLoading](../hs/hs_class_item.md#isloading)
    - [IsLoaded](../hs/hs_class_item.md#isloaded)
    - [GetNodeIndexByName](../hs/hs_class_item.md#getnodeindexbyname)
    - [GetNodeNameByIndex](../hs/hs_class_item.md#getnodenamebyindex)
    - [GetNodePosByIndex](../hs/hs_class_item.md#getnodeposbyindex)
    - [SetShowNode](../hs/hs_class_item.md#setshownode)
    - [IsShowNode](../hs/hs_class_item.md#isshownode)
    - [SetRotateNode](../hs/hs_class_item.md#setrotatenode)
    - [SetEnableCollider](../hs/hs_class_item.md#setenablecollider)
    - [IsEnableCollider](../hs/hs_class_item.md#isenablecollider)
    - [SetClickableNode](../hs/hs_class_item.md#setclickablenode)
    - [IsClickableNode](../hs/hs_class_item.md#isclickablenode)
    - [SetUVOffset](../hs/hs_class_item.md#setuvoffset)
    - [PlayVideo](../hs/hs_class_item.md#playvideo)
    - [StopVideo](../hs/hs_class_item.md#stopvideo)
    - [IsPlayVideo](../hs/hs_class_item.md#isplayvideo)
    - [ReplaceItem](../hs/hs_class_item.md#replacetexture)
    - [ReplaceTexture](../hs/hs_class_item.md#replaceitem)
    - [SetPhysicsEnable](../hs/hs_class_item.md#setphysicsenable)
    - [IsPhysicsFixed](../hs/hs_class_item.md#isphysicsfixed)
    - [GetPhysicsIDByNodeName](../hs/hs_class_item.md#getphysicsidbynodename)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [GetProperty](../hs/hs_class_item.md#getproperty)
    - [CallComponentMethod](../hs/hs_class_item.md#callcomponentmethod)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

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

!!! warning "caution"
     The set colliders can be deleted from the list by pressing the X button on the right side of each item, but the objects will remain and must be deleted manually.

---

### Reference
[DoorOpensAfterLoad](../WorldMakingGuide/DoorOpensAfterLoad.md)

## Advanced Options

![VKC Item Field](img/VKCItemField3.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Clickable | false | Allows click the object |
| Alpha Animation Target | false | Becomes transparent when obstructing the camera |
| Item Render Priority | 0 | Sets the item rendering priority |
| Collision Detection | true | Toggles whether object collision detection is enabled|
| Show Photo Mode | true | Specifies whether it is displayed in photo mode |
| Force Raycast Check Disable | false | Sets whether to forcibly disable raycast detection per item |
| Force Collider Disable | false | Forcibly disables the collider |

!!! warning "Force Collider Disable is not available in the stable SDK 14.4.12"
    Force Collider Disable cannot be used in the stable SDK 14.4.12 because its functionality has been rolled back.
    If you have SDK 14.2.1 or any version later than 14.4.12, please use that instead.
