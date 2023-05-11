# Physics Engine

## How to Use the Physics Engine
1. To apply physics calculations to game objects, attach "Unity Collider" and "HEOCollider" to the game object. Unity colliders that can be used for physics calculations are "Box Collider", "Sphere Collider", "Capsule Collider". Furthermore, by attaching an additional "HEOCylinderCollider" to a game object with a "Capsule Collider" as mentioned later, it can be used as a cylinder collider exclusively in the VketCloud physics engine.

![PhysicsEngine](img/PhysicsEngine.jpg)

2. Set the properties of the HEOCollider/Physics item. Each item is explained below, but by checking "UsePhysics", physics calculations will be applied to that game object.
    - About HEOCollider/Physics properties
    ![PhysicsEngine](img/PhysicsEngineCollider.jpg)
      - UsePhysics: When checked, physics calculations are applied
      - Fixed: Whether to fix this game object in physics calculations.
        - Example:
          - Non-moving objects such as floors and walls → Fixed on
          - Moving objects such as balls → Fixed off
    - EnableBody: Initial value of whether or not to use physics calculations
        - As mentioned later, you can toggle the use of physics calculations with Action Trigger. EnableBody is the initial value. For example, you can create a gimmick where you put cans of juice in a vending machine with physics disabled, and when you press the purchase button of the vending machine, enable the physics of the can and roll it out from the vending machine.
    - Mass: Weight
    - Restitution: Coefficient of restitution

3. After that, you can use physics calculations by exporting as usual.

## About Action Trigger
For how to use the ActionTrigger, it is described on the following pages.

- [ActionsOverview](../Unity/ActionsOverview.md)
  - [PhysicsAddVelocity](../Unity/PhysicsAddVelocity.md)
  - [PhysicsClearAddForce](../Unity/PhysicsClearAddForce.md)
  - [PhysicsSetEnable](../Unity/PhysicsSetEnable.md)
  - [PhyscsSetPosRot](../Unity/PhysicsSetPosRot.md)

## About Cylinder Collider
Normally in Unity there is no cylinder collider, and it is substituted by a capsule collider, but in VketCloud, as shown in the image below, by attaching an additional "HEOCylinderCollider" to an object with a "Capsule Collider", you can use it as a cylinder collider exclusively in the VketCloud physics engine.
![PhysicsEngine](img/PhysicsEngineCylinderCollider.jpg)

!!! Notes Info
    - Due to the implementation of collision detection in the physics engine, capsule colliders and cylinder colliders, and cylinder colliders and cylinder colliders do not collide.
    - When using a cylinder collider, thin colliders like Plane may penetrate, so you need to use a box for the ground.
