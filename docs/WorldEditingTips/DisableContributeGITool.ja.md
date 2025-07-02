# UnlitマテリアルのContributeGI設定を外す

Vket CloudではUnlitシェーダーが適用されたオブジェクトをライトベイクすると、結果としてUnityシーン上での表示よりも暗くなってしまいます。<br>
そこでVket Cloud SDKでは便利ツールとして、対象オブジェクトに設定されているContribute GI (ライトマップの対象となるための設定)をまとめて外すツールを用意しています。

## 使い方

例として、UnlitマテリアルがアタッチされていてStatic > ContributeGIが有効になっているオブジェクトを用意します。

![DisableContributeGITool_1](img/DisableContributeGITool_1.jpg)

Vket Cloud SDKタブを開き、Tools > Utility > Disable Contribute GI of Unlit Materialsを選択します。

![DisableContributeGITool_2](img/DisableContributeGITool_2.jpg)

選択するとツールが走り、ContributeGIが無効になります。
この状態で[ライトマップ](https://docs.unity3d.com/ja/2019.4/Manual/Lightmapping.html){target=_blank}をベイクします。

![DisableContributeGITool_3](img/DisableContributeGITool_3.jpg)