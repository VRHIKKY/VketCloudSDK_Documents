# スカイボックス設定

!!! note "クイックメニューによるSkybox Prefab及びBackgroundTextureの追加"
    Ver12.3にて、Skybox及びBackground Textureがシーンに簡単に追加できるクイックメニューが追加されました。<br>
    詳しくは[Vket Cloudオブジェクト追加のためのクイックメニュー](../WorldEditingTips/QuickMenu.md)をご参照ください。

!!! note "HEOBackgroundTextureについて"
    背景を実装する別の方法として、背景テクスチャを設定する[HEOBackgroundTexture](../HEOComponents/HEOBackgroundTexture.md)があります。

---

VketCloudSDKでは、UnityのSkyBoxを出力することは出来ません。そのため、BoxまたはSphereの面を反転させたオブジェクトを配置して、擬似的なスカイボックスとして出力することで代用します。

!!! note info
    マテリアルのシェーダーは「Unlit/Texture」を選択すると、陰が出来ずに綺麗に出力できます。

    ![Skybox](img/Skybox.jpg)  
  
    コントロールパネル（VketCloudSDKメニュー > Control Panel）からチュートリアルシーン（Basic）をインストールすると、Skyboxのサンプルを使用できます。

    ![ControllPanel](img/ControlPanel.jpg)
