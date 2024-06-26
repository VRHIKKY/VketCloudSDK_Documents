# Version 13.2.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Bug Fixes

- **Emote Window During Photo Mode:** Fixed an issue where the emote window could appear in front of the preview and remain interactive when taking a photo in photo mode, depending on the screen size.
- **Clickable UI Rotation:** Corrected the issue where rotation for Clickable UI was not being converted from degrees to radians.
- **Navigation After Purchase Button Press:** Enabled navigation to a different tab immediately after pressing the purchase button.
- **iOS Navigation on Purchase:** Implemented checkout URLs by cart, allowing navigation to a different tab on iOS devices upon pressing the purchase button.
- **Open Button Not Closing After Screen Sharing Ends:** Fixed the issue where the Open button did not close after ending screen sharing.
- **Overlap in English World Details:** Corrected the display issue where the year part of the 'open:YYYY/MM/DD' overlapped with the text for 'open' in English world details.
- **Misalignment in Horizontal and Vertical Screen Settings:** Fixed the text misalignment where the voice chat description in settings moved to the left in horizontal orientation, and all sound settings text shifted to the upper left in vertical orientation.
- **Cutoff in English MENU>System Display:** Addressed areas where the English display of MENU>System was cut off.
- **Preset Avatar Thumbnails:** Fixed the issue where, if a preset avatar did not have a thumbnail set, the icon of the first preset avatar was displayed.
- **English Translation for Same Creator Worlds Button:** Updated the English translation for the button to view worlds by the same creator.
- **Icon Display Error in Profile Viewing:** When viewing the profile of a user who has not set an icon, the previously selected user's icon was displayed instead of the default unset icon.
- **Disappearing UI Title in Emote Selection:** Fixed an issue where the title of the UI, 'Emote Selection Screen,' sometimes disappeared when opening the 'Emote Action Selection' screen with the menu UI open.
- **Scrollbar Display in Vertical Screen Mode:** Corrected the appearance of a horizontal scrollbar when the browser window size changed to vertical orientation.
- **Content Clipping in World Details on Horizontal Screen:** Addressed the issue where the top part of the first line in 'World Details' was cut off on horizontal screens.
- **Typographical Error in Channel Movement Modal:** Corrected a typo in the channel movement modal.
- **Turn Back Issue with None:** Fixed the bug where movement became impossible when performing a 180-degree turn back operation if Turn Back was set to None.
- **Camera Usage Image Replacement and Language Corrections:** Updated the image for camera usage, replaced the English version button for viewing worlds by the same creator, and corrected the English display of screen resolution settings which was previously cut off.
- **Emote List Toggle Issue:** Resolved the problem where toggling was possible in parts of the emote list where no emotes were present from the second page onwards.
- **Activity Layer CallComponentMethod() Failure:** Fixed a bug that caused CallComponentMethod() on the activity side Layer to fail.
- **Text Cutoff in Vertical Screen EN Display:** Corrected text cutoff in the entry dialog in the vertical screen EN display.
- **Color Change on Button Click:** Made corrections to the color change on button clicks, and aligned the appearance of the current world dialog with the world list world dialog.

### HeliScript

- **ResetVelocity Function in Player Class:** Implemented a function to reset the velocity in the Player class.
- **TimeSpan Type Addition:** Added the TimeSpan type.
- **GetWorldPos/GetWorldRotate for type=scene:** Implemented these functions for type=scene.
- **SetShow Functionality for Activity Items:** Enabled the SetShow() function to work effectively for items in an activity.