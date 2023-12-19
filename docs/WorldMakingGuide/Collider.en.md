# How to use Colliders / Tips

Vket Cloudでは、UnityのコライダーにHEOComponentを付与することで壁や床などの役割だけではなく、[オクルージョン](./OcclusionCulling.md)、[動的ローディング](../HEOComponents/HEOField.md)、[クリック / 入退場 / 視野判定](../HEOComponents/HEOCollider.md#_1)、[物理演算](./PhysicsEngine.md)など様々な振る舞いをワールド上で行うことができます。<br>

## コライダーの付け方

![HEOCollider_1](../HEOComponents/img/HEOCollider_1.jpg)

VketCloudSDKでは、Unityコライダーに対応するHEOComponentをそれぞれアタッチすることでワールド上で扱えるようになります。<br>
コライダーの設定方法・各設定項目の詳細は各ページをご確認ください。

[HEOCollider](../HEOComponents/HEOCollider.md)

[HEOAreaCollider](../HEOComponents/HEOAreacollider.md)

[HEOMeshCollider](../HEOComponents/HEOMeshCollider.md)

## Action Trigger / HeliScriptでの物理演算・コライダーについて

VketCloudSDKにおいて、コライダーはクリックや[HEOAreaCollider](../HEOComponents/HEOAreacollider.md)を使用した入退場判定によってアクションを起こすことができます。
詳しくは[Actionについて](../Actions/ActionsOverview.md)をご確認ください。

また、コライダーはその範囲内外にてHeliScriptのコールバック関数を呼び、様々なギミックの作成に役立てられます。<br>
各関数の挙動は以下のページにて記述しております。

- [コールバック - AreaCollider](../hs/hs_component.md#-areacollider)
- [コールバック - 物理衝突判定](../hs/hs_component.md#-_2)
- [コールバック - 視野内コライダー](../hs/hs_component.md#-_3)

## Tips: 階段にコライダーを設置する際の注意点
