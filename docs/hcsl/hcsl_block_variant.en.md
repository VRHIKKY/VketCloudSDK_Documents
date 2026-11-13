# variant block

## Overview

The `variant` block is a syntax for defining shader variants (conditional branching) in HCSL.
The values defined within the `variant` block can be used as preprocessor macros in the shader code.
This allows the same shader code to be switched, built, and executed under different conditions.

In addition, the values defined in the `variant` block are displayed as parameters on the Material Inspector in Unity.
By toggling these values prior to HEO export, you can retrieve distinct, individual compilation results per different variant.

> **For conditional compilation preprocessor directives, please also refer to [here](./hcsl_preprocessor.md).**

## Syntax

```
variant
{
    int _RED = 1;
}
```

- When a variable is defined inside the `variant` block, its name becomes available as a preprocessor macro (e.g., `_RED`).
- Values are specified using integer literals.

## Usage Example

Macros defined in the `variant` block can be referenced using preprocessor directives like `#ifdef` inside the `shader` block.

```
variant
{
    int _RED = 1;
}

shader fragment
{
    void main()
    {
        vec4 col = vec4(1.0);

        #ifdef _RED
        col = vec4(1.0, 0.0, 0.0, 1.0);
        #else
        col = vec4(1.0, 1.0, 1.0, 1.0);
        #endif

        outColor = col;
    }
}
```

In this example, the color will be red if `_RED` is defined, and white otherwise.

## Primary Use Cases

- Toggling features ON/OFF
- Automatically generating multiple variants
- Managing conditional code

## Precautions

- Defining too many variants makes building and management complex, so define only the ones you need.
