After exporting through the HEOExporter, You'll need to compress its textures.<br>
Although textures are planned to become compressible on the server side in the future, currently local compression is needed. Texture compression is essential to optimize your world by a huge margin, therefore try this if possible.

## Files applicable for texture compression
- Resolution at the power of two (both height/width, rectangular shapes allowed)
- 24bit or 32bit color
- Albedo, normal, emission, etc.
- Lightmaps (RGBM/ETC2 supported, ASTC N/A)_
- ReflectionProbe

## Tools to Install
First, install [PVRTexTool](https://developer.imaginationtech.com/pvrtextool/).
We'll be using the installed `PVRTexTool\CLI\Windows_x86_64\PVRTexToolCLI.exe`, and you'll need to set its PATH system variable.<br>
(We won't be going into the details on how to use command prompts or how to set PATHs)

Next, install [Texconv](https://github.com/Microsoft/DirectXTex/wiki/Texconv).
You should be able to download from `"DOWNLOADS@LATEST"` immediately once you've opened the link.<br>
Place the installed texconv.exe file in a place you like, and set its PATH like with PVRTexTool.

Also, installing [python](https://www.python.org/) is required as well, in order to run the script for update textures in HEO files by the compressed files.<br>
Although version `3.11` is recommended, the script is expected to run in other versions.
However, python2 is not guaranteed to run, therefore installing a newer version is required in that case.

## Creating Compressed Texture Files

When you export an .heo file through the HEOExporter, you'll see .bat files named "yourHEOfilename_pvrtc.bat", "yourHEOfilename_etc2.bat", "yourHEOfilename_astc.bat", and "yourHEOfilename_dxt.bat".<br>
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

![TexSampleFolder](he_image/TexSampleFolder.jpg)

Right click around on your file explorer to add the "resolution" and "bit depth" categories. <br> Then, make sure that the resolution is at the power of two and not too big (Like 4k), and the bit depth is 24 or 32.
Try exporting again if you've been able to fix them, and check for echo skips.

Once you're satisfied, double click the .bat files to execute it. Folders named tex_pvrtc, tex_etc, tex_astc, and tex_dxt will be created, and the compressed files will be in them.

Note:
If you're using Reflection Probes, additional folders named "tex_reflection_cube_pvrtc", "tex_reflection_cube_etc", "tex_reflection_cube_astc", and "tex_reflection_cube_dxt" will be created.

!!! note caution
    If the Windows user names contains a 2-byte character (e.g. Japanese characters),   
    and the batch file contains a line starting with "echo skip", the batch may not run successfully. 
    In that case, check the image data following the instructions above, or delete the said line in the batch file using a text editor.

## Overwriting the HEO File

To overwrite the HEO file by the compressed texture, use the `Packages/com.hikky.vketcloudsdk/PackageResources/tools/HEOTexComp_Python/HEOTexComp.py` contained in the VketCloudSDK.

After copying the `HEOTextComp.py` file to the same directory of the HEO file, or jumping to the directory having the original `HEOTexComp.py`, open the command prompt to execute the following:

```
python HEOTexComp.py [path to the HEO folder]\[YourHEOfilename].heo
```

The following should appear.

``````
ExistCubemapTextureCompression 10 10 10 10

ExistTextureCompression 5 5 5 5
Succeeded
``````

If you see the word "Succeeded", it's complete.
The numbers before it would be the number of files in PVRTC/ETC/ASTC/DXT.

This updates the HEO file to contain references to the compressed textures.

!!! note
    As PVRTC conversion has been terminated by version updates, the HEOTexComp result may have a 0 on the top, which is not an error.

    ExistTextureCompression 0 5 5 5

!!! note
    As DXT compression may cause the color appearance to look odd in Windows, if that case happens please avoid using DXT compression.