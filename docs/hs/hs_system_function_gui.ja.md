
# 組み込み関数 - GUI

!!! 情報 Info
    GUI要素を操作するユーティリティー関数。

***

## 関数の一覧

### hsCanvasSetLayerShow

`bool hsCanvasSetLayerShow(string layerName, bool show)`

名前で指定したレイヤーを、true で表示、false で非表示にする。

### hsCanvasSetGUIShow

`bool hsCanvasSetGUIShow(string layerName, string guiName, bool show)`

名前で指定したCanvasを、true で表示、false で非表示にする。

### hsCanvasSetGUIPos

`bool hsCanvasSetGUIPos(string LayerName, bool IsPortrait, string GUIName, float X, float Y)`

指定したGUI要素の座標を変更する。

### hsCanvasGetGUIPos

`bool hsCanvasGetGUIPos(string LayerName, bool IsPortrait, string GUIName, ref float X, ref float Y)`

指定したGUI要素の座標を取得する。

### hsCanvasSetGUIText

`bool hsCanvasSetGUIText(string LayerName, string GUIName, string Text)`

指定したテキスト要素のテキストを設定する。

### hsCanvasSetGUITextAlignment

`bool hsCanvasSetGUITextAlignment(string LayerName, string GUIName, int Alignment)`

指定したテキスト要素のアライメントを設定する。

### hsCanvasSetGUITextOverflowWrap

`bool hsCanvasSetGUITextOverflowWrap(string LayerName, string GUIName, bool OverflowWrap)`

指定したテキスト要素の自動改行を設定する。

### hsCanvasSetGUITextURLClickable

`bool hsCanvasSetGUITextURLClickable(string LayerName, string GUIName, bool URLClickable)`

指定したテキスト要素のURLクリックが可能かどうかを設定する。

### hsCanvasSetGUIImage

`bool hsCanvasSetGUIImage(string layerName, string guiName, string path)`

名前で指定したCanvasにイメージを設定する。

### hsCanvasResetToggleDefault

`bool hsCanvasResetToggleDefault(string name)`

名前で指定したGUI要素をデフォルトの状態にリセットする。

### hsCanvasToggleChange

`bool hsCanvasToggleChange(string name)`

名前で指定したGUI要素の状態を切り替える。

### hsCanvasWorldToScreenPos

`bool hsCanvasWorldToScreenPos(Vector3 WorldPos, ref float ScreenX, ref float ScreenY)`

ワールド座標をスクリーン座標に変換する。視野角外の場合はfalseが返る。

### hsCanvasIsPortrait

`bool hsCanvasIsPortrait()`

縦画面か横画面かの真偽を返す。

### hsCanvasSetConfigClosedFlag

`void hsCanvasSetConfigClosedFlag(bool Flag)`

コンフィグ画面を表示状態を切り替える。
***

### hsCanvasAddGUI

`void hsCanvasAddGUI(string LayerName, bool IsPortrait, HSGUIModel Model)`

LayerNameで検索したLayerにIsPortraitで縦か横画面を判定して、GUIを追加する。

HelScript例
``` 
HSGUIModel model;
model = new HSGUIModel();
model.SetName("test_button");
model.SetShow(true);
model.SetType("button");
HS2DI size;
size = new HS2DI();
size.SetXY(100,100);
model.SetSize(size);
model.GetButtonModel().SetFileName("test_button.png");
hsCanvasAddGUI("HUD",false,model);
```

HSGUIModelクラスの詳細については[HSGUIModel - Summary](./hs_system_function_gui_HSGUIModel.md)をご参照ください。

***

### hsCanvasSetGUISize

`bool hsCanvasSetGUISize(string LayerName, bool IsPortrait, string GUIName, float X, float Y)`

GUIのサイズを設定する。

### hsCanvasGetGUISize

`bool hsCanvasGetGUISize(string LayerName, bool IsPortrait, string GUIName, ref float X, ref float Y)`

GUIのサイズを取得する。

### hsCanvasSetGUIAngle

`bool hsCanvasSetGUIAngle(string LayerName, bool IsPortrait, string GUIName, float Angle)`

GUIの角度を設定する。

### hsCanvasGetGUIAngle

`bool hsCanvasGetGUIAngle(string LayerName, bool IsPortrait, string GUIName, ref float Angle)`

GUIの角度を取得する。

### hsAddGUIImage

`void hsAddGUIImage(string LayerName, bool IsPortrait, 
    string GUIName, string Platform, string Language, string Portrait, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string URI, int UVAreaX, int UVAreaY, int UVAreaWidth, int UVAreaHeight, int L, int R, int T, int B)` 

LayerNameで検索したLayerにIsPortraitで縦か横画面を判定して、
imageタイプのGUIを追加する。

### hsAddGUIButton

`void hsAddGUIImage(string LayerName, bool IsPortrait, 
    string GUIName, string Platform, string Language, string Portrait, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string URI, int UVAreaX, int UVAreaY, int UVAreaWidth, int UVAreaHeight, int L, int R, int T, int B)`

LayerNameで検索したLayerにIsPortraitで縦か横画面を判定して、
buttonタイプのGUIを追加する。

### hsAddGUIText

`hsAddGUIText(string LayerName, bool IsPortrait, 
    string GUIName, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string Text, string FontFamily, int FontSize, float ColorR, float ColorG, float ColorB, float ColorA, string Alignment, int CharaSpace, int LineSpace, bool IsOverflowWrap, 
	bool URLClickable, float URLColorR, float URLColorG, float URLColorB, float URLColorA
)`

LayerNameで検索したLayerにIsPortraitで縦か横画面を判定して、
textタイプのGUIを追加する。
