# Vector2 Class

A class representing a two-dimensional vector.

## Class Definition

```
class Vector2 {
    public float x, y;

    public void Add(Vector2 v)
    public Vector2 AddNew(Vector2 v)
    public void Sub(Vector2 v)
    public Vector2 SubNew(Vector2 v)
    public float Distance(Vector2 v)
    public Vector2 GetNormalize()
}
```

## Usage Example

```
Vector2 vec = new Vector2();
vec.x = 0.0f;
vec.y = 1.0f;

// Same as above
Vector2 vec2 = makeVector2(0.0f, 1.0f);
```

***

## Vector2 Utility Functions

### makeVector2
`Vector2 makeVector2(float x, float y)`

Global function. Returns a Vector2 initialized with the specified x, y components.

### makeVector2Add
`Vector2 makeVector2Add(Vector2 vec1, Vector2 vec2)`

Global function. Adds vectors together and returns the result as a new Vector2.

### makeVector2Sub
`Vector2 makeVector2Sub(Vector2 vec1, Vector2 vec2)`

Global function. Subtracts vec2 from vec1 and returns the result as a new Vector2.

## Constructors

### Vector2()
`public Vector2()`

Creates a Vector2 with x, y components set to 0.

### Vector2(float)
`public Vector2(float s)`

Creates a Vector2 with x, y components initialized to s.

### Vector2(float, float)
`public Vector2(float x, float y)`

Creates a Vector2 with the specified x, y components.

***

## Member Variables
### x
`public float x`

The x component of the vector.

### y
`public float y`

The y component of the vector.

***

## Methods
### Add
`public void Add(Vector2 v)`

Adds the vector v specified in the argument to this instance.

### AddNew
`public Vector2 AddNew(Vector2 v)`

Adds the vector v specified in the argument to this instance and returns the result as a new Vector2.

### Sub
`public void Sub(Vector2 v)`

Subtracts the vector v specified in the argument from this instance.

### SubNew
`public Vector2 SubNew(Vector2 v)`

Subtracts the vector v specified in the argument from this instance and returns the result as a new Vector2.

### Distance
`public float Distance(Vector2 v)`

Returns the distance to the vector v specified in the argument.

### GetNormalize
`public Vector2 GetNormalize()`

Normalizes the vector and returns the result as a new Vector2.
