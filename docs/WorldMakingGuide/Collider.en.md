# How to use Colliders / Tips

On Vket Cloud, the Unity Collider can be modified by attaching VKCComponents, which can be used for various functions not only regular wall and floor collisions. Features involving colliders include [Occlusion Culling](../WorldOptimization/OcclusionCulling.md), [Dynamic Loading](../VKCComponents/VKCItemField.md), [Click / In-Out / In-View Detection](../VKCComponents/VKCNodeCollider.md#_1), and [Physics](./PhysicsEngine.md).

## How to setup Colliders

![VKCNodeCollider_1](../VKCComponents/img/HEOCollider_1.jpg)

On VketCloudSDK, setting a corresponding VKCComponent to each Unity Colliders will enable it to be used in world.<br>
See the following pages for each collider setup and details.

[VKC Node Collider](../VKCComponents/VKCNodeCollider.md) : The standard component for handling colliders.

The components below are meant to be combined with [VKC Node Collider](../VKCComponents/VKCNodeCollider.md) on use.

[VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md) : Used for triggering actions when player is in/out of the area.

[VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md) : This component is attached when using the Unity Mesh Collider on Vket Cloud.

!!! bug "Player floating when world only has Mesh Renderer / Mesh Collider objects"
    On SDK Ver12.3, there is an issue occurring when the world has objects only having Mesh Renderer, Mesh Collider, VKC Node Mesh Collider, [VKCNodeCollider](../VKCComponents/VKCNodeCollider.md) components attached, causing the player to float when enter the world.<br>
    This issue is scheduled to be fixed on the next SDK release.<br>
    Also, this issue can be avoided by adding at least a single Cube with Box Collider attached.

HEOCylinderCollider : Used for enabling [Physics](./PhysicsEngine.md) for the Unity Cylinder Col lider.<br>
Note that Cylinders cannot be used other than simulating physics.

## Using Colliders and Physics in Action Trigger / HeliScript

On the VketCloudSDK, Colliders can be used to detect user clicks and player going in/out areas by [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md) to trigger actions.<br>
For details, see [Actions Overview](../Actions/ActionsOverview.md).

Also, Colliders can be used for calling Callback functions on HeliScript, which can be applied for creating various gimmicks.<br>
Each Callback function is described on the following pages:

- [Callback - Area Collider](../hs/hs_component.md#callback-areacollider)
- [Callback - physics collision detection](../hs/hs_component.md#callback-physics-collision-detection)
- [Callback - In-field collider detection](../hs/hs_component.md#callback-in-field-collider-detection)

## Tips: Implementing staircase colliders

When creating stairs in a world, [VKC Node Mesh Colliders](../VKCComponents/VKCNodeMeshCollider.md) or Box Colliders tend to cause camera shakes on stepping on, and requiring the player to jump when step height is too high. This may cause unintentional stress when walking around!

![ColliderTips_Stair_1](./img/ColliderTips_Stair_1.jpg)

![ColliderTips_Stair_1_Result](./img/ColliderTips_Stair_1_Result.gif)

Therefore, smoother stairs can be implemented by placing a diagonal Box Collider in a slope-like manner.

![ColliderTips_Stair_2](./img/ColliderTips_Stair_2.jpg)

![ColliderTips_Stair_2_Result](./img/ColliderTips_Stair_2_Result.gif)
