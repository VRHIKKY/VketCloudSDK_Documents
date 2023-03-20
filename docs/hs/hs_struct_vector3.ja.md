
# Vector3 クラス

3次元ベクトルを表現するクラス。

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

***

## Vector3のユーティリティー関数
### makeVector3(float, float, float)
`Vector3 makeVector3(float x, float y, float z)`

グローバル関数。指定した x, y, z 成分で初期化されたVector3を返す。

***

## コンストラクタ

### Vector3()
`public Vector3()`

x, y, z 要素を0に設定して Vector3 のインスタンスを生成する。


***


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

呼び出し元のベクトルに、引数で指定されたベクトルを加算する。

### Rotate(Quaternion)
`public Vector3 Rotate(Quaternion q)`

呼び出し元のベクトルを回転させて、結果を新しい Vector3 として返す。

### RotateMatrix(Matrix)
`public Vector3 RotateMatrix(Matrix mat)`

呼び出し元のベクトルを回転させて、結果を新しい Vector3 として返す。

