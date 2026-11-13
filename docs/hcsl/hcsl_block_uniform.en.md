# uniform block

In the `uniform` block, specify the values to be set by the material. The possible types are `vec4`, `float`, and `sampler2D`. You can optionally specify initial values. These values are overridden by the material. By defining a `vec4` variable with the texture name suffixed by `_ST`, you can also retrieve the scale and offset for that texture.
Specify the target shader stage name next to `uniform` (e.g. `vertex` or `fragment`).

Uniform values can also be updated using HeliScript.

[Item.SetShaderUniformFloat](../hs/hs_class_item.md#SetShaderUniformFloat)

[Item.GetShaderUniformFloat](../hs/hs_class_item.md#GetShaderUniformFloat)

[Item.SetShaderUniformVector4](../hs/hs_class_item.md#SetShaderUniformVector4)

[Item.GetShaderUniformVector4](../hs/hs_class_item.md#GetShaderUniformVector4)

By defining a `vec4` Uniform with `_ST` appended to the texture name, the texture's scale and offset are configured.
For example, if the texture is `_MainTex`, write `vec4 _MainTex_ST;`

```
uniform vertex
{
    float _Seed;
    float _Size = 0.1;
}

uniform fragment
{
    vec4 _MainColor = vec4(1.0);
    sampler2D _MainTex;
    vec4 _MainTex_ST;
}
```