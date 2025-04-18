# 組み込み関数 - Cookieの取得・設定

Cookieの存在確認、値の設定および取得を行う関数群です。文字列・整数・浮動小数点・ブール値に対応しています。

---

## 関数一覧

### hsCookieExists

`bool hsCookieExists(string name)`

引数 `name` に指定したcookieが存在する場合に `true` を返します。

---

### hsCookieSetStr

`void hsCookieSetStr(string name, string value)`

引数 `name` に指定した名前で、文字列の `value` を書き込みます。

---

### hsCookieSetInt

`void hsCookieSetInt(string name, int value)`

引数 `name` に指定した名前で、整数値の `value` を書き込みます。

---

### hsCookieSetFloat

`void hsCookieSetFloat(string name, float value)`

引数 `name` に指定した名前で、浮動小数点数値の `value` を書き込みます。

---

### hsCookieSetBool

`void hsCookieSetBool(string name, bool value)`

引数 `name` に指定した名前で、booleanの `value` を書き込みます。

---

### hsCookieGetStr

`string hsCookieGetStr(string name)`

引数 `name` に指定した名前でcookieを検索し、見つかった内容を文字列として返します。

---

### hsCookieGetInt

`int hsCookieGetInt(string name)`

引数 `name` に指定した名前でcookieを検索し、見つかった内容を整数値として返します。

---

### hsCookieGetFloat

`float hsCookieGetFloat(string name)`

引数 `name` に指定した名前でcookieを検索し、見つかった内容を浮動小数点数値として返します。

---

### hsCookieGetBool

`bool hsCookieGetBool(string name)`

引数 `name` に指定した名前でcookieを検索し、見つかった内容をbooleanとして返します。