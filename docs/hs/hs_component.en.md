# Components / Callback functions

## Defining components

A component is a class object added to the items described in the Scene file.

Define a block that specifies the component name after the reserved word component.

```
component [component name] {
         // Inside the component, methods and fields equivalent to classes can be defined
}
```

Also, if you define a public method with the same name as the component name inside the block, it becomes a constructor. This is called only once when the component object is created.

If you define a public void Update() method, it will be called every frame when the screen is drawn.

Below is a minimal sample code.

```
component test
{
     public Test()
     {
     }

     public void Update()
     {
     }
}
```

As the Update() method shown above, if the method having a preset name and arguments is defined within component, it will act as a callback when certain events are triggered.

## Callback - Load complete

After the Vket Cloud engine is booted, and completed resource loading and  initialization, OnLoaded() will be called just once.

```
public void OnLoaded()
```

## Callback - Activation / Deactivation of browser tab

This callback can be triggered on the Activation / Deactivation of browser tab.

If the tab becomes active, the IsActivate will be true, while on deactivation IsActivate will be false.

```
public void OnWindowActivate(bool IsActivate)
```

## Callback - Beginning of page unload

This callback can be triggered on closing the browser tab, or jumping to another URL which actions will cause the current page to unload.

At the moment of this event to trigger, the page resources will still be kept.

```
public void OnBeforeUnload()
```

## Callback - Page unload

This callback will be triggered before complete unload of the current page.

```
public void OnUnload()
```

## Callback - Click Node

By calling OnClickNode method as below, this callback method will be triggered when the Item's Node is clicked.

```
public bool OnClickNode(int NodeIndex)
```

By returning true after a certain process, the engine's click-to-move process will be disabled.

For compatibility, the function with the void return type can be designated, which click-to-move process will be triggered if the Node is not defined as in the Scene file as clickablenodes.

```
public void OnClickNode(int NodeIndex)
```

If you define the OnClickNode method as follows, it will be called when the item's node is clicked.

```
component Test
{
     public void OnClickNode(int NodeIndex)
     {
     }
}
```

## Callback - Click empty space

This callback will be triggered on clicking an empty space.

```
public void OnClickEmpty()
```

## Callback - AreaCollider

If you define the OnEnterAreaCollider and OnLeaveAreaCollider methods as follows, they will be called when entering or leaving an "areacollider" type item.

```
component AreaCollider
{
     Item m_Item;
    
     public CAreaCollider()
     {
         m_Item = hsItemGet("component name");
     }
    
     public void OnEnterAreaCollider()
     {
         hsSystemOutput("OnEnterAreaCollider" + m_Item.GetName() + "\n");
     }
    
     public void OnLeaveAreaCollider()
     {
         hsSystemOutput("OnLeaveAreaCollider" + m_Item.GetName() + "\n");
     }
}
```

## Callbacks - ItemCollider

By defining the OnItemEnterCollider and OnItemLeaveCollider methods as shown below,they will be called when an Item with this component enters or exits the collider of another Item's internal node.  
Currently, only box collider collision shapes are supported.  

```
component CollisionTest
{
    public void OnItemEnterCollider(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);
        hsSystemOutput("[OnItemEnterCollider] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }
    public void OnItemLeaveCollider(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);
        hsSystemOutput("[OnItemLeaveCollider] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }
}
```

## Callback - Unselecting Objects

### OnUnselectNode

```
public void OnUnselectNode(int NodeIndex)
```
By clicking on an Item's Node beforehand, and clicking an avatar after, this will be considered as unselecting a Node.

This will trigger OnUnselectNode() with the NodeIndex as an argument.

### OnUnselectAvatar

```
public void OnUnselectAvatar(string Name)
```
By clicking on an avatar beforehand, and clicking an Item's Node after, this will be considered as unselecting an avatar.

This will trigger OnUnselectNode() with the avatar's name as an argument.

## Callback - Screen Size Change

This callback will be triggered when the screen size is changed. The width and height arguments contains the screen's width and height after resize.

```
public void OnResize(int width, int height)
```

## Callback - Custom State/Custom Data

This is a callback method that receives any data sent from any player in the room.

```
component CustomDataReceiver
{
     public void OnReceiveCustomState(string id, string type, string data)
     {
     }

     public void OnReceiveCustomData(string id, string type, string data)
     {
     }
}
```

## Callback - GUI button

  `public void OnClickedButton(string layerName, string buttonName)`

If you define the OnClickedButton() method as below, it will be called when the GUI button is tapped.

```
component ButtonClickable
{
     public void OnClickedButton(string layerName, string buttonname)
     {
         if (layerName == "MenuUI") {
             hsSystemOutput("Button Clicked! :" + buttonname + "\n");
         }
     }
}
```

## Callback - physics collision detection

  `public void OnPhysicsCollision(int ID0, int ID1)`

Called when objects with physics set collide with each other.

The ID is called PhysicsID and can be obtained from GetPhysicsIDByNodeName of the Item class or GetPhysicsID of the Player class.

Get the PhysicsID in advance in the constructor, etc., save it in a member variable, and compare it in the callback function to determine if there is a collision.

Note that the callback function may be called many times with the same combination of IDs immediately after a collision, so when a collision causes particles to regenerate, it is necessary to prevent them from regenerating too many times.

```
component Test {
Item m_Field;

int m_PhysicsIDFloor,
m_PhysicsIDCube;

	public Test()
	{
		m_Field = new Item();
		m_Field._SetItemFromStructPageNumber(system.GetStructPageNumber());
		
		m_PhysicsIDFloor = m_Field.GetPhysicsIDByNodeName("Floor");
		m_PhysicsIDCube = m_Field.GetPhysicsIDByNodeName("Cube");
	}

	public void OnPhysicsCollision(int ID0, int ID1)
	{
		if ((ID0 == m_PhysicsIDFloor && ID1 == m_PhysicsIDCube) ||
			(ID1 == m_PhysicsIDFloor && ID0 == m_PhysicsIDCube))
		{
			// Floor and Cube collided
		}
	}
}
```

## Callback - In-field collider detection

Called when the collider with [VKC Node Collider](../VKCComponents/VKCNodeCollider.md) specified "InView" enters the field of view or goes out of the field of view.

Components must be set to the same item.

```
public void OnEnterViewCollider(string NodeName)
public void OnLeaveViewCollider(string NodeName)
```

## Callback - Text chat

Called when user sent message to the text chat.

```
public void OnReceiveTextChat(string ID, string PlayerName, string Text)
```

## Callback - Player Avatar Click

This callback is triggered when other player's avatars are clicked.

```
public void OnClickedAvatar(string PlayerID)
```

## Callback - Video

This callback is triggered on the beginning of playing a video.

```
public void OnPlayVideo()
```

This callback is triggered on pausing a video.

```
public void OnPauseVideo()
```

This callback is triggered on resuming a paused video.

```
public void OnResumeVideo()
```

This callback is triggered on stopping a video.

```
public void OnStopVideo()
```

## Callback - Property Change

This callback is triggered when the item's property has been changed. if the Value is same as before, this will not be triggered.

```
public void OnChangedProperty(string Key, string Value)
```

## Callback - Message

```
public void OnReceiveMessage(HSMessage message)
```

This will be called when the item receives a message. The argument message contains the received data and sender information.
