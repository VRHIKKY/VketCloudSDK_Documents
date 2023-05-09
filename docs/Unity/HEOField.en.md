# HEOField

![HEOField](img/HEOField.jpg)

Objects with HEOField attached will be packed into .heo during BuildAndRun. Make sure to set objects you want to include in the .heo file as children of the object with HEOField.

!!! note info
     Multiple HEOFields can be placed in the scene.

---

## Configure dynamic loading
VketCloud allows objects to be loaded when entering a specific area after entering the world. This is called "dynamic loading". You may set the dynamic loading by following the below steps.

### Load initiator
1. Uncheck "Dynamic loading" of the HEOField component of the object to be loaded.
2. Open the load collider item and press "Generate load collider" to generate an area collider to be used for loading.
3. Set the generated collider for loading as a child object of HEOField that is loaded from the beginning, and adjust the position and range.

![HEOField](img/HEOFieldAutoLoading.png)

### Unload initiator
1. Open the Unload Collider item and press "Generate Unload Collider" to generate an area collider to be used for loading.
2. Set the generated collider for unloading as a child object of HEOField and adjust the position and range.

!!! note caution
     The set colliders can be deleted from the list by pressing the X button on the right side of each item, but the objects will remain and must be deleted manually.
