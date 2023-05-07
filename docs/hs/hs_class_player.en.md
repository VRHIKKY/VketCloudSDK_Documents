
# Player class

!!! Note Info
     The Player class represents your own player (avatar).


## class definition

```
class Player {
     public void SetPos(Vector3 pos)
     public Vector3 GetPos()
 
     public void SetRotate(float angle)
     public float GetRotate()

     public string GetName()

public int GetPhysicsID()
}
```




## Player utility functions
### hsPlayerGet()
`Player hsPlayerGet()`

Get a Player instance of yourself.




## methods
### SetPos(Vector3)
`public void SetPos(Vector3 pos)`

Set coordinates.

### GetPos()
`public Vector3 GetPos()`

Get coordinates.

### SetRotate(float)
`public void SetRotate(float angle)`

Sets the orientation of the player.

### GetRotate()
`public float GetRotate()`

Get the orientation of the player.

### GetName()
`public string GetName()`

Get the player's name.

### GetPhysicsID()
`int GetPhysicsID()`

Get the PhysicsID.