# Using EditorOnly Tags

The object with Unity's EditorOnly tag attached will be ignored on the Vket Cloud SDK build.

!!! note caution
    In the current version, the Node objects (e.g. Cube, Sphere, etc.) are available to be ignored.<br>
    Note that VKCComponent objects such as [VKC Item Object](../VKCComponents/VKCItemObject.md) and [VKC Item Activity](../VKCComponents/VKCItemActivity.md) are unavailable to be ignored.

## How to Use

Select the object to be ignored on build, and attach the EditorOnly tag via Inspector > Tag pulldown menu.

![EditorOnlyTag_1](img/EditorOnlyTag_1.jpg)

By building the world, the object with EditorOnly will be ignored and not exist on the built world.<br>
Please be careful not to designate objects with crucial components/resources to EditorOnly.

![EditorOnlyTag_2](img/EditorOnlyTag_2.jpg)

By detaching the EditorOnly tag, the object will exist in the built world.

![EditorOnlyTag_3](img/EditorOnlyTag_3.jpg)