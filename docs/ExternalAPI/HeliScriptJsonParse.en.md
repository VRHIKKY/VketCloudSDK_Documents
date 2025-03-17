# Handling Json in HeliScript

## Overview

This article introduces how to define and utilize Json in HeliScript.

!!! info "Verification Environment"
    **SDK Version**: 15.1.0<br>
    **OS**: Windows 10<br>
    **Unity**: 2022.3.6f1<br>
    **Browser**: Google Chrome

!!! success "Setting up Json"
    The Json handled on this page simulates a list of product information displayed within the shop world.<br>
    *Note: The test data used on this page contains arbitrary values.*<br><br>
    〇 List of Parameters<br>
    **position**: Number indicating the location in the world.<br>
    **item_id**: Number assigned to the product.<br>
    **name**: Product name.<br>
    **category_name**: Name of the category to which the product belongs.<br>
    **item_type**: Type of item (3D model, avatar, texture, etc.).<br>
    **like_count**: Number of likes received by the item.<br>
    **price_range**: Price range setting.<br>
    **image**: URL of the product thumbnail image.<br>
    **shop_name**: Name of the shop where the product is listed.<br>
    **shop_icon**: URL of the shop's icon image.

## ① Variable Definition

In HeliScript, a Json class is provided. Therefore,

```js
Json _shopInfo;
```

defines a variable of the Json class.

## ② Inserting Data into Json Class Variables

You can insert Json into a Json class variable using `hsLoadJson(string)`.

In this case, we use the String-type function `GetRawData()` provided below.

```hs
string GetRawData(){
    return
    "{" +
        "\"status\":\"ok\"," +
        "\"data\":{" +
            "\"items\":[" +
                "{" +
                    "\"position\":1," +
                    "\"item_id\":10," +
                    "\"name\":\"Test Test\"," +
                    "\"category_name\":\"test\"," +
                    "\"item_type\":\"test\"," +
                    "\"like_count\":2," +
                    "\"price_range\":\"￥0-1,000\"," +
                    "\"image\":\"URL\"," +
                    "\"shop_name\":\"URL\"," +
                    "\"shop_icon\":\"URL\"" +
                "}," +
                "{" +
                    "\"position\":2," +
                    "\"item_id\":11," +
                    "\"name\":\"Test2 Test2\"," +
                    "\"category_name\":\"test2\"," +
                    "\"item_type\":\"test2\"," +
                    "\"like_count\":3," +
                    "\"price_range\":\"￥3-1,000\"," +
                    "\"image\":\"URL2\"," +
                    "\"shop_name\":\"URL2\"," +
                    "\"shop_icon\":\"URL2\"" +
                "}" +
            "]" +
        "}" +
    "}";
}
```

The HeliScript code to insert the data looks like this:

```c#
_shopInfo = hsLoadJson(GetRawData());
```

## ③ Extracting Necessary Information from Json

The Json used here includes the following hierarchy:

```c#
・status
・data
　├items
　├position
　├item_id
　├name
　├category_name
　├item_type
　├like_count
　├price_range
　├image
　├shop_name
　└shop_icon
```

We'll extract `item_id` and `name` in this example.

### 1. Extracting `data` from the overall Json and defining it as a new Json file

Using the `Find` function defined in the Json class, you can locate and define the content under a specified data type and key as a new Json file.

Therefore,

```c#
Json datablock = _shopInfo.Find(EJSONDataType_Block, "data");
```

defines `datablock` as the Json containing data.

### 2. Extracting `items` from `data` and defining it as a new Json file

Similarly, using the `Find` function, extract `items` from `datablock`.

```c#
Json items = datablock.Find(EJSONDataType_Array, "items");
```

Now, `items` is a Json file containing items.

!!! info "Difference in EJSONDataType"
    When extracting `datablock`, `EJSONDataType_Block` is used in the Find function, and when extracting `items`, `EJSONDataType_Array` is used. These are used based on the data definition format in Json.<br><br>
    Use `Block` for elements enclosed in `{}`, and `Array` for elements enclosed in `[]`.

### 3. Creating an ArrayList from `items`

Within `items`, 15 items are defined.  
To access each element, you need to list them as Json.

```c#
list<Json> dataJsons = items.GetArrayList();
```

This creates `dataJsons`, listing each of the 15 items in `items` as separate Json.

### 4. Extracting data from each element of the item

After these preparations, you can finally extract the data.

For extraction, use functions like `FindValueString` and `FindValueInt`, tailored to the type of data you're extracting.

With these functions, you can assign values from specified items to variables.  
Therefore, the code would look like this:

```c#
int itemId; // Variable to store item_id
string itemName; // Variable to store name

for(int i =  0; i < dataJsons.Count; i++){ // Loop through each item
  itemId = -1; // Initialize variables
  itemName = ""; // Initialize variables
  dataJsons[i].FindValueInt("item_id",itemId); // Assign value of item_id to itemId
  dataJsons[i].FindValueString("name",itemName); // Assign value of name to itemName
  hsSystemOutput("dataJsons[%d] item_id : %d , name : %s\n" % i %itemId % itemName);
}
```

Summarizing the code, it looks like this:

```c#
component SetProductData
{
    Json _shopInfo;

    public SetProductData()
    {
        _shopInfo = hsLoadJson(GetRawData());
        FindJsonContents();
    }

    public void Update()
    {
        
    }

    string GetRawData(){
        return
        "{" +
            "\"status\":\"ok\"," +
            "\"data\":{" +
                "\"items\":[" +
                    "{" +
                        "\"position\":1," +
                        "\"item_id\":10," +
                        "\"name\":\"Test Test\"," +
                        "\"category_name\":\"test\"," +
                        "\"item_type\":\"test\"," +
                        "\"like_count\":2," +
                        "\"price_range\":\"￥0-1,000\"," +
                        "\"image\":\"URL\"," +
                        "\"shop_name\":\"URL\"," +
                        "\"shop_icon\":\"URL\"" +
                    "}," +
                    "{" +
                        "\"position\":2," +
                        "\"item_id\":11," +
                        "\"name\":\"Test2 Test2\"," +
                        "\"category_name\":\"test2\"," +
                        "\"item_type\":\"test2\"," +
                        "\"like_count\":3," +
                        "\"price_range\":\"￥3-1,000\"," +
                        "\"image\":\"URL2\"," +
                        "\"shop_name\":\"URL2\"," +
                        "\"shop_icon\":\"URL2\"" +
                    "}," +
                "]" +
            "}" +
        "}";
    }

    void FindJsonContents(){
        int itemId;
        string itemName;
        Json datablock = _shopInfo.Find(EJSONDataType_Block, "data");
        Json items = datablock.Find(EJSONDataType_Array, "items");
        list<Json> dataJsons = items.GetArrayList();
        for(int i =  0; i < dataJsons.Count; i++){ // Loop through each item
            itemId = -1; // Initialize variables
            itemName = ""; // Initialize variables
            dataJsons[i].FindValueInt("item_id",itemId); // Assign value of item_id to itemId
            dataJsons[i].FindValueString("name",itemName); // Assign value of name to itemName
            hsSystemOutput("dataJsons[%d] item_id : %d , name : %s\n" % i %itemId % itemName);
        }
    }
}
```

When executed, this code produces the following output:

```c#
dataJsons[0] item_id : 10 , name : Test Test
dataJsons[1] item_id : 11 , name : Test2 Test2
```

## Caution

When handling Json, there's a possibility of malfunction with `Shift_JIS` depending on the incoming data. Therefore, it's recommended to use `UTF-8` for `.hs` file encoding.

Moreover, using [JsVal](../ExternalAPI/JsVal.md) for reading can offer greater convenience.