
# Built-in functions - JavaScript

A function that realizes coordination between HeliScript and JavaScript.


***


## call JavaScript code

### hsJSCall(string, string)
`void hsJSCall(string name, string text)`

A function that implements a JavaScript code call from HeliScript.

</br>
If `function hel_action_bridge(name, text)` is defined on JavaScript side, HeliSctipt side will call hel_action_bridge() function with name and text parameters. If the hel_action_bridge() function is not defined, nothing is done.

It is up to the implementer to decide how to use the arguments name and text, but in general, it is possible to perform various processing on the JavaScript side by deciding rules such as name being the function name and text being its argument.


```
// JavaScript side definition
function hel_action_bridge(name, text)
{
     // Separate processing by name
     switch (name) {
     case "LogOutput"
         console.log(text);
         break;
     case "LoadImage"
         LoadImage(text);
         break;
         //.....
     }
}
```

***


## Call a component method from JavaScript

You can use the following JavaScript function to call any component method assigned to the Item.

`function hel_script_CallComponentMethod(ItemName, ComponentName, MethodName, Param)`

The component method must be defined with a void return type and only one string argument.

```
// HeliScript component definition
component Test {
     public void DoFromJS(string Param) {
         //.....
     }
}
```

```
// Call the above component method from JavaScript
hel_script_CallComponentMethod("FieldItem", "Test", "DoFromJS", "TestParam");
```