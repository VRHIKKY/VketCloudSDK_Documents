# Built-in Functions - Cookie Access & Manipulation

A set of functions to check for the existence of cookies, and to store and retrieve string, numeric, and boolean values in cookies.

---

## Function List

### hsCookieExists

`bool hsCookieExists(string name)`

Returns `true` if the cookie specified by the `name` argument exists.

---

### hsCookieSetStr

`void hsCookieSetStr(string name, string value)`

Stores the given string `value` in a cookie with the specified `name`.

---

### hsCookieSetInt

`void hsCookieSetInt(string name, int value)`

Stores the given integer `value` in a cookie with the specified `name`.

---

### hsCookieSetFloat

`void hsCookieSetFloat(string name, float value)`

Stores the given floating-point `value` in a cookie with the specified `name`.

---

### hsCookieSetBool

`void hsCookieSetBool(string name, bool value)`

Stores the given boolean `value` in a cookie with the specified `name`.

---

### hsCookieGetStr

`string hsCookieGetStr(string name)`

Searches for a cookie with the specified `name` and returns its content as a string.

---

### hsCookieGetInt

`int hsCookieGetInt(string name)`

Searches for a cookie with the specified `name` and returns its content as an integer.

---

### hsCookieGetFloat

`float hsCookieGetFloat(string name)`

Searches for a cookie with the specified `name` and returns its content as a floating-point number.

---

### hsCookieGetBool

`bool hsCookieGetBool(string name)`

Searches for a cookie with the specified `name` and returns its content as a boolean.
