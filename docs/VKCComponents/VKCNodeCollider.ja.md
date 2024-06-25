# VKC Node Collider

![HEOCollider_1](img/HEOCollider_1.jpg)

VKC Node Colliderとは、Vket Cloud上でコライダーがどのような衝突判定を持つかを設定できるコンポーネントです。

| Label | 名称 | 機能 |
| ---- | ---- | ---- |
| Collider Type | `コライダータイプ` | コライダーのタイプを指定します。 |
| Collider Target | `コライダーターゲット` | ターゲットを指定します。 |
| Use Physics | `物理演算を適用` | Box Colliderに対して物理演算を可能にします。 |
| Fixed | `位置の固定` | Box Colliderの位置を固定することができます。 |
| Enable Body | `ロード時に物理演算を有効にする` | オブジェクトが読み込まれた際に物理演算を有効にするかどうかを選択できます。 |
| Mass | `重さ` | 重さパラメータを調整します。 |
| Restitution | `反発係数` | 反発係数のパラメータを調整します。 |
| Allow Cross Over | `埋まりを許容` | Allows the player to pass through the collider |
| Cross Over Rate | `埋まり比率` | Set the rate of distance passing through the collider. Set from zero to 1. |
| Extrusion Speed | `押し出しスピード` | Set the speed of the extrusion when crossing. |
| Grounding Detetion | `接地処理` | Enable grounding detection. |

## コライダータイプ

| Label | 名称 | 機能 |
| ---- | ---- | ---- |
| Collider | `コライダー` | コライダーの役割を果たします。 |
| Clickable | `クリック対象` | プレイヤーがクリックすることを可能にします。|
| Area | `エリア` | 通過することのできるコライダーです。[VKC Item Area Collider](./VKCItemAreaCollider.md)と組み合わせることで、範囲内に入った任意のアクションを設定できます。 |
| Occlusion | `オクルージョン` | 接触した際にオクルージョンを有効にします。<br>詳しい使い方は[オクルージョンカリング](../WorldOptimization/OcclusionCulling.md)をご確認ください。 |
| Reflection Probe | `リフレクションプローブ` | 接触した際にリフレクションプローブを有効にします。 |
| In View | `描画判定` |　視野に入ったかどうかを判定したい場合に扱います  |

!!! note caution
    コライダータイプが`コライダー`でないコライダー(クリック対象、エリア、オクルージョン、リフレクションプローブ、描画判定)はプレイヤーが触れても衝突しません。

## コライダーターゲット

| Label | 名称 | 機能 |
| ---- | ---- | ---- |
| All | `全て` | 衝突判定に対象をとりません。 |
| Avatar Only | `アバターのみ` | アバターだけ衝突判定が有効になります。 |
| Self Player Only | `プレーヤー自身のみ` | 操作しているプレイヤーのみ衝突判定が有効になります。|

## コライダーの衝突 / エリア範囲判定について

ワールド内でのコライダーの衝突 / エリア範囲判定は画像オレンジ円のようにプレイヤーの下半身にて判定されます。<br>
また、以下のようなコリジョンの可視化は[VketCloudSettings / BasicSettings](../VketCloudSettings/BasicSettings.md)から[デバッグモード](../WorldEditingTips/DebugMode.md#f3)を有効にした上でF3キーを押すと切り替えできます。

![HEOCollider_2](img/HEOCollider_2.jpg)
