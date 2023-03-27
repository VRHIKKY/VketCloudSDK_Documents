
# Vector3 class

A class that represents a 3D vector.

## class definition

```
class Vector3 {
     public float x, y, z;

     public void Add(Vector3v)
     public Vector3 Rotate(Quaternion q)
     public Vector3 RotateMatrix(Matrix mat)
}
```

## Example of use

```
Vector3 vec = new Vector3();
vec.x = 0.0f;
vec.y = 1.0f;
vec.z = 2.0f;

// same as above
Vector3 vec2 = makeVector3(0.0f, 1.0f, 2.0f);
```

***

## Vector3 utility functions
### makeVector3(float, float, float)
`Vector3 makeVector3(float x, float y, float z)`

global function. Returns a Vector3 initialized with the specified x, y, z components.

***

## Constructor

### Vector3()
`public Vector3()`

Creates an instance of Vector3 with x, y, z elements set to 0.


***


## member variables
### float x
`public float x`

The x component of the vector.

### float y
`public float y`

The y component of the vector.

### float z
`public float z`

The z-component of the vector.


***


## methods
### Add(Vector3)
`public void Add(Vector3v)`

Adds the vector specified by the argument to the calling vector.

### Rotate (Quaternion)
`public Vector3 Rotate(Quaternion q)`

Rotates the calling vector and returns the result as a new Vector3.

### Rotate Matrix(Matrix)
`public Vector3 RotateMatrix(Matrix mat)`

Rotates the calling vector and returns the result as a new Vector3.