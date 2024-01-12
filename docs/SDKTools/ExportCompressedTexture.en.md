# Export Compressed Texture

![ExportCompressedTexture_1](img/ExportCompressedTexture_1.jpg)

Export Compressed Texture is an image formatting tool intended to reformat images which are non-png format/ width-height size not set to power of 2, to be usable under Vket Cloud environment.

For details of texture specifications, refer to [Specification Limits of Vket Cloud](../WorldMakingGuide/UnityGuidelines.md).

By running this tool, the image will be reformatted to png format, and the image's [Non-PowerOf2](https://docs.unity3d.com/ja/2019.4/Manual/class-TextureImporter.html){target=_blank}  property will be automatically set to other than none.

If the [MaxSize](https://docs.unity3d.com/ja/2019.4/Manual/class-TextureImporter.html){target=_blank} is set under 2048, the image size will be reformatted as well. This can be used for [Texture Compression](../WorldOptimization/TextureCompression.md) and shortening load time.

The generated image will be output to the original image's directory as ”<Original Texture's Name>_comp.png”.
Also, if the later mentioned option is enabled, the original image referenced in Scene materials can be replaced to the generated image.

## How to Use

As preparation, if the generated image should be compressed, set the original image's [MaxSize](https://docs.unity3d.com/ja/2019.4/Manual/class-TextureImporter.html){target=_blank} under 2048.

For example, if the MaxSize is set to 128, the new image will be generated as MaxSize value being 128.

![ExportCompressedTexture_2](img/ExportCompressedTexture_2.jpg)

To use the tool, select the texture on Project, and select ”ExportCompressedTexture” on the right-click menu. Note that multiple images can be selected for compression.

![ExportCompressedTexture_1](img/ExportCompressedTexture_1.jpg)

![ExportCompressedTexture_3](img/ExportCompressedTexture_3.jpg)

As the dialog above will show on generating the texture, selecting "Yes" will search all materials referencing the original material, and replace it to the generated texture.

![ExportCompressedTexture_4](img/ExportCompressedTexture_4.jpg)

The generated image will be output to the original image's directory as ”<Original Texture's Name>_comp.png”.

![ExportCompressedTexture_5](img/ExportCompressedTexture_5.jpg)
