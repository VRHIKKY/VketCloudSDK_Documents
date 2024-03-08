# スカイボックス設定

![Skybox_1](img/Skybox_1.jpg)

VketCloudSDKでは、UnityのSkyboxを出力することは出来ません。そのため、BoxまたはSphereの法線を反転させたオブジェクトを配置して、擬似的なSkyboxとして出力することで代用します。

法線が反転されたオブジェクトはBlenderなどの3Dモデリングソフトを使用して用意する必要がありますが、SDKに内蔵されたチュートリアルシーンにおけるSkyboxオブジェクトを使用し、テクスチャを貼り替えることも可能です。

## 背景の設定方法

!!! note "クイックメニューによるSkybox Prefab及びBackgroundTextureの追加"
    Ver12.3にて、Skybox及びBackground Textureがシーンに簡単に追加できるクイックメニューが追加されました。<br>
    詳しくは[Vket Cloudオブジェクト追加のためのクイックメニュー](../WorldEditingTips/QuickMenu.md)をご参照ください。

1. VketCloudSDKメニュー > Tutorials > Tutorial -Basic-を選択してチュートリアルシーン（Basic）をインストールすると、チュートリアルシーンと使用されているアセットがダウンロードされます。
    ![Skybox_2](img/Skybox_2.jpg)

2. チュートリアルシーンにて使用されているSkyboxオブジェクトは「Assets > Samples > Vket Cloud SDK > [現在のSDKバージョン] > Tutorial -basic- > Used Files > Models」に格納されています。
    Modelsファイル内のSky_Sphereを選択し、ドラッグ＆ドロップによって制作中のシーンに配置します。

    ![Skybox_3](img/Skybox_3.jpg)

3. Sky_SphereのスケールはInspectorから変更できます。また、別のテクスチャを割り当てたい場合はInspector中のSkyboxマテリアルから差し替えることができます。
    ![Skybox_4](img/Skybox_4.jpg)

4. Build & Runを行い、Skyboxの反映を確認します。
    ![Skybox_5](img/Skybox_5.jpg)

## Tips

マテリアルのシェーダーは「Unlit/Texture」を選択すると、陰が出来ずに綺麗に出力できます。

![Skybox_1](img/Skybox_1.jpg)

!!! note "HEOBackgroundTextureについて"
    背景を実装する別の方法として、背景テクスチャを設定する[HEOBackgroundTexture](../HEOComponents/HEOBackgroundTexture.md)があります。

    ![HEOBackgroundTexture_2](../HEOComponents/img/HEOBackgroundTexture_2.jpg)
