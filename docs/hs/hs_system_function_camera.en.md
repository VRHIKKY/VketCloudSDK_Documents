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
***
