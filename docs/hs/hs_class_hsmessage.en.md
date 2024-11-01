# HSMessage Class

HSMessage represents a message that can be sent and received between Items. You can create an HSMessage and send it to any Item.

HSMessage can store data represented by int, float, bool, and string. Additionally, it allows you to set information about the sender, enabling bidirectional message communication.

HSMessage provides many methods that return the instance itself as a return value, allowing you to chain methods together as shown in the example below:

```
// Create a message.
HSMessage message = hsCreateSelfMessage("EnemyData").AddInt("damage", 120).AddBool("visible", false);
// Send the message to the target Item.
Item receiver = hsItemGet("enemyobj");
receiver.SendMessage(message);
```

## Sending Messages

You can send a message to an Item by calling the SendMessage() method of the Item class.

```
class Item {
  public bool SendMessage(HSMessage message);
}
```

## Receiving Messages

When an Item receives a message, the OnReceiveMessage() method of the component attached to that Item is called. The received message information is passed as an argument to this method.

```
component Comp {
  public void OnReceiveMessage(HSMessage message) {
    // Process the message upon receipt.
  }
}
```

***

## HSMessage Utility Functions

### hsCreateMessage

`HSMessage hsCreateMessage(string type = "")`

Generates an HSMessage with the specified message type.

### hsCreateSelfMessage

`HSMessage hsCreateSelfMessage(string type = "")`

Generates an HSMessage with the specified message type.

When this method is called from within a component method, the Item to which the calling component belongs is set as the sender.

***

## Constructor

### HSMessage

`public HSMessage()`

Generates a message with all fields, including sender information and type, initialized to empty.

## Methods

### SetType

`public HSMessage SetType(string type)`

Sets the message type as a string.

### GetType

`public string GetType()`

Gets the message type as a string.

### SetSenderItem

`public HSMessage SetSenderItem(Item item)`

Sets the Item that is the sender of the message.

### GetSenderItem

`public Item GetSenderItem()`

Gets the Item that is the sender of the message.

### HasProperty

`public bool HasProperty(string name)`

Returns true if the message contains data with the specified name; otherwise, returns false.

### AddInt

`public HSMessage AddInt(string name, int value)`

Stores an integer value with the specified name in the message.

If data with the same name is set again, it will overwrite the existing data.

### GetInt

`public int GetInt(string name)`

Retrieves the integer value stored in the message with the specified name.

If no integer data is found for the specified name, returns 0.

### TryGetInt

`public bool TryGetInt(string name, ref int value)`

Attempts to retrieve the integer value stored in the message with the specified name, and stores it in the provided reference variable.

If no data is found for the specified name, returns false, and the reference variable is not updated.

### AddFloat

`public HSMessage AddFloat(string name, float value)`

Stores a floating-point value with the specified name in the message.

If data with the same name is set again, it will overwrite the existing data.

### GetFloat

`public float GetFloat(string name)`

Retrieves the floating-point value stored in the message with the specified name.

If no floating-point data is found for the specified name, returns 0.

### TryGetFloat

`public bool TryGetFloat(string name, ref float value)`

Attempts to retrieve the floating-point value stored in the message with the specified name, and stores it in the provided reference variable.

If no data is found for the specified name, returns false, and the reference variable is not updated.

### AddBool

`public HSMessage AddBool(string name, bool value)`

Stores a boolean value with the specified name in the message.

If data with the same name is set again, it will overwrite the existing data.

### GetBool

`public bool GetBool(string name)`

Retrieves the boolean value stored in the message with the specified name.

If no boolean data is found for the specified name, returns false.

### TryGetBool

`public bool TryGetBool(string name, ref bool value)`

Attempts to retrieve the boolean value stored in the message with the specified name, and stores it in the provided reference variable.

If no data is found for the specified name, returns false, and the reference variable is not updated.

### AddStr

`public HSMessage AddStr(string name, string value)`

Stores a string value with the specified name in the message.

If data with the same name is set again, it will overwrite the existing data.

### GetStr

`public string GetStr(string name)`

Retrieves the string value stored in the message with the specified name.

If no string data is found for the specified name, returns an empty string.

### TryGetStr

`public bool TryGetStr(string name, ref string value)`

Attempts to retrieve the string value stored in the message with the specified name, and stores it in the provided reference variable.

If no data is found for the specified name, returns false, and the reference variable is not updated.
