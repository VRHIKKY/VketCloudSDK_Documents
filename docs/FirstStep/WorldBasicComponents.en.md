# Essential objects

To build with VketCloudSDK, following objects must be placed in the scene.
  
| Component Name | Overview |
| ---- | ---- |
| VketCloudSettings | Component for setting world name, avatar, etc. |
| BasicSettings | Component for 3D model |
| PlayerSettings | A component that specifies the initial spawn position of the player |
| DespawnHeightSettings | A component that specifies the height to respawn the player |

For more details about these settings, see [Vket Cloud Settings - Overview](../VketCloudSettings/Overview.md).

!!!note tip
     Preset objects can be called by right clicking in the hierarchy and clicking Add essential Objects for VketCloud.

     ![AddEssentialObjects](img/AddEssentialObjects.jpg)
  
!!! note question
     - If you are continuously returning to the initial spawn point,

     the issue may be caused by unintentional respawns. Try adjusting the height (y-axis) of DespawnHeightSettings and the position of PlayerSettings.
