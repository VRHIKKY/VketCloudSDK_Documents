# VKC Node Rotate Animation

`VKC Node Rotate Animation`Component plays a rotation animation on the attached object.<br>
The animation is played in a loop.

![HEOAnimation_1](img/HEOAnimation_1.jpg)

| Label | Value |
| ---- | ---- | 
| Rotate Per Sec | Rotation angle per second |

The `Rotate Per Sec` designates the rotation of the object by X, Y, and Z-axis.

##　How to Use

### Rotating the object itself

1\. Attach `VKC Node Rotate Animation` on a object via the `Add Component` in the inspector.<br>
For example, the `VKC Node Rotate Animation` is attached on a cube as below:

![HEOAnimation_2](img/HEOAnimation_2.jpg)

2\. Designate a rotating angle per second in the `Rotate Per Sec` for the X, Y, or Z-axis.

![HEOAnimation_3](img/HEOAnimation_3.jpg)

Entering the world, the object will rotate by pivoting on its own center.

![HEOAnimation_Result_1](img/HEOAnimation_Result_1.gif)

### Rotating by pivoting on another object

By designating a parent object with a `VKC Node Rotate Animation` attached, the child object will rotate around the parent object.

1\. Attach a `VKC Node Rotate Animation` on a parent-object, and set the rotation per second.<br>
For example, an empty gameobject for the center of the rotation is created with a `VKC Node Rotate Animation` as below:

![HEOAnimation_4](img/HEOAnimation_4.jpg)

2\. In the hierarchy, drag & drop a child object to be rotated on the parent object.<br>
A cube object is designated as a child object as below:

![HEOAnimation_5](img/HEOAnimation_5.jpg)

!!! note
    In the Scene view, the parent object's position will be displayed as the center of the child object (see image below), the actual `Transform - Position` value of the parent object will not change before/after defining a child object.<br>
    Refer to the `Transform - Position`  value for the parent object's position.

![HEOAnimation_6](img/HEOAnimation_6.jpg)

Note that on defining a parent-child relation, the child object's `Transform - Position` value will shift from "distance from origin" to "distance from parent object". 

![HEOAnimation_7](img/HEOAnimation_7.jpg)

Entering the world, the child object will rotate around the parent object.<br>
The child object's collision will follow the object's rotation.

![HEOAnimation_Result_2](img/HEOAnimation_Result_2.gif)