# attribute block

In the `attribute` block, specify the vertex attributes to be used in the vertex shader.
It consists of 3 elements: type, variable name, and semantics. The variable name is arbitrary. The semantics appended at the end specify which vertex attribute this variable corresponds to.
The type of the variable must match the corresponding semantics.
Note that if the mesh using the custom shader does not have the specified vertex attributes, a compile error will occur.

Available semantics and types are as follows:

| Type | Semantic Name | Description |
|:--|:--|:--|
| vec3 | VS_POSITION | Vertex Coordinate |
| vec3 | VS_NORMAL | Normal |
| vec3 | VS_TANGENT | Tangent |
| vec4 | VS_COLOR | Vertex Color 1 |
| vec4 | VS_COLOR2 | Vertex Color 2 |
| vec2 | VS_UV | UV1 |
| vec2 | VS_UV2 | UV2 |
| vec2 | VS_UV3 | UV3 |
| vec4 | VS_BLENDINDEX | Bone Index |
| vec4 | VS_BLENDWEIGHT | Bone Weight |

```
attribute
{
    vec3 _Position : VS_POSITION;
    vec3 _Normal : VS_NORMAL;
    vec2 _TexCoord0 : VS_UV;
}
```