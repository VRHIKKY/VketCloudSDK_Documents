# 物理エンジンの使い方

Vket Cloudでは、UnityのコライダーとSDKの諸機能を使用して衝突判定や物理演算をワールド上に実装することができます。<br>
以下に物理演算の使用方法を解説します。

## コライダーの付け方

!!! note info
    コライダーの付け方についての解説は[コライダーの付け方 / Tips](./Collider.md)ページに移動しました。

## 物理エンジンの使用方法

1\. 物理演算を適応したいゲームオブジェクトに『Unityコライダー』と[HEOCollider](../HEOComponents/HEOCollider.md)をアタッチしてください。<br>
物理演算に使用できるUnityコライダーは『Box Collider』『Sphere Collider』『Capsule Collider』です。

また、後述されているように『Capsule Collider』がアタッチされているゲームオブジェクトに[HEOCollider](../HEOComponents/HEOCollider.md)に加えて`HEOCylinderCollider`をアタッチすることで、Vket Cloudの物理エンジンにおいてシリンダーコライダーとして使用することができます。

![PhysicsEngine](img/PhysicsEngine.jpg)

2\. HEOCollider/Physicsの項目のプロパティを設定します。<br>各項目は下記で説明いたしますが、[HEOWorldSettings](../HEOComponents/HEOWorldSetting.md#_1)にて`Use Physics Engine`を有効にし、各コライダーコンポーネントに『`UsePhysics`』にチェックを入れることでそのゲームオブジェクトに物理演算が適応されるようになります。

### HEOCollider/Physicsのプロパティについて

  ![PhysicsEngine](img/PhysicsEngineCollider.jpg)

| 名称 | 機能 |
| ---- | ---- |
| `Collider Type` | コライダーのタイプを指定します。 |
| `Collider Target` | ターゲットを指定します。 |
| `UsePhysics` | Colliderに対して物理演算を可能にします。 |
| `Fixed` | 物理演算においてこのゲームオブジェクトを固定するか設定できます。<br> 例: 床や壁などの動かないもの → Fixedオン <br> ボールなどの動くもの  → Fixedオフ |
| `EnableBody` | 物理演算の有無の初期値。<br>後述しますが、Action Triggerで物理演算を有無を切り替えることができます。EnableBody はその初期値です。<br>例えば、自動販売機の中にジュースの缶を物理演算を無効にして仕込んでおいて、自動販売機の購入ボタンを押したときに缶の物理演算を有効にして自動販売機の中から缶を転がすといったギミックを作成することができます。 |
| `Mass` | 重さパラメータを調整します。 |
| `Restitution` | 反発係数のパラメータを調整します。 |

3\. 設定後に通常通りBuild and Runを実行すると物理演算を使用することができます。

## Action Trigger / HeliScriptでの物理演算・コライダーについて

物理演算に関するActionTriggerの使い方に関しては、以下ページにて記述しております。
  
- [ActionsOverview](../Actions/ActionsOverview.md)
  - [PhysicsAddVelocity](../Actions/Physics/PhysicsAddVelocity.md)
  - [PhysicsClearAddForce](../Actions/Physics/PhysicsClearAddForce.md)
  - [PhysicsSetEnable](../Actions/Physics/PhysicsSetEnable.md)
  - [PhysicsSetPosRot](../Actions/Physics/PhysicsSetPosRot.md)

また、HeliScriptにおける物理演算・コライダーの扱い方は以下のページにて記述しております。

- [コールバック - AreaCollider](../hs/hs_component.md#-areacollider)
- [コールバック - 物理衝突判定](../hs/hs_component.md#-_2)
- [コールバック - 視野内コライダー](../hs/hs_component.md#-_3)
- [組み込み関数 - 物理演算](../hs/hs_system_function_physics.md)

## シリンダーコライダーについて

通常Unityではシリンダーコライダーは無くカプセルコライダーで代用されますが、Vket Cloudでは下記の画像のように『Capsule Collider』を持っているオブジェクトに追加で`HEOCylinderCollider`をアタッチすることで、Vket Cloudの物理エンジンにおいてシリンダーコライダーとして使用することができます。
![PhysicsEngine](img/PhysicsEngineCylinderCollider.jpg)

!!! 注意点 Info
    - 物理エンジンの衝突判定の実装の都合上、カプセルコライダーとシリンダーコライダー・シリンダーコライダーとシリンダーコライダーは衝突しません。
    - シリンダーコライダーを使用する場合、Planeの様な薄いコライダーだと貫通してしまうことがあるので地面にボックスを使用する必要があります。
