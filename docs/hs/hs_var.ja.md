
# 基本型

## 組み込み型の種類

HeliScriptには以下の基本型が用意されています。

|型|内容|
|:--|:--|
|int|32bit符号あり整数値|
|float|32bit浮動小数点数|
|bool|真偽値 (*true*, または*false*)|
|[string](hs_string.md)|UTF-8 文字列|

## class型

構造を持ち、ユーザーが独自に定義、生成できる型として、class型が用意されています。

|型|内容|
|:--|:--|
|[class](hs_class.md)|構造を持つ参照型 (有効な参照値, または *null*)|

## 参照の管理

classのインスタンスは参照として取り扱われます。

HeliScriptでは、参照カウンタによって参照の寿命を管理しています。これは、オブジェクトがどこかから参照された時点で内部的に記録している「参照カウンタ」を増加させ、参照が解除された時点で「参照カウンタ」を減らします。どこからも参照されなくなったオブジェクトは、「参照カウンタ」が0になり、自動的に削除されます。

なお、何も指していない「空の参照」を表現する値として、HeliScriptは *null* を用意しています。

## 参照の取得

関数の引数定義に *ref* を付与すると、引数の参照渡しを行います。

つまり、引数を渡した先で代入を行うと、呼び出し元の変数を書き換えることができます。

??? quote "*ref*のコード例"
    ```
    void RefFunc(ref int x, ref int y) {
        x = 100;
        y = 200;
    }

    void Test() {
        int x = 0;
        int y = 0;
        
        // 引数をrefで渡す
        RefFunc(x, y);
        
        // -> "x=100, y=200"
        hsSystemOutput("x=%d, y=%d\n" % x % y);
    }
    ```

また、クラス関数内の *this* により、現在のインスタンス自身を参照可能です。

??? quote "*this*のコード例"
    ```
    Printer printer = new Printer();
    Person person = new Person();
    person.Construct(20);

    // -> "age: 20"
    person.PrintAge(printer);

    class Person{
        public int Age;

        public void Construct(int age){
            Age = age;
        }

        public void PrintAge(Printer printer){
            printer.PrintAge(this);
        }
    }

    class Printer{
        public void PrintAge(Person person){
            hsSystemWriteLine("age: %d" % person.Age); 
        }
    }
    ```

## 「文字列」と「文字」

ダブルクォーテーション 「""」で囲まれた文字列を、HeliScriptは文字列オブジェクトとして認識します。

シングルクォーテーション 「''」 で1つの文字を囲むと、それは文字型になります。文字型は、内部的に32bitの整数値として表現されます。

```
// 文字列型のオブジェクト
string str = "VketCloud";
// 文字型 (実際には整数値)
int chr = 'V';
```

## 未初期化の変数の自動初期化

変数を定義した際に、初期化を行わなかった場合、型によって以下の初期値が自動で設定されます。

|型|初期値|
|:--|:--|
|int|0|
|float|0.0f|
|bool|*false*|
|[string](hs_string.md)|空文字列|
|[class](hs_class.md)|*null*|

bool型は内部的に32bit整数値として扱われ、*true* は 1、*false* は 0 が割り当てられます。
bool型の変数に整数値を代入した場合、0は *false* に、それ以外は全て *true* に変換されます。

## 基本型が持つインスタンスメソッド

### int.ToString()

`public string ToString()`

int型変数の持つ変数値を、文字列に変換します。

### float.ToString()

`public string ToString()`

float型変数の持つ変数値を、文字列に変換します。

### bool.ToString()

`public string ToString()`

bool型変数の持つ変数値を、文字列に変換します。