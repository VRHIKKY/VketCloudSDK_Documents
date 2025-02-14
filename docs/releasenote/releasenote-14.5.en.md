# Version 14.5.6

## SDK (Editor Extension Tool for Creating Worlds in Unity)

### Fixed Issues

The features that were rolled back in version 14.4.12 have been restored in version 14.5.6:

- **VKC Item Object:** Pickable
- **VKC Setting Rendering:** Tone Map
- **VKC Item TextPlane:** Font Weight
- **VKC Setting Player:** Enable Click to Move
- **VKC Setting Player:** Despawn Height (y)
- **VKC Item Field:** Added "Force Collider Disable" option

### Particle Editor

- Fixed an issue where clicking on a numeric input field in the properties panel and entering a value did not update the number correctly.
- Resolved a bug that prevented proper input into checkboxes after performing operations.

> **Note:** Even in SDK 14.5.6, if your display scaling is set above 100%, these issues may recur. Please set your system's display scaling to **100%**.

### Other Issues (Infinite Loading)

When installing SDK 14.4.12 as a new installation or updating via the Install Wizard (from SDK 13.7.7 → 14.4.12 or SDK 14.2.1 → 14.4.12), there were cases where the loading process would never complete.

- **Fixed:** The infinite loading issue has been resolved when updating from **SDK 13.7.7 → 14.5.6**.
- **Unresolved:** When updating from **SDK 14.2.1** or **14.4.12 → 14.5.6**, the infinite loading problem remains.
