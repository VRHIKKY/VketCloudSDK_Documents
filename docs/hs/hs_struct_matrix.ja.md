# Matrix クラス

!!! Note Info
    4x4の行列を表現するクラス。

***

## クラス定義

```
class Matrix {
    public list<float> m;

    public Matrix()
}
```

## 利用方法

Quaternion の GetMatrix() メソッドで Matrix を作成し、Vector3 の RotateMatrix() メソッドの引数に渡して、回転後の Vector3 を作成する際などに利用します。

## コンストラクタ

### Matrix()

`public Matrix()`

4x4 の恒等行列を生成します。

## メンバ変数

### list<float> m

`public list<float> m`

4x4 行列の情報が保存されるlist。
