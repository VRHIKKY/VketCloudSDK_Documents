# attribute block

attributeブロックには頂点シェーダーで使用する頂点アトリビュートを指定します。
型・変数名・セマンティクスの3要素で構成されます。変数名は任意です。後ろにセマンティクスをつけることでこの変数がどの頂点アトリビュートに対応しているかを指定します。
変数の型にはセマンティクスに対応した型を指定する必要があります。
なお、カスタムシェーダーを使用しているメッシュが指定頂点アトリビュートを持っていない場合はコンパイルエラーとなります。

使用可能なセマンティクスと型は以下の通りです

|型|セマンティクス名|説明|
|:--|:--|:--|
|vec3|VS_POSITION|頂点座標|
|vec3|VS_NORMAL|法線|
|vec3|VS_TANGENT|接線|
|vec4|VS_COLOR|頂点カラー１|
|vec4|VS_COLOR2|頂点カラー２|
|vec2|VS_UV|UV1|
|vec2|VS_UV2|UV2|
|vec2|VS_UV3|UV3|
|vec4|VS_BLENDINDEX|ボーンインデックス|
|vec4|VS_BLENDWEIGHT|ボーンウェイト|

```
attribute
{
    vec3 _Position : VS_POSITION;
    vec3 _Normal : VS_NORMAL;
    vec2 _TexCoord0 : VS_UV;
}
```