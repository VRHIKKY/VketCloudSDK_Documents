# デリゲート(delegate)

## デリゲートの概要

デリゲートは、関数やクラスメソッドの参照を表す型です。
デリゲート型の変数には関数の参照を保存でき、また保存している関数を呼び出すことが可能です。

## デリゲートを宣言する

デリゲートを利用するには、関数のシグネチャ(戻り値や引数の型情報)を指定して、デリゲート型を宣言する必要があります。

以下の形式で、デリゲート型の宣言を行います。

```
delegate "戻り値" "デリゲート型名"("引数1", "引数2", ...);
```

具体的なデリゲート型の宣言の例です。
ここでは、「戻り値の型が int で、第1引数の型が string、第2引数の型が bool」である、PerformAction型を定義しています。

```
// PerformAction型を宣言
delegate int PerformAction(string text, bool flag);

// 引数名は省略可能なので、このようにも宣言できます。
delegate int PerformAction(string, bool);
```

!!! warning "引数として使用できる型は、基本型の*int*,*float*,*bool*,*string*と、 *JsVal*のみです"
    カスタムクラスやその他の型は引数として使用できません。

    ```
    // 引数にカスタムクラスは使用できません。
    // delegate int PerformAction(CustomData);

    class CustomData{}
    ```

!!! warning "グローバルスコープで宣言と定義をしてください"
    delegateはグローバルスコープで宣言する必要があります。
    また、delegate型の変数定義もグローバルスコープである必要があります。

    ```
    // グローバルスコープなので宣言可能
    delegate void fCallback();

    // グローバルスコープなので定義可能
    fCallback SimpleCallback;

    class SampleClass{
        // クラススコープなので宣言できません
        // delegate void fBoolCallback(bool);

        // クラススコープなので定義できません。
        // fCallback MyCallback;
    }
    ```

## デリゲートを利用する

delegate型変数に関数を登録し、呼び出すコード例です。

```
// PerformAction型を宣言
delegate int PerformAction(string text, bool flag);

// PerformAction型の変数を定義
PerformAction action;

// 事前定義済みの関数 TestFunc を登録
action += &TestFunc;

// 登録した関数(TestFunc)を呼び出し
action("id", true);
```

## 関数の登録について

* 関数をデリゲート型変数に登録するには、関数名の前に "&" を付ける必要があります。
* クラスメソッドをデリゲート型変数に登録する場合、関数名がそのまま利用できます。

```
// 関数を定義
int TestFunc(string text, bool flag) {
    // ...
}

// 関数名の前に "&" が必要
PerformAction action = &TestFunc;
```

```
// クラスメソッドを定義
class SampleClass {
    int TestMethod(string text, bool flag) {
        // ...
    }
}

// メソッド名をそのまま利用して登録できる。
SampleClass sample = new SampleClass();
PerformAction action = sample.TestMethod;
```

## その他の情報

### デリゲートは値型

デリゲートは値型であり、つまり new を呼び出さずに生成できます。また、デリゲート型変数に null は代入できません。

また、デリゲート型変数を別の変数に代入したり、関数の引数として渡す場合、デリゲート型変数の中身が新しい変数にコピーされます。

```
// 初期化時に new が不要
PerformAction action;

// もう1つデリゲート型変数を定義し、代入してみる。ここでコピーが行われる。
PerformAction action2nd = action;

// action2nd に加えた変更は、action側には反映されない。逆も同じ。
action2nd += &DummyFunc;
```

### 関数を複数実行した場合の戻り値

戻り値がある関数を複数登録したデリゲートを呼び出した場合、返却される戻り値は、最後に登録された関数のものになります。

***

## メソッド

(引数Tは、デリゲート型変数の型シグネチャに適合する関数を意味します。)

### Add(T)

`void Add(T func)`

このオブジェクトに、引数で指定した関数を追加登録します。

関数がすでに登録済みの場合は、何も行いません。

演算子 `+=` と同等の機能です。

### Set(T)

`void Set(T func)`

このオブジェクトに登録されている全ての関数をクリアし、引数で指定した関数を新たに登録します。

演算子 `=` と同等の機能です。

### Erase(T)

`void Erase(T func)`

引数で指定した関数がこのオブジェクトに登録されている場合、それを消去します。

関数が存在しない場合、何も行いません。

演算子 `-=` と同等の機能です。

### Clear()

`void Clear()`

このオブジェクトに登録されている、全ての関数を削除します。

### Count()

`int Count()`

このオブジェクトに登録されている関数の個数を返します。

### IsEmpty()

`bool IsEmpty()`

このオブジェクトに登録されている関数が0個だった場合に、trueを返します。

### Exist(T)

`bool Exist(T func)`

引数で指定した関数がこのオブジェクトに登録されている場合、trueを返します。

***

## 演算子

### += 演算子

Add() と同等の機能を持つ演算子です。

右辺に指定した関数を、オブジェクトに追加登録します。

### -= 演算子

Erase() と同等の機能を持つ演算子です。

右辺に指定した関数を、オブジェクトから削除します。

### = 演算子

Set() と同等の機能を持つ演算子です。

右辺に指定した関数をオブジェクトに設定し、既存の登録済み関数を全て削除します。
