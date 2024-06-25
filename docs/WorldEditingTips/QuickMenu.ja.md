# Vket Cloudオブジェクト追加のためのクイックメニュー

VketCloudSDKを導入すると、Hierarchy上で右クリックした際のコンテクストメニューにVket Cloudワールドのためのオブジェクトをシーンに追加できるメニューが追加されます。

![QuickMenu_1](./img/QuickMenu_1.jpg)

## 作成できるオブジェクトのカテゴリと機能

| 大項目 | 小項目 | 機能 |
|----|----|----|
| 3D Item | Create VKC Sphere | シーン内にGameObjectを作成し、[VKC Item Object](../VKCComponents/VKCItemObject.md)をアタッチし、SphereのVKCItemをアタッチする |
| | Create VKC Cube | シーン内にGameObjectを作成し、[VKC Item Object](../VKCComponents/VKCItemObject.md)をアタッチし、CubeのVKCItemをアタッチする |
|| Create VKC Avatar | シーン内にGameObjectを作成し、[VKC Item Object](../VKCComponents/VKCItemObject.md)をアタッチし、Vket_Chanのvrmをアタッチする |
|| Create VKC Platform | アバターが立てる地面のようなPlatformを作成する(Box Colliderが入ったUnity Planeと類似） |
| 2D Item | Create VKC Plane | シーン内にGameObjectを作成し、[VKC Item Plane](../VKCComponents/VKCItemPlane.md)をアタッチする。 |
|| Create VKC TextPlane | シーン内にGameObjectを作成し、[VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)をアタッチする。 |
| Create VKC Audio Player  ||シーン内にGameObjectを作成し、[VKC Item Audio](../VKCComponents/VKCItemAudio.md)をアタッチする。 |
| Create VKC Video Player || シーン内にGameObjectを作成し、[VKC Node Video Trigger](../VKCComponents/VKCNodeVideoTrigger.md)をアタッチする。 |
|  Create VKC Particle | | シーン内にGameObjectを作成し、[VKC Item Particle](../VKCComponents/VKCItemParticle.md)をアタッチする。 |
| Environment | Create Skybox | シーン内に Tutorials > Tutorial -basic-のシーンに入っているようなskybox prefabをシーン内に追加 ![QuickMenu_2](img/QuickMenu_2.jpg) |
|| Create Background texture | シーン内にGameObjectを作成し、[VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)をアタッチする。 |
|| Create VKC Camera | シーン内にGameObjectを作成し、[VKC Item Camera](../VKCComponents/VKCItemCamera.md)をアタッチする。 |
| Gimmics | Create VKC ActionTrigger | シーン内にGameObjectを作成し、[VKC Attribute Action Trigger](../VKCComponents/VKCAttributeActionTrigger.md)をアタッチする。 |
|| Create VKC Area Collider | シーン内にGameObjectを作成し、[VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)をアタッチする。 |
|| Create VKC Spot | シーン内にGameObjectを作成し、[VKC Item Spot](../VKCComponents/VKCItemSpot.md)をアタッチする。 |
