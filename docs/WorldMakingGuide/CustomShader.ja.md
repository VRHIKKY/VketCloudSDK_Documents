# HCSL(Heliodor Custom Shader Language)

## 概要
Heliodorがカスタムシェーダーに対応しました。  
HCSL(Heliodor Custom Shader Language)というHeliodor独自のシェーダー言語です。

## 実装

### Shaderコンパイル

1 シーンにPlaneを追加します。

  ![Create Plane](img/customshader01.png)

2 プロジェクトビューを右クリックし、「Create → HCSL File」でHCSLを作成し名前を「sample」とつけます

   ![Create HCSL](img/customshader02.png)

3 生成されたsample HCSLシェーダーをダブルクリックしエディタを開きます。そして以下のサンプルシェーダーをすべてコピーアンドペーストで貼り付けます

```
#version 1

hcsl "sample"
{
    pass Geometry_Opaque
    {

      renderparam
      {
        bool hel_z_write = true;
        int  hel_cull_mode = HEL_CULL_BACK;
      }

      attribute
      {
        vec3 _Position : VS_POSITION;
        vec3 _Normal : VS_NORMAL;
        vec2 _TexCoord0 : VS_UV;
      }

      output vertex
      {
        vec4 outPos : VS_OUT_POSITION;
        vec3 WorldNormal;
        vec3 WorldPos;
        vec2 uv;
      }

      uniform vertex
      {
        float _Seed = 1.0;
        float _Size = 0.1;
      }

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

      input fragment
      {
        vec3 WorldNormal;
        vec2 uv;
      }

      output fragment
      {
        vec4 outColor : FS_COLOR;
      }

      uniform fragment
      {
        vec4 _MainColor = vec4(1.0);
        sampler2D _MainTex;
        vec4 _MainTex_ST;
      }

      shader fragment
      {
        void main()
        {
          vec4 col = vec4(1.0, 0.0, 0.0, 1.0);
          outColor = col;
        }
      }
    }
}
```

4 Planeに VKC Shaderコンポーネントをアタッチします

   ![Attach VKC Shader](img/customshader03.png)

5 VKC ShaderコンポーネントのHCSL Coreフィールドに先ほど作成したsample.hcslをドロップします

   ![Add HCSL To VKC Shader](img/customshader04.png)

6 VKC Shaderコンポーネントの右上の縦三点リーダーを押してメニュー開き、その一番下にあるCompileを押します。

   ![Add HCSL To VKC Shader](img/customshader05.png)

7 すると波打つ赤いPlaneのエフェクトが完成します。

   ![Check in Unity](img/customshader06.png)


8 後はいつも通りビルドアンドランによってVketCloudにShaderが反映されていることを確認します。

   ![Check in VKC](img/customshader07.png)