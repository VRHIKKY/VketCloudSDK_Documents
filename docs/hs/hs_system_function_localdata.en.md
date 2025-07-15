# Built-in functions - Local Data

!!! info "Note"
    Send arbitrary data to the user only.

    Unlike Net functions, this notifies data only to the user who executed it.
    Any string can be specified for type, but it is preferable to choose an appropriate name according to the purpose of use.

***

## Data Transmission Function

### hsSendLocalData

`void hsSendLocalData(string type, string data)`

Notify (type, data) to the user.

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