# SDK Manual Change Log - Ver 9.3

## 追加されたページ

- 編集のためのTips
    - [複数のHEOコンポーネントの一括編集](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/WorldEditingTips/MultiSelect_HEOComponents.html)
    - [UnlitマテリアルのContributeGI設定を外す](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/WorldEditingTips/DisableContributeGITool.html)
    - [EditorOnlyタグの使用方法](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/WorldEditingTips/EditorOnlyTag.html)
    - [デバッグモード](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/WorldEditingTips/DebugMode.html)
- HEOコンポーネント
    - [HEOActivity](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOActivity.html)
    - [HEOBackgroundTexture](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOBackgroundTexture.html)
- HeliScript
    - [HeliScript/組み込み関数 - ChatGPT](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_system_chatgpt.html)
    - [HeliScript/組み込み関数 - 物理演算](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_system_physics.html)

## 変更されたページ

- VketCloudSDKについて
    - [VketCloudSDKの導入方法](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/AboutVketCloudSDK/SetupSDK_external.html)
        - インストールウィザード及びVersion Managerの使用方法を追加
    - [アバターの使用方法](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/AboutVketCloudSDK/SetupAvatar.html)
        - アバターの使用方法を現行版に更新
- ワールド制作ガイド
    - [Vket Cloudの仕様制限](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/WorldMakingGuide/UnityGuidelines.html)
        - 同名のオブジェクトの複数配置非推奨を明記
    - [AvatarFile](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/WorldMakingGuide/AvatarFile.html)
        - 設定方法及び解説画像を更新
- ワールドの軽量化方法
    - [テクスチャ圧縮](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/heoexporter/he_TextureCompression.html)
        - pvrtcに加えてdxt変換が廃止になったため記述から削除
- HEOコンポーネント
    - [HEOField](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOField.html)
        - 各設定項目及びLook at Cameraの説明を追加
    - [HEOObject](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOObject.html)
        - 新規の設定項目を追加し、関連の解説を追加 (shadow caster / receiver, foreground rendering, circle shadow, lookatcamera, etc.) 
        - heoファイル及びモーションのプレビュー機能解説を追加
    - [HEOPlane](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOPlane.html)
        - 新規の設定項目を追加し、関連の解説を追加 (lookatcamera) 
    - [HEOPlayer](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOPlayer.html)
        - TPS Rotation, Jump Velocity, Move Speedなどの設定項目を追加
    - [HEOTextPlane](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOTextPlane.html)
        - 新規の設定項目を追加し、関連の解説を追加 (textalignment, charaspace, linespace, overflowwrap, lookatcamera) 
    - [HEOWorldSetting](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/HEOComponents/HEOWorldSetting.html)
        - ゲームパッドの設定・操作方法を追加
        - アバターの設定についての解説を追記
        - 音声減衰、TPSカメラの最大ピッチ角度、スペキュラーのミップマップカウントを記載
        - Multi Play Mode In Local Build廃止に伴い項目を削除(現バージョンにおいてはデフォルトでマルチプレイモードです)
- アクション
    - [CallScript](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/Actions/Programmatic/CallScript.html)
        - 画像をVer9.3仕様に差し替え
    - [Warp](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/Actions/System/Warp.html)
        - 座標指定からオブジェクト指定に変更

- HeliScript
    - [HeliScript/文字列(String)](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_string.html)
    - [HeliScript/組み込み関数 - システム](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_system_function.html)
        - 文字列におけるアポストロフィ / シングルクォートの使用について不具合を記載
    - [HeliScript/Vector3クラス](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_struct_vector3.html)
    - [HeliScript/Playerクラス](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_class_player.html)
    - [HeliScript/Itemクラス](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_class_item.html)
    - [HeliScript/組み込み関数 - システム](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_system_function.html)
    - [HeliScript/組み込み関数 - ネットワーク](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_system_function_net.html)
    - [HeliScript/組み込み関数 - GUI](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/hs/hs_system_function_gui.html)
        - 現バージョンにて使用できる関数を反映
- トラブルシューティング
    - [バージョンアップ後によくあるトラブル](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/troubleshooting/VersionUpdateTroubleshooting.html)
        - 旧タイトルを改題
        - Ver9.3へのアップデート時に欠落する恐れのある設定について追記
        - 設定画面でのバージョン表記が旧バージョンのままになっている / HeliScript・ギミックがバージョンアップ後に動かない際の対処を追記
        - ファイルの破損エラーが表示される際の対処を追記

## 削除されたページ

- 自動テクスチャ圧縮
- アクション
    - GTag
    - CallJavascript
    - Jumpworld
    - Showlayer
- HeliScript
    - 組み込み関数 
        - JavaScript
- HEOTweetTrigger
- チェックツール (本バージョンでは[デバッグコンソール](https://vrhikky.github.io/VketCloudSDK_Documents/9.3/ja/debugconsole/debugconsole.html)をご使用ください)
