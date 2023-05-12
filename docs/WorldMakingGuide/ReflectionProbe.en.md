!!! note Info
     For basic functions of reflection probes, please see Unity's official documentation ([here](https://docs.unity3d.com/en/2018.4/Manual/class-ReflectionProbe.html){target=blank})

In Vket Cloud, reflection probes are determined per object in the hierarchy, not per primitive.

**Please note that, among the reflection probes listed in the object's MeshRenderer/Probes items, the one with the largest Weight number will be exported as the index of the reflection probe used by that object**.

This weight value is calculated based on the distance between the reflection probe and the object. Vket Cloud does not support reflection probe blending.

<img src="img/スクリーンショット 2022-05-13 123111.png">

---

## How to export reflection probes
1. Set the reflection probe as follows and press "Bake".

     - Type: Baked
     - HDR: *not checked*
     - Resolution: Any value (Take into account the load and the size of the reflecting surface)

     <img src="img/スクリーンショット 2022-05-13 124848.png">

2. After pressing Bake, a cube map for "Reflection Probe" will be created. In the inspector, check the checkbox of "Advanced → Read/Write Enabled" and press "Apply".

     <img src="img/スクリーンショット 2022-05-13 125158.png">

3. Attach "HEOReflectionProbe.cs" to the parent object (VketCloudSample) in hierarchy, which should contain all objects you want to export. Then set any number of reflection probes you want to export to "HEOReflectionProbe/ReflectionProbes" on inspector.

     <img src="img/スクリーンショット 2022-05-13 125438.png">

4. The Reflection Probes need to be children of the object to be exported. (They must be exported together, for Reflection Probes may use Transforms.)

     <img src="img/スクリーンショット 2022-05-13 125825.png">

5. Run BuildAndRun.

     <img src="img/スクリーンショット 2022-05-13 125948.png">

A sample of this HEO file read and displayed by VketCloud is as follows.
     <img src="img/ReflectionProbe_Sample.png">


## About Box Projection (reflection that moves with camera position)
In VketCloud, you can optionally use Box Projection of Unity's reflection probe.

1. Check "Box Projection" in Reflection Probe on Unity. (If you are using LightMap, you may not be able to enable it)
<img src="img/スクリーンショット (661).png">

2. Make sure that the Reflection Probe object is a child of the object you are about to export. (Because Box Projection uses Transform)
<img src="img/スクリーンショット 2022-05-13 125825.png">

3. Execute BuildAndRun according to "How to export reflection probes" above.

!!! caution "Important points of exporting reflection probes"

     - When using Reflection Probe on larger objects (floors, walls, objects with huge faces), set the baking cubemap to a higher resolution (e.g. 2048). This is because the image quality drops significantly when reflecting on a large object.

     - If there is an object that has reflection on Unity but turns black on VketCloud, please check if the reflection probe is registered in ReflectionProbes of "HEOReflectionProbe" and the reflection probe is not disabled on Unity.

     - There is no particular limit on the number of reflection probes, but 6 textures are used for each reflection probe, assuming that Unity's Standard Shader is used. **As the number of textures increase, the drawing load will also increase. Consider the balance between load and drawing**.