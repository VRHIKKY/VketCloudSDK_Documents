# How to Use Colliders / Tips

## What You Can Do with Colliders
In Vket Cloud, by combining various Unity colliders with VKC components, you can create the following functions and expressions:

1. Basic environment construction: [Creating walls and floors](../VKCComponents/VKCNodeCollider.md#1-collider)
2. Display optimization: [Occlusion function](../WorldOptimization/OcclusionCulling.md) to omit processing of invisible parts
3. Loading efficiency: [Dynamic loading](../VKCComponents/VKCItemField.md) to load content only when needed
4. Interaction: Detection of [clicks, area entry/exit, in-view detection](../VKCComponents/VKCNodeCollider.md#_2), etc.
5. Physics: [Movements such as falling and collisions](./PhysicsEngine.md)

## Collider Components

Vket Cloud SDK includes the following collider-related components:

### Basic Component

**[VKC Node Collider](../VKCComponents/VKCNodeCollider.md)** - A basic component for representing colliders. By using it with Unity's BoxCollider, you can create collision-enabled nodes such as walls and floors. Various expressions are possible by combining it with other VKC components.

!!! note "Notes on handling Box Colliders"
    GameObjects with Box Colliders will automatically have colliders applied even without VKCNodeCollider attached.

### Components Used in Combination with the Basic Component
When these are attached in the Inspector view, VKC Node Collider is also automatically added

**[VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)** - Allows you to set actions triggered by player entry and exit to specific areas.

**[VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md)** - By adding this in combination with Unity's Mesh Collider, you can create colliders that match the mesh shape.

**[VKC Node Cylinder Collider](../VKCComponents/VKCNodeCylinderCollider.md)** - Used when applying physics to Unity's CapsuleCollider. See [Physics Engine](./PhysicsEngine.md) for details.

## Integrating Colliders with Actions

By combining colliders with actions, you can create a variety of mechanisms.<br>
See [Actions Category](../Actions/ActionsOverview.md) for details.

## Integrating Colliders with Scripts
By utilizing HeliScript callback functions, you can create complex mechanisms that cannot be achieved with actions alone:

- [Callback - Area Collider](../hs/hs_component.md#-areacollider)
- [Callback - Physics Collision Detection](../hs/hs_component.md#-_2)
- [Callback - In-View Collider](../hs/hs_component.md#-_3)

## Practical Tips

!!! tips "Stair Collider Placement Technique"
    When placing colliders on stairs, using [VKC Node Mesh Collider](../VKCComponents/VKCNodeMeshCollider.md) or Box Collider as is can cause movement jitter or require jumping on certain steps, creating stress for players.
    ![ColliderTips_Stair_1](./img/ColliderTips_Stair_1.jpg)
    ![ColliderTips_Stair_1_Result](./img/ColliderTips_Stair_1_Result.gif)
    As a better solution, you can create stairs that players can climb smoothly by placing Box Colliders at an angle to create a slope.
    ![ColliderTips_Stair_2](./img/ColliderTips_Stair_2.jpg)
    ![ColliderTips_Stair_2_Result](./img/ColliderTips_Stair_2_Result.gif)


!!! note "How Player Collision Detection Works"
    Players have collision detection on the orange sphere shown in the image.<br>
    The orange sphere can be visualized with the following steps:  
    1. First, enable [Debug Mode](../WorldEditingTips/DebugMode.md#f3) in [VketCloudSettings / BasicSettings](../VketCloudSettings/BasicSettings.md).  
    2. After building, it will be displayed by pressing the F3 key during gameplay.  
    ![ColliderTips_player_1](./img/ColliderTips_player_1.jpg)