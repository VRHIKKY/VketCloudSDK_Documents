After exporting through the HEOExporter, You'll need to compress its textures. It's planned to become compressible on the server side in the future, but currently you'll have to do it locally on your PC. Texture compression helps optimize your World by a huge margin, so don't forget to do it.

## Tools to Install
First, install [PVRTexTool](https://developer.imaginationtech.com/pvrtextool/).
We'll be using the installed PVRTexTool\CLI\Windows_x86_64\PVRTexToolCLI.exe, and you'll need to set its PATH system variable.
(We won't be going into the details on how to use command prompts or how to set PATHs)

Next, install [Texconv](https://github.com/Microsoft/DirectXTex/wiki/Texconv).
You should be able to download from "DOWNLOADS@LATEST" immediately once you've opened the link.
Place the installed texconv.exe file in a place you like, and set its PATH like with PVRTexTool.

## Creating Compressed Texture Files

When you export an .heo file through the HEOExporter, you'll see .bat files named "yourHEOfilename_pvrtc.bat", "yourHEOfilename_etc2.bat", "yourHEOfilename_astc.bat", and "yourHEOfilename_dxt.bat".
Inside the files, you might see something like the following.

```
md tex_pvrtc
del tex_pvrtc\*.pvr
PVRTexToolCLI.exe -i tex_sample\000__Junkinbox_BaseColor.png -o tex_pvrtc\000.pvr -m 16 -f PVRTC1_4_RGB,UBN,sRGB
PVRTexToolCLI.exe -i tex_sample\001__Junkinbox_Normal.png -o tex_pvrtc\001.pvr -m 16 -f PVRTC1_4_RGB,UBN,sRGB
PVRTexToolCLI.exe -i tex_sample\002_junkinbox_Glass_BaseColor.png -o tex_pvrtc\002.pvr -m 16 -f PVRTC1_4,UBN,sRGB
PVRTexToolCLI.exe -i tex_sample\003_junkinbox_Glass_Emissive.png -o tex_pvrtc\003.pvr -m 16 -f PVRTC1_4_RGB,UBN,sRGB
echo skip tex_sample\004_junkinbox_Glass_Roughness.png
PVRTexToolCLI.exe -i tex_sample\005_Cutout_BaseColor.png -o tex_pvrtc\005.pvr -m 16 -f PVRTC1_4,UBN,sRGB
PVRTexToolCLI.exe -i tex_sample\006_buy_button_color.png -o tex_pvrtc\006.pvr -m 16 -f PVRTC1_4_RGB,UBN,sRGB
PVRTexToolCLI.exe -i tex_sample\007_tweet_button_color.png -o tex_pvrtc\007.pvr -m 16 -f PVRTC1_4_RGB,UBN,sRGB
pause
```
If you see any lines that start with "echo skip," it means that the texture failed to compress. To fix this, open the tex_sample folder and check your image data.
<img src="he_image/スクリーンショット 2021-08-10 142727.jpg>

Right click around on your file explorer to add the "resolution" and "bit depth" categories. Then make sure that the resolution is at the power of two and not too big (Like 4k), and the bit depth is 24 or 32.
Try exporting again if you've been able to fix them, and check for echo skips.

Once you're satisfied, double click the .bat files to execute it. Folders named tex_pvrtc, tex_etc, tex_astc, and tex_dxt will be created, and the compressed files will be in them.

Note:
If you're using Reflection Probes, additional folders named "tex_reflection_cube_pvrtc", "tex_reflection_cube_etc", "tex_reflection_cube_astc", and "tex_reflection_cube_dxt" will be created.

## Overwriting the HEO File
Next, set the PATH to HEOTexComp.exe inside SDK/Tools/HEOTexComp/, and execute it from the command prompt with:
```
HEOTexComp.exe (path to the HEO folder)\"YourHEOfilename".heo
```
The following should appear.

ExistCubemapTextureCompression 10 10 10 10

ExistTextureCompression 5 5 5 5
Succeeded

If you see the word "Succeeded", it's complete.
The numbers before it would be the number of files in PVRTC/ETC/ASTC/DXT.

This updates the HEO file to contain references to the compressed textures.