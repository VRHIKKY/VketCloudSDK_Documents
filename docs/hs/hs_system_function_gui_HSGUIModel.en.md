# HSGUIModel - Summary

Details about the `HSGUIModel` class used for GUI elements.

## HSGUIModel - Types

```csharp
HSGUIModel() 
{
  m_Name = "";
  m_Type = "";
  m_Platform = "";
  m_Language = "";
  m_Show = false;
  m_Pos = new HS2DI();
  m_Size = new HS2DI();
  m_Size.SetXY(100,100);
  m_Z = 0;
  m_Rotate = 0.0f;
  m_RaycastTarget = true;
  m_Pivot = new HS2D();
  m_Pivot.SetXY(0.5f,0.5f);
  m_Anchor = "CM";
  m_ParamText = new HSTextModel();
  m_ParamImage = new HSImageModel();
  m_ParamButton = new HSButtonModel();
}
```

## HSGUIModel - Functions

### SetName

`void SetName(string Name)`

Sets the name of the GUI element.

### SetType

`void SetType(string Type)`

Sets the type of the GUI element.

### SetPlatform

`void SetPlatform(string Platform)`

Sets the platform for the GUI element. This can be used to adjust images based on the platform (e.g., adding "_sp" to image filenames for smartphones).

### SetLanguage

`void SetLanguage(string Language)`

Sets the language for the GUI element. This can be used to adjust images based on the language (e.g., adding "_en" to image filenames for English).

### SetShow

`void SetShow(bool Show)`

Sets whether the GUI element is visible.

### SetPos

`void SetPos(HS2DI Pos)`

Sets the position of the GUI element.

### SetSize

`void SetSize(HS2DI Size)`

Sets the size of the GUI element.

### SetZ

`void SetZ(int Z)`

Sets the Z-order of the GUI element.

### SetRotate

`void SetRotate(float Rotate)`

Sets the rotation angle of the GUI element.

### SetRaycastTarget

`void SetRaycastTarget(bool RaycastTarget)`

Sets whether the GUI element can interact with mouse events.

### SetPivot

`void SetPivot(HS2D Pivot)`

Sets the pivot point of the GUI element.

### SetAnchor

`void SetAnchor(string Anchor)`

Sets the anchor point of the GUI element. Options include `LT`, `LM`, `LB`, `CT`, `CM`, `CB`, `RT`, `RM`, `RB`.

### SetTextModel

`void SetTextModel(HSTextModel Model)`

Sets the text model for the GUI element. Details of `HSTextModel` are provided later.

### SetImageModel

`void SetImageModel(HSImageModel Model)`

Sets the image model for the GUI element. Details of `HSImageModel` are provided later.

### SetButtonModel

`void SetButtonModel(HSButtonModel Model)`

Sets the button model for the GUI element. Details of `HSButtonModel` are provided later.

---

# HSGUIModel - Common Classes

## HSColor - Summary

Represents color in the GUI.

## HSColor - Types

```csharp
HSColor()
{
  m_R = 0.0f;
  m_G = 0.0f;
  m_B = 0.0f;
  m_A = 1.0f;
}
```

## HSColor - Functions

### SetColor

`void SetColor(HSColor color)`

Sets the color using an `HSColor` object.

### SetRGB

`void SetRGB(float red, float green, float blue)`

Sets the color using RGB values.

### SetRGBA

`void SetRGBA(float red, float green, float blue, float alpha)`

Sets the color using RGBA values.

## HS2DI - Summary

Represents a 2D integer vector.

## HS2DI - Types

```csharp
HS2DI()
{
  m_X = 0;
  m_Y = 0;
}
```

## HS2DI - Functions

### SetS2DI

`void SetS2DI(HS2DI s2di)`

Sets the 2D vector using another `HS2DI` object.

### SetXY

`void SetXY(int _x, int _y)`

Sets the 2D vector using X and Y values.

## HS2D - Summary

Represents a 2D float vector.

## HS2D - Types

```csharp
HS2D()
{
  m_X = 0.0f;
  m_Y = 0.0f;
}
```

## HS2D - Functions

### SetS2DI

`void SetS2D(HS2D s2d)`

Sets the 2D vector using another `HS2D` object.

### SetXY

`void SetXY(float _x, float _y)`

Sets the 2D vector using X and Y float values.

## HSRect - Summary

Represents a rectangular area.

## HSRect - Types

```csharp
HSRect()
{
  m_Pos = new HS2DI();
  m_Size = new HS2DI();
}
```

## HSRect - Functions

### SetRect

`void SetRect(HS2DI pos, HS2DI size)`

Sets the rectangle using position and size.

### SetXYWH

`void SetXYWH(int _x, int _y, int _w, int _h)`

Sets the rectangle using X, Y, width, and height.

## HSRectLTRB - Summary

Represents a rectangle using left, top, right, and bottom coordinates.

## HSRectLTRB - Types

```csharp
HSRectLTRB()
{
  m_PosLT = new HS2DI();
  m_PosRB = new HS2DI();
}
```

## HSRectLTRB - Functions

### SetRectLTRB

`void SetRectLTRB(HS2DI LT, HS2DI RB)`

Sets the rectangle using top-left and bottom-right coordinates.

### SetLTRB

`void SetLTRB(int _l, int _t, int _r, int _b)`

Sets the rectangle using left, top, right, and bottom values.

---

# HSGUIModel - GUI Types

## HSTextModel - Summary

Represents a text element in the GUI.

## HSTextModel - Types

```csharp
HSTextModel()
{
  m_FontSize = 16;
  m_FontFamily = "";
  m_Color = new HSColor();
  m_URLColor = new HSColor();
  m_URLColor.SetRGB(0.0f,0.0f,1.0f);
  m_Text = "";
  m_Alignment = "LT";
  m_CharaSpace = 0;
  m_LineSpace = 0;
  m_OverflowWrap = false;
  m_URLClickable = false;
}
```

## HSTextModel - Functions

### SetFontSize

`void SetFontSize(int FontSize)`

Sets the font size of the text.

### SetFontFamily

`void SetFontFamily(string FontFamily)`

Sets the font family of the text.

### SetColor

`void SetColor(HSColor Color)`

Sets the color of the text.

### SetURLColor

`void SetURLColor(HSColor Color)`

Sets the color of URLs in the text.

### SetText

`void SetText(string Text)`

Sets the text content.

### SetAlignment

`void SetAlignment(string Alignment)`

Sets the alignment of the text. Options include `LT`, `LM`, `LB`, `CT`, `CM`, `CB`, `RT`, `RM`, `RB`.

### SetCharaSpace

`void SetCharaSpace(int CharaSpace)`

Sets the character spacing.

### SetLineSpace

`void SetLineSpace(int LineSpace)`

Sets the line spacing.

### SetOverflowWrap

`void SetOverflowWrap(bool OverflowWrap)`

Sets whether the text should wrap within the available space.

### SetURLClickable

`void SetURLClickable(bool URLClickable)`

Sets whether URLs in the text can be clicked.

## HSImageModel - Summary

Represents an image element in the GUI.

## HSImageModel - Types

```csharp
HSImageModel()
{
  m_Uri = "";
  m_UVArea = new HSRect();
  m_LTRB = new HSRectLTRB();
}
```

## HSImageModel - Functions

### SetURI

`void SetURI(string uri)`

Sets the URI for the image.

### SetUVArea

`void SetUVArea(HSRect UVArea)`

Sets the UV area for the image.

### SetLTRB

`void SetLTRB(HSRectLTRB LTRB)`

Sets the LTRB for the image.

## HSButtonModel - Summary

Represents a button element in the GUI.

## HSButtonModel - Types

```csharp
HSButtonModel()
{
  m_FileName = "";
  m_OnCursorFileName = "";
  m_DownFileName = "";
  m_ClickAreaSize = new HS2DI();
  m_UVArea = new HSRect();
  m_LTRB = new HSRectLTRB();
  m_OnKeyDownMulColor = new HSColor();
  m_OnKeyDownMulColor.SetRGB(1.0f,1.0f,1.0f);
}
```

## HSButtonModel - Functions

### SetFileName

`void SetFileName(string FileName)`

Sets the URI for the button's normal state image.

### SetOnCursorFile

Name
`void SetOnCursorFileName(string OnCursorFileName)`

Sets the URI for the button's hover state image.

### SetDownFileName

`void SetDownFileName(string DownFileName)`

Sets the URI for the button's clicked state image.

### SetClickAreaSize

`void SetClickAreaSize(HS2DI ClickAreaSize)`

Sets the clickable area of the button.

### SetUVArea

`void SetUVArea(HSRect UVArea)`

Sets the UV area for the button's image.

### SetLTRB

`void SetLTRB(HSRectLTRB LTRB)`

Sets the LTRB for the button's image.
