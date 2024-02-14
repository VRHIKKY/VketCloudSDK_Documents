
# 組み込み関数 - GUI

!!! 情報 Info
    GUI要素を操作するユーティリティー関数。


***


### hsCanvasSetLayerShow
`bool hsCanvasSetLayerShow(string layerName, bool show)`

名前で指定したレイヤーを、true で表示、false で非表示にする。


### hsCanvasSetGUIShow
`bool hsCanvasSetGUIShow(string layerName, string guiName, bool show)`

名前で指定したCanvasを、true で表示、false で非表示にする。


### hsCanvasSetGUIPos
`bool hsCanvasSetGUIPos(string LayerName, string GUIName, float X, float Y)`

指定したGUI要素の座標を変更する。


### hsCanvasGetGUIPos
`bool hsCanvasSetGUIPos(string LayerName, bool IsPortrait, string GUIName, ref float X, ref float Y)`

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


***
