# Item class

On Vket Cloud, each non-Player objects on the world are defined as Items.<br>

[VKC Item Field](../VKCComponents/VKCItemField.md), [VKC Item Object](../VKCComponents/VKCItemObject.md), [VKC Item Plane](../VKCComponents/VKCItemPlane.md), [VKC Item Activity](../VKCComponents/VKCItemActivity.md) are examples of these.

The Item class is used to manipulate individual items such as [VKC Item Field](../VKCComponents/VKCItemField.md) placed in the world and its child objects (Nodes) in HeliScript.

You can retrieve an instance of the Item class by calling functions such as hsItemGet().

Item class has various methods to operate the obtained Item object.

## How to get Item class object from component

The Item class object held by the component is obtainable by making the following call from the method in the component.

```
Item myItem = hsItemGet("Item name");
```

Calling hsItemGetSelf() will obtain the Item instance of the script's current component.
```
Item myitem = hsItemGetSelf();
```

***

## Item utility functions

### hsItemGet

`Item hsItemGet(string itemName)`

Global Function. Gets an Item by the specified name.

### hsItemGetSelf

`Item hsItemGetSelf()`

Global function. Gets the Item object of where this component itself is attached, by calling this function in the component's constructor, or methods such as Update, OnClickNode, etc.

### hsItemCreateClone

`Item hsItemCreateClone(Item Origin, string Name = "")`

Global function. Creates a clone of the specified item in the same location. The cloneable item types are `object`, `textplane`, `activity` , `plane` and `particle`.  
Pass the original item object to Origin.  
Optionally pass the item name you want to set for the clone item to Name. If not specified, a name will be automatically assigned.

### hsItemDestroyClone

`void hsItemDestroyClone(Item item)`

Global function. Deletes the specified clone item. Non-clone items cannot be deleted.

Even when an item is deleted, the Item class instance obtained before deletion and the component instances held by that Item continue to exist. However, all operations on the Item are actually ignored.

To check if an Item instance has been deleted, use the IsAlive method.

For components, when deleted, they are automatically treated as null in comparisons using the "===" or "!==" operators. Therefore, you can determine "if it's null, it has been deleted."

### hsItemCreateShallowClone

`bool hsItemCreateShallowClone(Item Origin, HSShallowCloneParam param)`

Global function. Only supports `object` type items. Creates a shallow clone (hereinafter ShallowClone) of the specified item. Pass [HSShallowCloneParam](../hs/hs_class_shallowcloneparam.md) as the argument.
ShallowClone is a feature that, in contrast to hsItemCreateClone, does not copy any item information and only performs instance rendering according to the information set in HSShallowCloneParam.
ShallowClone operates faster than regular clones. However, since it is not cloned as an item, item information such as coordinates and rotation cannot be updated.
InstanceDraw must be enabled in the SDK.

### hsItemDestroyAllShallowClone

`void hsItemDestroyAllShallowClone(Item Origin)`

Global function. Deletes all ShallowClones of the specified item.

***

## Methods

### Equals

`public bool Equals(Item obj)`

Judges whether this class is identical to the argument obj.

When obtaining Item objects using hsItemGet(), etc., a different instance may be obtained despite being the same Item. For checking identity, use Equals() instead of "===" operator.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetName

`public string GetName()`

Get the name of the Item.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetParentItem

`public Item GetParentItem()`

Retrieves the parent Item relative to the Item itself.

Since an activity has a structure where an Item contains other Items, calling GetParentItem() from an Item within an activity will retrieve the parent Item.

If there is no parent Item, it returns null.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetPos

`public void SetPos(Vector3 pos)`

Move Item to the designated position.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetPos

`public Vector3 GetPos()`

Get the local position of Item.

If this Item is inside a VKC Item Activity, the obtained value will be the coordinates relative to the VKC Item Activity.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetWorldPos

`public Vector3 GetWorldPos()`

Get the world position of Item.

Regardless of where this Item is located (inside or outside of a VKC Item Activity), it always returns the coordinates in world space.

???+ warning Usage Caution
    Use this method when you want to obtain world coordinates in the case of an Activity.

    If it is not an Activity, use GetPos for most of the time.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetQuaternion

`public bool SetQuaternion(Quaternion Rotate)`

Set the quaternion rotation of Item.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetQuaternion

`public Quaternion GetQuaternion()`

Get the local rotation of Item by quaternion.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item AreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetWorldQuaternion

`public Quaternion GetWorldQuaternion()`

Get the world rotation of Item by quaternion.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetWorldRotate

`public Vector3 GetWorldRotate()`

Get the world rotation of Item by Vector3 (Euler angles).<br>
The values for each axis (x, y, z) are represented in a range from -180 degrees to 180 degrees.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetScale

`public Vector3 GetScale()`

Get the scale of Item by Vector3.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetScale

`public void SetScale(Vector3 Scale)`

Set the scale of Item by Vector3.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### MovePos

`public void MovePos(Vector3 pos, float time, bool CollisionDetection = false)`

Moves the Item over [time] seconds to the coordinates specified by pos.

If CollisionDetection is set to true, collision detection will be enabled as like the player avatar.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsMoving

`public bool IsMoving()`

Returns true if the Item is moving.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### Play

`public bool Play()`

Start playing a sound or particle. Returns true if the playback process has started successfully.<br>
Returns false on failure.

???+ note "Available object types for this method"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)

### Stop

`public void Stop()`

Stop the sound or particle that is playing.

???+ note "Available object types for this method"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)

### IsPlay

`public bool IsPlay()`

Returns true if the sound or particle is playing.

???+ note "Available object types for this method"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    ??? warning "Different return values for IsPlay"
        - [VKC Item Audio](../VKCComponents/VKCItemAudio.md): Returns true if the designated audio clip is playing
        - [VKC Item Object](../VKCComponents/VKCItemObject.md): Returns true if designated hem in Motion list is playing, when object mode is Motion
        - [VKC Item Particle](../VKCComponents/VKCItemParticle.md): Returns true if designated .hep particle is playing

### Pause

`public bool Pause()`

Pauses the object's playing motion.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### Restart

`public bool Restart()`

Resumes the object's playing motion after pause.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetPlayTime

`public bool SetPlayTime(float PlayTimeMS)`

Sets the object's motion playing position by designated time.<br>
The time is designated by millisecond.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetPlayTime

`public float GetPlayTime()`

Gets the object's motion playing position by designated time.<br>
The time is designated by millisecond.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetShow

`public void SetShow(bool flag)`

Display Item with true. Hide the Item with false.

???+ note "Available object types for this method"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsShow

`public bool IsShow()`

Returns true if the Item is visible, false otherwise.

???+ note "Available object types for this method"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### ChangeMotion

`public bool ChangeMotion(string MotionName, float BlendTimeMS = 0.0f)`

Change the motion according to the designated MotionName.<br>
BlendTimeMS will designate the time to blend the motion by milliseconds.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### LoadMotion

`public bool LoadMotion(string MotionName, string FileName, bool Loop)`

Loads the designated motion.

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### FacialEmoteFixed

`public bool FacialEmoteFixed(int FacialEmoteType)`

Changes facial expression. Change will be done immediately, and will not return automatically as like the player avatar.

The facial types below can be designated:

- FACIALEMOTETYPE_NEUTRAL
- FACIALEMOTETYPE_JOY
- FACIALEMOTETYPE_ANGRY
- FACIALEMOTETYPE_SORROW
- FACIALEMOTETYPE_FUN

???+ note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### Load

`public bool Load()`

Start loading the Item. Returns false if the loading process fails to start.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### Unload

`public bool Unload()`

Unload the Item. Returns false if the unloading process fails.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsLoading

`public bool IsLoading()`

Returns true if the Item is loading, false otherwise.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsLoaded

`public bool IsLoaded()`

Returns true if the Item has finished loading, false otherwise.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetNodeIndexByName

`public int GetNodeIndexByName(string nodeName)`

Finds a node by name and returns an index identifying that node. 
If the node is not found, -1 will be returned.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetNodeNameByIndex

`public string GetNodeNameByIndex(int nodeIndex)`

Given a node by index, return the name of that node.
If the node is not found, an empty string will be returned.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetNodePosByIndex

`public Vector3 GetNodePosByIndex(int nodeIndex)`

Specify a node by index and return the coordinates of that node.
If the node is not found, Vector3.zero will be returned.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### GetNodeRotateByIndex

`public Quaternion GetNodeRotateByIndex(int nodeIndex)`

Specify a node by index and return the rotation (Quaternion) of that node.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetShowNode

`public bool SetShowNode(string nodeName, bool flag)`

Specify a node by name, show it if flag is true and hide it if flag is false.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### IsShowNode

`public bool IsShowNode(string nodeName)`

Specify a node by name, returns true if the node is visible and false if it is hidden.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetRotateNode

`public bool SetRotateNode(string nodeName, Vector3 rotate)`

Specify a node by name and rotate that node.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetEnableCollider

`public bool SetEnableCollider(string nodeName, bool flag)`

Specify a collider by name, true to enable it, false to disable it.

???+ note "Available object types for this method"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### IsEnableCollider

`public bool IsEnableCollider(string nodeName)`

Specify a collider by name, returns true if the collider is enabled, false otherwise.

???+ note "Available object types for this method"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetClickableNode

`public bool SetClickableNode(string nodeName, bool flag)`

Specify a clickable node by name, enable clicks if flag is set to true and disable clicks if flag is set to false.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### IsClickableNode

`public bool IsClickableNode(string nodeName)`

Specify a node by name and returns true if the node is clickable, false otherwise.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetUVScale

`public bool SetUVScale(string materialName, float u, float v)`

Specify a material by name and change the uv scale of that material. Returns false if the change fails.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### SetUVOffset

`public bool SetUVOffset(string materialName, float u, float v)`

Specify a material by name and change the uv offset of that material **starting from the top-left origin**. Returns false if the change fails.

!!! warning "Origin coordinate of UV"
    While Unity considers the bottom-left coordinate of the UV as the origin, note that HeliScript considers the **top-left** as the origin.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### SetMaterialColor

`public bool SetMaterialColor(string materialName, float R, float G, float B, float A)`

Changes the color of the specified material.

Returns false if the object is not loaded or if the object type is not supported.

??? note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetAlpha

`public bool SetAlpha(float Alpha)`

Sets the alpha value for alpha blending. The range of values is 0.0f to 1.0f.

Returns false if the object is not loaded or if the object type is not supported.

??? note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### PlayVideo

`public void PlayVideo(string materialName, string url, bool loop)`

Specifies the material to play and starts playing the video. Loop playback is performed if loop is set to true.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### StopVideo

`public void StopVideo()`

Stops the video that is playing.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### IsPlayVideo

`public bool IsPlayVideo()`

Returns true if a video is playing.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### ClearTextPlane

`public void ClearTextPlane()`

Deletes the text.

???+ note "Available object types for this method"
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### WriteTextPlane

`public void WriteTextPlane(string text)`

Sets the text.

???+ note "Available object types for this method"
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetCamera

`public bool SetCamera()`

Set the camera type Item as a camera.<br>
Refer to [VKC Item Camera](../VKCComponents/VKCItemCamera.md) for usage.

???+ note "Available object types for this method"
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)

### ResetCamera

`public void ResetCamera()`

Detach camera set by SetCamera.<br>
Refer to [VKC Item Camera](../VKCComponents/VKCItemCamera.md) for usage.

???+ note "Available object types for this method"
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)

### ReplaceItem

`public bool ReplaceItem(string URL)`

Replace the Item by the designated model data.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### ReplaceTexture

`public bool ReplaceTexture(string MaterialName, string URL)`

Replace the texture attached to the MaterialName's material by the designated URL content.

Related Page: [Texture Replacement Issues with ReplaceTexture](https://vrhikky.github.io/VketCloudSDK_Documents/latest/en/WorldMakingGuide/ReplaceTexture.html)

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### ReplaceBackupTexture

`public bool ReplaceBackupTexture(string MaterialName)`

Restores the texture of the material changed by ReplaceTexture() to its previous state.

Returns true if the change is successful. Returns false if the change fails, such as when the material is not found.

??? note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetPhysicsEnable

`public bool SetPhysicsEnable(string NodeName, bool Flag)`

Enable physics for Node designated by NodeName if Flag is true, disable if Flag is false.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### IsPhysicsFixed

`public bool IsPhysicsFixed(string NodeName)`

When physics is enabled, returns true if this Item is fixed.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### GetPhysicsIDByNodeName

`public int GetPhysicsIDByNodeName(string NodeName)`

Get the PhysicsId for the designated Node.

When physics is enabled, returns true if this Item is fixed.

???+ note "Available object types for this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetProperty

`public bool SetProperty(string Key, string Value)`

Set property by Key and Value.

When a property change occurs, the callback method `OnChangedProperty()` is invoked.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetPropertyWithoutNotify

`public bool SetPropertyWithoutNotify(string Key, string Value)`

Sets a property. If the same Key exists, it will be overwritten; otherwise, it will be added.

This method has the same functionality as SetProperty(), but when you change a property with SetPropertyWithoutNotify(), the callback method OnChangedProperty() is not called.

??? note "Object types that can call this method"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetProperty

`public string GetProperty(string Key)`

Get property by Key. If the Key does not exist, an empty string will return.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### CallComponentMethod

`public void CallComponentMethod(string ComponentName, string MethodName, string Params)`

Calls the component method set to the item.<br>
The method can be called by designating the Componentname and MethodName. the Params will be used as arguments.

The callable methods must follow the limits below:

* Has one and only String type as an argument 
* Return value is void

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetOverridesProperty

`public bool SetOverridesProperty(string Key, string Value, string ItemName)`

Sets overrides property. If the same Key exists, its value will be overwritten, otherwise the Key and Value will be appended. If Key does not use "itemname", enter an empty string as an argument.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetOverridesProperty

`public bool GetOverridesProperty(string Key, ref string Value, ref string ItemName)`

Get the overrides property.

???+ note "Available object types for this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetNumofPolygon

`public int GetNumofPolygon()`

Gets the number of polygons.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### SendMessage

`public bool SendMessage(HSMessage message)`

Sends a message to this Item. The sent message is notified to the OnReceiveMessage() method of the components set on the Item.

Message sending is synchronous, meaning that sending and receiving occur within the same frame. Even if the receiver sends a message back to the sender, and the sender sends another message in response, all processing occurs within the same frame.

The sent message is notified to all components of the target Item, but if even one component successfully receives the message, meaning if the message reaches at least one OnReceiveMessage() callback method, SendMessage() returns true.

??? note "Object types that can call this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetVolume

`public void SetVolume(float Volume)`

Sets the volume.

??? note "Object types that can call this method"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)

### GetVolume

`public float GetVolume()`

Gets the volume set by SetVolume().  
The default value is 1.0.

??? note "Object types that can call this method"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)

### IsCollisionDetection

`public bool IsCollisionDetection()`

Retrieves whether collision detection is enabled for individual items.  
If true, the item will be subject to collision detection with a ray using the hsItemRaycast() function.

### SetCollisionDetection

`public void SetCollisionDetection(bool Flag)`

Enables or disables collision detection for individual items.

### SetLightColor

`public void SetLightColor(Vector3 Col)`

Changes the color of the point light.

### GetLightColor

`public Vector3 GetLightColor()`

Gets the color of the point light.

### SetLightRange

`public void SetLightRange(float range)`

Sets the range of the point light.

### GetLightRange

`public float GetLightRange()`

Gets the range of the point light.

### SetTextPlaneFontSize

`public bool SetTextPlaneFontSize(int fontSize)`

Sets the font size.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetTextPlaneFontSize

`public int GetTextPlaneFontSize()`

Gets the font size.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetTextPlaneTextureSize

`public bool SetTextPlaneTextureSize(int X, int Y)`

Sets the texture size.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetTextPlaneTextureSize

`public void GetTextPlaneTextureSize( ref int refX, ref int refY)`

Gets the texture size.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetTextPlaneAlignment

`public bool SetTextPlaneAlignment(int HSAlign)`

Sets the text display attributes.
※For HSAlign, please refer to hsCommonDialogSetTextAlignment().

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetTextPlaneAlignment

`public int GetTextPlaneAlignment()`

Gets the text display attributes.
※For return values, please refer to hsCommonDialogSetTextAlignment().

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetTextPlaneColor

`public void SetTextPlaneColor(Vector3 Col)`

Sets the text color.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetTextPlaneColor

`public Vector3 GetTextPlaneColor()`

Gets the text color.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetTextPlaneWrap

`public bool SetTextPlaneWrap(bool Wrap)`

Sets text wrapping.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetTextPlaneWrap

`public bool GetTextPlaneWrap()`

Gets text wrapping.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetTextPlaneCharacterSpace

`public bool SetTextPlaneCharacterSpace(int Pixels )`

Sets character spacing.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetTextPlaneCharacterSpace

`public int GetTextPlaneCharacterSpace()`

Gets character spacing.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetTextPlaneLineSpace

`public bool SetTextPlaneLineSpace(int Pixels)`

Sets line spacing for text.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetTextPlaneLineSpace

`public int GetTextPlaneLineSpace()`

Gets line spacing for text.

??? note "Object types that can call this method"
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### RemoveProperty

`public bool RemoveProperty(string Key)`

Removes a property. If a non-existent key is specified, nothing happens and the method returns.

When a property is removed, the callback method OnRemovedProperty() is called.

??? note "Object types that can call this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### RemovePropertyWithoutNotify

`public bool RemovePropertyWithoutNotify(string Key)`

Removes a property. If a non-existent key is specified, nothing happens and the method returns.

This method has the same functionality as RemoveProperty(), but when a property is removed with RemovePropertyWithoutNotify(), the callback method OnRemovedProperty() is not called.

??? note "Object types that can call this method"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetPhysicsWorldPos

`public bool SetPhysicsWorldPos(string NodeName, Vector3 Pos)`

Specifies a node name and changes the position of the Item in the world coordinate system for physics simulation.

??? note "Object types that can call this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetPhysicsWorldRotation

`public bool SetPhysicsWorldRotation(string NodeName, Vector3 EulerAngle)`

Specifies a node name and changes the rotation of the Item in the world coordinate system for physics simulation.

??? note "Object types that can call this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### ClearPhysicsWorldForce

`public bool ClearPhysicsWorldForce(string NodeName)`

Specifies a node name and sets all physics simulation forces applied to the Item to zero.

??? note "Object types that can call this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### AddPhysicsWorldForce

`public bool AddPhysicsWorldForce(string NodeName, Vector3 Force)`

Specifies a node name and applies a force to the Item in physics simulation. The Force direction is specified in world coordinate system.

??? note "Object types that can call this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### AddPhysicsWorldVelocity

`public bool AddPhysicsWorldVelocity(string NodeName, Vector3 Velocity)`

Specifies a node name and applies a velocity to the Item in physics simulation. The Velocity direction is specified in world coordinate system.

??? note "Object types that can call this method"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### GetBonePos

`public Vector3 GetBonePos(string BoneName)`

Returns the local coordinates of the avatar's bone.

If a non-existent bone name is specified, Vector3(0,0,0) is returned.

??? note "Object types that can call this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetBoneWorldPos

`public Vector3 GetBoneWorldPos(string BoneName)`

Returns the world coordinates of the avatar's bone.

If a non-existent bone name is specified, Vector3(0,0,0) is returned.

??? note "Object types that can call this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetBoneRotate

`public Quaternion GetBoneRotate(string BoneName)`

Returns the Quaternion of the avatar's bone.

If a non-existent bone name is specified, Quaternion(0,0,0,0) is returned.

??? note "Object types that can call this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

## Callbacks

### Callback - Item Long Press

If you define the OnLongPressedItem method as follows, it will be called when an item is long-pressed.
The node name that was long-pressed is passed as an argument. If the node name cannot be retrieved, an empty string is passed.

```
public void OnLongPressedItem()
public void OnLongPressedItem(string NodeName)
```
