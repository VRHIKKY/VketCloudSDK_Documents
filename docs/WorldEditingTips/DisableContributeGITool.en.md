#  Disable Contribute GI of Unlit Materials

In Vket Cloud, the object using Unlit shaders cannot be light baked and will result in a darker appearance.<br>
Therefore, the VketCloudSDK provides a utility tool to disable Contribute GI (object setting for lightmap contribution) which applied to all objects having Unlit shaders.

## How to Use

For example, an object having an unlit material has ContributeGI enabled in static settings.

![DisableContributeGITool_1](img/DisableContributeGITool_1.jpg)

Open the VketCloudSDK tab, and select the utility tool via Tools > Utility > Disable Contribute GI of Unlit Materials.

![DisableContributeGITool_2](img/DisableContributeGITool_2.jpg)

The tool will run on select, and all ContributeGI on Unlit objects will be disabled.
This will optimize the scene data for [Light Map](https://docs.unity3d.com/2019.4/Manual/Lightmapping.html){target=_blank} baking.

![DisableContributeGITool_3](img/DisableContributeGITool_3.jpg)