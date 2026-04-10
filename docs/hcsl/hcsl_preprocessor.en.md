# Preprocessor Specifications

HCSL supports the following preprocessor directives.

## #version

Specifies the shader version. Write this at the top of the file.
Currently, only version "1" is supported.

```
#version 1
```

## #define

Used for macro definitions. You can also define macros with values or function-like macros.  
It can only be written inside a `shader` block.

```
shader vertex
{
    #define PI 3.1415
    #define rot(a) mat2(cos(a), -sin(a), sin(a), cos(a))

    // Directly write a shader variant (Writing this inside the variant block is more versatile)
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

Built-in define Preprocessors
| Preprocessor Name | Description | Example Usage |
|:--|:--|:--|
| HCSL_PLATFORM_HELIODOR | Define preprocessor indicating that HCSL is running on Heliodor (VketCloud). | `#ifdef HCSL_PLATFORM_HELIODOR`<br>`float plat_test = 12.3;`<br>`#endif` |
| HCSL_PLATFORM_UNITY | Define preprocessor indicating that HCSL is running on Unity. | `#ifdef HCSL_PLATFORM_UNITY`<br>`float plat_test = 45.6;`<br>`#endif` |

## #pragma

Preprocessor for changing behavior during compilation.

```
pass Geometry_Opaque
{
    #pragma hcsl_enabled_extension normal_shadowmap // Enable shadow map extension

    attribute
    //...
}
```

### List of pragma Directives

| Preprocessor | Description |
|:--|:--|
| `#pragma hcsl_enabled_extension normal_shadowmap` | Outputs the code necessary for standard shadow mapping. |
| `#pragma hcsl_enabled_extension instance_data_map` | Outputs the code necessary for instance data mapping (for instanced rendering). |
| `#pragma hcsl_enabled_extension skinmesh_animation` | Outputs the code necessary for skin mesh animation. |

## #include

Preprocessor directive used to include HCSLLib.

It can only be used inside the `shader` block.

For more details on HCSLLib, please refer to [HCSLLib](./hcsl_about_hcsllib.md).

```
shader fragment
{
    // Include to use the helRand function
    // helRand is defined in another file named TestLib
    #include "TestLib"

    // Include to use the helCalcUVTransform function
    // HCSLCore/Texture is a built-in library
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

## Preprocessors Supported by Variant Block

With the introduction of the variant block (`variant`), the following preprocessor directives are now supported for conditional compilation.

- `#ifdef`
- `#ifndef`
- `#if`
- `#elif`
- `#else`
- `#endif`

These can be used to enable or disable parts of the shader code based on conditions defined by the variant block or macros defined with `#define`.

> **For detailed usage of the variant block, please refer to [here](./hcsl_block_variant.md).**

### Example Usage

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

        // When a single macro is defined
        #ifdef _RED
        col = vec4(1.0, 0.0, 0.0, 1.0);
        #endif

        // When a macro is not defined
        #ifndef _BLUE
        col *= 0.5;
        #endif

        // Complex conditional statements
        #if defined(_GREEN) && defined(_ALPHA)
        col.a = 0.8;
        #elif defined(_GREEN)
        col.a = 0.5;
        #else
        col.a = 1.0;
        #endif

        // Combination of multiple conditions
        #if defined(_RED) || defined(_BLUE)
        col.rgb += 0.2;
        #endif

        outColor = col;
    }
}
```

### Writing Conditional Expressions

- In `#if` and `#elif`, you can use `defined(MACRO)` to determine whether a macro is defined.
- You can combine multiple conditions using `||` (logical OR), `&&` (logical AND), `!` (negation), etc.
- Grouping with parentheses is also possible.

#### Examples of Conditional Expressions

```
#if defined(_RED)
// When _RED is defined

#elif defined(_GREEN) && defined(_ALPHA)
// When both _GREEN and _ALPHA are defined

#elif defined(_BLUE) || defined(_ALPHA)
// When either _BLUE or _ALPHA is defined

#elif !(defined(_RED) || defined(_GREEN))
// When neither _RED nor _GREEN are defined

#else
// When none of the above are matched
#endif
```

### Notes

- Conditional statements can be written with a syntax akin to the C language preprocessor.
- Macros defined in the variant block can also be used in `#if` and `#ifdef`.