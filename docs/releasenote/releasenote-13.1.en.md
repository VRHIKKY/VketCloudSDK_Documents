# Version 13.1.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Feature Enhancements and Adjustments

- **Camera Preview:** Removed the margins around the camera preview.
- **Clickable UI Movement:** Added a 'move' flag to `clickimages` for `object` types, allowing Clickable UIs to move along with the target node.

### Bug Fixes

- **Icon Display Error:** When viewing the profile of a user who has not set an icon, the previously selected user's icon was displayed instead of the default unset icon.
- **Menu Background on Vertical Screens:** Fixed lines appearing in 9-slice background images in photography mode and when darkening buttons in community mode.
- **Photography Description Image Placement:** Adjusted the placement of images used for photography instructions.
- **UI Layering Issues:** The 'Unfocus' and 'Profile' buttons were displayed in front of the 'Emote Window.'
- **Focus Mode Persistence:** After focusing on a user, clicking on the ground to move and then clicking on the user again did not remove the 'Unfocus' button or exit focus mode.
- **Memory Leak with My Avatar:** If the screen was left idle without clicks, the memory used by My Avatar increased continuously.
- **Button Alignment:** The button for creating worlds on vertical screen menus was misaligned by 1px.
- **Voice Chat Icon Spacing:** The spacing between user icons in voice chat was sometimes uneven.
- **UI Disappearance After Camera Mode:** Text in the voice channel UI disappeared after exiting camera mode.
- **Channel Settings Button Missing:** The button for channel settings was missing for users who had not created a channel.
- **Improper Text Wrapping:** Text for 'Create new channel' was wrapping at an unnatural position on vertical screens.
- **Emote List Retrieval Error:** Emotes linked to avatar types were incorrectly retrieved as 'Common' for all avatar types during in-game transitions.
- **Non-functional Emote '+' Button:** Pressing the '+' button did not trigger the emote API.
- **Emote Indexing Error:** Setting emotes to null mistakenly assigned them index 0.
- **Initial Emotes Not Set:** Emotes set in the initial_emotes sheet were not being initialized correctly.
- **Action Palette Reload Issue:** Reloading when there were fewer than four emotes in the action palette caused it to reset to four.
- **Inactive 'Like' Button:** After logging in from in-game, the 'Like' button in the world details of the current world remained inactive and unclickable.
- **Virtual Pad Interference:** Other buttons became non-functional while using the virtual pad.
- **Text Chat Slider Handle Replacement:** Adjusted for better interaction.
- **Text Chat Display Issue on Vertical Screens:** Removed the first level of display for text chat on vertical screens.
- **Text Chat Button and Slider Replacement:** Enlarged the close button for vertical screen text chat and replaced the slider image.
- **General Notification URL Issue:** After a reload, URLs were being rendered before the notification window.
- **Avatar Tab Clipping:** On non-Windows devices, the edges of the My Avatar tab appeared to be clipped.
- **Emote Checkbox Issue:** Checkmarks were not appearing next to 'Otagei' and 'Beer' when setting emotes on vertical screens.
- **Emote Action Selection UI Issue:** Pressing the emote button while the 'Emote Action Selection' was displayed resulted in only the selection UI being visible.
- **Community Screen Mutual Follow Icon Disappearance:** The mutual follow icon disappeared when 'In the same channel' was displayed for a user on the community screen.
- **UI Overlap After Opening Friend Invitation Window:** UIs overlapped when pressing 'Return to Start Point' after opening the friend invitation window.
- **Text Clipping in Space Chat on Mobile Devices:** When the character count was high, text overflowed from the chat bubbles on mobile devices.
- **Inconsistent UI Button Response on Mobile Devices:** UI buttons did not darken when pressed on smartphone devices.
- **Toast Message Disappearance Inconsistency:** The manner in which toast messages disappeared differed between vertical and horizontal screens.
- **UI Overlap Between Text and Voice Channels:** After opening a text channel on vertical screens, opening a voice channel caused the UIs to overlap.
- **Separation of Text Chat and Action List:** Ensured that the text chat and action list did not overlap on vertical screens.
- **Delayed Voice Chat Loading on Vertical Screen HUD:** Fixed the omission of delayed loading for voice chat on the vertical screen HUD.
- **Text Overflow in Self-Introduction:** Fixed the issue of text overflowing in self-introductions on vertical screens.
- **Unnatural Line Breaks in Channel Creation:** Adjusted the line breaks in the description for open channels when creating new channels on vertical screens.
- **Alignment of My Avatar Name:** Changed the alignment of the My Avatar name to left-justified.
- **

Display of Emote Icons on Vertical Screens:** Fixed the issue where the 'Otagei' and 'Beer' emote icons were not displayed when the screen was set to vertical.
- **Visibility of hud_config During Target Focus:** Made hud_config visible even during target focus.
- **Target Focus Cancellation on Button Press:** Implemented target focus cancellation when pressing buttons in the side menu.
- **Cancellation of Target Focus After Kick/Ban/Block:** Ensured that target focus is cancelled after performing a kick, ban, or block.
- **Target Focus Cancellation on Warp:** Target focus is now cancelled when warping to the start point.
- **Focus Cancellation When Player Exits:** If CSkywayPlayer cannot be retrieved because the player has exited, focus is cancelled.
- **Persistent View Change Button During Target Focus on Vertical Screens:** Fixed the issue where the view change button did not disappear during target focus on vertical screens.
- **Camera Orientation Toward World Origin on Dummy Avatar (Instance) Focus:** Adjusted the camera to prevent it from orienting toward the world's origin when focusing on a dummy avatar (instance).
- **Player_GetPos in HeliScript:** Ensured that Player_GetPos correctly retrieves coordinates even for instances that have been distance cut.
- **Omission of Focus Cancellation on Arbitrary Click:** Implemented the omission of focus cancellation when clicking at arbitrary locations.
- **Addition/Omission of Unfocus Button:** Added an unfocus button at the top right and omitted the previous button.
- **Emote List Text Adjustment:** Modified the emote list to allow for two lines of emote names.
- **[script] Item.PlayVideoSyncTime() BaseTime Issue:** Fixed a problem where the BaseTime passed to Item.PlayVideoSyncTime() turned into an abnormal value on the JS side.
- **Friend Invitation Button Persistence:** When opening the friend invitation tab from the menu and entering photography mode by tapping the camera button, the friend invitation button remained on the screen.
- **Misalignment of Profile Icon on Vertical Screen:** Adjusted the profile icon on vertical screens to correct a slight misalignment to the right.
- **Omission of Button Click Color Change:** Fixed the issue where the color change on button click was omitted.
- **Touch Interaction with Buttons:** Made adjustments so that touching outside a button and then moving the finger inside and lifting does not trigger the button.
- **Correction of Notification ID Specification During Guest Login:** Fixed an incorrect setting of the notification reception ID during guest login.
- **Partial Display of Login Window After Camera and Operation Tab Switch:** Fixed an issue where only part of the login window was displayed when switching tabs after operating the camera and avatar in the menu.
- **Disappearance of Emote Button After Opening Menu Window:** Fixed the issue where the emote button disappeared after starting camera mode with the menu window open.
- **Text Remaining in Chat Preview After Enabling Photography Mode:** Fixed the issue where text remained in the chat preview after enabling photography mode.
- **Change of embed.html to share.html:** Changed the link copy button for embedding to accommodate the new share.html.
- **UI Overlap in World Details:** Adjusted the Z-value to fix UI overlap when opening world details.
- **Inconsistency in World Details and Loading Screen:** Fixed an issue where the loading screen mentioned "Debug World" but it was not listed in the world details, by adjusting the Z-value of the world details text.
- **User Scroll Issue in Voice Chat:** Fixed an issue where the user scroll in voice chat did not move after scrolling once.
- **Opening Friend Invitation Similarly to Other Menu Contents:** Made adjustments to open the friend invitation window in the same manner as other menu contents, and replaced the Twitter icon with an X icon.
- **Notification Modal Opening on Name Change in Profile:** Fixed a bug where a notification modal opened when changing the name in the profile.
- **Notification Modal Opening After Pressing Enter Room Button During Guest Login:** Adjusted so that a notification modal opens after pressing the enter room button during guest login.
- **Word Filtering in Profile Updates:** If the updated username or self-introduction contained prohibited words, the text was reverted to the previous wording.
- **Inconsistency in Nameplate Size Across Devices:** Fixed an issue where the number of characters that changed the nameplate size varied between devices, affecting the number of characters displayed.
- **Renaming of ReflectionProveDetectType:** Renamed ReflectionProveDetectType to ReflectionProbeDetectType.
- **Default Value for Node-Level Transparency Animation in HEO:** Set the default value for node-level transparency animation to false also in C++ internals.
- **Emote List Pagination Issue:** Fixed an issue where closing and reopening the emote list while paginated displayed a mixture of content from the first and second pages.
- **Language Inconsistency in Browser:** Fixed a bug where the option "Leave posts in space" remained in Japanese even when the browser was set to display in English.
- **Camera Mode Instruction and Arrow Display Order Issue

:** Corrected the display order issue between the camera mode instructions and arrows.
- **Scrollbar Display Misalignment in Chat Column:** Fixed the misalignment of the scrollbar display in the chat column.
- **Text Clipping in Username Input:** Fixed an issue where the 10th character was cut off when entering a username in full-width characters only.
- **Right Alignment of Vertical Screen Menu:** Changed the vertical screen menu to right alignment.
- **Separation of Photography from Vertical Screen Menu List:** Moved photography outside the vertical screen menu list.
- **Addition of English Images to Text Chat Button:** Added English version images to the text chat button.
- **Change of Vertical Screen Photography Button to English:** Changed the vertical screen photography button to switch to English.
- **Highlighting of Friend Invitation Button on Click:** Changed the friend invitation button to highlight when clicked.
- **Size Adjustment of Toast Messages on Vertical Screen:** Enlarged the size of toast messages on the vertical screen and changed the colors of the mouse movement target and avatar profile verification target.
- **Reloading Issue After Wearing My Avatar:** Fixed a build error that occurred when trying to read data/common after reloading following the wearing of My Avatar due to ModelFileName containing AvatarType.
- **UI Overlap in Camera Mode Preview Frame:** Lowered the Z-value to fix the issue where the UI for operation instructions overlapped the preview frame displayed after taking a photo in camera mode.
- **Player Class Operation Restriction During Notification Modal:** Made adjustments in the HeliScript's player class to set operations as impossible when the notification modal is open.
- **Movement and Jump Issue During Notification Modal:** Fixed the issue where movement and jumping were possible even when the notification modal was open.
- **Toast Display Time Set to 5 Seconds:** Changed the display time of common toasts to 5 seconds.
- **Variation in Emote Icon Visibility Across Devices:** Fixed the issue where the appearance of emote icons varied between devices.
- **Adjustment of Action Palette and Emote List on Vertical Screen:** Made adjustments to ensure the action palette and emote list did not overlap the virtual stick and chat preview area on vertical screens.
- **Button Color Change on Click in HUD:** Added button color change on click in the HUD.
- **UI Implementation Without Image Setting in In-Game Notification Modal:** Implemented a UI in the in-game notification modal without setting an image.
- **Non-functioning SSAO:** Fixed an issue where SSAO stopped functioning.
- **Size Issue of User Icons in Community Vertical Screen:** Corrected the oversized user icons in the community vertical screen.
- **Button Persistence Issue After Starting Camera from Community Display:** Fixed an issue where buttons for invitations and joining remained after starting the camera from the community display.
- **Forced Stopping of Click Movement During Forced Player Location Change:** Ensured that click movement processing always stops during forced player location changes, such as "Return to Start Point."
- **Link Issue in System Message When Invited on Vertical Screen:** Fixed the issue where the 'Join' in the system message displayed when invited was not a link.
- **Immediate Update Issue After Following/Unfollowing Other Users:** Fixed the issue where changes did not update immediately after following or unfollowing other users.
- **Non-functioning Two-Finger Touch Restriction During Virtual Pad Input:** Ensured that the two-finger touch restriction does not function during virtual pad input.
- **Language Inconsistency in Browser Display:** Added English text to correct the issue where the option "Do not show this message again" remained in Japanese even when the browser was set to English.
- **Voice Chat Channel List Display Issue:** Fixed an issue where the 6th channel in the voice chat channel list was not displayed.
- **Adjustment of SpaceList Display Count:** Adjusted the display count in SpaceList.

### HeliScript
- **ResetVelocity Function in Player Class:** Implemented a function to reset velocity in the player class.
- **TimeSpan Type Addition:** Added the TimeSpan type.
- **GetWorldPos/GetWorldRotate for type=scene:** Implemented these functions for type=scene.
- **SetShow Functionality for Activity Items:** Enabled the SetShow() function to work on items in an activity.
