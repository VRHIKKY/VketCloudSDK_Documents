
# built-in functions - GUI

!!! Note Info
    Utility functions that manipulate GUI elements.


***
### hsCanvasSetLayerShow
`bool hsCanvasSetLayerShow(string layerName, bool show)`

Shows the layer specified by name with true and hides it with false.


### hsCanvasSetGUIShow
`bool hsCanvasSetGUIShow(string layerName, string guiName, bool show)`

Shows the Canvas specified by name with true and hides it with false.


### hsCanvasSetGUIPos
`bool hsCanvasSetGUIPos(string LayerName, string GUIName, float X, float Y)`

Set the GUI element's position as the designated value.


### hsCanvasGetGUIPos
`bool hsCanvasSetGUIPos(string LayerName, string GUIName, ref float X, ref float Y)`

Get the GUI element's position value.


### hsCanvasSetGUIText
`bool hsCanvasSetGUIText(string LayerName, string GUIName, string Text)`

Sets a string to the Canvas specified by name.


### hsCanvasSetGUITextAlignment
`bool hsCanvasSetGUITextAlignment(string LayerName, string GUIName, int Alignment)`

Set the text element's alignment.



### hsCanvasSetGUITextOverflowWrap
`bool hsCanvasSetGUITextOverflowWrap(string LayerName, string GUIName, bool OverflowWrap)`

Set the text element's auto overflow wrap setting.



### hsCanvasSetGUITextURLClickable
`bool hsCanvasSetGUITextURLClickable(string LayerName, string GUIName, bool URLClickable)`

Get the URL clickable state of the text element.

### hsCanvasSetGUIImage
`bool hsCanvasSetGUIImage(string layerName, string guiName, string path)`

Sets an image on the Canvas specified by name.


### hsCanvasResetToggleDefault
`bool hsCanvasResetToggleDefault(string name)`

Resets the GUI element specified by name to its default state.


### hsCanvasToggleChange
`bool hsCanvasToggleChange(string name)`

Toggles the state of a GUI element specified by name.

### hsCanvasWorldToScreenPos
`bool hsCanvasWorldToScreenPos(Vector3 WorldPos, ref float ScreenX, ref float ScreenY)`

Convert the world position to screen position. If the position is out of range, `false` will be returned.


***