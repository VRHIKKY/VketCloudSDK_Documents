# Usage of AutoTextureConverter

## How to Use
### 1. Install Tools
At First, please install [PVRTexTool](https://developer.imaginationtech.com/pvrtextool/) and [TexConv](https://github.com/Microsoft/DirectXTex/wiki/ Texconv). TexConv can be found at the top of the page under "DOWNLOADS@LATEST" to install the files.

### 2. Settings
Please select AutoTextureCompresser Button from "VketCloudSDK" on the toolbar.
Enter the appropriate folder paths in the window as shown below, or use the SelectFolder button to specify each path directly. After specifying the paths, press the "TextureCompress" button.
	TexConv… Please specify the folder where TexConv.exe is located.
	PVRTexTool…please specify the folder where PVRTexToolCLI.exe is located.
![altツールバー説明](images/1.png)
![altウィンドウ](images/2.png)

### 3. Texture Compression
After specifying, press the "TextureCompress" button.
While compressing, the following image will appear and the tool will enter a waiting state. The current tool does not release the hanging state when an external tool is executed, so it will behave as if it is frozen, but please wait for about 5 minutes.
![alt圧縮中](images/3.png)

### 4. Overwrite HEO files
When all compression is complete, you will see that folders "texastc", "texdtx", and "texetc2" are created and the HEO files are overwritten with the latest ones.