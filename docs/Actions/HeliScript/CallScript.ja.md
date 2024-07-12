# Call Script
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

| 名称 |  機能  |
| ----   | ---- |
| Category | 呼び出し対象のコンポーネントが、シーン側にあるのか、それともCanvas側にあるのかを指定します。 |
| Item Name | Item名、またはレイヤー名を指定します。 |
| Component Name | コンポーネント名を設定してください。 |
| Function Name | メソッド名を指定してください。 |
| String Argument | 引数を設定してください。 |
