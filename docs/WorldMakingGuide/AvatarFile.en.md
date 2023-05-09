## Avatar File

### Avatar block
This item specifies the VRM format avatar to be used as the default avatar of your world.

| Label | function |
| ---- | ---- |
| .vrm | Sets the model of the avatar. |
| height | Sets the avatar's camera reference position. If set to 0, the camera will follow the feet. |

### Emotion block
These are the settings of emotions used by players. Vket Cloud allows you to add any emotion and uses a unique file format called `.hem`.

| Label | function |
| ---- | ---- |
| .hem | Sets the motion file. |
| loop | Play the motion in a loop. Turn it on for walking and standby motions. |
| useAction | Sets the action to call when the motion starts playing. |

### Objects block
Avatars can have any assets attached, specified in this block.  
It supports three formats: Heo, Hep, and Audio.

| Label | function |
| ---- | ---- |
| name | Set a unique name. |
| objecttype | Specifies the type of object to have. Choose from .heo, .hep, or audio. |
| file | Specifies an asset. |
| pos | Set the offset from `target`. |
| rotate | Set the rotation angle. |
| target | Specifies the bone that serves as the coordinate origin. e.g. right, left, ... |