# SDKマニュアル変更履歴 - Ver 16.2

## 2026年1月21日更新

## 2026年1月21日 - 編集されたページ

- VketCloudSettings
    - [RenderingSettings](../VketCloudSettings/RenderingSettings.ja.md): `Ambient Color`パラメータを追加しました。

## 2025年12月1日更新

## 2025年12月1日 - 追加されたページ

- リリースノート
    - [Version 16.3.0](../releasenote/releasenote-16.3.ja.md): リリースノート16.3.0を追加しました。

## 2025年11月12日更新

## 2025年11月12日 - 追加されたページ

- HeliScript
    - 組み込み型
        - [Enum](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_enum.html): enum型に関する説明を追加しました。
        - [String](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_string.html): 文字列(string)型に関する説明を追加しました。
    - [Interface](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_interface.html): interfaceに関する説明を追加しました。
    - 組み込みクラス
        - [Vector2クラス](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_struct_vector2.html): Vector2クラスに関する説明を追加しました。
        - [Vector4クラス](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_struct_vector4.html): Vector4クラスに関する説明を追加しました。
        - [GUIElementクラス](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_class_guielement.html): GUIElementクラスに関する説明を追加しました。
        - [Layerクラス](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_class_Layer.html): Layerクラスに関する説明を追加しました。
        - [LayerBundleクラス](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_class_layerbundle.html): LayerBundleクラスに関する説明を追加しました。
        - [ShallowCloneParamクラス](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_class_shallowcloneparam.html): ShallowCloneParamクラスに関する説明を追加しました。
    - JavaScript連携
        - [JsVal](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/JsVal.html): JsValクラスに関する説明を追加しました。
    - 組み込み関数
        - [Fade](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_system_function_fade.html): フェードに関するシステム関数の説明を追加しました。
    - サンプル
        - [FPSカメラ](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_sample_fpscamera.html): FPS視点カメラの実装サンプルを追加しました。
        - [TPSカメラ](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_sample_tpscamera.html): TPS視点カメラの実装サンプルを追加しました。

## 2025年11月12日 - 編集されたページ

- HeliScript
  - 組み込み型
    - [String](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_string.html): `Replace`メソッドに関する説明を追記しました。
  - 組み込みクラス
    - [Itemクラス](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_class_item.html):
      - ポイントライトを操作するためのメソッドに関する説明を追記しました。
      - 名前でノードを指定し、そのノードの位置を変更する`SetPosNode`を追加しました。
      - インデックスでノードを指定し、そのノードの回転（Quaternion）を取得する`GetNodeRotateByIndex`を追加しました。
      - `SetRotateNode`を[VKC Item Object](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/VKCComponents/VKCItemObject.html)に対応させました。
      - `hsItemGet`の説明を更新し、VKC Item Field以下のアイテムを取得することを明記しました。
      - `hsItemCreateClone`でクローン可能なアイテムタイプに`textplane`と`activity`を追加しました。
      - `hsItemDestroyClone`にアイテム削除時の詳細な動作説明を追加しました。
      - `hsItemCreateShallowClone`と`hsItemDestroyAllShallowClone`の新しい関数を追加しました。
      - `IsAlive`メソッドを追加し、インスタンスの生存状態を確認できるようになりました。
      - `SetPos`メソッドに`CollisionDetection`パラメータを追加しました。
      - `MovePos`メソッドに`Gravity`パラメータを追加しました。
      - 多数の新しいメソッドを追加：
        - ノードのワールド座標系操作：`GetNodeWorldPos`、`GetNodeWorldRotate`、`GetNodeWorldScale`、`GetNodeWorldPosByIndex`、`GetNodeWorldRotateByIndex`、`GetNodeWorldScaleByIndex`
        - ノードのローカル座標系操作：`GetNodeLocalPos`、`GetNodeLocalRotate`、`GetNodeLocalScale`、`GetNodeLocalPosByIndex`、`GetNodeLocalRotateByIndex`、`GetNodeLocalScaleByIndex`、`SetNodeLocalPos`、`SetNodeLocalRotate`、`SetNodeLocalScale`
        - UV座標取得：`GetUVScale`、`GetUVOffset`
        - マテリアル色取得：`GetMaterialColor`
        - シェーダーユニフォーム操作：`SetShaderUniformFloat`、`GetShaderUniformFloat`、`SetShaderUniformVector4`、`GetShaderUniformVector4`
        - ビデオ操作：`SwitchVideo`
        - Plane操作：`SetPlaneZBias`、`GetPlaneZBias`
        - 衝突判定操作：`SetCollisionDetection`
      - `TextPlane`関連の多数のメソッドを追加（フォントサイズ、テクスチャサイズ、配置、色、折り返し、文字間、行間設定など）
      - ボーン操作用のメソッド（`GetBonePos`、`GetBoneWorldPos`、`GetBoneRotate`）を追加しました。
      - プロパティ削除メソッド（`RemoveProperty`、`RemovePropertyWithoutNotify`）を追加しました。
      - 物理演算操作メソッド（`SetPhysicsWorldPos`、`SetPhysicsWorldRotation`、`ClearPhysicsWorldForce`、`AddPhysicsWorldForce`、`AddPhysicsWorldVelocity`）を追加しました。
      - コールバック関数`OnLongPressedItem`を追加しました。
  - 組み込み関数
    - [入力](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_system_function_input.html):
      - `HSTouch`クラスを追加し、タッチ情報を取得できるようになりました。
      - マウス関連の関数（`hsInputClickButton`、`hsInputGetMousePos`、`hsInputLButtonClickEmpty`）を追加しました。
      - タッチ関連の関数（`hsInputGetTouch`、`hsInputGetTouchCount`、`hsInputGetTouchIds`、`hsInputGetTouchById`）を追加しました。
      - 画面座標変換関数（`hsInputScreenToWorldPos`、`hsInputIsInVirtualPadArea`）を追加しました。
      - VRデバイス対応の関数（`hsInputIsVRDeviceButtonDown`、`hsInputGetVRDevicePos`、`hsInputGetVRDeviceRotate`）を追加しました。
      - VRデバイスとボタンのキーコード表を追加しました。
      - マルチタッチ対応とタッチIDによる管理機能を追加しました。
    - [システム](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_system_function.html):
      - イベントリスナー機能を追加：`hsAddEventListener`、`hsRemoveEventListener`、`hsClearEventListener`、`hsDispatchEvent`
      - 空気抵抗操作機能を追加：`hsGetAirResistance`、`hsSetAirResistance`
      - 動画再生状態確認機能を追加：`hsVideoIsPlaying`
      - Web関連機能を追加：`hsWebTransitionToPage`
    - [カメラ](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_system_function_camera.html):
      - カメラ設定取得機能を追加：`hsCameraGetRotateSpeed`、`hsCameraGetXRotateReverse`、`hsCameraGetYRotateReverse`
      - カメラ視点設定取得機能を追加：`hsCameraGetAdjustType`、`hsCameraGetPitchAngleType`
      - アイテムカメラ名取得機能を追加：`hsGetCameraName`
    - [レイキャスト](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_system_function_raycast.html):
      - `HSRaycastHIT`クラスに`NodeIndex`と`UV`プロパティを追加しました。
  - [コールバック関数](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_component.html): `OnDelayLayersLoaded`、`OnLongPressedEmpty`、`OnClickNode(string NodeName)`、`OnItemTriggerEnter`、`OnItemTriggerLeave`、`OnItemCollisionEnter`、`OnItemCollisionLeave`、`OnItemCreatedClone`、`OnItemDestroyedClone`、`OnRemovedProperty`、`OnMotionChanged`に関する説明を追記しました。
  - 文法と制御構文
    - [制御構文](https://vrhikky.github.io/VketCloudSDK_Documents/16.0/hs/hs_statement_control.html): `switch`文やブロック構文に関する説明を追記・修正しました。
  - 動作環境
    - [動作環境](../AboutVketCloudSDK/OperatingEnvironment.md)
      - Unity6をサポート対象エディターに追加（SDK16.2以降）
  - LoginSDK
    - [LoginSDK](../AboutVketCloudSDK/LoginSDK.md)
      - macOS環境におけるログイン注意事項にUnity 6を追加
      - Safari使用時の複数Unityバージョン共存によるログイン問題の対象にUnity 6を含める
  - トラブルシューティング
    - [ディープリンクのインストール](../troubleshooting/InstallingDeeplink.md)
      - macOS環境における注意事項にUnity 6を追加
      - ログイン不具合の原因としてUnity6も明記
