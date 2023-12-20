# Physics Engine

In Vket Cloud, collision and physics can be simulated by using Unity colliders and various SDK features.

## How to Use Colliders

!!! note info
    This article has moved to [How to Use Colliders / tips](./Collider.md).

## How to Use the Physics Engine

1\. To apply physics simulation to game objects, attach "Unity Collider" and [HEOCollider](../HEOComponents/HEOCollider.md)to the game object.<br>
Unity colliders that can be used for physics simulation are "Box Collider", "Sphere Collider", and "Capsule Collider".

Furthermore, by attaching an additional "HEOCylinderCollider" to a game object with a "Capsule Collider" as mentioned later, it can be used as a cylinder collider exclusively in the Vket Cloud physics engine.

![PhysicsEngine](img/PhysicsEngine.jpg)

2\. Set the properties of the HEOCollider/Physics item.<br>
While each property is explained below, basically enabling  `Use Physics Engine` on [HEOWorldSettings](../HEOComponents/HEOWorldSetting.md#_1) and enabling `UsePhysics` on each collider component will enable the gameobject to simulate their physics.

### Brief Overview of HEOCollider/Physics properties

![PhysicsEngine](img/PhysicsEngineCollider.jpg)

| Label | Function |
| ---- | ---- |
| `Collider type` | Specifies the type of collider. |
| `Collider target` | Specifies the target. |
| `UsePhysics` | When checked, physics simulation will be enabled. |
| `Fixed` | Toggles whether to fix this game object's position in physics calculation.<br> Example:Non-moving objects such as floors and walls → Enable `Fixed` <br> Moving objects such as balls → Disable `Fixed` |
| `EnableBody` | Initial value of whether or not to use physics calculations. <br>As mentioned later, you can toggle the use of physics calculations with Action Trigger. EnableBody is the initial value.<br> For example, you can create a gimmick where you put cans of juice in a vending machine with physics disabled, and when you press the purchase button of the vending machine, enable the physics of the can and roll it out from the vending machine. |
| `Mass` | Mass Parameter |
| `Restitution` | Restitution Parameter |

3\. As all parameters have been adjusted, physics simulation will start by Build & Run.

## About Action Trigger

For how to use the ActionTrigger, refer to the following pages:

- [ActionsOverview](../Actions/ActionsOverview.md)
  - [PhysicsAddVelocity](../Actions/Physics/PhysicsAddVelocity.md)
  - [PhysicsClearAddForce](../Actions/Physics/PhysicsClearAddForce.md)
  - [PhysicsSetEnable](../Actions/Physics/PhysicsSetEnable.md)
  - [PhyscsSetPosRot](../Actions/Physics/PhysicsSetPosRot.md)

Also, for usage of physics and colliders on HeliScript, refer to the following pages:

- [Callback - AreaCollider](../hs/hs_component.md#callback-areacollider)
- [Callback - physics collision detection](../hs/hs_component.md#callback-physics-collision-detection)
- [Callback - In-field collider detection](../hs/hs_component.md#callback-in-field-collider-detection)
- [Built-in functions - Physics](../hs/hs_system_function_physics.md)

## About Cylinder Collider

Normally in Unity there is no cylinder collider, and it is substituted by a capsule collider, but in VketCloud, as shown in the image below, by attaching an additional "HEOCylinderCollider" to an object with a "Capsule Collider", you can use it as a cylinder collider exclusively in the VketCloud physics engine.

![PhysicsEngine](img/PhysicsEngineCylinderCollider.jpg)

!!! Notes Info
    - Due to the implementation of collision detection in the physics engine, capsule colliders and cylinder colliders, and cylinder colliders and cylinder colliders do not collide.
    - When using a cylinder collider, thin colliders like Plane may penetrate, so you need to use a box for the ground.
