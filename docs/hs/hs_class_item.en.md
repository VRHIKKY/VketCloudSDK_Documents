# Item class

On Vket Cloud, each non-Player objects on the world are defined as Items.<br>
For example, objects defined as items are [VKCItemField](../VKCComponents/VKCItemField.md), [VKCItemObject](../VKCComponents/VKCItemObject.md), [VKCItemPlane](../VKCComponents/VKCItemPlane.md), [VKCItemActivity](../VKCComponents/VKCItemActivity.md), and other objects.

The Item class is for handling such Items, and "Nodes" which are child objects of [VKCItemField](../VKCComponents/VKCItemField.md) on HeliScript.

An Item class object is obtainable by specifying the item name with hsItemGet() or running hsItemGetSelf().

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

Global function. Obtains the Item located under [VKCItemField](../VKCComponents/VKCItemField.md) and returns it as an Item instance.

### hsItemGetSelf

`Item hsItemGetSelf()`

Global function. Gets the Item object of where this component itself is attached, by calling this function in the component's constructor, or methods such as Update, OnClickNode, etc.

***

## Methods

### Equals

`public bool Equals(Item obj)`

Judges whether this class is identical to the argument obj.

When obtaining Item objects using hsItemGet(), etc., a different instance may be obtained despite being the same Item. For checking identity, use Equals() instead of "===" operator.

??? note "Available object types for this method"
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

### GetName

`public string GetName()`

Get the name of the Item.

??? note "Available object types for this method"
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

### SetPos

`public void SetPos(Vector3 pos)`

Move Item to the designated position.

??? note "Available object types for this method"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetPos

`public Vector3 GetPos()`

Get the local position of Item.

??? note "Available object types for this method"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetWorldPos

`public Vector3 GetWorldPos()`

Get the world position of Item.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### SetQuaternion

`public bool SetQuaternion(Quaternion Rotate)`

Set the quaternion rotation of Item.

??? note "Available object types for this method"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetQuaternion

`public Quaternion GetQuaternion()`

Get the local rotation of Item by quaternion.

??? note "Available object types for this method"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetWorldQuaternion

`public Quaternion GetWorldQuaternion()`

Get the world rotation of Item by quaternion.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### GetWorldRotate

`public Vector3 GetWorldRotate()`

Get the world rotation of Item by Vector3.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### GetScale

`public Vector3 GetScale()`

Get the scale of Item by Vector3.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetScale

`public void SetScale(Vector3 Scale)`

Set the scale of Item by Vector3.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### MovePos

`public void MovePos(Vector3 pos, float time, bool CollisionDetection = false)`

Moves the Item over [time] seconds to the coordinates specified by pos.

If CollisionDetection is set to true, collision detection will be enabled as like the player avatar.

??? note "Available object types for this method"
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### IsMoving

`public bool IsMoving()`

Returns true if the Item is moving.

??? note "Available object types for this method"
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### Play

`public bool Play()`

Start playing a sound or particle. Returns true if the playback process has started successfully.<br>
Returns false on failure.

??? note "Available object types for this method"
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)

### Stop

`public void Stop()`

Stop the sound or particle that is playing.

??? note "Available object types for this method"
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)

### IsPlay

`public bool IsPlay()`

Returns true if the sound or particle is playing.

??? note "Available object types for this method"
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    ??? warning "Different return values for IsPlay"
        - [VKCItemAudio](../VKCComponents/VKCItemAudio.md): Returns true if the designated audio clip is playing
        - [VKCItemObject](../VKCComponents/VKCItemObject.md): Returns true if designated hem in Motion list is playing, when object mode is Motion
        - [VKCItemParticle](../VKCComponents/VKCItemParticle.md): Returns true if designated .hep particle is playing

### Pause

`public bool Pause()`

Pauses the object's playing motion.

??? note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### Restart

`public bool Restart()`

Resumes the object's playing motion after pause.

??? note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetPlayTime

`public bool SetPlayTime(float PlayTimeMS)`

Sets the object's motion playing position by designated time.<br>
The time is designated by millisecond.

??? note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetPlayTime

`public float GetPlayTime()`

Gets the object's motion playing position by designated time.<br>
The time is designated by millisecond.

??? note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetShow

`public void SetShow(bool flag)`

Display Item with true. Hide the Item with false.

??? note "Available object types for this method"
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### IsShow

`public bool IsShow()`

Returns true if the Item is visible, false otherwise.

??? note "Available object types for this method"
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### ChangeMotion

`public bool ChangeMotion(string MotionName, float BlendTimeMS = 0.0f)`

Change the motion according to the designated MotionName.<br>
BlendTimeMS will designate the time to blend the motion by milliseconds.

??? note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### LoadMotion

`public bool LoadMotion(string MotionName, string FileName, bool Loop)`

Loads the designated motion.

??? note "Available object types for this method"
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

??? note "Available object types for this method"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### Load

`public bool Load()`

Start loading the Item. Returns false if the loading process fails to start.

??? note "Available object types for this method"
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

### Unload

`public bool Unload()`

Unload the Item. Returns false if the unloading process fails.

??? note "Available object types for this method"
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

### IsLoading

`public bool IsLoading()`

Returns true if the Item is loading, false otherwise.

??? note "Available object types for this method"
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

### IsLoaded

`public bool IsLoaded()`

Returns true if the Item has finished loading, false otherwise.

??? note "Available object types for this method"
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

### GetNodeIndexByName

`public int GetNodeIndexByName(string nodeName)`

Finds a node by name and returns an index identifying that node.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### GetNodeNameByIndex

`public string GetNodeNameByIndex(int nodeIndex)`

Given a node by index, return the name of that node.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### GetNodePosByIndex

`public Vector3 GetNodePosByIndex(int nodeIndex)`

Specify a node by index and return the coordinates of that node.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetShowNode

`public bool SetShowNode(string nodeName, bool flag)`

Specify a node by name, show it if flag is true and hide it if flag is false.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### IsShowNode

`public bool IsShowNode(string nodeName)`

Specify a node by name, returns true if the node is visible and false if it is hidden.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### SetRotateNode

`public bool SetRotateNode(string nodeName, Vector3 rotate)`

Specify a node by name and rotate that node.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetEnableCollider

`public bool SetEnableCollider(string nodeName, bool flag)`

Specify a collider by name, true to enable it, false to disable it.

??? note "Available object types for this method"
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### IsEnableCollider

`public bool IsEnableCollider(string nodeName)`

Specify a collider by name, returns true if the collider is enabled, false otherwise.

??? note "Available object types for this method"
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetClickableNode

`public bool SetClickableNode(string nodeName, bool flag)`

Specify a clickable node by name, enable clicks if flag is set to true and disable clicks if flag is set to false.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### IsClickableNode

`public bool IsClickableNode(string nodeName)`

Specify a node by name and returns true if the node is clickable, false otherwise.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetUVOffset

`public bool SetUVOffset(string materialName, float u, float v)`

Specify a material by name and change the uv offset of that material **starting from the top-left origin**. Returns false if the change fails.

!!! warning "Origin coordinate of UV"
    While Unity considers the bottom-left coordinate of the UV as the origin, note that HeliScript considers the **top-left** as the origin.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### PlayVideo

`public void PlayVideo(string materialName, string url, bool loop)`

Specifies the material to play and starts playing the video. Loop playback is performed if loop is set to true.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)

### StopVideo

`public void StopVideo()`

Stop the video that is playing.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)

### IsPlayVideo

`public bool IsPlayVideo()`

Returns true if a video is playing.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)

### ClearTextPlane

`public void ClearTextPlane()`

Delete the text.

??? note "Available object types for this method"
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### WriteTextPlane

`public void WriteTextPlane(string text)`

Set the text.

??? note "Available object types for this method"
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetCamera

`public bool SetCamera()`

Set the camera type Item as a camera.<br>
Refer to [VKCItemCamera](../VKCComponents/VKCItemCamera.md) for usage.

??? note "Available object types for this method"
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)

### ResetCamera

`public void ResetCamera()`

Detach camera set by SetCamera.<br>
Refer to [VKCItemCamera](../VKCComponents/VKCItemCamera.md) for usage.

??? note "Available object types for this method"
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)

### ReplaceItem

`public bool ReplaceItem(string URL)`

Replace the Item by the designated model data.

??? note "Available object types for this method"
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

### ReplaceTexture

`public bool ReplaceTexture(string MaterialName, string URL)`

Replace the texture attached to the MaterialName's material by the designated URL content.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetPhysicsEnable

`public bool SetPhysicsEnable(string NodeName, bool Flag)`

Enable physics for Node designated by NodeName if Flag is true, disable if Flag is false.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### IsPhysicsFixed

`public bool IsPhysicsFixed(string NodeName)`

When physics is enabled, returns true if this Item is fixed.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### GetPhysicsIDByNodeName

`public int GetPhysicsIDByNodeName(string NodeName)`

Get the PhysicsId for the designated Node.

When physics is enabled, returns true if this Item is fixed.

??? note "Available object types for this method"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetProperty

`public bool SetProperty(string Key, string Value)`

Set property by Key and Value.

??? note "Available object types for this method"
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

??? note "Available object types for this method"
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

### CallComponentMethod

`public void CallComponentMethod(string ComponentName, string MethodName, string Params)`

Calls the component method set to the item.<br>
The method can be called by designating the Componentname and MethodName. the Params will be used as arguments.

The callable methods must follow the limits below:

* Has one and only String type as an argument 
* Return value is void

??? note "Available object types for this method"
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

### SetOverridesProperty

`public bool SetOverridesProperty(string Key, string Value, string ItemName)`

Sets overrides property. If the same Key exists, its value will be overwritten, otherwise the Key and Value will be appended. If Key does not use "itemname", enter an empty string as an argument.

??? note "Available object types for this method"
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

### GetOverridesProperty

`public bool GetOverridesProperty(string Key, ref string Value, ref string ItemName)`

Get the overrides property.

??? note "Available object types for this method"
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
