# Layer クラス

Canvas要素のLayerを操作するためのクラス。

縦画面・横画面のどちらかのレイヤーを、Layerクラスのインスタンスとして取得し、個別に操作可能です。

縦画面・横画面の両方のLayerを操作する場合、LayerBundleクラスを利用します。

## Layer の取得方法
### hsLayerGetPortrait
```
Layer hsLayerGetPortrait(string LayerName)
```
引数 LayerName で指定した縦方向のLayerを取得する関数。

Layerが存在しない場合、nullを返します。

### hsLayerGetLandscape
```
Layer hsLayerGetLandscape(string LayerName)
```
引数 LayerName で指定した横方向のLayerを取得する関数。

Layerが存在しない場合、nullを返します。

## Layer のメソッド

### ToString
```
string ToString()
```
このインスタンスが持つ情報を文字列に変換して返します。

### GetName
```
string GetName()
```
Layerの名前を返します。

### GetGUIElement
```
GUIElement GetGUIElement(string GUIName)
```
GUINameでGUI要素を検索し、GUIElementのインスタンスとして返します。

### CallComponentMethod
```
bool CallComponentMethod(string ComponentName, string MethodName, string Params)
```
Layerに設定されているコンポーネントのメソッドを呼び出します。
ComponentNameでコンポーネント名を、MethodNameでメソッド名を指定し、メソッドを呼び出します。その際、Paramsで指定した文字列が引数として渡されます。

呼び出せるメソッドには、以下の制限があります。

- 引数として string を 1つだけ持つこと。
- 戻り値がvoidであること。

### SetShow
```
void SetShow(bool Show)
```
Layerの表示状態を変更します。

### IsShow
```
bool IsShow()
```
Layerが表示状態であればtrueを返します。

### StartLayerAnimation
```
void StartLayerAnimation(string Type, float Value)
```
引数 Type で指定したアニメーションを、引数 Value で指定した時間(ミリ秒)で再生します。

### SetGUIShow
```
bool SetGUIShow(string GUIName, bool Show)
```
引数 GUIName で指定したGUI要素の表示状態を変更します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetGUIPos
```
bool SetGUIPos(string GUIName, float X, float Y)
```
引数 GUIName で指定したGUI要素の位置を設定します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### GetGUIPos
```
bool GetGUIPos(string GUIName, ref float X, ref float Y)
```
引数 GUIName で指定したGUI要素の位置を取得します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetGUISize
```
bool SetGUISize(string GUIName, float X, float Y)
```
引数 GUIName で指定したGUI要素のサイズを設定します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### GetGUISize
```
bool GetGUISize(string GUIName, ref float X, ref float Y)
```
引数 GUIName で指定したGUI要素のサイズを取得します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetGUIAngle
```
bool SetGUIAngle(string GUIName, float Angle)
```
引数 GUIName で指定したGUI要素の回転角度を設定します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### GetGUIAngle
```
bool GetGUIAngle(string GUIName, ref float Angle)
```
引数 GUIName で指定したGUI要素の回転角度を取得します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### CanvasSetGUIText
```
bool CanvasSetGUIText(string GUIName, string Text)
```
引数 GUIName で指定したGUI要素のテキストを取得します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### CanvasSetGUITextAlignment
```
bool CanvasSetGUITextAlignment(string GUIName, int Alignment)
```
引数 GUIName で指定したテキストのアライメントを設定します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### CanvasSetGUITextOverflowWrap
```
bool CanvasSetGUITextOverflowWrap(string GUIName, bool OverflowWrap)
```
引数 GUIName で指定したテキストの折り返しを有効化・無効化します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### CanvasSetGUITextURLClickable
```
bool CanvasSetGUITextURLClickable(string GUIName, bool URLClickable)
```
引数 GUIName で指定したテキストをクリックできるかどうかを設定します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### CanvasSetGUIImage
```
bool CanvasSetGUIImage(string GUIName, string Path)
```
引数 GUIName で指定したGUI要素に、引数 Path で指定したURLの画像を設定します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image

### StartGUIAnimation
```
void StartGUIAnimation(string GUIName, string Type, float Value)
```
引数 GUIName で指定したGUI要素に対し、引数 Type で指定したアニメーションを、引数 Value で指定した時間(ミリ秒)で再生します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### GetToggleState
```
bool GetToggleState(string GUIName, string ToggleName)
```
引数 GUIName で指定したGUI要素に対し、引数 ToggleName のトグル状態を取得します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### SetSliderRate
```
bool SetSliderRate(string GUIName, float Value)
```
引数 GUIName で指定したスライダーに、引数 Value の値を設定します。GUI要素が見つからない場合、falseを返します。

スライダーの値を設定すると、コンポーネントの OnSliderRateChanged コールバックが呼ばれます。

引数 Value で利用可能な値は 0 から 1 の範囲で、範囲外の値は最も近い値に丸められます。(例えば、-10を設定すると0に、+50を設定すると1に丸められます)

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - slider

### SetSliderRateWithoutNotify
```
bool SetSliderRateWithoutNotify(string GUIName, float Rate)
```
引数 GUIName で指定したスライダーに、引数 Value の値を設定します。GUI要素が見つからない場合、falseを返します。

SetSliderRate とほぼ同等のメソッドですが、コンポーネントの OnSliderRateChanged コールバックを呼び出しません。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - slider

### GetSliderRate
```
bool GetSliderRate(string GUIName, ref float Rate)
```
引数 GUIName で指定したスライダーの値を取得します。

GUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - slider
