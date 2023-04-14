# Essential objects

To launch VketCloud, your scene must contain GameObjects with the following Components.  

|  item  |  value  |
| ---- | ---- |
|  HEOWorldSetting  |  An object that sets the world name, avatar, etc. in VketCloud.  |
|  HEOField  |  An object called Field to store the model of the world.  |
|  HEOPlayer  |  Spawn Location  |
|  DespawnHeight  |  　A component that determines the height at which players and items are respawned.  |
  
  
You can automatically add these by right clicking in the Hierarchy and choosing "Add essential Objects for VketCloud"

![AddEssentialObjects](img/AddEssentialObjects.jpg)  
  
- An avatar does not appear after building, you falls from the cube.
- If you jump, you will be returned to the initial spawn point when you land.

In the above cases, "DespawnHeight" may be high.　　
Try lowering DespawnHeight height (y-axis).