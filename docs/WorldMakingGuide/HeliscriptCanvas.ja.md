# HeliScriptでCanvas要素を制御する

## 概要

Lib15では、hsSetLayerMask()など、Canvas要素をHeliScript上で直接操作できる関数が追加されています。  
HUD等、標準で入っているUIに対しても実行可能ですが、独自Canvas要素を作成し、そちらに対し実行するためにはやや手順を踏まないといけません。  
本記事では、その手順について紹介します。  

とりあえずLib15環境で実機で確認してみたい！という方は「テンプレート」まで飛ばしてください。

!!! note "検証環境"
    Libバージョン : 15.0 Beta
    OS : Windows 10  
    Unity : 2022.3.6f1  
    ブラウザ : Google Chrome

## 独自Canvas要素を作成する

Lib15で新しく増えたLayer・GUI関数は、Activityではなく、標準で追加されているCanvas要素に対し有効な関数です。  
まずは、独自のCanvas要素を作成するための手順について紹介します。

独自のCanvas要素は「[HSGUIModel](https://vrhikky.github.io/VketCloudSDK_Documents/latest/hs/hs_system_function_gui_HSGUIModel.html)」クラスを利用します。

※こちらの手順はLib13以降であれば可能です。  
※Activity内で実行した場合でも、メインシーンのCanvasに追加されます。

---

## ①HSGUIModelの定義

Itemクラス同様、独自のクラスであるため、新規作成は`new{で可能です。  

```
HSGUIModel _sampleModel;
_sampleModel = new HSGUIModel();
```

## ②共通パラメータの設定

GUIのパラメータを設定します。  
【必須】 - 追加しないと絶対に動きません。  
【推奨】 - 追加しなくても動きますが、追加した方が良いです。  
【任意】 - 特定環境での動作を考えなければ、追加しなくても構いません

### SetName(string name) 【推奨】

GUIの名称を設定します。  
入力しなかった場合の初期値は名称が無いため、SetNameでの設定を推奨します。

### **SetType(string type) 【必須】**

GUIのタイプを設定します。  
`image`、`text`、`button`、`slider`、`html`のどれかを必ず設定する必要があります。  
※設定しないとGUIが表示されません。

### SetPlatform(string platform) 【任意】

スマホ向けプラットフォームの有無を設定します。  
`_sp`と入力した場合、スマートフォン環境だと資材が差し替わるGUIとなります。

### SetLanguage(string language) 【任意】

`_en`と入力した場合、英語版ブラウザで入った際の差し替わりを設定します。

### SetShow(bool show) 【推奨】

GUIの表示/非表示設定です。  
入力しなかった場合の初期設定はfalse(非表示)です。

### SetPos(HS2DI Pos) 【推奨】

GUIの座標を設定します。  
入力しなかった場合の初期設定は[0,0]です。

### SetSize(HS2DI Size) 【推奨】

GUIの大きさを設定します。  
入力しなかった場合の初期設定は[100,100]です。

### SetZ(int z) 【推奨】

GUIの表示優先度を設定します。  
LayerとGUIのZの合計値が大きいほど優先して表示されます。  
入力しなかった場合の初期値は0です。

### SetRotate(float radian) 【任意】

GUIの角度を設定します。  
GUIを傾けなければ無視して良い項目となります。  
入力しなかった場合の初期値は0です。

### SetRaycastTarget(bool isRaycast) 【推奨】

GUIがマウスにあたるかどうかの設定を行います。  
入力しなかった場合の初期値はtrueです。

### SetPivot(HS2D pivot) 【推奨】

GUIのPivotを設定します。  
入力しなかった場合の初期値は[0.5,0.5]です。

GUIのAnchor(基準場所)を設定します。  
`LT`、`CT`、`RT`、`LM`、`CM`、`RM`、`LB`、`CB`、`RB`の9つから選択します。  
(左右設定：`L` = 左、`C` = 真ん中、`R` = 右　上下設定：`T` = 上端、`M` = 真ん中、`B` = 下端 の組み合わせです。)  
入力しなかった場合の初期値は`CM`です。

!!! info "HS2DI、HS2Dについて"
    Pos、Size、Pivotの設定で登場した、HS2DI、HS2Dは設定用独自クラスです。  
    中に2変数が格納されています。  
    newで定義し、SetXYで中身を編集できます。  

    HS2DIは内部変数が両方ともint型、HS2Dは内部変数が両方ともfloat型という特徴があります。  

```
// 前提 : HSGUIModel _guiModelが定義されている
HS2DI _guiSize;
_guiSize = new HS2DI();
_guiSize.SetXY(50,50); // [50,50]を設定
_guiModel.SetSize(_guiSize);
```

## ③タイプ別パラメータの設定

タイプがtextの場合、imageの場合、buttonの場合で異なる独自クラスを使用し、タイプ別パラメータを設定します。

### Textの場合

HSTextModelを使用します。  
HSGUIModel同様、Newで定義し、各専用パラメータを設定する必要があります。

```
HSTextModel _sampleTextModel;
_sampleTextModel = new HSTextModel();
```
HSTextModel専用パラメータ設定関数は以下の通りです。

### SetFontSize(int fontSize) 【推奨】

フォントサイズを指定します。
設定しなかった場合の初期値は16になります。

### SetFontFamily(string fontFamily) 【任意】

フォントファミリーを設定します。  
フォントファミリー設定はtype: Text に記載の通り、CanvasListに記載する必要があります。

標準では、BIZUDPGothicを指定した際にフォントが変わります。

### SetColor(HSColor color) 【任意】

フォントカラーを設定します。
デフォルトでは 0.0, 0.0, 0.0, 1.0 (黒)が設定されています。

### SetURLColor(HSColor color) 【任意】

URLのフォントカラーを設定します。
デフォルトでは 0.0, 0.0, 1.0, 1.0 (青)が設定されています。

### SetText(string text) 【任意】

初期テキストを設定します。

### SetAlignment 【任意】

テキストの表示位置を設定します。
`LT`、`CT`、`RT`、`LM`、`CM`、`RM`、`LB`、`CB`、`RB`の9つから選択します。
初期値はLTです。

### SetCharaSpace 【任意】

文字の間隔の設定です。
初期値は0になっています。

### SetLineSpace 【任意】

文字の行間の設定です。
初期値は0になっています。

### SetOverflowWrap 【任意】

テキストを折り返すか否かの設定です。
デフォルトではfalseになっています。

### SetURLClickable 【任意】

テキスト内のURLをクリックできるか否かの設定です。
デフォルトではfalseになっています。

!!! info "HSColorについて"
    色を設定するうえで使用する独自クラスです。  
    設定には以下のメソッドを使います。

    **SetRGB** : RGB値の入力で設定します。  
    **SetRGBA** : RGB値に加え透明度のα値も設定します。いずれも float型、最大値1です。

```
HSTextModel _textModel;
HSColor _red, _alphaGreen;
_red.SetRGB( 1.0, 0, 0 ); // 赤
_alphaGreen.SetRGBA( 0, 1.0, 0, 0.5 ); // 半透明緑
_textModel.SetColor(_red); // 通常テキスト色を赤に設定
_textModel.SetURLColor(_alphaGreen); // URLテキスト色を半透明緑に設定
```

### Imageの場合

HSImageModelを使用します。
HSGUIModel同様、Newで定義し、各専用パラメータを設定する必要があります。

```
HSImageModel _sampleImageModel;
_sampleImageModel = new HSImageModel();
```

### **SetURI(string uri) 【必須】**

画像のアドレスを設定します。

### SetUVArea(HSRect UVArea) 【任意】

画像のUVエリアを設定します。

### SetLTRB(HSRectLTRB LTRB) 【任意】

画像のLTRBを設定します。

!!! info "HSRect、HSRectLTRBについて"
    画像のUVやLTRBを設定するうえで使用する独自クラスです。  
    設定用関数にHS2DIクラスを2つ使って設定する関数とint型を4つ使って設定する関数の2つがあります。  

    ここでは、int型を4つ使って設定する関数を紹介します。  

```
HSRect _uvAreaRect;
HSRectLTRB _ltrbRect;
_uvAreaRect.SetXYWH(150,200,300,300);
_ltrbRect.SetLTRB(100,100,200,400);
```

## Buttonの場合

HSButtonModelを使用します。
HSGUIModel同様、Newで定義し、各専用パラメータを設定する必要があります。

```
HSButtonModel _sampleButtonModel;
_sampleButtonModel = new HSButtonModel();
```

### **SetFileName(string fileUri) 【必須】**

ボタンが通常状態の時の画像アドレスを指定します。

### SetOnCursorFileName(string fileUri) 【推奨】

ボタンにマウスカーソルが乗っている時の画像アドレスを指定します。

### SetDownFileName(string fileUri) 【推奨】

ボタンが押されている時の画像アドレスを指定します。

### SetClickAreaSize(HS2DI areaSize) 【推奨】

ボタンのクリック範囲を指定します。

### SetUVArea(HSRect UVArea) 【任意】

ボタン画像のUVエリアを指定します。

### SetLTRB(HSRectLTRB LTRB) 【任意】

ボタン画像のLTRBを指定します。

!!! info 
    HS2DIについては共通パラメータの設定最下部、HSRect・HSRectLTRBについてはImageの場合最下部をご覧ください。

### ④タイプ別パラメータをHSGUIModelに反映

HSGUIModelが持つ`SetTextModel`、`SetImageModel`、`SetButtonModel`のいずれかの関数を使用し、HSGUIModelにタイプ別パラメータを登録します。

### ⑤ 作成したGUIをLayer層に追加

`hsCanvasAddGUI(string Layername, bool isPortrait, HSGUIModel GUIModel)`関数を実行することで、GUIをLayer層に追加することが可能です。

以上が、GUIの作成方法です。

---

## 【Lib15以降専用】Layerを追加する

`hsAddLayer(string LayerName, bool IsPortrait, bool IsShow, int Z)`関数を使うことで、新しいLayer層を作ることが出来ます。

!!! note "引数紹介"
    **LayerName** : 追加するレイヤーのレイヤー名です。  
    **IsPortrait** : 追加するレイヤーが縦画面向けか横画面向けか決めます。  
    **IsShow** : 追加するレイヤーが初期状態で表示された状態にするかどうか決めます。  
    **Z** : 追加するレイヤーの表示優先度を決めます。  

以上を組み合わせることで、HeliScript上で独自Canvas要素を定義することが出来ます。

---

## テンプレート

以上の通り、HeliScript上で独自Canvas要素を設定するうえで必要なステップが沢山あり、非常に煩雑です。  
そこで、一連の必要な記載が確認でき、手軽に試すことが出来るテンプレートコードを用意しました。  

!!! warning 
    あくまで最低限の動作を確認するためのものです。
    詳細カスタムを行う場合は、前章で説明されているメソッドを導入してください。

Text用、Image用、Button用について、それぞれ展開に記述しています。

#### テンプレート - Text

```
void AddTextGUI(string guiName, string layerName, string guiText, int posX, int posY, int sizeX, int sizeY, int z){
    HSGUIModel guiModel;
    HS2DI guiPos, guiSize;
    HSTextModel textModel;
    
    guiModel = new HSGUIModel();
    guiPos = new HS2DI();
    guiPos.SetXY(posX, posY);
    guiSize = new HS2DI();
    guiSize.SetXY(sizeX, sizeY);
    textModel = new HSTextModel();
    
    // HSGUIModelに共通パラメータを定義
    guiModel.SetName(guiName);
    guiModel.SetType("text");
    guiModel.SetShow(true);
    guiModel.SetPos(guiPos);
    guiModel.SetSize(guiSize);
    guiModel.SetZ(z);
    guiModel.SetRotate(0);
    
    // HSTextModelに専用パラメータを定義
    textModel.SetText(guiText);
    textModel.SetOverflowWrap(true);
    textModel.SetURLClickable(true);
    
    // HSGUIModelに専用パラメータを登録
    guiModel.SetTextModel(textModel);
    
    // GUI追加用Layerの作成
    hsAddLayer(layerName, false, true, 10);
    hsAddLayer(layerName, true, true, 10);
    
    // LayerにGUI追加
    hsCanvasAddGUI(layerName, false, guiModel);
    hsCanvasAddGUI(layerName, true, guiModel);
}

// 使用例
AddTextGUI(
    "textTemplate",
    "textTempGUI",
    "Template Text",
    0, 100,
    200, 50,
    5
);
```

#### テンプレート - Image

```
void AddImageGUI(string guiName, string layerName,string fileUri, int posX, int posY, int sizeX, int sizeY, int z){
    HSGUIModel guiModel;
    HS2DI guiPos, guiSize;
    HSImageModel imageModel;
    
    guiModel = new HSGUIModel();
    guiPos = new HS2DI();
    guiPos.SetXY(posX, posY);
    guiSize = new HS2DI();
    guiSize.SetXY(sizeX, sizeY);
    imageModel = new HSImageModel();
    
    // HSGUIModelに共通パラメータを定義
    guiModel.SetName(guiName);
    guiModel.SetType("image");
    guiModel.SetShow(true);
    guiModel.SetPos(guiPos);
    guiModel.SetSize(guiSize);
    guiModel.SetZ(z);
    guiModel.SetRotate(0);
    
    // HSImageModelに専用パラメータを定義
    imageModel.SetURI(fileUri);
    
    // HSGUIModelに専用パラメータを登録
    guiModel.SetImageModel(imageModel);
    
    // GUI追加用Layerの作成
    hsAddLayer(layerName, false, true, 10);
    hsAddLayer(layerName, true, true, 10);
    
    // LayerにGUI追加
    hsCanvasAddGUI(layerName, false, guiModel);
    hsCanvasAddGUI(layerName, true, guiModel);
}

// 使用例
AddImageGUI(
    "imageTemplate",
    "imageTempGUI",
    "./Image/sample.png",
    50, 50,
    200, 200,
    5
);
```

#### テンプレート - Button

```
void AddButtonGUI(string guiName, string layerName, string normalUri, string onCursorUri, string onCursorUri, string downUri, int posX, int posY, int sizeX, int sizeY, int z){
    HSGUIModel guiModel;
    HS2DI guiPos, guiSize;
    HSButtonModel buttonModel;
    
    guiModel = new HSGUIModel();
    guiPos = new HS2DI();
    guiPos.SetXY(posX, posY);
    guiSize = new HS2DI();
    guiSize.SetXY(sizeX, sizeY);
    buttonModel = new HSButtonModel();
    
    // HSGUIModelに共通パラメータを定義
    guiModel.SetName(guiName);
    guiModel.SetType("button");
    guiModel.SetShow(true);
    guiModel.SetPos(guiPos);
    guiModel.SetSize(guiSize);
    guiModel.SetZ(z);
    guiModel.SetRotate(0);
    
    // HSButtonModelに専用パラメータを定義
    _buttonModel.SetFileName(normalUri);
    _buttonModel.SetOnCursorFileName(onCursorUri);
    _buttonModel.SetDownFileName(downUri);
    _buttonModel.SetClickAreaSize(guiSize);
}

AddButtonGUI(
    "buttonTemplate",
    "buttonTempGUI",
    "./Image/buttonsample.png",
    "./Image/buttoncursorsample.png",
    "./Image/buttondownsample.png",
    -100, 50,
    150, 150,
    5
);
```

---

## その他知見

この手法で作成したGUIはデバッグモードF2のGUI一覧に掲載されます。  
※ただし、LayerとGUIを作成し、LayerにGUIを登録した場合に限ります。  

![img](img/HeliscriptCanvas01.jpg)

Activity製GUIはここに掲載されません。