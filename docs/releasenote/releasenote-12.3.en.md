# 12.3.0

## HeliodorLib (Engine used in worlds displayed in the browser)

### Bug Fixes
- Incorrect click detection on avatars when using dummy avatars.
- MToon's _Color parameter not being multiplied correctly.
- English version incorrectly labels blocking as "Forced Exit."
- Some VRM eyes turning white.
- Support for receiving OnNetReceivePosJoin, OnNetReceivePosLeave in subscenes.
- Unable to receive custom state and custom data in subscenes and activities.
- Profiles not updating immediately on iOS.

### Feature Additions & Adjustments
- Transparency animations are now executed only in TPS mode.
- Added the ability to configure initial entry and entry failure handling in the scene file.
- (HeliScript) Reduced stack usage: Avoid looping through instructions for list's new, Resize(), Add().
