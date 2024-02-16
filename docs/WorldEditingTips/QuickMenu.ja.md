# Vket Cloudオブジェクト追加のためのクイックメニュー

VketCloudSDKを導入すると、Hierarchy上で右クリックした際のコンテクストメニューにVket Cloudワールドのためのオブジェクトをシーンに追加できるメニューが追加されます。

![QuickMenu_1](./img/QuickMenu_1.jpg)

## 作成できるオブジェクトのカテゴリと機能

| 大項目 | 小項目 | 機能 |
|----|----|----|
| 3D Item | Create HEO Sphere | シーン内にGameObjectを作成し、[HEOObject](../HEOComponents/HEOObject.md)をアタッチし、Sphereのheoをアタッチする |
| | Create HEO Cube | シーン内にGameObjectを作成し、[HEOObject](../HEOComponents/HEOObject.md)をアタッチし、Cubeのheoをアタッチする |
|| Create HEO Avatar | シーン内にGameObjectを作成し、[HEOObject](../HEOComponents/HEOObject.md)をアタッチし、Vket_Chanのvrmをアタッチする |
|| Create HEO Platform | アバターが立てる地面のようなPlatformを作成する(Box Colliderが入ったUnity Planeと類似） |
| 2D Item | Create HEO Plane | シーン内にGameObjectを作成し、[HEOPlane](../HEOComponents/HEOPlane.md)をアタッチする。 |
|| Create HEO TextPlane | シーン内にGameObjectを作成し、[HEOTextplane](../HEOComponents/HEOTextplane.md)をアタッチする。 |
| Create HEO Audio Player  ||シーン内にGameObjectを作成し、[HEOAudio](../HEOComponents/HEOAudio.md)をアタッチする。 |
| Create HEO Video Player || シーン内にGameObjectを作成し、[HEOVideoTrigger](../HEOComponents/HEOVideoTrigger.md)をアタッチする。 |
|  Create HEO Particle | | シーン内にGameObjectを作成し、[HEOParticle](../HEOComponents/HEOParticle.md)をアタッチする。 |
| Environment | Create Sky box | シーン内に Tutorials > Tutorial -basic-のシーンに入っているようなskybox prefabをシーン内に追加 ![QuickMenu_2](img/QuickMenu_2.jpg) |
|| Background texture | シーン内にGameObjectを作成し、[HEOBackgroundTexture](../HEOComponents/HEOBackgroundTexture.md)をアタッチする。 |
|| Create HEO Camera | シーン内にGameObjectを作成し、[HEOCamera](../HEOComponents/HEOCamera.md)をアタッチする。 |
| Gimmics | Create HEO ActionTrigger | シーン内にGameObjectを作成し、[HEOActionTrigger](../HEOComponents/HEOActionTrigger.md)をアタッチする。 |
|| Create HEO AreaCollider | シーン内にGameObjectを作成し、[HEOAreaCollider](../HEOComponents/HEOAreaCollider.md)をアタッチする。 |
|| Create HEO Spot | シーン内にGameObjectを作成し、[HEOSpot](../HEOComponents/HEOSpot.md)をアタッチする。 |
