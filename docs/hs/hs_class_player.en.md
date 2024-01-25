
# Player class

!!! Note Info
     The Player class represents your own player (avatar).


## class definition

```
class Player {

}
```

***

## Player utility functions
### hsPlayerGet
`Player hsPlayerGet()`

Get a Player instance of yourself.

### hsPlayerGetByID
`Player hsPlayerGetByID(string PlayerID)`

Get a Player instance according to the PlayerID.

***

## methods
### GetID
`string GetID()`

Get the ID identifying the player.

### GetHeadHeight()
`public float GetHeadHeight()`

Get the avatar height.

### GetCustomState()
`public string GetCustomState(string CustomStateName)`

Get the custom state at a designated timing.

### SetPos
`public void SetPos(Vector3 pos)`

Set coordinates.

### GetPos
`public Vector3 GetPos()`

Get coordinates.

### SetRotate
`public void SetRotate(float angle)`

Sets the orientation of the player.

### GetRotate
`public float GetRotate()`

Get the orientation of the player.

### GetName
`public string GetName()`

Get the player's name.

### GetPhysicsID
`int GetPhysicsID()`

Get the PhysicsID.

### Emote
`bool Emote(int EmoteIndex)`

Play the Emote set on the EmoteIndex.

### SetEmotion
`bool SetEmotion(int Index, string FileName, bool Loop, string ActionList)`

Load the designated Emotion.

For the ActionList string, write the "actions":{} string in the Scene file.

### ChangeMotion
`bool ChangeMotion(string MotionName)`

Play the motion.

### SetNextMotion
`bool SetNextMotion(string MotionName)`

Set the next motion to be played.

!!! caution "Using SetNextMotion"
    SetNextMotion cannot be called multiple times.

### ShowChatBalloon
`bool ShowChatBalloon(string Text)`

Show the designated text in the chat balloon.

### SetMoveSpeed
`bool SetMoveSpeed(float MoveSpeed)`

Set the player's move speed by meter per second.

### GetMoveSpeed
`float GetMoveSpeed()`

Get the player's move speed by meter per second.

### SetMoveSpeedupRatio
`bool SetMoveSpeedupRatio(float MoveSpeedupRatio)`

Set the player's move speed up ratio when running.


### GetMoveSpeedupRatio
`float GetMoveSpeedupRatio()`

Get the player's move speed up ratio when running.