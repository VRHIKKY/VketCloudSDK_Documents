# VKC Setting Camera

![VKCSettingCamera_1](img/HEOWorldSetting_Camera.jpg)

VKC Setting Cameraは、カメラの挙動に関するコンポーネント設定です。

!!! info "コンポーネントについて"
    このコンポーネントはVKC Setting系コンポーネントの一つで、ワールド内でのカメラ制御を個別に設定できます。

このコンポーネントを使用することで、ワールド内でのカメラの動作や制限を細かく制御することができます。

---

## 基本設定

VKC Setting Cameraの各パラメータについて説明します。

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Smoothing | false | カメラの上下の動きにスムージングをかけるかどうかを指定します。 |
| Far Offset (y-axis) | 0.0 | TPSカメラの注視点を上下に調整できます。 |
| Near Offset (y-axis) | 0.0 | TPSカメラの注視点を上下に調整できます。 |
| Photo Radius | 20.0 | 撮影モードカメラの移動可能半径を指定します。|
| Raycast Max Distance | 50.0 | クリック判定をおこなうカメラからの最大距離をメートル単位で指定します。 |
| TPS Pitch Max Angle | 6.0 | TPSカメラの最大ピッチ角度を指定します。<br> ワールド内の設定の「アイレベル」にて「高い」を選択すると本設定の値が適用され、「普通」を選択すると半分の値が適用されます。 |
| TPS Camera Max Distance | 10.0 | TPSカメラの最大ズームアウト距離を指定します。 |
| Enable X Rotation | true | falseにするとX軸の回転を制限します。見上げたり見下ろしたりができなくなります。 |
| Default TPS Camera | TPS Center | TPSカメラのオフセットを指定できます。<br> ワールド内設定の三人称視点位置にて切り替えることができます。<br>`TPS Center`：真後ろ`right`：右肩越し（一般的なTPSカメラ）`left`：左肩越し |

## 使用例

### 基本的なカメラ設定
一般的なワールドでの推奨設定例：

- **Smoothing**: true（滑らかなカメラ移動のため）
- **TPS Pitch Max Angle**: 45.0（広い視野角のため）
- **TPS Camera Max Distance**: 15.0（適度なズームアウト距離）

### 制限的なカメラ設定
特定のエリアでカメラ移動を制限したい場合：

- **Enable X Rotation**: false（上下の視点移動を無効）
- **Photo Radius**: 5.0（撮影モードでの移動範囲を制限）

## 関連コンポーネント

このコンポーネントは以下の設定と連携します：

- [VKCSettingWorldCamera](../VketCloudSettings/CameraSettings.md) - ワールド全体のカメラ設定
- VKCItemCamera - 個別のカメラオブジェクト設定

## 注意事項

- カメラ設定の変更はワールドビルド後に反映されます
- 極端な値を設定するとユーザビリティが低下する可能性があります
- モバイル環境では一部の設定が異なる動作をする場合があります