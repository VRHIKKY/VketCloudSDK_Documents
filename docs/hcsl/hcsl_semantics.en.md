# Semantics

The following semantics can be specified in HCSL:

## attribute
| Type | Semantic Name | Description |
|:--|:--|:--|
| vec3 | VS_POSITION | Vertex Coordinates |
| vec3 | VS_NORMAL | Normal |
| vec3 | VS_TANGENT | Tangent |
| vec4 | VS_COLOR | Vertex Color 1 |
| vec4 | VS_COLOR2 | Vertex Color 2 |
| vec2 | VS_UV | UV1 |
| vec2 | VS_UV2 | UV2 |
| vec2 | VS_UV3 | UV3 |
| vec4 | VS_BLENDINDEX | Bone Index |
| vec4 | VS_BLENDWEIGHT | Bone Weight |
| float| VS_INSTANCEID | Instance ID (for instance rendering) |

## output
| Type | Semantic Name | Description | Required |
|:--|:--|:--|:--|
| vec4 | VS_OUT_POSITION | Can be specified in the vertex shader. Output vertex position | Required |
| vec4 | FS_COLOR | Can be specified in the fragment shader. Output color | Required |
| float| FS_DEPTH | Can be specified in the fragment shader. Output depth | Optional |