# デバッグメッセージ一覧

ここでは[デバッグコンソール](debugconsole.md)にて表示されるエラー・アラートの一覧を示します。
なお、Unityの挙動に起因するビルドエラーなど、本一覧にないエラー・アラートはコンソール内の「未知」カテゴリーに分類・表示されます。

|ビルドエラー (⛔) / アラート (⚠)|メッセージカテゴリー|メッセージ内容|メッセージ修正の提案文|参照リンク|
|-----|-----|-----|-----|-----|
|Error|Unity Option Alert|お使いのUnityバージョンは、VketCloudSDKのサポート対象外です。|2019.4.31f1にバージョンを変更してください。|[Download Archive](https://unity.com/ja/releases/editor/archive#download-archive-2019){target=_blank} |
|Alert|Unity Option Alert|Color SpaceがLinearに設定されていません。ビルド後の見た目が大きく異なる可能性があります。|Color SpaceをLinearに設定してください。| [VketCloudSDKの動作環境](../AboutVketCloudSDK/OperatingEnvironment.md) |
|Alert|Unity Option Alert|Player設定のTier設定において、スタンダードシェーダーの品質レベルがMediumに設定されていません。ビルド後の見た目が大きく異なる可能性があります。|スタンダードシェーダーの品質をMediumに設定してください。|[Graphics - Unity マニュアル](https://docs.unity3d.com/ja/2019.4/Manual/class-GraphicsSettings.html){target=_blank}|
|Error|Essential Objects Error|[HEOWorldSetting](../HEOComponents/HEOWorldSetting.md)を持つオブジェクトがシーンに存在しません。|[HEOWorldSetting](../HEOComponents/HEOWorldSetting.md)を持つオブジェクトを作成してください。|[ワールドの基本要素](../FirstStep/WorldBasicComponents.md) |
|Error|Essential Objects Error|[HEOField](../HEOComponents/HEOField.md)を持つオブジェクトがシーンに存在しません。|[HEOField](../HEOComponents/HEOField.md)を持つオブジェクトを作成してください。|[ワールドの基本要素](../FirstStep/WorldBasicComponents.md) |
|Error|Essential Objects Error|[HEOPlayer](../HEOComponents/HEOPlayer.md)を持つオブジェクトがシーンに存在しません。|[HEOPlayer](../HEOComponents/HEOPlayer.md)を持つオブジェクトを作成してください。|[ワールドの基本要素](../FirstStep/WorldBasicComponents.md) |
|Error|Essential Objects Error|[HEODespawnHeight](../HEOComponents/HEODespawnHeight.md)を持つオブジェクトがシーンに存在しません。|[HEODespawnHeight](../HEOComponents/HEODespawnHeight.md)を持つオブジェクトを作成してください。|[ワールドの基本要素](../FirstStep/WorldBasicComponents.md) |
|Alert|Video Alert|サポートされていない形式の動画ファイルが使用されています。|動画はVketCloudがサポートする動画形式に変換してください。||
|Alert|Video Alert|動画サイズが、Debug Log Console設定の最大動画サイズよりも大きくなっています。|動画を圧縮してください。もしくは[チェックツール設定](debugconsole.md)から、最大動画サイズを再設定してください。||
|Alert|Video Alert|動画尺が、Debug Log Console設定の最大動画尺よりも大きくなっています。|動画をクロップしてください。もしくは[チェックツール設定](debugconsole.md)から、最大動画尺を再設定してください。||
|Alert|UI Rendering Error|Sprite Rendererはサポートされていません。|Quadにテクスチャを貼り付けるか、[HEOPlane](../HEOComponents/HEOPlane.md)を使用してください。|
|Alert|UI Rendering Error|Canvas Rendererはサポートされていません。|Quadにテクスチャを貼り付けるか、[HEOPlane](../HEOComponents/HEOPlane.md)を使用してください。|
|Error|Mesh Renderer Error|シーン全体で使用するポリゴン数が最大許容数800,000を超過しています。|使用している3Dモデルのポリゴン数を削減してください。|[メッシュデータの圧縮 - Unity マニュアル ](https://docs.unity3d.com/ja/2021.3/Manual/mesh-compression.html){target=_blank}|
|Alert|Mesh Renderer Alert|シーン全体で使用するポリゴン数が推奨許容数600,000を超過しています。使用機種によっては、ワールドのパフォーマンスが低下する恐れがあります。|使用している3Dモデルのポリゴン数を削減してください。|[メッシュデータの圧縮 - Unity マニュアル ](https://docs.unity3d.com/ja/2021.3/Manual/mesh-compression.html){target=_blank}|
|Alert|Mesh Renderer Error|SkinnedMeshRendererを使用したオブジェクトがシーンに存在します。|アニメーションするオブジェクトはvrmに変換し、[HEOObject](../HEOComponents/HEOObject.md)を使用して配置してください。||
|Alert|Mesh Renderer Alert|マテリアルが設定されていないオブジェクトが存在します。|対象のオブジェクトのMeshRendererよりマテリアルをアタッチしてください。||
|Alert|Mesh Renderer Alert|サポートされていないシェーダーが使用されています。|VketCloudでサポートされているシェーダーを割り当ててください。||
|Alert|Mesh Collider Alert|メッシュコライダーとメッシュレンダラーを同時に持つオブジェクトが存在します。|それぞれのコンポーネントを別々のオブジェクトに分離してください。||
|Alert|Mesh Collider Alert|[HEOMeshCollider](../HEOComponents/HEOMeshCollider.md)を持たないメッシュコライダーが存在します。|VketCloud上でメッシュコライダーを有効にするには、対象のオブジェクトに[HEOMeshCollider](../HEOComponents/HEOMeshCollider.md)を追加してください。||
|Error|Light Map Error|ライトマップサイズが2048を超過しています。|ライトマップサイズを2048以下に設定してください。||
|Error|Light Map Error|ライトマップの圧縮がオンになっています。|ライトマップの圧縮設定をオフにしてください。||
|Error|Light Map Error|サポートされていないライトマップ形式が選択されています。|ライトマップ形式はRGB24/RGBA32に設定してください。||
|Alert|Light Map Alert|PCプラットフォームのLightmap EncodingがNormal Qualityに設定されていません。ライトマップが白飛びする恐れがあります。|プラットフォームのライトマップのエンコーディングを設定するには、「Edit」>「Project Settings」>「Player」>「Other Settings」>「Lightmap Encoding」から行ってください。|[ライトマップ - 技術的な情報 - Unity マニュアル](https://docs.unity3d.com/ja/2019.4/Manual/Lightmaps-TechnicalInformation.html){target=_blank} |
|Alert|Light Map Alert|AndroidプラットフォームのLightmap EncodingがLow Qualityに設定されていません。ライトマップが白飛びする恐れがあります。|プラットフォームのライトマップのエンコーディングを設定するには、「Edit」>「Project Settings」>「Player」>「Other Settings」>「Lightmap Encoding」から行ってください。|[ライトマップ - 技術的な情報 - Unity マニュアル](https://docs.unity3d.com/ja/2019.4/Manual/Lightmaps-TechnicalInformation.html){target=_blank} |
|Alert|Transform Error|Transformのスケール値がマイナスのオブジェクトが存在します。|Transformのスケール値を0より大きい値に設定してください。||
|Error|FBX Error|サポートされていないFBXファイルが使用されています。|FBXファイルをバイナリ形式に変換してください。|
|Alert|Texture Alert|サポートされていないテクスチャ形式が設定されたテクスチャが使用されています。|Texture FormatよりRGB24/RGBA32に変更してください。||
|Alert|Texture Alert|サポートされていない拡張子のテクスチャが使用されています。|.pngに変換してください。||
|Alert|Texture Alert|テクスチャサイズがDebug Log Console設定の最大テクスチャサイズよりも大きくなっています。|テクスチャサイズを落としてください。もしくは[チェックツール設定](debugconsole.md)から、最大テクスチャサイズを再設定してください。||
|Alert|Texture Alert|Debug Log Console設定の最大テクスチャピクセルサイズよりも大きくなっています。|テクスチャピクセルサイズを落としてください。もしくは[チェックツール設定](debugconsole.md)から、最大テクスチャピクセルサイズを再設定してください。||

 

 