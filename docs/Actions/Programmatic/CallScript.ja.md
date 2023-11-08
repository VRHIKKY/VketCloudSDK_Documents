# CallScript
![CallScript](img/CallScript.jpg)

ActionsからHeliScriptやScriptのメソッドを呼び出す際に使用します。

引数にはコンポーネント名・メソッド名・引数をカンマ区切りで指定します。

例えば、

```csharp
component Foo {

void Method(string Param)

}
```
を呼び出したい場合は、”Foo,Method,abc”などと指定すると、Paramに”abc”が代入された状態でMethodが呼び出されます。

| フィールド |  機能  |
| ----   | ---- |
| 名前 | ItemNameを自由に設定してください。 |
| 引数 | コンポーネント名・メソッド名・引数を設定してください。 |
