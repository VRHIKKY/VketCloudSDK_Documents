# スカイボックス設定

VketCloudSDKでは、UnityのSkyBoxを出力することは出来ません。そのため、BoxまたはSphereの面を反転させたオブジェクトを配置して、擬似的なスカイボックスとして出力することで代用します。

!!! note info
    マテリアルのシェーダーは「Unlit/Texture」を選択すると、陰が出来ずに綺麗に出力できます。

    ![Skybox](img/Skybox.jpg)  
  
    コントロールパネル（VketCloudSDKメニュー > Control Panel）からチュートリアルシーン（Basic）をインストールすると、Skyboxのサンプルを使用できます。

    ![ControllPanel](img/ControlPanel.jpg)
