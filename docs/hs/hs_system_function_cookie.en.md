# Built-in Functions - Cookie Access & Manipulation

A set of functions to check for the existence of cookies, and to store and retrieve string, numeric, and boolean values in cookies.

---

## Function List

### hsCookieExists

```c
bool hsCookieExists(string name)
```

Returns `true` if the cookie specified by the `name` argument exists.

---

### hsCookieSetStr

```c
void hsCookieSetStr(string name, string value)
```

Stores the given string `value` in a cookie with the specified `name`.

---

### hsCookieSetInt

```c
void hsCookieSetInt(string name, int value)
```

Stores the given integer `value` in a cookie with the specified `name`.

---

### hsCookieSetFloat

```c
void hsCookieSetFloat(string name, float value)
```

Stores the given floating-point `value` in a cookie with the specified `name`.

---

### hsCookieSetBool

```c
void hsCookieSetBool(string name, bool value)
```

Stores the given boolean `value` in a cookie with the specified `name`.

---

### hsCookieGetStr

```c
string hsCookieGetStr(string name)
```

Searches for a cookie with the specified `name` and returns its content as a string.

---

### hsCookieGetInt

```c
int hsCookieGetInt(string name)
```

Searches for a cookie with the specified `name` and returns its content as an integer.

---

### hsCookieGetFloat

```c
float hsCookieGetFloat(string name)
```

Searches for a cookie with the specified `name` and returns its content as a floating-point number.

---

### hsCookieGetBool

```c
bool hsCookieGetBool(string name)
```

Searches for a cookie with the specified `name` and returns its content as a boolean.
