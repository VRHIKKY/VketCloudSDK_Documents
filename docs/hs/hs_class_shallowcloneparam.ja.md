# HSShallowCloneParamクラス

HSShallowCloneParamクラスは、hsItemCreateShallowCloneに指定するShallowCloneにおける設定を管理するクラスです。

## HSShallowCloneParamの作成
以下はShallowCloneを行う例です。

```
Item origin = hsItemGet("アイテム名");

HSShallowCloneParam param = new HSShallowCloneParam();
param.SetPos(makeVector3(1.0, 0.0, -5.0));

hsItemCreateShallowClone(origin, param);
```

## HSShallowCloneParam - Functions

### SetPos

`public void SetPos(Vector3 p)`

インスタンス描画時の座標を指定します。

### SetQuaternion

`public void SetQuaternion(Quaternion q)`

インスタンス描画時の回転を指定します。

### SetScale

`public void SetScale(Vector3 s)`

インスタンス描画時のサイズを指定します。

### SetColor

`public void SetColor(float R, float G, float B, float A)`

インスタンス描画時の色を指定します。

### SetUVScale

`public void SetUVScale(float U, float V)`

インスタンス描画時のUVスケールを指定します。

### SetUVOffset

`public void SetUVOffset(float U, float V)`

インスタンス描画時のUVオフセットを指定します。
