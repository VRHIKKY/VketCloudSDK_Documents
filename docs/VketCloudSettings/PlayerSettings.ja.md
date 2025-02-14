# PlayerSettings

![PlayerSettings_1](./img/PlayerSettings_1.jpg)

PlayerSettingsでは、ワールドにおけるプレイヤーの挙動を設定します。

## 基本設定

| 名称 | 初期値 | 機能 |
|----|----|----|
| World Position | TransformのPosition値と同一 | プレイヤーがスポーンする際の座標を指定します |
| World Rotation | TransformのRotation値と同一 | プレイヤーがスポーンする際の角度を指定します。<br>なお、本設定はY軸の角度のみ反映されます。 |
| Jump | true | ワールド内でジャンプの有効/無効を切り替えます |
| Jump Velocity | 4.5 |　ワールド内でジャンプした際の上向きの初速度を指定します |
| Move Speed | 7.0 | プレイヤーのワールド内での移動速度をメートル毎秒単位で指定します |
| Move Speed Up Ratio | 2.0 | プレイヤーがダッシュ移動する際の速度の倍率を指定します |
| Enable Click to Move | false | コンフィグ画面でのクリック移動のデフォルト値を設定します。ただしX埋めこみで開いた時は強制的にオンになります |
| Despawn Height (Y) | false | プレイヤーを強制的にリスポーンさせるＹ座標の閾値。この値以下になればリスポーンします |

!!! warning "Enable Click to MoveとDespawn Height (Y)は安定版SDK14.4.12でご使用いただけません"
    Enable Click to MoveとDespawn Height (Y)は安定版SDK14.4.12で機能がロールバックのためご使用いただけません。
    SDK14.2.1もしくは14.4.12より新しいバージョンがあれば、そちらをご使用ください。

`World Position`と`World Rotation`で設定されたプレイヤーのスポーン地点は以下のようにシーンに表示されます。

![PlayerSettings_SpawnPoint](img/PlayerSettings_SpawnPoint.jpg)


## 詳細設定

| 名称 | 初期値 | 機能 |
|----|----|----|
| TPS Rotation | 0,0,0 | プレイヤーがスポーンした際のカメラの角度を設定値分だけ加算します。<br> プレイ開始時にカメラをアバターの正面から捉えたい場合は[0.0, 180.0, 0.0]を設定して下さい。  |
| CRP Mode | false | CRP(リアルタイム通信によるオブジェクト同期のためのプロトコル)の有効/無効を切り替えます。<br> 本機能は内部機能のため、使用が制限されております |

例として、`TPS Rotation`を(0,180,0)として設定した際のスポーン時のカメラは以下のように表示されます。

![PlayerSettings_TPSRotation](./img/PlayerSettings_TPSRotation.jpg)
