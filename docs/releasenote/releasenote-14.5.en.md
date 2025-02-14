# Version 14.5.6

## SDK (Editor extension tool for creating worlds in Unity)

## Fixed Bugs
Although version 14.4.12, released on January 15, is designated as the stable release, we have discovered that some features implemented in the latest version 14.2.1 (released on October 30) were not actually implemented. The features that have been effectively rolled back are as follows:
- Pickable property of VKC Item Object
- Tone Map feature in VKC Setting Rendering
- Font Weight in VKC Item TextPlane
- Enable Click to Move in VKC Setting Player
- Despawn Height (y) in VKC Setting Player
- Force Collider Disable in VKC Item Field

## Particle Editor
When clicking on the numerical input field for a property and entering a number, the value is not properly reflected, and subsequent operations (such as checking checkboxes) do not function correctly.
This issue affects the particle editor included in the following versions of the Vket Cloud SDK, which therefore cannot be used normally:
SDK 14.4.12
SDK 14.2.1
SDK 13.7.7
SDK 13.4.1
SDK 12.3.4

## Other Issues
When installing SDK 14.4.12 as a new installation, or when updating from SDK 13.7.7 → 14.4.12 or SDK 14.2.1 → 14.4.12 via the Install Wizard, there are cases where the loading process does not complete.
In such cases, forcibly restarting Unity will allow the update to complete without any further issues.
