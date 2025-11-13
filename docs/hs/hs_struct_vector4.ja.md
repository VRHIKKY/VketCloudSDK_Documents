# Vector4 クラス

4次元ベクトルを表現するクラス。

## クラス定義

```
class Vector4 {
    public float x, y, z, w;

    public void Add(Vector4 v)
    public Vector4 AddNew(Vector4 v)
    public void Sub(Vector4 v)
    public Vector4 SubNew(Vector4 v)
    public float Distance(Vector4 v)
    public Vector4 GetNormalize()
}
```

## 使用例

```
Vector4 vec = new Vector4();
vec.x = 0.0f;
vec.y = 1.0f;
vec.z = 2.0f;
vec.w = 3.0f;

// 上記と同じ
Vector4 vec2 = makeVector4(0.0f, 1.0f, 2.0f, 3.0f);
```

***

## Vector4のユーティリティー関数

### makeVector4
`Vector4 makeVector4(float x, float y, float z, float w)`

グローバル関数。指定した x, y, z, w 成分で初期化されたVector4を返す。

### makeVector4Add
`Vector4 makeVector4Add(Vector4 vec1, Vector4 vec2)`

グローバル関数。ベクトル同士を加算し、結果を新しいVector4として返す。

### makeVector4Sub
`Vector4 makeVector4Sub(Vector4 vec1, Vector4 vec2)`

グローバル関数。引数vec1から 引数vec2を減算し、結果を新しいVector4として返す。

## コンストラクタ

### Vector4()
`public Vector4()`

x, y, z, w 成分が 0 の Vector4 を生成する。

### Vector4(float)
`public Vector4(float s)`

x, y, z, w 成分が s で初期化された Vector4 を生成する。

### Vector4(float, float, float, float)
`public Vector4(float x, float y, float z, float w)`

指定された x, y, z, w 成分で Vector4 を生成する。

### Vector4(Vector3, float)
`public Vector4(Vector3 vec3, float w)`

指定された Vector3 の x, y, z 成分と、w 成分で Vector3 を生成する。

***


## メンバ変数
### x
`public float x`

ベクトルのx成分。

### y
`public float y`

ベクトルのy成分。

### z
`public float z`

ベクトルのz成分。

### w
`public float w`

ベクトルのw成分。


***


## メソッド
### Add
`public void Add(Vector4 v)`

引数で指定したベクトル v を、このインスタンスに加算する。

### AddNew
`public Vector4 AddNew(Vector4 v)`

このインスタンスに、引数で指定したベクトル v を加算し、結果を新しいVector4として返す。

### Sub
`public void Sub(Vector4 v)`

このインスタンスから、引数で指定したベクトル v を減算する。

### SubNew
`public Vector4 SubNew(Vector4 v)`

このインスタンスから、引数で指定したベクトル v を減算し、結果を新しいVector4として返す。

### Distance
`public float Distance(Vector4 v)`

引数で指定したベクトル v との距離を返す。

### GetNormalize
`public Vector4 GetNormalize()`

ベクトルを正規化し、結果を新しい Vector4 として返す。
