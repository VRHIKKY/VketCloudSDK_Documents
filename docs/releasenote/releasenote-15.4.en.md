# Version 15.4.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Interaction

#### Feature Improvements
- Debug colliders can now be displayed even when collision and penetration callbacks are enabled.

#### Bug Fixes
- Fixed an issue with AreaCollider trigger detection.
- Fixed a rendering problem where meshes shared across multiple nodes would not display properly.

### HeliScript

#### New Feature Additions
- Added `hsCanvasSetGUIMulColor` function to set multiple colors for GUI elements.
- Improved functionality to allow item cloning even when no `.heo` file is configured.
