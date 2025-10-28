# LayerBundle Class

Layers can define portrait and landscape UIs with the same name, and the LayerBundle class can be used to collectively retrieve and manipulate both portrait and landscape Layers.

If you want to manipulate portrait or landscape Layers individually, use the Layer class.

After obtaining a LayerBundle, if you want to manipulate portrait or landscape Layers individually, calling LayerBundle.GetCurrent() will get the Layer corresponding to the current orientation of the Canvas.

Also, the LayerBundle.portrait and LayerBundle.landscape fields contain the portrait and landscape Layers respectively.

## How to Get LayerBundle

### hsLayerGet
```
LayerBundle hsLayerGet(string LayerName)
```
A function that gets the portrait and landscape Layers specified by the LayerName argument as a LayerBundle.

Returns null if neither portrait nor landscape Layer exists.

### hsLayerGetOwnScene
```
LayerBundle hsLayerGetOwnScene(string LayerName)
```
A function that gets the portrait and landscape Layers specified by the LayerName argument as a LayerBundle from the scene to which the calling component belongs.

When hsLayerGetOwnScene is called from code within an activity, it searches for LayerName from the Canvas within the activity.

Returns null if neither portrait nor landscape Layer exists.

## LayerBundle Fields

### portrait
```
Layer portrait
```
The portrait Layer.

### landscape
```
Layer landscape;
```
The landscape Layer.

## LayerBundle Methods

### ToString
```
string ToString()
```
Converts the information held by this instance to a string and returns it.

### SetShow
```
void SetShow(bool Show)
```
Changes the display state of portrait and landscape Layers collectively.

### IsShow
```
bool IsShow()
```
Gets the display state of portrait and landscape Layers. Returns true if at least one is displayed.

### StartLayerAnimation
```
void StartLayerAnimation(string Type, float Value)
```
Plays the animation specified by the Type argument for the time (in milliseconds) specified by the Value argument from the portrait and landscape Layers.

### GetCurrent
```
Layer GetCurrent()
```
Returns the appropriate Layer instance according to the current screen rotation (portrait or landscape).

### CallComponentMethod
```
bool CallComponentMethod(string ComponentName, string MethodName, string Params)
```
Calls methods of components set in portrait and landscape Layers. Returns true if at least one component call succeeds.

Specify the component name with ComponentName and the method name with MethodName to call the method. The string specified by Params is passed as an argument.

Callable methods have the following restrictions:

- Must have only one string argument.
- Return value must be void.

### CanvasSetGUIText
```
bool CanvasSetGUIText(string GUIName, string Text)
```
Searches for the GUI element specified by the GUIName argument from portrait and landscape Layers and sets the string specified by the Text argument.

Returns false if the GUI element is not found in either portrait or landscape Layer.

### SetGUIShow
```
bool SetGUIShow(string GUIName, bool Show)
```
Changes the display state of the GUI element specified by the GUIName argument from portrait and landscape Layers.

Returns false if the GUI element is not found in either portrait or landscape Layer.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text

### CanvasSetGUITextAlignment
```
bool CanvasSetGUITextAlignment(string GUIName, int Alignment)
```
Sets the alignment of the text specified by the GUIName argument from portrait and landscape Layers.

Returns false if the GUI element is not found in either portrait or landscape Layer.

??? note "GUI types that can call this method"
    - text

### CanvasSetGUITextOverflowWrap
```
bool CanvasSetGUITextOverflowWrap(string GUIName, bool OverflowWrap)
```
Enables or disables text wrapping for the text specified by the GUIName argument from portrait and landscape Layers.

Returns false if the GUI element is not found in either portrait or landscape Layer.

??? note "GUI types that can call this method"
    - text

### CanvasSetGUITextURLClickable
```
bool CanvasSetGUITextURLClickable(string GUIName, bool URLClickable)
```
Sets whether the text specified by the GUIName argument can be clicked from portrait and landscape Layers.

Returns false if the GUI element is not found in either portrait or landscape Layer.

??? note "GUI types that can call this method"
    - text

### CanvasSetGUIImage
```
bool CanvasSetGUIImage(string GUIName, string Path)
```
Sets an image from the URL specified by the Path argument to the GUI element specified by the GUIName argument from portrait and landscape Layers.

Returns false if the GUI element is not found in either portrait or landscape Layer.

??? note "GUI types that can call this method"
    - button
    - image

### StartGUIAnimation
```
void StartGUIAnimation(string GUIName, string Type, float Value)
```
Plays the animation specified by the Type argument for the time (in milliseconds) specified by the Value argument on the GUI element specified by the GUIName argument from portrait and landscape Layers.

??? note "GUI types that can call this method"
    - button
    - image
    - slider
    - text
