
# Quaternion クラス


!!! 情報 Info
    クォータニオンの x, y, z, w の4要素を表現するクラス。

***

## クラス定義

```
class Quaternion
{
    public float x, y, z, w;
    
    public Quaternion()
    public Matrix    GetMatrix()
}
```


## Quaternionのユーティリティー関数

### makeQuaternion(float, float, float, float)
`Quaternion makeQuaternion(float x, float y, float z, float w)`

グローバル関数。x, y, z, w の4要素を指定して Quaternion を生成する。

### makeQuaternionMul(Quaternion, Quaternion)
`Quaternion makeQuaternionMul(Quaternion a, Quaternion b)`

グローバル関数。2つのクォータニオンを乗算して、結果を新しいクォータニオンとして返す。

### makeQuaternionXRotation(float)
`Quaternion makeQuaternionXRotation(float rotateRadian)`

グローバル関数。x軸から rotateRadian だけ回転したクォータニオンを返す。

### makeQuaternionYRotation(float)
`Quaternion makeQuaternionYRotation(float rotateRadian)`

グローバル関数。y軸から rotateRadian だけ回転したクォータニオンを返す。

### makeQuaternionZRotation(float)
`Quaternion makeQuaternionZRotation(float rotateRadian)`

グローバル関数。z軸から rotateRadian だけ回転したクォータニオンを返す。

### makeQuaternionEuler(float, float, float)
`Quaternion makeQuaternionEuler(float x, float y, float z)`

グローバル関数。オイラー角の x, y, z の3要素からクォータニオンを生成する。


## コンストラクタ
### Quaternion()
`public Quaternion()`

x, y, z 要素を0, w要素を1に設定して Quaternion のインスタンスを生成する。


## メンバ変数

### float x
`public float x`

クォータタニオンのx成分。

### float y
`public float y`

クォータタニオンのy成分。

### float z
`public float z`

クォータタニオンのz成分。

### float w
`public float w`

クォータタニオンのw成分。


## メソッド

### GetMatrix()
`public Matrix    GetMatrix()`

クォータニオンを4x4の行列として返す。

