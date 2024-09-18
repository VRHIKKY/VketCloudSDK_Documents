# VKC Node Blend Shape Translator

![VKCNodeBlendShapeTranslator_1](img/VKCNodeBlendShapeTranslator_1.jpg)

VKC Node Blend Shape TranslatorはHEMキャラモーション出力の時に使用するコンポーネントです。
出力したHEMファイルはプリセットアバターやVKCItemObjectでのアニメーションの再生に使用できます。

Humanoid側のアニメーションを作成した後、Legacyに変換するとBlendShape名が「eye_mabataki」など元のSkinnedMeshRendererのBlendShapes内の名前のままになっています。このままHEMファイルを出力しても、VRMファイルではそのBlendhape名が失われているため反映されません。

![VKCNodeBlendShapeTranslator_2](img/VKCNodeBlendShapeTranslator_2.jpg)

キャラクターにVKC Node Blend Shape Translatorコンポーネントを追加したうえでBlend Shape Trans Name Tableに新たな項目を追加し、SrcName/DestNameに変換前と変換後のモーション名を設定します。

![VKCNodeBlendShapeTranslator_3](img/VKCNodeBlendShapeTranslator_3.jpg)

| Label | 機能 |
| ---- | ---- | 
| Src Name | 変換前のモーション名 |
| Dest Name | 変換後のモーション名 |

この状態でHEMファイルを出力すると、BlendShape名が変換された状態で出力されます。

![VKCNodeBlendShapeTranslator_4](img/VKCNodeBlendShapeTranslator_4.jpg)
