# GUIElement クラス

CanvasのGUI要素を操作するためのクラス。

## GUIElement の取得方法

### hsCanvasGetGUIElement
```
GUIElement hsCanvasGetGUIElement(string LayerName, string GUIName)
```
引数 LayerName で指定したLayerから、引数 GUIName で指定したGUI要素を検索し、GUIElementのインスタンスとして返す関数。

GUI要素の検索は、現在の回転の向き(縦方向または横方向)のLayerに対して行われます。

引数 LayerName、または 引数 GUIName で指定したGUI要素が見つからない場合、nullを返します。

### Layer.GetGUIElement
```
GUIElement GetGUIElement(string GUIName)
```
Layerクラスのメソッド。引数 GUINameでGUI要素を検索し、GUIElementのインスタンスとして返します。

Layerクラスは縦または横方向のどちらかであるため、取得されるGUI要素はそのLayerに対して行われます。

## GUIElement のメソッド

### GUIElement
```
GUIElement()
```
GUIElement クラスのコンストラクタ。

### ToString
```
string ToString()
```
このインスタンスが持つ情報を文字列に変換して返します。

### GetName
```
string GetName()
```
GUI要素の名前を返します。

### SetShow
```
bool SetShow(bool Show) 
```
GUI要素の表示状態を変更します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### IsShow
```
bool IsShow()
```
GUI要素が表示状態であればtrueを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetPos
```
bool SetPos(float X, float Y)
```
GUI要素の位置を設定します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### GetPos
```
bool GetPos(ref float X, ref float Y)
```
GUI要素の位置を取得します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetSize
```
bool SetSize(float X, float Y)
```
GUI要素のサイズを設定します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### GetSize
```
bool GetSize(ref float X, ref float Y)
```
GUI要素のサイズを取得します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetAngle
```
bool SetAngle(float Angle)
```
GUI要素の回転角度を設定します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### GetAngle
```
bool GetAngle(ref float Angle)
```
GUI要素の回転角度を取得します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetText
```
bool SetText(string Text)
```
GUI要素にテキストを設定します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### GetText
```
bool GetText(ref string Text)
```
GUI要素のテキストを取得します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### SetTextAlignment
```
bool SetTextAlignment(int Alignment)
```
テキストのアライメントを設定します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### GetTextAlignment
```
bool GetTextAlignment(ref int Alignment)
```
テキストのアライメントを取得します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### SetTextOverflowWrap
```
bool SetTextOverflowWrap(bool OverflowWrap)
```
テキストの折り返しを有効化・無効化します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

```
bool SetTextURLClickable(bool URLClickable)
```
テキストをクリックできるかどうかを設定します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### SetImage
```
bool SetImage(string Path)
```
GUI要素に、引数 Path で指定したURLの画像を設定します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image

### SetSliderRate
```
bool SetSliderRate(float Rate)
```
スライダーに 引数 Value の値を設定します。このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

スライダーの値を設定すると、コンポーネントの OnSliderRateChanged コールバックが呼ばれます。

引数 Value で利用可能な値は 0 から 1 の範囲で、範囲外の値は最も近い値に丸められます。(例えば、-10を設定すると0に、+50を設定すると1に丸められます)

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - slider

### SetSliderRateWithoutNotify
```
bool SetSliderRateWithoutNotify(float Rate)
```
スライダーに 引数 Value の値を設定します。このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

SetSliderRate とほぼ同等のメソッドですが、コンポーネントの OnSliderRateChanged コールバックを呼び出しません。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - slider

### GetSliderRate
```
bool GetSliderRate(ref float Rate)
```
スライダーの値を取得します。

このメソッド呼び出しに対応していないGUIタイプの場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - slider

````