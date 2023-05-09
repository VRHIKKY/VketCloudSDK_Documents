# Essential objects

To build with VketCloudSDK, objects containing the following components must be placed in the scene.
  
| Component Name | Overview |
| ---- | ---- |
| HEOWorldSetting | Component for setting world name, avatar, etc. |
| HEOField | Component for 3D model |
| HEOPlayer | A component that specifies the initial spawn position of the player |
| DespawnHeight | A component that specifies the height to respawn the player |

!!!note tip
     Preset objects equipped with these components can be called by right clicking in the hierarchy and clicking Add essential Objects for VketCloud.

     ![AddEssentialObjects](img/AddEssentialObjects.jpg)
  
!!! note question
     - If you are continuously returning to the initial spawn point,

     the issue may be caused by unintentional respawns. Try adjusting the height (y-axis) of DespawnHeight and the position of HEOPlayer.