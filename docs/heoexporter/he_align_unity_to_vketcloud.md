VketCloudではglobal illuminationなどまだ一部対応できていない機能があります。下記の設定をすることでUnity側とVketCloud側の見た目を揃えることができます。

## SkyboxをNoneにする
UnityではLight SettingsのSkyboxの色味がglobal illuminationで乗ってしまうのでNoneにしてください
※リフレクションプローブの撮影でSkyboxを使用する時はオンにしていただいて大丈夫です([リフレクションプローブの作成](./he_ReflectionProbe.md))

<img src="he_image/SetSkyboxToNone.jpg">

## StandardShaderの設定を変更する
VketCloudの物理ベースレンダリングは、UnityのMediumレベルのものと同じアルゴリズム(GGX)を使用しているので、設定を揃える必要があります。

1. 「Edit/ProjectSettings/Graphics」を開く
<img src="he_image/OpenGraphics.jpg">
2.  「Tier Settings」のLow、Medium、Highそれぞれの「Use Defaults」のチェックを外す
<img src="he_image/TierSettings.jpg">
3. 「Tier Settings」のLow、Medium、Highそれぞれの「Standard Shader Quality」をすべて「Medium」に変更する
<img src="he_image/StandardShaderQuality.jpg>

## カラースペースがリニアになっていることを確認する
「Edit/Project Settings/Player/Other Settings」を開き、Color Spaceが「Linear」になっていることを確認する
<img src="he_image/ColorSpace.jpg">