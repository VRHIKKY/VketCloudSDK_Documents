# 文字列(string)

## 文字列の取り扱い

string は、文字列を表現する組み込み型です。

`"Vket Cloud"` のように、ダブルクォーテーション「"」で囲まれた文字列は string 型として扱われます。

string は、文字列データを内部的に UTF-8 のバイト列として保持しています。文字列としての長さを取得する場合は Length() メソッドを、バイト列そのものの長さを取得するには LengthByte() を使用します。

## 変更可能な文字列

HeliScriptの string は変更可能です。"[]" のインデックス指定による書き換えや、Append() といったメソッドで、文字列の内容を書き換えることができます。

!!! warning "caution"
    現バージョンにおいて、文字列にアポストロフィ / シングルクォート( ' ' , U+0027)を含めると動作が停止するエラーが確認されております。<br>
    恐れ入りますが、文字列では同記号の使用を避けるようお願い致します。

## stringのメソッド

### ToInt()

`public int ToInt()`

文字列を整数値に変換します。変換に失敗した場合は 0 を返します。

### ToFloat()

`public float ToFloat()`

文字列を浮動小数点数値に変換します。変換に失敗した場合は 0 を返します。

### Length()

`public int Length()`

文字列の長さを返します。

### LengthByte()

`public int LengthByte()`

文字列を表現する、UTF-8 配列のバイト数を返します。

### IsEmpty()

`public bool IsEmpty()`

文字列が空の場合は true を、そうでない場合は false を返します。

### IndexOf(string)

`public int IndexOf(string value)`

引数で指定した文字列を検索し、見つかった場合はその文字列が最初に現れる位置を返します。検索対象の文字が見つからなかった場合は -1 を返します。

### SubString(int, int)

`public string SubString(int startIndex, int length)`

文字列中の開始位置と長さを指定し、部分文字列を生成します。

### Append(int)

`public void Append(int value)`

引数で指定した文字を、現在の文字列の末尾に追加します。

### RemoveLast()

`public void RemoveLast()`

文字列の最後の1文字を削除します。

### RemoveAt(int)

`public void RemoveAt(int index)`

引数で指定した位置の文字を、1文字削除します。

### Split()

`public list<string> Split()`

空白文字で文字列を分割し、結果を文字列のリストとして返します。

空白文字に該当するのは以下の値です。

- 空白 (0x20, ' ')
- フォームフィード (0x0c, '\f')
- ラインフィード (0x0a, '\n')
- キャリッジリターン (0x0d, '\r')
- 水平タブ (0x09, '\t')
- 垂直タブ (0x0b, '\v')

### Split(int)

`public list<string> Split(int opt)`

空白文字で文字列を分割し、結果を文字列のリストとして返します。

引数にオプション値を渡すことで、分割時の挙動を変更できます。

### Split(string)

`list<string> Split(string separator)`

引数 separator によって文字列を分割し、結果を文字列のリストとして返します。

### Split(string, int)

`list<string> Split(string separator, int opt)`

引数 separator によって文字列を分割し、結果を文字列のリストとして返します。

引数にオプション値を渡すことで、分割時の挙動を変更できます。

## 分割オプション

### SplitOpt_None

`const int SplitOpt_None = 0;`

オプションとして何も行わない。

### SplitOpt_RemoveEmpty

`const int SplitOpt_RemoveEmpty = 1;`

分割後の文字列に空文字が含まれる場合、それを破棄する。

### SplitOpt_Trim

`const int SplitOpt_Trim = 2;`

分割後の文字列の前後に空白が存在する場合、それらをトリムする。

### SplitOpt_RemoveAll

`const int SplitOpt_RemoveAll = SplitOpt_RemoveEmpty | SplitOpt_Trim;`

分割オプションの SplitOpt_RemoveEmpty と SplitOpt_Trim を組み合わせた値。

***

## 特殊な演算子

### [ ] 演算子

文字列中の指定した位置にある文字を、int値として取得します。指定した位置への代入も可能です。

```
string text = "Hello!";

// 'H' を取得
int part = text[0];

// "Hello!" を "Hello?" に書き換える
text[text.Length() - 1] = '?';
```

### + 演算子

文字列を連結し、新しい文字列を生成します。

```
string text = "Vket";

// "VketCloud" を生成
string vketcloud = text + "Cloud";

// +=演算子で文字列そのものを置き換える
text += "Cloud";
```

### % 演算子

一定の書式に沿ったテンプレート文字列に対し、引数として与えた多様な型の値を当てはめ、新たな文字列を生成します。

以下のサンプルコードのように、数値を文字列に変換することも可能です。
```
int n;
string s;

s = "%d" % n;
```

文字列中に、"%" で始まる書式文字列を配置することで、% 演算子の引数を順番に適用します。 

- %d
  - 整数値を表現する書式指定子です。
- %f
  - 浮動小数点数を表現する書式指定子です。
- %s
  - 文字列を表現する書式指定子です。

```
// 1 + 1 = 2
int answer = 2;
hsSystemOutput("1 + 1 = %d\n" % answer);

// VketCloud hello world!
string hello  = "hello world!";
hsSystemOutput("VketCloud %s\n" % hello);

// "int value = myArray[99];"
hsSystemOutput("int %s = %s[%d];\n" % "value" % "myArray" % 99);
```
