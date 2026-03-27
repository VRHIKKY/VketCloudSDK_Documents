# HCSL(Heliodor Custom Shader Language)

## 概要
Heliodorがカスタムシェーダーに対応しました。  
HCSL(Heliodor Custom Shader Language)というHeliodor独自のシェーダー言語です。

## 実装

### Shaderコンパイル

1. プロジェクトビューを右クリックし、「Create → Shader → UnlitShader」でShaderLabを作成し名前を「sample」とつけます

    ![Create UnlitShader](img/customshader01.jpg)

2. 生成されたsampleシェーダーを右クリックし、Materialボタンからマテリアルを作ります。同様に名前はsampleとします

    ![Create Material](img/customshader02.jpg)

3. 次にUnityシーン上に1つ適当なPlaneをHCSL_Testの子要素として追加し、WavePlaneの横あたりに配置します

    ![Add Plane](img/customshader03.jpg)

4. そして先ほどのsampleマテリアルをPlaneにアタッチします。また、メッシュコライダーは邪魔なので外しておきます

5. 次にWavePlane.hcslをCtrl + Dで複製し名前をsampleにリネームします

    ![Duplicate HCSL](img/customshader04.jpg)

6. sample.hcslをダブルクリックして任意のエディタを開きます

    !!! note "注意"
        Shift JISで開きます

7. hcsl内のシェーダー名をsampleに変更し保存します

    ![Edit HCSL](img/customshader05.jpg)

8. 次に、Planeに対してAddComponentよりHEOCustomShaderコンポーネントをアタッチします

    ![Add Component](img/customshader06.jpg)

9. そしてsampleマテリアルとsample.hcslをアタッチします

    ![Attach Files](img/customshader07.jpg)

10. HEOCustomShaderの3点ボタンを押下しその中のCompileボタンを探して押下します

    ![Compile](img/customshader08.jpg)

11. するとHCSLがShaderLabに変換されます。UnityコンソールにSuccess!!と出ていれば成功です

    ![Success](img/customshader09.jpg)

### インゲームでHCSLを使用する

1. HCSL_Testを選択しVketCloudSDK → Export FieldでHEOをエクスポートします

    ![Export Field](img/customshader10.jpg)

2. HEOは「release/data/Field/HCSL_Test」にエクスポートします

    ![Export Path](img/customshader11.jpg)

3. 作成したsample.hcslを「release/data/Shaders」にコピーします

    ![Copy HCSL](img/customshader12.jpg)

4. `release\data\Scene\streamingvideo.json` を何かしらのテキストエディタで開きます

    ![Open JSON](img/customshader13.jpg)

5. するとshadersというフィールドがあるのでそこに先ほど追加したsample.hcslのパスを追加します `"Shaders/sample.hcsl"`

    ![Edit JSON](img/customshader14.jpg)

6. 最後に準備編でやった時と同じようにローカルホストを立ててインゲームに入室し、作成したシェーダーが反映されていれば完了です

    ![In Game](img/customshader15.jpg)
