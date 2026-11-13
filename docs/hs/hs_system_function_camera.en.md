# Built-in Functions - Camera

Utility functions related to camera.

***

## List of Functions

### hsCameraGetXVector

`void hsCameraGetXVector(ref float X, ref float Y, ref float Z)`

Retrieves the X vector of the camera in world coordinates.

### hsCameraGetYVector

`void hsCameraGetYVector(ref float X, ref float Y, ref float Z)`

Retrieves the Y vector of the camera in world coordinates.

### hsCameraGetZVector

`void hsCameraGetZVector(ref float X, ref float Y, ref float Z)`

Retrieves the Z vector of the camera in world coordinates.

### hsCameraSetTPSCameraYOffset

`void hsCameraSetTPSCameraYOffset(float YOffset, float YDistanceOffset)`

Specifies the Y-axis offset for the TPS (Third-Person Shooter) camera. The unit is meters. The `YDistanceOffset` parameter is used for further adjustment based on camera zoom.

### hsCameraGetPos

`void hsCameraGetPos(ref float X, ref float Y, ref float Z)`

Retrieves the position of the camera in world coordinates.

### hsCameraGetPosVector3

`Vector3 hsCameraGetPosVector3()`

Retrieves the position of the camera as a `Vector3` in world coordinates.

### hsCameraSetFPSMode

`void hsCameraSetFPSMode(bool Enable)`

Sets the camera to FPS mode when `Enable` is set to `true`, and to TPS mode when set to `false`.

### hsCameraGetFPSMode

`bool hsCameraGetFPSMode()`

Returns the current value of the camera's FPS mode.

### hsCameraGetQuaternion

`Quaternion hsCameraGetQuaternion()`

Retrieves the camera's orientation as a Quaternion in world coordinates.

### hsCameraGetRotateSpeed

`float hsCameraGetRotateSpeed()`

Retrieves the "Control Sensitivity" specified in MENU → Settings → Camera as a float value.

### hsCameraGetXRotateReverse

`bool hsCameraGetXRotateReverse()`

Retrieves whether the "Vertical Control" specified in MENU → Settings → Camera is set to reverse as true.

### hsCameraGetYRotateReverse

`bool hsCameraGetYRotateReverse()`

Retrieves whether the "Horizontal Control" specified in MENU → Settings → Camera is set to reverse as true.

### hsCameraGetAdjustType

`int hsCameraGetAdjustType()`

Retrieves the "Third-Person View Position" specified in MENU → Settings → Camera as an int value.

Center: 0, Left: 1, Right: 2.

### hsCameraGetPitchAngleType

`int hsCameraGetPitchAngleType()`

Retrieves the "Eye Level" specified in MENU → Settings → Camera as an int value.

Low: 0, Normal: 1, High: 2.

### hsGetCameraName

`string hsGetCameraName()`

Retrieves the item name of the currently specified item camera.

Returns an empty string if it's the main camera (not any item camera).

***
