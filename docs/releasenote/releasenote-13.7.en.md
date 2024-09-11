# Version 13.7.7

## SDK (Editor extension tool for creating worlds in Unity)

### New Features
- Install Wizard 4.0
  - Installation will be prevented if the path or project name contains Japanese characters or other double-byte characters.
  - Since Unity 2022 supports .Net Standard, there's no longer a need to change the API Compatibility Level. The step to set "Player Configure: API Compatibility Level" to ".Net 4.X" has been removed.

- Support for Unity 2022.3.6f1.
  - SDK 13.7.7 will continue to support Unity 2019.4.31.

### Bug Fixes
- Fixed an issue where uploading large worlds via the World Uploader would time out and cause problems with the presigned URL.
  - Adjusted the token issuance timing to ensure uploads succeed for large worlds (those taking more than an hour to build).
- Tutorial-related fixes:
  - When importing Tutorial-Scripts-, the scene does not open automatically.
  - The tutorial button for 'Tutorial-script-' is not displayed.
  - Tutorial images are not displayed.
  - Warnings appear in the debug console for some scenes in the tutorial.
  - Some tutorials have issues when running the build.
  - The "close" button does not appear on the last page of the SDK tutorial system.
- If a tutorial is imported without saving the scene, changes made to the scene opened before import are not saved.
- **[Mac only]** When updating from SDK 9.11.1 to the latest version, the value for LookAtCamera on the HEO Plane gets reset.
- In the language selection window displayed after the first login following project startup, changing the language to English does not update the top menu items to English.
- When attaching a Hep file to VKC Item Particle, it can only be selected from the options.
- In world uploads, if the account belongs to multiple teams and the world doesn't exist in the first team, the team-switching tab does not appear.
- Debug console-related issues:
  - No error is displayed in the console when a texture that is not a power of two is applied.
  - When an object with VketCloudSettings is missing from the scene, pressing the jump button leads to a 404 manual page.
- The mesh and collider information do not appear in the inspector for VKCItemObject.
- When multiple VKC (HEO) components are attached to a single GameObject, the "Auto Play" and "Loop" options for "VKCNodeVideoTrigger (HEOVideoTrigger)" are not displayed.
- Language settings applied after logging in and restarting Unity do not immediately reflect in the editor's menu tab and dropdown menus.

### Unresolved Issues
- **[Mac only]** Uploads fail if HEOObject is present in the scene.
- If a different language is selected from the language selection window, both English and Japanese appear in the top menu items.

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
