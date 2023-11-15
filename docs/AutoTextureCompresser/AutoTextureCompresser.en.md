# How to Use the AutoTextureCompresser
Texture compression in VketCloud is done by using a 3rd party compression tool. Although the compression is processed by [running batch files](../heoexporter/he_TextureCompression.md) with the "_astc", "_dxt" and "_etc" suffixes, this may be confusing for users unfamiliar with the process.<br>
The Auto Texture Compresser is a tool aimed to automate the compression process.


## How to Use
### 1. Install Tools
First, please install [PVRTexTool](https://developer.imaginationtech.com/pvrtextool/) and [TexConv](https://github.com/Microsoft/DirectXTex/wiki/Texconv). TexConv can be found at the top of the page under "DOWNLOADS@LATEST" to install the files.

Also, in order to run the tool, the latest (Ver. 3.11 or later) [Python installation](https://www.python.org/downloads/) is required.

### 2. Export the required textures
To compress textures,  select `VketCloudSDK->BuildAndRun` from the menu bar and export the necessary textures under the release folder.

### 3. Texture conversion
Select AutoTextureCompresser from "VketCloudSDK" on the toolbar. <br>

![AutoTextureCompresser_1](img/AutoTextureCompresser_1.jpg)

A window like the one shown below will appear, so set the necessary items for the UI parameters.

The steps required to perform compression are as follows:

1. Set the python alias name in **Python Alias for shell**.
     If an alias is not set, you need to set the Python Path (file location where python.exe is located).

    ![AutoTextureCompresser_2](img/AutoTextureCompresser_2.jpg)

2. Specify the python version in **PythonKeyword**.

     ![AutoTextureCompresser_3](img/AutoTextureCompresser_3.jpg)

3. Specify the full path to the HEOTexComp.py folder in **CompressorLocation**. <br>If you cannot find it, search for "HEOTexComp" in Assets and open the folder that appears from Explorer to get the path.
     ![AutoTextureCompresser_4](img/AutoTextureCompresser_4.jpg)

4. Specify the full path to the HEOSameTexOptimizer.py folder in **OptimizerLocation**.

     ![AutoTextureCompresser_5](img/AutoTextureCompresser_5.jpg)

5. Specify the path to the release folder built with VketCloudSDK in **BuildPath**.

     ![AutoTextureCompresser_6](img/AutoTextureCompresser_6.jpg)

!!! note caution
         In Ver4.8 / Ver5.4, the string JRWorld is included in the initial value, so please delete that string before using the tool.
         This issue will be fixed in the next update.
     ![AutoTextureCompresser_Issue](img/AutoTextureCompresser_Issue.jpg)

6. Specify the **relative path below BuildPath** for each field in **Path0** in IList. <br>Specifically, open the project in Explorer and specify the path with the same name as the object to which [HEOField](../HEOComponents/HEOField.md) is attached under upload/data/Field. <br>If you need to specify more than one, use a new line.
example)
　data\Field\World
　data\Field\PartyRoom
　data\Field\*
    ![AutoTextureCompresser_7](img/AutoTextureCompresser_7.jpg)

7. Click on the **Optimize Files** button

During compression, the image below will appear and the computer will be in standby mode. <br>
The current tool does not release the hanging state when running an external tool, so it will behave as if it is frozen, but please wait for about 5 minutes.
![AutoTextureCompresser_8](img/AutoTextureCompresser_8.jpg)

When all compression is completed, folders named "texastc", "texdtx", and "texetc2" will be created in the HEO file under "project name/release/data/field", and the HEO file will be overwritten with the latest version.

## UI parameter description
Configure settings for each parameter below.

#### Python Path Config

![AutoTextureCompresser_2](img/AutoTextureCompresser_2.jpg)

| Variable | Initial value | Function |
| ---- | ---- | ---- |
| Python Alias for Shell | None | Python alias name used in cmd. <br>If you have not set an alias for Python, be sure to set `Python Path`. |
| Python Path | None | Set the directory path for python.exe. |

#### Python Data Config

![AutoTextureCompresser_9](img/AutoTextureCompresser_9.jpg)

| Variable | Initial value | Function |
| ---- | ---- | ---- |
| Python Keyword | python3.11 | Name of python.exe to run. Match Python Alias |
| Compressor Filename | HEOTexComp.py | HEOTexComp script file name |
| Compressor Location | C:\Project\ | Specify the folder path for HEOTexComp.py. <br> {PROJECT_PATH}\Packages\VketCloudSDK\PackageResources\tools\HEOTexComp |
| Optimizer Filename | HEOSameTexOptimizer.py | HEOSameTexOptimizer script filename |
| Optimizer Location | C:\Project\ | Specify the folder path of HEOSameTexOptimizer.py. <br> {PROJECT_PATH}\Packages\VketCloudSDK\PackageResources\tools\HEOSameTexOptimizer |
| BuildPath | C:\Project\release | Path to the release folder built with VketCloudSDK |
| Batch Type | astc dxt etc2 pvrtc | List of batch file names that use PVRTextTool and Texconv. |
| OptimizerSrcFolderName | Src | Name of the Source folder required by HEOSameTexOptimizer |
| OptimizerDestFolderName | Dest | Folder name used by HEOSameTexOptimizer for output |

#### Compress File

![AutoTextureCompresser_2](img/AutoTextureCompresser_2.jpg)

| Variable | Initial value | Function |
| ---- | ---- | ---- |
| IList | None | txt file listing folder paths containing HEOs to be converted |