# SDK Manual Change Log - Ver 12.1

## Added Pages

- Vket Cloud Settings
  - [Vket Cloud Settings - Overview](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/Overview.html)
  - [BasicSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/BasicSettings.html)
  - [PlayerSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/PlayerSettings.html)
  - [DespawnHeightSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/DespawnHeightSettings.html)
  - [CameraSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/CameraSettings.html)
  - [RenderingSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/RenderingSettings.html)
  - [AvatarSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/AvatarSettings.html)
    - Added mention on preset avatars: 4 types now available!
  - [MyAvatarSettings](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/VketCloudSettings/MyAvatarSettings.html)
- World Editing Tips
  - [Build Options](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/WorldEditingTips/BuildOptions.html)
- SDKTools
  - [Texture Import Viewer](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/SDKTools/TextureImportViewer.html)
- HeliScript
  - [デリゲート(delegate)](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_delegate.html)
  - [カメラ](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_system_function_camera.html)
  - [汎用ダイアログ](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/ja/hs/hs_system_function_commondialog.html)
  - [Item Types and Usable Functions](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/hs/hs_item_types_functions.html)

## Edited Pages

- First Steps
  - [Build and Run](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/FirstStep/BuildAndRun.html)
    - Revised title and reedited format
    - Added info on build options
  - [World upload](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/FirstStep/WorldUpload.html)
    - Edited how-to on operating World Uploader
- SDK Tools
  - [Debug Console](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/debugconsole/debugconsole.html)
    - Added info on Texture Size (Memory) and Mesh Polygon Count indicator
- World Optimization
  - [Texture Compression](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/WorldOptimization/TextureCompression.html)
    - Added overview of Texture Import Viewer
- Actions
  - Programmatic
    - [If Variable Equal To Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/Actions/Programmatic/IfEqual.html)
      - Changed Title (old:If A == B)
      - Updated description according to SDK Ver12.1
    - [If Variable Not Equal To Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/Actions/Programmatic/IfNotEqual.html)
      - Changed Title (old:If A != B)
      - Updated description according to SDK Ver12.1
    - [If Variable More Than Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/Actions/Programmatic/IfMoreThan.html)
      - Changed Title (old:If A >= B)
      - Updated description according to SDK Ver12.1
    - [If Variable Less Than Value](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/Actions/Programmatic/IfLessThan.html)
      - Changed Title (old:If A <= B)
      - Updated description according to SDK Ver12.1
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
- According to deprecation, added notation to new features on pages below:
  - [HEOWorldSetting](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/HEOComponents/HEOWorldSetting.html)  
  - [HEODespawnHeight](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/HEOComponents/HEODespawnHeight.html)  
  - [HEOPlayer](https://vrhikky.github.io/VketCloudSDK_Documents/12.1/en/HEOComponents/HEOPlayer.html)  

## Deleted Pages
