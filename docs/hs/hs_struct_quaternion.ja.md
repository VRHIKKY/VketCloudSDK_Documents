
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

### makeQuaternion

`Quaternion makeQuaternion(float x, float y, float z, float w)`

グローバル関数。x, y, z, w の4要素を指定してクォータニオンを生成する。

### makeQuaternionMul

`Quaternion makeQuaternionMul(Quaternion a, Quaternion b)`

グローバル関数。2つのクォータニオンを乗算して、結果を新しいクォータニオンとして返す。

### makeQuaternionXRotation

`Quaternion makeQuaternionXRotation(float rotateRadian)`

グローバル関数。x軸から rotateRadian だけ回転したクォータニオンを返す。

### makeQuaternionYRotation

`Quaternion makeQuaternionYRotation(float rotateRadian)`

グローバル関数。y軸から rotateRadian だけ回転したクォータニオンを返す。

### makeQuaternionZRotation

`Quaternion makeQuaternionZRotation(float rotateRadian)`

グローバル関数。z軸から rotateRadian だけ回転したクォータニオンを返す。

### makeQuaternionEuler

`Quaternion makeQuaternionEuler(float x, float y, float z)`

グローバル関数。オイラー角の x, y, z の3要素からクォータニオンを生成する。

### makeQuaternionFromTo

`Quaternion makeQuaternionFromTo(Vector3 From, Vector3 To)`

グローバル関数。FromベクトルからToベクトルに回転させるクォータニオンを生成する。

### makeQuaternionLook

`Quaternion makeQuaternionLook(Vector3 LookView, Vector3 Up)`

グローバル関数。LookView方向を向くクォータニオンを生成する。Upベクトルは通常は(0.0f, 1.0f, 0.0f)を指定する。

***

## コンストラクタ

### Quaternion()

`public Quaternion()`

x, y, z 要素を0, w要素を1に設定してクォータニオンのインスタンスを生成する。

## メンバ変数

### float x

`public float x`

クォータニオンのx成分。

### float y

`public float y`

クォータニオンのy成分。

### float z

`public float z`

クォータニオンのz成分。

### float w

`public float w`

クォータニオンのw成分。

## メソッド

### GetMatrix

`public Matrix    GetMatrix()`

クォータニオンを4x4の行列として返す。

### Set

`public void Set(float x, float y, float z, float w)`

x, y, z, w の4要素をクォータニオンに設定する。

### SetEuler

`public void SetEuler(float x, float y, float z)`

x, y, z のオイラー角(度数)をクォータニオンに設定する。

### SetEulerVector3

`public void SetEulerVector3(Vector3 angles)`

x, y, z のオイラー角(度数)を、Vector3としてクォータニオンに設定する。

### GetEuler

`public void GetEuler(ref float x, ref float y, ref float z)`

クォータニオンから、オイラー角(度数)を引数 x, y, z として取得する。

### GetEulerVector3

`public Vector3 GetEulerVector3()`

クォータニオンから、オイラー角(度数)をVector3として取得する。
