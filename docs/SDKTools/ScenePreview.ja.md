# シーンプレビュー (β)

![ScenePreview_2](./img/ScenePreview_2.jpg)

SDK Ver13.4では、従来の[Build & Run](../FirstStep/BuildAndRun.md)によるワールドの確認のほかに新たにUnity上でのシーンプレビューに対応しました。<br>
本機能によって、ビルドを行うことなく簡易的にワールド上でのプレイヤーの挙動を確認することができます。

!!! warning "β機能について"
    本機能は現在β版であり、未実装の機能や挙動が含まれております。<br>
    次回以降のSDKバージョンにおいて機能が追加される予定です。

## 使い方

![ScenePreview_1](./img/ScenePreview_1.jpg)

シーンを保存した状態で、Unity上部のPlayボタン (▶)を押します。

![ScenePreview_2](./img/ScenePreview_2.jpg)

Gameウィンドウに[AvatarSettings](../VketCloudSettings/AvatarSettings.md)にて設定されているデフォルト(0番目)のプレイヤーアバターが表示されます。<br>
通常のワールド内と同様に、WASDキーでプレイヤーの移動、スペースキーでジャンプ、マウスドラッグでカメラ移動が可能です。

## 注意事項

現バージョンでは、以下コンポーネントが含まれているオブジェクトはシーンプレビューにて表示・再生されません。

### VKCSettings

- [BasicSettings](../VketCloudSettings/BasicSettings.md)
  - ブラウザでのみ確認可能な設定：
    - Gamepad Mode
    - Use Avatar Click
    - Occlusion Culling
    - Physics Engine
  - マルチプレイ関連の設定：
    - Voice Attenuation
    - テキストチャット
    - アバターの変更

- [MyAvatarSettings](../VketCloudSettings/MyAvatarSettings.md)
  - Motion
  - Emotion
  - Objects

- [CameraSettings](../VketCloudSettings/CameraSettings.md)
  - カメラズームに関する設定 (TPS Max Distance / Max Pitch Angle)

### Attribute

- [VKCAttributeClickGuide](../VKCComponents/VKCAttributeClickGuide.md)

### Node

- [VKCNodeRotateAnimation](../VKCComponents/VKCNodeRotateAnimation.md)
- [VKCNodeUVScroller](../VKCComponents/VKCNodeUVScroller.md)
- [VKCNodeShadow](../VKCComponents/VKCNodeShadow.md)
- [VKCNodeMirror](../VKCComponents/VKCNodeMirror.md)

### Item

- [VKCItemSpot](../VKCComponents/VKCItemSpot.md)
- [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
- [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
- [VKCItemAudio](../VKCComponents/VKCItemAudio.md)

### その他

- SkinnedMeshRenderer

また、HeliScript, [VKCNodeVideoTrigger](../VKCComponents/VKCNodeVideoTrigger.md), [VKCAttributeActionTrigger](../VKCComponents/VKCAttributeActionTrigger.md), [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)などのギミックはUnity上のシーンプレビューでは動作しません。<br>
これらの挙動をチェックしたい場合は、ワールドの[Build & Run](../FirstStep/BuildAndRun.md)を行ってください。
