# LayerBudle クラス
Layerは縦画面・横画面のUIを同一の名前で定義できますが、これら縦横両方のLayerをまとめて取得し、操作するためにLayerBundleクラスが利用できます。

縦画面、または横画面のLayerを個別に操作したい場合は、Layerクラスを利用します。

LayerBundleを取得した後に、縦または横のLayerを個別に操作したい場合、LayerBundle.GetCurrent() を呼び出すと、Canvasの現在の向きに応じたLayerを取得できます。

また、LayerBundle.portrait または LayerBundle.landscape フィールドには、それぞれ縦と横のLayerが設定されています。

## LayerBundle の取得方法

### hsLayerGet
```
LayerBundle hsLayerGet(string LayerName)
```
引数 LayerName で指定した縦方向・横方向のLayerを、LayerBundleとして取得する関数。

縦方向・横方向どちらのLayerも存在しない場合、nullを返します。

### hsLayerGetOwnScene
```
LayerBundle hsLayerGetOwnScene(string LayerName)
```
呼び出し元コンポーネントの所属するシーンから、引数 LayerName で指定した縦方向・横方向のLayerを、LayerBundleとして取得する関数。

アクティビティ内のコードから hsLayerGetOwnScene を呼び出すと、アクティビティ内のCanvasから LayerName の検索を行います。

縦方向・横方向どちらのLayerも存在しない場合、nullを返します。

## LayerBudle のフィールド
### portrait
```
Layer portrait
```
縦画面のLayer。

### landscape
```
Layer landscape;
```
横画面のLayer。

## LayerBudle のメソッド

### ToString
```
string ToString()
```
このインスタンスが持つ情報を文字列に変換して返します。

### SetShow
```
void SetShow(bool Show)
```
縦方向・横方向のLayerの表示状態を一括で変更します。

### IsShow
```
bool IsShow()
```
縦方向・横方向のLayerの表示状態を取得します。どちらか1つでも表示されていた場合、trueを返します。

### StartLayerAnimation
```
void StartLayerAnimation(string Type, float Value)
```
縦方向・横方向のLayerから、引数 Type で指定したアニメーションを、引数 Value で指定した時間(ミリ秒)で再生します。

### GetCurrent
```
Layer GetCurrent()
```
現在の画面の回転(縦方向または横方向)に応じて、適切なLayerインスタンスを返します。

### CallComponentMethod
```
bool CallComponentMethod(string ComponentName, string MethodName, string Params)
```
縦方向・横方向のLayerに設定されているコンポーネントのメソッドを呼び出します。どちらか1つでもコンポーネントの呼び出しに成功した場合、trueを返します。

ComponentNameでコンポーネント名を、MethodNameでメソッド名を指定し、メソッドを呼び出します。その際、Paramsで指定した文字列が引数として渡されます。

呼び出せるメソッドには、以下の制限があります。

- 引数として string を 1つだけ持つこと。
- 戻り値がvoidであること。

### CanvasSetGUIText
```
bool CanvasSetGUIText(string GUIName, string Text)
```
縦方向・横方向のLayerから、引数 GUIName で指定したGUI要素を検索し、引数 Text の文字列を設定します。

縦方向・横方向どちらのLayerからもGUI要素が見つからない場合、falseを返します。

### SetGUIShow
```
bool SetGUIShow(string GUIName, bool Show)
```
縦方向・横方向のLayerから、引数 GUIName で指定したGUI要素の表示状態を変更します。

縦方向・横方向どちらのLayerからもGUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text

### CanvasSetGUITextAlignment
```
bool CanvasSetGUITextAlignment(string GUIName, int Alignment)
```
縦方向・横方向のLayerから、引数 GUIName で指定したテキストのアライメントを設定します。

縦方向・横方向どちらのLayerからもGUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### CanvasSetGUITextOverflowWrap
```
bool CanvasSetGUITextOverflowWrap(string GUIName, bool OverflowWrap)
```
縦方向・横方向のLayerから、引数 GUIName で指定したテキストの折り返しを有効化・無効化します。

縦方向・横方向どちらのLayerからもGUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### CanvasSetGUITextURLClickable
```
bool CanvasSetGUITextURLClickable(string GUIName, bool URLClickable)
```
縦方向・横方向のLayerから、引数 GUIName で指定したテキストをクリック可否を設定します。

縦方向・横方向どちらのLayerからもGUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - text

### CanvasSetGUIImage
```
bool CanvasSetGUIImage(string GUIName, string Path)
```
縦方向・横方向のLayerから、引数 GUIName で指定したGUI要素に、引数 Path で指定したURLの画像を設定します。

縦方向・横方向どちらのLayerからもGUI要素が見つからない場合、falseを返します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image

### StartGUIAnimation
```
void StartGUIAnimation(string GUIName, string Type, float Value)
```
縦方向・横方向のLayerから、引数 GUIName で指定したGUI要素に対し、引数 Type で指定したアニメーションを、引数 Value で指定した時間(ミリ秒)で再生します。

??? note "このメソッドを呼び出し可能なGUIタイプ"
    - button
    - image
    - slider
    - text
