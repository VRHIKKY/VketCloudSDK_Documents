
# VKC Item Object

![VKCItemObject_1](img/VKCItemObject_1.jpg)

VKC Item Object is used to instantiate a dynamic object, which is based on a pre-exported .heo file, or using a vrm, [hrm](../WorldOptimization/TextureCompression.md), or glb format model.

## Settings

### Basic Settings

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Show | true | Toggle object visibility. |
| File Mode | | Allocate a heo, vrm, hrm, or glb file.<br>If a  vrm file has a [Compressed Texture](../WorldOptimization/TextureCompression.md), specify the texture file on hrm.  |
| Scene Preview | false | Preview the object instantiation on the Unity Scene.<br>Further details are on "Previewing Objects" article. |
| Enable Bone | false | (only for vrm, hrm, and gbl) Enable if you want to play armature animation. |
| Circle Shadow | false |  Sets to draw a circle shadow.  |
| Look at Camera | false |  Make the object face towards the camera at all times. |
| Object Mode | None | Choose from None, Pose, and Motion. If you choose Pose or Motion, you will need to additionally specify an .hem file. |

### Advanced Options

![VKCItemObject_2](img/VKCItemObject_2.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Clickable | false | Toggle mouse interaction on object. |
| Auto Loading | true | Used for setting up [Dynamic Loading](VKCItemField.md). <br> The object will be loaded on the first load by default.  |
| Light Scattering Target | true | Sets whether the object is affected by scattering when [Light Scattering](../VketCloudSettings/RenderingSettings.md) is enabled. |
| Shadow Caster | false | If [Shadow Mapping](../VketCloudSettings/RenderingSettings.md) is enabled, this sets the object's shadow to be casted on other shadow receivers. |
| Shadow Receiver | false | If [Shadow Mapping](../VketCloudSettings/RenderingSettings.md) is enabled, this sets the object to receive shadows from other objects. |
| Foreground Rendering | false | Sets Foreground Rendering (render without applying depth value). |
| Depth Buffer Target | true | Sets whether to write to the depth buffer. |
| Opaque Alpha Blend | false | If this sets true, it forces alpha-blended rendering to be performed in the opaque rendering pass. | 
| Alpha Animation Target | false|Here's the English translation:
Sets whether to make objects transparent when they obstruct the camera's view in order to maintain visibility. For more details, please refer to [VKCNodeAlphaAnimation](../VKCComponents/VKCNodeAlphaAnimation.md). |
| Item Render Priority || Designates the Item's render priority. <br> For details, refer to [RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md) |
| Begin Actions || Set an [Action](../Actions/ActionsOverview.md) to trigger when the motion animation starts. |
| End Actions || Set an [Action](../Actions/ActionsOverview.md) to trigger when the motion animation ends. |

## Mode - Pose Settings

![HEOObject_Pose](img/HEOObject_Pose.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| .hem | | Designate a hem motion file. |
| Scene Preview | false | Preview the object instantiation on the Unity Scene.<br>Further details are on "Previewing Objects" article. |

## Mode - Motion Settings

![HEOObject_Motion](img/HEOObject_Motion.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| .hem | | Designate a hem motion file. |
| Scene Preview | false | Preview the object instantiation on the Unity Scene.<br>Further details are on "Previewing Objects" article. |
| Loop | Play the motion in a loop. Turn it on for walking and standby motions. |
| Draw Circle Shadow | true | Sets to draw a circle shadow on playing motion. |
| Collision Detection | true | Sets collision detection on playing motion. |
| Actions || Set an [Action](../Actions/ActionsOverview.md) to trigger when the motion is played. |

## Previewing Objects

When enabling the Scene Preview, the designated heo or vrm file will be shown on its instantiating position.

![HEOObject_Preview](img/HEOObject_Preview.jpg)

If the "Object Mode" is set to `Pose` or `Motion`, the motion's hem file will be converted to Unity AnimationClip for preview.

![HEOObject_Motion_Preview](img/HEOObject_Motion_Preview.jpg)

The slider appearing on enabling scene preview will modify the play position of the VKC Item Object's action.<br>
This slider value is intended for motion previewing, and will not be reflected on the action after build.

![HEOObject_Motion_Preview_Result](img/HEOObject_Motion_Preview_Result.jpg)

!!! note caution
    If an heo file from previous SDK versions is designated for preview, the model may not be displayed correctly.<br>
    If such issue happens, please recreate the heo file.
