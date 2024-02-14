# 12.1.0

## HeliodorLib (Engine used in worlds displayed in the browser)

### Bug Fixes
- Icons for temporarily blocked users do not grey out.
- Adjusted the size of the text chat input field.
- Fixed a bug in the calculation of UV coordinates for 9slice, causing issues with the display of the emote UI and others.
- Name tags not displaying names on mobile devices.
- On iOS devices, selecting the "Worlds by the same creator" tab does not display any worlds.
- Avatars switching to T-pose after changing avatars.
- Blinking stops after resetting facial emotions.
- Adjusted TPS camera's left, center, and right position correction to prevent overflow considering the screen ratio.
- Null access error on the first entry without a RoomID set, cancelling subsequent entry processes.
- Corrected the parameter of the BAN monitoring method, which was not being called correctly.

### Feature Additions & Adjustments
- Remove the message button from profiles.
- Adjusted player rotation speed.
- Clicking a selected avatar again will deselect it.

This update addresses several critical bugs and makes adjustments to enhance the user experience in browser-displayed worlds, including improvements in avatar interaction, UI display issues, and camera behavior adjustments.
