
# HEOWorldSetting
![HEOWorldSetting](img/HEOWorldSetting.jpg)

HEOWorldSetting manages your World's basic info.
It lets you set basic, redering, and avatar settings.

# Basic Info
|  Label |  function  |
| ----   | ---- |
|  World Name |  Set the name of the World. It will mainly be used for the URL. |
|  Debug Mode  |  Switch to debug mode. When switched on, you can use F1/F2 to access the debug menu. (On browser)|
|  Show Avatar Icon  |  Unused/Unusable  |
|  VRM Drop  |  Allows users to change their avatar by drag-and-dropping their own .vrm avatars to the browser screen.  |
|  Occulusion Culling  | Unused/Unusable  |

# Rendering
|  Label |  function  |
| ----   | ---- |
|  PBR |  Enables PBR lighting. |
|  Light Direction  |  Set the light direction for the World. |
|  Light Color  |  Change the main lighting of the World. |
|  Projection Near  |  Change the near clipping distance.  |
|  Projection Far  | Change the far clipping distance.  |
|  Projection Degree  | Change the FoV angle. (default value recommended) |

# Avatars
![Avatars](img/Avatars.jpg)

!!! Caution !!! 
    BuildAndRun will fail if the avatar list is empty.

### Avatar Block
|  Label |  function  |
| ----   | ---- |
|  .vrm | Set a model for your avatar. |
|  height  | The camera's target position when aiming at the avatar. If the value is 0, the camera will point to the foot position. |

### Motion Block
|  Label |  function  |
| ----   | ---- |
| .hem | Set the motion file. |
| loop | Loops the motion. Keep them on for walking and idle animations. |
| useAction | Set an Action to be called when the avatar plays the motion. |

### ObjectOnAvatar Block
|  Label |  function  |
| ----   | ---- |
| name | Set a unique name. |
| objecttype | Specify an object for the avatar to hold. Choose from either .heo, .hep, or audio file. |
| file | Specify an asset. |
| pos | Add a position offset to "target". |
| rotate | Set the rotation angle. |
| target | Set the bone name to base the coordinates off of. (e.g. righthand, leftfoot, etc.) |