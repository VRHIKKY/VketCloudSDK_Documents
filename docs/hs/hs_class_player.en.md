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

!!! warning "Change of feature for calling Player class functions"
    On SDK Ver12.x and later versions, calling Player class functions within the constructor has been disabled. <br>
    In the example below, a bool variable in the Update function is used to obtain the Player instance outside the constructor.

```
component PlayerInitSample
{   
    //Define a player object
    //Note that objects cannot be initialized here, including using functions such as hsPlayer
 Player ex_player;

    bool    ex_isPlayerInit; //bool for handling player object initialization

    //Constructor
    public PlayerInitSample()
    {
    ex_isPlayerInit = false;
    //hsPlayerGet() cannot be called here
    }

    public void update()
    {
        //If Player instance has not been obtained yet, call hsPlayerGet() only once
        if(!ex_isPlayerInit){
        ex_player = hsPlayerGet();
        ex_isPlayerInit = true;
        }
    }
}
```

***

## methods

### GetID

`string GetID()`

Get the ID identifying the player.

### SetControlEnabled

`bool SetControlEnabled(bool Enabled)`

Enable/Disable player controls. When set to false, the player cannot move by WASD key, or move the camera by mouse dragging.

### GetHeadHeight()

`public float GetHeadHeight()`

Get the avatar height.

### GetCustomState()

`public string GetCustomState(string CustomStateName)`

Get the custom state at a designated timing.

### SetPos

`void SetPos(Vector3 pos, bool CameraRotate = true)`

Set the player's position. camera will not rotate when in TPS mode and CameraRotate is false.

### GetPos

`Vector3 GetPos()`

Get coordinates.

### SetRotate

`void SetRotate(float angle, bool CameraRotate = true)`

Sets the orientation of the player.

### GetRotate

`float GetRotate()`

Get the orientation of the player.

### SetJumpVelocity

`void SetJumpVelocity(float JumpVelocity)`

Designates the initial velocity for player jump.
The default value is designated in [Player Settings](../VketCloudSettings/PlayerSettings.md).

### GetName

`string GetName()`

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

### ChangeActivityMotion

`bool ChangeActivityMotion(string MotionName)`

Plays the motion defined in the [Activity file](../SDKTools/VKCActivityExporter.md).

### SetNextActivityMotion

`bool SetNextActivityMotion(string MotionName)`

Sets the next motion to play after the current motion is played, which defined in the [Activity file](../SDKTools/VKCActivityExporter.md).

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

### ResetVelocity

`public void ResetVelocity()`

Resets the player's velocity.

### SetPresetAvatar

`bool SetPresetAvatar(int AvatarIndex)`

Changes the player's avatar to a preset avatar. This will only affect the Player object, and will not change other players.

### GetPresetAvatar

`int GetPresetAvatar()`

Gets the index value of the current preset avatar.

If the player is using their MyAvatar or Player object is disabled, -1 value will be returned.
