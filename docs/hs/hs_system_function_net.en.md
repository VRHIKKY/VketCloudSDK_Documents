
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

### Data reception callback method

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