# VKCNodeAlphaAnimation

Vket Cloud includes a feature for making opaque objects close to the camera to transparent, to ensure visibility of the scene when the object would block the camera view.<br>
VKCNodeAlphaAnimation component flags the designated object to be transparent when the camera comes close.

## Basic Settings

| Label | Default Value | Feature |
| ---- | ---- | ---- |
| Enable | false | Enables transparent |

!!! caution "Available objects for transparent effect"
    Note that Node objects under the VKCItemField are only available to be transparent.<br>
    Other objects (e.g. objects generated from the [quick menu](../../WorldEditingTips/QuickMenu.md)) cannot be transparent.<br>
    For details about Node, please refer to [HeliScript - Overview / Node](../../hs/hs_overview.md#node).

## How to Use

The world view before implementing transparent effects are as below:

![VKCNodeAlphaAnimation_01](img/VKCNodeAlphaAnimation_01.gif)

1. Open the Advanced Option in VKCItemField and enable Alpha Animation Target.

    ![VKCNodeAlphaAnimation_02](img/VKCNodeAlphaAnimation_02.jpg)

1. Select an object under ItemField in the Hierarchy to be transparent, and add a VKCNodeAlphaAnimation.<br>
    Set the Enable value to True.

    ![VKCNodeAlphaAnimation_03](img/VKCNodeAlphaAnimation_03.jpg)

1. When the world is builded with this implementation, the designated object will be transparent when the camera comes close.

![VKCNodeAlphaAnimation_04](img/VKCNodeAlphaAnimation_04.gif)
