# テクスチャ圧縮

Vket Cloudでは、ワールド内のオブジェクトやアバターに使用されているテクスチャの容量を削減することで、ワールド読み込み時にかかる処理時間を大きく改善させることができます。

将来のアップデートによってサーバー側で画像の自動圧縮・フォーマットが行われる予定ですが、ワールドの実装者が画像の最適化を行うことで、より多様なPC・スマートフォンのスペック環境にて快適な動作を実現できます。

## テクスチャ圧縮を行う方法

### Texture Import Viewer

![TextureImportViewer_1](../SDKTools/img/TextureImportViewer_1.jpg)

!!! bug "Ver9.11でのTexture Import Viewerの動作について"
    SDK Ver9.11ではTexture Import Viewerは動作しない状態が確認されています。<br>
    恐れ入りますが、本機能を使用したい際は[Ver12.x以降のSDK](../AboutVketCloudSDK/SetupSDK_external.md#sdk)をご使用ください。

[Texture Import Viewer](../SDKTools/TextureImportViewer.md)は、プロジェクト内にあるテクスチャのインポート設定や圧縮サイズなどを一覧で確認できるVketCloudSDK独自のビューワーツールです。

Viewer上からテクスチャのインポート設定をまとめて変更したり、あるいは容量順に並び替えたりすることもできます。<br>
また、リスト上で各テクスチャ設定項目を編集し、設定をまとめて保存もしくは後述の[Export Compressed Texture](../SDKTools/ExportCompressedTexture.md)と同じ手法でテクスチャファイルのエクスポート・画像差し替えが行えます。

まとめて画像の再フォーマットを行いたい際に便利なツールです。

詳細な操作方法については[Texture Import Viewer](../SDKTools/TextureImportViewer.md)をご参照ください。

### Export Compressed Texture

![ExportCompressedTexture_1](../SDKTools/img/ExportCompressedTexture_1.jpg)

VketCloudSDKでは、テクスチャ圧縮・フォーマットツールとして[Export Compressed Texture](../SDKTools/ExportCompressedTexture.md)が用意されています。

本ツールはテクスチャ画像に設定されている[MaxSize](https://docs.unity3d.com/ja/2019.4/Manual/class-TextureImporter.html){target=_blank}を基に圧縮された画像を生成するものです。

このとき、png以外 / 縦横サイズが2の累乗でないテクスチャ画像はフォーマットが自動で変更され、変換前の画像がマテリアルに参照されている場合はツールを通じて新たに生成された画像と差し替えを行うこともできます。

![ExportCompressedTexture_2](../SDKTools/img/ExportCompressedTexture_2.jpg)

詳細な操作方法については[Export Compressed Texture](../SDKTools/ExportCompressedTexture.md)をご参照ください。

また、別の方法としてはpng画像圧縮用フリーソフト(例：[PNGGauntlet](https://pnggauntlet.com/){target=_blank})を利用するか、お手元のphotoshopなど編集ソフトで解像度下げを行う方法が考えられます。

お手元の環境や慣れている方法に応じて圧縮を行ってみてください。
