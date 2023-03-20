
# built-in functions - GUI

Utility functions that manipulate GUI elements.


***


### hsCanvasSetLayerShow(string, bool)
`bool hsCanvasSetLayerShow(string layerName, bool show)`

Shows the layer specified by name with true and hides it with false.

### hsCanvasSetGUIShow(string, string, bool)
`bool hsCanvasSetGUIShow(string layerName, string guiName, bool show)`

Shows the Canvas specified by name with true and hides it with false.

### hsCanvasSetGUIText(string, string, string)
`bool hsCanvasSetGUIText(string layerName, string guiName, string text)`

Sets a string to the Canvas specified by name.

### hsCanvasSetGUIImage(string, string, string)
`bool hsCanvasSetGUIImage(string layerName, string guiName, string path)`

Sets an image on the Canvas specified by name.

### hsCanvasResetToggleDefault(string)
`bool hsCanvasResetToggleDefault(string name)`

Resets the GUI element specified by name to its default state.

### hsCanvasToggleChange(string)
`bool hsCanvasToggleChange(string name)`

Toggles the state of a GUI element specified by name.


***