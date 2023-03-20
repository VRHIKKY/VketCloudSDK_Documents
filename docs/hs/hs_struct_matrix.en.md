# Matrix class

A class that represents a 4x4 matrix.

## class definition

```
class Matrix {
     public list<float> m;

     public Matrix()
}
```

## How to Use

One of its usages is to create a Matrix with Quaternion's GetMatrix() method, pass it to the argument of Vector3's RotateMatrix() method, and use it to create a rotated Vector3.

***


## Constructor
### Matrix()
`public Matrix()`

Generate a 4x4 identity matrix.


***


## member variables

### list<float> m
`public list<float>m`

A list in which the 4x4 matrix information is stored.