# How to Use HEOProperty (Vket Cloud Property Function)

![VKCAttributeProperty_1](./img/VKCAttributeProperty_1.jpg)

## Overview

By using VKC Attribute Property on SDK Ver9.x and later versions, each Item can have a "Property" when in Vket Cloud worlds.

Property is a set of key and value attributed to an Item, which can be used to pass-by-value between components, customize implementation on the Unity editor, and many other usages.

This page will introduce the concept of Property in Vket Cloud, and how to use VKC Attribute Property.

## How to setup VKC Attribute Property

### 1. Attach VKC Attribute Property to an Item object

![VKCAttributeProperty_2](./img/VKCAttributeProperty_2.jpg)

Attach VKC Attribute Property to an object that will be an Item, such as [VKC Item Field](../VKCComponents/VKCItemField.en.md), [VKC Item Object](../VKCComponents/VKCItemObject.en.md), and [VKC Item Activity](../VKCComponents/VKCItemActivity.en.md).

### 2. Define a Key and Value on VKC Attribute Property

By pressing the "+" button on the List, a new Key and Value can be added.

!!! info "Definition of Property"
    "Property" on Vket Cloud is a feature to define a Key and Value set.<br>
    The defined Value can be read on HeliScript, or written by functions.

![VKCAttributeProperty_3](./img/VKCAttributeProperty_3.jpg)

Please note that Key and Value will both be a String type.

This completes the setup for VKC Attribute Property.

![VKCAttributeProperty_4](./img/VKCAttributeProperty_4.jpg)

The defined properties will stored in the Scene.json file after build.

---

## How to Use on HeliScript

The defined property can be used by HeliScript.

For example, a GameObject Item will hold a property as below:

```c#
Key：Vket　Value：Cloud
Key：SDK　Value：12.1
```

### 1. GetProperty

`Item.GetProperty(string Key)` will get a Property Value according to the Item's Key.

```C#
// Sample Code (partial)

Item m_Item;
m_Item = hsItemGet("GameObject");

string Value;
Value = m_Item.GetProperty("Vket");
hsSystemWriteLine("%s" % Value); // output will be "Cloud"

```

### 2. SetProperty

`Item.SetProperty(string Key)` will set a Property Value according to the Item's Key.

```c#

// Sample Code (partial)

Item m_Item;
m_Item = hsItemGet("GameObject");

m_Item.SetProperty("Vket","Chan");

string Value;
Value = m_Item.GetProperty("Vket");
hsSystemWriteLine("%s" % Value); // output will be "Chan"

```

### 3. OnChangedProperty

`OnChangedProperty(string Key, string Value)` is a callback triggered when a property is changed.<br>
This will not be triggered if an exact same Value is entered to a Key on SetProperty, and change did not occur as a result.

```c#

// Sample Code (partial)
Item m_Item;
m_Item = hsItemGet("GameObject");

m_Item.SetProperty("SDK","12.1");
m_Item.SetProperty("Vket","Chan");
m_Item.SetProperty("SDK","12.2");
m_Item.SetProperty("Vket","Chan");

public void OnChangedProperty(string Key, string Value){
  hsSystemWriteLine("Changed %s, %s" % Key % Value);
  if(Key == "Vket"){
    hsSystemWriteLine("Vket Changed");  
  }
}

// On the example above,
// Line 6: initial Value for SDK is 12.1, callback will not be triggered
// Line 7: initial Value for Vket is Cloud, callback will be triggered
// Line 8: Value for SDK is 12.1, callback will be triggered
// Line 9: Value for Vket has been changed to Chan on Line 7, callback will not be triggered
// which will output the result as following:
// Changed Vket, Chan
// Vket Changed
// Changed SDK, 12.2

```

Property can be used on HeliScript by using the 3 functions above.

---

## Usage

Here are some ways to use VKC Attribute Property:

### 1. Pass-by-Value to an Activity

!!! tip "Defining property values on Activity"
    Unlike previous versions, defining property on Activities is recommended to be done by editing the Activity json file without using VKC Attribute Property component.<br>
    For details, please see [VKC Activity Exporter: Setting Property in Activity](../SDKTools/VKCActivityExporter.md#setting-property-in-activity).

### 2. Pass-by-Value to a Component

When doing a pass-by-value among components, VKC Attribute Property can be used as below.<br>
*The same process can be implemented by defining a value change method, and calling it using `hsCallComponentMethod()`.

```c#
// 2 components: exampleA and exampleB, an Item with property: Key:status, Value:alive is defined,
// exampleB will function when the HP value in exampleA becomes lower than 0

component exampleA{

  int HP;
  Item m_Item;

  public exampleA{
    HP = 20;
    m_Item = hsItemGet("Monster");
  }
  
  public void damage(){
    HP--;
    if(HP<=0){
      m_Item.SetProperty("status","death");
    }
  }
}

component exampleB{

  int status;

  public exampleB{
    status = 1;
  }

  public void OnChangedProperty(string Key, string Value){
    if(Key == "status"){
      switch(Value){
        case: "alive"
          hsSystemWriteLine("A Monster has appeared!");
          status = 1;
          break;
        case: "poison"
          hsSystemWriteLine("The monster is poisoned!");
          status = 2;
          break;
        case: "death"
          hsSystemWriteLine("The monster is defeated!");
          status = -1;
          break;
      }
    }
  }
}
```

### 3. Similar Usage as Unity's \[SerializeField\] Attribution

As like "2. Pass-by-Value to a Component", parameter configuration on the Unity editor can be done by defining a variable property through VKC Attribute Property.

However, Key and Value will always be a string value.

```c#
component exampleC{
  int HP;
  int damage;
  string skill;
  Item m_Item;
  
  public exampleC{
    m_Item = hsItemGet("Monster");
    HP = m_Item.GetProperty("HP").ToInt();
    damage = m_Item.GetProperty("damage").ToInt();
    skill = m_Item.GetProperty("skill");
  }
}

//After defining the above, add a VKC Attribute Property component to a Monster object on Unity,
//and define properties: HP:30、damage:3、skill:Serial Cut,
//Each property will overwrite the HeliScript variable values
```

---

## Notes

### 1. Check which Item is targeted for SetProperty / GetProperty

Each Item can have different properties defined.<br>
If the Item name is wrong on reference, this may lead to unintended behaviors.

!!! warning "Note"
    Update: On SDK version 12.x and later, SetProperty will add a new property if it does not exist.<br>
    On SDK Ver9.11, when trying to run SetProperty without a target property, unexpected behavior may occur without error notices.

## 2. Key and Value will always be a String type

As previously mentioned, Key and Value will always be a String. When connecting with non-String type variables, type cast is needed before running SetProperty or GetProperty.

If SetProperty or GetProperty is done without type casting, null values will be used instead.
