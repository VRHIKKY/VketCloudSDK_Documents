# セマンティクス

HCSLでは以下のセマンティクスを指定可能です

## attribute
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
|float|VS_INSTANCEID|インスタンスID(インスタンス描画用)|

## output
|型|セマンティクス名|説明|必須項目|
|:--|:--|:--|:--|
|vec4|VS_OUT_POSITION|頂点シェーダーで指定可能。出力頂点位置|必須|
|vec4|FS_COLOR|フラグメントシェーダーで指定可能。出力カラー|必須|
|float|FS_DEPTH|フラグメントシェーダーで指定可能。出力深度|任意|