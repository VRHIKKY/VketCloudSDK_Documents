# VketCloudSDK ドキュメント要約

> 最終更新: 2026-01-31 12:00:00
> 処理ファイル数: 217（ユニーク）

## 使い方

このドキュメントは、VketCloudSDKプロジェクトの機能追加・不具合修正・リファクタを行う際の参考資料です。
「参照シーン」列を確認し、現在の作業に関連するドキュメントを参照してください。

---

## はじめに

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Vket Cloud SDK 公式マニュアル トップページ](docs/index.ja.md) | Vket Cloud SDKの概要と導入手順へのナビゲーション。アカウント準備、Unityインストール、SDK導入、ログインの4ステップを案内。 | 初期セットアップ |

---

## Vket Cloud SDKについて

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [アカウント準備](docs/AboutVketCloudSDK/SetupAccount.ja.md) | VketアカウントおよびVket Cloudアカウントの新規登録手順を説明。Vket Cloud公式サイトからの登録方法、チームID・メールアドレス等の必須情報、ライセンスID登録について記載。 | 初期セットアップ |
| [動作環境](docs/AboutVketCloudSDK/OperatingEnvironment.ja.md) | SDKに必要なUnityバージョン（Unity 2019.4.31f1、Unity 2022.3.6f1、Unity 6）と推奨PC環境（Windows 10/macOS）、対応ブラウザ、モバイル端末スペックを記載。 | 初期セットアップ, デバッグ |
| [SDKの導入方法](docs/AboutVketCloudSDK/SetupSDK_external.ja.md) | UnityのPackage Managerを使用したVket Cloud SDKインストールウィザードの導入手順を解説。プロジェクト作成、レジストリ情報の登録、パッケージのインストールを段階的に説明。 | 初期セットアップ |
| [SDKにログインする](docs/AboutVketCloudSDK/LoginSDK.ja.md) | Vket Cloud SDKへのログイン手順を説明。Unityメニューからのログイン、ブラウザでのVketアカウント認証、ログイン完了の確認方法を記載。 | 初期セットアップ, デバッグ |
| [アバターの使用方法](docs/AboutVketCloudSDK/SetupAvatar.ja.md) | Vket Cloud公式サイトを使用したアバターのアップロードと使用方法を解説。VRMファイルのアップロード手順、ワールド内でのアバター選択・適用方法を含む。 | 初期セットアップ, 機能追加 |

---

## ワールド制作の基本

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [ワールドの基本要素](docs/FirstStep/WorldBasicComponents.ja.md) | ビルドに必要な最低限のオブジェクト（VketCloudSettings、BasicSettings、PlayerSettings、DespawnHeightSettings）について説明。ヒエラルキーからの追加方法とリスポーン問題のトラブルシューティングを記載。 | 初期セットアップ, 不具合修正, デバッグ |
| [ローカル環境でのビルドと実行](docs/FirstStep/BuildAndRun.ja.md) | ローカル環境でのワールドビルドとテスト方法を説明。Build And Runの実行手順、ビルドオプション、キャッシュクリア方法、.heoファイル変換の仕組みを解説。 | 初期セットアップ, デバッグ, パフォーマンス改善 |
| [ワールドアップロード](docs/FirstStep/WorldUpload.ja.md) | 完成したワールドをVket Cloud/My Vketサーバーへアップロードする手順を説明。Upload to Remote Server機能、World Uploaderウィンドウの使用方法を詳細に記載。 | 初期セットアップ, 機能追加 |

---

## Vket Cloud Settings

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Vket Cloud Settings - 概要](docs/VketCloudSettings/Overview.ja.md) | SDKVer12.0で導入されたワールド設定管理オブジェクト群の概要。BaseモードとAdvancedモードの2種類の設定モードがあり、旧来のHEOWorldSetting等のコンポーネントを分解・整理したもの。 | 初期セットアップ |
| [BasicSettings](docs/VketCloudSettings/BasicSettings.ja.md) | ワールドの基本設定を編集するコンポーネント。World ID、デバッグモード、VRMドラッグ&ドロップ、オクルージョンカリング、物理エンジン、ゲームパッド対応、音声減衰、HeliScriptの管理などを設定可能。 | 初期セットアップ, 機能追加, デバッグ |
| [PlayerSettings](docs/VketCloudSettings/PlayerSettings.ja.md) | プレイヤーの挙動設定。スポーン位置・角度、ジャンプ有効/無効と速度、移動速度、ダッシュ倍率、クリック移動、デスポーン高さ、TPSカメラ回転、CRPモードなどを設定可能。 | 初期セットアップ, 機能追加 |
| [DespawnHeightSettings](docs/VketCloudSettings/DespawnHeightSettings.ja.md) | プレイヤーが指定高さまで落下した際にスポーン位置へワープさせるデスポーン機能の設定。Area Sizeで判定範囲を調整し、赤いPlaneとしてシーン上に可視化される。 | 初期セットアップ, 不具合修正 |
| [RenderingSettings](docs/VketCloudSettings/RenderingSettings.ja.md) | ワールドの描画設定。PBRライティング、ディレクショナルライト、ライトマップ強度、シャドウ設定、クリッピング距離、画角、ブルーム、ライトスキャッタリング、IBL、SSAO、トーンマップ、描画優先度などを設定可能。 | 機能追加, パフォーマンス改善 |
| [CameraSettings](docs/VketCloudSettings/CameraSettings.ja.md) | カメラの挙動設定。スムージング、TPSカメラの注視点オフセット、撮影モードカメラの移動可能半径、クリック判定距離、ピッチ角度、ズームアウト距離、X軸回転制限、デフォルトのカメラ位置を設定可能。 | 機能追加 |
| [AvatarSettings](docs/VketCloudSettings/AvatarSettings.ja.md) | ワールド内アバターの設定。アバターアイコン表示、遠方表示用ダミーアバター、プリセットアバター(Vketちゃん等)の登録、新規アバターファイルの生成機能を提供。 | 初期セットアップ, 機能追加 |
| [MyAvatarSettings](docs/VketCloudSettings/MyAvatarSettings.ja.md) | マイアバター(ユーザー所有アバター)の設定。マイアバター使用可否、NSFW制限、ポリゴン上限、モーション設定(アニメーション、ループ、アクション、丸影、衝突判定)、オブジェクト設定を管理。 | 機能追加, 初期セットアップ |

---

## ワールド制作ガイド

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [目次](docs/WorldMakingGuide/WorldMakingGuide.ja.md) | ワールド制作ガイドの目次ページ。基本設定・ガイドライン、グラフィックス、ギミック実装のカテゴリ別にドキュメントへのリンクを提供。 | 初期セットアップ |
| [VketCloudの仕様制限](docs/WorldMakingGuide/UnityGuidelines.ja.md) | VketCloudでUnityを使用する際の仕様制限を解説。ポリゴン数（80万トライアングル以下）、テクスチャフォーマット（2048x2048以下のPNG、2の累乗サイズ）、ライトマップ、Directional Lightなどの制約事項を記載。 | 初期セットアップ, 機能追加, パフォーマンス改善 |
| [シェーダー対応項目一覧](docs/WorldMakingGuide/ShaderAvailability.ja.md) | SDKで対応しているシェーダー（Standard、Autodesk Interactive、MToon、Unlit、UnlitWF、VketChanDoubleSided系）と各シェーダーのパラメータ対応可否を一覧表で提供。 | 機能追加, 不具合修正 |
| [スカイボックス設定](docs/WorldMakingGuide/Skybox.ja.md) | VketCloudではUnityのSkyboxを直接出力できないため、法線反転したBoxまたはSphereオブジェクトで擬似Skyboxを作成する方法を解説。 | 初期セットアップ, 機能追加 |
| [コライダーの使い方 / Tips](docs/WorldMakingGuide/Collider.ja.md) | VketCloudでのコライダーの使い方を解説。壁・床の作成、オクルージョン、動的ローディング、クリック・エリア判定、物理演算など、VKCコンポーネントとの組み合わせによる機能実装方法を説明。 | 機能追加, 不具合修正, デバッグ |
| [物理エンジンの使い方](docs/WorldMakingGuide/PhysicsEngine.ja.md) | VketCloudでの物理演算実装方法を解説。VKC Node Colliderのプロパティ設定やAction Trigger/HeliScriptとの連携方法を記載。 | 機能追加, デバッグ |
| [VKC Item Fieldの使い方](docs/WorldMakingGuide/HEOFieldTips.ja.md) | VKC Item Fieldコンポーネントの正しい使い方と誤用パターンを解説。子オブジェクトのノード化、アクションターゲットの設定、親子構造の制約を説明。 | 機能追加, 不具合修正, デバッグ |
| [リフレクションプローブ](docs/WorldMakingGuide/ReflectionProbe.ja.md) | VketCloudでのリフレクションプローブの設定方法を解説。Weight値に基づくプローブ選択の仕組み、ビルド時の自動検出・変換機能を記載。 | 機能追加, パフォーマンス改善 |
| [オブジェクトをアニメーションさせる](docs/WorldMakingGuide/PropAnimation.ja.md) | VKC Node Rotate Animationコンポーネントまたは.heo/.hemファイルを使用したオブジェクトアニメーションの実装方法を解説。 | 機能追加 |
| [オブジェクトをアニメーションさせる - できないときは](docs/WorldMakingGuide/PropAnimation_TroubleShooting.ja.md) | アニメーション設定時のトラブルシューティング。VKC Node Rotate Animationの挙動異常、.hemファイル書き出し時のエラー対処法を解説。 | 不具合修正, デバッグ |
| [Unityアセットのアニメーションを変換する](docs/WorldMakingGuide/ConvertAnimationFromUnityAsset.ja.md) | Unity Asset StoreのアニメーションFBXをVketCloud用.hem形式に変換する方法を解説。 | 機能追加 |
| [AvatarFile](docs/WorldMakingGuide/AvatarFile.ja.md) | AvatarFileの設定項目を解説。サムネイル設定、.vrm/.hrm形式のアバターデータ設定方法を記載。 | 初期セットアップ, 機能追加 |
| [プリセットアバターを追加する](docs/WorldMakingGuide/PresetAvatar.ja.md) | ワールドにプリセットアバターを追加する手順を解説。テクスチャ圧縮、AvatarFileの作成・設定方法を詳細に説明。 | 初期セットアップ, 機能追加 |
| [ワールドに任意のファイルを保持させる](docs/WorldMakingGuide/FileDeploymentConfig.ja.md) | ビルド/アップロード時にワールドへ任意ファイルを同梱する方法を解説。FileDeploymentConfigの作成・設定手順を説明。 | 機能追加, デバッグ |
| [クリック判定できる可動オブジェクトの作り方](docs/WorldMakingGuide/MovableClickableObject.ja.md) | VKC Item Objectでクリック判定を持ちながら移動するオブジェクトの実装方法を解説。 | 機能追加, デバッグ |

### JS入稿

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [JS入稿機能の有効化](docs/WorldMakingGuide/JsUpload.ja.md) | JavaScriptをVket Cloudワールドにアップロードして実行する機能の有効化手順。有償プラン限定。 | 初期セットアップ, 機能追加 |
| [ワールド入場時間を制限する](docs/WorldMakingGuide/JsUpload_RestrictEntryTime.ja.md) | JavaScriptを使用して特定時間帯のみワールド入場を許可する方法。 | 機能追加 |
| [Web APIを使用し現在の天気を取得する](docs/WorldMakingGuide/JsUpload_FetchCurrentWeather.ja.md) | JS入稿機能でOpenStreetMapとOpen Meteo APIを利用し、現在天気情報を取得するJavaScript実装例。 | 機能追加 |
| [JS入稿のチュートリアルシーン](docs/WorldMakingGuide/JsUpload_TutorialScene.ja.md) | キーボード入力状態をリアルタイム表示するサンプルシーン。HeliScriptとJavaScript間の双方向通信を実装したチュートリアル。 | 初期セットアップ, 機能追加 |

### その他ガイド

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [アセットストアからダウンロードするアバターの設定方法](docs/WorldMakingGuide/ImportAssetStore.ja.md) | Vket Cloudアセットストアからアバター(.hrm)を入手し、VKC Item Objectでワールドに配置する手順。 | 初期セットアップ, 機能追加 |
| [ローディング完了後にドアが開くギミック](docs/WorldMakingGuide/DoorOpensAfterLoad.ja.md) | 動的ローディング完了後にスポーン地点から移動可能にするギミック。 | 機能追加 |
| [テクスチャをぼやけさせない](docs/WorldMakingGuide/GuideToClearTextures.ja.md) | ドット絵のぼやけ・にじみを防ぐためのUnityテクスチャ設定ガイド。 | パフォーマンス改善 |
| [VKC Item Background Textureの使い方](docs/WorldMakingGuide/BackgroundTexture.ja.md) | ワールド背景を簡単に実装するHEOBackGroundTextureコンポーネントの使用方法と制約事項。 | 機能追加 |
| [プレイヤーに追従するテキストの実装](docs/WorldMakingGuide/PlayerFollowText.ja.md) | HEO Text PlaneとHeliScriptを使用してプレイヤーに追従するテキストを実装する方法。 | 機能追加 |
| [ライトスキャタリング](docs/WorldMakingGuide/LightScattering.ja.md) | フォグや遠景の青い霞み表現を実現するライトスキャタリング設定方法。 | 機能追加 |
| [特定の条件下でのみ入場時効果音を鳴らす](docs/WorldMakingGuide/SoundEffectEntrance.ja.md) | URLクエリパラメータなど条件に応じて入室時効果音を鳴らす実装。 | 機能追加 |
| [Activityのjsonのメソッドを実行する](docs/WorldMakingGuide/ExecuteActivityJsonMethod.ja.md) | Scene.jsonのComponentからActivityScene.jsonのComponentメソッドを実行する方法。 | 機能追加, リファクタ |
| [VKC Attribute Propertyの使い方](docs/WorldMakingGuide/VKCAttributeProperty.ja.md) | Itemにキーと値を持たせるプロパティ機能の設定・利用方法。 | 機能追加 |
| [VKC Node Shadow/HEO Shadowの使い方](docs/WorldMakingGuide/HEOShadow.ja.md) | 動的影(シャドウマップ)を設定するHEOShadowコンポーネントの使い方。 | 機能追加 |
| [モーション付きアクティビティ](docs/WorldMakingGuide/ActivityWithMotion.ja.md) | アクティビティクラス内でアバターモーションを定義し、HeliScriptで再生する実装手順。 | 機能追加 |
| [CanvasUI表示機能付きアクティビティクラスを作る](docs/WorldMakingGuide/ActivityWithCanvasUI.ja.md) | アクティビティクラス内にUI画像を設定し、クリックでUIを表示する機能の実装方法。 | 機能追加 |
| [バイナリ出力に失敗しましたエラー](docs/WorldMakingGuide/BinaryOutputError.ja.md) | HeliScriptでフィールド定義時にnewを使うとローディング中にフリーズする問題と解決策。 | 不具合修正, デバッグ |
| [iPhone単体でChromeコンソールを確認する方法](docs/WorldMakingGuide/iPhoneConsole.ja.md) | iPhoneのChrome単体でchrome://inspectを使いJavaScriptログを確認する方法。 | デバッグ |
| [ReplaceTextureでテクスチャ差し替えが正常にできない](docs/WorldMakingGuide/ReplaceTexture.ja.md) | Item.ReplaceTexture()でテクスチャが差し替わらない問題の原因と解決策。 | 不具合修正, デバッグ |
| [VketCloudでのユーザビリティを向上させる](docs/WorldMakingGuide/VketCloudUsability.ja.md) | PC・スマホ縦横画面での操作性・情報配置を考慮したワールド制作のガイドライン。 | パフォーマンス改善 |
| [カプセル長方形の画像を9sliceで作成する](docs/WorldMakingGuide/9slice.ja.md) | Figmaと9Slice機能を使用して拡縮可能なカプセル型ボタン画像を作成する方法。 | 機能追加, パフォーマンス改善 |
| [Canvasでダイアログ外クリックで閉じる機能](docs/WorldMakingGuide/CloseCanvas.ja.md) | ダイアログ外をタップするとダイアログが閉じるUI機能の実装方法。 | 機能追加 |
| [PlaneアイテムのZbiasを動的に変更する](docs/WorldMakingGuide/Zbias.ja.md) | Lib15以降でHeliScriptからPlaneのZBiasを動的に変更する方法。 | 機能追加 |

---

## SDK Tools

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [デバッグコンソールとは](docs/debugconsole/debugconsole.ja.md) | Vket Cloud SDKのデバッグ・トラブルシューティング用ツール。ログの表示・フィルタリング・検索・コピー・エクスポート機能を提供。 | デバッグ, パフォーマンス改善 |
| [デバッグメッセージ一覧](docs/debugconsole/debugmessage.ja.md) | デバッグコンソールに表示されるエラー・アラートの一覧。カテゴリ別に問題と修正提案を記載。 | デバッグ, 不具合修正 |
| [デバッグモード](docs/WorldEditingTips/DebugMode.ja.md) | BasicSettingsでデバッグモードを有効にすると使える検証機能の解説。FPS、DrawCall、VRAMなどのステータス表示。 | デバッグ, パフォーマンス改善 |
| [Export Fieldの使い方](docs/WorldMakingGuide/HEOExporter_Tutorial.ja.md) | VketCloud専用3Dオブジェクトファイル形式(.heo)を出力するExport Fieldツールのチュートリアル。 | 機能追加 |
| [HEM Animation Converterの使い方](docs/HEMAnimationConverter/AnimationConverter.ja.md) | HumanoidアニメーションをLegacyアニメーションに変換するツール。IK設定にも対応。 | 機能追加 |
| [パーティクルエディター概要](docs/particleeditor/pe_about_particleeditor.ja.md) | Vket Cloud専用パーティクルファイル(.HEP)を作成するWebベースツール。 | 機能追加 |
| [ウィンドウ解説・操作方法について](docs/particleeditor/pe_about_screen.ja.md) | パーティクルエディターの画面構成と操作方法。 | 機能追加 |
| [パーティクルエディター：プロパティ一覧](docs/particleeditor/pe_about_properties.ja.md) | パーティクルエディターで編集可能なプロパティの詳細。 | 機能追加 |
| [Export Compressed Texture](docs/SDKTools/ExportCompressedTexture.ja.md) | png以外/2の累乗でないテクスチャをVket Cloud仕様で圧縮するツール。 | パフォーマンス改善 |
| [VKC Activity Exporter](docs/SDKTools/VKCActivityExporter.ja.md) | Activityをエクスポートするためのツール。 | 機能追加 |
| [Vket Cloud SDK設定](docs/SDKTools/VketCloudSDKSettings.ja.md) | SDKの各種設定を編集するウィンドウ。アカウント情報、ビルド設定、ローカルサーバー、言語設定等。 | 初期セットアップ |
| [Texture Import Viewer](docs/SDKTools/TextureImportViewer.ja.md) | プロジェクト内テクスチャのインポート設定・圧縮サイズを一覧表示するビューワー。 | パフォーマンス改善 |
| [Auto Texture Compressor](docs/SDKTools/AutoTextureCompressor.ja.md) | ワールド内テクスチャを圧縮保存するツール。 | パフォーマンス改善 |
| [シーンプレビュー (β)](docs/SDKTools/ScenePreview.ja.md) | Unity上でビルドせずにワールド内プレイヤー挙動を確認できるβ機能。 | デバッグ |
| [VRMファイルクリエーターについて](docs/SDKTools/VRMFileCreator.ja.md) | FBXファイルからVRMファイルを作成するツール。 | 機能追加 |

---

## GUITools

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [GUITools - 概要とセットアップ](docs/GUITools/Setup.ja.md) | VKC Item Activity用のActivity Canvas GUIを編集・保存するツールの導入手順。 | 初期セットアップ |
| [基本実装](docs/GUITools/HowToUse.ja.md) | GUIToolsの基本的な使い方。Unity上でのUI編集レイアウト設定、サンプル読み込み、JSONファイルのインポート手順。 | 機能追加 |
| [応用実装](docs/GUITools/AdvancedUse.ja.md) | GUIToolsでのUI素材配置・サイズ調整の実践的な使い方。 | 機能追加 |

---

## 編集のためのTips

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Vket Cloudオブジェクト追加のためのクイックメニュー](docs/WorldEditingTips/QuickMenu.ja.md) | Hierarchy右クリックメニューから利用できるVket Cloudオブジェクト作成機能。 | 機能追加 |
| [EditorOnlyタグの使用方法](docs/WorldEditingTips/EditorOnlyTag.ja.md) | EditorOnlyタグを付けたオブジェクトをビルド対象から除外する機能。 | デバッグ |
| [複数のHEOコンポーネントの一括編集](docs/WorldEditingTips/MultiSelect_HEOComponents.ja.md) | 同じHEOコンポーネントを持つ複数オブジェクトを選択し、設定を一括編集する機能。 | リファクタ |
| [UnlitマテリアルのContributeGI設定を外す](docs/WorldEditingTips/DisableContributeGITool.ja.md) | Unlitシェーダー適用オブジェクトのContribute GI設定を一括で無効化するツール。 | 不具合修正, パフォーマンス改善 |
| [ビルド時のオプション](docs/WorldEditingTips/BuildOptions.ja.md) | ビルド時のファイル操作設定。キャッシュクリア、テクスチャサイズ変換、スマートフォン用軽量化オプション。 | パフォーマンス改善 |
| [Sceneビューにおけるギズモの表示](docs/WorldEditingTips/Gizmos.ja.md) | Sceneビューに表示されるVKCコンポーネントのギズモ解説。 | デバッグ |
| [ヒエラルキーアイコン](docs/WorldEditingTips/HierarchyIcons.ja.md) | Hierarchy上にVKCコンポーネント付きオブジェクトのアイコンを表示する機能。 | デバッグ |

---

## ワールドの軽量化方法

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [ワールドの軽量化方法：概要](docs/WorldOptimization/WorldOptimization.ja.md) | Vket Cloud SDKで使用可能な軽量化方法（オクルージョンカリング、テクスチャ圧縮、動的ローディング）の概要。 | パフォーマンス改善 |
| [オクルージョンカリング](docs/WorldOptimization/OcclusionCulling.ja.md) | 遮蔽物の向こう側にあるオブジェクトの描画を切ることで最適化を行う機能。 | パフォーマンス改善, デバッグ |
| [テクスチャ圧縮](docs/WorldOptimization/TextureCompression.ja.md) | ワールド内のテクスチャ容量を削減してロード時間を改善する方法。 | パフォーマンス改善 |
| [スマートフォンのためのワールド軽量化](docs/WorldOptimization/SmartphoneOptimization.ja.md) | スマートフォン向けの軽量化目安とアバター制限の設定方法。 | パフォーマンス改善, 初期セットアップ |
| [ASTCとETC2とは](docs/WorldOptimization/AstcAndEtc2.ja.md) | モバイル向けテクスチャ圧縮フォーマット（ASTC/ETC2）の説明。 | パフォーマンス改善 |

---

## VKCコンポーネント

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [VKC/HEO コンポーネント 概要](docs/VKCComponents/VKCHEOCorrespondenceTable.ja.md) | VKCコンポーネントの種類（Setting/Item/Node/Attribute/Legacy）と、SDKバージョンごとのコンポーネント名称対応表。 | 初期セットアップ, 機能追加 |

### VKC Setting

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [VKC Setting Nameplate](docs/VKCComponents/VKCSettingNameplate.ja.md) | プレイヤーアバターの頭上に表示されるネームプレートをカスタマイズするコンポーネント。 | 機能追加 |
| [VKC Setting Spawn](docs/VKCComponents/VKCSettingSpawn.ja.md) | ワールド入場時のプレイヤーのスポーン位置をランダムに決定するコンポーネント。 | 初期セットアップ, 機能追加 |

### VKC Item

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [VKC Item Activity](docs/VKCComponents/VKCItemActivity.ja.md) | モデル・スクリプトを一つのItemとして統合するアクティビティを使用するためのコンポーネント。 | 機能追加 |
| [VKC Item Area Collider](docs/VKCComponents/VKCItemAreaCollider.ja.md) | プレイヤーがコライダーに進入/退出した際にアクションを実行するコンポーネント。 | 機能追加 |
| [VKC Item Audio](docs/VKCComponents/VKCItemAudio.ja.md) | BGMや効果音を再生するためのオーディオコンポーネント。 | 機能追加 |
| [VKC Item Background Texture](docs/VKCComponents/VKCItemBackgroundTexture.ja.md) | シーンの背景として画像を配置するコンポーネント。 | 機能追加 |
| [VKC Item Camera](docs/VKCComponents/VKCItemCamera.ja.md) | 演出目的で通常カメラから別のカメラ制御に切り替えるためのコンポーネント。 | 機能追加 |
| [VKC Item Field](docs/VKCComponents/VKCItemField.ja.md) | オブジェクトを.heoファイルとしてパックするためのコンポーネント。動的ローディングをサポート。 | 初期セットアップ, パフォーマンス改善 |
| [VKC Item Object](docs/VKCComponents/VKCItemObject.ja.md) | 動的なオブジェクト（heo/vrm/hrm/glb形式）をシーンに生成するコンポーネント。 | 機能追加 |
| [VKC Item Particle](docs/VKCComponents/VKCItemParticle.ja.md) | .hep形式のパーティクルファイルを展開するコンポーネント。 | 機能追加 |
| [VKC Item Plane](docs/VKCComponents/VKCItemPlane.ja.md) | png画像ファイルをワールド内に配置するコンポーネント。 | 機能追加 |
| [VKC Item Spot](docs/VKCComponents/VKCItemSpot.ja.md) | URLクエリ（spaceindex）に応じてプレイヤーの初期位置を変更するコンポーネント。 | 機能追加 |
| [VKC Item Text Plane](docs/VKCComponents/VKCItemTextPlane.ja.md) | ワールド内にテキストを表示するコンポーネント。 | 機能追加 |

### VKC Node

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [VKC Node Alpha Animation](docs/VKCComponents/VKCNodeAlphaAnimation.ja.md) | カメラがオブジェクトに近づいた際に、視界確保のためにオブジェクトを距離に応じて透過させるコンポーネント。 | 機能追加, パフォーマンス改善 |
| [VKC Node Blend Shape Translator](docs/VKCComponents/VKCNodeBlendShapeTranslator.ja.md) | HEMキャラモーション出力時にBlendShape名を変換するためのコンポーネント。 | 機能追加, 不具合修正 |
| [VKC Node Collider](docs/VKCComponents/VKCNodeCollider.ja.md) | ノードに衝突判定を付与するコライダー用基本コンポーネント。物理演算、押し出し処理などを設定可能。 | 初期セットアップ, 機能追加 |
| [VKC Node Cylinder Collider](docs/VKCComponents/VKCNodeCylinderCollider.ja.md) | Capsule Colliderを基に円柱状のコライダーを生成するコンポーネント。 | 機能追加 |
| [VKC Node LOD Level](docs/VKCComponents/VKCNodeLODLevel.ja.md) | LOD Groupが設定されたアセットから、特定のLODレベルのメッシュのみをheoとして書き出すためのコンポーネント。 | パフォーマンス改善 |
| [VKC Node Mesh Collider](docs/VKCComponents/VKCNodeMeshCollider.ja.md) | 3Dモデルのメッシュ情報からメッシュベースのコライダーを生成するコンポーネント。 | 機能追加 |
| [VKC Node Mirror](docs/VKCComponents/VKCNodeMirror.ja.md) | Quadオブジェクトを使用して鏡のような反射表現を実現するコンポーネント。 | 機能追加 |
| [VKC Node Reflection Probe Type](docs/VKCComponents/VKCNodeReflectionProbeType.ja.md) | Reflection Probeの状態を動的・静的に変更できるコンポーネント。 | 機能追加 |
| [VKC Node Rotate Animation](docs/VKCComponents/VKCNodeRotateAnimation.ja.md) | オブジェクトに回転アニメーション(ループ再生)を設定するコンポーネント。 | 機能追加 |
| [VKC Node Shadow](docs/VKCComponents/VKCNodeShadow.ja.md) | 動的影(シャドウマップ)を設定するコンポーネント。 | 機能追加, パフォーマンス改善 |
| [VKC Node UV Scroller](docs/VKCComponents/VKCNodeUVScroller.ja.md) | オブジェクトのマテリアルに対してUVスクロールアニメーションを設定するコンポーネント。 | 機能追加 |
| [VKC Node Video Trigger](docs/VKCComponents/VKCNodeVideoTrigger.ja.md) | オブジェクトで動画を再生するためのコンポーネント。 | 機能追加 |

### VKC Attribute

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [VKC Attribute Action Trigger](docs/VKCComponents/VKCAttributeActionTrigger.ja.md) | オブジェクトのコライダーをクリックした際にアクションを実行するコンポーネント。 | 機能追加 |
| [VKC Attribute Click Guide](docs/VKCComponents/VKCAttributeClickGuide.ja.md) | 一定エリア内に入るとクリックガイドを表示するオブジェクトを自動生成するコンポーネント。 | 初期セットアップ, 機能追加 |
| [VKC Attribute Clickable UI](docs/VKCComponents/VKCAttributeClickableUI.ja.md) | オブジェクトの「クリック可能」状態を強調するガイドUIを設定するコンポーネント。 | 初期セットアップ, 機能追加 |
| [VKC Attribute Property](docs/VKCComponents/VKCAttributeProperty.ja.md) | アイテムに対してKey-Value形式のプロパティを設定するコンポーネント。 | 機能追加, デバッグ |
| [VKC Attribute Script](docs/VKCComponents/VKCAttributeScript.ja.md) | HeliScriptファイルとコンポーネントをオブジェクトに紐づけるコンポーネント。 | 初期セットアップ, 機能追加 |
| [VKC Attribute Show Flag](docs/VKCComponents/VKCAttributeShowFlag.ja.md) | VKC Item Field上のオブジェクトの表示/非表示を制御するコンポーネント。 | 機能追加, デバッグ |

### VKC Legacy

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [HEODespawnHeight](docs/VKCComponents/HEODespawnHeight.ja.md) | **[廃止]** SDK Ver12.0で廃止。代替として[Vket Cloud Settings](../VketCloudSettings/Overview.md)を使用。 | 初期セットアップ |
| [HEOPlayer](docs/VKCComponents/HEOPlayer.ja.md) | **[廃止]** SDK Ver12.0で廃止。代替として[Vket Cloud Settings](../VketCloudSettings/Overview.md)を使用。 | 初期セットアップ |
| [HEOWorldSetting](docs/VKCComponents/HEOWorldSetting.ja.md) | **[廃止]** SDK Ver12.0で廃止。代替として[Vket Cloud Settings](../VketCloudSettings/Overview.md)を使用。 | 初期セットアップ |
| [HEOReflectionProbe](docs/VKCComponents/HEOReflectionProbe.ja.md) | **[廃止]** SDK Ver12.3で廃止。 | 機能追加 |

---

## アクションについて

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Actionについて](docs/Actions/ActionsOverview.ja.md) | アクションシステムの概要。Webページを開く、アイテム表示/非表示、コライダー制御、モーション再生などのギミックを実装するためのパーツ。 | 初期セットアップ, 機能追加 |

### 基本

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Random](docs/Actions/Basics/Random.ja.md) | 指定範囲内の後続アクションからランダムに1つを選んで実行する。 | 機能追加 |
| [Wait](docs/Actions/Basics/Wait.ja.md) | 後続のアクションを実行する前に、指定した秒数だけ待機する。 | 機能追加 |

### 演算

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Add Var](docs/Actions/Operation/AddVar.ja.md) | SetVarで保存した変数に指定した整数値を加算する。 | 機能追加 |
| [If Equal](docs/Actions/Operation/IfEqual.ja.md) | 変数が指定値と等しい場合、以降のアクションを実行せずに終了する条件分岐。 | 機能追加, デバッグ |
| [If Less Than](docs/Actions/Operation/IfLessThan.ja.md) | 変数が指定値より小さい場合、以降のアクションを実行せずに終了する条件分岐。 | 機能追加, デバッグ |
| [If More Than](docs/Actions/Operation/IfMoreThan.ja.md) | 変数が指定値より大きい場合、以降のアクションを実行せずに終了する条件分岐。 | 機能追加, デバッグ |
| [If Not Equal](docs/Actions/Operation/IfNotEqual.ja.md) | 変数が指定値と等しくない場合、以降のアクションを実行せずに終了する条件分岐。 | 機能追加, デバッグ |
| [Set Var](docs/Actions/Operation/SetVar.ja.md) | ワールドに変数を保持し、整数値を代入する。 | 機能追加 |

### アイテム

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Show/Hide Item](docs/Actions/Item/ShowHideItem.ja.md) | VKC Item Object/Plane/Textplane/Particleで管理されるオブジェクトの表示・非表示を切り替える。 | 機能追加 |
| [Play/Stop Item](docs/Actions/Item/PlayStopItem.ja.md) | オーディオ・パーティクル・オブジェクトアニメーションを再生/停止する。 | 機能追加, デバッグ |

### ノード

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Show/Hide Node](docs/Actions/Node/ShowHideNode.ja.md) | .heoファイルに含まれるメッシュの表示・非表示をコントロールする。 | 機能追加 |
| [Enable/Disable Clickable Node](docs/Actions/Node/EnableDisableClickableNode.ja.md) | クリック可能ノードの有効/無効を切り替える。 | 機能追加 |
| [Enable/Disable Collider](docs/Actions/Node/EnableDisableCollider.ja.md) | VKC Item FieldやObjectに含まれるコライダーの有効化・無効化をコントロールする。 | 機能追加 |
| [Enable/Disable Node](docs/Actions/Node/EnableDisableNode.ja.md) | 選択したノードに対してメッシュ表示/非表示、コライダー有効/無効、クリック可能有効/無効をまとめて設定できる統合アクション。 | 機能追加, リファクタ |

### オブジェクト

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Show/Hide Object](docs/Actions/Object/ShowHideObject.ja.md) | HEOWorldSettingのAvatarsで設定されたObject on Avatarを表示・非表示にする。 | 機能追加 |
| [Play/Stop Object](docs/Actions/Object/PlayStopObject.ja.md) | Object on Avatar（パーティクルまたはオーディオ）の再生と停止をコントロールする。 | 機能追加 |

### フェード

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Fade Out/In](docs/Actions/Fade/FadeOutIn.ja.md) | 指定時間をかけて画面を暗転（FadeOut）または暗転解除（FadeIn）する。 | 機能追加 |
| [White Out/In](docs/Actions/Fade/WhiteOutIn.ja.md) | 指定時間をかけて画面を明転（WhiteOut）または明転解除（WhiteIn）する。 | 機能追加 |

### トランスフォーム

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Move To](docs/Actions/Transform/MoveTo.ja.md) | VKC Item Objectを指定オブジェクトまで、指定時間で線形移動させる。 | 機能追加 |
| [Set Pos Relative Player](docs/Actions/Transform/SetPosRelativePlayer.ja.md) | VKC Item Objectをプレイヤーの相対的な位置（ローカル座標）に移動させる。 | 機能追加 |
| [Warp](docs/Actions/Transform/Warp.ja.md) | プレイヤーを指定座標またはオブジェクトの位置に瞬間移動させる。 | 機能追加 |

### モーション/エモーション

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Emote](docs/Actions/Motion/Emote.ja.md) | HEOWorldSettingで設定されたプレイヤーエモートをindexで指定して再生する。 | 機能追加 |
| [Motion](docs/Actions/Motion/Motion.ja.md) | HEOWorldSettingのAvatarに設定されたアバターモーションを再生する。 | 機能追加 |
| [Next Motion](docs/Actions/Motion/NextMotion.ja.md) | Motionアクションで再生されたモーション完了後に再生するモーションを設定する。 | 機能追加 |

### HeliScript

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Call Script](docs/Actions/HeliScript/CallScript.ja.md) | アクションからHeliScriptのコンポーネントメソッドを呼び出す。 | 機能追加, デバッグ |

### 物理エンジン

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Add Velocity](docs/Actions/PhysicsEngine/PhysicsAddVelocity.ja.md) | 物理オブジェクトにワールド座標系のベクトルで速度を加える。 | 機能追加 |
| [Add/Clear Force](docs/Actions/PhysicsEngine/PhysicsClearAddForce.ja.md) | 物理オブジェクトに力を加える、または加わっている力・速度をすべて0にする。 | 機能追加 |
| [Physics Set Enable](docs/Actions/PhysicsEngine/PhysicsSetEnable.ja.md) | 物理演算の有効・無効を切り替える。 | 機能追加 |
| [Set Position/Rotation](docs/Actions/PhysicsEngine/PhysicsSetPosRot.ja.md) | 物理オブジェクトの位置または回転をワールド座標系で直接設定する。 | 機能追加 |

### ウィンドウ状態

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Movie Viewer Full Screen On](docs/Actions/WindowState/MovieViewerFullScreenOn.ja.md) | 再生中の動画を全画面表示に切り替える。 | 機能追加 |
| [Movie Viewer Full Screen Off](docs/Actions/WindowState/MovieViewerFullScreenOff.ja.md) | 動画の全画面表示を停止して通常サイズに戻す。 | 機能追加 |
| [Movie Viewer Full Screen Toggle](docs/Actions/WindowState/MovieViewerFullScreenToggle.ja.md) | 動画の全画面表示状態をトグル切り替えする。 | 機能追加 |
| [Open Movie Viewer](docs/Actions/WindowState/OpenMovieViewer.ja.md) | 動画再生開始時に動画再生ウィンドウを表示する。 | 機能追加 |
| [Set Generic Window State](docs/Actions/WindowState/SetGenericWindowState.ja.md) | Movie Viewer/Screen Share/Image Viewerのウィンドウ状態を設定する。 | 機能追加 |

### ボイスチャット

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Enter/Leave Voice Group](docs/Actions/VoiceChat/EnterLeaveVoiceGroup.ja.md) | プレイヤーを指定名のボイスグループに追加または削除する。 | 機能追加 |

### ウェブ

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Open Links in New Tab](docs/Actions/Web/Openweb.ja.md) | 指定URLのウェブサイトをブラウザの新しいタブで開く。 | 機能追加 |
| [Open Links in Current Tab](docs/Actions/Web/OpenwebCurrentTab.ja.md) | 指定URLのウェブサイトをブラウザの現在のタブで開く。 | 機能追加 |

### その他

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Set Cookie Text](docs/Actions/Others/SetCookieText.ja.md) | Cookieにname=textの形式で文字列情報を保存する。 | 機能追加 |
| [Stop Video](docs/Actions/Others/StopVideo.ja.md) | 現在再生している動画を停止し、元のテクスチャに戻す。 | 機能追加 |

---

## HeliScript

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [HeliScript概要](docs/hs/hs_overview.ja.md) | Vket Cloud独自のプログラミング言語HeliScriptの導入ガイド。Hello Worldを出力する手順、推奨IDE(VS Code)、VKC Attribute Scriptの設定方法を解説。 | 初期セットアップ |
| [HeliScriptキャスト](docs/hs/hs_casting.ja.md) | 基本型(int, float, bool, string)間の型変換方法。 | 機能追加, デバッグ |
| [HeliScriptコメント](docs/hs/hs_comment_out.ja.md) | HeliScriptにおけるコメントの書き方。1行コメント(//)と複数行コメント(/* */)をサポート。 | 初期セットアップ, リファクタ |

### 組み込み型

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [基本型](docs/hs/hs_var.ja.md) | HeliScriptの組み込み型(int, float, bool, string)とclass型の説明。参照カウンタによる参照管理、ref引数による参照渡しについて解説。 | 初期セットアップ, 機能追加 |
| [文字列(string)](docs/hs/hs_string.ja.md) | UTF-8文字列を扱うstring型の説明。ToInt(), ToFloat(), Length(), Append()等のメソッドを持つ。 | 機能追加, 不具合修正 |
| [配列(list)](docs/hs/hs_list.ja.md) | 可変長配列を表現するlist型の説明。Add(), Insert()等のメソッドを解説。 | 機能追加, リファクタ |
| [デリゲート(delegate)](docs/hs/hs_delegate.ja.md) | 関数やメソッドの参照を保存・呼び出しするデリゲート型。 | 機能追加, リファクタ |
| [enum型](docs/hs/hs_enum.ja.md) | 名前付き定数の集まりを定義するenum型。 | 機能追加, リファクタ |

### クラス

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [クラス・構造体](docs/hs/hs_class.ja.md) | classキーワードによるクラス定義。コンストラクタ、メンバ変数、メソッド定義、publicアクセス指定子の使用方法を解説。 | 機能追加, リファクタ |
| [インターフェース](docs/hs/hs_interface.ja.md) | interfaceキーワードで実装を持たない型を定義。クラスは複数のインターフェースを実装可能。 | 機能追加, リファクタ |
| [コンポーネント / コールバック関数](docs/hs/hs_component.ja.md) | componentキーワードでアイテムに追加するクラスを定義。Update(), OnLoaded()等のコールバック関数をサポート。 | 機能追加, 初期セットアップ |
| [Itemの種類 / VKCComponentとの対応一覧](docs/hs/hs_item_types_functions.ja.md) | Vket CloudのItemタイプとVKCコンポーネントの対応表。 | 機能追加, デバッグ |

### 組み込みクラス

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [Vector2 クラス](docs/hs/hs_struct_vector2.ja.md) | 2次元ベクトルを表現するクラス。x,y成分を持ち、Add(), Sub(), Distance()等のメソッドを提供。 | 機能追加 |
| [Vector3 クラス](docs/hs/hs_struct_vector3.ja.md) | 3次元ベクトルを表現するクラス。x,y,z成分を持ち、Add(), Rotate()等のメソッドを提供。 | 機能追加 |
| [Vector4 クラス](docs/hs/hs_struct_vector4.ja.md) | 4次元ベクトルを表現するクラス。 | 機能追加 |
| [Quaternion クラス](docs/hs/hs_struct_quaternion.ja.md) | クォータニオンを表現するクラス。回転に使用。 | 機能追加 |
| [Matrix クラス](docs/hs/hs_struct_matrix.ja.md) | 4x4行列を表現するクラス。 | 機能追加 |
| [Item クラス](docs/hs/hs_class_item.ja.md) | ワールド内アイテムを操作するクラス。hsItemGet()でインスタンス取得、クローン作成・削除、位置・回転の操作等多数のメソッドを持つ。 | 機能追加, デバッグ |
| [Player クラス](docs/hs/hs_class_player.ja.md) | プレイヤー(アバター)を表すクラス。hsPlayerGet()で自身を取得。 | 機能追加, 不具合修正 |
| [Date クラス](docs/hs/hs_class_date.ja.md) | 日時を表現するクラス。 | 機能追加 |
| [TimeSpan クラス](docs/hs/hs_class_timespan.ja.md) | 時間間隔を表現するクラス。 | 機能追加 |
| [HSMessage クラス](docs/hs/hs_class_hsmessage.ja.md) | Item間で送受信するメッセージクラス。 | 機能追加, デバッグ |
| [HSRaycastHIT クラス](docs/hs/hs_struct_hsraycasthit.ja.md) | Raycast結果を受け取るクラス。 | 機能追加, デバッグ |
| [GUIElement クラス](docs/hs/hs_class_guielement.ja.md) | CanvasのGUI要素を操作するクラス。 | 機能追加, デバッグ |
| [Layer クラス](docs/hs/hs_class_Layer.ja.md) | Canvas要素のLayerを操作するクラス。 | 機能追加 |
| [LayerBundle クラス](docs/hs/hs_class_layerbundle.ja.md) | 縦画面・横画面の両方のLayerをまとめて操作するクラス。 | 機能追加 |
| [HSShallowCloneParam クラス](docs/hs/hs_class_shallowcloneparam.ja.md) | ShallowCloneの設定を管理するクラス。 | 機能追加, パフォーマンス改善 |

### 組み込み関数

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [システム](docs/hs/hs_system_function.ja.md) | コンソール出力、デバッグモード判定、モバイル判定、SDKバージョン取得、経過時間取得などシステム関数群。 | 機能追加, デバッグ |
| [入力](docs/hs/hs_system_function_input.ja.md) | タッチ/クリック入力を扱うHSTouchクラスとキー入力判定関数。 | 機能追加, デバッグ |
| [数学](docs/hs/hs_system_function_math.ja.md) | 三角関数、逆三角関数、平方根などの数学演算関数群。 | 機能追加 |
| [ネットワーク](docs/hs/hs_system_function_net.ja.md) | ルーム内プレイヤー間のデータ送受信機能。カスタムステートとカスタムデータの2種類。 | 機能追加 |
| [ネームプレート](docs/hs/hs_system_function_nameplate.ja.md) | プレイヤーアバター頭上のネームプレートを動的にカスタマイズする関数。 | 機能追加 |
| [GUI](docs/hs/hs_system_function_gui.ja.md) | GUIレイヤーの表示/非表示切替、レイヤーの追加・設定変更などのユーティリティ関数群。 | 機能追加 |
| [HSGUIModel](docs/hs/hs_system_function_gui_HSGUIModel.ja.md) | GUI要素のHSGUIModelクラス詳細。 | 機能追加, リファクタ |
| [テキストチャット](docs/hs/hs_system_function_textchat.ja.md) | テキストチャットへの出力関数。SDK12.3.4以降は廃止済み。 | 不具合修正, リファクタ |
| [ChatGPT](docs/hs/hs_system_function_chatgpt.ja.md) | ChatGPTからの返答を受け取るコールバック登録関数。 | 機能追加 |
| [物理演算](docs/hs/hs_system_function_physics.ja.md) | ノードの物理演算有効化/固定状態の取得など、物理演算制御関数。 | 機能追加 |
| [カメラ](docs/hs/hs_system_function_camera.ja.md) | カメラのワールド座標系ベクトル取得、位置・向き(Quaternion)取得など。 | 機能追加 |
| [汎用ダイアログ](docs/hs/hs_system_function_commondialog.ja.md) | 8種類のダイアログを表示できる汎用ダイアログ関数群。 | 機能追加 |
| [レンダリング](docs/hs/hs_system_function_rendering.ja.md) | ライト方向・色・強度の取得/設定などレンダリング制御関数。 | 機能追加, パフォーマンス改善 |
| [フェード](docs/hs/hs_system_function_fade.ja.md) | 黒/白のフェードイン・フェードアウトを指定時間で実行する関数。 | 機能追加 |
| [JsVal](docs/hs/JsVal.ja.md) | ブローカーAPIで外部API通信に使用するHeliScript型。 | 機能追加 |
| [JavaScript](docs/hs/hs_system_function_js.ja.md) | HeliScriptとJavaScript間の双方向連携。 | 機能追加 |
| [Cookie](docs/hs/hs_system_function_cookie.ja.md) | Cookieの存在確認と値の読み書き関数群。 | 機能追加 |
| [レイキャスト](docs/hs/hs_system_function_raycast.ja.md) | 指定位置・方向へレイを飛ばして最も近いItemを検出する関数。 | 機能追加, デバッグ |
| [ローカルデータ](docs/hs/hs_system_function_localdata.ja.md) | 実行ユーザー本人にのみデータを送信する関数。 | 機能追加 |

### 文法と制御構文

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [スコープと定義](docs/hs/hs_scope_def.ja.md) | グローバル/クラス/ローカルの3つのスコープと、変数・定数・関数・クラスの定義方法。 | 初期セットアップ, リファクタ |
| [制御構文](docs/hs/hs_statement_control.ja.md) | if条件分岐、while/for繰り返し、breakによるループ脱出など基本的な制御構文。 | 初期セットアップ, 機能追加 |
| [演算子](docs/hs/hs_operator.ja.md) | 算術演算子、比較演算子、論理演算子、代入演算子、シフト演算子など全演算子一覧。 | 初期セットアップ, 機能追加 |

### サンプル

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [FPSカメラ](docs/hs/hs_sample_fpscamera.ja.md) | 一人称視点(FPS)カメラの実装例。 | 機能追加 |
| [TPSカメラ](docs/hs/hs_sample_tpscamera.ja.md) | 三人称視点(TPS)カメラの実装例。 | 機能追加 |

### Tips/HeliScriptガイド

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [既存UIの消し方](docs/hs/RemoveDefaultUI.ja.md) | hsCanvasSuspendVisibleLayersで既存UIを非表示にする方法。 | 機能追加 |
| [Assertionを使ったスクリプトエラーチェック](docs/hs/hs_assertion_function.ja.md) | グローバル関数としてAssertion機能を実装し、デバッグモード時に条件チェックとエラーメッセージ表示を行う方法。 | デバッグ |

---

## 外部API連携

| ページ | 要約 | 参照シーン |
|--------|------|------------|
| [ブローカーAPIについて](docs/ExternalAPI/BrokerAPI.ja.md) | Vket Cloudで外部APIと連携するためのブローカーAPI。ホワイトリスト登録とJsValを使ったHeliScript実装方法を解説。 | 機能追加 |
| [JsVal](docs/ExternalAPI/JsVal.ja.md) | ブローカーAPI通信用のJsVal型詳細。 | 機能追加 |
| [HeliScriptでJsonを扱う](docs/ExternalAPI/HeliScriptJsonParse.ja.md) | HeliScriptでJsonクラス変数を定義し、hsLoadJsonでデータを読み込んでパース・活用する方法。 | 機能追加 |
