# PlayerSettings

![PlayerSettings_1](./img/PlayerSettings_1.jpg)

PlayerSettings specifies the settings for the player in the world.

## Basic Settings

| Label | Initial Value | Function |
|----|----|----|
| World Position | Same value as Transform's Position value | Set the player's position on spawn |
| World Rotation | Same value as Transform's Rotation value | Set the player's rotation on spawn. <br> Note that only the Y-Axis value will be applied |
| Jump | true | Enable/Disable jump in world |
| Jump Velocity | 4.5 | Set the upward velocity for jump in world |
| Move Speed | 7.0 | Set m/s speed for player movement in world |
| Move Speed Up Ratio | 2.0 | Set ratio for speed change when player's dashing |
| Enable Click to Move | false | Set the default value for click movement in the config screen. However, it will be forced to be on when opened with X-embed |
| Despawn Height (Y) | false | Threshold Y coordinate for player to respawn forcibly. The player will respawn if it goes below this value |

!!! warning "Enable Click to Move & Despawn Height(Y) are not available in the stable SDK 14.4.12"
    Enable Click to Move & Despawn Height(Y) cannot be used in the stable SDK 14.4.12 because its functionality has been rolled back.
    If you have SDK 14.2.1 or any version later than 14.4.12, please use that instead.

The spawn point defined by `World Position` and `World Rotation` will be shown as follows.

![PlayerSettings_SpawnPoint](img/PlayerSettings_SpawnPoint.jpg)

## Advanced Settings

| Label | Initial Value | Function |
|----|----|----|
| TPS Rotation | 0,0,0 | Apply the value to the camera's rotation on spawn. <br> To place the camera on front of the player on entrance, set value to [0.0, 180.0, 0.0] |
| CRP Mode | false | Enable/Disable CRP (protocol for object synchronization on realtime communication). <br> This is an internal feature, which cannot be used for world creation |

For example, the camera on spawn will be rotated as below if `TPS Rotation` is set to (0,180,0).

![PlayerSettings_TPSRotation](./img/PlayerSettings_TPSRotation.jpg)
