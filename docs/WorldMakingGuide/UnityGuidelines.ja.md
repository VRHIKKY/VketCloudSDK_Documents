# VketCloudの仕様制限

VketCloudで使用するワールドモデル等はUnityでセットアップします。ただし、Unityの機能がすべて使用できるわけではないため、後述する仕様に合わせて調整をおこなう必要があります。

## ポリゴン

ワールドに配置するモデルは、目安として合計80万トライアングル以下にしてください。<br>
アバターをワールド内に配置した場合、アバターのトライアングル数も含みます。<br>
プレイヤーのアバターのトライアングル数はこの制限には含みません。

## テクスチャ

Vket Cloudでは以下のフォーマットのテクスチャ画像が使用できます。<br>

- 大きさが2048x2048以下のpng形式のファイル　※jpg, psd形式などは使えません
- ２の累乗サイズの正方形（2048x2048,1024x1024,512x512等）または2の累乗サイズの長方形
- ビット深度は24bitまたは32bit
- png換算で80MB以下

また、SDKでは画像の変換ツールとして[Export Compressed Texture](../SDKTools/ExportCompressedTexture.md)を用意しています。

!!! caution "Sprite Rendererについて"
    Vket CloudではUnityの[Sprite Renderer](https://docs.unity3d.com/ja/2019.4/Manual/class-SpriteRenderer.html){target=_blank}に対応しておりません。

## テクスチャ圧縮

Vket Cloudでは軽量化の方法の一つとしてテクスチャを圧縮するようにしています。詳しくは [こちら](../WorldOptimization/TextureCompression.md)をご覧ください。

## リフレクションプローブ

Vket CloudではUnityのリフレクションプローブを使用することができます。詳しくは[こちら](ReflectionProbe.md)をご覧ください。

## Directional Light

`Directional Light`に設定されているIntensityの値（下記画像参照）はワールドに反映されないためご注意ください。<br>
ライトの強弱は[HEOWorldSetting](../VKCComponents/HEOWorldSetting.md)内の`LightColor`の色を`Directional Light`側の色と重ね合わせることで表現が可能です。

![Rendering_2](../VKCComponents/img/HEOWorldSetting_Rendering_2.jpg)

!!! caution "Realtime Lightについて"
    Vket CloudではRealtime Modeのライトに対応しておりません。必ずMixedまたはBakedに変更してご使用ください。

## ライトマップ

Vket Cloudではライトマップを使用する際は以下のフォーマットに従う必要があります。

- Other SettingsのLightMap Encodingが「Normal Quality」になっているか確認する
 *LightMap Encodingが間違っている場合、ライトマップが白飛びすることがあるので注意してください
- リアルタイムのグローバルイルミネーションはサポートしていないので、ライトマップで表現してください(UnityとVket Cloudで見た目が違う場合、ほとんどはGI周りが原因だと思います)
- Other Settings の Color Spaceが「Linear」になっているか確認する

VketCloudSDKでは、上記の環境設定を推奨設定としております。<br>
詳しい設定方法は[VketCloudSDKの動作環境](../AboutVketCloudSDK/OperatingEnvironment.md)を参照してください。

![UnityGuidelines_1](./img/UnityGuidelines_1.jpg)

- Max Lightmap Sizeは2048以下にする
- ライトマップの圧縮は無効にする
- Format: RGB24またはRGBA32、Compressed: Noneになっているか確認する

![UnityGuidelines_2](./img/UnityGuidelines_2.jpg)

- Unlit系のシェーダーが適用されているオブジェクトはライトベイクに対応していません。<br>
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

!!! note "対応しているシェーダー項目について"
    VketCloudSDKではシェーダーの設定項目において対応しているものとしていないものが存在します。<br>
    詳細は[シェーダー対応項目一覧](ShaderAvailability.md)をご覧ください。

## コライダー

- 衝突判定用はBoxColliderとMeshColliderのみ対応。MeshColliderは処理に非常に負荷がかかるため使用は必要最低限にしてください。BoxColliderはTPSモード時にプレイヤーアバターとカメラの間に位置するオブジェクトによって遮断されるのを防ぐためにも利用しているため、天井など移動出来ない場所でも設定して下さい。MeshColliderの書き出し方法については[こちら](../VKCComponents/VKCNodeMeshCollider.md)をご覧ください。
- SphereColliderはクリック（タップ）判定用にのみ使用しています。（ポスターなど）
- ヒエラルキーのネストが深いとコライダーが出力されない場合があります。
- 膝下ぐらいのコライダーは登れてしまいます。しかし、大きすぎるコライダーはカメラの妨げになるので、気を付けてください。
- 必ずMeshRendererを非表示にしてください。Materialsのsizeを０にして非表示にすると、出力エラーとなります。

## スカイボックス

- スカイボックスは非対応です。使わない、もしくは天球などでごまかす必要があります。

背景の実装方法としては[天球オブジェクト](Skybox.md)を用意する方法と、[VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)コンポーネントを使用する方法があります。

## スケール

- マイナススケールにすると、メッシュが裏返しになり法線が反転します。Unity上との見た目と異なり、ワールドでは内側にメッシュが描画されるためご注意ください。<br>
- なお、マイナススケールのオブジェクトがある場合は[デバッグコンソール](../debugconsole/debugconsole.md)にて警告が生成されます。<br>
- 意図的でないマイナススケールのオブジェクトについては設定の修正をおすすめします。-

## オブジェクト

- シーン内に同名のオブジェクトの配置は基本的に非推奨です。名前が被るような場面の際はObject_1, Object_2...のように通し番号をふることをおすすめします。
- HEOExportは複数選択に対応していません。<br>１つのオブジェクトとしてエクスポートするには、親オブジェクトを作成しその中に対象のオブジェクトを格納して、親オブジェクトをエクスポートしてください。

## アバター

Vket Cloudにてアバターを使用するには、1. [My Vketにてマイアバターを設定](../AboutVketCloudSDK/SetupAvatar.md)するか、2. ワールドの[プリセットアバター](../WorldMakingGuide/PresetAvatar.md)を利用する方法があります。

それぞれの設定・利用方法は以下のページをご確認ください。

1. [アバターの使用方法](../AboutVketCloudSDK/SetupAvatar.md)

2. [プリセットアバターを追加する](../WorldMakingGuide/PresetAvatar.md)

!!! caution "DefaultのAvatarFileが編集できる現象について"
    特定の手順によって、デフォルトで設定されているAvatarFile(`Vketchan_v1.6_Mtoon_blendshape`)の設定が編集できる現象が確認されています。<br>
    デフォルトのアバターを編集するとSDKが意図していない動作を起こす可能性があるため、プリセットアバターを追加する際は必ず新しいAvatarFileを追加してください。<br>
    この時デフォルトのアバターはパッケージによって保護されているため、Unity再起動時には設定がリセットされます。編集はお控えください。

## オーディオファイルのフォーマット

オーディオファイルを使用する場合、以下のフォーマットに従ってください。

| 名称 | 詳細 |
| ---- | ---- |
| ファイル形式 | mp3 |
| サンプリングレート | 44100 Hz |
| ビットレート | 160 kbps |

!!! note caution
    BGMは以下の点に注意が必要です。

    - 動画再生時には、動画の音声が優先されます。
    - 距離減衰には対応していません。

## 動画ファイルのフォーマット

動画ファイルを使用する場合、以下のフォーマットに従ってください。

| 名称 | 詳細 |
| ---- | ---- |
| ファイル形式 | .mp4 |
| 解像度 | 1280x720 H.264 |
| AAC | 44.1kHz |
| フレームレート | 29.97 or 30 |
| プロファイルレベル | 4.1, AAC 44.1kHz, yuv420 |

## VKC Item Text Planeのテキスト

VKC Item Text Paneにおいて、以下の項目については入力時に注意が必要です。

正規表現の"\n"以外の文字列（例えば、タブ "\t"、改行 "\r"、バックスペース "\b"）を入力した場合、ビルドエラーが発生します。
