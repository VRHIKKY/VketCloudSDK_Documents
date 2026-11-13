# Built-in Variables

**The coordinate system, vectors, and matrices in HCSL are all stored and calculated as "right-handed, column-major".**

The following built-in variables are available in HCSL:

| Name | Description | Type |
|:--|:--|:--|
| HEL_MATRIX_W | World matrix | mat4 |
| HEL_MATRIX_V | View matrix | mat4 |
| HEL_MATRIX_P | Projection matrix | mat4 |
| HEL_MATRIX_INV_W | Inverse world matrix | mat4 |
| HEL_MATRIX_INV_V | Inverse view matrix | mat4 |
| HEL_MATRIX_INV_P | Inverse projection matrix | mat4 |
| HEL_CAMERA_POS | Camera coordinates | vec4 |
| HEL_LIGHT_COLOR | Directional light color | vec4 |
| HEL_LIGHT_DIR | Directional light direction | vec4 |
| HEL_TIME | Scene elapsed time in seconds | float |
| HEL_REFLECTION_CUBE | Reflection probe cube map | samplerCube |
| HEL_REFLECTIONCUBE_MIPCOUNT | Number of mipmaps the reflection probe cube map has | float |
| HEL_LIGHTMAP | Lightmap | sampler2D |
| HEL_LIGHTMAP_ST | Lightmap scale offset | vec4 |
| HEL_IBL_DIFFUSE_MAP | IBL diffuse map | samplerCube |
| HEL_IBL_SPECULAR_MAP | IBL specular map | samplerCube |
| HEL_IBL_SPECULAR_MIPCOUNT | Number of mipmaps the IBL specular map has | float |