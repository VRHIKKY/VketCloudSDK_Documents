
# Vector3 class

!!! Note Info
     A class that represents a 3D vector.

***

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


## Vector3 utility functions
### makeVector3(float, float, float)
`Vector3 makeVector3(float x, float y, float z)`

global function. Returns a Vector3 initialized with the specified x, y, z components.

### lerpVector3(Vector3 from, Vector3 to, float t)
`Vector3 lerpVector3(Vector3 from, Vector3 to, float t)`

global function. Returns a linear interpolated Vector3 result between `from` and `to` by time t.

## Constructor

### Vector3()
`public Vector3()`

Creates an instance of Vector3 with x, y, z elements set to 0.



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

## methods
### Add(Vector3)
`public void Add(Vector3 v)`

Adds the vector specified by the argument to the calling vector.

### Sub(Vector3 v)
`public void Sub(Vector3 v)`

Subtracts the vector specified by the argument to the calling vector.

### Rotate(Quaternion)
`public Vector3 Rotate(Quaternion q)`

Rotates the calling vector and returns the result as a new Vector3.

### RotateMatrix(Matrix)
`public Vector3 RotateMatrix(Matrix mat)`

Rotates the calling vector and returns the result as a new Vector3.

### Distance(Vector3 v)
`public float Distance(Vector3 v)`

Returns the distance from vector `v`.

### GetNormalize()
`public Vector3 GetNormalize()`

Returns a new Vector3 value by normalizing the vector.