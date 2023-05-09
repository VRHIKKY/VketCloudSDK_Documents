# Item class

!!! Note Info
    The Item class is for working with individual items defined in the Scene file's "items".

    You can get the Item class object by specifying the item name with hsItemGet().

***

## class definition

```
class Item {
     public string GetName()

     public void SetPos(Vector3Pos)
     public Vector3 GetPos()

     public void MovePos(Vector3 pos, float time)
     public bool IsMoving()

     public bool Play()
     public void Stop()
     public bool IsPlay()
    
     public void SetShow(bool Flag)
     public bool IsShow()
    
     // loading
     public bool Load()
     public bool Unload()
     public bool IsLoading()
     public bool IsLoaded()

     // node
     public int GetNodeIndexByName(string nodeName)
     public string GetNodeNameByIndex(int nodeIndex)
     public Vector3 GetNodePosByIndex(int nodeIndex)
    
     // node display
     public bool SetShowNode(string nodeName, bool flag)
     public bool IsShowNode(string nodeName)
    
     // node/posture
     public bool SetRotateNode(string nodeName, Vector3 rotate)
    
     // node collider
     public bool SetEnableCollider(string nodeName, bool flag)
     public bool IsEnableCollider(string nodeName)

     // node clickable
     public bool SetClickableNode(string nodeName, bool flag)
     public bool IsClickableNode(string nodeName)

         // node/physics
         public int GetPhysicsIDByNodeName(string NodeName)

     // material
     public bool SetUVOffset(string materialName, float u, float v)
    
     // Video
     public void PlayVideo(string materialName, string url, bool loop)
     public void StopVideo()

     // text
     public void ClearTextPlane()
     public void WriteTextPlane(string text)
    
}
```


## How to get Item class object from component

You can get the Item class object that the component has by making the following call from the method in the component.

```
Item myItem = hsItemGet("Item name");
```




## Item utility functions
### hsItemGet(string itemName)
`Item hsItemGet(string itemName)`

global function. Gets the "items" of the component with the specified name and returns them as an instance of the Item class.




## Methods

### GetName()
`public string GetName()`

Get the name of the Item.

### SetPos(Vector3)
`public void SetPos(Vector3 pos)`

Move Item to specified coordinates.

### GetPos()
`public Vector3 GetPos()`

Get the coordinates of Item.

### MovePos(Vector3, float)
`public void MovePos(Vector3 pos, float time)`

Moves the Item over [time] seconds to the coordinates specified by pos.

### IsMoving()
`public bool IsMoving()`

Returns true if the Item is moving.

### Play()
`public bool Play()`

Start playing a sound or particle. Returns true if the playback process has started successfully. Returns false on failure.

### Stop()
`public void Stop()`

Stop a video that is playing.

### IsPlay()
`public bool IsPlay()`

Returns true if the video is playing.

### SetShow(bool)
`public void SetShow(bool flag)`

Display Item with true. Hide the Item with false.

### IsShow()
`public bool IsShow()`

Returns true if the Item is visible, false otherwise.

### Load()
`public bool Load()`

Start loading the Item. Returns false if the loading process fails to start.

### Unload()
`public bool Unload()`

Unload the Item. Returns false if the unloading process fails.

### IsLoading()
`public bool IsLoading()`

Returns true if the Item is loading, false otherwise.

### IsLoaded()
`public bool IsLoaded()`

Returns true if the Item has finished loading, false otherwise.

### GetNodeIndexByName(string)
`public int GetNodeIndexByName(string nodeName)`

Finds a node by name and returns an index identifying that node.

### GetNodeNameByIndex(int)
`public string GetNodeNameByIndex(int nodeIndex)`

Given a node by index, return the name of that node.

### GetNodePosByIndex(int)
`public Vector3 GetNodePosByIndex(int nodeIndex)`

Specify a node by index and return the coordinates of that node.

### SetShowNode(string, bool)
`public bool SetShowNode(string nodeName, bool flag)`

Specify a node by name, show it if flag is true and hide it if flag is false.

### IsShowNode(string)
`public bool IsShowNode(string nodeName)`

Specify a node by name, returns true if the node is visible and false if it is hidden.

### SetRotateNode(string, Vector3)
`public bool SetRotateNode(string nodeName, Vector3 rotate)`

Specify a node by name and rotate that node.

### SetEnableCollider(string, bool)
`public bool SetEnableCollider(string nodeName, bool flag)`

Specify a collider by name, true to enable it, false to disable it.

### IsEnableCollider(string)
`public bool IsEnableCollider(string nodeName)`

Specify a collider by name, returns true if the collider is enabled, false otherwise.

### SetClickableNode(string, bool)
`public bool SetClickableNode(string nodeName, bool flag)`

Specify a clickable node by name, enable clicks if flag is set to true and disable clicks if flag is set to false.

### IsClickableNode(string)
`public bool IsClickableNode(string nodeName)`

Specify a node by name and returns true if the node is clickable, false otherwise.

### SetUVOffset(string, float, float)
`public bool SetUVOffset(string naturalName, float u, float v)`

Specify a material by name and change the uv coordinates of that material. Returns false if the change fails.

### PlayVideo(string, string, bool)
`public void PlayVideo(string materialName, string url, bool loop)`

Specifies the material to play and starts playing the video. Loop playback is performed if loop is set to true.

### StopVideo()
`public void StopVideo()`

Stop the video that is playing.

### ClearTextPlane()
`public void ClearTextPlane()`

Delete the text.

### WriteTextPlane(string)
`public void WriteTextPlane(string text)`

Set the text.