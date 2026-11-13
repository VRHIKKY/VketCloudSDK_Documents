# Vector2 クラス

2次元ベクトルを表現するクラス。

## クラス定義

```
class Vector2 {
    public float x, y;

    public void Add(Vector2 v)
    public Vector2 AddNew(Vector2 v)
    public void Sub(Vector2 v)
    public Vector2 SubNew(Vector2 v)
    public float Distance(Vector2 v)
    public Vector2 GetNormalize()
}
```

## 使用例

```
Vector2 vec = new Vector2();
vec.x = 0.0f;
vec.y = 1.0f;

// 上記と同じ
Vector2 vec2 = makeVector2(0.0f, 1.0f);
```

***

## Vector2のユーティリティー関数

### makeVector2
`Vector2 makeVector2(float x, float y)`

グローバル関数。指定した x, y 成分で初期化されたVector2を返す。

### makeVector2Add
`Vector2 makeVector2Add(Vector2 vec1, Vector2 vec2)`

グローバル関数。ベクトル同士を加算し、結果を新しいVector2として返す。

### makeVector2Sub
`Vector2 makeVector2Sub(Vector2 vec1, Vector2 vec2)`

グローバル関数。引数vec1から 引数vec2を減算し、結果を新しいVector2として返す。

## コンストラクタ

### Vector2()
`public Vector2()`

x, y 成分が 0 の Vector2 を生成する。

### Vector2(float)
`public Vector2(float s)`

x, y 成分が s で初期化された Vector2 を生成する。

### Vector2(float, float)
`public Vector2(float x, float y)`

指定された x, y 成分で Vector2 を生成する。

***

## メンバ変数
### x
`public float x`

ベクトルのx成分。

### y
`public float y`

ベクトルのy成分。

***


## メソッド
### Add
`public void Add(Vector2 v)`

引数で指定したベクトル v を、このインスタンスに加算する。

### AddNew
`public Vector2 AddNew(Vector2 v)`

このインスタンスに、引数で指定したベクトル v を加算し、結果を新しいVector2として返す。

### Sub
`public void Sub(Vector2 v)`

このインスタンスから、引数で指定したベクトル v を減算する。

### SubNew
`public Vector2 SubNew(Vector2 v)`

このインスタンスから、引数で指定したベクトル v を減算し、結果を新しいVector2として返す。

### Distance
`public float Distance(Vector2 v)`

引数で指定したベクトル v との距離を返す。

### GetNormalize
`public Vector2 GetNormalize()`

ベクトルを正規化し、結果を新しい Vector2 として返す。
