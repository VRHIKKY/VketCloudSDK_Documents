
# 組み込み関数 - カメラ

カメラに関するユーティリティ関数

***

## 関数の一覧

### hsCameraGetXVector

`void hsCameraGetXVector(ref float X, ref float Y, ref float Z)`

カメラのワールド座標系のＸベクトルを取得します。

### hsCameraGetYVector

`void hsCameraGetYVector(ref float X, ref float Y, ref float Z)`

カメラのワールド座標系のＹベクトルを取得します。

### hsCameraGetZVector

`void hsCameraGetZVector(ref float X, ref float Y, ref float Z)`

カメラのワールド座標系のＺベクトルを取得します。

### hsCameraSetTPSCameraYOffset

`void hsCameraSetTPSCameraYOffset(float YOffset, float YDistanceOffset)`

TPSカメラのＹ方向のオフセットを指定します。単位はメートルです。YDistanceOffsetはカメラズームによってさらに補正させる場合に使用するパラメータです。

### hsCameraGetPos

`void hsCameraGetPos(ref float X, ref float Y, ref float Z)`

ワールド座標系におけるカメラの位置を取得します。

### hsCameraGetPosVector3

`Vector3 hsCameraGetPosVector3()`

ワールド座標系におけるカメラの位置をVector3として取得します。

### hsCameraGetQuaternion

`Quaternion hsCameraGetQuaternion()`

ワールド座標系におけるカメラの向きをQuaternionとして取得します。

### hsCameraSetFPSMode

`void hsCameraSetFPSMode(bool Enable)`

引数 Enable をtrueに設定するとカメラをFPSモードに、falseに設定するとカメラをTPSモードに変更します。

### hsCameraGetFPSMode

`bool hsCameraGetFPSMode()`

現在のカメラのFPSモードの値を返します。
***
