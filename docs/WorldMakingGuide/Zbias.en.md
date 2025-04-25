# Dynamically Changing the Z-bias of Plane Items

Starting from Lib15, you will be able to dynamically change the Z-bias of items using HeliScript.  
This allows you to switch the display priority of Planes placed in the same location or avoid unnatural texture overlaps caused by the placement position.

![Zbias](img/Zbias.jpg)

Plane in Lib13.
We wanted to put the click guide's finger icon behind the purchase button, but it wasn't possible.

!!! note "Testing Environment"
    SDK Version : 15.X.X  
    OS : Windows 10  
    Unity : 2022.3.6.f1 (planned)  
    Browser : Google Chrome

## Prerequisite - What is ZBias?

ZBias (Z-value bias) is a parameter for pseudo-depth representation of 2D images that have no actual depth.  
The larger the value, the further back it appears; the smaller the value, the closer to the front it appears.

Example: If a Cube is located 0.7 UnityScale units behind a Plane set to ZBias=1, the image will be displayed behind the Cube.  

However, changing the ZBias value does not change the image's coordinate position.  

Generally, by decreasing the ZBias, the image is displayed with higher priority than objects at the image's placement position.  

With the addition of this dynamic change functionality, it is now possible to set the ZBias from HeliScript, taking into account the object situation around the image. Additionally, you can place multiple images in the same position and switch between them like a flipbook.

## Method Introduction

### ① void Item.SetPlaneZBias(float ZBias)

Changes the ZBias of the item.  
The argument is a float value.

### ② float Item.GetPlaneZBias

Gets the current ZBias setting value of the item.