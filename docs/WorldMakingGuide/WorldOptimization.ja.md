# ワールドの軽量化方法：概要

VketCloudSDKでは、PCブラウザ・スマートフォンにて快適にワールドを動作させるためにいくつかの軽量化方法を用意しております。

## オクルージョンカリング
[オクルージョンカリング](./OcclusionCulling.md)ではプレイヤーの視界内にある遮蔽物（例：巨大なビル、壁、etc...)の向こうに置かれているオブジェクトの描画を切り、最適化と軽量化を行うことができます。

![OcclusionCulling_Result](img/OcclusionCulling_Result.gif)

## テクスチャ圧縮

[テクスチャ圧縮](../heoexporter/he_TextureCompression.md)ではワールド内で使用されているテクスチャに外部ツールを用いた圧縮を行う方法を案内しています。