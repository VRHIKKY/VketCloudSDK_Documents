# Built-in Functions - Input

Utility functions related to input

***

### hsInputIsKeyDown
`bool hsInputIsKeyDown(int KeyCode)`

Checks if the specified key is pressed. KeyCode specifies the constant from the key code table.

It is recommended to use this together with hsInputSetKeyValid.

### hsInputSetKeyValid
`void hsInputSetKeyValid(int KeyCode, bool Valid)`

Specifies whether the specified key is enabled on the Heliodor side. KeyCode specifies the constant from the key code table.

By setting it to false, Heliodor will consider the key as not pressed. For example, calling hsInputSetKeyValid(HSKey_Space, false) can prevent the player avatar from jumping. When using hsInputIsKeyDown on the HeliScript side, it is recommended to suppress it first and then restore it after use to avoid conflicts with Heliodor's functions.

***

### Key Code Table

| Key Code         | Description         |
|------------------|---------------------|
| HSKey_Back       | BackSpace key       |
| HSKey_Tab        |                     |
| HSKey_Return     | Enter key           |
| HSKey_Shift      |                     |
| HSKey_Control    |                     |
| HSKey_Escape     |                     |
| HSKey_Space      |                     |
| HSKey_Prior      | PageUp key          |
| HSKey_Next       | PageDown key        |
| HSKey_End        |                     |
| HSKey_Home       |                     |
| HSKey_Left       |                     |
| HSKey_Up         |                     |
| HSKey_Right      |                     |
| HSKey_Down       |                     |
| HSKey_Insert     |                     |
| HSKey_Delete     |                     |
| HSKey_0          |                     |
| HSKey_1          |                     |
| HSKey_2          |                     |
| HSKey_3          |                     |
| HSKey_4          |                     |
| HSKey_5          |                     |
| HSKey_6          |                     |
| HSKey_7          |                     |
| HSKey_8          |                     |
| HSKey_9          |                     |
| HSKey_A          |                     |
| HSKey_B          |                     |
| HSKey_C          |                     |
| HSKey_D          |                     |
| HSKey_E          |                     |
| HSKey_F          |                     |
| HSKey_G          |                     |
| HSKey_H          |                     |
| HSKey_I          |                     |
| HSKey_J          |                     |
| HSKey_K          |                     |
| HSKey_L          |                     |
| HSKey_M          |                     |
| HSKey_N          |                     |
| HSKey_O          |                     |
| HSKey_P          |                     |
| HSKey_Q          |                     |
| HSKey_R          |                     |
| HSKey_S          |                     |
| HSKey_T          |                     |
| HSKey_U          |                     |
| HSKey_V          |                     |
| HSKey_W          |                     |
| HSKey_X          |                     |
| HSKey_Y          |                     |
| HSKey_Z          |                     |
| HSKey_Numpad0    |                     |
| HSKey_Numpad1    |                     |
| HSKey_Numpad2    |                     |
| HSKey_Numpad3    |                     |
| HSKey_Numpad4    |                     |
| HSKey_Numpad5    |                     |
| HSKey_Numpad6