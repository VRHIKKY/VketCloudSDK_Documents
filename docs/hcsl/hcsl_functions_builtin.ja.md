# ビルトイン関数

HCSLでは以下の組み込み関数を使用可能です。

## hel関数
|関数宣言|説明|
|:--|:--|
|vec4 helTexture(sampler2D texture, vec2 uv)|2Dテクスチャのテクスチャサンプリングを行います。HeliodorとUnityの違いを吸収するために内部的にサンプリングした値をリニア補正したうえで返します。|
|vec4 helTextureCube(samplerCube texture, vec3 dir)|キューブマップのテクスチャサンプリングを行いますHeliodorとUnityの違いを吸収するために内部的にサンプリングした値をリニア補正したうえで返します。|
|vec4 helTextureCubeLOD(samplerCube texture, vec3 dir, float lod)|キューブマップをミップマップレベル付きでテクスチャサンプリングしますHeliodorとUnityの違いを吸収するために内部的にサンプリングした値をリニア補正したうえで返します。|
|vec4 helTextureRaw(sampler2D texture, vec2 uv)|リニア補正を行わずそのままの生の値を返すhelTextureです。バンプマッピングなどテクスチャに書き込まれているそのままの値が必要な時はこれを使用します。|
|vec4 helTextureCubeRaw(samplerCube texture, vec3 dir)|リニア補正を行わずそのままの生の値を返すhelTextureCubeです。|
|vec4 helTextureCubeLODRaw(samplerCube texture, vec3 dir, float lod)|リニア補正を行わずそのままの生の値を返すhelTextureCubeLODです。|
vec4 helCalcShadowCoord(vec3 worldPos)|シャドウマップ拡張(`normal_shadowmap`)が有効になっているときのみ使用可能。シャドウマッピングに使用する座標を計算します。引数には頂点のワールド座標を渡します。|
|float helCalcShadowAttenuation(vec4 shadowCoord, vec3 worldPos)|シャドウマップ拡張(`normal_shadowmap`)が有効になっているときのみ使用可能。影の計算を行います。引数には`helCalcShadowCoord`で計算したshadowCoordと頂点のワールド座標を渡します。|
|vec2 helCalcLightMapUV(vec2 SrcUV, vec4 TexST)|プラットフォーム間の違いを吸収したライトマップ用のUV座標を計算します。SrcUVにはライトマップ用のUV2があればUV2を指定します。UV2を持っていなければUV1を指定します。|
|mat4 helCalcInstanceWorldMatrix(float InstanceID)|インスタンスデータマップ拡張(`instance_data_map`)が有効になっていてかつ頂点シェーダー内でのみ使用可能。インスタンス描画されているオブジェクトのワールド行列を計算します。引数にはVS_INSTANCEIDセマンティックがついたインスタンスIDアトリビュートを渡します。Unity上ではプレビューできません。|
|vec4 helCalcInstanceUVScaleOffset(float InstanceID)|インスタンスデータマップ拡張(`instance_data_map`)が有効になっていてかつ頂点シェーダー内でのみ使用可能。インスタンス描画されているオブジェクトのUCスケール・UVオフセットを計算します。引数にはVS_INSTANCEIDセマンティックがついたインスタンスIDアトリビュートを渡します。Unity上ではプレビューできません。|
|vec4 helCalcInstanceDiffuseColor(float InstanceID)|インスタンスデータマップ拡張(`instance_data_map`)が有効になっていてかつ頂点シェーダー内でのみ使用可能。インスタンス描画されているオブジェクトのディフーズカラーを計算します。引数にはVS_INSTANCEIDセマンティックがついたインスタンスIDアトリビュートを渡します。Unity上ではプレビューできません。|
|mat4 helCalcSkinMatrix(vec4 Index, vec4 Weight)|スキンメッシュアニメーション拡張(`skinmesh_animation`)が有効になっていてかつ頂点シェーダー内でのみ使用可能。スキンメッシュアニメーションの姿勢を表す行列を計算します。引数にはVS_BLENDINDEXアトリビュートとVS_BLENDWEIGHTアトリビュートの値を指定します。|

## float, vecN, int, ivecNで使用可能な関数

vecN, ivecNは各要素同士で計算を行います

例.

```
vec4 pow(vec4 x, vec4 n) = vec4(pow(x.x, n.x), pow(x.y, n.y), pow(x.z, n.z), pow(x.w, n.w));
```

|関数宣言|説明|
|:--|:--|
|float pow(float x, float n)|xのn乗の値を計算します|
|vec2 pow(vec2 x, vec2 n)|xのn乗の値を計算します|
|vec3 pow(vec3 x, vec3 n)|xのn乗の値を計算します|
|vec4 pow(vec4 x, vec4 n)|xのn乗の値を計算します|
|float exp(float x)|eのx乗を計算します|
|vec2 exp(vec2 x)|eのx乗を計算します|
|vec3 exp(vec3 x)|eのx乗を計算します|
|vec4 exp(vec4 x)|eのx乗を計算します|
|float exp2(float x)|2のx乗を計算します|
|vec2 exp2(vec2 x)|2のx乗を計算します|
|vec3 exp2(vec3 x)|2のx乗を計算します|
|vec4 exp2(vec4 x)|2のx乗を計算します|
|float log(float x)|xの自然対数（底e）を計算します|
|vec2 log(vec2 x)|xの自然対数（底e）を計算します|
|vec3 log(vec3 x)|xの自然対数（底e）を計算します|
|vec4 log(vec4 x)|xの自然対数（底e）を計算します|
|float log2(float x)|xの底2の対数を計算します|
|vec2 log2(vec2 x)|xの底2の対数を計算します|
|vec3 log2(vec3 x)|xの底2の対数を計算します|
|vec4 log2(vec4 x)|xの底2の対数を計算します|
|float sqrt(float x)|xの平方根を計算します|
|vec2 sqrt(vec2 x)|xの平方根を計算します|
|vec3 sqrt(vec3 x)|xの平方根を計算します|
|vec4 sqrt(vec4 x)|xの平方根を計算します|
|float inversesqrt(float x)|xの逆平方根（1/√x）を計算します|
|vec2 inversesqrt(vec2 x)|xの逆平方根（1/√x）を計算します|
|vec3 inversesqrt(vec3 x)|xの逆平方根（1/√x）を計算します|
|vec4 inversesqrt(vec4 x)|xの逆平方根（1/√x）を計算します|
|float abs(float x)|xの絶対値を返します|
|vec2 abs(vec2 x)|xの絶対値を返します|
|vec3 abs(vec3 x)|xの絶対値を返します|
|vec4 abs(vec4 x)|xの絶対値を返します|
|int abs(int x)|xの絶対値を返します|
|ivec2 abs(ivec2 x)|xの絶対値を返します|
|ivec3 abs(ivec3 x)|xの絶対値を返します|
|ivec4 abs(ivec4 x)|xの絶対値を返します|
|float sign(float x)|xの符号を返します（正:1, 負:-1, 0:0）|
|vec2 sign(vec2 x)|xの符号を返します（正:1, 負:-1, 0:0）|
|vec3 sign(vec3 x)|xの符号を返します（正:1, 負:-1, 0:0）|
|vec4 sign(vec4 x)|xの符号を返します（正:1, 負:-1, 0:0）|
|int sign(int x)|xの符号を返します（正:1, 負:-1, 0:0）|
|ivec2 sign(ivec2 x)|xの符号を返します（正:1, 負:-1, 0:0）|
|ivec3 sign(ivec3 x)|xの符号を返します（正:1, 負:-1, 0:0）|
|ivec4 sign(ivec4 x)|xの符号を返します（正:1, 負:-1, 0:0）|
|float floor(float x)|x以下の最大の整数値を返します|
|vec2 floor(vec2 x)|x以下の最大の整数値を返します|
|vec3 floor(vec3 x)|x以下の最大の整数値を返します|
|vec4 floor(vec4 x)|x以下の最大の整数値を返します|
|float ceil(float x)|x以上の最小の整数値を返します|
|vec2 ceil(vec2 x)|x以上の最小の整数値を返します|
|vec3 ceil(vec3 x)|x以上の最小の整数値を返します|
|vec4 ceil(vec4 x)|x以上の最小の整数値を返します|
|float fract(float x)|xの小数部分を返します|
|vec2 fract(vec2 x)|xの小数部分を返します|
|vec3 fract(vec3 x)|xの小数部分を返します|
|vec4 fract(vec4 x)|xの小数部分を返します|
|float mod(float x, float y)|xをyで割った余りを返します|
|vec2 mod(vec2 x, vec2 y)|xをyで割った余りを返します|
|vec3 mod(vec3 x, vec3 y)|xをyで割った余りを返します|
|vec4 mod(vec4 x, vec4 y)|xをyで割った余りを返します|
|float min(float x, float y)|xとyの小さい方を返します|
|vec2 min(vec2 x, vec2 y)|xとyの小さい方を返します|
|vec3 min(vec3 x, vec3 y)|xとyの小さい方を返します|
|vec4 min(vec4 x, vec4 y)|xとyの小さい方を返します|
|int min(int x, int y)|xとyの小さい方を返します|
|ivec2 min(ivec2 x, ivec2 y)|xとyの小さい方を返します|
|ivec3 min(ivec3 x, ivec3 y)|xとyの小さい方を返します|
|ivec4 min(ivec4 x, ivec4 y)|xとyの小さい方を返します|
|float max(float x, float y)|xとyの大きい方を返します|
|vec2 max(vec2 x, vec2 y)|xとyの大きい方を返します|
|vec3 max(vec3 x, vec3 y)|xとyの大きい方を返します|
|vec4 max(vec4 x, vec4 y)|xとyの大きい方を返します|
|int max(int x, int y)|xとyの大きい方を返します|
|ivec2 max(ivec2 x, ivec2 y)|xとyの大きい方を返します|
|ivec3 max(ivec3 x, ivec3 y)|xとyの大きい方を返します|
|ivec4 max(ivec4 x, ivec4 y)|xとyの大きい方を返します|
|float clamp(float x, float minVal, float maxVal)|xを[minVal, maxVal]の範囲にクランプします|
|vec2 clamp(vec2 x, vec2 minVal, vec2 maxVal)|xを[minVal, maxVal]の範囲にクランプします|
|vec3 clamp(vec3 x, vec3 minVal, vec3 maxVal)|xを[minVal, maxVal]の範囲にクランプします|
|vec4 clamp(vec4 x, vec4 minVal, vec4 maxVal)|xを[minVal, maxVal]の範囲にクランプします|
|int clamp(int x, int minVal, int maxVal)|xを[minVal, maxVal]の範囲にクランプします|
|ivec2 clamp(ivec2 x, ivec2 minVal, ivec2 maxVal)|xを[minVal, maxVal]の範囲にクランプします|
|ivec3 clamp(ivec3 x, ivec3 minVal, ivec3 maxVal)|xを[minVal, maxVal]の範囲にクランプします|
|ivec4 clamp(ivec4 x, ivec4 minVal, ivec4 maxVal)|xを[minVal, maxVal]の範囲にクランプします|

## float, vecNのみで使用可能な関数

vecNは各要素同士で計算を行います

例.

```
vec4 sin(vec4 x) = vec4(sin(x.x), sin(x.y), sin(x.z), sin(x.w));
```

|関数宣言|説明|
|:--|:--|
|float radians(float degrees)|度をラジアンに変換します|
|vec2 radians(vec2 degrees)|度をラジアンに変換します|
|vec3 radians(vec3 degrees)|度をラジアンに変換します|
|vec4 radians(vec4 degrees)|度をラジアンに変換します|
|float degrees(float radians)|ラジアンを度に変換します|
|vec2 degrees(vec2 radians)|ラジアンを度に変換します|
|vec3 degrees(vec3 radians)|ラジアンを度に変換します|
|vec4 degrees(vec4 radians)|ラジアンを度に変換します|
|float sin(float x)|xのサインを計算します|
|vec2 sin(vec2 x)|xのサインを計算します|
|vec3 sin(vec3 x)|xのサインを計算します|
|vec4 sin(vec4 x)|xのサインを計算します|
|float cos(float x)|xのコサインを計算します|
|vec2 cos(vec2 x)|xのコサインを計算します|
|vec3 cos(vec3 x)|xのコサインを計算します|
|vec4 cos(vec4 x)|xのコサインを計算します|
|float tan(float x)|xのタンジェントを計算します|
|vec2 tan(vec2 x)|xのタンジェントを計算します|
|vec3 tan(vec3 x)|xのタンジェントを計算します|
|vec4 tan(vec4 x)|xのタンジェントを計算します|
|float asin(float x)|xのアークサインを計算します|
|vec2 asin(vec2 x)|xのアークサインを計算します|
|vec3 asin(vec3 x)|xのアークサインを計算します|
|vec4 asin(vec4 x)|xのアークサインを計算します|
|float acos(float x)|xのアークコサインを計算します|
|vec2 acos(vec2 x)|xのアークコサインを計算します|
|vec3 acos(vec3 x)|xのアークコサインを計算します|
|vec4 acos(vec4 x)|xのアークコサインを計算します|
|float atan(float y, float x)|y/xのアークタンジェントを計算します|
|vec2 atan(vec2 y, vec2 x)|y/xのアークタンジェントを計算します|
|vec3 atan(vec3 y, vec3 x)|y/xのアークタンジェントを計算します|
|vec4 atan(vec4 y, vec4 x)|y/xのアークタンジェントを計算します|
|float dFdx(float x)|xのx方向の微分値を返します|
|vec2 dFdx(vec2 x)|xのx方向の微分値を返します|
|vec3 dFdx(vec3 x)|xのx方向の微分値を返します|
|vec4 dFdx(vec4 x)|xのx方向の微分値を返します|
|float dFdy(float x)|xのy方向の微分値を返します|
|vec2 dFdy(vec2 x)|xのy方向の微分値を返します|
|vec3 dFdy(vec3 x)|xのy方向の微分値を返します|
|vec4 dFdy(vec4 x)|xのy方向の微分値を返します|
|float length(float x)|ベクトルxの長さを返します|
|vec2 length(vec2 x)|ベクトルxの長さを返します|
|vec3 length(vec3 x)|ベクトルxの長さを返します|
|vec4 length(vec4 x)|ベクトルxの長さを返します|
|float distance(float p0, float p1)|2点間の距離を返します|
|vec2 distance(vec2 p0, vec2 p1)|2点間の距離を返します|
|vec3 distance(vec3 p0, vec3 p1)|2点間の距離を返します|
|vec4 distance(vec4 p0, vec4 p1)|2点間の距離を返します|
|float dot(float x, float y)|xとyの内積を返します|
|vec2 dot(vec2 x, vec2 y)|xとyの内積を返します|
|vec3 dot(vec3 x, vec3 y)|xとyの内積を返します|
|vec4 dot(vec4 x, vec4 y)|xとyの内積を返します|
|vec3 cross(vec3 x, vec3 y)|xとyの外積を返します|
|float normalize(float x)|ベクトルxを正規化します|
|vec2 normalize(vec2 x)|ベクトルxを正規化します|
|vec3 normalize(vec3 x)|ベクトルxを正規化します|
|vec4 normalize(vec4 x)|ベクトルxを正規化します|
|float reflect(float I, float N)|IをNで反射したベクトルを返します|
|vec2 reflect(vec2 I, vec2 N)|IをNで反射したベクトルを返します|
|vec3 reflect(vec3 I, vec3 N)|IをNで反射したベクトルを返します|
|vec4 reflect(vec4 I, vec4 N)|IをNで反射したベクトルを返します|
|float refract(float I, float N, float eta)|屈折率etaでIをNで屈折させたベクトルを返します|
|vec2 refract(vec2 I, vec2 N, float eta)|屈折率etaでIをNで屈折させたベクトルを返します|
|vec3 refract(vec3 I, vec3 N, float eta)|屈折率etaでIをNで屈折させたベクトルを返します|
|vec4 refract(vec4 I, vec4 N, float eta)|屈折率etaでIをNで屈折させたベクトルを返します|
|float mix(float x, float y, float a)|xとyをaで線形補間します|
|vec2 mix(vec2 x, vec2 y, vec2 a)|xとyをaで線形補間します|
|vec3 mix(vec3 x, vec3 y, vec3 a)|xとyをaで線形補間します|
|vec4 mix(vec4 x, vec4 y, vec4 a)|xとyをaで線形補間します|
|float step(float edge, float x)|xがedge未満なら0、以上なら1を返します|
|vec2 step(vec2 edge, vec2 x)|xがedge未満なら0、以上なら1を返します|
|vec3 step(vec3 edge, vec3 x)|xがedge未満なら0、以上なら1を返します|
|vec4 step(vec4 edge, vec4 x)|xがedge未満なら0、以上なら1を返します|
|float smoothstep(float edge0, float edge1, float x)|xの値に応じて0から1まで滑らかに補間します|
|vec2 smoothstep(vec2 edge0, vec2 edge1, vec2 x)|xの値に応じて0から1まで滑らかに補間します|
|vec3 smoothstep(vec3 edge0, vec3 edge1, vec3 x)|xの値に応じて0から1まで滑らかに補間します|
|vec4 smoothstep(vec4 edge0, vec4 edge1, vec4 x)|xの値に応じて0から1まで滑らかに補間します|
|float float(int x)|int型をfloat型にキャストします|
|int int(float x)|float型をint型にキャストします|