# built-in functions - GUI

!!! Note Info
    Utility functions that manipulate GUI elements.

***

## Functions

### hsCanvasSetLayerShow

`bool hsCanvasSetLayerShow(string layerName, bool show)`

Shows the layer specified by name with true and hides it with false.

### hsCanvasSuspendVisibleLayers

`bool hsCanvasSuspendVisibleLayers()`

Temporarily hides all currently visible layers. The display state can be restored by calling hsCanvasResumeVisibleLayers().<br>
If already suspended, `false` will be returned.

### hsCanvasResumeVisibleLayers

`bool hsCanvasResumeVisibleLayers()`

Restores the layers that were hidden by hsCanvasSuspendVisibleLayers().<br>
If not suspended, `false` will be returned.

## hsAddLayer
`void hsAddLayer(string LayerName, bool IsPortrait, bool IsShow, int Z)`
Adds a layer.

## hsSetLayerName
`void hsSetLayerName(string LayerName, bool IsPortrait, string Name)`
Changes the name of a layer.

## hsSetLayerZ
`void hsSetLayerZ(string LayerName, bool IsPortrait, int Z)`
Changes the Z value of a layer.

## hsSetLayerProjectName
`void hsSetLayerProjectName(string LayerName, bool IsPortrait, string ProjectName)`
Changes the ProjectName of a layer.

## hsSetLayerComponentNameList
`void hsSetLayerComponentNameList(string LayerName, bool IsPortrait, string ComponentNameList)`
Changes the ComponentNameList of a layer.

## hsSetLayerSpreadMode
`void hsSetLayerSpreadMode(string LayerName, bool IsPortrait, bool SpreadMode)`
Changes the SpreadMode of a layer.

## hsSetLayerMask
`void hsSetLayerMask(string LayerName, bool IsPortrait, string URI, int PosX, int PosY, int SizeX, int SizeY, float PivoX, float PivoY, string Anchor, int Z, float ColorR, float ColorG, float ColorB, float ColorA, bool Show, bool Vertical, bool FreeSlide, int WheelTravel)`
Changes the Mask of a layer.

## hsSetLayerMaskShow
`void hsSetLayerMaskShow(string LayerName, bool IsPortrait, bool IsShow)`
Displays the Mask of a layer. *For verification purposes.*

## hsSetLayerSeekBarVertical
`void hsSetLayerSeekBarVertical(string LayerName, bool IsPortrait, string Base, string Front, string On, string Off, int BarWidth, int OnSizeX, int OnSizeY, int OffSizeX, int OffSizeY)`
Changes the vertical SeekBar of a layer.

## hsSetLayerSeekBarHorizontal
`void hsSetLayerSeekBarHorizontal(string LayerName, bool IsPortrait, string Base, string Front, string On, string Off, int BarWidth, int OnSizeX, int OnSizeY, int OffSizeX, int OffSizeY)`
Changes the horizontal SeekBar of a layer.

## hsSetLayerSeekBarRate
`void hsSetLayerSeekBarRate(string LayerName, bool IsPortrait, float RateX, float RateY)`
Changes the SeekBar rate of a layer.

## hsReleaseLayer
`void hsReleaseLayer(string LayerName, bool IsPortrait)`
Deletes a layer.

## hsReserveReleaseLayer
`void hsReserveReleaseLayer(string LayerName, bool IsPortrait)`
Schedules a layer for deletion.

### hsCanvasSetGUIShow

`bool hsCanvasSetGUIShow(string layerName, string guiName, bool show)`

Shows the Canvas specified by name with true and hides it with false.

### hsCanvasSetGUIPos

`bool hsCanvasSetGUIPos(string LayerName, bool IsPortrait, string GUIName, float X, float Y)`

Sets the GUI element's position as the designated value.

### hsCanvasGetGUIPos

`bool hsCanvasGetGUIPos(string LayerName, bool IsPortrait, string GUIName, ref float X, ref float Y)`

Gets the GUI element's position value.

### hsCanvasSetGUIText

`bool hsCanvasSetGUIText(string LayerName, string GUIName, string Text)`

Sets a string to the Canvas specified by name.

!!! warning "About using commas (,) in text"
    We have confirmed that there is currently a bug where text display fails when commas (,) are used in the text.Please avoid using commas (,).

### hsCanvasSetGUITextAlignment

`bool hsCanvasSetGUITextAlignment(string LayerName, string GUIName, int Alignment)`

Sets the text element's alignment.

### hsCanvasSetGUITextOverflowWrap

`bool hsCanvasSetGUITextOverflowWrap(string LayerName, string GUIName, bool OverflowWrap)`

Sets the text element's auto overflow wrap setting.

### hsCanvasSetGUITextURLClickable

`bool hsCanvasSetGUITextURLClickable(string LayerName, string GUIName, bool URLClickable)`

Gets the URL clickable state of the text element.

### hsCanvasSetGUIImage

`bool hsCanvasSetGUIImage(string layerName, string guiName, string path)`

Sets an image on the Canvas specified by name.

### hsCanvasResetToggleDefault

`bool hsCanvasResetToggleDefault(string toggleName)`

Resets the Toggle specified by name to its default state.

### hsCanvasToggleChange

`bool hsCanvasToggleChange(string toggleName)`

Changes the state of a Toggle specified by name.

### hsCanvasWorldToScreenPos

`bool hsCanvasWorldToScreenPos(Vector3 WorldPos, ref float ScreenX, ref float ScreenY)`

Converts the world position to screen position. 

The resulting screen coordinates (ScreenX, ScreenY) are returned using a coordinate system with the top-left corner of the screen as the origin.

If the position is out of range, `false` will be returned.

### hsCanvasIsPortrait

`bool hsCanvasIsPortrait()`

Returns a bool value whether the screen is in portrait or landscape.

### hsCanvasSetConfigClosedFlag

`void hsCanvasSetConfigClosedFlag(bool Flag)`

Toggles the show status of configuration window.

***

### hsCanvasAddGUI

`void hsCanvasAddGUI(string LayerName, bool IsPortrait, HSGUIModel Model)`

Adds a GUI by searching a Layer by LayerName, with determining whether screen is in portrait or landscape by IsPortrait.

HelScript Example:
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

For details about HSGUIModel class, see [HSGUIModel - Summary](./hs_system_function_gui_HSGUIModel.md).

***

### hsCanvasSetGUISize

`bool hsCanvasSetGUISize(string LayerName, bool IsPortrait, string GUIName, float X, float Y)`

Set the size of GUI.

### hsCanvasGetGUISize

`bool hsCanvasGetGUISize(string LayerName, bool IsPortrait, string GUIName, ref float X, ref float Y)`

Get the size of GUI.

### hsCanvasSetGUIAngle

`bool hsCanvasSetGUIAngle(string LayerName, bool IsPortrait, string GUIName, float Angle)`

Set the angle of GUI.

### hsCanvasGetGUIAngle

`bool hsCanvasGetGUIAngle(string LayerName, bool IsPortrait, string GUIName, ref float Angle)`

Get the angle of GUI.

## hsAddGUI
`void hsAddGUI(string LayerName, bool IsPortrait, int Type, string GuiParam, string TypeParam)`
Adds a GUI.

## hsReleaseGUI
`void hsReleaseGUI(string LayerName, bool IsPortrait, string GUIName)`
Deletes a GUI.

## hsAddGUIAction
`void hsAddGUIAction(string LayerName, bool IsPortrait, string GUIName)`
Adds a GUIAction to a GUI.

## hsAddGUIToggle
`void hsAddGUIToggle(string LayerName, string GUIName, string ToggleName, bool state)`
Adds a GUIToggle to a GUI.

### hsAddGUIImage

`void hsAddGUIImage(string LayerName, bool IsPortrait, 
    string GUIName, string Platform, string Language, string Portrait, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string URI, int UVAreaX, int UVAreaY, int UVAreaWidth, int UVAreaHeight, int L, int R, int T, int B)`

Adds a image type GUI by searching a Layer by LayerName, with determining whether screen is in portrait or landscape by IsPortrait.

### hsAddGUIButton

`void hsAddGUIButton(string LayerName, bool IsPortrait, 
string GUIName, string Platform, string Language, string Portrait, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
string FileName, string OnCursorFileName, string DownFileName, string ClickAreaFileName, int ClickAreaSizeX, int ClickAreaSizeY, float FlickCheckTime, float FlickLengthThreshold,
int UVAreaX, int UVAreaY, int UVAreaWidth, int UVAreaHeight, int L, int R, int T, int B)`

Adds a button type GUI by searching a Layer by LayerName, with determining whether screen is in portrait or landscape by IsPortrait.

### hsAddGUIText

`hsAddGUIText(string LayerName, bool IsPortrait,
    string GUIName, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string Text, string FontFamily, int FontSize, float ColorR, float ColorG, float ColorB, float ColorA, string Alignment, int CharaSpace, int LineSpace, bool IsOverflowWrap,
	bool URLClickable, float URLColorR, float URLColorG, float URLColorB, float URLColorA
)`

Adds a text type GUI by searching a Layer by LayerName, with determining whether screen is in portrait or landscape by IsPortrait.

### hsGetTextAreaContentSize

`void hsGetTextAreaContentSize(string LayerName, string GUIName, ref int width, ref int height)`

Retrieves the original width and height of the text content in a GUI TextArea.

## Window System
Enable the creation of modal and modeless windows (hereafter collectively referred to as the window system).

- The window system operates independently of the layer system, using layer manipulation to achieve its functionality.
- The window system does not handle the creation or deletion of layers but controls the Z-value reconfiguration and visibility of layers.
- A modeless window can be added as a child to a modal window.
  - In modal mode, only the modal window and its child modeless windows can receive input.
- Modeless windows can be set for layers that are not in a modal state.
- When pushing a modal window, there is an option to hide other modal windows (and their child modeless windows). These hidden windows are re-displayed upon popping.
- When a modal window is popped, its associated layer and child modeless windows are hidden.
- When there is a change in the top-level modal window (e.g., pushing a new modal window or popping the current top-level modal window), the newly activated modal window's Z-value is adjusted to bring it to the forefront.

### API Functions

```
hsWindowModalPush(string layerName, bool hideOther);
```
Push the specified layer as the top-level modal window. The layer becomes visible and enters modal mode.  
If `hideOther = true`, other modal windows and their child modeless windows are temporarily hidden.

```
hsWindowModalPop();
```
Pop the top-level modal window. The modal state reverts to the previous modal window.  
The layer associated with the popped modal window becomes hidden.  
All child modeless windows of the popped modal window are removed, and their layers are hidden.  
If `hideOther = true` was set during the push, the temporarily hidden windows are restored to their previous visibility state.

```
hsWindowModalPopUntil(string layerName);
```
Pop modal windows until the specified layer becomes the top-level modal window.

```
hsWindowModelessAdd(string layerName);
```
Add the specified layer as a child modeless window to the top-level modal window. The visibility state of the layer is not changed.

```
hsWindowModelessRemove(string layerName);
```
Remove the specified layer from the child modeless windows of the top-level modal window. The layer becomes hidden.

```
hsWindowModelessShowOnly(string layerName);
```
Show only the specified layer among the child modeless windows of the top-level modal window, hiding all others.

```
hsWindowModelessShowAll(bool isShown);
```
Show or hide all child modeless windows of the top-level modal window. Use `isShown` to specify the desired visibility state.

```
hsWindowClear();
```
Remove all modal windows and their child modeless windows, setting all associated layers to a hidden state.
