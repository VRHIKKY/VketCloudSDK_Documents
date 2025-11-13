# GUIElement Class

A class for manipulating GUI elements on the Canvas.

## How to Get GUIElement

### hsCanvasGetGUIElement
```
GUIElement hsCanvasGetGUIElement(string LayerName, string GUIName)
```
A function that searches for the GUI element specified by the GUIName argument from the Layer specified by the LayerName argument and returns it as a GUIElement instance.

The GUI element search is performed on the Layer in the current rotation orientation (portrait or landscape).

If the GUI element specified by LayerName or GUIName argument is not found, it returns null.

### Layer.GetGUIElement
```
GUIElement GetGUIElement(string GUIName)
```
A method of the Layer class. Searches for a GUI element by the GUIName argument and returns it as a GUIElement instance.

Since a Layer class is either portrait or landscape, the GUI element obtained is performed on that Layer.

## GUIElement Methods

### GUIElement
```
GUIElement()
```
Constructor of the GUIElement class.

### ToString
```
string ToString()
```
Converts the information held by this instance to a string and returns it.

### GetName
```
string GetName()
```
Returns the name of the GUI element.

### SetShow
```
bool SetShow(bool Show) 
```
Changes the display state of the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text

### IsShow
```
bool IsShow()
```
Returns true if the GUI element is in a display state.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text

### SetPos
```
bool SetPos(float X, float Y)
```
Sets the position of the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text

### GetPos
```
bool GetPos(ref float X, ref float Y)
```
Gets the position of the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text

### SetSize
```
bool SetSize(float Width, float Height)
```
Sets the size of the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text

### GetSize
```
bool GetSize(ref float Width, ref float Height)
```
Gets the size of the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text

### SetText
```
bool SetText(string Text)
```
Sets the text of the GUI element to the string specified by the Text argument.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - text

### GetText
```
bool GetText(ref string Text)
```
Gets the text of the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - text

### SetTextColor
```
bool SetTextColor(float R, float G, float B, float A)
```
Sets the text color of the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - text

### SetTextAlignment
```
bool SetTextAlignment(int Alignment)
```
Sets the text alignment of the GUI element.

Returns false if the GUI type does not support this method call.

The following constants can be used for the Alignment argument:
```
const int GUI_TEXT_ALIGNMENT_LEFT = 0;
const int GUI_TEXT_ALIGNMENT_CENTER = 1;
const int GUI_TEXT_ALIGNMENT_RIGHT = 2;
```

??? note "GUI types that can call this method"
    - text

### SetTextOverflowWrap
```
bool SetTextOverflowWrap(bool OverflowWrap)
```
Enables or disables text wrapping.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - text

### SetTextURLClickable
```
bool SetTextURLClickable(bool URLClickable)
```
Sets whether the text can be clicked.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - text

### SetImage
```
bool SetImage(string Path)
```
Sets an image from the URL specified by the Path argument to the GUI element.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - button
    - image

### SetSliderRate
```
bool SetSliderRate(float Rate)
```
Sets the value specified by the Rate argument to the slider. Returns false if the GUI type does not support this method call.

When the slider value is set, the OnSliderRateChanged callback of the component is called.

The available values for the Rate argument are in the range of 0 to 1, and values outside the range are rounded to the nearest value. (For example, setting -10 is rounded to 0, and setting +50 is rounded to 1)

??? note "GUI types that can call this method"
    - slider

### SetSliderRateWithoutNotify
```
bool SetSliderRateWithoutNotify(float Rate)
```
Sets the value specified by the Rate argument to the slider. Returns false if the GUI type does not support this method call.

This method is almost equivalent to SetSliderRate, but does not call the OnSliderRateChanged callback of the component.

??? note "GUI types that can call this method"
    - slider

### GetSliderRate
```
bool GetSliderRate(ref float Rate)
```
Gets the value of the slider.

Returns false if the GUI type does not support this method call.

??? note "GUI types that can call this method"
    - slider

