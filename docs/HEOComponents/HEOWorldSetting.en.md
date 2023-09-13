# HEOWorldSetting

HEOWorldSetting manages your World's basic info.
This component lets you configurate the following settings:

- Basic Info
- Camera
- Rendering
- Avatars
- MyAvatar

# Basic Info
![BasicInfo](img/HEOWorldSetting_BasicInfo.jpg)

|  Label |  function  |
| ----   | ---- |
|  `World Name` |  Set the name of the World. This value will be autofilled by the generated world ID on upload, which will mainly be used for the world URL.<br> (e.g. [VketID_of_Creator].cloud.vket.com/worlds/[World_Name]) |
|  `Debug Mode`  |  Switch to debug mode. When switched on, players can use the F1/F2 key to access the debug menu on browser.|
|  `VRM Drop`  |  Allows users to locally change their avatar by drag-and-dropping their own .vrm avatars to the browser screen.  |
|  `Occulusion Culling`  | Activate the Occulusion Culling.  |
|  `World Name Directory`  |  When exporting to .heo and other files, the files will be packed into a folder with the same name as the `World Name`. <br>(e.g. data/field/`World Name`/world.heo) |
| `Multi Play Mode In Local Build` | Activate multiplayer functions even during the local build. |
| `Use GamePad` | Activate usage of GamePads.  |
| `Use Physics Engine` | Activate usage of the Physics Engine. |
| `Favicon` | Set the Favicon of the World. |
| `HeliScript` | The HeliScripts used in this world will be listed here. HeliScripts designated in components such as [HEOScript](./HEOScript.md) will be listed automatically. |

!!! note
    While `HeliScript` elements will be added automatically, it may become a `None` or `Missing` entry due to deleting files, etc.
    Note that if the `HeliScript` elements contain a `None` or `Missing` entry, they may become a cause of a build error.

![HeliScriptMistake](img/HEOWorldSetting_BasicInfo_HeliscriptMistake.jpg)

!!! note caution
        In all SDK versions currently released including version 5.4, gamepads are unable to be used regardless of `Use GamePad` settings.<br>
        This issue is scheduled to be fixed at the next release version.

!!! note caution
        In SDK version 5.4, playing emotes in local build is disabled while disabling the `Multi Play Mode In Local Build` (i.e. entering in single play mode) due to defect.<br>
        On testing emotes in local build, please enable the `Multi Play Mode In Local Build`.

---

## Camera
![Camera](img/HEOWorldSetting_Camera.jpg)

|  Label |  function  |
| ----   | ---- |
|  `Smoothing` | Set whether or not the smoothing is applied to the camera movement. |
|  `Far Offset` | Shift the focus point of TPS camera up and down. |
|  `Near Offset` | Shift the focus point of TPS camera up and down. |
| `Photo Radius` | Set the radius of movable range for the photo mode camera. |
| `Raycast Max Distance` | Set the maximum raycast distance from the click detection camera in meter. |
| `Default TPS Camera` | Set the offset for the TPS camera. `center`: right behind (default) `right`: Over the right shoulder（Typical TPS Camera-style）`left`: Over the left shoulder |

---

# Rendering
![Rendering_1](img/HEOWorldSetting_Rendering_1.jpg)

|  Label |  function  |
| ----   | ---- |
|  `PBR` |  Enables PBR lighting. |
| `Directional Light` | Set a Directional Light placed in the scene as the directional light for this world. |
| `Fade In Time` | Set the white fade-in length on world enter in seconds.|
| `Shadow Type`| Set the Shadow Type. `round` is a round shadow, and `normalshadowmap` is a normal shadow map. |
| `Shadow Bias` | Set the bias value on drawing shadows.|
| `Shadow Area Size` | Set the distance for drawing shadow in meter.|
| `Shadow Fade Size` | Set the fadeout size growing from the shadow's periphery in meter. |
|  `Projection Near`  |  Change the near clipping distance.  |
|  `Projection Far`  | Change the far clipping distance.  |
|  `Projection Degree`  | Change the FoV angle. (default value recommended) |
| `Bloom` | Enable/disable bloom. |
| `Light Scattering` | Enable/disable light scattering. |
| `IBL` | Enable/disable IBL, or Image-Based Lighting. |

![Rendering_2](img/HEOWorldSetting_Rendering_2.jpg)

|  Label |  function  |
| ----   | ---- |
| `Bloom` | Enable/disable bloom. |
| `Bloom Intensity` | Set the strength of the bloom. |
| `Bloom Threshold` | Set the lower limit of brightness at which the bloom takes effect. |
| `Light Scattering` | Enable/disable light scattering. |
| `Scattering Intensity` | Set the strength of atmospheric scattering. |
| `Scattering Directivity` | Set the directivity, the degree of concentration of the scattered light. |
| `G` | Set the parameter to adjust the strength of IBL, or Image-Based Lighting. |
| `Distance` | Set the distance at which the light scattering starts. |
| `LightColor` | Set the color of the light. |
| `SunColor` | Set the color of the sunlight. |
| `IBL` | Enable/disable IBL, or Image-Based Lighting. |
| `DiffuseSize` | Set the size of the diffuse map texture. |
| `SpecularSize` | Set the size of the specular map texture. |

---

# Avatars
![Avatars](img/HEOWorldSetting_Avatars.jpg)

|  Label |  function  |
| ----   | ---- |
| `Dummy Avatar` | Specify the Dummy Avatar that will be rendered in place of the normal avatar when the avatar is in a distant location or the rendering limit has been reached. |
| `Avatar Files` | Set the avatar file that handles all the information for avatars. Refer to [this guide](../WorldMakingGuide/AvatarFile.md) for the details about Avatar Files. |
| `CreateAvatarFile` | Generate a new avatar file. |

---

## MyAvatar
![MyAvatar](img/HEOWorldSetting_MyAvatar_1.jpg)

|  Label |  function  |
| ----   | ---- |
| `NSFW` |  Restrict the use of NSFW (Not Safe For Work) avatars.|
| `Polygon` | Set the upper limit of polygon count for the MyAvatars in this world. |
| `Motion` | Set the motion to be used by the MyAvatars.|

![MyAvatar_2](img/HEOWorldSetting_MyAvatar_2.jpg)

|  Label |  function  |
| ----   | ---- |
| `Emotion` | Set the emotes to be used by the MyAvatars. |
| `Objects` | Set the model to be enabled for pickups by MyAvatars. |