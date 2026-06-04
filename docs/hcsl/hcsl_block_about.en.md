# Basic Structure of HCSL

**The coordinate system, vectors, and matrices in HCSL are all designed to be "right-handed, column-major".**
HCSL has the following structure and consists of 8 types of blocks: `hcsl`, `pass`, `renderparam`, `attribute`, `input`, `output`, `uniform`, and `shader`.

The `version` can basically be left as 1, but it will be updated if compatibility breaks occur.
Multiple `pass` blocks can be written within the `hcsl` block, allowing for multi-pass rendering.

Details of each block are explained in the following sections.

```
#version 1
hcsl "ShaderName"
{
    pass RenderPassName
    {
        renderparam
        {
            // Rendering parameters
        }

        variant
        {
            // Shader variants
        }

        attribute
        {
            // Vertex attributes
        }

        output vertex
        {
            // Vertex shader output
        }

        uniform vertex
        {
            // Vertex shader Uniform Value
        }

        shader vertex
        {
            // Vertex shader
        }

        input fragment
        {
            // Fragment shader input
        }

        output fragment
        {
            // Fragment shader output
        }

        uniform fragment
        {
            // Fragment shader Uniform Value
        }

        shader fragment
        {
            // Fragment shader
        }
    }

    pass RenderPassName
    {
        // Multiple rendering passes can be written to perform multi-pass rendering
    }
}
```

Implementation Example:
```
#version 1

hcsl "WavePlane"
{
    pass Geometry_Opaque
    {
      renderparam
      {
        bool hel_z_write = true;
        int  hel_cull_mode = HEL_CULL_NONE;
      }

      // Vertex attributes
      attribute
      {
        vec3 _Position : VS_POSITION;
        vec3 _Normal : VS_NORMAL;
        vec2 _TexCoord0 : VS_UV;
      }

      // Vertex shader output
      output vertex
      {
        vec4 outPos : VS_OUT_POSITION;
        vec3 WorldNormal;
        vec3 WorldPos;
        vec2 uv;
      }

      // Vertex shader Uniform Value
      uniform vertex
      {
        float _Seed = 1.0;
        float _Size = 0.1;
      }
  
      // Vertex shader
      shader vertex
      {
        float g_Offset;
      
        float wave(vec2 st)
        {
            return sin(st.x * 50.0 + HEL_TIME) * 1.5;
        }
  
        void main()
        {
          g_Offset = 10.0;
        
          vec4 pos = vec4(_Position, 1.0);
          pos.y += wave(_TexCoord0 * _Size + vec2(_Seed + g_Offset));
      
          outPos = HEL_MATRIX_P * HEL_MATRIX_V * HEL_MATRIX_W * pos;
          WorldNormal = (HEL_MATRIX_W * vec4(_Normal, 0.0)).xyz;
          uv = _TexCoord0;
        }
      }

      // Fragment shader input
      input fragment
      {
        vec3 WorldNormal;
        vec2 uv;
      }
      
      // Fragment shader output
      output fragment
      {
        vec4 outColor : FS_COLOR;
      }

      // Fragment shader Uniform Value
      uniform fragment
      {
        vec4 _MainColor = vec4(1.0);
        sampler2D _MainTex;
        vec4 _MainTex_ST;
      }
  
      // Fragment shader
      shader fragment
      {
        vec3 hsv2rgb( vec3 c )
        {
          vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );
          return c.z * mix( vec3(1.0), rgb, c.y);
        }

        void main()
        {
          vec4 col = vec4(1.0);

          vec2 st = uv;
          st *= _MainTex_ST.xy;
          st += _MainTex_ST.zw;
      
          col.rgb *= helTexture(_MainTex, st).rgb;
          col.rgb *= _MainColor.rgb;
          col.rgb *= hsv2rgb(vec3(mod(HEL_TIME, 1.0), 1.0, 1.0));
      
          outColor = col;
        }
      }
    }

    pass Geometry_AlphaBlending
    {
      renderparam
      {
        bool hel_z_write = true;
        int  hel_cull_mode = HEL_CULL_NONE;
      }

      // Vertex attributes
      attribute
      {
        vec3 _Position : VS_POSITION;
        vec3 _Normal : VS_NORMAL;
        vec2 _TexCoord0 : VS_UV;
      }

      // Vertex shader output
      output vertex
      {
        vec4 outPos : VS_OUT_POSITION;
        vec3 WorldNormal;
        vec3 WorldPos;
        vec2 uv;
      }

      // Vertex shader Uniform Value
      uniform vertex
      {
        float _Seed = 1.0;
      }
  
      // Vertex shader
      shader vertex
      {
        float g_Offset;
      
        float wave(vec2 st)
        {
            return cos(st.x * 50.0 + HEL_TIME) * 1.5;
        }
  
        void main()
        {
          g_Offset = 10.0;
        
          vec4 pos = vec4(_Position, 1.0);
          pos.y += wave(_TexCoord0 + vec2(_Seed + g_Offset));
      
          outPos = HEL_MATRIX_P * HEL_MATRIX_V * HEL_MATRIX_W * pos;
          WorldNormal = (HEL_MATRIX_W * vec4(_Normal, 0.0)).xyz;
          uv = _TexCoord0;
        }
      }

      // Fragment shader input
      input fragment
      {
        vec3 WorldNormal;
        vec2 uv;
      }
      
      // Fragment shader output
      output fragment
      {
        vec4 outColor : FS_COLOR;
      }

      // Fragment shader Uniform Value
      uniform fragment
      {
        vec4 _OutlineColor = vec4(1.0);
      }
  
      // Fragment shader
      shader fragment
      {
        void main()
        {
          vec4 col = _OutlineColor;
      
          outColor = col;
        }
      }
    }
}
```