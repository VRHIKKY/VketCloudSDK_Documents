# VKC Activity Exporter

VKC Activity Exporter is an SDK tool to export Activities. Using this tool, the creator can make a **VKCActivityExporter** object to export Activities.

The exported Activities can be called by [VKC Item Activity](../VKCComponents/VKCItemActivity.md) as a pseudo-prefab to place multiple objects in worlds, and shared to other users by creating a zip file / Unitypackage containing the Activity to be distributed on platforms such as [Vket Store](https://store.vket.com/en/){target=_blank} or the "Asset Store" on the [Vket Cloud Mypage](https://cloud.vket.com/en/){target=_blank}.

For basic information about Activity and how-to-use, please refer to [VKC Item Activity](../VKCComponents/VKCItemActivity.md).

## Usage

1. Select the objects in Hierarchy to be exported as an Activity.

    ![VKCActivityExporter_1](img/VKCActivityExporter_1.jpg)

2. Open the right-click menu and select  `Export as Activity`.

    ![VKCActivityExporter_2](img/VKCActivityExporter_2.jpg)

    Note that `Export as Activity` will appear only when selected objects have the VKCComponents available in Activity attached.

    See "[VKCComponents available in Activity](#VKCComponents-available-in-activity)" for a list of available VKCComponents.

3. Select `Export as Activity` to generate a **VKC Activity Exporter** object.<br> The previously selected objects will be a child-object of **VKC Activity Exporter**. 

    ![VKCActivityExporter_3](img/VKCActivityExporter_3.jpg)

## How to export an Activity

![VKCActivityExporter_4](img/VKCActivityExporter_4.jpg)

The export process can be started by setting properties on the `VKC Activity Exporter`.

| Label | Function |
| ---- | ---- |
| HeliScript | Add/Delete HeliScript. <br> Added HeliScript can be used in same manner as[VKC Attribute Script](../VKCComponents/VKCAttributeScript.md). |
| Motion | Add/Delete Motion.<br> Added Motion will be labeled inside the Activity's json file, which can be called by functions such as [Player.ChangeActivityMotion()](../hs/hs_class_player.md#changeactivitymotion) or [Player.SetNextActivityMotion()](../hs/hs_class_player.md#setnextactivitymotion) to play the motion on the player's avatar. |
| Thumbnail | Designate a thumbnail image for the Activity.<br> A warning will be displayed if this image is not a .png file. |

!!! bug "Build error when setting a VRM for VKC Item Object and exporting as an Activity"
    On SDK Ver12.x, when settings a VRM on [VKC Item Object](../VKCComponents/VKCItemObject.md) and exporting as an Activity, a build error is caused by file reading error.<br>
    This issue is scheduled to be fixed on the next SDK version.<br>
    As a workaround, the json can be manually rewritten after placing the vrm file in the later mentioned data folder.

![VKCActivityExporter_9](img/VKCActivityExporter_9.jpg)

``` json
{
  "scripts": [],
  "motions": {},
  "items": [
    {
      "name": "GameObject",
      //replace filename to the vrm file directory placed under data/avatar as follows:
      "filename": "./data/avatar/Vketchan_MToon_blendshape.vrm",
      "pose": "",
// ...
```

## Export

Selecting the **Export** button on the Activity Exporter will begin the export process.

1. Create/Select a folder to export the Activity. Creating a new folder is recommended, as the folder name will be used as the name of the Activity file.
    ![VKCActivityExporter_5](img/VKCActivityExporter_5.jpg)

2. Selecting the folder will begin the export process of the Activity. On completion, the following message will be shown:

    ![VKCActivityExporter_6](img/VKCActivityExporter_6.jpg)

### Files included in the exported folder

![VKCActivityExporter_7](img/VKCActivityExporter_7.jpg)

The following files will be generated in the folder when exporting a new Activity.

- JSON file named as the folder name (this defines the Activity structure)

- English README file (Feel free to write the Activity details to distribute your own Activity!)

- Japanese README file (Translation helps!)

- data folder

The **data** folder includes assets such as texture, 3D models, and HeliScript files used by the Activity.

When distributing Activity to other creators, this Activity folder should be compressed to a Unitypackage / zipped for easier handling.

Please take good consideration that the assets in data folder do not violate copyrights, and follows the [Vket Cloud Engine Terms of Use](https://account.vket.com/terms?locale=en#vket-cloud){target=_blank}.

## Setting Property in Activity

When using an Activity in [VKC Item Activity](../VKCComponents/VKCItemActivity.md), the Activity's `Overrides`(Property) can be defined to be used in HeliScript.

To add a new Property, open the json file of the Activity and define a key and value in `properties` as like below:

```json
// ...
      "components": [],
      "properties": {
          "isShowVketChan":"0",
          "VketChanName":"VketChan 01",
          "VketChanCount":"1"
      },
      "lookatcamera": false,
// ...
```

The defined Property will be displayed in [VKC Item Activity](../VKCComponents/VKCItemActivity.md) / `overrides` on loading the Activity's json, which can be used to predefine the Activity's behavior.

![VKCActivityExporter_8](img/VKCActivityExporter_8.jpg)

Each Property can be called in HeliScript by using [Item.GetProperty()](../hs/hs_class_item.md#getproperty) and [Item.SetProperty()](../hs/hs_class_item.md#setproperty).

Note that Property key and value will always be a **string** value, cast the type to use in other context.

```csharp
component VketChan
{
    Item m_Item; //Item object itself

    //Parameter of Activity
    string isShowVketChan;

    public VketChan() 
    {
//hsSystemOutput("Activity Loaded!" + "\n");
    m_Item = new Item();
    m_Item = hsItemGetSelf();

//GetProperty to initialize property value
    isShowVketChan = m_Item.GetProperty("isShowVketChan");
    }

// Script goes on as usual HeliScript. isShowVketChan can be used anytime

}
```

## VKCComponents available in Activity

- [VKCItemActivity](../VKCComponents/VKCItemActivity.md)

- [VKCNodeRotateAnimation](../VKCComponents/VKCNodeRotateAnimation.md)

- [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)

- [VKCItemAudio](../VKCComponents/VKCItemAudio.md)

- [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)

- [VKCItemCamera](../VKCComponents/VKCItemCamera.md)

- [VKCNodeCollider](../VKCComponents/VKCNodeCollider.md)

- [VKCItemField](../VKCComponents/VKCItemField.md)

- [VKCNodeMeshCollider](../VKCComponents/VKCNodeMeshCollider.md)

- [VKCItemObject](../VKCComponents/VKCItemObject.md)

- [VKCItemParticle](../VKCComponents/VKCItemParticle.md)

- [VKCItemPlane](../VKCComponents/VKCItemPlane.md)

- [VKCNodeShadow](../VKCComponents/VKCNodeShadow.md)

- [VKCItemSpot](../VKCComponents/VKCItemSpot.md)

- [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

- [VKCNodeUVScroller](../VKCComponents/VKCNodeUVScroller.md)

- [VKCNodeVideoTrigger](../VKCComponents/VKCNodeVideoTrigger.md)  *On SDK Ver12.3.4 and later versions

!!! caution "HEOVideoTrigger in Activity"
    On SDK Ver12.3.4 and later versions, HEOVideoTrigger can be included on exporting Activity.<br>
    However, as Autoplay cannot be enabled in Activity, the player must manually click or use the [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md) to play the video.

## VKCComponents unavailable/unsupported in Activity

- [VKCAttributeActionTrigger](../VKCComponents/VKCAttributeActionTrigger.md)

- [VKCNodeCylinderCollider](../WorldMakingGuide/Collider.md)

- [VKCNodeBlendShapeTranslator](../VKCComponents/VKCNodeBlendShapeTranslator.md)

- [VKCNodeLODLevel](../VKCComponents/VKCNodeLODLevel.md)

- [VKCNodeMirror](../VKCComponents/VKCNodeMirror.md)

- [VKCNodeReflectionProbeType](../VKCComponents/VKCNodeReflectionProbeType.md)

- [VKCAttributeProperty](../VKCComponents/VKCAttributeProperty.md) * WIP

- [VKCAttributeScript](../VKCComponents/VKCAttributeScript.md)

- [VKCNodeVideoTrigger](../VKCComponents/VKCNodeVideoTrigger.md) * Before SDK Ver12.3.4