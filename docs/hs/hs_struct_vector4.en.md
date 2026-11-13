# Vector4 Class

A class representing a four-dimensional vector.

## Class Definition

```
class Vector4 {
    public float x, y, z, w;

    public void Add(Vector4 v)
    public Vector4 AddNew(Vector4 v)
    public void Sub(Vector4 v)
    public Vector4 SubNew(Vector4 v)
    public float Distance(Vector4 v)
    public Vector4 GetNormalize()
}
```

## Usage Example

```
Vector4 vec = new Vector4();
vec.x = 0.0f;
vec.y = 1.0f;
vec.z = 2.0f;
vec.w = 3.0f;

// Same as above
Vector4 vec2 = makeVector4(0.0f, 1.0f, 2.0f, 3.0f);
```

***

## Vector4 Utility Functions

### makeVector4
`Vector4 makeVector4(float x, float y, float z, float w)`

Global function. Returns a Vector4 initialized with the specified x, y, z, w components.

### makeVector4Add
`Vector4 makeVector4Add(Vector4 vec1, Vector4 vec2)`

Global function. Adds vectors together and returns the result as a new Vector4.

### makeVector4Sub
`Vector4 makeVector4Sub(Vector4 vec1, Vector4 vec2)`

Global function. Subtracts vec2 from vec1 and returns the result as a new Vector4.

## Constructors

### Vector4()
`public Vector4()`

Creates a Vector4 with x, y, z, w components set to 0.

### Vector4(float)
`public Vector4(float s)`

Creates a Vector4 with x, y, z, w components initialized to s.

### Vector4(float, float, float, float)
`public Vector4(float x, float y, float z, float w)`

Creates a Vector4 with the specified x, y, z, w components.

***

## Member Variables

### x
`public float x`

The x component of the vector.

### y
`public float y`

The y component of the vector.

### z
`public float z`

The z component of the vector.

### w
`public float w`

The w component of the vector.

***

## Methods

### Add
`public void Add(Vector4 v)`

Adds the vector v specified in the argument to this instance.

### AddNew
`public Vector4 AddNew(Vector4 v)`

Adds the vector v specified in the argument to this instance and returns the result as a new Vector4.

### Sub
`public void Sub(Vector4 v)`

Subtracts the vector v specified in the argument from this instance.

### SubNew
`public Vector4 SubNew(Vector4 v)`

Subtracts the vector v specified in the argument from this instance and returns the result as a new Vector4.

### Distance
`public float Distance(Vector4 v)`

Returns the distance to the vector v specified in the argument.

### GetNormalize
`public Vector4 GetNormalize()`

Normalizes the vector and returns the result as a new Vector4.
