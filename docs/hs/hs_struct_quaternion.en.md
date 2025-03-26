# Quaternion class

!!! info "Note"
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

!!! warning "Matching Unity's Euler Angles with Visual Appearance"
    In Unity, Euler angle rotations are performed in the order of Z-axis, X-axis, and Y-axis.<br>
    Since this order differs from the Vket Cloud engine, please refer to the code below to match Unity's settings with the visual appearance.

    ??? quote "Code Sample"
        ```
        Quaternion CreateQuaternionEuler(float x, float y, float z)
        {
            Quaternion XRot = makeQuaternionXRotation(hsMathDegToRad(x));
            Quaternion YRot = makeQuaternionYRotation(hsMathDegToRad(y));
            Quaternion ZRot = makeQuaternionZRotation(hsMathDegToRad(z));

            Quaternion YXRot = makeQuaternionMul(YRot, XRot);
            Quaternion YXZRot = makeQuaternionMul(YXRot, ZRot);

            return YXZRot;
        }
        ```

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

### Set

`public void Set(float x, float y, float z, float w)`

Sets the quaternion with the four elements x, y, z, and w.

### SetEuler

`public void SetEuler(float x, float y, float z)`

Sets the quaternion with the Euler angles (degrees) x, y, and z.

### SetEulerVector3

`public void SetEulerVector3(Vector3 angles)`

Sets the quaternion with the Euler angles (degrees) x, y, and z as a Vector3.

### GetEuler

`public void GetEuler(ref float x, ref float y, ref float z)`

Gets the Euler angles (degrees) from the quaternion as the arguments x, y, and z.

### GetEulerVector3

`public Vector3 GetEulerVector3()`

Gets the Euler angles (degrees) from the quaternion as a Vector3.
