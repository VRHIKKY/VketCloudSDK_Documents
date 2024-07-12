# コライダーの使い方 / Tips

Vket Cloudでは、UnityのコライダーにVKCComponentを付与することで壁や床などの役割だけではなく、[オクルージョン](../WorldOptimization/OcclusionCulling.md)、[動的ローディング](../VKCComponents/VKCItemField.md)、[クリック / 入退場 / 視野判定](../VKCComponents/VKCNodeCollider.md#_1)、[物理演算](./PhysicsEngine.md)など様々な振る舞いをワールド上で行うことができます。<br>

## コライダーの付け方

![VKCNodeCollider_1](../VKCComponents/img/HEOCollider_1.jpg)

VketCloudSDKでは、Unityコライダーに対応するVKCComponentをそれぞれアタッチすることでワールド上で扱えるようになります。<br>
コライダーの設定方法・各設定項目の詳細は各ページをご確認ください。

[VKC Node Collider](../VKCComponents/VKCNodeCollider.md) : コライダーにおける基本的なコンポーネントです。

以下のコンポーネントは単体では使用せず、[VKC Node Collider](../VKCComponents/VKCNodeCollider.md)と組み合わせて使用します。

[VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md) : プレイヤーの入退場など、特定の範囲の内外でアクションを起こしたい場合に使用します。

[VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md) : UnityのMesh ColliderをVket Cloudにて使用したい場合に付与します。

!!! bug "ワールドにMesh Renderer / Mesh Colliderのみ存在する際のプレイヤー浮遊について"
    SDK Ver12.3において、ワールドにMesh Renderer, Mesh Collider, VKCNodeMeshCollider, [VKC Node Collider](../VKCComponents/VKCNodeCollider.md)が付いたオブジェクトのみ存在する際、ワールド入場時にプレイヤーが空中に浮遊する不具合が確認されています。<br>
    本不具合は次回のSDKリリースにて修正される予定です。<br>
    なお、本不具合はBox ColliderがアタッチされたCubeなどをワールドに最低１つ配置することで回避が可能です。

VKC Node Cylinder Collider : [物理演算](./PhysicsEngine.md)にてUnityのCylinder Colliderを物理演算させたい場合に使用します。<br>
なお、Cylinderは物理演算以外には使えないためご注意ください。

## Action Trigger / HeliScriptでの物理演算・コライダーについて

VketCloudSDKにおいて、コライダーはクリックや[VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)を使用した入退場判定によってアクションを起こすことができます。
詳しくは[Actionについて](../Actions/ActionsOverview.md)をご確認ください。

また、コライダーはその範囲内外にてHeliScriptのコールバック関数を呼び、様々なギミックの作成に役立てられます。<br>
各関数の挙動は以下のページにて記述しております。

- [コールバック - Area Collider](../hs/hs_component.md#-areacollider)
- [コールバック - 物理衝突判定](../hs/hs_component.md#-_2)
- [コールバック - 視野内コライダー](../hs/hs_component.md#-_3)

## Tips: 階段にコライダーを設置する際の注意点

ワールドに階段を設定する際、[VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md)あるいはBox Colliderを使用してコライダーを設定すると移動時にガタつきやすく、一段一段の高さによってはジャンプを要するため、プレイヤーにとってストレスとなりうる可能性があります。

![ColliderTips_Stair_1](./img/ColliderTips_Stair_1.jpg)

![ColliderTips_Stair_1_Result](./img/ColliderTips_Stair_1_Result.gif)

そこで、Box Colliderを斜めに設置して坂状にすることで、滑らかにのぼりやすい階段が設置できます。

![ColliderTips_Stair_2](./img/ColliderTips_Stair_2.jpg)

![ColliderTips_Stair_2_Result](./img/ColliderTips_Stair_2_Result.gif)
