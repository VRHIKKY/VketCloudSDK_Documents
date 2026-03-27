# VKC Item Area Collider

VKC Item Area Collider is a component for introducing actions to objects. <br>
It executes the specified actions when a player enters the collider.<br>
For actions, see [Actions Overview](../Actions/ActionsOverview.md).<br>

## Configuration Settings

![VKC Item Area Collider](img/VKCItemAreaCollider_01.jpg)

In each of `Actions on Enter` and `Actions on Leave`, you can set any action by clicking Add(+). <br>
You can remove the last action by clicking Delete(-).

| Label | Function |
| ---- | ---- |
| Actions on Enter | Set the action when entering the area. |
| Actions on Leave | Sets the action when leaving the area. |

For actions, see [Actions Overview](../Actions/ActionsOverview.md). <br>
For colliders, see [Unity Production Guidelines - Colliders](../WorldMakingGuide/UnityGuidelines.md).

???+ note "Available methods for this object type"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [SetPos](../hs/hs_class_item.md#setpos)
    - [GetPos](../hs/hs_class_item.md#getpos)
    - [SetQuaternion](../hs/hs_class_item.md#setquaternion)
    - [GetQuaternion](../hs/hs_class_item.md#getquaternion)
    - [SetShow](../hs/hs_class_item.md#setshow)
    - [IsShow](../hs/hs_class_item.md#isshow)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [SetEnableCollider](../hs/hs_class_item.md#setenablecollider)
    - [IsEnableCollider](../hs/hs_class_item.md#isenablecollider)
    - [ReplaceItem](../hs/hs_class_item.md#replaceitem)
    - [IsEnableCollider](../hs/hs_class_item.md#isenablecollider)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [GetProperty](../hs/hs_class_item.md#getproperty)
    - [CallComponentMethod](../hs/hs_class_item.md#callcomponentmethod)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

### Advanced Options

| Label | Default | Function |
| ---- | ---- | ---- |
| Show | True | This option does not work with the VKC Item Area Collider. |
| Clickable | False | This option does not work with the VKC Item Area Collider. |
| Auto Loading | True | Toggles dynamic loading on/off. |
| Item Render Priority | 0 | Allows changing the rendering priority of the item in the world. |
| Show Photo Mode | True | This option does not work with the VKC Item Area Collider. |

## Usage Notes
There are several important considerations when using the VKC Item Area Collider:<br>

### Place the collider lower than the player's feet
The collision detection for area colliders is located at "the player's feet".<br>
If collision detection is not working, check if the collider is floating above the ground.<br><br>

In the figure, the collider on the left does not detect collisions because it is floating above the ground. The position needs to be lowered so that it contacts the ground like the collider on the right.<br>

![VKCItemAreaCollider_03](VKCItemAreaCollider_03.png)

### Place as a child of an object with VKC Item Field component
Objects with the VKC Item Area Collider component must be placed under another object that has the VKC Item Field component.<br>
If collision detection is not working, check the parent-child relationship in the Unity hierarchy.<br>

As shown in the figure, move the object under the "World" object that has the ItemField component.

![VKCItemAreaCollider_04](VKCItemAreaCollider_04.png)

!!! note "Reason for placing under a VKC Item Field object"
    VKC Item Field is used to output collider shapes and other forms.
    Conversely, an Area Collider alone cannot include the collider shape in the build.
