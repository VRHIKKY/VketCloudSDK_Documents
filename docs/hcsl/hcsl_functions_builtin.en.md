# Built-in Functions

In HCSL, the following built-in functions can be used.

## hel Functions
| Function Declaration | Description |
|:--|:--|
| `vec4 helTexture(sampler2D texture, vec2 uv)` | Performs texture sampling on 2D textures. To absorb differences between Heliodor and Unity, it internally returns the sampled values after applying linear correction. |
| `vec4 helTextureCube(samplerCube texture, vec3 dir)` | Performs texture sampling on cube maps. To absorb differences between Heliodor and Unity, it internally returns the sampled values after applying linear correction. |
| `vec4 helTextureCubeLOD(samplerCube texture, vec3 dir, float lod)` | Performs texture sampling on cube maps with a mipmap level specified. To absorb differences between Heliodor and Unity, it internally returns the sampled values after applying linear correction. |
| `vec4 helTextureRaw(sampler2D texture, vec2 uv)` | Version of `helTexture` that returns raw values without linear correction. Used when the exact written values from a texture are needed, such as in bump mapping. |
| `vec4 helTextureCubeRaw(samplerCube texture, vec3 dir)` | Version of `helTextureCube` that returns raw values without linear correction. |
| `vec4 helTextureCubeLODRaw(samplerCube texture, vec3 dir, float lod)` | Version of `helTextureCubeLOD` that returns raw values without linear correction. |
| `vec4 helCalcShadowCoord(vec3 worldPos)` | Only usable when the shadow map extension (`normal_shadowmap`) is enabled. Calculates the coordinates used for shadow mapping. Pass the world coordinates of the vertex as the argument. |
| `float helCalcShadowAttenuation(vec4 shadowCoord, vec3 worldPos)` | Only usable when the shadow map extension (`normal_shadowmap`) is enabled. Calculates shadows. Pass `shadowCoord` (calculated via `helCalcShadowCoord`) and the vertex's world coordinates as arguments. |
| `vec2 helCalcLightMapUV(vec2 SrcUV, vec4 TexST)` | Calculates UV coordinates for lightmaps, absorbing differences across platforms. Pass UV2 into `SrcUV` if the mesh has lightmap UVs as UV2; otherwise, pass UV1. |
| `mat4 helCalcInstanceWorldMatrix(float InstanceID)` | Only usable inside vertex shaders when the instance data map extension (`instance_data_map`) is enabled. Calculates the world matrix of a rendering instanced object. Pass the instance ID attribute appended with the `VS_INSTANCEID` semantics. Cannot be previewed in Unity. |
| `vec4 helCalcInstanceUVScaleOffset(float InstanceID)` | Only usable inside vertex shaders when the instance data map extension (`instance_data_map`) is enabled. Calculates the UV scale and offset of a rendering instanced object. Pass the instance ID attribute appended with the `VS_INSTANCEID` semantics. Cannot be previewed in Unity. |
| `vec4 helCalcInstanceDiffuseColor(float InstanceID)` | Only usable inside vertex shaders when the instance data map extension (`instance_data_map`) is enabled. Calculates the diffuse color of a rendering instanced object. Pass the instance ID attribute appended with the `VS_INSTANCEID` semantics. Cannot be previewed in Unity. |
| `mat4 helCalcSkinMatrix(vec4 Index, vec4 Weight)` | Only usable inside vertex shaders when the skin mesh animation extension (`skinmesh_animation`) is enabled. Calculates a matrix representing the skin mesh animation's posture. Pass the `VS_BLENDINDEX` and `VS_BLENDWEIGHT` attribute values. |

## Functions Available for float, vecN, int, ivecN

Calculations for `vecN` and `ivecN` run between each internal individual component.

Ex.

```
vec4 pow(vec4 x, vec4 n) = vec4(pow(x.x, n.x), pow(x.y, n.y), pow(x.z, n.z), pow(x.w, n.w));
```

| Function Declaration | Description |
|:--|:--|
| `float pow(float x, float n)` | Calculates the value of x raised to the power of n |
| `vec2 pow(vec2 x, vec2 n)` | Calculates the value of x raised to the power of n |
| `vec3 pow(vec3 x, vec3 n)` | Calculates the value of x raised to the power of n |
| `vec4 pow(vec4 x, vec4 n)` | Calculates the value of x raised to the power of n |
| `float exp(float x)` | Calculates e raised to the power of x |
| `vec2 exp(vec2 x)` | Calculates e raised to the power of x |
| `vec3 exp(vec3 x)` | Calculates e raised to the power of x |
| `vec4 exp(vec4 x)` | Calculates e raised to the power of x |
| `float exp2(float x)` | Calculates 2 raised to the power of x |
| `vec2 exp2(vec2 x)` | Calculates 2 raised to the power of x |
| `vec3 exp2(vec3 x)` | Calculates 2 raised to the power of x |
| `vec4 exp2(vec4 x)` | Calculates 2 raised to the power of x |
| `float log(float x)` | Calculates the natural logarithm (base e) of x |
| `vec2 log(vec2 x)` | Calculates the natural logarithm (base e) of x |
| `vec3 log(vec3 x)` | Calculates the natural logarithm (base e) of x |
| `vec4 log(vec4 x)` | Calculates the natural logarithm (base e) of x |
| `float log2(float x)` | Calculates the base-2 logarithm of x |
| `vec2 log2(vec2 x)` | Calculates the base-2 logarithm of x |
| `vec3 log2(vec3 x)` | Calculates the base-2 logarithm of x |
| `vec4 log2(vec4 x)` | Calculates the base-2 logarithm of x |
| `float sqrt(float x)` | Calculates the square root of x |
| `vec2 sqrt(vec2 x)` | Calculates the square root of x |
| `vec3 sqrt(vec3 x)` | Calculates the square root of x |
| `vec4 sqrt(vec4 x)` | Calculates the square root of x |
| `float inversesqrt(float x)` | Calculates the inverse square root of x (1/√x) |
| `vec2 inversesqrt(vec2 x)` | Calculates the inverse square root of x (1/√x) |
| `vec3 inversesqrt(vec3 x)` | Calculates the inverse square root of x (1/√x) |
| `vec4 inversesqrt(vec4 x)` | Calculates the inverse square root of x (1/√x) |
| `float abs(float x)` | Returns the absolute value of x |
| `vec2 abs(vec2 x)` | Returns the absolute value of x |
| `vec3 abs(vec3 x)` | Returns the absolute value of x |
| `vec4 abs(vec4 x)` | Returns the absolute value of x |
| `int abs(int x)` | Returns the absolute value of x |
| `ivec2 abs(ivec2 x)` | Returns the absolute value of x |
| `ivec3 abs(ivec3 x)` | Returns the absolute value of x |
| `ivec4 abs(ivec4 x)` | Returns the absolute value of x |
| `float sign(float x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `vec2 sign(vec2 x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `vec3 sign(vec3 x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `vec4 sign(vec4 x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `int sign(int x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `ivec2 sign(ivec2 x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `ivec3 sign(ivec3 x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `ivec4 sign(ivec4 x)` | Returns the sign of x (Positive: 1, Negative: -1, 0: 0) |
| `float floor(float x)` | Returns the largest integer value less than or equal to x |
| `vec2 floor(vec2 x)` | Returns the largest integer value less than or equal to x |
| `vec3 floor(vec3 x)` | Returns the largest integer value less than or equal to x |
| `vec4 floor(vec4 x)` | Returns the largest integer value less than or equal to x |
| `float ceil(float x)` | Returns the smallest integer value greater than or equal to x |
| `vec2 ceil(vec2 x)` | Returns the smallest integer value greater than or equal to x |
| `vec3 ceil(vec3 x)` | Returns the smallest integer value greater than or equal to x |
| `vec4 ceil(vec4 x)` | Returns the smallest integer value greater than or equal to x |
| `float fract(float x)` | Returns the fractional part of x |
| `vec2 fract(vec2 x)` | Returns the fractional part of x |
| `vec3 fract(vec3 x)` | Returns the fractional part of x |
| `vec4 fract(vec4 x)` | Returns the fractional part of x |
| `float mod(float x, float y)` | Returns the remainder of x divided by y |
| `vec2 mod(vec2 x, vec2 y)` | Returns the remainder of x divided by y |
| `vec3 mod(vec3 x, vec3 y)` | Returns the remainder of x divided by y |
| `vec4 mod(vec4 x, vec4 y)` | Returns the remainder of x divided by y |
| `float min(float x, float y)` | Returns the smaller value between x and y |
| `vec2 min(vec2 x, vec2 y)` | Returns the smaller value between x and y |
| `vec3 min(vec3 x, vec3 y)` | Returns the smaller value between x and y |
| `vec4 min(vec4 x, vec4 y)` | Returns the smaller value between x and y |
| `int min(int x, int y)` | Returns the smaller value between x and y |
| `ivec2 min(ivec2 x, ivec2 y)` | Returns the smaller value between x and y |
| `ivec3 min(ivec3 x, ivec3 y)` | Returns the smaller value between x and y |
| `ivec4 min(ivec4 x, ivec4 y)` | Returns the smaller value between x and y |
| `float max(float x, float y)` | Returns the larger value between x and y |
| `vec2 max(vec2 x, vec2 y)` | Returns the larger value between x and y |
| `vec3 max(vec3 x, vec3 y)` | Returns the larger value between x and y |
| `vec4 max(vec4 x, vec4 y)` | Returns the larger value between x and y |
| `int max(int x, int y)` | Returns the larger value between x and y |
| `ivec2 max(ivec2 x, ivec2 y)` | Returns the larger value between x and y |
| `ivec3 max(ivec3 x, ivec3 y)` | Returns the larger value between x and y |
| `ivec4 max(ivec4 x, ivec4 y)` | Returns the larger value between x and y |
| `float clamp(float x, float minVal, float maxVal)` | Clamps x within the range [minVal, maxVal] |
| `vec2 clamp(vec2 x, vec2 minVal, vec2 maxVal)` | Clamps x within the range [minVal, maxVal] |
| `vec3 clamp(vec3 x, vec3 minVal, vec3 maxVal)` | Clamps x within the range [minVal, maxVal] |
| `vec4 clamp(vec4 x, vec4 minVal, vec4 maxVal)` | Clamps x within the range [minVal, maxVal] |
| `int clamp(int x, int minVal, int maxVal)` | Clamps x within the range [minVal, maxVal] |
| `ivec2 clamp(ivec2 x, ivec2 minVal, ivec2 maxVal)` | Clamps x within the range [minVal, maxVal] |
| `ivec3 clamp(ivec3 x, ivec3 minVal, ivec3 maxVal)` | Clamps x within the range [minVal, maxVal] |
| `ivec4 clamp(ivec4 x, ivec4 minVal, ivec4 maxVal)` | Clamps x within the range [minVal, maxVal] |

## Functions Available only for float, vecN

`vecN` calculations are run component-wise.

Ex.

```
vec4 sin(vec4 x) = vec4(sin(x.x), sin(x.y), sin(x.z), sin(x.w));
```

| Function Declaration | Description |
|:--|:--|
| `float radians(float degrees)` | Converts degrees to radians |
| `vec2 radians(vec2 degrees)` | Converts degrees to radians |
| `vec3 radians(vec3 degrees)` | Converts degrees to radians |
| `vec4 radians(vec4 degrees)` | Converts degrees to radians |
| `float degrees(float radians)` | Converts radians to degrees |
| `vec2 degrees(vec2 radians)` | Converts radians to degrees |
| `vec3 degrees(vec3 radians)` | Converts radians to degrees |
| `vec4 degrees(vec4 radians)` | Converts radians to degrees |
| `float sin(float x)` | Calculates the sine of x |
| `vec2 sin(vec2 x)` | Calculates the sine of x |
| `vec3 sin(vec3 x)` | Calculates the sine of x |
| `vec4 sin(vec4 x)` | Calculates the sine of x |
| `float cos(float x)` | Calculates the cosine of x |
| `vec2 cos(vec2 x)` | Calculates the cosine of x |
| `vec3 cos(vec3 x)` | Calculates the cosine of x |
| `vec4 cos(vec4 x)` | Calculates the cosine of x |
| `float tan(float x)` | Calculates the tangent of x |
| `vec2 tan(vec2 x)` | Calculates the tangent of x |
| `vec3 tan(vec3 x)` | Calculates the tangent of x |
| `vec4 tan(vec4 x)` | Calculates the tangent of x |
| `float asin(float x)` | Calculates the arcsine of x |
| `vec2 asin(vec2 x)` | Calculates the arcsine of x |
| `vec3 asin(vec3 x)` | Calculates the arcsine of x |
| `vec4 asin(vec4 x)` | Calculates the arcsine of x |
| `float acos(float x)` | Calculates the arccosine of x |
| `vec2 acos(vec2 x)` | Calculates the arccosine of x |
| `vec3 acos(vec3 x)` | Calculates the arccosine of x |
| `vec4 acos(vec4 x)` | Calculates the arccosine of x |
| `float atan(float y, float x)` | Calculates the arctangent of y/x |
| `vec2 atan(vec2 y, vec2 x)` | Calculates the arctangent of y/x |
| `vec3 atan(vec3 y, vec3 x)` | Calculates the arctangent of y/x |
| `vec4 atan(vec4 y, vec4 x)` | Calculates the arctangent of y/x |
| `float dFdx(float x)` | Returns the derivative of x in the x-direction |
| `vec2 dFdx(vec2 x)` | Returns the derivative of x in the x-direction |
| `vec3 dFdx(vec3 x)` | Returns the derivative of x in the x-direction |
| `vec4 dFdx(vec4 x)` | Returns the derivative of x in the x-direction |
| `float dFdy(float x)` | Returns the derivative of x in the y-direction |
| `vec2 dFdy(vec2 x)` | Returns the derivative of x in the y-direction |
| `vec3 dFdy(vec3 x)` | Returns the derivative of x in the y-direction |
| `vec4 dFdy(vec4 x)` | Returns the derivative of x in the y-direction |
| `float length(float x)` | Returns the length of vector x |
| `vec2 length(vec2 x)` | Returns the length of vector x |
| `vec3 length(vec3 x)` | Returns the length of vector x |
| `vec4 length(vec4 x)` | Returns the length of vector x |
| `float distance(float p0, float p1)` | Returns the distance between two points |
| `vec2 distance(vec2 p0, vec2 p1)` | Returns the distance between two points |
| `vec3 distance(vec3 p0, vec3 p1)` | Returns the distance between two points |
| `vec4 distance(vec4 p0, vec4 p1)` | Returns the distance between two points |
| `float dot(float x, float y)` | Returns the dot product of x and y |
| `vec2 dot(vec2 x, vec2 y)` | Returns the dot product of x and y |
| `vec3 dot(vec3 x, vec3 y)` | Returns the dot product of x and y |
| `vec4 dot(vec4 x, vec4 y)` | Returns the dot product of x and y |
| `vec3 cross(vec3 x, vec3 y)` | Returns the cross product of x and y |
| `float normalize(float x)` | Normalizes vector x |
| `vec2 normalize(vec2 x)` | Normalizes vector x |
| `vec3 normalize(vec3 x)` | Normalizes vector x |
| `vec4 normalize(vec4 x)` | Normalizes vector x |
| `float reflect(float I, float N)` | Returns the vector I reflected across normal N |
| `vec2 reflect(vec2 I, vec2 N)` | Returns the vector I reflected across normal N |
| `vec3 reflect(vec3 I, vec3 N)` | Returns the vector I reflected across normal N |
| `vec4 reflect(vec4 I, vec4 N)` | Returns the vector I reflected across normal N |
| `float refract(float I, float N, float eta)` | Returns the refracted vector of incident I over normal N with refraction index `eta` |
| `vec2 refract(vec2 I, vec2 N, float eta)` | Returns the refracted vector of incident I over normal N with refraction index `eta` |
| `vec3 refract(vec3 I, vec3 N, float eta)` | Returns the refracted vector of incident I over normal N with refraction index `eta` |
| `vec4 refract(vec4 I, vec4 N, float eta)` | Returns the refracted vector of incident I over normal N with refraction index `eta` |
| `float mix(float x, float y, float a)` | Linearly interpolates between x and y using a |
| `vec2 mix(vec2 x, vec2 y, vec2 a)` | Linearly interpolates between x and y using a |
| `vec3 mix(vec3 x, vec3 y, vec3 a)` | Linearly interpolates between x and y using a |
| `vec4 mix(vec4 x, vec4 y, vec4 a)` | Linearly interpolates between x and y using a |
| `float step(float edge, float x)` | Returns 0 if x is less than edge, returns 1 otherwise |
| `vec2 step(vec2 edge, vec2 x)` | Returns 0 if x is less than edge, returns 1 otherwise |
| `vec3 step(vec3 edge, vec3 x)` | Returns 0 if x is less than edge, returns 1 otherwise |
| `vec4 step(vec4 edge, vec4 x)` | Returns 0 if x is less than edge, returns 1 otherwise |
| `float smoothstep(float edge0, float edge1, float x)` | Smoothly interpolates from 0 to 1 based on the value of x |
| `vec2 smoothstep(vec2 edge0, vec2 edge1, vec2 x)` | Smoothly interpolates from 0 to 1 based on the value of x |
| `vec3 smoothstep(vec3 edge0, vec3 edge1, vec3 x)` | Smoothly interpolates from 0 to 1 based on the value of x |
| `vec4 smoothstep(vec4 edge0, vec4 edge1, vec4 x)` | Smoothly interpolates from 0 to 1 based on the value of x |
| `float float(int x)` | Casts int type to float type |
| `int int(float x)` | Casts float type to int type |