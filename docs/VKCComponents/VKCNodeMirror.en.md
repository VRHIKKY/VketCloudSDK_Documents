# VKC Node Mirror

![HEOMirror_1](img/HEOMirror_1.jpg)

HEOMirror is placed with a Quad to implement a pseudo-mirror.

![HEOMirror_2](img/HEOMirror_2.jpg)

## How to Use

### TLDR

1.Prepare a Quad to be used as a mirror

2.Create Texture and Material

3.Attach VKC Node Mirror to the Quad

### Implementation

1\. Prepare a Quad to be used as a mirror

![HEOMirror_3](img/HEOMirror_3.jpg)

Create a Quad by selecting Create > 3D Object.<br>
As VKC Node Mirror is categorized as a Node, the Quad must be a child object of the object with [VKC Item Field](HEOField.md) attached.

2\. Create Texture and Material

Create a Texture which width/height is formatted as the power of 2.<br>
For example, a square 1024*1024 texture is used here. Note that the texture does not have to be a square.

As the Texture is created, prepare a material as below:

![HEOMirror_5](img/HEOMirror_5.jpg)

If the intended Shader accepts textures, the material's shader does not have to be Unlit/Texture.

3\. Attach VKC Node Mirror to the Quad

![HEOMirror_6](img/HEOMirror_6.jpg)

Attach VKC Node Mirror to the Quad. Make sure to select the `Enable Mirror`.

By building world at this moment, the object will be a Mirror.

## Tips

### Enabling Mirror while the player is in the designated area

By attaching a Box Collider and [VKC Node Collider](HEOCollider.md), the mirror will be enabled only when the player is in the designated area. Set the [VKC Node Collider](HEOCollider.md)'s collider type to Area, and Collider Target to None.<br>
If the Box Collider is not attached the mirror will be enabled regardless of player position.

![HEOMirror_7](img/HEOMirror_7.jpg)

### Changing Material Colors

By using color changeable shaders such as standard, the color tone on the mirror's image will change.

![HEOMirror_8](img/HEOMirror_8.jpg)

![HEOMirror_9](img/HEOMirror_9.jpg)

![HEOMirror_10](img/HEOMirror_10.jpg)

### Using the same material of VKC Node Mirror's object on other objects

Unlike video players, the same material on a different object will not display the mirror image, as only the object with VKC Node Mirror will be a mirror.

![HEOMirror_11](img/HEOMirror_11.jpg)

### Placing Multiple Mirrors

The object with VKC Node Mirror attached will not be displayed in another VKC Node Mirror?

Therefore, if two or more mirrors are faced, each image will not be displayed on the other, and will show the scenery behind the mirror.

Example: Placing 8 Quads with VKC Node Mirror, each rotated 45°

![HEOMirror_12](img/HEOMirror_12.jpg)

![HEOMirror_13](img/HEOMirror_13.jpg)

!!! caution "Performance when placing Mirrors"
    If multiple mirrors are placed with video playing in the mirror's vicinity, it may result to poorer performance on smartphones.
    Please consider the positions when placing mirrors.
