# HCSLの基本構造

**HCSLの座標系・ベクトル・行列はすべて「右手系・列優先（column-major）」で設計されています。**
HCSLは以下のような構造をしており、hcsl・pass・renderparam・attribute・input・output・uniform・shaderの8種類のブロックから構成されます。

versionは基本的に1で構いませんが、互換性が切れるようなことがあった時に更新されます。
passブロックはhcslブロックの中に複数個書くことが可能で、重ね塗りのようなことができます。

各ブロックの詳細は後ろの項目で説明します。

```
#version 1
hcsl "シェーダー名"
{
    pass 描画パス名
    {
        renderparam
        {
            // 描画パラメーター
        }

        variant
        {
            // シェーダーバリアント
        }

        attribute
        {
            // 頂点アトリビュート
        }

        output vertex
        {
            // 頂点シェーダーアウトプット
        }

        uniform vertex
        {
            // 頂点シェーダー Uniform Value
        }

        shader vertex
        {
            // 頂点シェーダー
        }

        input fragment
        {
            // フラグメントシェーダーインプット
        }

        output fragment
        {
            // フラグメントシェーダーアウトプット
        }

        uniform fragment
        {
            // フラグメントシェーダーUniformValue
        }

        shader fragment
        {
            // フラグメントシェーダー
        }
    }

    pass 描画パス名
    {
        // 描画パスは複数個書いて重ね塗りを行うこともできる
    }
}
```

実装例
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

      // 頂点アトリビュート
      attribute
      {
        vec3 _Position : VS_POSITION;
        vec3 _Normal : VS_NORMAL;
        vec2 _TexCoord0 : VS_UV;
      }

      // 頂点シェーダーアウトプット
      output vertex
      {
        vec4 outPos : VS_OUT_POSITION;
        vec3 WorldNormal;
        vec3 WorldPos;
        vec2 uv;
      }

      // 頂点シェーダーUniformValue
      uniform vertex
      {
        float _Seed = 1.0;
        float _Size = 0.1;
      }
  
      // 頂点シェーダー
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

      // フラグメントシェーダーインプット
      input fragment
      {
        vec3 WorldNormal;
        vec2 uv;
      }
      
      // フラグメントシェーダーアウトプット
      output fragment
      {
        vec4 outColor : FS_COLOR;
      }

      // フラグメントシェーダーUniformValue
      uniform fragment
      {
        vec4 _MainColor = vec4(1.0);
        sampler2D _MainTex;
        vec4 _MainTex_ST;
      }
  
      // フラグメントシェーダー
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

      // 頂点アトリビュート
      attribute
      {
        vec3 _Position : VS_POSITION;
        vec3 _Normal : VS_NORMAL;
        vec2 _TexCoord0 : VS_UV;
      }

      // 頂点シェーダーアウトプット
      output vertex
      {
        vec4 outPos : VS_OUT_POSITION;
        vec3 WorldNormal;
        vec3 WorldPos;
        vec2 uv;
      }

      // 頂点シェーダーUniformValue
      uniform vertex
      {
        float _Seed = 1.0;
      }
  
      // 頂点シェーダー
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

      // フラグメントシェーダーインプット
      input fragment
      {
        vec3 WorldNormal;
        vec2 uv;
      }
      
      // フラグメントシェーダーアウトプット
      output fragment
      {
        vec4 outColor : FS_COLOR;
      }

      // フラグメントシェーダーUniformValue
      uniform fragment
      {
        vec4 _OutlineColor = vec4(1.0);
      }
  
      // フラグメントシェーダー
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