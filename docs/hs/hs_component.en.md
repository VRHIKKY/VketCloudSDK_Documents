
# components

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


## callback - click node

If you define the OnClickNode method as follows, it will be called when the item's node is clicked.

```
component Test
{
     public void OnClickNode(int NodeIndex)
     {
     }
}
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

## Callbacks - Custom State/Custom Data

A callback method that receives any data sent by the room's manager.

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
         if (layerName == "MenuUI") {}
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

component Test {
	Item	m_Field;
	
	int		m_PhysicsIDFloor,
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

```
public void OnEnterViewCollider(string NodeName)
public void OnLeaveViewCollider(string NodeName)
```

Called when the collider with HEOCollider specified "InView" enters the field of view or goes out of the field of view.

Components must be set to the same item.

## Callback - Text chat

```
public void OnReceiveTextChat(string ID, string PlayerName, string Text)
```

Called when user sent message to the text chat.
