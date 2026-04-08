# outputブロック

outputブロックでは次のシェーダーステージに渡す値を指定します。セマンティクスをつけて役割をしてすることもできます。
outputの横に該当のシェーダーステージの名称を指定します(vertexやfragment)

|型|セマンティクス名|説明|必須項目|
|:--|:--|:--|:--|
|vec4|VS_OUT_POSITION|頂点シェーダーで指定可能。出力頂点位置|必須|
|vec4|FS_COLOR|フラグメントシェーダーで指定可能。出力カラー|必須|
|float|FS_DEPTH|フラグメントシェーダーで指定可能。出力深度|任意|

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