# HEOField

![HEOField](img/HEOField.jpg)

Objects with HEOField attached will be packed into .heo during BuildAndRun. Make sure to set objects you want to include in the .heo file as children of the object with HEOField.

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Auto Loading | true | Activates Dynamic Loading |
| Look at Camera | false | Make the image face towards the camera at all times. |
| Load Collider |  | Generates a collider that will load a designated object on enter |
| UnLoad Collider |  | Generates a collider that will unload a designated object on enter |
| Overrides | | On Entering the world, the videoclip in the [HEOVideoTrigger](HEOVideoTrigger.md) attached to the object designated by `Node Name` will be overwrited, using the `Video Clip` set in `Overrides` property. |

!!! note caution
    The Overrides property is currently under progress.<br>
    Further usage are to be added by future updates.

!!! note info
     Multiple HEOFields can be placed in the scene.

!!! note
    The `Billboard` setting in pre-Ver9.3 components has been renamed to `Look at Camera`.<br>
    If the scene data is migrated from past SDK versions, the `Billboard` setting value will be reflected to `Look at Camera`.

---

## Configure dynamic loading
VketCloud allows objects to be loaded when entering a specific area after entering the world. This is called "dynamic loading". You may set the dynamic loading by following the below steps.

### Load initiator
1. Uncheck "Dynamic loading" of the HEOField component of the object to be loaded.
2. Open the load collider item and press "Generate load collider" to generate an area collider to be used for loading.
3. Set the generated collider for loading as a child object of HEOField that is loaded from the beginning, and adjust the position and range.

![HEOField](img/HEOFieldAutoLoading.jpg)

### Unload initiator
1. Open the Unload Collider item and press "Generate Unload Collider" to generate an area collider to be used for loading.
2. Set the generated collider for unloading as a child object of HEOField and adjust the position and range.

!!! note caution
     The set colliders can be deleted from the list by pressing the X button on the right side of each item, but the objects will remain and must be deleted manually.
