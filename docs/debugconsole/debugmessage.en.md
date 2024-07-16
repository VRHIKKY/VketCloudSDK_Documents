# List of Debug Messages

The error/alert debug messages shown in the [Debug Console](debugconsole.md) are listed here.
Note that errors/alerts not on this list (e.g. build error caused by Unity, etc.) will be categorised/displayed as "Unknown" in the console.

|Error (⛔) / Alert (⚠)|Message Category|Message Context|Fix Suggestions|Related Links|
|-----|-----|-----|-----|-----|
|Error|Unity Option Alert|Your version of Unity is not supported by VketCloudSDK.|Please change the version to 2019.4.31f1.|[Download Archive](https://unity.com/releases/editor/archive#download-archive-2019){target=_blank} |
|Alert|Unity Option Alert|Color Space is not set to Linear. The appearance after building may be significantly different.|Please set the Color Space to Linear.| [Unity Pre-prep](../AboutVketCloudSDK/OperatingEnvironment.md) |
|Alert|Unity Option Alert|In the Tier settings of Player settings, the quality level of the standard shader is not set to Medium. The appearance after building may be significantly different.|Please set the quality of the standard shader to Medium.|[Graphics - Unity Documentation](https://docs.unity3d.com/ja/2019.4/Manual/class-GraphicsSettings.html){target=_blank}|
|Error|Essential Objects Error|There is no object with [HEOWorldSetting](../VKCComponents/HEOWorldSetting.md) in the scene.|Please create an object with [HEOWorldSetting](../VKCComponents/HEOWorldSetting.md).|[Essential objects](../FirstStep/WorldBasicComponents.md) |
|Error|Essential Objects Error|There is no object with [VKCItemField](../VKCComponents/VKCItemField.md) in the scene.|Please create an object with [VKCItemField](../VKCComponents/VKCItemField.md).|[Essential objects](../FirstStep/WorldBasicComponents.md) |
|Error|Essential Objects Error|There is no object with [HEOPlayer](../VKCComponents/HEOPlayer.md) in the scene.|Please create an object with [HEOPlayer](../VKCComponents/HEOPlayer.md).|[Essential objects](../FirstStep/WorldBasicComponents.md) |
|Error|Essential Objects Error|There is no object with [HEODespawnHeight](../VKCComponents/HEODespawnHeight.md) in the scene.|Please create an object with [HEODespawnHeight](../VKCComponents/HEODespawnHeight.md).|[Essential objects](../FirstStep/WorldBasicComponents.md) |
|Error|Essential Objects Error|There are no node objects with meshes under the object with the [VKCItemField](../VKCComponents/VKCItemField.md).|Please add the object under the [VKCItemField](../VKCComponents/VKCItemField.md) to place an object in the Field.||
|Alert|Video Alert|An unsupported format of video file is being used.|Please convert the video to a format supported by VketCloud.||
|Alert|Video Alert|The video size is larger than the maximum video size set in the check tool.|Please compress the video or reset the maximum video size from the [check tool settings](debugconsole.md).||
|Alert|Video Alert|The video length is longer than the maximum video length set in the check tool.|Please crop the video or reset the maximum video length from the [check tool settings](debugconsole.md).||
|Alert|UI Rendering Error|Sprite Renderer is not supported.|Please attach a texture to the Quad or use [VKC Item Plane](../VKCComponents/VKCItemPlane.md).|
|Alert|UI Rendering Error|Canvas Renderer is not supported.|Please attach a texture to the Quad or use [VKC Item Plane](../VKCComponents/VKCItemPlane.md).|
|Error|Mesh Renderer Error|The number of polygons used in the entire scene exceeds the maximum allowable number of 800,000.|Please reduce the number of polygons in the 3D model you are using.|[Compressing mesh data - Unity Documentation](https://docs.unity3d.com/2021.3/Documentation/Manual/mesh-compression.html){target=_blank}|
|Alert|Mesh Renderer Alert|The number of polygons used in the entire scene exceeds the recommended allowance of 600,000. Depending on the device used, the performance of the world may decrease.|Please reduce the number of polygons in the 3D model you are using.|[Compressing mesh data - Unity Manual](https://docs.unity3d.com/2021.3/Documentation/Manual/mesh-compression.html){target=_blank}|
|Alert|Mesh Renderer Error|There are objects in the scene that use SkinnedMeshRenderer.|Please convert animated objects to vrm and place them using [VKC Item Object](../VKCComponents/VKCItemObject.md).||
|Alert|Mesh Renderer Alert|There are objects without material settings.|Please attach a material from the MeshRenderer of the target object.||
|Alert|Mesh Renderer Alert|An unsupported shader is being used.|Please assign a shader supported by VketCloud.||
|Alert|Mesh Collider Alert|There are objects that have both a mesh collider and a mesh renderer.|Please separate each component into different objects.||
|Alert|Mesh Collider Alert|There are mesh colliders that do not have a [VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md).|To enable mesh collider on VketCloud, please add [VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md) to the target object.||
|Error|Light Map Error|The lightmap size exceeds 2048.|Please set the lightmap size to 2048 or less.||
|Error|Light Map Error|Lightmap compression is on.|Please turn off the lightmap compression settings.||
|Error|Light Map Error|An unsupported lightmap format is selected.|Please set the lightmap format to RGB24/RGBA32.||
|Alert|Light Map Alert|The Lightmap Encoding on the PC platform is not set to Normal Quality. There is a risk of overexposed lightmaps.|To control the encoding/compression of the lightmaps for these platforms, go to Edit > Project Settings > Player > Other Settings > Lightmap Encoding.|[Lightmaps: Technical information - Unity Documentation](https://docs.unity3d.com/2019.4/Documentation/Manual/Lightmaps-TechnicalInformation.html){target=_blank} |
|Alert|Light Map Alert|The Lightmap Encoding on the Android platform is not set to Low Quality. There is a risk of overexposed lightmaps.|To control the encoding/compression of the lightmaps for these platforms, go to Edit > Project Settings > Player > Other Settings > Lightmap Encoding.|[Lightmaps: Technical information - Unity Documentation](https://docs.unity3d.com/2019.4/Documentation/Manual/Lightmaps-TechnicalInformation.html){target=_blank} |
|Alert|Transform Error|There are objects with negative scale values in Transform.|Please set the scale value of Transform to a value greater than 0.||
|Error|FBX Error|An unsupported FBX file is being used.|Please convert the FBX file to binary format.|
|Errror|FBX Error|The "Read/Write Enabled" option for the FBX meshes placed in the scene is turned off.|Please turn on the "Read/Write Enabled" option for the FBX meshes placed in the scene.||
|Alert|Texture Alert|A texture with an unsupported texture format is being used.|Please change the Texture Format to RGB24/RGBA32.||
|Alert|Texture Alert|A texture with an unsupported extension is being used.|Please convert to .png.||
|Alert|Texture Alert|The texture size is larger than the maximum texture size set in the check tool.|Please reduce the texture size or reset the maximum texture size from the [check tool settings](debugconsole.md).||
|Alert|Texture Alert|The texture pixel size is larger than the maximum texture pixel size set in the check tool.|Please reduce the texture pixel size or reset the maximum texture pixel size from the [check tool settings](debugconsole.md).|| 