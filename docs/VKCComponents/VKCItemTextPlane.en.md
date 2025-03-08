# VKC Item Text Plane

![HEOTextPlane_1](img/HEOTextPlane_1.jpg)

VKC Item Text Plane will display the designated text at the object position attaching this component.<br>
For example, by Build & Running the world the text will be displayed as below: 

![HEOTextPlane_3](img/HEOTextPlane_3.jpg)

???+ note "Available methods for this object type"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [SetPos](../hs/hs_class_item.md#setpos)
    - [GetPos](../hs/hs_class_item.md#getpos)
    - [SetQuaternion](../hs/hs_class_item.md#setquaternion)
    - [GetQuaternion](../hs/hs_class_item.md#getquaternion)
    - [GetScale](../hs/hs_class_item.md#getscale)
    - [SetScale](../hs/hs_class_item.md#setscale)
    - [MovePos](../hs/hs_class_item.md#movepos)
    - [IsMoving](../hs/hs_class_item.md#ismoving)
    - [SetShow](../hs/hs_class_item.md#setshow)
    - [IsShow](../hs/hs_class_item.md#isshow)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [IsLoading](../hs/hs_class_item.md#isloading)
    - [IsLoaded](../hs/hs_class_item.md#isloaded)
    - [ClearTextPlane](../hs/hs_class_item.md#cleartextplane)
    - [WriteTextPlane](../hs/hs_class_item.md#writetextplane)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

## Settings

| Label | Initial Value | Function |
| ----   | ---- | ---- |
| Show | true | Enable this if you want the text to display by default |
| Text | blank | Input the text to be displayed |
| Scene Preview | true | Enable/Disable text preview in the Unity editor's Scenet view.<br> This setting is a beta feature | 
| Font Size | 128 |  Specify the text size |
| Font Weight | 400 | Specify the boldness |
| Texture Size | X:512 Y:512 | Specify the base resolution for the displayed text texture <br> **Value needs to be a power of two!** |
| Text Alignment | Left Top | Set the text alignment and centering for display |
| Color | #FFFFFF | Specify the text color |
| Wrap Text | false | Enable/Disable automatic text wrapping |
| Look at Camera | false |  Make the text face towards the camera at all times |
| Alpha Blending | true | Lets you use cutout/transparency |

!!! note caution
    In the Text property, if you want to insert a line break, specify "\n" in the string.<br>
    If you input any other regular expressions (e.g. tab "\t", line break "\r", backspace "\b"), a build error will occur.

!!! warning "Font Weight is not available in the stable SDK 14.4.12"
    Font Weight cannot be used in the stable SDK 14.4.12 because its functionality has been rolled back.
    If you have SDK 14.2.1 or any version later than 14.4.12, please use that instead.

### Advanced

| Label | Initial Value | Function |
| ----   | ---- | ---- |
| Auto Loading | true | When enabled, this Item will be loaded automatically on world entrance.<br> As this Item must be explicitly loaded when `Auto Loading` is disabled, use [Dynamic Loading](VKCItemField.md) or use [Load()](../hs/hs_class_item.md#load) on HeliScript. |
| Clickable | false | Toggles acceptance of click input from player |
| Character Space | 0.0| Set the character space by pixel |
| Line Space | 1.0 | Set the line space by pixel |
| Z-Bias | -0.05 | Higher z value will make the text drawn in front of other objects |
| Show Photo Mode | true | Toggles display/hide item when in photo mode |
| Overrides | | On Entering the world, the text set in this `text` property will be used instead Text in VKC Item Text Plane. |

!!! note caution
    The Overrides property is currently under progress.<br>
    Further usage are to be added by future updates.

By enabling preview, the designated text will be shown in the Scene view as below:

![HEOTextPlane_2](img/HEOTextPlane_2.jpg)

!!! note
    The `Billboard` setting in pre-Ver9.3 components has been renamed to `Look at Camera`.<br>
    If the scene data is migrated from past SDK versions, the `Billboard` setting value will be reflected to `Look at Camera`.