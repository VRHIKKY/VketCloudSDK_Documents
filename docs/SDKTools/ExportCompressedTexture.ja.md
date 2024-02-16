# Export Compressed Texture

![ExportCompressedTexture_1](img/ExportCompressedTexture_1.jpg)

Export Compressed Textureはpng以外 / 縦横サイズが2の累乗でないテクスチャ画像をVket Cloudの仕様の下で動作させるために圧縮させるツールです。<br>
Vket Cloudで使える画像の仕様については[VketCloudの仕様制限](../WorldMakingGuide/UnityGuidelines.md)をご参照ください。

ツールを起動すると画像をpngに変換するほか、変換前の画像のプロパティにて[Non-PowerOf2](https://docs.unity3d.com/ja/2019.4/Manual/class-TextureImporter.html){target=_blank}をnone以外に自動で設定します。

また、[MaxSize](https://docs.unity3d.com/ja/2019.4/Manual/class-TextureImporter.html){target=_blank}を2048以下に設定することで自動で画像サイズを変更します。画像サイズの縮小によって、[テクスチャ圧縮](../WorldOptimization/TextureCompression.md)とロード時間の削減を行うことができます。

変換された画像は元画像と同じディレクトリに”<元テクスチャ名>_comp.png”という名前で出力されます。
また、後述の変換後に出現するウィンドウにて"Yes"を選択すると、Scene内のマテリアルにて変換前の画像が参照されている場合は全て変換後の画像に自動で差し替えます。

## 使用方法

下準備として、変換後の画像サイズをさらに圧縮したい場合は予め元画像の[MaxSize](https://docs.unity3d.com/ja/2019.4/Manual/class-TextureImporter.html){target=_blank}を2048以下に設定しておきます。

例として、MaxSizeを2048以下（例えば256等）に設定した場合、最大サイズが256で書き出されます。

![ExportCompressedTexture_2](img/ExportCompressedTexture_2.jpg)

Project上でテクスチャを選択した状態で、右クリックメニューの”ExportCompressedTexture”から実行できます。このとき、複数選択してまとめて圧縮することもできます。

![ExportCompressedTexture_1](img/ExportCompressedTexture_1.jpg)

![ExportCompressedTexture_3](img/ExportCompressedTexture_3.jpg)

テクスチャ出力後に上記のダイアログが出るのでYesを選択すると、Project内の全てのマテリアルを検索して元テクスチャの参照を圧縮後テクスチャと差し替えできます。

![ExportCompressedTexture_4](img/ExportCompressedTexture_4.jpg)

圧縮後のテクスチャは元テクスチャと同じディレクトリに”<元テクスチャ名>_comp.png”という名前で出力されます。

![ExportCompressedTexture_5](img/ExportCompressedTexture_5.jpg)
