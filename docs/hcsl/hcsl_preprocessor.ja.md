# プリプロセッサ仕様

HCSLは、以下のプリプロセッサディレクティブに対応しています。

## #version

シェーダーのバージョンを指定します。ファイルの先頭に記述してください。  
現在サポートされているバージョンは「1」のみです。

```
#version 1
```

## #define

マクロ定義を行います。値付きマクロや関数風マクロも定義できます。  
`shader`ブロック内でのみ記述可能です。

```
shader vertex
{
    #define PI 3.1415
    #define rot(a) mat2(cos(a), -sin(a), sin(a), cos(a))

    // シェーダーバリアントを直接記述(バリアントブロック内で記述したほうがより汎用的です)
    #define _RED
   
    void main()
    {
        vec4 pos = vec4(_Position, 1.0);

        float angle = PI * 0.5;
        pos.xy *= rot(angle);

        #ifdef _RED
        col = vec4(1.0, 0.0, 0.0, 1.0);
        #else
        col = vec4(1.0, 1.0, 1.0, 1.0);
        #endif

        outPos = HEL_MATRIX_P * HEL_MATRIX_V * HEL_MATRIX_W * pos;
    }
}
```

組み込みdefineプリプロセッサ
|プリプロセッサ名|説明|使用例|
|HCSL_PLATFORM_HELIODOR|HCSLがHeliodor(VketCloud)で動いていることを示すdefineプリプロセッサ。|#ifdef HCSL_PLATFORM_HELIODOR
float plat_test = 12.3;
#endif|
|HCSL_PLATFORM_UNITY|HCSLがUnityで動いていることを示すdefineプリプロセッサ。|#ifdef HCSL_PLATFORM_UNITY
float plat_test = 45.6;
#endif|

## #pragma

コンパイル時の挙動を変更するためのプリプロセッサです。

```
pass Geometry_Opaque
{
    #pragma hcsl_enabled_extension normal_shadowmap // シャドウマップの拡張を有効にする

    attribute
    ・・・
}
```

### pragmaディレクティブ一覧

| プリプロセッサ | 説明 |
|:--|:--|
| #pragma hcsl_enabled_extension normal_shadowmap | 標準のシャドウマップに必要なコードを出力します。 |
| #pragma hcsl_enabled_extension instance_data_map | インスタンスデータマップに必要なコードを出力します。(インスタンス描画用) |
| #pragma hcsl_enabled_extension skinmesh_animation | スキンメッシュアニメーションに必要なコードを出力します。 |

## #include

HCSLLibをインクルードするためのプリプロセッサディレクティブです。

`shader`ブロック内でのみ使用できます。

HCSLLibの詳細については、[HCSLLib](./hcsl_about_hcsllib.md) を参照してください。

```
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
```

---

## バリアントブロック対応プリプロセッサ

バリアントブロック（`variant`）の導入により、条件付きコンパイルのための以下のプリプロセッサディレクティブに対応しました。

- `#ifdef`
- `#ifndef`
- `#if`
- `#elif`
- `#else`
- `#endif`

これらは、バリアントブロックや`#define`で定義されたマクロを条件として、シェーダーコードの一部を有効・無効にできます。

> **variantブロックの詳細な使い方は[こちら](./hcsl_block_variant.md)を参照してください。**

### 使い方例

```
variant
{
    int _RED = 1;
    int _GREEN = 1;
    int _BLUE = 0;
    int _ALPHA = 1;
}

shader fragment
{
    void main()
    {
        vec4 col = vec4(1.0);

        // 1つのマクロが定義されている場合
        #ifdef _RED
        col = vec4(1.0, 0.0, 0.0, 1.0);
        #endif

        // マクロが定義されていない場合
        #ifndef _BLUE
        col *= 0.5;
        #endif

        // 複雑な条件式
        #if defined(_GREEN) && defined(_ALPHA)
        col.a = 0.8;
        #elif defined(_GREEN)
        col.a = 0.5;
        #else
        col.a = 1.0;
        #endif

        // 複数条件の組み合わせ
        #if defined(_RED) || defined(_BLUE)
        col.rgb += 0.2;
        #endif

        outColor = col;
    }
}
```

### 条件式の記述

- `#if` や `#elif` では、`defined(MACRO)` を使ってマクロの定義有無を判定できます。
- 複数の条件を `||`（論理和）、`&&`（論理積）、`!`（否定）などで組み合わせることができます。
- 括弧によるグルーピングも可能です。

#### 条件式の例

```
#if defined(_RED)
// _REDが定義されている場合

#elif defined(_GREEN) && defined(_ALPHA)
// _GREENと_ALPAが両方定義されている場合

#elif defined(_BLUE) || defined(_ALPHA)
// _BLUEまたは_ALPHAが定義されている場合

#elif !(defined(_RED) || defined(_GREEN))
// _REDも_GREENも定義されていない場合

#else
// どれにも当てはまらない場合
#endif
```

### 注意

- 条件式はC言語のプリプロセッサに近い構文で記述できます。
- バリアントブロックで定義したマクロも`#if`や`#ifdef`で利用可能です。