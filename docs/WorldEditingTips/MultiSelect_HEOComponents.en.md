# Editing Multiple VKCComponents

By selecting objects having the same VKCComponents in the Hierarchy, the component settings can be applied in a single edit.

## How to Use

For example, two objects having the [VKC Node Shadow](../VKCComponents/VKCNodeShadow.md) is in the Hierarchy as below.

![MultiSelect_1](img/MultiSelect_1.jpg)

By selecting the objects, the Inspector will show the VKCComponent in common, which enables editing for both objects.

![MultiSelect_2](img/MultiSelect_2.jpg)

After editing on multiple objects, the set value will be applied on each objects' components.

![MultiSelect_3](img/MultiSelect_3.jpg)

![MultiSelect_4](img/MultiSelect_4.jpg)

## Cautions

When multi-editing VKCComponents, the add-delete controlling buttons such labeled as add/create/generate/delete and Play button on [VKC Node VideoTrigger](../VKCComponents/VKCNodeVideoTrigger.md) cannot be edited.<br>
However, the On/Off toggle on [VKC Attribute ClickGuide](../VKCComponents/VKCAttributeClickGuide.md) and the +/- editing on lists can be multi-edited.

If one of the objects does not have the VKCComponent in common, or no VKCComponent is in common, the notification below will be displayed.<br>
If the notification appears, re-select objects or add the VKCComponent to be edited to the object missing it via "Add Component".

![MultiSelect_5](img/MultiSelect_5.jpg)