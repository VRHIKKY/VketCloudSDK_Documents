
# 配列(list)

## listの取り扱い
list は、可変長配列を表現する組み込み型です。

## 宣言
list の中に配置するデータの型を指定するため、「< >」による型指定が必要です。
```
list<型> オブジェクト名;
```
具体的な初期化コードは、このようになります。
```
// int値を保持するlistを定義
list<int> numList;

// stringを保持するlistを、初期サイズ10で初期化
list<int> strList = new list<int>(10);
```

## listのサイズ変更
具体的な値(list に設定するデータ)を指定せずに、list のサイズのみを動的に変更することが可能です。
サイズを伸長した場合、まだ何も設定されていない領域には、その型の[初期値](hs_var.md)が設定されます。


***


## メソッド

### new()
`new()`

`new(int capacity)`

list のインスタンスを生成します。生成時にリストの初期サイズを設定することができます。
初期サイズを指定しない場合、サイズは0でインスタンスが生成されます。

### Add(T)
`void Add(T value)`

listに値を追加します。

引数で指定する値の型は、このメソッドの呼び出し元 list の型と一致している必要があります。

引数で指定した位置に、新しい要素を挿入します。

### IsEmpty()
`bool IsEmpty()`

list が空の場合は true を、そうでない場合は false を返します。

### Resize(int)
`void Resize(int newSize)`

list の長さを変更します。

list を縮小した場合、それまで存在していた領域の要素は削除されます。

list を拡張した場合、新しい領域は[型の初期値](hs_var.md)で初期化されます。

### Clear()
`void Clear()`

list の全要素を解放し、list の長さを0に設定します。

### Count()
`int Count()`

list の現在の長さを返します。

### RemoveLast()
`void RemoveLast()`

list の最後の要素を削除します。

### RemoveAt(int)
`void Append(int index)`

引数で指定した位置の要素を削除します。

### Insert(int, T)
`void Append(int index, T value)`

### CopyFrom(int, list<T\>, int, int)
`void CopyFrom(int index, list<T> sourceList, int start, int lnegth)`

index で指定した位置へ、srouceListの内容を、start から length サイズ分コピーします。

引数で指定する list の型は、このメソッドの呼び出し元 list の型と一致している必要があります。

### Fill(int, int, T)
`void Fill(int start, int length, T value)`

start で指定した位置から、length サイズ分、valueを繰り返しコピーします。

引数で指定する、コピー元の値の型は、このメソッドの呼び出し元 list の型と一致している必要があります。

### Sort()
`void Sort()`

list の全要素を、昇順で並び替えます。

### Reverse()
`void Reverse()`

list の全要素の並び順を反転させます。

### IndexOf(int, int, T)
`int IndexOf(int start, int last, T value)`

引数で指定した範囲から値を検索し、見つかった場合はその値が最初に現れる位置を返します。検索対象の値が見つからなかった場合は -1 を返します。

### [ ] 演算子
list 中の指定した位置にある値を取得します。指定した位置への代入も可能です。

```
list<int> numList = new list<int>(10);
numList[0] = 999;
int value = numList[6];
```
