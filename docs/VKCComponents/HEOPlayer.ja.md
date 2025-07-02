# HEOPlayer

!!! warning "Note"
    本コンポーネントはSDK Ver12.0にて廃止されました。<br>
    新機能として[Vket Cloud Settings](../VketCloudSettings/Overview.md)が追加されたため、そちらをお使いください。

![HEOPlayer](img/HEOPlayer.jpg)

HEOPlayerは、プレイヤーのスポーン地点、ジャンプ加速度、移動速度などを指定します。<br>
シーンに置けるHEOPlayerは一つだけです。

| 名称 | 初期値 | 機能 |
|----|----|----|
| World Position | TransformのPosition値と同一 | プレイヤーがスポーンする際の座標を指定します |
| World Rotation | TransformのRotation値と同一 | プレイヤーがスポーンする際の角度を指定します。<br>なお、本設定はY軸の角度のみ反映されます。 |
| Jump | true | ワールド内でジャンプの有効/無効を切り替えます |
| Jump Velocity | 4.5 |　ワールド内でジャンプした際の上向きの初速度を指定します |
| Move Speed | 7.0 | プレイヤーのワールド内での移動速度をメートル毎秒単位で指定します |
| Move Speed Up Ratio | 2.0 | プレイヤーがダッシュ移動する際の速度の倍率を指定します |
| TPS Rotation | 0,0,0 | プレイヤーがスポーンした際のカメラの角度を設定値分だけ加算します。<br> プレイ開始時にカメラをアバターの正面から捉えたい場合は[0.0, 180.0, 0.0]を設定して下さい。  |
| CRP Mode | false | CRP(リアルタイム通信によるオブジェクト同期のためのプロトコル)の有効/無効を切り替えます。<br> 本機能は内部機能のため、使用が制限されております |

スポーンポイントは以下のようにシーンに表示されます。

![SpawnPoint](img/SpawnPoint.jpg)

例として、`TPS Rotation`を(0,180,0)として設定した際のスポーン時のカメラは以下のように表示されます。

![HEOPlayer_TPSRotation](./img/HEOPlayer_TPSRotation.jpg)