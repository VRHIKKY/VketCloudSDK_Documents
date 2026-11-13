# 組み込み関数 - 入力

入力に関するユーティリティ関数
***

# HSTouch クラス

タッチの結果を受け取るクラス。

## クラス定義

```
class HSTouch
{
    public  bool    isTouched;
    public  bool    isEmptyTouch;
    public  int		posX;
    public  int		posY;
}
```

***


## メンバ変数
### isTouched
`public  bool    isTouched`

タッチがあったときtrueを返します。

### isEmptyTouch
`public  bool    isEmptyTouch`

タッチがUIやクリッカブルノードなどクリック可能オブジェクトに何も当たらなかった時trueを返します。

### posX
`public  int posX`

タッチがあったときのスクリーンX座標（左上 0, 0）。

### posY
`public  int posY`

タッチがあったときのスクリーンY座標（左上 0, 0）。


***


### hsInputIsKeyDown
`bool hsInputIsKeyDown(int KeyCode)`

指定したキーが押されているかを取得します。KeyCodeはキーコード表の定数を指定します。

以下のhsInputSetKeyValidと共に利用することをお勧めします。


### hsInputSetKeyValid
`void hsInputSetKeyValid(int KeyCode, bool Valid)`

指定したキーをHeliodor側で有効にするかどうかを指定します。KeyCodeはキーコード表の定数を指定します。

falseを設定することでHeliodor側ではキーが押されていないと判断されるようになります。例えば、hsInputSetKeyValid(HSKey_Space, false)を呼び出すことで、プレイヤーアバターがジャンプしないように抑止することが可能です。HeliScript側でhsInputIsKeyDownを利用する場合は先に抑止し、利用が終わったら戻すことでHeliodor側の機能と衝突することを避けられるため設定することをお勧めします。


***

### キーコード表

|キーコード|説明|
|----|----|
|HSKey_Back			|BackSpaceキー|
|HSKey_Tab			||
|HSKey_Return		|Enterキー|
|HSKey_Shift		||
|HSKey_Control		||
|HSKey_Escape		||
|HSKey_Space		||
|HSKey_Prior		|PageUpキー|
|HSKey_Next			|PageDownキー|
|HSKey_End			||
|HSKey_Home			||
|HSKey_Left			||
|HSKey_Up			||
|HSKey_Right		||
|HSKey_Down			||
|HSKey_Insert		||
|HSKey_Delete		||
|HSKey_0			||
|HSKey_1			||
|HSKey_2			||
|HSKey_3			||
|HSKey_4			||
|HSKey_5			||
|HSKey_6			||
|HSKey_7			||
|HSKey_8			||
|HSKey_9			||
|HSKey_A			||
|HSKey_B			||
|HSKey_C			||
|HSKey_D			||
|HSKey_E			||
|HSKey_F			||
|HSKey_G			||
|HSKey_H			||
|HSKey_I			||
|HSKey_J			||
|HSKey_K			||
|HSKey_L			||
|HSKey_M			||
|HSKey_N			||
|HSKey_O			||
|HSKey_P			||
|HSKey_Q			||
|HSKey_R			||
|HSKey_S			||
|HSKey_T			||
|HSKey_U			||
|HSKey_V			||
|HSKey_W			||
|HSKey_X			||
|HSKey_Y			||
|HSKey_Z			||
|HSKey_Numpad0		||
|HSKey_Numpad1		||
|HSKey_Numpad2		||
|HSKey_Numpad3		||
|HSKey_Numpad4		||
|HSKey_Numpad5		||
|HSKey_Numpad6		||
|HSKey_Numpad7		||
|HSKey_Numpad8		||
|HSKey_Numpad9		||
|HSKey_Multiply		||
|HSKey_Add			||
|HSKey_Separator	||
|HSKey_Subtract		||
|HSKey_Decimal		||
|HSKey_Divide		||
|HSKey_F1			||
|HSKey_F2			||
|HSKey_F3			||
|HSKey_F4			||
|HSKey_F5			||
|HSKey_F6			||
|HSKey_F7			||
|HSKey_F8			||
|HSKey_F9			||


### hsInputClickButton
`bool hsInputClickButton( int hsMouseButton )`

指定したマウスキーが押されているかを取得します。hsMouseButtonはマウスキーコード表の定数を指定します。

### hsInputGetMousePos
`void hsInputGetMousePos( ref int screenX, ref int screenY )`

マウスの座標（スクリーン座標）を取得します。左上が(0, 0)になります。

### hsInputLButtonClickEmpty
`bool hsInputLButtonClickEmpty()`

マウスを左クリックしたときにUIやクリッカブルノードなどクリック可能オブジェクトに何も当たらなかった場合trueを返します。

### マウスキーコード表

|キーコード|説明|
|----|----|
|HSMouse_Left		|左クリック|
|HSMouse_Center		|センタークリック|
|HSMouse_Right		|右クリック|

### hsInputGetTouch
`HSTouch hsInputGetTouch( int index )`

タッチ情報を返します。index は、N番目にタッチされたインデックスを指定します。
＊1番目のタッチ情報が欲しければ (N-1) を index に指定してください。
タッチ情報が指が画面に触れている間だけ取得することができます。画面タッチ時のUIやクリッカブルノードへのレイキャストは指が離れたときに実行されます。
そのためOnClickEmpty・OnClickNode・OnClickedButton・OnClickedAvatarコールバックではタッチ情報を取得できないことに注意してください。

実装例
```
component TouchTest
{
    bool m_Touched;

    public void Update()
    {
        if(hsIsMobile())
        {
            // 1本目のインプット状況をチェック
            // UIやクリッカブルノードに対するタッチの時は無視したいのでisEmptyTouchもチェックする
            HSTouch touch = hsInputGetTouch(0);
            if(touch.isTouched && touch.isEmptyTouch)
            {
                if(!m_Touched)
                {
                    m_Touched = true;

                    // タッチ処理
                }
            }
            else
            {
                m_Touched = false;
            }
        }
    }
}
```

### hsInputGetTouchCount
`int hsInputGetTouchCount()`

現在タッチされている指の本数を返します。

```
int num = hsInputGetTouchCount();
```

### hsInputGetTouchIds
`list<int> hsInputGetTouchIds()`

現在タッチされている指のIDを、タッチを開始した順に配列で返します。
タッチしていない場合は空配列を返します。

```
list<int> ids = hsInputGetTouchIds();
```

### hsInputGetTouchById
`HSTouch hsInputGetTouchById( int id )`

タッチ情報を返します。idは、hsInputGetTouchIds()の返すIDを指定します。
指定したIDが現在のタッチ情報に含まれない場合(指が離れた場合)はnullを返します。
タッチ情報が指が画面に触れている間だけ取得することができます。画面タッチ時のUIやクリッカブルノードへのレイキャストは指が離れたときに実行されます。
そのためOnClickEmpty・OnClickNode・OnClickedButton・OnClickedAvatarコールバックではタッチ情報を取得できないことに注意してください。


実装例
```
component TouchTest
{
    bool m_Touched;

    public void Update()
    {
        if(hsIsMobile())
        {
            list<int> ids = hsInputGetTouchIds();
            if (ids.Count() == 0) {
                // タッチされていない場合
                m_Touched = false;
                return;
            }
            // ここではもっとも早く触リ始めた指だけ扱う
            HSTouch touch = hsInputGetTouchById(ids[0]);
            if(touch.isTouched && touch.isEmptyTouch)
            {
                if(!m_Touched)
                {
                    m_Touched = true;

                    // タッチ処理
                }
            }
            else
            {
                m_Touched = false;
            }
        }
    }
}
```

### hsInputIsInVirtualPadArea
`bool hsInputIsInVirtualPadArea(int x, int y)`

指定されたスクリーン座標がバーチャルパッドの上であればtrueを、そうでなければfalseを返します。

```
HSTouch touch = hsInputGetTouch(0);

int x = touch.posX;
int y = touch.posY;

bool result = hsInputIsInVirtualPadArea(x, y);
```

### hsInputScreenToWorldPos

`bool hsInputScreenToWorldPos(int screenX, int screenY, ref Vector3 worldPosition)`

スクリーン座標を3D座標に変換します。スクリーン座標にはhsInputGetMousePosやhsInputGetTouchから取得した座標をそのまま使うことができます。

```
HSTouch touch = hsInputGetTouch(0);

int x = touch.posX;
int y = touch.posY;

Vector3 touch3DPos = new Vector3();
hsInputScreenToWorldPos(x, y, touch3DPos);
```

### VRデバイスキーコード表

|キーコード|説明|
|----|----|
|HSVRDevice_LeftHand		|左手コントローラー|
|HSVRDevice_RightHand		|右手コントローラー|
|HSVRDevice_NoneHand		|コントローラーなし|

### VRボタンキーコード表

|キーコード|説明|
|----|----|
|HSVRButton_Trigger		    |トリガー|
|HSVRButton_Grip		    |グリップ|
|HSVRButton_AxisPush		|タッチパッド押し込み(もしくはレバー押し込み)|
|HSVRButton_Unavailable		|利用不可ボタン|
|HSVRButton_Primary		    |左手の場合Aボタン、右手の場合Xボタン|
|HSVRButton_Secondary		|左手の場合Bボタン、右手の場合Yボタン|

### hsInputIsVRDeviceButtonDown

`bool hsInputIsVRDeviceButtonDown(int DeviceIndex, int ButtonType)`

引数で指定したVRデバイスのボタンが押されている間はtrueを、押されていなければfalseを返します。

### hsInputGetVRDevicePos

`Vector3 hsInputIsVRDeviceButtonDown(int DeviceIndex)`

引数で指定したVRデバイスのワールド座標を返します。

### hsInputIsVRDeviceButtonDown

`Vector3 hsInputGetVRDeviceRotate(int DeviceIndex)`

引数で指定したVRデバイスのワールド回転をオイラー角で返します。
