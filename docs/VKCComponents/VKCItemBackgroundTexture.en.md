# VKC Item Background Texture

![HEOBackgroundTexture](img/HEOBackgroundTexture_1.jpg)

This component will display the designated image to the scene background.<br>
The image will not shift on player movement like Skybox, and position will be constant.

Please make sure that the designated image has a 1:1 aspect ratio.

For example, a sky image having a 1:1 aspect ratio is used as the scene background:

![HEOBackgroundTexture_2](img/HEOBackgroundTexture_2.jpg)

![HEOBackgroundTexture_3](img/HEOBackgroundTexture_3.jpg)

### Advanced Settings

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Clickable | false | Toggles acceptance of click input from player |
| Auto Loading | true | When enabled, this Item will be loaded automatically on world entrance.<br> As this Item must be explicitly loaded when `Auto Loading` is disabled, use [Dynamic Loading](VKCItemField.md) or use [Load()](../hs/hs_class_item.md#load) on HeliScript. |
| Show Photo Mode | true | Toggles display/hide item when in photo mode |
