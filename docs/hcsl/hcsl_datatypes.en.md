# Built-in Types

## Types of Built-in Types
The following basic types are available in HCSL:

| Type | Description |
|:--|:--|
| void | |
| int | Integer value |
| ivec2 | 2-dimensional vector of integers |
| ivec3 | 3-dimensional vector of integers |
| ivec4 | 4-dimensional vector of integers |
| float | Floating point value |
| vec2 | 2-dimensional vector of floating point values |
| vec3 | 3-dimensional vector of floating point values |
| vec4 | 4-dimensional vector of floating point values |
| mat2 | 2x2 matrix of floating point values |
| mat3 | 3x3 matrix of floating point values |
| mat4 | 4x4 matrix of floating point values |
| bool | Boolean value |
| sampler2D | 2D Texture |
| samplerCube | Cube map |

## Addition, Subtraction, Multiplication, Division

In GLSL (HCSL), the operators for addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`) can be used on basic types (`int`, `float`), vector types, and matrix types.

### Basic Type Operations
```
float a = 5.0;
float b = 2.0;
float sum = a + b;    // Addition (7.0)
float diff = a - b;   // Subtraction (3.0)
float prod = a * b;   // Multiplication (10.0)
float div = a / b;    // Division (2.5)
```

### Vector Type Operations
Operations between vectors are calculated for each component individually.
```
vec3 v1 = vec3(1.0, 2.0, 3.0);
vec3 v2 = vec3(4.0, 5.0, 6.0);
vec3 sum = v1 + v2;   // (5.0, 7.0, 9.0)
vec3 diff = v1 - v2;  // (-3.0, -3.0, -3.0)
vec3 prod = v1 * v2;  // (4.0, 10.0, 18.0)
vec3 div = v1 / v2;   // (0.25, 0.4, 0.5)
```
Operations with scalar values are also possible.
```
vec3 scaled = v1 * 2.0; // (2.0, 4.0, 6.0)
```


### Matrix Type Operations
Addition and subtraction between matrices operate element by element, while multiplication behaves as standard linear algebra matrix multiplication.
```
mat3 m1, m2;
mat3 sum = m1 + m2;
mat3 diff = m1 - m2;
mat3 prod = m1 * m2; // Matrix multiplication
vec3 v = vec3(1.0, 2.0, 3.0);
vec3 result = m1 * v; // Multiplication of matrix and vector
```

### Precautions
- Depending on the type, operations between mismatched types are allowed (e.g. multiplying `vec4` and `float`). However, operations between certain mismatched types like `int` and `float` will result in an error. Explicit type conversion is required outside of the allowable combinations.
- When dividing, division by 0 results in undefined behavior.

## Matrix Types

HCSL supports matrix types such as `mat2`, `mat3`, and `mat4`. Matrices are mainly used for coordinate transformations and linear algebra operations.

### Matrix Declaration and Initialization
```
mat3 m; // 3x3 matrix
mat2 custom = mat2(1.0, 2.0, 3.0, 4.0); // Initialize by specifying elements
```

### Matrix Element Access and Modification
Matrix elements are accessed in the format `matrix[column][row]` (0-indexed).
```
m[0][1] = 5.0; // Set value for column 1, row 2
m[1] = vec3(1.0, 2.0, 3.0); // Set values for the 2nd column
float v = m[2][0]; // Get value from column 3, row 1
vec3 col = m[2]; // Get all values for the 3rd column
```

### Matrix Characteristics
- HCSL's matrices are "right-handed, column-major".
    - Each column of the matrix is stored in consecutive memory areas.
    - For example, for `mat3 m;`, `m[0]` represents the 1st column (`vec3` type), `m[1]` is the 2nd column, and `m[2]` is the 3rd column.
- The product of a matrix and a vector is written as `vec3 result = m * v;`.

### Sample
```
mat3 m = mat3(1.0, 2.0, 3.0,
              4.0, 5.0, 6.0,
              7.0, 8.0, 9.0);
float a = m[1][2]; // Value at column 2, row 3 (8.0)
m[0][0] = 10.0;    // Set value at column 1, row 1 to 10.0
m[1] = vec3(1.0, 2.0, 3.0); // Set all values for the 2nd column
vec3 col = m[2];   // Get all values for the 3rd column
vec3 v = vec3(1.0, 2.0, 3.0);
vec3 r = m * v;    // Product of matrix and vector
```


## Vector Types

In HCSL, vector types like `vec2`, `vec3`, and `vec4` are used to handle multiple values collectively, such as coordinates, colors, and directions.

### Vector Declaration and Initialization
```
vec2 st = vec2(0.5, 1.0);
vec4 col = vec3(1.0, 0.5, 0.0, 1.0);
vec4 p = vec4(1.0, 2.0, 3.0, 4.0);
```


### Member Variable Access (Swizzling)
In vector types, each component can be accessed via names like `x, y, z, w` or `r, g, b, a`. Also, you can extract and set combinations of multiple components via "Swizzling".
Note that `xyzw` and `rgba` return the exact same values. There is no behavioral difference whether you use `rgba` for vector calculations or `xyzw` for color calculations.
By using `xyzw` for positions or directions and `rgba` for colors appropriately, you can clarify the intent of your code.
In the shader scripting language, these two distinct notations exist to allow developers to separate vector component operations and color component operations.

```
vec4 col = vec3(1.0, 0.5, 0.0, 1.0);
float r = col.x;      // Obtain 1 component
vec2 rg = col.rg;     // Obtain 2 components
col.rgb = vec3(0.2, 0.3, 0.4); // Modify multiple components collectively

vec2 st = vec2(0.5, 1.0);
float y = st.y;       // Obtain y component
vec3 rep = st.yyx;    // Create a new vec3 in the order of y, y, x
```


#### Essential Access Pattern Examples
- `col.x`, `col.y`, `col.z`, `col.w` (Coordinates and directions)
- `col.r`, `col.g`, `col.b`, `col.a` (Color)
- `col.xy`, `col.yz`, `col.rgb`, etc. (Getting and modifying multiple components)
- `st.yyx`, `col.bgr`, etc. (Rearranging components in any order)

### Vector Type Operations
Various mathematical operations such as addition, subtraction, scalar multiplication, dot products, and cross products between vectors are possible.
```
vec3 a = vec3(1.0, 2.0, 3.0);
vec3 b = vec3(4.0, 5.0, 6.0);
vec3 sum = a + b;
vec3 scaled = a * 2.0;
float dotVal = dot(a, b); // Dot product
vec3 crossVal = cross(a, b); // Cross product
```


## Array Types

In HCSL, array types allow you to manage multiple values of the same type together. Array declaration, initialization, and accessibility behave as follows.
Note that arrays cannot be designated as return values for functions.

### Array Declaration
```
float myArray[5]; // Array storing 5 float variables
vec4 colors[2];   // Array storing 2 vec4 elements
mat3 matrices[3]; // Array storing 3 mat3 elements
```

### Array Declaration and Initialization
You can combine array declarations alongside initializations:
```
float anotherArray[3] = float[3](1.0, 2.0, 3.0);
```

### Accessing Array Elements
```
myArray[0] = 10.0;
float value = anotherArray[1];
vec4 color = colors[0];
mat3 m = matrices[2];
```

Array indices are zero-based.

## struct Type
You can establish structs to treat them as custom definitions:
```
struct WaveParams
{
    float frequency;
    float amplitude;
    float phaseShift;
};

float wave(vec2 st, WaveParams params)
{
    return sin(st.x * params.frequency + params.phaseShift + HEL_TIME) * params.amplitude;
}

void main()
{
    //...

    WaveParams params;
    params.frequency = 50.0; // Wave frequency
    params.amplitude = 1.5; // Wave amplitude
    params.phaseShift = 20.0; // Wave phase shift

    pos.y += wave(_TexCoord0, params);

    //...
}
```