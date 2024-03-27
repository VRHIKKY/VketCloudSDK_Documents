# HEOAreaCollider
![HEOAreaCollider](img/HEOAreaCollider.jpg)

HEOAreaCollider is a component for introducing actions to objects. <br>
It executes the specified actions when a player enters the collider.

To attach HEOAreaCollider, [HEOCollider](./HEOCollider.md) and Collider must be attached to the object.<br>
On attaching a HEOAreaCollider component to an object, the [HEOCollider](./HEOCollider.md) and Box Collider will be added.<br>
The [HEOCollider](./HEOCollider.md) type must be set to Area.

![HEOCollider](img/HEOCollider_1.jpg)

In each of Actions and LeaveActions, you can set any action by clicking Add. <br>
You can remove the last action by clicking Delete.

| Label | Function |
| ---- | ---- |
| Actions | Set the action when entering the area. |
| LeaveActions | Sets the action when leaving the area. |

For actions, see [Actions Overview](../Actions/ActionsOverview.md). <br>
For colliders, see [Unity Production Guidelines - Colliders](../WorldMakingGuide/UnityGuidelines.md).

## About collision / area range detection by collider

The collision / area range detection by collider will be done by obtaining the player's lower body position as the orange circle shown below.<br>
Collision visualization can be toggled by enabling the [debug mode](../WorldEditingTips/DebugMode.md) on [VketCloudSettings / BasicSettings](../VketCloudSettings/BasicSettings.md) and pressing F3.

![HEOCollider_2](img/HEOCollider_2.jpg)
