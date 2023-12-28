# VketCloudの仕様制限

VketCloudで使用するワールドモデル等はUnityでセットアップします。ただし、Unityの機能がすべて使用できるわけではないため、後述する仕様に合わせて調整をおこなう必要があります。

## ポリゴン

ワールドに配置するモデルは、合計８０万トライアングル以下にしてください。

## テクスチャ

Vket Cloudでは以下のフォーマットのテクスチャ画像が使用できます。

* 大きさが2048x2048以下のpng
* ２の累乗サイズの正方形（2048x2048,1024x1024,512x512等）または2の累乗サイズの長方形
* ビット深度は24bitまたは32bit
* png換算で80MB以下
* 拡張子は小文字(.png)にする。”.PNG”になっているとサーバーアップロードでエラーが出ることがあります。

また、SDKでは画像の変換ツールとして[Export Compressed Texture](../SDKTools/ExportCompressedTexture.md)を用意しています。

## テクスチャ圧縮

VketCloudでは軽量化の方法の一つとしてテクスチャを圧縮するようにしています。詳しくは [こちら](../heoexporter/he_TextureCompression.md)をご覧ください。

## リフレクションプローブ

VketCloudではUnityのリフレクションプローブを使用することができます。詳しくは[こちら](ReflectionProbe.md)をご覧ください。

## Directional Light

`Directional Light`に設定されているIntensityの値（下記画像参照）はワールドに反映されないためご注意ください。<br>
ライトの強弱は[HEOWorldSetting](../HEOComponents/HEOWorldSetting.md)内の`LightColor`の色を`Directional Light`側の色と重ね合わせることで表現が可能です。

![Rendering_2](../HEOComponents/img/HEOWorldSetting_Rendering_2.jpg)

## ライトマップ

* Android(dLDRフォーマット) または PC(RGBMフォーマット)  プラットフォームに切り替える
* Other SettingsのLightMap EncodingがAndroidプラットフォームの場合『Low Quality』、PCプラットフォームの場合『Normal Quality』になっているか確認する
* LightMap  Encodingが間違っている場合、ライトマップが白飛びすることがあるので注意してください
* リアルタイムのグローバルイルミネーションはサポートしていないので、ライトマップで表現してください(UnityとVketCloudで見た目が違う場合、ほとんどはGI周りが原因だと思います)
* Other Settings の Color Spaceが『Linear』になっているか確認する

![UnityGuidelines_1](./img/UnityGuidelines_1.jpg)

* Max Lightmap Sizeは2048以下にする
* ライトマップの圧縮は無効にする
* Format: RGB24またはRGBA32、Compressed: Noneになっているか確認する

![UnityGuidelines_2](./img/UnityGuidelines_2.jpg)

* Unlit系のシェーダーが適用されているオブジェクトはライトベイクに対応していません。<br>
  SDKではUnlit系シェーダーを使用しているオブジェクトを[ライトベイクの対象から外すツール](../WorldEditingTips/DisableContributeGITool.md)を用意しています。

## シェーダー

- Standard
- Autodesk Interactive
- MToon
- Unlit
- UnlitWF（両面表示等のみ対応）
- VketCloudSDKに含まれるVketChanDoubleSided系のシェーダー

!!! note
    Autodesk Interactiveのメタリックテクスチャは、テクスチャスロット数の都合上、使用できません。メタリックテクスチャとラフネステクスチャを組み合わせて使用する場合は、Standard Shaderを使用してください。

## コライダー

* 衝突判定用はBoxColliderとMeshColliderのみ対応。MeshColliderは処理に非常に負荷がかかるため使用は必要最低限にしてください。BoxColliderはTPSモード時にプレイヤーアバターとカメラの間に位置するオブジェクトによって遮断されるのを防ぐためにも利用しているため、天井など移動出来ない場所でも設定して下さい。MeshColliderの書き出し方法については[こちら](../HEOComponents/HEOMeshCollider.md)をご覧ください。
* SphereColliderはクリック（タップ）判定用にのみ使用しています。（ポスターなど）
* ヒエラルキーのネストが深いとコライダーが出力されない場合があります。
* 膝下ぐらいのコライダーは登れてしまいます。しかし、大きすぎるコライダーはカメラの妨げになるので、気を付けてください。
* 必ずMeshRendererを非表示にしてください。Materialsのsizeを０にして非表示にすると、出力エラーとなります。

## スカイボックス

* スカイボックスは非対応です。使わない、もしくは天球などでごまかす必要があります。

## スケール

* マイナススケールにすると、メッシュが裏返しになり法線が反転します。Unity上との見た目と異なり、ワールドでは内側にメッシュが描画されるためご注意ください。<br>
* なお、マイナススケールのオブジェクトがある場合は[デバッグコンソール](../debugconsole/debugconsole.md)にて警告が生成されます。<br>
* 意図的でないマイナススケールのオブジェクトについては設定の修正をおすすめします。

## オブジェクト

* シーン内に同名のオブジェクトの配置は基本的に非推奨です。名前が被るような場面の際はObject_1, Object_2...のように通し番号をふることをおすすめします。
* HEOExportは複数選択に対応していません。<br>１つのオブジェクトとしてエクスポートするには、親オブジェクトを作成しその中に対象のオブジェクトを格納して、親オブジェクトをエクスポートしてください。
