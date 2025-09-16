# パーティクルエディター：プロパティ一覧

パーティクルエディターでは、以下の設定の編集によって様々なパーティクル表現を作ることができます。

!!! bug "パーティクルエディター動作不具合について"
    以下のSDKバージョンに付属するパーティクルエディターにおいて、プロパティの数値入力欄をクリックして数値を入力しても、数値が正常に反映されず、操作後はチェックボックスへの入力などが正常に行えなくなることを確認いたしました。<br>
    - SDK14.4.12<br>
    - SDK14.2.1<br>
    - SDK13.7.7<br>
    - SDK13.4.1<br>
    - SDK12.3.4<br>
    本不具合への修正が含まれたSDKバージョン最新版（SDK14.5.6以降）を導入頂くようお願いいたします。<br>
    ただし注意点として、SDK 14.5.6以降であっても、画面の拡大/縮小が100%以上に設定されている場合、不具合が再発する可能性があります。必ず「ディスプレイ」の設定から画面の拡大/縮小を100%に設定してください。

## Transform

![pe_property_1](pe_image/pe_property_1.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Position | 0,0,0 | パーティクルの生成位置 |
| Rotation | -90,0,0 | パーティクルの生成角度 |
| Scale | 1,1,1 | パーティクルの大きさ |

## Main

![pe_property_2](pe_image/pe_property_2.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Name | Particle00 | パーティクル名 |
| Texture |  | パーティクルのベースとなる画像 |
| Color | RGBA(255,255,255,255) | パーティクルのベース色 |
| Emission Color | RGBA(0,0,0,0) | パーティクルの発光色 |
| Duration | 5.00 | パーティクルの寿命（秒単位） |
| Loop | True | パーティクルの寿命が過ぎた後に再生成（ループ）するか設定します |
| Start Delay | 0.00 | パーティクルの生成開始までの待ち時間（秒単位） |
| Start Lifetime | 5.00 | パーティクル生成時の寿命（秒単位） |
| Start Speed | 5.00 | パーティクル生成時の速度(m/s単位) |
| Start Size | 1.00 | パーティクル生成時の大きさ |
| Gravity Modifier | 0.00 | パーティクルにかかる重力の値 |
| Max Particles | 1000 | パーティクルが放出される最大の数 |

!!! note "パーティクルの色について"
    パーティクルの色は以下のように決定されます：<br>
    Color + Emission Color (加算)<br>
    なお、[Color over Lifetime](#color-over-lifetime)が有効の際は本設定に従わないためご注意ください。<br>

!!! note "Constant / Rand Twoについて"
    数値設定におけるConstant / Rand Twoは以下のように定義されます。<br>
    Constant:　固定値  Rand Two: 設定した二つの値の間をランダムに移行する

## Emission

![pe_property_3](pe_image/pe_property_3.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Rate Over Time | 10.00 | 1秒あたりのパーティクル生成数 |
| Rate Over Distance | 0.00 | パーティクル座標の移動率に応じて生成されるパーティクル数の変化値 |

## Shape

![pe_property_4](pe_image/pe_property_4.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Shape | Cone | パーティクルが放出される軌道<br>Sphere: 球形 Cone: 円錐形 Circle: 円形 Hemisphere: 半球形 |
| Angle | 25.00 | パーティクルの放出軌道の角度 |
| Radius | 1.00 | パーティクルの放出軌道の半径 |
| Radius Thickness | 1.00 | パーティクルの放出体積の比率。<br> 0.00: 軌道の外面からの放出 1.00: 軌道全体から放出 |
| Arc | 360.00 | 放出の円弧の角度を設定します |
| Arc Mode | Random | 円弧の周りでのパーティクルの生成方法を設定します。<br> Random:円弧の周囲にランダム生成 Loop:円弧の周囲にて順番に生成 |
| Arc Speed | 1.00 | 放出位置が円弧の周囲を移動する速度を設定します |

## Velocity over Lifetime

![pe_property_5](pe_image/pe_property_5.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Enable | false | 本機能のオンオフ |
| Linear | 0,0,0 | パーティクル放出中の速度が値に沿って変化します |

## Size over Lifetime

![pe_property_7](pe_image/pe_property_7.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Enable | false | 本機能のオンオフ |
| Separate Axis | false | 設定をする際に軸をX,Y,Zに分けます |
| Size | 0.00 | 時間経過による大きさの変化値を設定します |
| Curve Mode | Constant | 大きさの変化の仕方を設定します。<br> Constant: 設定した値の分だけサイズが変化 Two Constants:  Min値 (パーティクル出現時) --> Max値 (パーティクル消失時)までイージングに沿って変化 |
| Easing Type | Linear | イージングの種類を設定します。|

## Color over Lifetime

![pe_property_8](pe_image/pe_property_8.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Enable | false | 本機能のオンオフ |
| Gradient | Blend | 時間経過によって設定した色に混ざるかに否かを設定します。 <br> Blend: Color0,1が混ざったあとColor1に変化する<br> Fixed:Color0,1が混ざらずにColor1に変化する |
| Num Colors | 2 | 経過する色の数を設定します |
| Color0 | 0.00 , RGBA(255,255,255,255) | パーティクル生成後に何秒目に指定の色に変化するか設定します |
| Color1 | 1.00 , RGBA(255,255,255,255) | 同上 |
| Num Alpha | 2 |  経過するα値の数を設定します |
| Alpha0 | 0.00 , 0.00 | パーティクル生成後に何秒目に指定の割合のアルファに変化するか設定します |
| Alpha1 | 1.00 , 1.00 | 同上 |

## Rotation over Lifetime

![pe_property_9](pe_image/pe_property_9.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Enable | false | 本機能のオンオフ |
| Curve Mode | Constant | 回転値の変化の仕方を設定します。<br> Constant: 設定した値の分だけ回転値が変化 Two Constants:  Min値 (パーティクル出現時) --> Max値 (パーティクル消失時)までイージングに沿って変化 |
| Velocity | 0,0,0 | 時間経過による回転値の変化を設定します。 |
| Easing Type | Linear | イージングの種類を設定します。|

## Noise

![pe_property_10](pe_image/pe_property_10.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Enable | false | 本機能のオンオフ |
| Strength | 0.00 | ノイズ強度（ノイズ影響時の速度の変化値）を設定します |
| Frequency | 0.50 | パーティクル放出時の方向と素早さが変化する頻度を設定します |
| Scroll Speed | 0.00 | ノイズ発生時の不規則さを設定します |
| Damping | false | StrengthがFrequencyに比例するように設定します |
| Octave Count | 1.00 | ノイズのレイヤー数を設定します |
| Octave Multiplier | 0.50 | ノイズのレイヤー数に応じた強度減少量を設定します |
| Octave Scale | 2.00 | ノイズのレイヤー数に応じた周波数減少量を設定します |
| Quality | High(3D) | ノイズの品質をLow(1D),Medium(2D),High(3D)から設定します |

## Sub Emitters

![pe_property_11](pe_image/pe_property_11.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Enable | false | 本機能のオンオフ |
| Particle Index | 0 | 指定した番号のパーティクルを生成します |
| Type | Birth | サブパーティクル生成の判定を主パーティクルのBirth(生成時)またはDeath(消滅時)に設定します |
| Probability | 0.00 | サブパーティクル生成の判定の発生割合を設定します |

!!! warning "動作安定性について"
    本機能は現バージョンのエディターでは動作が不安定なものとなっております。<br>
    複数パーティクルを使用したい場合は別途作成することをおすすめいたします。

## Texture Sheet Animation

![pe_property_12](pe_image/pe_property_12.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Tiles | 1,1 | テクスチャを分割して作るタイル数を変更します |

## Render Setting

![pe_property_14](pe_image/pe_property_14.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Render Mode | Billboard | パーティクルの表示方向を設定します<br> Billboard: 常にカメラ方向を向きます<br> Stretched: カメラの方向を向き、大きさの変更が適用されます。いわゆるTrail効果を作りたい際に有効です |
| Speed Scale | 0.00 | 速度に比例して大きさを変更します |
| Length Scale | 0.00 | 大きさを横向きに変更します |
| Render Alignment | View | パーティクルの整列方法を設定します。<br> View: カメラの平面に対して整列 Local: ゲームオブジェクトのTransformコンポーネントに対して整列<br> Velocity: パーティクルの進行方向に対して整列 |

## Easing Typeについて

パーティクルエディタでは各設定の`Easing Type`にてイージング関数を設定することができます。<br>
それぞれの関数の概説については一つの参考として[イージング関数チートシート](https://easings.net/ja){target=_blank}を参照してください。
