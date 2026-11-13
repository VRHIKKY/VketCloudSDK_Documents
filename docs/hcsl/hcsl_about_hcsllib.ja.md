# HCSLLib

HCSLLibとは、HCSLでインクルードできるライブラリのことです。ライブラリを利用することで、便利な関数や何度も使う関数をライブラリファイルにまとめて、簡単に再利用できるようになります。

基本的な構文はHCSLと同じで、以下の要素で構成されます。`hcsllib`ブロックの中では、HCSLの`shader`ブロックと同様の構文で関数を実装できます。

- バージョンプリプロセッサ
- hcsllibブロック(ここがhcslからhcsllibに代わっています)

```
#version 1

hcsllib "ライブラリ名"
{
    // shaderブロックと同様に関数を実装する
}
```

ファイルの拡張子はHCSLと同じく`.hcsl`です。HCSLでライブラリをインクルードする際は、HCSLLibで指定したライブラリ名を指定します。

## 組み込みHCSLLib
エンジンが標準で用意しているHCSLLibです。ユーザー定義のHCSLLibと同様にインクルードして利用できます。

### 組み込みHCSLLibと使用可能関数リスト
|ライブラリ名|関数|説明|
|:--|:--|:--|
|"HCSLCore/Texture"|vec2 helCalcUVTransform(vec2 SrcUV, vec4 TexST)|テクスチャのスケール・オフセットを考慮したUV座標を計算します。|
|"HCSLCore/Lighting"|vec3 helComputeDirectLight(vec3 worldNormal, vec3 worldPos, vec3 cameraPos, vec3 surfaceColor, float roughness, float metallic, vec3 lightColor, vec3 lightDir)|PBRにおける直接光のライティングを計算します。|
|"HCSLCore/Lighting"|vec3 helComputeIndirectLight(vec3 worldNormal, vec3 worldPos, vec3 cameraPos, vec3 surfaceColor, float roughness, float metallic, vec3 lightColor, vec3 lightDir)|PBRにおける間接光(環境マップ)のライティングを計算します。|
|"HCSLCore/Lighting"|vec3 helComputeIBLLight(vec3 worldNormal, vec3 worldPos, vec3 cameraPos, vec3 surfaceColor, float roughness, float metallic)|IBLによるライティングを計算します。Unityではプレビューできません。|

## 実装例

### HCSLLibの作成例
```
// HCSLLibTest.hcsl

#version 1

// ライブラリの名前
hcsllib "TestLib"
{
	float helRand(vec2 st)
	{
		return fract(sin( dot(st, vec2(12.9898,78.233)) ) * 43758.5453);
	}
}
```

### HCSLLibをHCSLで使う例
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
        // helRand関数を使用するためのインクルード
        // 別ファイルのTestLibにhelRandが定義されている
        #include "TestLib"

        // helCalcUVTransform関数を使用するためのインクルード
        // HCSLCore/Textureは組み込みライブラリ
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