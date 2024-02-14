# SDK Manual Change Log - Ver 12.1

## 追加されたページ

- Vket Cloud Settings
  - [Vket Cloud Settings - 概要](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/Overview.html)
  - [BasicSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/BasicSettings.html)
  - [PlayerSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/PlayerSettings.html)
  - [DespawnHeightSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/DespawnHeightSettings.html)
  - [CameraSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/CameraSettings.html)
  - [RenderingSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/RenderingSettings.html)
  - [AvatarSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/AvatarSettings.html)
    - デフォルトアバターを4種類に拡大した旨を追記
  - [MyAvatarSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/VketCloudSettings/MyAvatarSettings.html)
- 編集のためのTips
  - [ビルド時のオプション](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/WorldEditingTips/BuildOptions.html)
 - SDKTools
  - [Texture Import Viewer](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/SDKTools/TextureImportViewer.html)
- HeliScript
  - [デリゲート(delegate)](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_delegate.html)
  - [カメラ](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_system_function_camera.html)
  - [汎用ダイアログ](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_system_function_commondialog.html)
  - [Itemの種類一覧 / HeliScript関数対応表](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_item_types_functions.html)

## 変更されたページ

- ワールド制作の基本
  - [ローカル環境でのビルドと実行](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/FirstStep/BuildAndRun.html)
    - タイトルを変更し、フォーマットを修正
    - ビルド時のオプションについて案内を追記
  - [ワールドアップロード](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/FirstStep/WorldUpload.html)
    - World Uploaderの機能追加に伴い追記
- SDK Tools
  - [デバッグコンソール](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/debugconsole/debugconsole.html)
    - テクスチャサイズ（メモリ）とメッシュポリゴン数の表示について追記
- ワールドの軽量化方法
  - [テクスチャ圧縮](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/WorldOptimization/TextureCompression.html)
    - Texture Import Viewerについて案内を追加
- HEOコンポーネント
    - [HEOActivity](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/HEOComponents/HEOActivity.html)
      - Scene Previewと高度な設定について追記
- アクションについて
  - Programmatic
    - [If Variable Equal To Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/Actions/Programmatic/IfEqual.html)
      - タイトルを変更（旧：If A == B）
      - 解説をSDK Ver12.1に準拠
    - [If Variable Not Equal To Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/Actions/Programmatic/IfNotEqual.html)
      - タイトルを変更（旧：If A != B）
      - 解説をSDK Ver12.1に準拠
    - [If Variable More Than Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/Actions/Programmatic/IfMoreThan.html)
      - タイトルを変更（旧：If A >= B）
      - 解説をSDK Ver12.1に準拠
    - [If Variable Less Than Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/Actions/Programmatic/IfLessThan.html)
      - タイトルを変更（旧：If A <= B）
      - 解説をSDK Ver12.1に準拠
- HeliScript
Ver12.xにて追加されたHeliScriptへの変更を追記：
  - [クラス](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_class.html)
    - オブジェクトの生成・削除、存在の判定について追記
  - [コンポーネント / コールバック関数](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_component.html)
    - オブジェクトの選択解除のコールバック関数を追加
  - [Itemクラス](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_class_item.html)
    - 各メソッドを呼び出し可能なオブジェクトのタイプを追記
  - [Playerクラス](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_class_item.html)
    - 新規関数：ChangeActivityMotion / SetNextActivityMotion, SetPresetAvatarを追記
  - [文字列(string)](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_string.html)
    - Split系関数を追加
  - [制御構文](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_statement_control.html)
    - ループの例示、break, continueについて追記
  - [組み込み関数 - システム](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_system_function.html)
    - hsIsMobile, 型変換(キャスト)系関数を追加
  - [組み込み関数 - GUI](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_system_function_gui.html)
    - hsCanvasSetGUIPosの引数を変更
  - [組み込み型](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_var.html)
    - ToString関数を追記
- 機能廃止に伴い、以下のページにて新機能への誘導を追加
  - [HEOWorldSetting](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/HEOComponents/HEOWorldSetting.html)  
  - [HEODespawnHeight](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/HEOComponents/HEODespawnHeight.html)  
  - [HEOPlayer](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/HEOComponents/HEOPlayer.html)  

## 削除されたページ
