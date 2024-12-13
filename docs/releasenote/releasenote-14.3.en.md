# Version 14.3.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Bug Fixes
- Fixed an issue where executing Item.WriteTextPlane would remove the original text color specification
- Fixed an issue where Item/Object within activities with Sphere colliders couldn't be clicked properly
- Fixed an issue where only the first emote after loading would briefly mix with the default emote

### Feature Additions and Adjustments
- Made the text chat preview background non-clickable
- Set the main canvas HUD's Z-value to negative to ensure it's always displayed at the back
- Added Show flag checking for Field-type items as well
- Changed the error message displayed when API key is invalid

### HeliScript
- Added TimeSpan class