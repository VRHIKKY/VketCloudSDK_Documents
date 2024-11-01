# ヒエラルキーアイコン

![image](./img/HierarchyIcons_1.jpg)

VketCloudSDK 14以降のバージョンでは、ヒエラルキービュー上にVKCコンポーネントが付いている場合アイコンが表示され、どのオブジェクトに何のコンポーネントが付いているか分かりやすくなりました。

さらに、警告時には黄色く、エラー時には赤く表示されるため、どのオブジェクトがエラーを起こしてるかヒエラルキービューから判断しやすくなっております。

ヒエラルキービュー上に表示されるアイコンと、対応するVKCコンポーネントの一覧を下表に示します。<br>
また、複数のVKCコンポーネントが付いていた場合のアイコンの表示優先度もこの表の順序に従います。

| アイコン | VKCコンポーネント |
| ---- | ---- |
| ![icon](./img/HierarchyIcons_08_HEOField.png) | [VKC Item Field](../VKCComponents/VKCItemField.md) |
| ![icon](./img/HierarchyIcons_04_HEOObject.png) | [VKC Item Object](../VKCComponents/VKCItemObject.md) |
| ![icon](./img/HierarchyIcons_02_HEOActivity.png) | [VKC Item Activity](../VKCComponents/VKCItemActivity.md) |
| ![icon](./img/HierarchyIcons_03_HEOAreaCollider.png) | [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md) |
| ![icon](./img/HierarchyIcons_09_HEOPlane.png) | [VKC Item Plane](../VKCComponents/VKCItemPlane.md) |
| ![icon](./img/HierarchyIcons_10_HEOText.png) | [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md) |
| ![icon](./img/HierarchyIcons_05_HEOAudio.png) | [VKC Item Audio](../VKCComponents/VKCItemAudio.md) |
| ![icon](./img/HierarchyIcons_06_HEOParticle.png) | [VKC Item Particle](../VKCComponents/VKCItemParticle.md) |
| ![icon](./img/HierarchyIcons_01_HEOSpot.png) | [VKC Item Spot](../VKCComponents/VKCItemSpot.md) |
| ![icon](./img/HierarchyIcons_11_VKCAttributeScript.png) | [VKC Attribute Script](../VKCComponents/VKCAttributeScript.md) |
| ![icon](./img/HierarchyIcons_12_VKCAttribute Property.png) | [VKC Attribute Property](../VKCComponents/VKCAttributeProperty.md) |
| ![icon](./img/HierarchyIcons_13_VKCAttributeActionTrigger.png) | [VKC Attribute Action Trigger](../VKCComponents/VKCAttributeActionTrigger.md) |
| ![icon](./img/HierarchyIcons_14_VKCAttributeClickableUI.png) | [VKC Attribute Clickable UI](../VKCComponents/VKCAttributeClickableUI.md) |
| ![icon](./img/HierarchyIcons_15_VKCNode_VideoTrigger.png) | [VKC Node Video Trigger](../VKCComponents/VKCNodeVideoTrigger.md) |
| ![icon](./img/HierarchyIcons_16_VKCNodeCollider.png) | [VKC Node Collider](../VKCComponents/VKCNodeCollider.md) |
| ![icon](./img/HierarchyIcons_17_VKCItemBackgroundTexture.png) | [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md) |
| ![icon](./img/HierarchyIcons_18_VKCNodeUVScroller.png) | [VKC Node UV Scroller](../VKCComponents/VKCNodeUVScroller.md) |
| ![icon](./img/HierarchyIcons_19_VKCNodeAlphaAnimation.png) | [VKC Node Alpha Animation](../VKCComponents/VKCNodeAlphaAnimation.md) |
| ![icon](./img/HierarchyIcons_20_VKCNodeRotateAnimation.png) | [VKC Node Rotate Animation](../VKCComponents/VKCNodeRotateAnimation.md) |
| ![icon](./img/HierarchyIcons_21_VKCNodeCylinderCollider.png) | [VKC Node Cylinder Collider](../VKCComponents/VKCNodeCylinderCollider.md) |
| ![icon](./img/HierarchyIcons_22_VKCNodeBlendShapeTranslator.png) | [VKC Node Blend Shape Translator](../VKCComponents/VKCNodeBlendShapeTranslator.md) |
| ![icon](./img/HierarchyIcons_23_VKCNodeLODLevel.png) | [VKC Node LOD Level](../VKCComponents/VKCNodeLODLevel.md) |
| ![icon](./img/HierarchyIcons_24_VKCNodeMeshCollider.png) | [VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md) |
| ![icon](./img/HierarchyIcons_25_VKCNodeMirror.png) | [VKC Node Mirror](../VKCComponents/VKCNodeMirror.md) |
| ![icon](./img/HierarchyIcons_26_VKCNodeReflectionProbeType.png) | [VKC Node Reflection Probe Type](../VKCComponents/VKCNodeReflectionProbeType.md) |
| ![icon](./img/HierarchyIcons_27_VKCNodeShadow.png) | [VKC Node Shadow](../VKCComponents/VKCNodeShadow.md) |
| ![icon](./img/HierarchyIcons_28_VKCAttributeShowFlag.png) | [VKC Attribute Show Flag](../VKCComponents/VKCAttributeShowFlag.md) |

エラー時、警告時のアイコン表示の例を以下に示します。<br>
エラーと警告が両方ある場合は、エラーが優先され、赤く表示されます。

| 通常アイコン | エラー時アイコン | 警告時アイコン |
| ---- | ---- | ---- |
| ![icon](./img/HierarchyIcons_04_HEOObject.png) | ![warning](./img/HierarchyIcons_04_HEOObject_Warning.png) | ![error](./img/HierarchyIcons_04_HEOObject_Error.png) |
