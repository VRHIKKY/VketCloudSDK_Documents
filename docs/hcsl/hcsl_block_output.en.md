# output block

The `output` block specifies the values to be passed to the next shader stage. You can also define roles by attaching semantics.
Specify the name of the target shader stage next to `output` (e.g., `vertex` or `fragment`).

| Type | Semantic Name | Description | Required |
|:--|:--|:--|:--|
| vec4 | VS_OUT_POSITION | Can be specified in the vertex shader. Output vertex position | Required |
| vec4 | FS_COLOR | Can be specified in the fragment shader. Output color | Required |
| float| FS_DEPTH | Can be specified in the fragment shader. Output depth | Optional |

```
output vertex
{
    vec4 outPos : VS_OUT_POSITION;
    vec3 WorldNormal;
    vec3 WorldPos;
    vec2 uv;
}

output fragment
{
    vec4 outColor : FS_COLOR;
    float outDepth : FS_DEPTH;
}
```