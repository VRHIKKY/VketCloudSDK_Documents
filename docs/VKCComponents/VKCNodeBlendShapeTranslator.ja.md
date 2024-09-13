# VKC Node Blend Shape Translator

![VKCNodeBlendShapeTranslator_1](img/VKCNodeBlendShapeTranslator_1.jpg)

VKCNodeBlendShapeTranslatorはHEMキャラモーション出力の時に使用するコンポーネントです。

出力したHEMファイルはプリセットアバターやVKCItemObjectでのアニメーションの再生に使用できます。


![VKCNodeBlendShapeTranslator_2](img/VKCNodeBlendShapeTranslator_2.jpg)

そこで、HEMファイルを出力するキャラクターにHEOExporter/HEOInfoコンポーネントを追加し、BlendShapeTransNameTableのSizeを変更し、SrcName/DestNameに変換前と変換後の名前を設定します。

![VKCNodeBlendShapeTranslator_3](img/VKCNodeBlendShapeTranslator_3.jpg)

| Label | 機能 |
| ---- | ---- | 
| Src Name | 変換前のモーション名 |
| Dest Name | 変換後のモーション名 |

この状態でHEMファイルを出力すると、BlendShape名が変換された状態で出力されます。

![VKCNodeBlendShapeTranslator_4](img/VKCNodeBlendShapeTranslator_4.jpg)
