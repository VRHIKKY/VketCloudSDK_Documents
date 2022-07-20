## リフレクションプローブについての概要
〇リフレクションプローブの使い方についてはUnityの公式ドキュメント等をご覧ください。[リフレクションプローブ  - Unity マニュアル](https://docs.unity3d.com/ja/2018.4/Manual/class-ReflectionProbe.html) リフレクションプローブの個数制限は特にありませんが、リフレクションプローブ1つあたり6枚テクスチャを使用します。個数が増えるほど負荷が掛かるので負荷と描画のバランスを見て個数を指定してください。 UnityのStandard Shaderの使用を想定しています。

<img src="he_image/スクリーンショット 2022-05-13 122859.png">

〇 使用するリフレクションプローブはプリミティブ単位ではなくUnity Hierarchy Viewのオブジェクト単位で決定されます。オブジェクトのMeshRenderer/Probesの項目に羅列されているリフレクションプローブの中で「一番Weightの数値が大きいもの」がそのオブジェクトが使用するリフレクションプローブのインデックスとして書き出されるのでご注意ください。こちらの数値はリフレクションプローブとオブジェクトの距離を基準に計算されます。またリフレクションプローブのブレンドはサポートしていません。

<img src="he_image/スクリーンショット 2022-05-13 123111.png">

## リフレクションプローブの書き出し方法
1.  リフレクションプローブを以下のように設定し「Bake」を押します。

 Type: Baked <p>
 HDR: *チェック無し* <p>
 Resolusion:  任意 (負荷と反射させる面の大きさを考慮して指定してください) <p>
<img src="he_image/スクリーンショット 2022-05-13 124848.png">
2. Bakeを押した後に「リフレクションプローブ用」のキューブマップが作成されますのでそちらの設定項目にある「Advanced→Read/Write Enabled」にチェックを入れて『Apply』を押します。(キューブマップの書き出しに必要です)

<img src="he_image/スクリーンショット 2022-05-13 125158.png">
3.  HEOExporterにてエクスポートしたいオブジェクトの一番親の階層のオブジェクト(VketCloudSample)に「HEOReflectionProbe.cs」をアタッチします。その後インスペクタービューの「HEOReflectionProbe/ReflectionProbes」にエクスポートしたいリフレクションプローブを任意の数アタッチします。

<img src="he_image/スクリーンショット 2022-05-13 125438.png">
4. リフレクションプローブのオブジェクトを必ずこれからエクスポートするオブジェクトの子要素にしてください。(リフレクションプローブではTransformを使用することがあるため一緒にエクスポートする必要があります)

<img src="he_image/スクリーンショット 2022-05-13 125825.png">
5. HEOExporterにてExportを実行します

<img src="he_image/スクリーンショット 2022-05-13 125948.png">
6.  エクスポート後にheoと一緒に作成される「tex_reflection_cube/」の中にキューブマップが書き出せているかを確認してください。

<img src="he_image/スクリーンショット 2022-05-13 130114.png">

<img src="he_image/スクリーンショット 2022-05-13 130144.png">

このHEOファイルをVketCloudで読み込んで表示したサンプルは以下のものになります。

<img src="he_image/ReflectionProbe_Sample.png">

## Box Projection(カメラ位置により移動する反射)について
〇概要
VketCloudではUnity リフレクションプローブのBox Projectionを任意で使用することができます。Box Projectionについては、Unityの公式ドキュメントなどをご覧ください。([リフレクションプローブ  - Unity マニュアル ](https://docs.unity3d.com/ja/2019.4/Manual/class-ReflectionProbe.html))

<<エクスポート方法>>

1. Unityのリフレクションプローブの『Box Projection』にチェックを入れる(LightMapを使用している場合、押せないことがあります)
<img src="he_image/スクリーンショット (661).png">
2. リフレクションプローブのオブジェクトを必ずこれからエクスポートするオブジェクトの子要素にする(Box ProjectionはTransformを使用するため)
<img src="he_image/スクリーンショット 2022-05-13 125825.png">
3. 上記の『リフレクションプローブの書き出し方法』に従い、エクスポートを実行する

## リフレクションプローブを書き出す際の注意点
* 大きめのオブジェクト(床・壁・面が巨大なオブジェクト)にリフレクションプローブの反射を使用する場合は、BakeするCubemapの『Resolution』を高めに設定してください(2048など)。Unityでもそうですが、大きめのオブジェクトに反射させる場合、画質が大幅に低下してしまうためです。

* もしUnity上では反射があるのにVketCloud上では真っ黒になってしまうオブジェクトがある場合、そのオブジェクトに作用するリフレクションプローブが『HEOReflectionProbe』のReflectionProbesに登録されているか・そのリフレクションプローブがUnity上で非表示になっていないかを確認してください。
