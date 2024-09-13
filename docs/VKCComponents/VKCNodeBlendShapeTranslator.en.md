# VKC Node Blend Shape Translator

![VKCNodeBlendShapeTranslator_1](img/VKCNodeBlendShapeTranslator_1.jpg)

The VKCNodeBlendShapeTranslator is a component used when exporting HEM character motion.

The exported HEM file can be used to play animations for preset avatars or VKCItemObjects.

![VKCNodeBlendShapeTranslator_2](img/VKCNodeBlendShapeTranslator_2.jpg)

To export the HEM file, add the HEOExporter/HEOInfo component to the character, modify the size of the `BlendShapeTransNameTable`, and set the `SrcName` and `DestName` fields to the name before and after the conversion, respectively.

![VKCNodeBlendShapeTranslator_3](img/VKCNodeBlendShapeTranslator_3.jpg)

| Label | Function |
| ---- | ---- | 
| Src Name | Motion name before conversion |
| Dest Name | Motion name after conversion |

When the HEM file is exported in this state, the blend shape names will be output with the converted names.

![VKCNodeBlendShapeTranslator_4](img/VKCNodeBlendShapeTranslator_4.jpg)
