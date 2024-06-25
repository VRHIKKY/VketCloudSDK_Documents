# VKC Item Activity

![VKCItemActivity_1](img/VKCItemActivity_1.jpg)

VKC Item Activity is a component for setting activities.<br>
The "Activity" in Vket Cloud is a feature for wrapping models and scripts as a single [Item](../hs/hs_overview.md#item), aimed for easy placement and implementation on worlds.

## Basic Settings

| Label | Function |
| ---- | ---- |
| Scene Preview | Creates a preview object of the designated activity in Scene. |
| .json | Designates the json file containing the activity information. |
| Overrides | Edits the settings in each activity. |

!!! caution "About Scene Preview"
    When enabling `Scene Preview`, a preview object of the activity will be created in Scene, which position / size / rotation can be altered.<br>
    However, the edits will be **reverted** on build, and Transform values of object with VKC Item Activity will be referred instead.

![VKCItemActivity_2](img/VKCItemActivity_2.jpg)

### Advanced Settings

| Label | Function |
| ---- | ---- |
| Clickable | クリック可能かどうかを変更します |
| Auto Loading | When enabled, this Item will be loaded automatically on world entrance.<br> As this Item must be explicitly loaded when `Auto Loading` is disabled, use [Dynamic Loading](VKCItemField.md) or use [Load()](../hs/hs_class_item.md#load) on HeliScript. |
| Item Render Priority | Designates the Item's render priority. <br> For details, refer to [RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md) |
| Show Photo Mode | 写真撮影モードの際、Activityを表示するかどうかを変更します |

!!! info "Creating your own Activity"
    On SDK Ver12.x and later versions, a tool has been added to create/export your own Activity.<br>
    For details, please see [VKC Activity Exporter](../SDKTools/VKCActivityExporter.md).

### Edit Modeについて

Edit ModeはエクスポートされたActivityファイルをUnityEditorで再編集できる機能です。  
Edit ModeのON状態になるとActivityに関連するHeliScriptとMotionのリストを表示し、編集が可能になります。

Edit ModeがOn状態のときScene PreviewはOnに固定され、チェックボックスは非表示になります。

![VKCItemActivity_3](img/VKCItemActivity_3.jpg)

#### Activity編集の方法

ここではAnalogClockActivityを例に編集の方法を解説します。

![VKCItemActivity_4](img/VKCItemActivity_4.jpg)

- 画像の「Activity」オブジェクトはVKC Item Activityスクリプトをアタッチしているオブジェクトです。
- Activity直下のAnalogClockObjectは可視化するオブジェクトのルートです。
オブジェクトの追加、削除、変更をする場合、PreviewObjectRootの下層のオブジェクトのみに適用されます。

可視化オブジェクトは、シーンビューからTransfrom等の調整が可能です。

![VKCItemActivity_5](img/VKCItemActivity_5.jpg)

インスペクタービューでVKC Item ActivityのEdit ModeのOffボタンをクリックすると、編集したActivity内容を自動的に保存されます。

![VKCItemActivity_6](img/VKCItemActivity_6.jpg)

保存成功の場合は以下のダイアログを表示します。

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

4\. Move the unzipped analogclock folder to the Unity project with the VketCloudSDK installed. Folder position within the Assets is at your choice.

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
