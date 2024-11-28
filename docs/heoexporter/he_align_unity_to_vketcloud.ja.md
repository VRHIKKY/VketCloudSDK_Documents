# UnityとVket Cloudの見た目を揃える

## 概要

Unityのライティング設定によっては、Unityの見た目と、Vket Cloudシーンビルド後の見た目が異なることがあります。
本ページではその現象を発生しなくする方法について記載します。

!!! info
    SDKバージョン : 4.1.4<br>
    OS : Windows 10<br>
    Unity : 2019.4.31.f1<br>
    ブラウザ : Google Chrome

## 方法

## ①グローバルイルミネーションの確認

Vket Cloudではリアルタイムのグローバルイルミネーションをサポートしていないので、そちらはライトマップで表現してください。

[Unity制作ガイドライン/ライトマップ](../WorldMakingGuide/UnityGuidelines.md#_6) (UnityとVket Cloudで見た目が違う場合、ほとんどはGI周りが原因だと思います)

| Unity上のグローバルイルミネーション設定 | Vket Cloudビルド後の画面 |
| ---- | ---- |
| ![he_align_unity_to_vketcloud_1](he_image/he_align_unity_to_vketcloud_1.jpg) | ![he_align_unity_to_vketcloud_2](he_image/he_align_unity_to_vketcloud_2.jpg) |

!!! info "グローバルイルミネーションについて"
    Emissionを設定しているマテリアルと、Mesh RendererのContribute Global Illuminationにチェックが付いた状態でライトマップを作成すると、上記左のように、グローバルイルミネーションが作成できます。<br>
    Vket Cloudでは誤作動の原因になりがちなので、Contribute Global Illuminationは使用しないようにしましょう。

![he_align_unity_to_vketcloud_3](he_image/he_align_unity_to_vketcloud_3.jpg)


| グローバルイルミネーション未設定＠Unity | 未設定＠Vket Cloud |
| ---- | ---- |
| ![he_align_unity_to_vketcloud_4](he_image/he_align_unity_to_vketcloud_4.jpg) | ![he_align_unity_to_vketcloud_5](he_image/he_align_unity_to_vketcloud_5.jpg) |

グローバルイルミネーションが無い時は、Unity・Vket Cloudで差異が生じません。<br>
特に多いのが、*Unlit/Textureに設定しているにもかかわらず、ライトマップの影響を受け、黒ずむ*というパターンです。

## ②SkyboxをNoneにする

Skyboxを設定した状態でライティングを行うと、各オブジェクトがContribute Global Illuminationの設定をfalseにしていても、Skyboxの色味が反映されてしまいます。

![he_align_unity_to_vketcloud_6](he_image/he_align_unity_to_vketcloud_6.jpg)

上記画像のように、Unity画面上では真っ黄色になっていても…

![he_align_unity_to_vketcloud_7](he_image/he_align_unity_to_vketcloud_7.jpg)

ビルド後のシーンはこの通り。Skyboxの影響は一切受け付けません。<br>
Vket CloudではSkyboxは使用できないため、不要なSkyboxが入っている場合、None或いはDefault-Skyboxにしましょう。

## ③StandardShaderの設定を変更する

Vket Cloudの物理ベースレンダリングは、UnityのMediumレベルのものと同じアルゴリズム(GGX)を使用しているので、設定を揃える必要があります。

1. 「Edit/ProjectSettings/Graphics」を開く

    ![OpenGraphics.jpg](he_image/OpenGraphics_1.jpg)

    ![OpenGraphics.jpg](he_image/OpenGraphics_2.jpg)

2. 「Tier Settings」のLow、Medium、Highそれぞれの「Use Defaults」のチェックを外す

    ![TierSettings.jpg](he_image/TierSettings.jpg)

3. 「Tier Settings」のLow、Medium、Highそれぞれの「Standard Shader Quality」をすべて「Medium」に変更する

    ![StandardShaderQuality.jpg](he_image/StandardShaderQuality.jpg)

##  プラットフォームに適したライトマップフォーマットが設定されていることを確認する

[Unity制作ガイドライン/ライトマップ](../WorldMakingGuide/UnityGuidelines.md#_6) にあるように、PCとAndroidで適切なライトマップフォーマットが異なり、設定を間違えていると、白飛びが発生してしまいます。

![he_align_unity_to_vketcloud_8](he_image/he_align_unity_to_vketcloud_8.jpg)

プラットフォーム : PCでAndroid向けのライトマップフォーマットの設定を行っていた場合

## カラースペースがリニアになっていることを確認する

「Edit/Project Settings/Player/Other Settings」を開き、Color Spaceが「Linear」になっていることを確認する
![ColorSpace.jpg](he_image/ColorSpace.jpg)
 
| 設定前 | 設定後 |
| ---- | ---- |
| ![he_align_unity_to_vketcloud_9](he_image/he_align_unity_to_vketcloud_9.jpg) | ![he_align_unity_to_vketcloud_10](he_image/he_align_unity_to_vketcloud_10.jpg) |
