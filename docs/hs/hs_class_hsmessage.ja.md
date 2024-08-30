
# HSMessageクラス

HSMessage は、Itemの間で送受信可能なメッセージです。
HSMessage を生成し、任意のItemに対して送信することができます。

HSMessageにはint, float, bool, stringで表現されるデータを保存できます。同時に送信者の情報も設定可能であり、これを利用してメッセージの送受信(往復)も可能になっています。

なお、HSMessageには自身のインスタンスを戻り値として返すメソッドが多くあるので、以下の例のようにメソッドを繋げて処理を継続することができます。

```
// メッセージを作成する。
HSMessage message = hsCreateSelfMessage("EnemyData").AddInt("damage", 120).AddBool("visible", false);
// 送信対象のItemへメッセージを送信する
Item receiver = hsItemGet("enemyobj");
receiver.SendMessage(message);
```

## メッセージの送信

Item クラスの SendMessage() メソッドを呼び出し、そのItemにメッセージを送信できます。
```
class Item {
  public bool SendMessage(HSMessage message);
}
```

## メッセージの受信

Itemがメッセージを受信すると、そのItemに設定されているコンポーネントの OnReceiveMessage() メソッドが呼び出されます。引数 message に、受信したメッセージの情報が渡されます。

```
component Comp {
  public void OnReceiveMessage(HSMessage message) {
    // メッセージ受信時の処理
  }
}
```

***

## HSMessageのユーティリティー関数

### hsCreateMessage

`HSMessage hsCreateMessage(string type = "")`

引数 type でメッセージ種別を指定して、HSMessageを生成する。

### hsCreateSelfMessage

`HSMessage hsCreateSelfMessage(string type = "")`

引数 type でメッセージ種別を指定して、HSMessageを生成する。

このメソッドをコンポーネントのメソッドの中から呼び出すことによって、呼び出し元のコンポーネントが所属しているItemが、送信元として設定されます。

***

## コンストラクタ

### HSMessage

`public HSMessage()`

メッセージを生成します。送信者情報やタイプなどは全て空に設定されています。

## メソッド

### SetType

`public HSMessage SetType(string type)`

メッセージの種別を文字列で設定します。

### GetType

`public string GetType()`

メッセージの種別を文字列で取得します。

### SetSenderItem

`public HSMessage SetSenderItem(Item item)`

メッセージの送信者である Item を設定します。

### GetSenderItem

`public Item GetSenderItem()`

メッセージの送信者である Item を取得します。

### HasProperty

`public bool HasProperty(string name)`

メッセージが引数 name で指定したデータを保持している場合、true を返します。

### AddInt

`public HSMessage AddInt(string name, int value)`

引数 name で指定した名前で、メッセージに整数値 value を保存します。

同じ名前でデータを設定した場合、そのデータで上書きが行われます。

### GetInt

`public int GetInt(string name)`

引数 name で指定した名前で、メッセージに保存された整数値を取得します。

引数 name で指定した名前のint型データが見つからなかった場合、0を返します。

### TryGetInt

`public bool TryGetInt(string name, ref int value)`

引数 name で指定した名前で、メッセージに保存された整数値を取得し、引数 value に入れて返します。

引数 name で指定した名前が見つからなかった場合、戻り値として false を返し、引数 value は更新されません。

### AddFloat

`public HSMessage AddFloat(string name, float value)`

引数 name で指定した名前で、メッセージに浮動小数点数値 value を保存します。

同じ名前でデータを設定した場合、そのデータで上書きが行われます。

### GetFloat

`public float GetFloat(string name)`

引数 name で指定した名前で、メッセージに保存された浮動小数点数値を取得します。

引数 name で指定した名前のfloat型データが見つからなかった場合、0を返します。

### TryGetFloat

`public bool TryGetFloat(string name, ref float value)`

引数 name で指定した名前で、メッセージに保存された浮動小数点数値を取得し、引数 value に入れて返します。

引数 name で指定した名前が見つからなかった場合、戻り値として false を返し、引数 value は更新されません。

### AddBool

`public HSMessage AddBool(string name, bool value)`

引数 name で指定した名前で、メッセージにbool値の value を保存します。

同じ名前でデータを設定した場合、そのデータで上書きが行われます。

### GetBool

`public bool GetBool(string name)`

引数 name で指定した名前で、メッセージに保存されたbool値を取得します。

引数 name で指定した名前のbool型データが見つからなかった場合、falseを返します。　

### TryGetBool

`public bool TryGetBool(string name, ref bool value)`

引数 name で指定した名前で、メッセージに保存されたbool値を取得し、引数 value に入れて返します。

引数 name で指定した名前が見つからなかった場合、戻り値として false を返し、引数 value は更新されません。

### AddStr

`public HSMessage AddStr(string name, string value)`

引数 name で指定した名前で、メッセージに文字列 value を保存します。

同じ名前でデータを設定した場合、そのデータで上書きが行われます。

### GetStr

`public string GetStr(string name)`

引数 name で指定した名前で、メッセージに保存された文字列を取得します。

引数 name で指定したstring型データが見つからなかった場合、空文字列を返します。

### TryGetStr

`public bool TryGetStr(string name, ref string value)`

引数 name で指定した名前で、メッセージに保存された文字列を取得し、引数 value に入れて返します。

引数 name で指定した名前が見つからなかった場合、戻り値として false を返し、引数 value は更新されません。
