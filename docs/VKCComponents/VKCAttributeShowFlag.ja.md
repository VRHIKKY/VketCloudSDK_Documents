# VKC Attribute Show Flag

VKC Item Field上のオブジェクトを表示/非表示にする場合に利用します。

![HEOShowFlag](img/VKCAttributeShowFlag_01.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Show | True | チェックを外すことで非表示にできます。|
| Depth Buffer Enable | False | デプスバッファに描き込むかどうかを指定します。 |
| Alpha Blend To Opaque | False | アルファブレンド描画を強制的に不透明描画パスで行います。 |

![HEOShowFlag_HideField](img/HEOShowFlag_HideField.jpg)

![HEOShowFlag_ShowField](img/HEOShowFlag_ShowField.jpg)

!!! info "Note"
    - ActionTriggerの[Show/HideNode](../Actions/Node/ShowHideNode.md)でも、動的に表示/非表示にすることができます。
    - 非表示にするのは見た目のみで、コライダーなどの判定は機能します。

## Advanced Options

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| show1 - show9 | True | 表示フラグ設定を切り替えます。|

## Show Condition Types

表示フラグは内部的には配列化されており、`show1`～`show9`まで個別に設定出来ます。  
すべてのフラグのデフォルト値はTrueで、配列内の１つでもFalseであればFalseと判定されます。

| 種類 | 内容 |
| ---- | ---- |
| True | 常にTrueを返す。 |
| False | 常にFalseを返す。 |
| Is Lang Ja | 言語設定が日本語かどうか。 |
| Is Not Lang Ja | 言語設定が日本語以外かどうか。 |
| Is Logined | ログインしているかどうか。 |
| Is Not Logined | ログインしていないかどうか。 |

例えば、以下のように設定します。

![HEOShowFlag](img/VKCAttributeShowFlag_02.jpg)

この場合、他のHeliScriptなどの操作から`Show`がTrueになり、かつ`Is Lang Ja`がTrueであれば全体としてTrueとみなされ、表示されます。
