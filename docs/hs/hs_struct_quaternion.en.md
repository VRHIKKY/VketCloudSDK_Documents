
# Quaternion class

!!! Note Info
     A class that represents the four elements x, y, z, and w of a quaternion.

***

## class definition

```
class Quaternion
{
     public float x, y, z, w;
    
     public Quaternion()
     public Matrix GetMatrix()
}
```


## Quaternion utility functions

### makeQuaternion(float, float, float, float)
`Quaternion makeQuaternion(float x, float y, float z, float w)`

global function. Generate Quaternion by specifying 4 elements x, y, z, w.

### makeQuaternionMul(Quaternion, Quaternion)
`Quaternion makeQuaternionMul(Quaternion a, Quaternion b)`

global function. Multiplies two quaternions and returns the result as a new quaternion.

### makeQuaternionXRotation(float)
`Quaternion makeQuaternionXRotation(float rotateRadian)`

global function. Returns the quaternion rotated by rotateRadian around the x-axis.

### makeQuaternionYRotation(float)
`Quaternion makeQuaternionYRotation(float rotateRadian)`

global function. Returns the quaternion rotated by rotateRadian around the y-axis.

### makeQuaternionZRotation(float)
`Quaternion makeQuaternionZRotation(float rotateRadian)`

global function. Returns the quaternion rotated by rotateRadian around the z-axis.

### makeQuaternionEuler(float, float, float)
`Quaternion makeQuaternionEuler(float x, float y, float z)`

global function. Generates a quaternion from the triplet of Euler angles x, y, z.


## Constructor
### Quaternion()
`public Quaternion()`

Creates a Quaternion instance with x, y, z elements set to 0 and w element set to 1.


## member variables

### float x
`public float x`

The x component of the quaternion.

### float y
`public float y`

The y component of the quaternion.

### float z
`public float z`

The z component of the quaternion.

### float w
`public float w`

The w component of the quaternion.


## methods

### GetMatrix()
`public Matrix GetMatrix()`

Returns the quaternion as a 4x4 matrix.