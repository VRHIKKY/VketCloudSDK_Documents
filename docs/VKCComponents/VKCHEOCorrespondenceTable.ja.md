# VKC / HEO 対応表

VketCloudSDKには、以下のような種類のコンポーネントが存在します。

- **Setting 項目**: シーンごとに1つの値しか割り当てられないコンポーネント
- **Item 項目**: シーンに複数の値を振り当てられるコンポーネント
- **Node 項目**: Nodeに関するコンポーネント
- **Attribute 項目**: Item/Node/Object等に、属性を与えるコンポーネント
- **Legacy 項目（非推奨）**: 旧バージョンのコンポーネント

## Setting 項目

| 大項目    | 小項目               | コンポーネント名 (-SDK9.X)  | コンポーネント名 (SDK10.X-SDK12.3) | コンポーネント名 (SDK13.X-) |
|-----------|----------------------|----------------------------|------------------------------------|-----------------------------|
| Basic     | version              | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | debugmode            | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | spatiumcode          | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | vrmdrop              | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | occlusionculling     | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | usegamepad           | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | useavatarclick       | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | voiceattenuation     | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | worldicon            | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | physics              | HEO World Settings         | Base Setting                        | VKC Setting Base            |
|           | scripts              | HEO World Settings         | Base Setting                        | VKC Setting Base            |
| Avatars   | avatars              | HEO World Settings         | Avatar Setting                      | VKC Setting Avatar          |
|           | avatariconshow       | HEO World Settings         | Avatar Setting                      | VKC Setting Avatar          |
|           | dummyavatars         | HEO World Settings         | Avatar Setting                      | VKC Setting Avatar          |
| My Avatar | my avatar            | HEO World Settings         | My Avatar Setting                   | VKC Setting My Avatar       |
| Camera    | camera               | HEO World Settings         | World Camera Setting                | VKC Setting World Camera    |
|           | raycastmaxdistance   | HEO World Settings         | World Camera Setting                | VKC Setting World Camera    |
| Player    | player               | HEO Player                 | Player Setting                      | VKC Setting Player          |
| Spawn     | spawns               | HEO Spawn                  | HEO Spawn                           | VKC Setting Spawn           |
| Nameplate | nameplate            | HEO Nameplate              | HEO Nameplate                       | VKC Setting Nameplate       |

## Item 項目

| Item 項目     | コンポーネント名 (-SDK12.3) | コンポーネント名 (SDK13.X-) |
|---------------|-----------------------------|------------------------------|
| Field         | HEO Field                   | VKC Item Field               |
| Object        | HEO Object                  | VKC Item Object              |
| Plane         | HEO Plane                   | VKC Item Plane               |
| TextPlane     | HEO Text Plane              | VKC Item Textplane           |
| Audio         | HEO Audio                   | VKC Item Audio               |
| Particle      | HEO Particle                | VKC Item Particle            |
| Spot          | HEO Spot                    | VKC Item Spot                |
| Area Collider | HEO Area Collider           | VKC Item Area Collider       |
| Bg Texture    | HEO Background Texture      | VKC Item Background Texture  |
| Activity      | HEO Activity                | VKC Item Activity            |
| Camera        | HEO Camera                  | VKC Item Camera              |

## Node 項目

| Node 項目          | コンポーネント名 (-SDK12.3) | コンポーネント名 (SDK13.X-)       |
|--------------------|-----------------------------|-----------------------------------|
| AlphaAnim          | -                           | VKC Node Alpha Animation          |
| Animation          | HEO Animation               | VKC Node Rotate Animation         |
| Rotate Animation   | HEO Rotate Animation        | 廃止(VKC Node Rotate Animationと統合) |
| Collider           | HEO Collider                | VKC Node Collider                 |
| Cylinder Collider  | HEO Cylinder Collider       | VKC Node Cylinder Collider        |
| IBLCubeMap         | -                           | -                                 |
| Info               | HEO Info                    | VKC Node Blend Shape Translator   |
| LODLevel           | HEO LOD Level               | VKC Node LOD Level                |
| Mesh Collider      | HEO Mesh Collider           | VKC Node Mesh Collider            |
| Mirror             | HEO Mirror                  | VKC Node Mirror                   |
| Reflection Probe   | -                           | -                                 |
| ObjectType         | HEO Object Type             | VKC Node Reflection Probe Type    |
| Shadow             | HEO Shadow                  | VKC Node Shadow                   |
| UVScroll           | HEO UV Scroller             | VKC Node UV Scroller              |
| Video              | HEO Video Trigger           | VKC Node Video Trigger            |

## Attribute 項目

| Attribute 項目 | コンポーネント名 (-SDK12.3) | コンポーネント名 (SDK13.X-)       |
|----------------|-----------------------------|-----------------------------------|
| Action Trigger  | HEO Action Trigger          | VKC Attribute Action Trigger      |
| Property        | HEO Property                | VKC Attribute Property            |
| Script          | HEO Script                  | VKC Attribute Script              |
| Show Flag       | HEO Show Flag               | VKC Attribute Show Flag           |
| Clickable UI    | -                           | VKC Attribute Clickable UI        |
| Clickguide      | HEO Clickguide              | VKC Attribute Click Guide         |

## Legacy 項目

- HEO World Setting
- HEO Despawn Height
- HEO Player
- HEO Redire
- HEO Selecting Object
- HEO Text Preview
