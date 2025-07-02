# HeliScriptキャスト

## 基本型の変換 (キャスト)

### int(float)

`int int(float)`

浮動小数点数を整数値に変換します。

### float(int)

`float float(int)`

整数値を浮動小数点数値に変換します。

### bool(int)

`bool bool(int)`

整数値を真偽値に変換します。

0 は true、それ以外の値は false に変換されます。

### string(int)

`string string(int)`

整数値を文字列に変換します。

### string(float)

`string string(float)`

浮動小数点数値を文字列に変換します。

***

## stringのメソッドにおいてのキャスト

### ToInt()

`public int ToInt()`

文字列を整数値に変換します。変換に失敗した場合は 0 を返します。

### ToFloat()

`public float ToFloat()`

文字列を浮動小数点数値に変換します。変換に失敗した場合は 0 を返します。