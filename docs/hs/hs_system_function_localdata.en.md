# Built-in Functions - Local Data

Send arbitrary data to the user only.

***

Unlike Net functions, this notifies only the user who executed it.
The type can be any arbitrary string, but it is recommended to choose an appropriate name for the purpose of use.

## Data Transmission Function

### hsSendLocalData
`void hsSendLocalData(string type, string data)`

Notify the user with (type, data).

***

## Data Reception Callback Method

The sent data can be retrieved in the `OnReceiveLocalData()` method defined in the component.

```
component LocalDataReceiver
{
    public void OnReceiveLocalData(string type, string data)
    {
    }
}
```