# Specification Limit of Vket Cloud

All world models and assets used in Vket Cloud are set up in Unity. Since not all Unity functions can be used in Vket Cloud, however, adjustments must be made according to the specification limits as below.

## Polygon
Please keep the total number of models in the world to 800,000 triangles or less.

## Texture
* PNG with size less than 2048x2048
* Power-of-two sized squares (2048x2048, 1024x1024, 512x512, etc.) or power-of-two sized rectangles
* Bit depth is 24bit or 32bit
* 80MB or less in png
* Make the extension lowercase (.png). If it is ".PNG", an error may occur when uploading to the server.

## Texture Compression
VketCloud compresses textures as one of the ways to reduce weight. See [here](../heoexporter/he_TextureCompression.md) for more information.

## Reflection probes
Vket Cloud allows the use of Unity's reflection probes. See [here](ReflectionProbe.md) for more information.

## Lightmap
* Switch to Android (dLDR format) or PC (RGBM format) platform
* Make sure LightMap Encoding in Other Settings is set to "Low Quality" for Android platform and "Normal Quality" for PC platform.
     * Note that if the LightMap Encoding is wrong, the lightmap may be overexposed.
     * Real-time global illumination is not supported, so please use lightmaps. Most discrepancies between what looks in Unity window and Vket Cloud are caused by Global Illumination settings.
* Check if Color Space in Other Settings is set to "Linear"
<img src="img/スクリーンショット 2022-05-27 193242.png">
* Max Lightmap Size should be 2048 or less
* Disable lightmap compression
* Make sure that Format is set to RGB24 or RGBA32 and Compressed: None
<img src="img/スクリーンショット 2021-06-16 105720.png">

## Shaders
-Standard
-Autodesk Interactive　
-Unlit
- UnlitWF (supports double-sided display only)

!!! note
     Metallic textures from Autodesk Interactive cannot be used due to the number of texture slots. Use the Standard Shader when using a combination of metallic and roughness textures.

## Collider
* Only BoxCollider and MeshCollider are supported for collision detection. Note that MeshCollider takes very heavy load on processing. Avoid MeshCollider if possible. BoxCollider is also used to prevent objects getting in the way between the player avatar and the camera in TPS mode. As such, set BoxColliders on unreachable objects like the ceiling. See [here](../HEOComponents/HEOMeshCollider.md) for how to export a MeshCollider.
* SphereCollider is used only for click (tap) judgment. (Poster, etc.)
* If the hierarchy is nested deeply, colliders may not be exported upon BuildandRun.
* Colliders lower than the knee can be climbed. But be careful, too large colliders may hamper the movement of the camera.
* Make sure to disable the MeshRenderer. If you set the size of Materials to 0 and hide it, an output error will occur.

## Skybox
* Skybox is not supported. Please avoid the sky or use celestial sphere object instead.

## Scale
* Negative scale is ignored. If you want to turn objects inside out, please rotate it 180 degrees.

## Object
HEOExport does not support multiple selection. To export as a single object, create a parent object, store the target object inside it, and export the parent object.