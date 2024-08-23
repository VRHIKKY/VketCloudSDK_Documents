# HEOCylinderCollider

![HEOMeshCollider_1](img/HEOCylinderCollider_01.jpg)

HEOCylinderColliderはCapsuleColliderが付与されているオブジェクトに対してHEOColliderと共にアタッチすることで、円柱状のコライダーを設定できるコンポーネントです。

通常Unityではシリンダーコライダーは無くカプセルコライダーで代用されますが、Vket Cloudでは『Capsule Collider』を持っているオブジェクトに追加でHEOCylinderColliderをアタッチすることで、Vket Cloudの物理エンジンにおいてシリンダーコライダーとして使用することができます。

!!! note "注意点"
    - 物理エンジンの衝突判定の実装の都合上、カプセルコライダーとシリンダーコライダー・シリンダーコライダーとシリンダーコライダーは衝突しません。<br>
    - シリンダーコライダーを使用する場合、Planeの様な薄いコライダーだと貫通してしまうことがあるので地面にボックスを使用する必要があります。 

## 設定手順

1. 本コンポーネントはUnityのMesh Renderer及びCapsule Colliderが付いているオブジェクトが対象です。<br>
Mesh Colliderを設定したいオブジェクトに対して、Inspector / Add ComponentにてHEOMeshColliderを選択してコンポーネントをアタッチします。

    ![HEOMeshCollider_2](img/HEOCylinderCollider_02.jpg)

1. このとき、HEOCylinderColliderコンポーネントと同時に[HEOCollider](./HEOCollider.md)がアタッチされます。[HEOCollider](./HEOCollider.md)はHEOCylinderColliderにとって必須となるコンポーネントのため、削除はできません。

    ![HEOMeshCollider_3](img/HEOCylinderCollider_03.jpg)

1. この状態でビルドすると、Capsule Colliderを基にCylinder Colliderが生成されます。
