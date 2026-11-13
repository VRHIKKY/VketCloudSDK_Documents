# input block

inputブロックは1つ前のシェーダーステージから受け取る値を指定するブロックです。inputの横に該当のシェーダーステージの名称を指定します(vertexやfragment)
なお、VS_OUT_POSITIONセマンティクスの変数は受け取ることができないので頂点座標を次のシェーダーステージでも使いたいときは、実装例のようにVS_OUT_POSITIONではない別の変数にも頂点座標を渡してください。

また、頂点シェーダーへのインプットは頂点アトリビュートが果たすので頂点シェーダーにinputブロックを記述することはできません

実装例 
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