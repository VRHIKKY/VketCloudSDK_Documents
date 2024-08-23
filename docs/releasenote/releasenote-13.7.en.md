# Version 13.7.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Bug Fixes
- Some VRM model expressions are distorted on iOS.
- When repeatedly pressing another key during a turn-back motion to play the turn-around motion multiple times, the player falls.
- The player capsule in the opposite direction of RayDir was a collision target, causing mis-clicks.
- On iOS, the first swipe is not recognized as a tap, causing BGM playback to fail.

### HeliScript
- In the Player class, made it so that the ID of oneself is queried to the engine every time.

### Particle Editor
- Fixed so that the alpha of ColorOverTime works based on the alpha that is the base of ColorOverTime.
- Fixed to display the ArcSpeed editing panel only in specific cases by referring to ArcMode.
- Enabled saving of animation tile information and fixed loading errors.
