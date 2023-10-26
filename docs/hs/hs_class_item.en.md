
# Item class

The Item class is for working with individual items defined in the Scene file's "items".

Item class object is obtainable by specifying the item name with hsItemGet().

## class definition

```
class Item {
}
```


## How to get Item class object from component

The Item class object held by the component is obtainable by making the following call from the method in the component.

```
Item myItem = hsItemGet("Item name");
```


***


## Item utility functions

### hsItemGet
`Item hsItemGet(string itemName)`

Global function. 
Gets the "items" of the component with the specified name and returns them as an instance of the Item class.

***


## Methods

### Equals
`public bool Equals(Item obj)`

Judges whether this class is identical to the argument obj.

When obtaining Item objects using hsItemGet(), etc., a different instance may be obtained despite being the same Item. For checking identity, use Equals() instead of "===" operator.

### GetName
`public string GetName()`

Get the name of the Item.

### SetPos
`public void SetPos(Vector3 pos)`

Move Item to the designated position.

### GetPos
`public Vector3 GetPos()`

Get the local position of Item.

### GetWorldPos
`public Vector3 GetWorldPos()`

Get the world position of Item.

### SetQuaternion
`public bool SetQuaternion(Quaternion Rotate)`

Set the quaternion rotation of Item.

### GetQuaternion
`public Quaternion GetQuaternion()`

Get the local rotation of Item by quaternion.

### GetWorldQuaternion
`public Quaternion GetWorldQuaternion()`

Get the world rotation of Item by quaternion.

### GetWorldRotate
`public Vector3 GetWorldRotate()`

Get the world rotation of Item by Vector3.

### GetScale
`public Vector3 GetScale()`

Get the scale of Item by Vector3.

### SetScale
`public void SetScale(Vector3 Scale)`

Set the scale of Item by Vector3.

### MovePos
`public void MovePos(Vector3 pos, float time, bool CollisionDetection = false)`

Moves the Item over [time] seconds to the coordinates specified by pos.

If CollisionDetection is set to true, collision detection will be enabled as like the player avatar.

### IsMoving
`public bool IsMoving()`

Returns true if the Item is moving.

### Play
`public bool Play()`

Start playing a sound or particle. Returns true if the playback process has started successfully. Returns false on failure.

### Stop
`public void Stop()`

Stop the sound or particle that is playing.

### IsPlay
`public bool IsPlay()`

Returns true if the sound or particle is playing.

### SetShow
`public void SetShow(bool flag)`

Display Item with true. Hide the Item with false.

### IsShow
`public bool IsShow()`

Returns true if the Item is visible, false otherwise.

### ChangeMotion
`public bool ChangeMotion(string MotionName)`

Change the motion according to the designated MotionName.

### Load
`public bool Load()`

Start loading the Item. Returns false if the loading process fails to start.

### Unload
`public bool Unload()`

Unload the Item. Returns false if the unloading process fails.

### IsLoading
`public bool IsLoading()`

Returns true if the Item is loading, false otherwise.

### IsLoaded
`public bool IsLoaded()`

Returns true if the Item has finished loading, false otherwise.

### GetNodeIndexByName
`public int GetNodeIndexByName(string nodeName)`

Finds a node by name and returns an index identifying that node.

### GetNodeNameByIndex
`public string GetNodeNameByIndex(int nodeIndex)`

Given a node by index, return the name of that node.

### GetNodePosByIndex
`public Vector3 GetNodePosByIndex(int nodeIndex)`

Specify a node by index and return the coordinates of that node.

### SetShowNode
`public bool SetShowNode(string nodeName, bool flag)`

Specify a node by name, show it if flag is true and hide it if flag is false.

### IsShowNode
`public bool IsShowNode(string nodeName)`

Specify a node by name, returns true if the node is visible and false if it is hidden.

### SetRotateNode
`public bool SetRotateNode(string nodeName, Vector3 rotate)`

Specify a node by name and rotate that node.

### SetEnableCollider
`public bool SetEnableCollider(string nodeName, bool flag)`

Specify a collider by name, true to enable it, false to disable it.

### IsEnableCollider
`public bool IsEnableCollider(string nodeName)`

Specify a collider by name, returns true if the collider is enabled, false otherwise.

### SetClickableNode
`public bool SetClickableNode(string nodeName, bool flag)`

Specify a clickable node by name, enable clicks if flag is set to true and disable clicks if flag is set to false.

### IsClickableNode
`public bool IsClickableNode(string nodeName)`

Specify a node by name and returns true if the node is clickable, false otherwise.

### SetUVOffset
`public bool SetUVOffset(string naterialName, float u, float v)`

Specify a material by name and change the uv coordinates of that material. Returns false if the change fails.

### PlayVideo
`public void PlayVideo(string materialName, string url, bool loop)`

Specifies the material to play and starts playing the video. Loop playback is performed if loop is set to true.

### StopVideo
`public void StopVideo()`

Stop the video that is playing.

### IsPlayVideo
`public bool IsPlayVideo()`

Returns true if a video is playing.

### ClearTextPlane
`public void ClearTextPlane()`

Delete the text.

### WriteTextPlane
`public void WriteTextPlane(string text)`

Set the text.

### SetCamera
`public bool SetCamera()`

Set the camera type Item as a camera.

### ResetCamera
`public void ResetCamera()`

Detach camera set by SetCamera.

### ReplaceItem
`public bool ReplaceItem(string URL)`

Replace the Item by the designated model data.

### ReplaceTexture
`public bool ReplaceTexture(string MaterialName, string URL)`

Replace the texture attached to the MaterialName's material by the designated URL content.

### SetPhysicsEnable
`public bool SetPhysicsEnable(string NodeName, bool Flag)`

Enable physics for Node designated by NodeName if Flag is true, disable if Flag is false. 

### IsPhysicsFixed
`public bool IsPhysicsFixed(string NodeName)`

When physics is enabled, returns true if this Item is fixed.

### SetProperty
`public bool SetProperty(string Key, string Value)`

Set property by Key and Value.

### GetProperty
`public string GetProperty(string Key)`

Get property by Key. If the Key does not exist, an empty string will return.

### CallComponentMethod
`public void CallComponentMethod(string ComponentName, string MethodName, string Params)`

Calls the component method set to the item.<br>
The method can be called by designating the Componentname and MethodName. the Params will be used as arguments.

The callable methods must follow the limits below:

* Has one and only String type as an argument 
* Return value is void

!!! note caution
    The Overrides property is currently under development.<br>
    Further usage are to be added by future updates.

### SetOverridesProperty
`public bool SetOverridesProperty(string Key, string Value, string ItemName)`

Sets overrides property. If the same Key exists, its value will be overwritten, otherwise the Key and Value will be appended. If Key does not use "itemname", enter an empty string as an argument.

### GetOverridesProperty
`public bool GetOverridesProperty(string Key, ref string Value, ref string ItemName)`

Get the overrides property.