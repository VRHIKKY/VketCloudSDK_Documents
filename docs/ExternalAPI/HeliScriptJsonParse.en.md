# Reading JSON in HeliScript

## Overview

From Heliport 3.0, the specification for the Return type when sending information from JavaScript to HeliScript has changed.  
Instead of using JSON, JsVal is now used to receive data, and the property feature of HeliScript is used to manage the values.

By using JsVal and properties, you can load information stored in a JSON file.

This page explains how to load a JSON file in HeliScript.

!!! info "Test Environment"
    SDK Version: 12.3.4<br>
    OS: Windows 10<br>
    Unity: 2019.4.31.f1<br>  
    Browser: Google Chrome

---

## Prerequisite Knowledge: What is the JsVal Class?

HeliScript provides the JsVal class.  
This class is used to load JavaScript data.  
It allows you to use associative array formats.  
For more details, please refer to the [JsVal page](https://vrhikky.github.io/VketCloudSDK_Documents/latest/ExternalAPI/JsVal.html).

```
JsVal shopInfo;
```

By defining it like this, you can create a variable of the JsVal class.

---

## 1. Populating Data in the JsVal Class Variable

To populate data in a JsVal class variable, a callback function is used.  
In this example, we use `heliport.api.worlds.getWorldList()` to obtain the world list data and store it in JsVal.

First, define the callback function as:

```
delegate void fJsValCallback(JsVal);
```

Then, implement the function:

```
public void _FetchWorldListCallback(JsVal val)
{

}

// Triggering this function will populate the JsVal variable with data
heliport.api.worlds.getWorldList(_FetchWorldListCallback, 6, 0, "myvket", "", "", "official");
```


Once this setup is complete, calling the function will trigger the callback and populate the JsVal class variable `val` with the data.

---

## 2. Extracting Required Information from JsVal

The data we are working with has the following structure:

```
data {
world_portals [
id : int
name : string
visit_count : int
ingame_url : string
thumbnail : string
]
}
```

(world_portals consists of a set of 5 elements: id, name, visit_count, ingame_url, and thumbnail)

To extract data from JsVal, two methods are used: `GetProperty()` and `GetProperty().At()`.

Elements are accessed with `GetProperty()`, and associative arrays are accessed using `GetProperty().At()` by specifying the key and array index.  
When you reach the final property, use `GetNum()` for int values and `GetStr()` for string values to retrieve the data.

To get the first element's id, name, visit_count, ingame_url, and thumbnail, the following code would be written:

```
_id = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("id").GetNum(); _name = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("name").GetStr(); _visit_count = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("visit_count").GetNum(); _ingame_url = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("ingame_url").GetStr(); _thumb_url = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("thumbnail").GetStr();
```

The extracted data can be used as int or string types, and can be reflected in `hsSystemWriteLine`, used for calculations, or applied in the world.

---

## Reference Pages

[Broker API Information](https://vrhikky.github.io/VketCloudSDK_Documents/latest/ExternalAPI/BrokerAPI.html): The Broker API also uses JsVal for data retrieval.