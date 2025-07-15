# Built-in Functions - Local Data

!!! info "Information"
    Send arbitrary data to the user only.

    Unlike Net functions, this notifies only the user who executed it.
    The type can be any arbitrary string, but it is recommended to choose an appropriate name for the purpose of use.

***

## Data Transmission Function

### hsSendLocalData
`void hsSendLocalData(string type, string data)`

Notify the user with (type, data).

| Parameter | Type | Description |
|-----------|------|-------------|
| type | string | Arbitrary string representing the data type |
| data | string | Data to send |

!!! example "Usage Example"
    ```
    // Notify player's score to self only
    hsSendLocalData("score", "1000");
    
    // Notify player's settings to self only
    hsSendLocalData("settings", "volume:80,quality:high");
    ```

***

## Data Reception Callback Method

The sent data can be retrieved in the `OnReceiveLocalData()` method defined in the component.

```
component LocalDataReceiver
{
    public void OnReceiveLocalData(string type, string data)
    {
        // Process received data
        if (type == "score")
        {
            // Process score data
            int score = hsParseInt(data);
            hsSystemWriteLine("Score: " + score);
        }
        else if (type == "settings")
        {
            // Process settings data
            hsSystemWriteLine("Settings data: " + data);
        }
    }
}
```

!!! note "Note"
    - This callback only receives data sent by the same player
    - Data from other players is not received
    - It is recommended to use the type parameter to identify the data type