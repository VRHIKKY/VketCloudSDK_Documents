# Textures

In HCSL, you can use textures within your shaders.

## Supported Texture Types
- Currently, 2D textures (`sampler2D`) and cube maps (`samplerCube`) are supported.
- 3D textures are not supported.

## About the Number of Texture Slots
- HCSL itself has no explicit limitations on the number of textures.
- However, the actual number of texture slots available relies on the device and browser.
- In common environments, using up to about 8 textures is recommended.
- Depending on the device, surpassing 8 textures may result in abnormal operation, so it is recommended to keep it within 8.

## Sample
```
uniform fragment {
    sampler2D _MainTex;
    sampler2D _SubTex;
    samplerCube _TestCube;
}

shader fragment {
    void main() {
        vec4 col1 = helTexture(_MainTex, uv);
        vec4 col2 = helTexture(_SubTex, uv);

        // Retrieve reflection probe specifying the LOD
        float Roughness = 0.5; // Roughly setting a Roughness value
        float mipIndex = Roughness * HEL_REFLECTIONCUBE_MIPCOUNT;
        // HEL_REFLECTION_CUBE does not require uniform declaration
        vec4 reflectColWithLOD = helTextureCubeLOD(HEL_REFLECTION_CUBE, refVec, mipIndex);

        // Retrieve lightmap
        vec2 lightMapUV = uv * HEL_LIGHTMAP_ST.xy + HEL_LIGHTMAP_ST.zw;
        vec3 LightMapCol = helTexture(HEL_LIGHTMAP, lightMapUV).rgb; 

        // Cube map sampling
        vec3 eyeVec = normalize(WorldPos - HEL_CAMERA_POS.xyz);
        vec3 refVec = reflect(eyeVec, normalize(WorldNormal));
        vec4 reflectCol = helTextureCube(_TestCube, refVec);
    }
}
```

## Special Usage of Textures
### Video Textures
By satisfying specific conditions, video textures can be used in HCSL.

- Set the texture name to `_MainTex` and the drawing pass to `Geometry_Opaque` (opaque rendering).
- This will automatically replace `_MainTex` in the first drawing pass with a video texture.
- Please refer to the separately provided documentations on video playback and control mechanisms.

* Note: Alpha blending for video textures is planned to be supported in the future.

#### Sample Code
```
pass Geometry_Opaque {
    uniform fragment {
        sampler2D _MainTex;
    }
    shader fragment {
        void main() {
            vec4 col = helTexture(_MainTex, uv);
            outColor = col;
        }
    }
}
```