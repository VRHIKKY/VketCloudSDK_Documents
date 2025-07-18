# Version 14.5.14

## SDK (Editor Extension Tool for Creating Worlds in Unity)

### New Features

- Implemented upload progress display functionality.
- The "Uploading" status and progress rate can be confirmed via dialog or progress bar.

### Fixed Issues

- Fixed an issue where the Activity JSON content would become corrupted when editing VKC Item Activity.
  - Fixed the problem where Activity.json content would be modified even without changes when exiting VKC Item Activity edit mode (toggling On/Off or Apply)

---

# Version 14.5.10

## SDK (Editor Extension Tool for Creating Worlds in Unity)

### Fixed Issues

- Fixed an issue where textures applied to materials would be removed when initiating another build/upload while texture override was enabled and a build/upload was already in progress.
- Improved UI to prevent the build/upload button from being pressed again while a build/upload is in progress.

---

# Version 14.5.7

## SDK (Editor Extension Tool for Creating Worlds in Unity)

### Fixed Issues

- In HeliodorLib 15.3, fixed an issue where in-game content was not loaded properly during a local build (Build And Run).

---

# Version 14.5.6

## SDK (Editor Extension Tool for Creating Worlds in Unity)

### Fixed Issues

The features that were rolled back in version 14.4.12 have been restored in version 14.5.6:

- **VKC Item Object:** Pickable
- **VKC Setting Rendering:** Tone Map
- **VKC Item TextPlane:** Font Weight
- **VKC Setting Player:** Enable Click to Move
- **VKC Setting Player:** Despawn Height (y)
- **VKC Item Field:** Force Collider Disable

### Particle Editor

- Fixed an issue where clicking on a numeric input field in the properties panel and entering a value did not update the number correctly.
- Resolved a bug that prevented proper input into checkboxes after performing operations.

> **Note:** Even in SDK 14.5.6, if your display scaling is set above 100%, these issues may recur. Please set your system's display scaling to **100%**.

### Other Issues (Infinite Loading)

When installing SDK 14.4.12 as a new installation or updating via the Install Wizard (from SDK 13.7.7 → 14.4.12 or SDK 14.2.1 → 14.4.12), there were cases where the loading process would never complete.

- **Resolved:** The infinite loading issue has been resolved when updating from **SDK 13.7.7 → 14.5.6**.
- **Unresolved:** When updating from **SDK 14.2.1** or **14.4.12 → 14.5.6**, the infinite loading problem remains.
