# NextMotion

![NextMotion](img/NextMotion.jpg)

`NextMotion` sets a motion to play after the previous [Motion](./Motion.md) Action is completed. Specify the motion's name in `Motion Name`.

|  Label |  function  |
| ----   | ---- |
| Motion Name | Set the motion's name. |

`NextMotion` can be used only once per Action list, and cannot be set multiple times.

In particular, the implementation as below will not work properly. This goes as same on HeliScript when using [SetNextMotion()](../../hs/hs_class_player.md#setnextmotion).

![NextMotionNG](./img/NextMotionNG.jpg)

On triggering `NextMotion`, if the motion set by `Motion Name` does not exist on the player's avatar, the motion will not be played.

Each avatar's motion name and animation can be viewed/edited on [Avatar File / Motion](../../WorldMakingGuide/AvatarFile.md#motion) or [HEOWorldSetting / MyAvatar](../../HEOComponents/HEOWorldSetting.md#motion).

![MyAvatar_1](../../HEOComponents/img/HEOWorldSetting_MyAvatar_1.jpg)
