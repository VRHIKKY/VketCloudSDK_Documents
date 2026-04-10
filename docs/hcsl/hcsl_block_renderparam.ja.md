# renderparam block

renderparamブロックでは描画パラメーターを指定します。

使用可能パラメーターリスト

|変数型|変数名|初期値|説明|指定可能な値|
|:--|:--|:--|:--|:--|
|bool|hel_z_write|true|深度テストを行うかどうか|true, false|
|int|hel_depth_func|HEL_DEPTH_FUNC_LESS|深度テストの実行方法|HEL_DEPTH_FUNC_LESS, HEL_DEPTH_FUNC_EQUAL, HEL_DEPTH_FUNC_LEQUAL, HEL_DEPTH_FUNC_GREATER, HEL_DEPTH_FUNC_NOTEQUAL, HEL_DEPTH_FUNC_GEQUAL, HEL_DEPTH_FUNC_ALWAYS|
|int|hel_cull_mode|HEL_CULL_BACK|どのようにカリングを行うか|HEL_CULL_NONE, HEL_CULL_BACK, HEL_CULL_FRONT|
|int|hel_render_queue_offset|0|ある描画パスにおけるレンダーキューのオフセットを指定します。例えばGeometry_AlphaBlendingのパスで描画するシェーダーが２つあった時、一方のオフセットが「0」・もう一方が「10」だとしたら後者の方が後から描画されます。これを使うにはSDKのレンダリング設定でRenderQueueを有効にする必要があります。|任意のint型の数値|
|int|hel_color_space|HEL_COLOR_SPACE_LINEAR|Heliodor(VketCloud)上でのみ動作。HCSLにおいてリニア空間とガンマ空間のどちらの色空間で計算するか指定します。|HEL_COLOR_SPACE_LINEAR, HEL_COLOR_SPACE_GAMMA|

```
renderparam
{
    bool hel_z_write = true;
    int  hel_depth_func = HEL_DEPTH_FUNC_GEQUAL;
    int  hel_cull_mode = HEL_CULL_BACK;
    int  hel_render_queue_offset = 10;
    int  hel_color_space = HEL_COLOR_SPACE_GAMMA;
}
```