# uniform block

uniformブロックにはマテリアルで設定する値を指定します。型はvec4・float・sampler2Dの3つが指定可能です。任意で初期値を指定することもできます。この値はマテリアルによって上書きされます。テクスチャ名の末尾に「_ST」をつけたvec4型の変数を定義することで、そのテクスチャのスケール・オフセットを受け取ることもできます。
uniformの横に該当のシェーダーステージの名称を指定します(vertexやfragment)

uniformの値はHeliScriptを使って更新することもできます。

[Item.SetShaderUniformFloat](../hs/hs_class_item.md#SetShaderUniformFloat)

[Item.GetShaderUniformFloat](../hs/hs_class_item.md#GetShaderUniformFloat)

[Item.SetShaderUniformVector4](../hs/hs_class_item.md#SetShaderUniformVector4)

[Item.GetShaderUniformVector4](../hs/hs_class_item.md#GetShaderUniformVector4)

vec4型でテクスチャ名末尾に「_ST」をつけたUniformを定義することでテクスチャのスケール・オフセットが設定されます。
例. テクスチャが_MainTexなら「vec4 _MainTex_ST;」

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