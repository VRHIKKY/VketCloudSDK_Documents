# Reflection Probe

!!! note Info
     For basic functions of reflection probes, please see Unity's official documentation ([here](https://docs.unity3d.com/en/2018.4/Manual/class-ReflectionProbe.html){target=blank})

In Vket Cloud, reflection probes are determined per object in the hierarchy, not per primitive.

**Please note that, among the reflection probes listed in the object's MeshRenderer/Probes items, the one with the largest Weight number will be exported as the index of the reflection probe used by that object**.

This weight value is calculated based on the distance between the reflection probe and the object. Vket Cloud does not support reflection probe blending.

![ReflectionProbeWeight](img/ReflectionProbeWeight.jpg)

---

## How to setup Reflection Probes

On Vket Cloud SDK later than Ver12.3, Reflection Probes located in the scene will be automatically detected / converted on build.

1. Create a GameObject in the scene with a Reflection Probe attached.

    For example, a GameObject named "RefProbe" is created with a Reflection Probe attached as below:

    ![ReflectionProbe_Setup_1](img/ReflectionProbe_Setup_1.jpg)

    ![ReflectionProbe_Setup_2](img/ReflectionProbe_Setup_2.jpg)

2. Set the reflection probe as follows and press "Bake".

     - Type: Baked
     - HDR: *uncheck*
     - Resolution: Any value at your choice (Consider the render load / size of surface to be reflected)

    ![ReflectionProbe_Setup_3](img/ReflectionProbe_Setup_3.jpg)

3. Build and Run the world via the Vket Cloud SDK menu, which should create texture files inside tex_reflection_probe folder located under data/Field/World.

    To check texture files, select Vket Cloud SDK > Open Release Folder, and move to release/data/Field/World path.

    ![ReflectionProbe_Setup_4](img/ReflectionProbe_Setup_4.jpg)

    ![ReflectionProbe_Setup_5](img/ReflectionProbe_Setup_5.jpg)

!!! warning "Precautions on exporting reflection probes"

     - When using Reflection Probe on larger objects (floors, walls, objects with huge faces), set the baking cubemap to a higher resolution (e.g. 2048). This is because the image quality drops significantly when reflecting on a large object.

     - If there is an object that has reflection on Unity but turns black on VketCloud, please check if the reflection probe is registered in ReflectionProbes of "HEOReflectionProbe" and the reflection probe is not disabled on Unity.

     - There is no particular limit on the number of reflection probes, but 6 textures are used for each reflection probe, assuming that Unity's Standard Shader is used. **As the number of textures increase, the drawing load will also increase. Consider the balance between load and drawing**.

## About Box Projection (reflection that moves with camera position)

In VketCloud, you can optionally use Box Projection of Unity's reflection probe.

1\. Check "Box Projection" in Reflection Probe on Unity. (If you are using LightMap, you may not be able to enable it)

![ReflectionProbeBoxProjection](img/ReflectionProbeBoxProjection.jpg)

2\. Make sure that the Reflection Probe object is a child of the object you are about to export. (Because Box Projection uses Transform)

![ReflectionProbeAttachAsChild](img/ReflectionProbeAttachAsChild.jpg)

3\. Execute BuildAndRun according to "How to export reflection probes" above.

---

## (Outdated) How to export reflection probes

!!! warning "Deprecation of HEOReflectionProbe"
    On Ver12.3, the HEOReflectionProbe component has been deprecated.<br>
    The instructions below are solely for archive purpose.

1\. Set the reflection probe as follows and press "Bake".

     - Type: Baked
     - HDR: *not checked*
     - Resolution: Any value (Take into account the load and the size of the reflecting surface)

![ReflectionProbeSetting](img/ReflectionProbeSetting.jpg)

2\. After pressing Bake, a cube map for "Reflection Probe" will be created. In the inspector, check the checkbox of "Advanced → Read/Write Enabled" and press "Apply".

![ReflectionProbeSettingReadWriteEnabled](img/ReflectionProbeReadWriteEnabled.jpg)

3\. Attach "HEOReflectionProbe.cs" to the parent object (VketCloudSample) in hierarchy, which should contain all objects you want to export. Then set any number of reflection probes you want to export to "HEOReflectionProbe/ReflectionProbes" on inspector.

![ReflectionProbeAttachHEO](img/ReflectionProbeAttachHEO.jpg)

4\. The Reflection Probes need to be children of the object to be exported. (They must be exported together, for Reflection Probes may use Transforms.)

![ReflectionProbeAttachAsChild](img/ReflectionProbeAttachAsChild.jpg)

5\. Run BuildAndRun.

![ReflectionProbeExportField](img/ReflectionProbeExportField.jpg)

A sample of this HEO file read and displayed by Vket Cloud is as follows.

![ReflectionProbeSample](img/ReflectionProbeSample.jpg)
