# Built-in Functions - Raycast

Utility functions related to raycasting

## Item Related

### hsRenderingSetLightDir
`HSRaycastHIT hsItemRaycast( Vector3 Origin, Vector3 Direction, float length )`

Fires a ray from the Origin position in the Direction direction with a length of length, searches for the closest Item, and sets it to HSRaycastHIT.  
The target of the raycast is an Item with collision detection enabled (Item.IsCollisionDetection() is true).

```
class HSRaycastHIT
{
    public  Item    Item;       // Item object that the ray hit
    public  float   Distance;   // Distance from Pos where the ray hit
    public  Vector3 Pos;        // Position where the ray hit
    public  Vector3 Normal;     // Normal of the face the ray hit
}
```
