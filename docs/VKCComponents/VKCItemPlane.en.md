# VKC Item Plane

![HEOPlane_1](img/HEOPlane_1.jpg)

VKC Item Plane lets you instantiate image files.  
The file format needs to be in png format.

For details, please refer to the [specification limit](../WorldMakingGuide/UnityGuidelines.md).

|  Label | Initial Value | function |
| ----   | ---- | ---- |
| Show | true | Enable if you want the image to appear from the beginning. |
| Texture in JP / EN | Blank | Specify the image texture. Texture in EN is the image shown when your browser's language setting is set to English. Leave it blank if unncessary.  |
| Scene Preview | false | Creates a preview object in Scene. |
| Look at Camera | false | Make the image face towards the camera at all times. |
| Alpha Blending | false| Lets you use cutout/transparency. |
| Z-bias | 0 | Higher z value will make the image show in front of other objects. |
| Double Side | false | Enable/Disable display on double sides |

### Advanced Settings

| Label | Function |
| ---- | ---- |
| Clickable | Toggles acceptance of click input from player |
| Auto Loading | When enabled, this Item will be loaded automatically on world entrance.<br> As this Item must be explicitly loaded when `Auto Loading` is disabled, use [Dynamic Loading](VKCItemField.md) or use [Load()](../hs/hs_class_item.md#load) on HeliScript. |
| Item Render Priority | Designates the Item's render priority. <br> For details, refer to [RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md) |
| Show Photo Mode | Toggles display/hide activity when in photo mode |
| Overrides | On Entering the world, the `Material` and `Texture` set in the Overrides will be used instead of textures set in VKC Item Plane. |

!!! note caution
    The Overrides property is currently under progress.<br>
    Further usage are to be added by future updates.

!!! note
    The `Billboard` setting in pre-Ver9.3 components has been renamed to `Look at Camera`.<br>
    If the scene data is migrated from past SDK versions, the `Billboard` setting value will be reflected to `Look at Camera`.