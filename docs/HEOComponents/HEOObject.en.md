
# HEOObject
![HEOObject](img/HEOObject.jpg)

HEOObject is used to instantiate a pre-exported .heo file, or an vrm model.

## Settings

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Show | true | Toggle object visibility. |
| Clickable | false | Toggle mouse interaction on object. |
| .heo or .vrm | | Specify heo or vrm files. <br>If a chosen vrm file has a [Compressed Texture](../heoexporter/he_TextureCompression.md), specify the texture file here. |
| Scene Preview | false | Preview the object instantiation on the Unity Scene.<br>Further details are on "Previewing Objects" article. |
| Enable Bone | false | (only for vrm) Enable if you want to play armature animation. |
| Auto Loading | true | Used for setting up [Dynamic Loading](HEOField.md). <br> The object will be loaded on the first load by default.  |
| Shadow Caster | false | If [Shadow Mapping](HEOWorldSetting.md) is enabled, this sets the object's shadow to be casted on other shadow recievers. |
| Shadow Receiver | false | If [Shadow Mapping](HEOWorldSetting.md) is enabled, this sets the object to recieve shadows from other objects. |
| Circle Shadow | false |  Sets to draw a circle shadow.  |
| Foreground Rendering | false | Sets Foreground Rendering (render without applying depth value). |
| Look at Camera | false |  Make the object face towards the camera at all times. |
| Object Mode | Choose from None, Pose, and Motion. If you choose Pose or Motion, you will need to additionally specify an .hem file. |
| Begin Actions | Set an [Action](../Actions/ActionsOverview.md) to trigger when the motion animation starts. |
| End Actions | Set an [Action](../Actions/ActionsOverview.md) to trigger when the motion animation ends. |
| HeliScript | | Sets the object to be a target for HeliScripts designated in [HEOScript](HEOScript.md). <br>If a [HEOScript](HEOScript.md) is not in scene, an explanation for this setting will be shown. |

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
| Actions | Set an [Action](../Actions/ActionsOverview.md) to trigger when the motion is played. |

## Previewing Objects

When enabling the Scene Preview, the designated heo or vrm file will be shown on its instantiating position.

![HEOObject_Preview](img/HEOObject_Preview.jpg)

If the "Object Mode" is set to `Pose` or `Motion`, the motion's hem file will be converted to Unity AnimationClip for preview.

![HEOObject_Motion_Preview](img/HEOObject_Motion_Preview.jpg)

The slider appearing on enabling scene preview will modify the play position of the HEOObject's action.<br>
This slider value is intended for motion previewing, and will not be reflected on the action after build.

![HEOObject_Motion_Preview_Result](img/HEOObject_Motion_Preview_Result.jpg)

!!! note caution
    If an heo file from previous SDK versions is designated for preview, the model may not be displayed correctly.<br>
    If such issue happens, please recreate the heo file.
