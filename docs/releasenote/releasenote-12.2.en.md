# 12.2.0

## HeliodorLib (Engine used in worlds displayed in the browser)

### Bug Fixes
- Camera becomes inoperative if the camera mode is reopened without closing the preview screen after taking a picture.
- MeshCollider not supported in scene file's pos, causing slipping through.
- hsItemGetSelf() now returns null on failure.
- MaxStackSizeError on iOS when entering a room with logged-in users present.
- Implemented a workaround for Safari only returning Prompt and not Denied when microphone access is not permitted.
- (HEOExporter) Texture offset includes scale.
- Kick & BAN operations do not work when the entry dialog is displayed.
- Text chats from temporarily blocked users appear in the log.
- MaxStackSizeError on iOS when using voice chat.
- Adjustments to various UI coordinates.
- Camera becomes inoperative when reopening it after closing the preview photo without closing the button during camera mode.
- Error stop after first loading on Mac/Chrome121 (WebGL1 shader extension definition was inappropriate).
- Changed depth depth in WebGL1.0 to avoid Z-Fighting.
- The Pointing emote list is not displayed in the English version of the landscape screen.
- EN nameplate icons not displayed in EN browser.
- (HeliScript) Unable to manipulate layers from an activity.
- Worlds by the same creator tab not displaying worlds on iOS devices.
- Microphone cannot be used after exiting the voice channel.
- The crown does not appear even after new creation.
- Main menu tabs display incorrectly when pressing the same creator's world button.
- Emote popup and text balloon overlap, so the latter is now drawn in the foreground.
- EmotePopup animations are processed regardless of the nameplate's display state.
- All emotes disappear from the palette after deciding in the action palette addition screen.
- After removing an emote set in the emote slot, pressing the × button without deciding keeps the emote displayed in the slot.
- (HeliScript) Methods like Player.SetPos() do not work while connecting to the network.
- Community feature input fields are enabled when opening someone else's user profile.
- Only the center of the top-left world information is responsive.
- Depth of field is always disabled in WebGL1.
- Camera suddenly moves away.
- Nameplates are not displayed on dummy avatars.
- Does not return to Idle motion after playing a non-looping emote.

### Feature Additions & Adjustments
- Make collision detection for objects with the ForegroundRendering flag the highest priority.
- (HEOExporter) Added setting to use transparency animation per Node.
- (Scene) Added setting to use transparency animation per Item.
- Grey out the config button when SSAO is not used.
- Consider alpha of ShadeColor in MToon.

## SDK (Editor extension tool for creating worlds in Unity)

### Feature Additions
- Motion correction for Vket-chan No. 1, addition of avatar files for Vket-chan No. 2, Vket Nyann, and Mokuri.
