
# Built-in functions - network


!!! Note Info
     Send arbitrary data to all players in the room.

     There are two ways to send data to the player: custom states and custom data.

     Custom states automatically send data to new players entering the room.

     Custom data is a one-time transmission.

     Each uses the following functions to send data. Any string can be specified for type, but it is preferable to choose an appropriate name according to the purpose of use.

***

### hsNetSetCustomState(string, string)
`void hsNetSetCustomState(string type, string data)`

By setting type and data in advance, (type, data) is automatically notified to users entering the room.

### hsNetSendCustomData(string, string)
`void hsNetSendCustomData(string type, string data)`

Notify (type, data) to users in the room.

### Data Reception Callback Method

The sent data can be retrieved in the `OnReceiveCustomState()` and `OnReceiveCustomData()` methods defined in the component. Argument id is the identifier of the sending player.

```
component CustomDataReceiver
{
     public void OnReceiveCustomState(string id, string type, string data)
     {
     }

     public void OnReceiveCustomData(string id, string type, string data)
     {
     }
}
```
## Voice Channel Join/Leave Callback Method

The join/leave event of other users in the voice channel can be retrieved by `OnVCPlayerJoin()` and `OnVCPlayerLeave()` method. Argument id is the identifier of the sending player.

```
component JoinLeaveSample
{
    public void OnVCPlayerJoin(string ID, string Data)
    {
    }

    public void OnVCPlayerLeave(string ID, string Data)
    {
    }
}
```


## Mike Permission State

### hsNetGetMicPermissionState
`int hsNetGetMicPermissionState()`

Gets the Mike Permission State. The constants below will be returned.

```
const int HSMicPermissionState_Prompt = 0;		// Permission in queue
const int HSMicPermissionState_Granted = 1;		// Permission Granted
const int HSMicPermissionState_Denied = 2;		// Permission Denied
```


### Callback Method

By defining the method below, the method will be called when mike permission status has changed.

```
public void OnChangedMicPermissionState(int MicPermissionState)
{
}
```


## SpatiumCode

### hsNetGetSpatiumCode
`string hsNetGetSpatiumCode()`

Gets the SpatiumCode defined in the Scene file.
