# Item class

On Vket Cloud, each non-Player objects on the world are defined as Items.<br>

Items can be output to the scene by placing and configuring game objects with components added by Vket Cloud SDK, such as VKC Item Field and VKC Item Object.

The Item class is used to manipulate the above-mentioned Item in HeliScript.

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

Get the world rotation of Item by Vector3 (Euler angles).

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
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
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

### IsCollisionDetection

`public bool IsCollisionDetection()`

Retrieves whether collision detection is enabled for individual items.  
If true, the item will be subject to collision detection with a ray using the hsItemRaycast() function.
