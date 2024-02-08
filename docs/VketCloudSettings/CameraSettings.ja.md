# CameraSettings

![CameraSettings_1](./img/CameraSettings_1.jpg)

CameraSettingsでは、カメラの挙動に関する設定ができます。

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
|  `Smoothing` | false | カメラの上下の動きにスムージングをかけるかどうかを指定します。 |
|  `Far Offset (y-axis)` | 0.0 | TPSカメラの注視点を上下に調整できます。 |
|  `Near Offset (y-axis)` | 0.0 | TPSカメラの注視点を上下に調整できます。 |
| `Photo Radius` | 20.0 | 撮影モードカメラの移動可能半径を指定します。|
| `Raycast Max Distance` | 50.0 | クリック判定をおこなうカメラからの最大距離をメートル単位で指定します。 |
| `TPS Pitch Max Angle` | 6.0 | TPSカメラの最大ピッチ角度を指定します。<br> ワールド内の設定の「アイレベル」にて「高い」を選択すると本設定の値が適用され、「普通」を選択すると半分の値が適用されます。 |
| `TPS Camera Max Distance` | 10.0 | TPSカメラの最大ズームアウト距離を指定します。 |
| `Default TPS Camera` | TPS Center | TPSカメラのオフセットを指定できます。<br> ワールド内設定の三人称視点位置にて切り替えることができます。<br>`TPS Center`：真後ろ`right`：右肩越し（一般的なTPSカメラ）`left`：左肩越し |
