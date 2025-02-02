# Essential objects

To build with Vket Cloud SDK, following objects must be placed in the scene.
  
| Objects Name | Overview |
| ---- | ---- |
| VketCloudSettings | Group of objects to manage world settings |
| BasicSettings | An object handles the main settings of the world |
| PlayerSettings | An object that specifies the initial spawn position of the player |
| DespawnHeightSettings | An object that specifies the height to respawn the player |

For more details about these settings, see [Vket Cloud Settings - Overview](../VketCloudSettings/Overview.md).

!!!note tip
     Preset objects can be created by right clicking in the hierarchy and clicking Add essential Objects for VketCloud.

     ![AddEssentialObjects](img/AddEssentialObjects.jpg)
  
!!! note question
     - If you are continuously returning to the initial spawn point,

     the issue may be caused by unintentional respawns. Try adjusting the height (y-axis) of DespawnHeightSettings and the position of PlayerSettings.
