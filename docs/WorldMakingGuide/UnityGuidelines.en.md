# Specification Limit of Vket Cloud

All world models and assets used in Vket Cloud are set up in Unity. Since not all Unity functions can be used in Vket Cloud, however, adjustments must be made according to the specification limits as below.

## Polygon

Please keep the total number of models in the world to 800,000 triangles or less.

## Texture

On Vket Cloud, textures fitting the format below can be used:

* png format with size less than 2048x2048
* Power-of-two sized squares (2048x2048, 1024x1024, 512x512, etc.) or power-of-two sized rectangles
* Bit depth is 24bit or 32bit
* 80MB or less in png
* Make the extension lowercase (.png). If it is ".PNG", an error may occur when uploading to the server.

As a conversion tool, the SDK has [Export Compressed Texture](../SDKTools/ExportCompressedTexture.md) for use.

## Texture Compression

VketCloud compresses textures as one of the ways to reduce weight. See [here](../heoexporter/he_TextureCompression.md) for more information.

## Reflection probes

Vket Cloud allows the use of Unity's reflection probes. See [here](ReflectionProbe.md) for more information.

## Directional Light

Note that the Intensity value set on the `Directional Light`(as image below) will not be used within the world.<br>
To express light intensity, multiply the `Directional Light`'s color by using the worldsetting's `LightColor` value in [HEOWorldSetting](../HEOComponents/HEOWorldSetting.md). 

![Rendering_2](../HEOComponents/img/HEOWorldSetting_Rendering_2.jpg)

## Lightmap

* Switch to Android (dLDR format) or PC (RGBM format) platform
* Make sure LightMap Encoding in Other Settings is set to "Low Quality" for Android platform and "Normal Quality" for PC platform.
* Note that if the LightMap Encoding is wrong, the lightmap may be overexposed.
* Real-time global illumination is not supported, so please use lightmaps. Most discrepancies between what looks in Unity window and Vket Cloud are caused by Global Illumination settings.
* Check if Color Space in Other Settings is set to "Linear"

![UnityGuidelines_1](./img/UnityGuidelines_1.jpg)

* Max Lightmap Size should be 2048 or less
* Disable lightmap compression
* Make sure that Format is set to RGB24 or RGBA32 and Compressed: None

![UnityGuidelines_2](./img/UnityGuidelines_2.jpg)

* Objects having Unlit shaders are not suited for light baking.<br>
  The SDK provides a [Utility Tool](../WorldEditingTips/DisableContributeGITool.md) to disable such objects from lightbaking.

## Shaders

- Standard 
- Autodesk Interactive
- MToon　
- Unlit
- UnlitWF (supports double-sided display only)
- VketChanDoubleSided Shaders contained in the VketCloudSDK

!!! note
     Metallic textures from Autodesk Interactive cannot be used due to the number of texture slots. Use the Standard Shader when using a combination of metallic and roughness textures.

## Collider

* Only BoxCollider and MeshCollider are supported for collision detection. Note that MeshCollider takes very heavy load on processing. Avoid MeshCollider if possible. BoxCollider is also used to prevent objects getting in the way between the player avatar and the camera in TPS mode. As such, set BoxColliders on unreachable objects like the ceiling. See [here](../HEOComponents/HEOMeshCollider.md) for how to export a MeshCollider.
* SphereCollider is used only for click (tap) judgment. (Poster, etc.)
* If the hierarchy is nested deeply, colliders may not be exported upon Build and Run.
* Colliders lower than the knee can be climbed. But be careful, too large colliders may hamper the movement of the camera.
* Make sure to disable the MeshRenderer. If you set the size of Materials to 0 and hide it, an output error will occur.

## Skybox

* Skybox is not supported. Please avoid the sky or use celestial sphere object instead.

## Scale

* If an object is set to a negative scale, its mesh's normal will turn to the inside. Unlike Unity's scene view, the mesh will be drawed inside the object in the world.<br>
* If a negative scaled object exists in the scene, the [Debug Console](../debugconsole/debugconsole.md) will generate a warning.<br>
* We recommend to fix negative scales if it's not set intentionally.

## Object

* Placing objects with the same names is not recommended. In an occasion that makes name conflicts, adding suffix numbers as Object_1, Object_2, etc. is recommended.
* HEOExport does not support multiple selection.<br> To export as a single object, create a parent object, store the target object inside it, and export the parent object.
