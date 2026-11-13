# 汎用デリゲート(Func&lt;T, ...&gt;)

## デリゲートの概要
Func&lt;T, ...&gt; による記法を利用することで、delegate キーワードによるデリゲート宣言を省略し、その場でデリゲート型を定義できます。

```
int CallbackFunc(string s, float f) {
  // ...
}

// Func<T> を利用することで、その場でデリゲート型を利用できる。
Func<int, string, float> callback = &CallbackFunc;

// デリゲート型変数に設定された関数を呼び出す
int result = callback("abc", 123.0);
```

## Func&lt;T, ...&gt;
Func には &lt;T1, T2, ...&gt; の形で型を付与できます。

- Func に指定できる型は、現状 int, float, bool, string に限定されています。
- T1、つまり最初に指定する型は、戻り値になります。ここにのみ void を指定できます。
- T2, T3, ... は、デリゲートの引数の型になります。
- &lt;T&gt; による型指定を完全に省略した場合、戻り値void, 引数なしのデリゲート型になります。

```
// 戻り値 void, 引数が string 1個のデリゲート型
Func<void, string> del1;

// 戻り値 int, 引数なしのデリゲート型
Func<int> del2;

// 戻り値void, 引数なしのデリゲート型 (型指定を全て省略)
Func del3;
```
