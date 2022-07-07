
# HEOWorldSetting
![HEOWorldSetting](img/HEOWorldSetting.jpg)

HEOWorldSetting manages the basic information of the World.
This component lets you set basic information, redering, and avatars.

# Basic Info
|  Label |  function  |
| ----   | ---- |
|  World Name |  Set the name of the World. It will mainly be used for the URL. |
|  Debug Mode  |  Switch to debug mode. When switched on, you can use the debug function using function keys on your pc.|
|  Show Avatar Icon  |  Do not use.  |
|  VRM Drop  |  ブラウザ上へのVRMドロップによる着替えを許可します。  |
|  Occulusion Culling  | Do not use.  |

# Rendering
|  Label |  function  |
| ----   | ---- |
|  PBR |  Enable PBR lighting. |
|  Light Direction  |  デバッグモードを切り替えることができます。オンにするとF1やF2からデバッグ機能を使用できます（ブラウザ上で）。|
|  Light Color  |  Change the main lighting of the World. |
|  Projection Near  |  Change the near clipping distance.  |
|  Projection Far  | Change the far clipping distance.  |
|  Projection Degree  | Change the viewing angle. (default value recommended) |

# Avatars
![Avatars](img/Avatars.jpg)

!!! Caution !!! 
    BuildAndRun will fail if the avatar list is empty.

### Avatar Block
|  Label |  function  |
| ----   | ---- |
|  .vrm | Set a model for your avatar. |
|  height  | Set default camera position of the avatar. If the value is 0, the position will be set to the foot. |

### Motion Block
|  Label |  function  |
| ----   | ---- |
| .hem | Set motion file. |
| loop | Loop the motion. Please keep the walking and standing motion on. |
| useAction | Set the action for when the avatar begins the motion. |

### ObjectOnAvatar Block
|  Label |  function  |
| ----   | ---- |
| name | Set a unique name. |
| objecttype | Specify the object type on the avatar. Heo, hep, and audio files can be used. |
| file | Specify the assets. |
| pos | Set the offset from the target. |
| rotate | Set the rotation angle. |
| target | Set the bone for the default coordinates. e.g. right, left, etc. |