# HEOClickGuide

![HEOClickGuide_1](./img/HEOClickGuide_1.jpg)

By selecting `ON`, this component generates gameobjects for showing a click guide within the designated range.<br>
Selecting `OFF` will **delete** the generated gameobjects.


## Usage
When activating `HEOClickGuide`, the `[objectname_clickArea]` gameobject (henceforth referred as `clickArea`) will be generated as a child object.<br>
Also, `[objectname_clickArea]` (henceforth referred as `clickguide`) will be generated outside the `World` object.

![HEOClickGuide_2](./img/HEOClickGuide_2.jpg)

The `clickArea` gameobject controls the show/hide state of the `clickguide` gameobject, using the [HEOAreaCollider](./HEOAreacollider.md) and [Show/HideItem](../Actions/Item/ShowHideItem.md).

![HEOClickGuide_3](./img/HEOClickGuide_3.jpg)

In the initial state, `clickArea` is the same size as the default cube.<br>
Like the image below, resizing the `clickArea` to designate the zone for click guide appearance is highly recommended.

![HEOClickGuide_4](./img/HEOClickGuide_4.jpg)

By modifying `clickArea` using [Enable/DisableClickableNode](../Actions/Node/EnableDisableClickableNode.md), the clickable state of the original object can be toggled.

![HEOClickGuide_5](./img/HEOClickGuide_5.jpg)

For example, a clickable webpage gimmick syncronized with the click guide can be implemented. <br>
This gimmick uses [OpenWeb](../Actions/System/Openweb.md) and a `Clickable` [HEOCollider](./HEOCollider.md) set to the original object.

![HEOClickGuide_6](./img/HEOClickGuide_6.jpg)

The `clickguide` object contains a [HEOPlane](./HEOPlane.md) component to show the click guide image.<br>
In the initial state, the `Billboard` and `Show` is disabled, therefore enabling them are highly recommended.

![HEOClickGuide_7](./img/HEOClickGuide_7.jpg)

The appearance of the click guide after build is as below. 

The click guide appearing when the player is inside the `clickArea`:

![HEOClickGuide_8](./img/HEOClickGuide_8.jpg)

The click guide disappearing when the player is outside the `clickArea`:

![HEOClickGuide_9](./img/HEOClickGuide_9.jpg)