# 組み込み関数 - GUI

!!! 情報 Info
    GUI要素を操作するユーティリティー関数。

***

## 関数の一覧

### hsCanvasSetLayerShow

`bool hsCanvasSetLayerShow(string layerName, bool show)`

名前で指定したレイヤーを、true で表示、false で非表示にする。

### hsCanvasSuspendVisibleLayers
`bool hsCanvasSuspendVisibleLayers()`

現在表示されているすべてのレイヤーを一時的に非表示にします。hsCanvasResumeVisibleLayers()を呼び出すと表示状態を復帰します。<br>
既にサスペンドしている場合はfalseが返ります。

### hsCanvasResumeVisibleLayers
`bool hsCanvasResumeVisibleLayers()`

hsCanvasSuspendVisibleLayers()で非表示にしたレイヤーを復帰します。<br>
サスペンドされていない場合はfalseが返ります。

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

`bool hsCanvasResetToggleDefault(string toggleName)`

名前で指定したトグルをデフォルトの状態にリセットする。

### hsCanvasToggleChange

`bool hsCanvasToggleChange(string toggleName)`

名前で指定したトグルの状態を切り替える。

### hsCanvasWorldToScreenPos

`bool hsCanvasWorldToScreenPos(Vector3 WorldPos, ref float ScreenX, ref float ScreenY)`

ワールド座標をスクリーン座標に変換する。 

変換後のスクリーン座標 (ScreenX, ScreenY) は 画面左上を基点 とした座標系で返す。

視野角外の場合は false を返す。

### hsCanvasIsPortrait

`bool hsCanvasIsPortrait()`

縦画面か横画面かの真偽を返す。

### hsCanvasSetConfigClosedFlag

`void hsCanvasSetConfigClosedFlag(bool Flag)`

コンフィグ画面の表示状態を切り替える。
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

`void hsAddGUIButton(string LayerName, bool IsPortrait, 
string GUIName, string Platform, string Language, string Portrait, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
string FileName, string OnCursorFileName, string DownFileName, string ClickAreaFileName, int ClickAreaSizeX, int ClickAreaSizeY, float FlickCheckTime, float FlickLengthThreshold,
int UVAreaX, int UVAreaY, int UVAreaWidth, int UVAreaHeight, int L, int R, int T, int B)`

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

## ウィンドウシステム
モーダル・モードレスウィンドウを作れるようにする（以降これらの機能をまとめてウィンドウシステムと呼ぶ）

- ウィンドウシステムはレイヤ機能とは独立しており、レイヤを操作することで動作を実現する。
- ウィンドウシステムはレイヤのZ値の再設定と表示状態の操作はするが、生成削除は行わない。
- モーダルウィンドウに対し、モードレスウィンドウを子として追加できる
  - モーダル状態ではそのウィンドウとその子のモードレスウィンドウのみ入力を受け取れる。
- どのウィンドウもモーダルではない状態に対してもモードレスウィンドウを設定できる。
- モーダルウィンドウをPushするときに、他のモーダルウィンドウを非表示にするオプションがある(Pop時に再表示される)
- モーダルウィンドウをPopするときにそのレイヤと子のモードレスウィンドウに設定されたレイヤは非表示状態にされる
- モーダルウィンドウのトップレベルの変化があった際に(新しいモーダルウィンドウのpush、もしくはトップレベルのモーダルウィンドウのPop)、新しくモーダル状態になったウィンドウはZ値が一番手前に修正される。

```
hsWindowModalPush(string layerName, bool hideOther);
```
指定レイヤをモーダルウィンドウとして最上位にPushする。そのレイヤは表示状態になり、モーダル状態になる。
hideOther=trueで、モーダル状態中他のモーダルウィンドウと子モードレスウィンドウを非表示にする

```
hsWindowModalPop();
```
最上位のモーダルウィンドウをPopする。モーダル状態は一つ前のモーダルウィンドウに戻る。
Popされたモーダルウィンドウに設定されていたレイヤは非表示になる。
Popされたモーダルウィンドウの子モードレスウィンドウは全てRemoveされレイヤは非表示になる。hideOther=trueでpushしていた場合は一時的に非表示されていたウィンドウの表示状態が復帰する。

```
hsWindowModalPopUntil(string layerName);
```
指定レイヤまでモーダルウィンドウをPopする。

```
hsWindowModelessAdd(string layerName);
```
最上位のモーダルウィンドウの子モードレスウィンドウとして指定レイヤを追加する。表示状態は変更しない。

```
hsWindowModelessRemove(string layerName);
```
最上位のモーダルウィンドウの子モードレスウィンドウから指定レイヤを削除する。レイヤは非表示状態になる。

```
hsWindowModelessShowOnly(string layerName);
```
最上位のモーダルウィンドウの子モードレスウィンドウのうち指定レイヤだけ表示状態にし、残りは非表示状態にする。

```
hsWindowModelessShowAll(bool isShown);
```
最上位のモーダルウィンドウの子モードレスウィンドウ全てを表示もしくは非表示状態にする(isShownで表示状態を指定)。

```
hsWindowClear();
```
全てのモーダルウィンドウとその子モードレスウィンドウを削除し、設定したレイヤを非表示状態にする。
