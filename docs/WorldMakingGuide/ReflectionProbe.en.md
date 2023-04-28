## Overview of the Reflection Probe
- Please check the official Unity document for the main rundown on Reflection Probes.[Reflection Probe - Unity Manual](https://docs.unity3d.com/ja/2018.4/Manual/class-ReflectionProbe.html)
There are no limits to the number of Reflection Probes in your World, but every Probe uses six textures. The more Probes you have, the more unperformant the World becomes, so try to adjust to have a good balance. The probes are expected to be used for Unity Standard Shader's reflections.

<img src="he_image/スクリーンショット 2022-05-13 122859.jpg">

- The Reflection Probe will calculate on a per-Hierarchy Object basis and not per-mesh. Out of the Reflection Probes listed in the MeshRenderer/Probes, the one with the highest Weight will be the one used. These values are calculated based on the distance bewteen the Probe and the Object. Also be noted that Probe blending is not supported.

<img src="he_image/スクリーンショット 2022-05-13 123111.jpg">

## How to Export Reflection Probes
1. Once the Reflection Probe is set as below, click "Bake."

 Type: Baked <p>
 HDR: *Unchecked* <p>
 Resolusion: Case by case (Specify the value based on the World's current performance and the surface area it reflects on) <p>

<img src="he_image/スクリーンショット 2022-05-13 124848.jpg">

2. After clicking "Bake," a Cubemap will be generated. Enable "Read/Write" in its advanced setting. (This is necessary to export the Cubemap)

<img src="he_image/スクリーンショット 2022-05-13 125158.jpg">

3. Attach "HEOReflectionProbe.cs" on the root object you wish to export via HEOExporter (In this case VketCloudSample).
On the HEOReflectionProbe component, slot in the Reflection Probes you'll be using.
<img src="he_image/スクリーンショット 2022-05-13 125438.jpg">

4. Be sure to child the Reflection Probe to the GameObject you export. (This is because Refection Probes sometimes require Transforms, thus needing the export)

<img src="he_image/スクリーンショット 2022-05-13 125825.jpg">

5. Export through the HEOExporter.

<img src="he_image/スクリーンショット 2022-05-13 125948.jpg">

6. Along with the exported .heo file, check whether the Cubemap is exported into "tex_reflection_cube/".

<img src="he_image/スクリーンショット 2022-05-13 130114.jpg">

<img src="he_image/スクリーンショット 2022-05-13 130144.jpg">

Below is an example image of this .heo file loaded into Vket Cloud.

<img src="he_image/ReflectionProbe_Sample.jpg">

## About Box Projection (reflection that changes depending on the camera position)
- Overview
You may use Unity's Box Projection for Reflection Probes. Check Unity's official document for the explanations on Box Projection. [Reflection Probe - Unity Manual](https://docs.unity3d.com/ja/2019.4/Manual/class-ReflectionProbe.html)

<<How to Export>>

1. Check the Reflection Probe's "Box Projection" box. You may not be able to check it if you are using LightMaps.
<img src="he_image/スクリーンショット (661).jpg">

2. Child the Reflection Probe to the GameObject you export. (Box Projection uses Transforms, thus requiring the export)
<img src="he_image/スクリーンショット 2022-05-13 125825.jpg">

3. Follow the previously explained steps to export.

## Notes on Exporting the Reflection Probe
- If you wish to reflect onto large Objects, such as large floors, walls, or other surfaces, you may need to raise the cubemap's Resolution when you Bake. (There's a big drop in resolution when reflecting onto a large Object)

- If the reflection is working fine in Unity but pitch black on VketCloud, check whether the Reflection Probe is registered in "HEOReflectionProbe" and the Probe isn't disabled/hidden inside Unity.

