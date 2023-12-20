# 9.10.0

## HeliodorLib (Engine used in worlds displayed in the browser)

### Bug Fixes
- When using WebGL 1.0, if the source setting for replacing video textures is not set to Clamp, the screen turns completely black. Therefore, we have made changes to enforce the Clamp setting.