# input block

The `input` block specifies the values to be received from the previous shader stage. Specify the name of the target shader stage next to `input` (e.g., `vertex` or `fragment`).
Note that variables with the `VS_OUT_POSITION` semantic cannot be received. If you want to use the vertex coordinates in the next shader stage, pass the vertex coordinates to another variable that does not have the `VS_OUT_POSITION` semantic, as shown in the implementation example below.

Also, since vertex attributes act as the inputs to the vertex shader, you cannot write an `input` block for the vertex shader.

Implementation Example:
```
output vertex
{
    vec4 outPos : VS_OUT_POSITION;
    vec3 WorldNormal;
    vec3 WorldPos;
    vec2 uv;
}

input fragment
{
    vec3 WorldPos;
    vec3 WorldNormal;
    vec2 uv;
}
```