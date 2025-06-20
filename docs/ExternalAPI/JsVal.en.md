# JsVal

JsVal is a HeliScript type used to operate external API connections via [Broker API](./BrokerAPI.md), which is a feature of Vket Cloud.<br>
This type is defined by the following values, functions, and classes.

## Predefined Constant Values

```js
const int JS_NULL = 0; // null 
const int JS_OBJ = 1; // JS Object
const int JS_ARRAY = 2; // Array
const int JS_NUM = 3; // Number
const int JS_BOOL = 4; // Boolean
const int JS_STR = 5; // String
```

Constant values defined to correspond with JS types.

---

## JsVal Literal

You can use JavaScript object literal-like notation to initialize and create JsVal in HeliScript code.

```js
JsVal val = new JsVal() {
  "name": "vket-chan",
  "id": 12345,
  "message": "Welcome to Vket World!"
};
```

You can write JSON format string enclosed in { } after new JsVal().

---

## Functions generating JsVal

### makeJsValFromJson()

`JsVal makeJsValFromJson(string json);`

Parses the JSON string passed as an argument and returns a JsVal instance.

Returns null if the JSON string parsing fails.

### makeJsNull()

`JsVal makeJsNull();`

Returns a JsVal instance expressing null.

### makeJsVal()

`JsVal makeJsVal(int type);`

Returns a JsVal instance expressing the type designated by the integer argument.

(To see which type is available, see the defined constant values such as `JS_OBJ` on above)

### makeJsObj()

`JsVal makeJsObj();`

Returns a JsVal instance expressing a JS object.

The object is empty ( { } ) on generation.

### makeJsArray()

`JsVal makeJsArray();`

Returns a JsVal instance expressing a JS Array.

The array is empty on instantiation.

### makeJsArrayFrom()

`JsVal makeJsArrayFrom(list<JsProp> newList);`

Returns a JsVal instance expressing a JS Array, which is initialized by the JsProp list in argument.

### makeJsNum()

`JsVal makeJsNum();`

Returns a JsVal instance expressing a JS Number. The initial value is 0.

### makeJsNumFrom()

`JsVal makeJsNumFrom(int value);`

Returns a JsVal instance expressing a JS Number, which is initialized by the integer value in argument.

### makeJsBool()

`JsVal makeJsBool();`

Returns a JsVal instance expressing a JS Boolean. The initial value is false.

### makeJsBoolFrom()

`JsVal makeJsBoolFrom(bool value);`

Returns a JsVal instance expressing a JS Boolean, which is initialized by the bool value in argument.

### makeJsStr()

`JsVal makeJsStr();`

Returns a JsVal instance expressing a JS String. The initial value is an empty string.

### makeJsStrFrom()

`JsVal makeJsStrFrom(string value);`

Returns a JsVal instance expressing a JS String, which is initialized by the string value in argument.

### makeJsProp()

`JsProp makeJsProp(string name);`

Returns a JsVal instance expressing a JS Property (set of name and value).

This function only defines the name/key on initialization, which its value is undefined on instantiation.

### makeJsArrayElem()

`JsProp makeJsArrayElem();`

Returns an array element.

(Due to implementation, array elements and object properties are managed by the same mechanism, so array elements are JsProp. They should be JsVal properly. This function is for easily generating "JsProp without key name" when creating array elements.)

### makeJsArrayElemFrom()

`JsProp makeJsArrayElemFrom(JsVal newVal);`

Returns an array element, which can be initialized by a JsVal.

---

## JsVal Class

JsVal is defined for handling JavaScript types on HeliScript.

JsVal type variables can be used as a return value / argument on extern functions for JavaScript bridging. The variables can also be used for  return value / argument on JavaScript callback functions.

JsVal type can contain diverse type values after its initialization. The property can be dynamically added/deleted as like a JavaScript object.

### Constructor

`public JsVal();`

Instantiates an empty JsVal.

On instantiation, the variable is equivalent as null on JS. The type and value can be defined after its instantiation.

### ToString()

`public string ToString(string space = "");`

Gets the content of the JsVal instance as a string.

If you specify a string for the space parameter, it will be used for indentation. The default value for space is an empty string, and you can call the method without this parameter. In that case, no indentation will be performed.

For example, you can specify two spaces with jsval.ToString("  "), or use tab character for indentation with jsval.ToString("\t").

### Clear()

`public void Clear();`

Deletes information on the JsVal instance and sets the type information to JS\_NULL.

### GetType()

`public int GetType()`

Returns the current type of the JsVal instance.

### SetType()

`public JsVal SetType(int type)`

Sets a new type on the JsVal instance. After setting, the instance itself will be the return value.

Please refer to [Predefined Constant Values](#predefined-constant-values) for available types.

If the argument type is same as the current type, no process will be made.

On changing the instance type, its content will be reset as like the Clear() function.

### IsNull()

`public bool IsNull();`

Returns a true value if the JsVal instance is a null value.

### SetNull()

`public void SetNull();`

Set the JsVal instance to null.

This operates in same manner as SetType(JS\_NULL).

### HasPropertyType()

`public bool HasPropertyType();`

Returns a true value if the current type is able to hold a property.

In specific, this will return a true value when the JsVal instance type is JS\_OBJ or JS\_ARRAY.

### SetNum()

`public void SetNum(float val);`

Set the designated float value to the JSVal instance, and change the type to JS\_NUM.

### GetNum()

`public float GetNum();`

Returns the instance's number value if the instance type is JS\_NUM.

If the JsVal instance type is JS\_BOOL, either false=0 or true=1 will be returned.

If instance type is neither of the above, the return value is undefined.

### SetBool()

`public void SetBool(bool val);`

Set the designated bool value to the JSVal instance, and change the type to JS\_BOOL.

### GetBool()

`public bool GetBool();`

Returns the instance's boolean value if the instance type is JS\_BOOL.

If the JsVal instance type is JS\_NUM, the return value is false on 0, true on any other number value.

If instance type is neither of the above, the return value is undefined.

### SetStr()

`public void SetStr(string val);`

Set the designated string value to the JSVal instance, and change the type to JS\_STR.

### GetStr()

`public string GetStr();`

Returns the instance's string value if the JsVal instance type is JS\_STR.

If JsVal instance type is not JS\_STR, the return value is undefined.

### GetProperty()

`public JsVal GetProperty(string name);`

Returns the instance's property value designated by the string name, if the JsVal instance type is JS\_OBJ.

Is the value does not exist, null will be returned.

### GetPropertyList()

`public list<JsProp> GetPropertyList();`

Returns the object's property in a list if the JsVal instance type is JS\_OBJ or JS\_ARRAY.

If property does not exist, an empty list will be returned.

### SetPropertyList()

`public bool SetPropertyList(list<JsProp> propList);`

Set the object's property by the designated propList, if the JsVal instance type is JS\_OBJ or JS\_ARRAY.

If function is completed, true will be returned.

### GetPropertyCount()

`public int GetPropertyCount();`

Returns the object's property count, if the JsVal instance type is JS\_OBJ or JS\_ARRAY.

### FindProperty()

`public bool FindProperty(string name, ref JsProp found, ref int index);`

If the JsVal instance type is JS\_OBJ or JS\_ARRAY, this function will search the object's property by the given name, and sets the found property as JsProp to the designated `found`. The property's index will be set to the given `index` as well.

If the property is found, true will be returned.

### AddElement()

`public JsVal AddElement();`

If the JsVal instance type is JS\_ARRAY, an empty element (JsVal which type is JS\_NULL) will be added, which the added JsVal will be the return value.

If addition fails, null will be returned.

### AddElementByVal()

`public bool AddElementByVal(JsVal newVal);`

If the JsVal instance type is JS\_ARRAY, the designated JsVal element will be added to the end of the array.

On addition success, true will be returned.

### AddProperty()

`public JsVal AddProperty(string name);`

If the JsVal instance type is JS\_OBJ, a new property will be defined by the given name, and added to the end of the property list. The new JsVal property's initial value is JS\_NULL.

On addition success, the added JsVal will be returned.

### AddPropertyByVal()

`public bool AddPropertyByVal(string name, JsVal newVal);`

If the JsVal instance type is JS\_OBJ, a new property will be defined by the given name and newVal, and added to the end of the property list.

On addition success, true will be returned.

### HasProperty()

`public bool HasProperty(string name);`

If the JsVal instance type is JS\_OBJ, a property will be searched by the given name, and return true if the property exists.

### At()

`public JsVal At(int index);`

Returns the property located by the given index, if the JsVal instance type is JS\_OBJ or JS\_ARRAY.

### SetAt()

`public bool SetAt(int index, JsVal newVal);`

Set the property's value to the given newVal which located by the given index, if the JsVal instance type is JS\_OBJ or JS\_ARRAY.

On setting success, true will be returned.

### RemoveAt()

`public bool RemoveAt(int index);`

Delete the property located by the given index, if the JsVal instance type is JS\_OBJ or JS\_ARRAY.

On deletion success, true will be returned.

### AtProperty()

`public JsProp AtProperty(int index);`

Returns the JsVal's property located by the given index as a JsProp (name, value), if the JsVal instance type is JS\_OBJ or JS\_ARRAY.

On obtain failure, null will be returned.

---

## JsProp Class

The class for expressing a JavaScript property.

This class handles a name and its value as a pair.

### SetName()

`public void SetName(string name);`

Set a name which is the property's key.

### GetName()

`public string GetName();`

Get a name which is the property's key.

### SetValue()

`public void SetValue(JsVal value);`

Set a property's value.

### GetValue()

`public JsVal GetValue();`

Get a property's value.
