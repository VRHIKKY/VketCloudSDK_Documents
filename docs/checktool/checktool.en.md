# Check Tool
From VketCloudSDK in the menu bar, click the Check Tool button to display the Check Tool window.

![image](images/menu.jpg)

## How to read the screen
![image](images/Window.jpg)
The main features of the Check Tool window are:

| Label | Description |
| ---- | ---- |
| Re-check | Runs the check again. |
| Setting | Sets the upper limit of the texture size, etc. | |
| Shown/Hidden Result | Switches the displayed list of check results. |
| Hide/Show Result | Hide the check items you want to ignore. Or, redisplays the check items that were once hidden. |

There are two types of check results, **Warning** and **Error**, and an icon is displayed on the left side of the result item. **Warning** is a yellow icon and **Error** is a red icon.
Warning is an item that does not affect the build itself, but affects performance etc. after the build. Errors, on the other hand, are items that can affect the build process itself.
![WarnignAndError](images/WarnignAndError.jpg)

In Setting, you can set the parameters of the check tool. An error will be displayed if the parameter is in excess of the max value set.
![Setting](images/Setting.jpg)

| label | description |
| ---- | ---- |
| **Max texture size(Pixel)** | You can set the maximum width of the texture. |
| **Max texture size (Memory)** | You can set the upper limit of the total file size of textures used in the scene. |
| **Max video size (MB)** | You can set the maximum file size of the video file used for the scene. |
| **Max video length(s)** | You can set the maximum duration of the video used for the scene. |

## Multiple selection of check results
![image](images/MutiSelect.jpg)

Multiple panels can be selected simultaneously by clicking while holding down the Shift key. By clicking the "Hide result" button or the "Show result" button while multiple items are selected, you can move the selected items all at once.

!!! note
     Right-click on the panel and select Open all group and Close all group from the menu. You can open all check items with Open all group and close all items with Close all group.


# Check list

| Label | Description |
| ---- | ---- |
| Unity version check | Shows an error if the Unity version is not 2019.4.31f1. |
| Texture size check | If the texture size Width or Height, or both, is greater than 2048px (varies depending on settings), an Error is displayed. |
| Whether the texture width is a power of 2 | If texture Width and Height are not a power of 2 (64, 128, 256, 512, 1024, 2048, etc.), an Error is displayed. |
| Whether the total file size of textures in the scene is within the upper limit | If the total capacity of textures in the scene is less than the upper limit set in Settings, a warning will be displayed showing the total capacity of textures used in the scene. (See Max Texture size in Settings) If it's larger than the limit, it will show an Error and show the total amount of textures used in the scene. |
| The extension is .png or | If the extension of the texture file is not ".png", the message "Texture type is not “png”” and an Error are displayed. In addition, an Error is also displayed in the case of .PNG. |
| PNG24 or 32bit color | If the texture format is a type other than RGB24 or RGBA32, an error will be displayed. |
| FBX Check | Checks all FBX files used in the scene. An error will be displayed if the FBX file is not in binary format. |
| Polygon Check | Calculates the number of polygons for all meshes using MeshRenderers and SkinnedMeshRenderers in the Scene. **When the number of polygons is between 450,000 and 600,000**, a warning will be displayed. **If the number of polygons is 600,000 or more**, an error will be displayed. |
| Graphics option check | If Unity's graphics setting is not set to Medium, an error will be displayed. |
| Video thumbnail image check | For video thumbnail images, you may set textures of size 1920x1080. During the texture size check, this particular size is exempted and does not yield error. |
| Skybox check | VKetCloudSDK does not support Unity standard Skybox. An error will be displayed if the material is set to **Lighting/SkyboxMaterial**. |
| Video check | Checks whether the format is MP4, and whether the video capacity and video time are below the set upper limit. |
| Shader Check | Checks the materials if the assigned shader can be used with VKetCloudSDK. See [Unity Guidelines](../heoexporter/he_UnityGuidelines.md) for the list of available shaders. |
| Scale check | Checks whether the scale is negative. |
| Mesh collider check | Check if the mesh collider is set according to the manual. |
| Separation of reflection probes | Blending of reflection probes is not supported in VketCloudSDK. It checks if the reflection probe areas overlap. |
| Android Platform Check | Checks if Unity's platform selection is set to android. |
| Lightmap check | In the Import Settings of the lightmap texture, it will check if the size is **2048x2048** or less, compression is **disabled**, and the Format is RGB24 or RGBA32. |
| Light bake setting check | If the **Lighting setting** setting exceeds 2048 or compression is enabled, a warning will be displayed. |
| Whether SpriteRenderer or Canvas/Image are used | VketCloudSDK does not support **SpriteRenderer** and **Canvas/Image,** It checks if you are using them. |
| Skinned mesh check | VketCloudSDK does not support **SkinnedMeshRenderer.** It checks if you are using it. |