# 組み込み関数 - 入力

入力に関するユーティリティ関数

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
