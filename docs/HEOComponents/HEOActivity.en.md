# HEOActivity

![HEOActivity_1](img/HEOActivity_1.jpg)

HEOActivity is a component for setting activities.<br>
The "Activity" in Vket Cloud is a feature for wrapping models and scripts as a single [Item](../hs/hs_overview.md#item), aimed for easy placement and implementation on worlds.

## 設定項目

| Label | Function |
| ---- | ---- |
| World Position | Sets the position for placing the activity. |
| World Rotation | Sets the rotation for placing the activity. |
| Scene Preview | Creates a preview object of the designated activity in Scene. |
| .json | Designates the json file containing the activity information. |
| Overrides | Edits the settings in each activity. |

!!! caution "About Scene Preview"
    When enabling `Scene Preview`, a preview object of the activity will be created in Scene, which position / size / rotation can be altered.<br>
    However, the edits will be **reverted** on build, and Transform values of object with HEOActivity will be referred instead.

![HEOActivity_14](img/HEOActivity_14.jpg)

### Advanced Settings

| Label | Function |
| ---- | ---- |
| Auto Loading | When enabled, this Item will be loaded automatically on world entrance.<br> As this Item must be explicitly loaded when `Auto Loading` is disabled, use [Dynamic Loading](HEOField.md) or use [Load()](../hs/hs_class_item.md#load) on HeliScript. |
| Item Render Priority | Designates the Item's render priority. <br> For details, refer to [RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md) |

---

## How to Download Activity

The Vket Cloud Activity can be downloaded from the asset store.<br>

The asset store can be accessed by selecting "Asset Store" in the [Vket Cloud MyPage](https://cloud.vket.com/){target=_blank} after login.

![HEOActivity_13](img/HEOActivity_13.jpg)

For details on how to use the asset store, refer to the manual page below. (English Version WIP)
[Gimmicks and Features ready to use! How to use the Vket Cloud Asset Store and Activities](https://magazine.vket.com/n/n7d554dbeb552){target=_blank}

## How to Use

For example, the analog clock activity from the asset store is used here.<br>
For details on how to get the activity data, refer to the manual which is referred later.

1\. Unzip the downloaded Activity file. As unzipping instructions varies among OS, please use the method on your preference.

![HEOActivity_2](img/HEOActivity_2.jpg)

2\. Check the file contents, and make sure to read the README before use.

![HEOActivity_3](img/HEOActivity_3.jpg)

3\. Read the README's articles, especially the "Activity Settings" which contains the parameters for customizing the activity.

![HEOActivity_4](img/HEOActivity_4_en.jpg)

4\. Move the unzipped analogclock folder to the Unity project with the VketCloudSDK installed. Folder position within the Assets is at your choice.

![HEOActivity_5](img/HEOActivity_5.jpg)

5\. In an empty scene, place the essential components by right clicking and selecting "Add Essential Objects for Vket Cloud", and create an empty object for setting the activity. 

![HEOActivity_6](img/HEOActivity_6.jpg)

![HEOActivity_7](img/HEOActivity_7.jpg)

6\. Change the object name to AnalogClock or other names. (Avoid name conflicting with other objects.)

![HEOActivity_8](img/HEOActivity_8.jpg)

7\. Attach the HEOActivity component to the AnalogClock object.

![HEOActivity_9](img/HEOActivity_9.jpg)

8\. Set the `activity\analogclock\AnalogClockActivity.json` to the HEOActivity's json setting.

![HEOActivity_10](img/HEOActivity_10.jpg)

9\. Set a value for "useSecondHand" in HEOActivity's overrides. For details on the settings, refer to the "Activity Settings".

10\. As the analog clock will appear on the object origin, adjust the placement position via Transform.

![HEOActivity_11](img/HEOActivity_11.jpg)

11\. Build and see if the analog clock appears.

![HEOActivity_12](img/HEOActivity_12.jpg)
