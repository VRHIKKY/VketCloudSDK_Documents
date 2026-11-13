# VKC Item Activity

![VKCItemActivity_1](img/VKCItemActivity_1.jpg)

VKC Item Activity is a component for setting activities.<br>
The "Activity" in Vket Cloud is a feature for wrapping models and scripts as a single [Item](../hs/hs_overview.md#item), aimed for easy placement and implementation on worlds.

???+ note "Available methods for this object type"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [SetPos](../hs/hs_class_item.md#setpos)
    - [GetPos](../hs/hs_class_item.md#getpos)
    - [SetQuaternion](../hs/hs_class_item.md#setquaternion)
    - [GetQuaternion](../hs/hs_class_item.md#getquaternion)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [IsLoading](../hs/hs_class_item.md#isloading)
    - [IsLoaded](../hs/hs_class_item.md#isloaded)
    - [ReplaceItem](../hs/hs_class_item.md#replaceitem)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [GetProperty](../hs/hs_class_item.md#getproperty)
    - [CallComponentMethod](../hs/hs_class_item.md#callcomponentmethod)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

## Basic Settings

| Label | Function |
| ---- | ---- |
| Scene Preview | Creates a preview object of the designated activity in Scene. |
| .json | Designates the json file containing the activity information. |
| Overrides | Edits the settings in each activity. |

!!! warning "About Scene Preview"
    When enabling `Scene Preview`, a preview object of the activity will be created in Scene, which position / size / rotation can be altered.<br>
    However, the edits will be **reverted** on build, and Transform values of object with VKC Item Activity will be referred instead.

![VKCItemActivity_2](img/VKCItemActivity_2.jpg)

### Advanced Settings

| Label | Function |
| ---- | ---- |
| Clickable | Toggles acceptance of click input from player |
| Auto Loading | Toggles auto loading enable/disable |
| Item Render Priority | Designates the Item's render priority. <br> For details, refer to [RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md) |
| Show Photo Mode | Toggles display/hide activity when in photo mode |

!!! info "Creating your own Activity"
    On SDK Ver12.x and later versions, a tool has been added to create/export your own Activity.<br>
    For details, please see [VKC Activity Exporter](../SDKTools/VKCActivityExporter.md).

### About Edit Mode

The Edit Mode allows re-editing of exported Activity files on the Unity Editor.<br>
When Edit Mode is set to On, a list of HeliScripts and Motions related to the activity will be shown, allowing to edit and configure.

Note that Scene Preview will be set to On when Edit Mode is enabled, which will disallow preview to be hidden.

![VKCItemActivity_3](img/VKCItemActivity_3.jpg)

#### How to Edit Activity

For example, the AnalogClockActivity is edited by the instructions below.

![VKCItemActivity_4](img/VKCItemActivity_4.jpg)

- The "Activity" object in the image above is the object with VKC Item Activity component attached.
- To add, delete, or edit an Activity, the objects under the root object with VKC Item Activity attached must be edited. Other objects outside the root object will not be saved to the Activity. <br>
For this case, the `AnalogClockObject` and its child objects located under Activity will be edited.

The objects under Activity can be edited in the scene view, by editing components such as Transform, etc.

![VKCItemActivity_5](img/VKCItemActivity_5.jpg)

By selecting Off in VKC Item Activity's Edit Mode, the edited contents will be automatically saved.

![VKCItemActivity_6](img/VKCItemActivity_6.jpg)

When save is successfully completed, a dialog as the image below will be shown.

![VKCItemActivity_7](img/VKCItemActivity_7.jpg)

---

## How to Download Activity

The Vket Cloud Activity can be downloaded from the asset store.<br>

The asset store can be accessed by selecting "Asset Store" in the [Vket Cloud MyPage](https://cloud.vket.com/){target=_blank} after login.

![VKCItemActivity_8](img/VKCItemActivity_8.jpg)

For details on how to use the asset store, refer to the manual page below. (English Version WIP)
[Gimmicks and Features ready to use! How to use the Vket Cloud Asset Store and Activities](https://magazine.vket.com/n/n7d554dbeb552){target=_blank}

## How to Use

For example, the analog clock activity from the asset store is used here.<br>
For details on how to get the activity data, refer to the manual which is referred later.

1\. Unzip the downloaded Activity file. As unzipping instructions varies among OS, please use the method on your preference.

![VKCItemActivity_9](img/VKCItemActivity_9.jpg)

2\. Check the file contents, and make sure to read the README before use.

![VKCItemActivity_10](img/VKCItemActivity_10.jpg)

3\. Read the README's articles, especially the "Activity Settings" which contains the parameters for customizing the activity.

![VKCItemActivity_11](img/VKCItemActivity_11.jpg)

4\. Move the unzipped analogclock folder to the Unity project with the Vket Cloud SDK installed. Folder position within the Assets is at your choice.

![VKCItemActivity_12](img/VKCItemActivity_12.jpg)

5\. In an empty scene, place the essential components by right clicking and selecting "Add Essential Objects for Vket Cloud", and create an empty object for setting the activity.

![VKCItemActivity_13](img/VKCItemActivity_13.jpg)

![VKCItemActivity_14](img/VKCItemActivity_14.jpg)

6\. Change the object name to AnalogClock or other names. (Avoid name conflicting with other objects.)

![VKCItemActivity_15](img/VKCItemActivity_15.jpg)

7\. Attach the VKC Item Activity component to the AnalogClock object.

![VKCItemActivity_16](img/VKCItemActivity_16.jpg)

8\. Set the `activity\analogclock\AnalogClockActivity.json` to the VKC Item Activity's json setting.

![VKCItemActivity_17](img/VKCItemActivity_17.jpg)

9\. Set a value for "useSecondHand" in VKC Item Activity's overrides. For details on the settings, refer to the "Activity Settings".

10\. As the analog clock will appear on the object origin, adjust the placement position via Transform.

![VKCItemActivity_18](img/VKCItemActivity_18.jpg)

11\. Build and see if the analog clock appears.

![VKCItemActivity_19](img/VKCItemActivity_19.jpg)
