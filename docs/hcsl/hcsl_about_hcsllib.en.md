# HCSLLib

HCSLLib is a library that can be included in HCSL. By using a library, convenient functions and frequently used functions are grouped into a library file so that they can be easily reused.

The basic syntax is the same as HCSL, consisting of the following elements. Inside the `hcsllib` block, functions can be implemented using the same syntax as the `shader` block in HCSL.

- Version Preprocessor
- `hcsllib` block (this takes the place of `hcsl` in an hcsllib file)

```
#version 1

hcsllib "LibraryName"
{
    // Implement functions the same way as in the shader block
}
```

The file extension is `.hcsl` just like regular HCSL files. When including a library in HCSL, specify the library name assigned inside HCSLLib.

## Built-in HCSLLib
These are standard HCSLLibs provided by the engine. You can include and use them the same way as user-defined HCSLLibs.

### Built-in HCSLLib and Useable Function List
| Library Name | Function | Description |
|:--|:--|:--|
| "HCSLCore/Texture" | `vec2 helCalcUVTransform(vec2 SrcUV, vec4 TexST)` | Calculates UV coordinates incorporating the scale and offset of the texture. |
| "HCSLCore/Lighting" | `vec3 helComputeDirectLight(vec3 worldNormal, vec3 worldPos, vec3 cameraPos, vec3 surfaceColor, float roughness, float metallic, vec3 lightColor, vec3 lightDir)` | Calculates direct light lighting in PBR. |
| "HCSLCore/Lighting" | `vec3 helComputeIndirectLight(vec3 worldNormal, vec3 worldPos, vec3 cameraPos, vec3 surfaceColor, float roughness, float metallic, vec3 lightColor, vec3 lightDir)` | Calculates indirect light (environment map) lighting in PBR. |
| "HCSLCore/Lighting" | `vec3 helComputeIBLLight(vec3 worldNormal, vec3 worldPos, vec3 cameraPos, vec3 surfaceColor, float roughness, float metallic)` | Calculates lighting via IBL. Cannot be previewed in Unity. |

## Implementation Examples

### HCSLLib Creation Example
```
// HCSLLibTest.hcsl

#version 1

// Library Name
hcsllib "TestLib"
{
	float helRand(vec2 st)
	{
		return fract(sin( dot(st, vec2(12.9898,78.233)) ) * 43758.5453);
	}
}
```

### Using HCSLLib in HCSL Example
```
pass Geometry_Opaque
{
    attribute
    {
        vec3 _Position : VS_POSITION;
    }

    output vertex
    {
        vec4 outPos : VS_OUT_POSITION;
    }

    shader vertex
    {
        void main()
        {
            outPos = HEL_MATRIX_P * HEL_MATRIX_V * HEL_MATRIX_W * vec4(_Position, 1.0);
        }
    }

    output fragment
    {
        vec4 outColor : FS_COLOR;
    }

    uniform fragment
    {
        sampler2D _MainTex;
        vec4 _MainTex_ST;
    }
    
    shader fragment
    {
        // Include to use helRand function
        // helRand is defined in another file named TestLib
        #include "TestLib"

        // Include to use helCalcUVTransform function
        // HCSLCore/Texture is a built-in library
        #include "HCSLCore/Texture"

        void main()
        {
            vec2 st = helCalcUVTransform(uv, _MainTex_ST);
            vec4 col = helTexture(_MainTex, st) * helRand(vec2(0.5));

            outColor = col;
        }
    }
}
```