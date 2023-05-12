HEOWorldSetting manages your World's basic info.
It lets you set basic, redering, and avatar settings.

- Basic Info
- Camera
- Rendering
- Avatars
- MyAvatar

# Basic Info
![BasicInfo](img/HEOWorldSetting_BasicInfo.jpg)

|  Label |  function  |
| ----   | ---- |
|  `World Name` |  Set the name of the World. It will mainly be used for the URL. |
|  `Debug Mode`  |  Switch to debug mode. When switched on, players can use F1/F2 to access the debug menu on browser.|
|  `VRM Drop`  |  Allows users to locally change their avatar by drag-and-dropping their own .vrm avatars to the browser screen.  |
|  `Occulusion Culling`  | Activates the Occulusion Culling.  |
|  `World Name Directory`  |  When exporting to .heo and other files, the files will be packed into a folder with the same name as the `World Name`. e.g. data/field/`World Name`/world.heo  |
| `Multi Play Mode In Local Build` | Activate multiplayer functions even during the local build. |

---

## Camera
![Camera](img/HEOWorldSetting_Camera.jpg)

|  Label |  function  |
| ----   | ---- |
|  `Smoothing` | Set whether or not the smoothing is applied to the camera movement. |
|  `far Offset` | Shift the focus point of TPS camera up and down. |
|  `near Offset` | Shift the focus point of TPS camera up and down. |

---

# Rendering
![Rendering](img/HEOWorldSetting_Rendering.jpg)

|  Label |  function  |
| ----   | ---- |
|  PBR |  Enables PBR lighting. |
| `Directional Light` | Set a Directional Light placed in the scene as the directional light for this world. |
|  Projection Near  |  Change the near clipping distance.  |
|  Projection Far  | Change the far clipping distance.  |
|  Projection Degree  | Change the FoV angle. (default value recommended) |
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

---

## MyAvatar
![MyAvatar](img/HEOWorldSetting_MyAvatar.jpg)

|  Label |  function  |
| ----   | ---- |
| `NSFW` |  Restrict the use of NSFW (Not Safe For Work) avatars.|
| `Polygon` | Set the upper limit of polygon count for the MyAvatars in this world. |