# Built-in Functions - JavaScript Integration

HeliScript provides functions for seamless interaction with JavaScript.

---

## Invoking JavaScript Code

### `hsJSCall(string, string)`
`void hsJSCall(string name, string text)`

This function allows HeliScript to invoke JavaScript code.

<br>
If a JavaScript function `hel_action_bridge(name, text)` is defined, HeliScript can call it with the parameters `name` and `text`. If the function is not defined, no action will be taken.

How to use the `name` and `text` parameters is up to the implementer. A common approach is to treat `name` as the function name and `text` as its argument, enabling diverse processing on the JavaScript side.

**Example:**

```javascript
// JavaScript function definition
function hel_action_bridge(name, text) {
    // Handle actions based on the name
    switch (name) {
        case "LogOutput":
            console.log(text);
            break;
        case "LoadImage":
            LoadImage(text);
            break;
        // Additional cases...
    }
}
```

---

## Invoking Component Methods from JavaScript

JavaScript can call methods of components assigned to items using the following function:

`function hel_script_CallComponentMethod(ItemName, ComponentName, MethodName, Param)`

The component method should have a return type of `void` and accept a single `string` parameter.

**Example:**

```csharp
// HeliScript component definition
component Test {
    public void DoFromJS(string Param) {
        // Example method logic
    }
}
```

```javascript
// Invoking the above component method from JavaScript
hel_script_CallComponentMethod("FieldItem", "Test", "DoFromJS", "TestParam");
```
