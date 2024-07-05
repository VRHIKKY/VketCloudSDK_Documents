# BasicSettings

![BasicSettings_1](./img/BasicSettings_1.jpg)

BasicSettings handles the main settings of the world.

|  Label | Initial Value | function |
| ---- | ---- | ---- |
|  `World ID` | "world" | Set the World ID. This value will be autofilled by the generated world ID on upload, which will mainly be used for the world URL.<br> (e.g. [VketID_of_Creator].cloud.vket.com/worlds/[World_Name]) |
|  `Debug Mode`  | false |  Switch to debug mode. When switched on, players can use the F1/F2 key to access the debug menu on browser.<br>For details, refer to the [debug mode](../WorldEditingTips/DebugMode.md) page.|
| `Use Avatar Click`| true | Activate functions running when clicking other players. |
|  `VRM Drag & Drop`  | false | Allows users to locally change their avatar by drag-and-dropping their own .vrm avatars to the browser screen.  |
|  `Occlusion Culling`  | false | Activate the Occlusion Culling.<br>For instructions, please refer to [Occlusion Culling](../WorldOptimization/OcclusionCulling.md).  |
|  `World Name Directory`  | false | When exporting to .heo and other files, the files will be packed into a folder with the same name as the `World Name`. <br>(e.g. data/field/`World Name`/world.heo) |
| `Use GamePad` | false | Activate usage of GamePads.  |
| `Use Physics Engine` | false | Activate usage of the Physics Engine. |
| `Favicon` | blank | Set the Favicon of the World. |
| `Voice Attenuation` | true | Activate player voice attenuation. |
| `Min Distance (m)`| 5.0 | Designate start of voice attenuation by meter. |
| `Max Distance (m)`| 10.0 | Designate end of voice attenuation by meter. |
| `HeliScript` | blank | The HeliScripts used in this world will be listed here. HeliScripts designated in components such as [VKC Attribute Script](../VKCComponents/VKCAttributeScript.md) will be listed automatically. |

!!! note
    While `HeliScript` elements will be added automatically, it may become a `None` or `Missing` entry due to deleting files, etc.
    Note that if the `HeliScript` elements contain a `None` or `Missing` entry, they may become a cause of a build error.

![HeliScriptMistake](img/BasicSettings_HeliscriptMistake.jpg)

!!! note
        If a gamepad is connected when entering a world with `Use GamePad` enabled, the player may use their gamepad to control.<br>
        Although control may vary among gamepads, the function shown below are available.<br>
        Note that changing/adding controls or inverting camera controls for gamepad are unavailable at the current version.

| Label | Function |
|----|----|
| Left stick | Move avatar |
| Right stick | Move camera |
| □ / X / Y　| Jump |
| R3（Pressing down on the right stick）| Reset camera（Reset to initial direction）|
