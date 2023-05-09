## Overview
HEOExporter is one of the included tools in VketCloudSDK. The tool is used to export "HEO" file, the 3D object file format specially designed for VketCloud. Will most commonly be used to export World models as .heo files.

## Prepare a Scene
Use Unity version 2019.4.31f1.<p>
First, create a Scene. Make and name an Empty GameObject in the Scene. We'll call it "VketCloudSample" in this example.(This becomes the name of the HEO file exported at the end) Next, place the World models you wish to export as the child of VketCloudSample. The HEOExporter will reference this parent(VketCloudSample) when exporting.

<img src="img/PrepareScene.jpg">

## Exporting the HEO
Select VketCloudSample in the Hierarchy, then click VketCloudSDK/Export Field in the top window menu. A save screen will appeaer, so choose folder for the files to be saved.

<img src="img/SelectSample.jpg">

If successful, the word "Exported" and the number of polygons should appear on the console.

<img src="img/NumberOfPolygons.jpg">

Open the folder called "tex_sample" in the exported folder. Sample texture files are exported here for you to confirm.
If you see any files that are not jpg files, such as JPEG or TGA, Vket Cloud cannot read it. In such a case, you will have to change the texture file, fix the material, and then export once again.
The image below with "009_VketCloudComu.jpg" is an example of such situation. The numbers such as "000" were added when they were exported, so original name was "VketCloudComu.jpg."

<img src="img/OpenTexSample.jpg">
<img src="img/OpenVketCloudComu.jpg">

If you wish to export again, manually delete the tex and tex_sample folders first. Since the numbers are automatically added to the name, you might have texture files that are conflicting with the older ones.

If there are no problems with the texture file, the export process is done. If you want VketCloud to load these files, copy the exported files and folders.

!!! Note tip
    Objects exported as .heo can be included in the BuildAndRun output by setting them from HEOObject. For how to use HEOObject, please see [here](../Unity/HEOObject.md).
    
Below is an example HEO file loaded in VketCloud.

<img src="img/SampleHEO.jpg">

