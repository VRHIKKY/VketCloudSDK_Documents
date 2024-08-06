# VKC/HEO Components Overview

The VketCloudSDK includes the following types of components:

- **Setting Component**: Components that can only be assigned one value per scene.
- **Item Component**: Components that can be assigned multiple values within a scene.
- **Node Component**: Components related to nodes.
- **Attribute Component**: Components that assign attributes to items, nodes, objects, etc.
- **Legacy Component (Deprecated)**: Components from older versions.

## Setting Components

| Category | Component Name (-SDK9.X) | Component Name (SDK10.X-SDK12.3) | Component Name (SDK13.X-) |
|------------|--------------------------|----------------------------------|---------------------------|
| Basic     | HEO World Settings         | Base Setting                        | VKC Setting Base            |
| Player    | HEO Player                 | Player Setting                      | VKC Setting Player          |
| DespawnHeight    | HEO Despawn Height                 | Despawn Height Setting                      | VKC Setting Despawn Height          |
| Rendering | HEO Rendering              | Rendering Setting                       | VKC Setting Rendering       |
| Camera    | HEO World Settings         | World Camera Setting                | VKC Setting World Camera    |
| Avatars   | HEO World Settings         | Avatar Setting                      | VKC Setting Avatar          |
| My Avatar | HEO World Settings         | My Avatar Setting                   | VKC Setting My Avatar       |
| Spawn     | HEO Spawn                  | HEO Spawn                           | VKC Setting Spawn           |
| Nameplate | HEO Nameplate              | HEO Nameplate                       | VKC Setting Nameplate       |

## Item Components

In Vket Cloud worlds, each element such as models, colliders, sound, and particles are internally categorized as "items".<br>
Defining a new item on the world scene can be done by adding a component to a game object, using such as VKC Item Field, VKC Item Object, etc.

Items are further categorized by "type", which defines the role of each item.<br>
here are a few examples:

- field: an item which cannot be moved from its initial position
- object: an item that can move, animate, and other dynamic actions
- plane: item for displaying an image
- textplane: item for displaying a text
- camera: item for switching to a new camera from the ordinary camera, mainly for special effects
- bg, se, system (component named as Audio): item for playing sound effects
- particle: item for emitting particles

| Item Component    | Component Name (-SDK12.3) | Component Name (SDK13.X-) |
|--------------|---------------------------|----------------------------|
| Field        | HEO Field                 | VKC Item Field             |
| Object       | HEO Object                | VKC Item Object            |
| Plane        | HEO Plane                 | VKC Item Plane             |
| Text Plane   | HEO Text Plane            | VKC Item Text Plane         |
| Audio        | HEO Audio                 | VKC Item Audio             |
| Particle     | HEO Particle              | VKC Item Particle          |
| Spot         | HEO Spot                  | VKC Item Spot              |
| Area Collider | HEO Area Collider         | VKC Item Area Collider     |
| Bg. Texture   | HEO Background Texture    | VKC Item Background Texture |
| Activity     | HEO Activity              | VKC Item Activity          |
| Camera       | HEO Camera                | VKC Item Camera            |

### About Item - Field

The "field" type item is unique for its immutability in the scene, which its position cannot be moved. Even if a script calls a field item to move it, it cannot be moved by feature.<br>
However, field items are useful for node controls and editing on Unity.<br>
Immutable objects such as background assets/props are recommended to be placed as a "field" item.<br>

Follow the instructions below to place an object as a "field" item:

1. Attach a [VKC Item Field](VKCItemField.md) component to a game object in the Unity scene

2. Place 3D models, colliders, etc. under the object with the [VKC Item Field](VKCItemField.md) component

This process will pack the Field object and its child objects to a single heo file on build, and place it on the scene as a field type item.<br>
The child objects will be referred as Nodes, which is explained later on.

### About Item - Object

As another type to place 3D models, "object" type items are used aside from field item.<br>
Object type items are able to change position, rotation, and scale by script unlike field item, and can play animations including bone animations.<br>
However, as outputting the item requires a rather complex procedure, field item is a viable option if the object needs several readjustments.<br>
For dynamic objects or scriptable objects, "object" type would be the recommended item.

Follow the instructions below to place an object as a "object" item:

1. Select a game object to designate as an "object" item (multiple selections are not allowed)

2.

3.

4.

5.



## Node Components

| Node Component           | Component Name (-SDK12.3) | Component Name (SDK13.X-)        |
|---------------------|---------------------------|----------------------------------|
| Alpha Animation     | -                         | VKC Node Alpha Animation         |
| Animation           | HEO Animation             | VKC Node Rotate Animation        |
| Rotate Animation    | HEO Rotate Animation      | Deprecated (merged with VKC Node Rotate Animation) |
| Collider            | HEO Collider              | VKC Node Collider                |
| Cylinder Collider   | HEO Cylinder Collider     | VKC Node Cylinder Collider       |
| IBLCubeMap          | -                         | -                                |
| Info                | HEO Info                  | VKC Node Blend Shape Translator  |
| LOD Level           | HEO LOD Level             | VKC Node LOD Level               |
| Mesh Collider       | HEO Mesh Collider         | VKC Node Mesh Collider           |
| Mirror              | HEO Mirror                | VKC Node Mirror                  |
| Reflection Probe    | -                         | -                                |
| Object Type         | HEO Object Type           | VKC Node Reflection Probe Type   |
| Shadow              | HEO Shadow                | VKC Node Shadow                  |
| UV Scroll           | HEO UV Scroller           | VKC Node UV Scroller             |
| Video               | HEO Video Trigger         | VKC Node Video Trigger           |

## Attribute Components

| Attribute Component | Component Name (-SDK12.3) | Component Name (SDK13.X-)       |
|----------------|---------------------------|---------------------------------|
| Action Trigger | HEO Action Trigger        | VKC Attribute Action Trigger    |
| Property       | HEO Property              | VKC Attribute Property          |
| Script         | HEO Script                | VKC Attribute Script            |
| Show Flag      | HEO Show Flag             | VKC Attribute Show Flag         |
| Clickable UI   | -                         | VKC Attribute Clickable UI      |
| Clickguide     | HEO Clickguide            | VKC Attribute Click Guide       |

## Legacy Items

- HEO World Setting
- HEO Despawn Height
- HEO Player
- HEO Redire
- HEO Selecting Object
- HEO Text Preview
