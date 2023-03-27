
# 組み込み関数 - JavaScript

HeliScript と JavaScript の連携を実現する関数。


***


## JavaScriptのコードを呼び出す

### hsJSCall(string, string)
`void hsJSCall(string name, string text)`

HeliScriptから、JavaScriptのコード呼び出しを実現する関数。

</br>
JavaScript側で `function hel_action_bridge(name, text)` が定義されていれば、HeliSctipt側から name, text パラメータによって hel_action_bridge() 関数が呼び出されます。hel_action_bridge() 関数が定義されていない場合は、何も行われません。

引数 name, text をどのように活用するかは実装者の自由ですが、一般的には name を関数名、text をその引数、といったルールを決めることで、JavaScript側で様々な処理を行うことができます。


```
// JavaScript側の定義
function hel_action_bridge(name, text)
{
    // nameで処理を切り分ける
    switch (name) {
    case "LogOutput"
        console.log(text);
        break;
    case "LoadImage"
        LoadImage(text);
        break;
        // .....
    }
}
```

***


## JavaScriptからコンポーネントメソッドを呼び出す

以下のJavaScript関数を使って、Itemに割り当てられた任意のコンポーネントメソッドを呼び出すことが出来ます。

`function hel_script_CallComponentMethod(ItemName, ComponentName, MethodName, Param)`

コンポーネントメソッド側は、戻り値の型が void で、引数は string 1つのみで定義しておく必要があります。

```
// HeliScriptのコンポーネント定義
component Test {
    public void DoFromJS(string Param) {
        // .....
    }
}
```

```
// JavaScriptから上記のコンポーネントメソッドを呼び出す
hel_script_CallComponentMethod("FieldItem", "Test", "DoFromJS", "TestParam");
```


