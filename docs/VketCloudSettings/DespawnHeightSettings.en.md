# VKCSettingDespawnHeight

![DespawnHeightSettings_1](./img/DespawnHeightSettings_1.jpg)

DespawnHeightSettings specifies the height and area for the player's despawn (warping to spawn position defined by [PlayerSettings](./PlayerSettings.md) when fallen until specified height).

This prevents the player from being stuck in an endless falling loop.

| Label | Function |
| ---- | ---- |
| `Area size` | Adjusts the size of the respawn area. |

To adjust the area size, designate the X value and Y value of `area size`. Height can be manipulated directly from the scene view.

The area is displayed as a red Plane on the Unity scene.

![DespawnHeightSettings_2](./img/DespawnHeightSettings_2.jpg)
