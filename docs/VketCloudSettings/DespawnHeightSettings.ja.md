# DespawnHeightSettings

![DespawnHeightSettings_1](./img/DespawnHeightSettings_1.jpg)

DespawnHeightSettingsは、プレイヤーがデスポーン（指定した高さまで落下した際、[PlayerSettings](./PlayerSettings.md)にて設定したスポーン位置にワープ）する高さと適用範囲を設定します。

この設定によって、プレイヤーが落下してしまった場合に永続的に落下し続ける状態になってしまうのを防ぐことができます。

| 名称 | 機能 |
| ---- | ---- |
| `Area Size` | デスポーンエリアのサイズを調整します。 |

デスポーン判定の高さはTransformにてオブジェクトのY軸座標によって決まり、エリアのサイズは`Area Size`の数値で設定されます。

デスポーンが適用される範囲はUnityのシーン上にて赤いPlaneとして表現されます。

![DespawnHeightSettings_2](./img/DespawnHeightSettings_2.jpg)
