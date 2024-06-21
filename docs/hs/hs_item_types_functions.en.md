# Item Types and VKCComponents

## Overview

On Vket Cloud, each non-Player objects on the world are defined as Items.<br>
While the HeliScript language has various Item-class functions to control objects, compatibility of such functions differs among each Item types.

Here, an overview and chart of each Items and HeliScript functions will be described.

---

## Item types

On Vket Cloud, there are a wide variety of Items depending by function and specification.

Each item is described by attaching a corresponding VKC component to a Unity object. If a HeliScript function shows an unintentional behavior, consider checking the Item type of the allocated object.

Also, if the game object in Unity Scenes matches the SDK build conditions, it will be included in build even if it's placed directly on the Scene or an empty object. (e.g. If an item is placed under the object with [VKC Item Field](../VKCComponents/VKCItemField.md) attached, it will be exported as a separate Item!)

Each Item type are described on the chart below. To avoid implementation mistakes regarding Item types, a brief explanation is added in `function`.

| Item type / VKCComponent | function |
|----|----|
| [field / VKCItemField](../VKCComponents/VKCItemField.md) | The fundamental Item to place world objects <br>・Exports all objects placed under VKCItemField as a single VKCItem file on build.<br>・All game objects under VKCItemField are described as Nodes, and all Nodes are not nested (i.e. directly a child of the field Item)<br>・Subject to Node functions and Material functions<br>・If another VKCItemField object is a child of VKCItemField object, the child will be exported as a separate Item. However, as the child objects under the child VKCItemField will be a Node of the **parent** VKCItemObject, avoid placing a nested VKCItemField object. <br>・As Nodes will be identified by name, avoid naming objects by same name. |
| [object / VKCItemObject](../VKCComponents/VKCItemObject.md) | The Item for placing objects that may move in world<br> Able to place glTF/VRM/[HRM](../WorldEditingTips/BuildOptions.md) models in world<br>・Subject to move functions<br>・Can play HEM animations |
|  [plane / VKCItemPlane](../VKCComponents/VKCItemPlane.md) | The Item for displaying an allocated texture<br>・Can designate variants for Japanese and English<br>・Able to display billboards and double sided textures |
| [textplane / VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md) | The Item for displaying a designated text<br>・Used for texts that may dynamically change<br>・Subject to TextPlane functions |
| [bgm/se / VKCItemAudio](../VKCComponents/VKCItemAudio.md) | The Item for playing BGM or sound effects<br>・Subject to Play/Stop/IsPlay functions<br>・The two audio types operate the same way, volume can be controlled in world by changing value in the corresponding audio category <br> |
| [particle / VKCItemParticle](../VKCComponents/VKCItemParticle.md) | The Item for playing particles<br>・Subject to Play/Stop/IsPlay functions |
|  [spot / VKCItemSpot](../VKCComponents/VKCItemSpot.md) | The Item for setting an initial spawn position depending on URL query<br>・By placing an object named Spot0, Spot1..., the spawn position can be changed by adding a query such as &amp;spaceindex=1 |
|  [areacollider / VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md) | The Item for implementing gimmicks which are fired by enter/exit a certain area<br>Expected to be placed under a Field Item on Unity<br>・Able to designate Actions which are fired on enter / on exiting a collider |
|  [bgtexture / VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md) | The Item for designating a texture as scene background <br>・Always rendered first<br>・Allocated texture must be formatted in a 1 : 1 ratio |
| [activity / VKCItemActivity](../VKCComponents/VKCItemActivity.md) | The Item for placing Activities<br>・According to the activity JSON file, gimmicks and models can be placed without further implementation |
| [camera / VKCItemCamera](../VKCComponents/VKCItemCamera.md) | The Item for switching the ordinary camera to camera for event/movie <br>・Camera switching can be designated by running a function in HeliScript *Available on SDK 5.0 and later versions |

---

For details on each function and applicable VKCComponents, please refer to the page below:

- [Item class](hs_class_item.md)
