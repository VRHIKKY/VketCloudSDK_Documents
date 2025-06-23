# JsVal

JsValは、Vket Cloudの機能のひとつである[ブローカーAPI](./BrokerAPI.md)を使用して外部APIとの通信を行う際に使用するHeliScriptの型です。<br>
以下の値、関数、クラスによって定義されます。

## 【定数値】

```js
const int JS_NULL = 0; // null 
const int JS_OBJ = 1; // JSオブジェクト
const int JS_ARRAY = 2; // Array
const int JS_NUM = 3; // Number
const int JS_BOOL = 4; // Boolean
const int JS_STR = 5; // String
```

JSの型と対応した整数値。

---

## 【JsVal リテラル】

HeliScriptのコード中に、JSのオブジェクトリテラル風の表記を利用して、JsValを初期化、生成することができます。

```js
JsVal val = new JsVal() {
  "name": "vket-chan",
  "id": 12345,
  "message": "Welcome to Vket World!"
};
```

new JsVal() の後に、{ }  で囲んだJSON形式の文字列を記述できます。

---

## 【JsVal を生成する関数】

### makeJsValFromJson()

`JsVal makeJsValFromJson(string json);`

引数として渡したJSON文字列を解析し、JsValのインスタンスを返す関数。

JSON文字列の解析に失敗した場合、nullを返します。

### makeJsNull()

`JsVal makeJsNull();`

null値を表現するJsValインスタンスを生成して返す。

### makeJsVal()

`JsVal makeJsVal(int type);`

引数の整数値で指定した、JSの型を表現するJsValインスタンスを生成して返す。

(引数に指定できる整数値は、`JS_OBJ`などの定義済み整数値を参照)

### makeJsObj()

`JsVal makeJsObj();`

JSのオブジェクトを表現するJsValインスタンスを生成して返す。

生成時点では空オブジェクト( { } )になっている。

### makeJsArray()

`JsVal makeJsArray();`

JSのArrayを表現するJsValインスタンスを生成して返す。

生成時点では中身は空。

### makeJsArrayFrom()

`JsVal makeJsArrayFrom(list<JsProp> newList);`

引数で指定した JsProp の配列を設定して、JSのArrayを生成して返す。

### makeJsNum()

`JsVal makeJsNum();`

JSのNumberを表現するJsValインスタンスを生成して返す。初期値は 0。

### makeJsNumFrom()

`JsVal makeJsNumFrom(int value);`

引数で初期値を指定して、JSのNumberを表現するJsValインスタンスを生成して返す。

### makeJsBool()

`JsVal makeJsBool();`

JSのBooleanを表現するJsValインスタンスを生成して返す。初期値は false。

### makeJsBoolFrom()

`JsVal makeJsBoolFrom(bool value);`

引数で初期値を指定して、JSのBooleanを表現するJsValインスタンスを生成して返す。

### makeJsStr()

`JsVal makeJsStr();`

JSのStringを表現するJsValインスタンスを生成して返す。初期値は空文字列になる。

### makeJsStrFrom()

`JsVal makeJsStrFrom(string value);`

引数で初期値を指定して、JSのStringを表現するJsValインスタンスを生成して返す。

### makeJsProp()

`JsProp makeJsProp(string name);`

JSのプロパティ(名前と値が組になったもの)を表現するJsValインスタンスを生成して返す。

この関数自体は、初期値としてキーとなる名前のみを設定可能で、生成されるJsPropの値は空となる。

### makeJsArrayElem()

`JsProp makeJsArrayElem();`

配列の要素を返す。

### makeJsArrayElemFrom()

`JsProp makeJsArrayElemFrom(JsVal newVal);`

配列の要素を返す。初期値をJsValとして指定可能。

---

## 【JsVal クラス】

HeliScript で JavaScript の型を扱う仕組み。

JsVal型は、JavaScript連携において、extern関数の戻り値と引数に指定できる。また、JavaScriptコールバックの戻り値と引数にも利用できる。

JsVal型は、生成後に多様な型の値を設定することができる。また、JavaScriptオブジェクトのように、プロパティを動的に追加・削除可能。

### コンストラクタ

`public JsVal();`

空のJsValを生成する。

生成された時点では、JS側のnullに相当する状態になっている。後から自由に中身の値と型を変更できる。

### ToString()

`public string ToString(string space = "");`

JsValインスタンスの内容を文字列として取得する。

引数 space に文字列を指定すると、その文字列でインデントを行う。引数 space のデフォルト値は空文字で、引数を省略して呼び出すことができる。その場合、インデントを一切行わない。

例えば、jsval.ToString("  ") と空白文字2つを指定したり、jsval.ToString("\t")とタブ記号でインデントを行うようにも指定できる。

### Clear()

`public void Clear();`

JsValインスタンスに設定された情報を消去し、型情報を JS\_NULL に設定する。

### GetType()

`public int GetType()`

JsValインスタンスの現在の型を返す。

### SetType()

`public JsVal SetType(int type)`

JsValインスタンスに、新たに型を設定する。設定後、自分自身を戻り値として返す。

設定できる値は「定数値」の項目を参照。

インスタンスの現在の型と同じ型を指定すると、何もしない。

インスタンスの型を変更した場合、Clear() と同等の初期化処理が走る。

### IsNull()

`public bool IsNull();`

JsValインスタンスが null 値の場合、true を返す。

### SetNull()

`public void SetNull();`

JsValインスタンスを null に設定する。

SetType(JS\_NULL) と同等。

### HasPropertyType()

`public bool HasPropertyType();`

現在の型が、プロパティを持つことが可能な型の場合に true を返す。

具体的には、型が JS\_OBJ と JS\_ARRAY の場合にtrueを返す。

### SetNum()

`public void SetNum(float val);`

JsValインスタンスにfloat値を設定し、型を JS\_NUM に変更する。

### GetNum()

`public float GetNum();`

JsValインスタンスの型が JS\_NUM の場合、インスタンスが保持している数値を返す。

インスタンスの型が JS\_BOOL の場合、false=0, true=1 のいずれかが返る。

インスタンスの型がそれらのどれでもない場合、返却値の内容は保証されない。

### SetBool()

`public void SetBool(bool val);`

JsValインスタンスにbool値を設定し、型を JS\_BOOL に変更する。

### GetBool()

`public bool GetBool();`

JsValインスタンスの型が JS\_BOOL の場合、インスタンスが保持している真偽値を返す。

インスタンスの型が JS\_NUM の場合、0=false, それ以外の値=true のいずれかが返る。

インスタンスの型がそれらのどれでもない場合、返却値の内容は保証されない。

### SetStr()

`public void SetStr(string val);`

JsValインスタンスにString値を設定し、型を JS\_STR に変更する。

### GetStr()

`public string GetStr();`

JsValインスタンスの型が JS\_STR の場合、インスタンスが保持しているString値を返す。

インスタンスの型が JS\_STR でない場合、返却値の内容は保証されない。

### GetProperty()

`public JsVal GetProperty(string name);`

JsValインスタンスの型が JS\_OBJ の場合、名前で指定したプロパティをJsValとして返す。

存在しない場合は null を返す。

### GetPropertyList()

`public list<JsProp> GetPropertyList();`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、オブジェクトの保持するプロパティを全て返す。

プロパティが存在しない場合は、空のlistを返す。

### SetPropertyList()

`public bool SetPropertyList(list<JsProp> propList);`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、オブジェクトにプロパティをまとめて設定する。

処理に成功すると true を返す。

### GetPropertyCount()

`public int GetPropertyCount();`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、オブジェクトが保持しているプロパティの総数を返す。

### FindProperty()

`public bool FindProperty(string name, ref JsProp found, ref int index);`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、オブジェクトが保持しているプロパティを名前で検索し、見つかったらプロパティをJsPropとして引数 found に設定する。同時にプロパティのインデックスを引数indexに設定する。

プロパティが見つかった場合は true を返す。

### AddElement()

`public JsVal AddElement();`

JsValインスタンスの型が JS\_ARRAY の場合、空の要素(型がJS\_NULLのJsVal)を配列の末尾に追加して、その追加したJsValを戻り値として返す。

追加に失敗すると null を返す。

### AddElementByVal()

`public bool AddElementByVal(JsVal newVal);`

JsValインスタンスの型が JS\_ARRAY の場合、引数で指定した要素を配列の末尾に追加する。

追加に成功すると true を返す。

### AddProperty()

`public JsVal AddProperty(string name);`

JsValインスタンスの型が JS\_OBJ の場合、引数で指定した名前でプロパティを生成し、プロパティのリストの末尾に追加する。追加したJsValは初期値(JS\_NULL)となる。

追加に成功すると、追加したJsValを戻り値として返す。

### AddPropertyByVal()

`public bool AddPropertyByVal(string name, JsVal newVal);`

JsValインスタンスの型が JS\_OBJ の場合、引数で指定した名前と値でプロパティを生成し、プロパティのリストの末尾に追加する。

追加に成功すると true を返す。

### HasProperty()

`public bool HasProperty(string name);`

JsValインスタンスの型が JS\_OBJ の場合、引数で指定した名前でプロパティを検索し、そのプロパティが存在するならtrueを返す。

### At()

`public JsVal At(int index);`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、引数で指定したインデックスのプロパティを返す。

### SetAt()

`public bool SetAt(int index, JsVal newVal);`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、引数で指定したインデックスのプロパティに、newValで指定した値を設定する。

設定に成功すると true を返す。

### RemoveAt()

`public bool RemoveAt(int index);`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、引数で指定したインデックスのプロパティを削除する。

削除に成功すると true を返す。

### AtProperty()

`public JsProp AtProperty(int index);`

JsValインスタンスの型が JS\_OBJ または JS\_ARRAY の場合、引数で指定したインデックスのプロパティを、JsPropの (名前, 値) の組として取得する。

取得に失敗すると null を返す。

---

## 【JsProp クラス】

JavaScriptのプロパティを表現するクラス。

名前と、その値とをセットで扱うことができる。

### SetName()

`public void SetName(string name);`

プロパティのキーとなる名前を設定する。

### GetName()

`public string GetName();`

プロパティのキーとなる名前を取得する。

### SetValue()

`public void SetValue(JsVal value);`

プロパティの値を設定する。

### GetValue()

`public JsVal GetValue();`

プロパティの値を取得する。
