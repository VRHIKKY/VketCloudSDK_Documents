# SDK Manual Change Log - Ver 14.2

## 2025年1月10日更新

## 2025年1月10日 - 変更されたページ

- トラブルシューティング
    - [ビルドエラー/ワールドが動かないときは](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/troubleshooting/BuildError.html)
        - エラー一覧を追加しました

## 2024年12月13日更新

## 2024年12月13日 - 変更されたページ

- ワールドの制作の基本
    - [ローカル環境でのビルドと実行](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FirstStep/BuildAndRun.html)
        - ローカルビルドだと、ログインやAPI周りの連携はできないことを記載する
- HeliScript
    - [コンポーネント / コールバック関数](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_component.html)
        - コールバック - ItemColliderの説明を追加
        - コールバック - メッセージの説明を追加
    - 組み込みクラス・関数
        - [Quaternionクラス](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_struct_quaternion.html)
            - Set関数の説明を追加しました
            - SetEuler関数の説明を追加しました
            - SetEulerVector3関数の説明を追加しました
            - GetEuler関数の説明を追加しました
            - GetEulerVector3関数の説明を追加しました
        - [Itemクラス](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_class_item.html)
            - GetParentItem関数の説明を追加しました
            - SetUVScale関数の説明を追加しました
            - SetMaterialColor関数の説明を追加しました
            - SetAlpha関数の説明を追加しました
            - SetPlaneZBias関数の説明を追加しました
            - GetPlaneZBias関数の説明を追加しました
            - ReplaceBackupTexture関数の説明を追加しました
            - SetPropertyWithoutNotify関数の説明を追加しました
            - GetNumofPolygon関数の説明を追加しました
            - SendMessage関数の説明を追加しました
        - [Dateクラス](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_class_date.html)
            - hsParseDate関数の説明を追加しました
            - メソッド (演算)の説明を追加しました
            - メソッド (比較)の説明を追加しました
    - 組み込み関数
        - [数学](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function_math.html)
            - hsMathAcos関数の説明を追加しました
            - hsMathAsin関数の説明を追加しました
            - hsMathDegToRad関数の説明を追加しました
            - hsMathRadToDeg関数の説明を追加しました
        - [ネットワーク](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function_net.html)
            - ページのレイアウト調整
        - [GUI](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function_gui.html)
            - hsCanvasSuspendVisibleLayers関数の説明を追加しました
            - hsCanvasResumeVisibleLayers関数の説明を追加しました
            - ウィンドウシステムの説明を追加しました
        - [汎用ダイアログ](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function_commondialog.html)
            - 汎用ダイアログの説明を修正

## 2024年12月13日 - 追加されたページ

- HeliScript
    - 組み込みクラス・関数
        - [TimeSpanクラス](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_class_timespan.html)
    - 組み込み関数
        - [入力](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function_input.html)
            - hsInputIsKeyDown関数の説明を追加しました
            - hsInputSetKeyValid関数の説明を追加しました
        - [JavaScript](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function_js.html)
            - HeliScript と JavaScript の連携についての説明を追加しました
        - [TextChat](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function_textchat.html)
            - hsTextChatOutput関数がSDK12.3.4以降利用できないことを記載。
- FAQ
    - [MeshColliderとHEOAreaColliderを持つコライダーが重なっていた場合、HEOAreaColliderが動作しない](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/MeshColiderAndAreaColliderOverrap.html)
    - [VRChat用のアニメーションシェーダー素材をVketCloudに移植する手順](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/VRChatAnimationForVKC.html)
    - [デリゲート関数内でhsItemGetOwnScene()してもアイテムが取得出来ないことがある](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/hsItemGetOwnScene.html)
- ワールド制作ガイド
    - [テクスチャをぼやけさせない](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldMakingGuide/GuideToClearTextures.html)
    - [ライトスキャタリング](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldMakingGuide/LightScattering.html)
    - [プレイヤーに追従するテキストの実装](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldMakingGuide/PlayerFollowText.html)

---

## 2024年12月6日更新

## 2024年12月6日 - 変更されたページ

- VKCコンポーネント
    - VKC Item
        - [VKC Item Background Texture](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/VKCComponents/VKCItemBackgroundTexture.html)
            - 使い方のページのリンクURLを追加しました
- ワールド制作ガイド
    - [ロードが完了したら開く扉](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldMakingGuide/DoorOpensAfterLoad.html)
        - レイアウト修正

## 2024年12月6日 - 追加されたページ

- ワールド制作ガイド
    - [VKC Item Background Textureの使い方](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldMakingGuide/BackgroundTexture.html)
        - VKC Item Background Textureの使い方のページを追加しました

---

## 2024年11月29日更新

## 2024年11月29日 - 変更されたページ
- VKCコンポーネント
    - VKC Item
        - [VKC Item Field](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/VKCComponents/VKCItemField.html)
            - ロードが完了したら開く扉へのリンクを追加
        - [VKC Node UV Scroller](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/VKCComponents/VKCNodeUVScroller.html)
            - Sampleを追加
- トラブルシューティング
    - [UnityとVketCloudの見た目をそろえる](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/heoexporter/he_align_unity_to_vketcloud.html)
        - 画像や文章を凡例の説明とともに更新しました。

## 2024年11月29日 - 追加されたページ

- ワールド制作ガイド
    - [ロードが完了したら開く扉](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldMakingGuide/DoorOpensAfterLoad.html)
- FAQ
    - [UV2が用いられていないメッシュのオブジェクトがMeshにアタッチされている場合のビルドエラーの解決法](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/UV2MeshError.html)
    - [SphereColliderをクリックしても反応しない場合の解決方法](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/SphereCollider.html)

---

## 2024年11月27日更新

## 2024年11月27日 - 追加されたページ

- リリースノート
    - [v14.4](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/releasenote/releasenote-14.4.html)
        - v14.4のリリースノートを追加しました 

---

## 2024年11月22日更新

## 2024年11月22日 - 追加されたページ

- FAQ
    - [旧MyVketでアカウントを作成し、プロフィール画像起因のエラーが発生する場合の解決法](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/ProfileImage.html)
    - [UV2が用いられていないメッシュのオブジェクトがMeshにアタッチされている場合のビルドエラーの解決法](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/UV2MeshError.html)
    - [SphereColliderをクリックしても反応しない場合の解決方法](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/SphereCollider.html)

## 2024年11月22日 - 変更されたページ

- VketCloudSDKについて
    - [SDKの導入方法](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/AboutVketCloudSDK/SetupSDK_external.html)
        - EditorCoroutineのPackageがInstallされない問題の対処法を追加
- VKCコンポーネント
    - VKC Node
        - [VKC Node Collider](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/VKCComponents/VKCNodeCollider.html)
            - コライダータイプ設定についての注意を追加しました
- HeliScript
    - 組み込み関数
        - [システム](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_system_function.html)
            - hsWebReload関数の説明を追加しました

---

## 2024年11月8日更新

## 2024年11月8日 - 変更されたページ

- ワールド制作ガイド
    - [VketCloudの仕様制限](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldMakingGuide/UnityGuidelines.html)
        - VKC Item Text Planeにおいて、"\n"以外の文字列を入力した場合のビルドエラーについての注意を追加しました
- VKCコンポーネント
    - VKC Item
        - [VKC Item Text Plane](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/VKCComponents/VKCItemTextPlane.html)
            - 正規表現の"\n"以外の文字列を入力した場合のビルドエラーについての注意を追加しました
- HeliScript
    - 組み込みクラス・関数
        - [Itemクラス](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/hs/hs_class_item.html)
            - GetNodeIndexByNameとGetNodeNameByIndexとGetNodePosByIndexのメソッドに、見つからなかったときに返す値を追記する

---

## 2024年11月1日更新

## 2024年11月1日 - 変更されたページ

- VKCコンポーネント
    - VKC Setting
        - [VKC Player Settings](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/VketCloudSettings/PlayerSettings.html)
            - Enable Click to MoveとDespawn Height (Y)の説明を追加しました
    - VKC Item
        - [VKC Item Field](https://vrhikky.github.io/VketCloudSDK_Documents/14.1/VKCComponents/VKCItemField.html)
            - Force Raycast Check DisableとForce Collider Disableの説明を追加しました
        - [VKC Item Object](https://vrhikky.github.io/VketCloudSDK_Documents/14.1/VKCComponents/VKCItemObject.html)
            - Force Raycast Check DisableとForce Collider Disableの説明を追加しました
- 外部API連携
  - [ブローカーAPIについて](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/ExternalAPI/BrokerAPI.html)
    - サンプルコードを更新

## 2024年11月1日 - 追加されたページ

- 編集のためのTips
    - [ヒエラルキーアイコン
](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/WorldEditingTips/HierarchyIcons.html)
