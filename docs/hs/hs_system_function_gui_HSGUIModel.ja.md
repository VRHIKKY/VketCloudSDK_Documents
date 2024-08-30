# HSGUIModel - Summary

GUI要素のHSGUIModelクラス詳細

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

GUIのNameを設定する。

### SetType

`void SetType(string Type)`

GUIのTypeを設定する。

### SetPlatform

`void SetPlatform(string Platform)`

GUIのPlatformを設定する。

使用想定はスマホかPCでButtonやImageの画像を変更したい場合で、

"_sp"を設定した場合、画像の名前の語尾にその文字列を追加し、画像を差し替えることが出来る。

### SetLanguage

`void SetLanguage(string Language)`

GUIのLanguageを設定する。

使用想定はButtonやImageの画像を変更したい場合で、

"_en"を設定した場合、画像の名前の語尾にその文字列を追加し、画像を差し替えることが出来る。

### SetShow

`void SetShow(bool Show)`

GUIの表示/非表示を設定する。

### SetPos

`void SetPos(HS2DI Pos)`

GUIの座標を設定する。

### SetSize

`void SetSize(HS2DI Size)`

GUIの大きさを設定する。

### SetZ

`void SetZ(int Z)`

GUIのZ軸を設定する。

### SetRotate

`void SetRotate(float Rotate)`

GUIの角度を設定する。

### SetRaycastTarget

`void SetRaycastTarget(bool RaycastTarget)`

GUIがマウスに当たるかどうかを設定する。

### SetPivot

`void SetPivot(HS2D Pivot)`

GUIのPivotを設定する。

### SetAnchor

`void SetAnchor(string Anchor)`

GUIのAnchorを設定する。

Anchorには`LT`,`LM`,`LB`,`CT`,`CM`,`CB`,`RT`,`RM`,`RB`が設定できる。

### SetTextModel

`void SetTextModel(HSTextModel Model)`

GUIのTextModelを設定できる。

TextModelについては、後述する。

### SetImageModel

`void SetImageModel(HSImageModel Model)`

GUIのImageModelを設定できる。

ImageModelについては、後述する。

### SetButtonModel

`void SetButtonModel(HSButtonModel Model)`

GUIのButtonModelを設定できる。

ButtonModelについては、後述する。
***

## HSGUIModel - 汎用クラス

## HSColor - Summary

HSColorクラス

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

HSColor型で色を設定する。

### SetRGB

`void SetRGB(float red,float green,float blue)`

float型の`R`,`G`,`B`で色を設定する。

### SetRGBA

`void SetRGBA(float red,float green,float blue,float alpha)`

float型の`R`,`G`,`B`,`A`で色を設定する。

## HS2DI - Summary

HS2DIクラス

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

HS2DI型で2DIを設定する。

### SetXY

`void SetXY(int _x,int _y)`

int型の`X`,`Y`で2DIを設定する。

## HS2D - Summary

HS2Dクラス

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

HS2D型で2Dを設定する。

### SetXY

`void SetXY(float _x,float _y)`

float型の`X`,`Y`で2Dを設定する。

## HSRect - Summary

HSRectクラス

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

`void SetRect(HS2DI pos,HS2DI size)`

HS2DI型の座標と大きさでRectを設定する。

### SetXYWH

`void SetXYWH(int _x,int _y,int _w,int _h)`

`x`,`y`,`width`,`height`でRectを設定する。

## HSRectLTRB - Summary

HSRectLTRBクラス

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

`void SetRectLTRB(HS2DI LT,HS2DI RB)`

HS2DI型の右上と左下の座標と大きさでRectLTRBを設定する。

### SetLTRB

`void SetLTRB(int _l,int _t,int _r,int _b)`

`left`,`top`,`right`,`bottom`でRectLTRBを設定する。

## HSGUIModel - GUIType

## HSTextModel - Summary

HSTextModel クラス

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

Textのフォントサイズを設定する。

### SetFontFamily

`void SetFontFamily(string FontFamily)`

TextのFontFamilyを設定する。

### SetColor

`void SetColor(HSColor Color)`

Textの色を設定する。

### SetURLColor

`void SetURLColor(HSColor Color)`

TextのURLの色を設定する。

### SetText

`void SetText(string Text)`

Textの文字を設定する。

### SetAlignment

`void SetAlignment(string Alignment)`

Textの表示位置を設定する。

Alignmentには`LT`,`LM`,`LB`,`CT`,`CM`,`CB`,`RT`,`RM`,`RB`が設定できる。

### SetCharaSpace

`void SetCharaSpace(int CharaSpace)`

Textの間隔を設定する。

### SetLineSpace

`void SetLineSpace(int LineSpace)`

Textの上下の間隔を設定する。

### SetOverflowWrap

`void SetOverflowWrap(bool OverflowWrap)`

Textの範囲内で折り返すかどうかを設定する。

### SetURLClickable

`void SetURLClickable(bool URLClickable)`

TextのURLをクリックできるかどうかを設定をする。

## HSImageModel - Summary

HSImageModel クラス

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

画像のアドレスを設定する。

### SetUVArea

`void SetUVArea(HSRect UVArea)`

画像のUVAreaを設定する。

### SetLTRB

`void SetLTRB(HSRectLTRB LTRB)`

画像のLTRBを設定する。

## HSButtonModel - Summary

HSButtonModel クラス

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

Buttonが通常時の画像のURIを設定する。

### SetOnCursorFileName

`void SetOnCursorFileName(string OnCursorFileName)`

Buttonがマウスカーソルが乗っている時の画像のURIを設定する。

### SetDownFileName

`void SetDownFileName(string DownFileName)`

Buttonがマウスカーソルがクリックされている時の画像のURIを設定する。

### SetClickAreaSize

`void SetClickAreaSize(HS2DI ClickAreaSize)`

Buttonのクリック範囲を設定する。

### SetUVArea

`void SetUVArea(HSRect UVArea)`

Buttonの画像のUVAreaの設定をする。

### SetLTRB

`void SetLTRB(HSRectLTRB LTRB)`

Buttonの画像のLTRBの設定をする。
