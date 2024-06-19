# VKC / HEO Correspondence Chart

The VketCloudSDK includes the following types of components:

- **Setting Component**: A component that can only be assigned one value per scene.
- **Item Component**: A component that can be assigned multiple values within a scene.
- **Node Component**: A component related to nodes.
- **Attribute Component**: A component that assigns attributes to items, nodes, objects, etc.
- **Legacy Component (Deprecated)**: Components from older versions.

## Setting Items

| Major Item | Minor Item          | Component Name (-SDK9.X) | Component Name (SDK10.X-SDK12.3) | Component Name (SDK13.X-) |
|------------|---------------------|--------------------------|----------------------------------|---------------------------|
| Basic      | version             | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | debug mode          | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | spatium code        | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | vrm drop            | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | occlusion culling   | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | use gamepad         | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | use avatar click    | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | voice attenuation   | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | world icon          | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | physics             | HEO World Settings       | Base Setting                     | VKC Setting Base          |
|            | scripts             | HEO World Settings       | Base Setting                     | VKC Setting Base          |
| Avatars    | avatars             | HEO World Settings       | Avatar Setting                   | VKC Setting Avatar        |
|            | avatar icon show    | HEO World Settings       | Avatar Setting                   | VKC Setting Avatar        |
|            | dummy avatars       | HEO World Settings       | Avatar Setting                   | VKC Setting Avatar        |
| My Avatar  | my avatar           | HEO World Settings       | My Avatar Setting                | VKC Setting My Avatar     |
| Camera     | camera              | HEO World Settings       | World Camera Setting             | VKC Setting World Camera  |
|            | raycast max distance| HEO World Settings       | World Camera Setting             | VKC Setting World Camera  |
| Player     | player              | HEO Player               | Player Setting                   | VKC Setting Player        |
| Spawn      | spawns              | HEO Spawn                | HEO Spawn                        | VKC Setting Spawn         |
| Nameplate  | nameplate           | HEO Nameplate            | HEO Nameplate                    | VKC Setting Nameplate     |

## Item Items

| Item Item    | Item Type            | Component Name (-SDK12.3) | Component Name (SDK13.X-) |
|--------------|----------------------|---------------------------|----------------------------|
| Field        | HEO Field            | VKC Item Field            | VKC Item Field             |
| Object       | HEO Object           | VKC Item Object           | VKC Item Object            |
| Plane        | HEO Plane            | VKC Item Plane            | VKC Item Plane             |
| Text Plane   | HEO Text Plane       | VKC Item Textplane        | VKC Item Textplane         |
| Audio        | HEO Audio            | VKC Item Audio            | VKC Item Audio             |
| Particle     | HEO Particle         | VKC Item Particle         | VKC Item Particle          |
| Spot         | HEO Spot             | VKC Item Spot             | VKC Item Spot              |
| Area Collider| HEO Area Collider    | VKC Item Area Collider    | VKC Item Area Collider     |
| Bg Texture   | HEO Background Texture | VKC Item Background Texture | VKC Item Background Texture |
| Activity     | HEO Activity         | VKC Item Activity         | VKC Item Activity          |
| Camera       | HEO Camera           | VKC Item Camera           | VKC Item Camera            |

## Node Items

| Node Item           | Component Name (-SDK12.3) | Component Name (SDK13.X-)        |
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

## Attribute Items

| Attribute Item | Component Name (-SDK12.3) | Component Name (SDK13.X-)       |
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
