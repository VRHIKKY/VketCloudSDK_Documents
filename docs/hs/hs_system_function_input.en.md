# Built-in Functions - Input

Utility functions related to input
***

# HSTouch Class

A class for receiving touch results.

## Class Definition

```
class HSTouch
{
    public  bool    isTouched;
    public  bool    isEmptyTouch;
    public  int		posX;
    public  int		posY;
}
```

***

## Member Variables

### isTouched
`public  bool    isTouched`

Returns true when a touch occurs.

### isEmptyTouch
`public  bool    isEmptyTouch`

Returns true when a touch doesn't hit any clickable objects such as UI or clickable nodes.

### posX
`public  int posX`

Screen X coordinate when a touch occurs (top-left is 0, 0).

### posY
`public  int posY`

Screen Y coordinate when a touch occurs (top-left is 0, 0).

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
| HSKey_Numpad6    |                     |
| HSKey_Numpad7    |                     |
| HSKey_Numpad8    |                     |
| HSKey_Numpad9    |                     |
| HSKey_Multiply   |                     |
| HSKey_Add        |                     |
| HSKey_Separator  |                     |
| HSKey_Subtract   |                     |
| HSKey_Decimal    |                     |
| HSKey_Divide     |                     |
| HSKey_F1         |                     |
| HSKey_F2         |                     |
| HSKey_F3         |                     |
| HSKey_F4         |                     |
| HSKey_F5         |                     |
| HSKey_F6         |                     |
| HSKey_F7         |                     |
| HSKey_F8         |                     |
| HSKey_F9         |                     |

### hsInputClickButton
`bool hsInputClickButton( int hsMouseButton )`

Checks if the specified mouse key is pressed. hsMouseButton specifies the constant from the mouse key code table.

### hsInputGetMousePos
`void hsInputGetMousePos( ref int screenX, ref int screenY )`

Gets the mouse coordinates (screen coordinates). Top-left is (0, 0).

### hsInputLButtonClickEmpty
`bool hsInputLButtonClickEmpty()`

Returns true when left-clicking the mouse doesn't hit any clickable objects such as UI or clickable nodes.

### Mouse Key Code Table

| Key Code         | Description    |
|------------------|----------------|
| HSMouse_Left     | Left click     |
| HSMouse_Center   | Center click   |
| HSMouse_Right    | Right click    |

### hsInputGetTouch
`HSTouch hsInputGetTouch( int index )`

Returns touch information. index specifies the index of the Nth touch.
*To get the 1st touch information, specify (N-1) as the index.
Touch information can only be obtained while the finger is touching the screen. Raycast to UI or clickable nodes during screen touch is executed when the finger is released.
Therefore, note that touch information cannot be obtained in OnClickEmpty, OnClickNode, OnClickedButton, and OnClickedAvatar callbacks.

Implementation example:
```
component TouchTest
{
    bool m_Touched;

    public void Update()
    {
        if(hsIsMobile())
        {
            // Check the 1st input status
            // Also check isEmptyTouch to ignore touches on UI or clickable nodes
            HSTouch touch = hsInputGetTouch(0);
            if(touch.isTouched && touch.isEmptyTouch)
            {
                if(!m_Touched)
                {
                    m_Touched = true;

                    // Touch processing
                }
            }
            else
            {
                m_Touched = false;
            }
        }
    }
}
```

### hsInputGetTouchCount
`int hsInputGetTouchCount()`

Returns the number of fingers currently touching.

```
int num = hsInputGetTouchCount();
```

### hsInputGetTouchIds
`list<int> hsInputGetTouchIds()`

Returns the IDs of currently touching fingers as an array in the order they started touching.
Returns an empty array if not touching.

```
list<int> ids = hsInputGetTouchIds();
```

### hsInputGetTouchById
`HSTouch hsInputGetTouchById( int id )`

Returns touch information. id specifies the ID returned by hsInputGetTouchIds().
Returns null if the specified ID is not included in the current touch information (when the finger is released).
Touch information can only be obtained while the finger is touching the screen. Raycast to UI or clickable nodes during screen touch is executed when the finger is released.
Therefore, note that touch information cannot be obtained in OnClickEmpty, OnClickNode, OnClickedButton, and OnClickedAvatar callbacks.

Implementation example:
```
component TouchTest
{
    bool m_Touched;

    public void Update()
    {
        if(hsIsMobile())
        {
            list<int> ids = hsInputGetTouchIds();
            if (ids.Count() == 0) {
                // Not touching
                m_Touched = false;
                return;
            }
            // Here we only handle the finger that started touching earliest
            HSTouch touch = hsInputGetTouchById(ids[0]);
            if(touch.isTouched && touch.isEmptyTouch)
            {
                if(!m_Touched)
                {
                    m_Touched = true;

                    // Touch processing
                }
            }
            else
            {
                m_Touched = false;
            }
        }
    }
}
```

### hsInputIsInVirtualPadArea
`bool hsInputIsInVirtualPadArea(int x, int y)`

Returns true if the specified screen coordinates are on the virtual pad, false otherwise.

```
HSTouch touch = hsInputGetTouch(0);

int x = touch.posX;
int y = touch.posY;

bool result = hsInputIsInVirtualPadArea(x, y);
```

### hsInputScreenToWorldPos

`bool hsInputScreenToWorldPos(int screenX, int screenY, ref Vector3 worldPosition)`

Converts screen coordinates to 3D coordinates. You can use coordinates obtained from hsInputGetMousePos or hsInputGetTouch directly as screen coordinates.

```
HSTouch touch = hsInputGetTouch(0);

int x = touch.posX;
int y = touch.posY;

Vector3 touch3DPos = new Vector3();
hsInputScreenToWorldPos(x, y, touch3DPos);
```

### VR Device Key Code Table

| Key Code              | Description           |
|-----------------------|-----------------------|
| HSVRDevice_LeftHand   | Left hand controller  |
| HSVRDevice_RightHand  | Right hand controller |
| HSVRDevice_NoneHand   | No controller         |

### VR Button Key Code Table

| Key Code              | Description                                    |
|-----------------------|------------------------------------------------|
| HSVRButton_Trigger    | Trigger                                        |
| HSVRButton_Grip       | Grip                                           |
| HSVRButton_AxisPush   | Touchpad press (or stick press)                |
| HSVRButton_Unavailable| Unavailable button                             |
| HSVRButton_Primary    | A button for left hand, X button for right hand |
| HSVRButton_Secondary  | B button for left hand, Y button for right hand |

### hsInputIsVRDeviceButtonDown

`bool hsInputIsVRDeviceButtonDown(int DeviceIndex, int ButtonType)`

Returns true while the button of the VR device specified by the arguments is pressed, false if not pressed.

### hsInputGetVRDevicePos

`Vector3 hsInputGetVRDevicePos(int DeviceIndex)`

Returns the world coordinates of the VR device specified by the argument.

### hsInputGetVRDeviceRotate

`Vector3 hsInputGetVRDeviceRotate(int DeviceIndex)`

Returns the world rotation of the VR device specified by the argument as Euler angles.