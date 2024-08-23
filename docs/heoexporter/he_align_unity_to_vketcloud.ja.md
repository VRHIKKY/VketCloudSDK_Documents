# UnityとVketCloudの見た目を揃える

VketCloudではglobal illuminationなどまだ一部対応できていない機能があります。下記の設定をすることでUnity側とVketCloud側の見た目を揃えることができます。

## グローバルイルミネーションについて

VketCloudではリアルタイムのグローバルイルミネーションをサポートしていないので、そちらはライトマップで表現してください。[Unity制作ガイドライン/ライトマップ](../WorldMakingGuide/UnityGuidelines.md#_6) (UnityとVketCloudで見た目が違う場合、ほとんどはGI周りが原因だと思います)

## SkyboxをNoneにする

Skyboxを使用していないのであればUnityではLight SettingsのSkyboxの色味がglobal illuminationで乗ってしまうのでNoneにしてください。
※リフレクションプローブの撮影でSkyboxを使用する時はオンにしていただいて大丈夫です([リフレクションプローブの作成](../WorldMakingGuide/ReflectionProbe.md))

![SetSkyboxToNone.jpg](he_image/SetSkyboxToNone.jpg)

## StandardShaderの設定を変更する

VketCloudの物理ベースレンダリングは、UnityのMediumレベルのものと同じアルゴリズム(GGX)を使用しているので、設定を揃える必要があります。

1. 「Edit/ProjectSettings/Graphics」を開く

    ![OpenGraphics.jpg](he_image/OpenGraphics_1.jpg)

    ![OpenGraphics.jpg](he_image/OpenGraphics_2.jpg)

2. 「Tier Settings」のLow、Medium、Highそれぞれの「Use Defaults」のチェックを外す

    ![TierSettings.jpg](he_image/TierSettings.jpg)

3. 「Tier Settings」のLow、Medium、Highそれぞれの「Standard Shader Quality」をすべて「Medium」に変更する

    ![StandardShaderQuality.jpg](he_image/StandardShaderQuality.jpg)

## カラースペースがリニアになっていることを確認する

「Edit/Project Settings/Player/Other Settings」を開き、Color Spaceが「Linear」になっていることを確認する
![ColorSpace.jpg](he_image/ColorSpace.jpg)
