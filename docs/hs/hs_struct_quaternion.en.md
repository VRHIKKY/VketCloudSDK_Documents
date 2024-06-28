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

### makeQuaternion

`Quaternion makeQuaternion(float x, float y, float z, float w)`

global function. Generate a quaternion by specifying 4 elements x, y, z, w.

### makeQuaternionMul

`Quaternion makeQuaternionMul(Quaternion a, Quaternion b)`

global function. Multiplies two quaternions and returns the result as a new quaternion.

### makeQuaternionXRotation

`Quaternion makeQuaternionXRotation(float rotateRadian)`

global function. Returns the quaternion rotated by rotateRadian around the x-axis.

### makeQuaternionYRotation

`Quaternion makeQuaternionYRotation(float rotateRadian)`

global function. Returns the quaternion rotated by rotateRadian around the y-axis.

### makeQuaternionZRotation

`Quaternion makeQuaternionZRotation(float rotateRadian)`

global function. Returns the quaternion rotated by rotateRadian around the z-axis.

### makeQuaternionEuler

`Quaternion makeQuaternionEuler(float x, float y, float z)`

global function. Generates a quaternion from the triplet of Euler angles x, y, z.

### makeQuaternionFromTo

`Quaternion makeQuaternionFromTo(Vector3 From, Vector3 To)`

global function. Generates a quaternion from From vector to To vector.

### makeQuaternionLook

`Quaternion makeQuaternionLook(Vector3 LookView, Vector3 Up)`

global function. Generates a quaternion which will face the LookView direction. The Up vector should be designated as (0.0f, 1.0f, 0.0f) unless intended.

***

## Constructor

### Quaternion()

`public Quaternion()`

Creates a quaternion instance with x, y, z elements set to 0 and w element set to 1.

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
