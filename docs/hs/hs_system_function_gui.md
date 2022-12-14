
# 組み込み関数 - GUI

GUI要素を操作するユーティリティー関数。


***


### hsCanvasSetLayerShow(string, bool)
`bool hsCanvasSetLayerShow(string layerName, bool show)`

名前で指定したレイヤーを、true で表示、false で非表示にする。

### hsCanvasSetGUIShow(string, string, bool)
`bool hsCanvasSetGUIShow(string layerName, string guiName, bool show)`

名前で指定したCanvasを、true で表示、false で非表示にする。

### hsCanvasSetGUIShow(string, string, string)
`bool hsCanvasSetGUIText(string layerName, string guiName, string text)`

名前で指定したCanvasに文字列を設定する。

### hsCanvasSetGUIImage(string, string, string)
`bool hsCanvasSetGUIImage(string layerName, string guiName, string path)`

名前で指定したCanvasにイメージを設定する。

### hsCanvasResetToggleDefault(string)
`bool hsCanvasResetToggleDefault(string name)`

名前で指定したGUI要素をデフォルトの状態にリセットする。

### hsCanvasToggleChange(string)
`bool hsCanvasToggleChange(string name)`

名前で指定したGUI要素の状態を切り替える。


***
