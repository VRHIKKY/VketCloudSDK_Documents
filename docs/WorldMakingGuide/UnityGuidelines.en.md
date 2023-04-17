## Introduction
The World data used in VketCloud can be set up inside Unity to be exported by HEOExporter.
However, not all functions of Unity can be used, hense needing some adjustments.

## Polygon
The World model needs to be under 800,000 triangles.

## Texture
* PNG images, equal to or less than 2048x2048 in resolution.
* A square/rectangle of which the resolution is a number to the power of two.
e.g. 2048x2048, 1024x1024, or 512x512
* bit depth must be either 24 bits or 32 bits.
* File size must be less than 80MB.
* The extention must be .png in lowercase. An error will occur if capitalized.

## Texture Compression
Texture compression is one method Vket Cloud requires to peform smoothly. Check [here](he_TextureCompression.md) for more details.

## Reflection Probes
You may use Unity's Reflection Probes in Vket Cloud. Check [here](he_ReflectionProbe.md) for more details.

## Lightmap
* Set to Android platform. (For dLDR encoding)
* Max Lightmap Size needs to be equal to or less than 2048.
* Disable lightmap compression.
* Format: RGB24 or RGBA32 Compressed: None

<img src="he_image/スクリーンショット 2021-06-16 105720.png">

## Shaders
* Standard 
* Autodesk Interactive　
* Unlit
* UnlitWF（Only available for double-sided purposes）

## Collider
* Supports only BoxColliders and MeshColliders. MeshColliders are expensive to compute, so only use when really necessary.
BoxColliders should be set on ceilings and other other unreachable surfaces too. This prevents Objects from getting in between your avatar and the camera when in TPS mode. 
Check [here](he_MeshCollider.md) for details on how to export your custom MeshCollider.
* SphereCollider is used only to detect clicks/taps. (For posters, etc.)
* If the colliders are nested too deep inside the Hierarchy, they might not properly export.
* Make sure to set the height of colliders well. Avatars will step up a collider if it's too low, and a tall one will block your camera.
* Always disable MeshRenderers on your colliders. If a disabled MeshRenderer contains 0 Materials, there will be an export error.

## Skybox
* Skybox is not supported. Use an inverted dome instead.

## Scale
* Negative scales are ignored.

## Object
When exporting through HEOExport using object selection, make sure to create one parent Object that contains all other Objects.


<div> 
    <div>
        <img src="he_image/image-20211220-133702.png">
        <p>Should be put together as the above.</p>
    </div>
    <div>
        <img src="he_image/image-20211220-133737.png">
        <p>If there are more than two parent Objects, they need to be put together as one.</p>
    </div>
</div>