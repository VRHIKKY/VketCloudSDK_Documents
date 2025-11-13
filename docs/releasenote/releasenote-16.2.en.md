# Version 16.2.0

## HeliodorLib (Engine used in browser-displayed worlds)

### HeliScript

#### Function Additions
- Added Lerp and Slerp functions to Quaternion class
- Added makeQuaternionFromAxis to calculate quaternion from XYZ axis vectors
- Added makeVector2Dot
- Added hsInputWorldToScreenPos to convert 3D world coordinates to 2D screen coordinates
- Added hsMathMin, hsMathMax, hsMathClamp

#### Bug Fixes
- Fixed issue where JsVal backward compatibility was broken due to function overloading
- Added OnResize callback without arguments
- Fixed issue where private methods could be accessed from outside the class