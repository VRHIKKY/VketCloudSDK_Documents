# SDK Manual Change Log - Ver 14.5

## 2025年6月27日更新

## 2025年6月27日 - 追加されたページ

- リリースノート
    - [v15.7](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/releasenote/releasenote-15.7.html)
        - v15.7のリリースノートの新しいページを追加
        - WebXRの不具合修正を追加（右スティック回転時の頭部回転量修正）

## 2025年6月27日 - 編集されたページ

- VKCコンポーネント
    - VKC Node
        - [VKC Node Cylinder Collider](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/VKCComponents/VKCNodeCylinderCollider.html)
            - カプセルコライダーはエリアコライダー用途のみ対応の注意書きを追加
            - Mesh Renderer併用時の非機能について警告を追記
- ワールド制作ガイド
    - [Unity利用ガイドライン](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/UnityGuidelines.html)
        - HeliScriptファイル（.hs）の改行コードはLFのみを使用することの警告を追加
        - CRLFを使用するとビルド時にheliodorでの読み込みエラーが発生することを明記
- 外部API連携
    - [BrokerAPI](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/ExternalAPI/BrokerAPI.html)
        - SPATIUM_CODEのデフォルト値を"Default"から"default"に修正
    - [JsVal](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/ExternalAPI/JsVal.html)
        - JsValリテラルセクションを追加
        - makeJsValFromJson()関数を追加
        - ToString()メソッドを追加
        - makeJsArrayElem()の詳細説明を追加

---

## 2025年6月20日更新

## 2025年6月20日 - 編集されたページ

- HeliScript
    - 組み込み関数
        - [GUI](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_system_function_gui.html)
            - `hsAddGUIAction`関数のシグネチャを修正

---

## 2025年6月11日更新

## 2025年6月11日 - 追加されたページ

- リリースノート
    - [v15.6](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/releasenote/releasenote-15.6.html)
        - v15.6のリリースノートの新しいページを追加
    - [v14.5.10](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/releasenote/releasenote-14.5.html#version-1458)
        - v14.5.8のリリースノートを追加

---

## 2025年5月23日更新

## 2025年5月23日 - 編集されたページ

- [GUITools - 概要とセットアップ
](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/GUITools/Setup.html)
     - GUITools対応のエディターバージョンとして、Unity 2022.3.6f1の記載も含める。

---

## 2025年4月25日更新

## 2025年4月25日 - 編集されたページ

- ワールド制作ガイド
    - [コライダーの使い方 / Tips
](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/Collider.html#_3)
         - Boxコライダー付きのGameObjectはVKCNodeColliderがアタッチされていなくとも物理衝突すること説明に追加

## 2025年4月25日 - 追加されたページ

- ワールド制作ガイド
    - [PlaneアイテムのZbiasを動的に変更する](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/Zbias.html)

---

## 2025年3月28日更新

## 2025年3月28日 - 編集されたページ

- HeliScript
    - 組み込み関数
        - [GUI](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_system_function_gui.html)
            - `hsCanvasResetToggleDefault`と`hsCanvasToggleChange`の説明を修正
    - 組み込み型
        - [基本型](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_var.htm)
            - bool型変数のToString()メソッドの説明を追加
    - 文法と制御構文
        - [制御構文](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_statement_control.html)
            - *{ }*によるスコープ定義の説明追加しました
    - 組み込み型
        - [基本型](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_var.htm)
            - 'this'によるインスタンス自身の参照取得について説明追加しました
            - bool型変数のToString()メソッドの説明を追加
- ワールド制作ガイド
    - [ReplaceTextureでテクスチャの差し替えが正常に出来ない](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/ReplaceTexture.html)
        - トラブルシューティングのケースを追加しました
- HeliScript
    - 文法と制御構文
        - [演算子](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_operator.html)
            - === と == の演算子の誤った説明を修正しました
    - 組み込み関数
        - [GUI](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_system_function_gui.html)
            - hsCanvasSetGUIText関数に注釈を追記

---

## 2025年3月26日更新

## 2025年3月26日 - 編集されたページ

- HeliScript
    - 組み込みクラス・関数
        - [Quaternionクラス](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_struct_quaternion.html)
            - makequaternioneuler関数に注釈を追記
- VKCコンポーネント
    - VKC Item
        - [VKC Item Area Collider](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/VKCComponents/VKCItemAreaCollider.html)
            - 文言を修正
    - VKC Node
        - [VKC Node Collider](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/VKCComponents/VKCNodeCollider.html)
            - 画像リンク・文言を修正
            
---

## 2025年3月21日更新

## 2025年3月21日 - 追加されたページ

- ワールド制作ガイド
    - [ワールド入場時間を制限する](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/JsUpload_RestrictEntryTime.html)  
    - [Web APIを使用し現在の天気を取得する](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/JsUpload_FetchCurrentWeather.html)  

## 2025年3月21日 - 編集されたページ

- ワールド制作ガイド
    - [JS入稿のサンプル](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/JsUpload_Sample.html)
        - サンプルワールドからチュートリアルシーンへ文言を変更。
- 外部API連携
    - [HeliScriptでJsonを扱う](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/ExternalAPI/HeliScriptJsonParse.html)  
        - 新しいsdk向けに情報を更新しました

---

## 2025年3月14日更新

## 2025年3月14日 - 編集されたページ

- HeliScript
    - 組み込みクラス・関数
        -  [Itemクラス](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/en/hs/hs_class.html)
            - `IsCollisionDetection`を追記

## 2025年3月14日 - 追加されたページ
- HeliScript
    - 組み込みクラス・関数
        - [HSRaycastHIT Class](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/en/hs/hs_struct_hsraycasthit.html)
    - 組み込み関数
        - [Cookie](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_system_function_cookie.html)
- ワールド制作ガイド
    - [HeliScriptでCanvas要素を制御する](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/HeliscriptCanvas.html)

---

## 2025年3月7日更新

## 2025年3月7日 - 追加されたページ

- FAQ
    - [効果音の初回再生が遅い問題の解消](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/FAQ/FirstSE.html)
    - [Lib13移行のモーション追加](https://vrhikky.github.io/VketCloudSDK_Documents/latest/FAQ/AddMotionsAfterLib13.html)
- ワールド制作ガイド
    - [VketCloudでのユーザビリティを向上させる](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/VketCloudUsability.html)
- ワールドの軽量化方法
    - [ASTCとETC2とは](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldOptimization/AstcAndEtc2.html)

## 2025年3月7日 - 編集されたページ

- HeliScript
    - 組み込み関数
        - [GUI](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/hs/hs_system_function_gui.html)
            - hsCanvasWorldToScreenPosの関数の変換後のScreen座標の詳細を記述する。
- ワールド制作の基本
    - [ローカル環境でのビルドと実行](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/FirstStep/BuildAndRun.html)
        - ローカルでAPI機能とログイン機能が使えない文言にさらに画像を追加し、説明を加える。
- Vket Cloud SDKについて
    - [アバターの使用方法](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/AboutVketCloudSDK/SetupAvatar.html)
        - MyVketからVket Cloud公式サイトへ導線を変更
- FAQ
    - [旧MyVketでアカウントを作成し、プロフィール画像起因のエラーが発生する場合の解決法](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/FAQ/ProfileImage.html)
        - MyVketからVket Cloud公式サイトへ導線を変更
- トラブルシューティング
    - [SDK初学者：何か起きたときにとりあえず見るべきリスト](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/troubleshooting/GeneralChecklist.html)
        - Discordサーバ名を変更

---

## 2025年2月28日更新

## 2025年2月28日 - 追加されたページ

- ワールド制作ガイド
    - [カプセル長方形の画像を9sliceで作成する](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/9slice.html)

---

## 2025年2月21日更新

## 2025年2月21日 - 編集されたページ

- VKCコンポーネント
    - VKC Item
        - [VKC Item Object](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/VKCComponents/VKCItemObject.html)
            - Pickableの注記に14.5.6にて修正済の旨追記
- SDK Tools
    - パーティクルエディター
        - [パーティクルエディター概要](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/en/particleeditor/pe_about_particleeditor.html)
            - 注記に14.5.6にて不具合修正済の旨追記
- ワールド制作ガイド
    - [オブジェクトをアニメーションさせる](https://vrhikky.github.io/VketCloudSDK_Documents/14.5/WorldMakingGuide/PropAnimation.html)
        - system.GetDeltaTime()からhsSystemGetDeltaTime()に変更

