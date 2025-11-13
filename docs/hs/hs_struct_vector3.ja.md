
# Vector3 クラス

!!! info "情報"
    3次元ベクトルを表現するクラス。

***

## クラス定義

```
class Vector3 {
    public float x, y, z;

    public void Add(Vector3 v)
    public Vector3 Rotate(Quaternion q)
    public Vector3 RotateMatrix(Matrix mat)
}
```

## 使用例

```
Vector3 vec = new Vector3();
vec.x = 0.0f;
vec.y = 1.0f;
vec.z = 2.0f;

// 上記と同じ
Vector3 vec2 = makeVector3(0.0f, 1.0f, 2.0f);
```

## Vector3のユーティリティー関数

### makeVector3 <!-- md:unrecommended -->

`Vector3 makeVector3(float x, float y, float z)`

グローバル関数。指定した x, y, z 成分で初期化されたVector3を返す。

### makeVector3Dot 

`float makeVector3Dot(Vector3 vec1, Vector3 vec2)`

グローバル関数。ベクトル同士の内積を計算します。

### makeVector3Cross

`Vector3 makeVector3Cross(Vector3 vec1, Vector3 vec2)`

グローバル関数。ベクトル同士の外積を計算します。

### lerpVector3

`Vector3 lerpVector3(Vector3 from, Vector3 to, float t)`

グローバル関数。from と to の間を時間 t で線形補間し、結果を Vector3 として返す。

## コンストラクタ

### Vector3()

`public Vector3()`

x, y, z 要素を0に設定して Vector3 のインスタンスを生成する。

## メンバ変数

### float x

`public float x`

ベクトルのx成分。

### float y

`public float y`

ベクトルのy成分。

### float z

`public float z`

ベクトルのz成分。

***

## メソッド

### Add(Vector3)

`public void Add(Vector3 v)`

引数で指定したベクトル v を加算する。

### Sub(Vector3 v)

`public void Sub(Vector3 v)`

引数で指定したベクトル v を減算する。

### Rotate(Quaternion)

`public Vector3 Rotate(Quaternion q)`

ベクトルを回転させて、結果を新しい Vector3 として返す。

### RotateMatrix(Matrix)

`public Vector3 RotateMatrix(Matrix mat)`

ベクトルを回転させて、結果を新しい Vector3 として返す。

### Distance(Vector3 v)

`public float Distance(Vector3 v)`

引数で指定したベクトル v との距離を返す。

### GetNormalize()

`public Vector3 GetNormalize()`

ベクトルを正規化し、結果を新しい Vector3 として返す。
