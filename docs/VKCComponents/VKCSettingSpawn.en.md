# VKC Setting Spawn

![HEOSpawn_1](./img/HEOSpawn_1.jpg)

VKC Setting Spawn designates a random spawn point for the player, by placing multiple gameobjects with this component in the world. 

The player will spawn according to the VKC Setting Spawn's World Position and World Rotation.<br>
On spawn, the TPS camera rotation will be initialilzed with the VKC Setting Spawn's X-axis rotation value added.<br>
When respawning, the player will be placed on the position of [HEOPlayer](HEOPlayer.md).

Also, if the [Single Play Mode](HEOWorldSetting.md) is enabled, the rotation value of [HEOPlayer](HEOPlayer.md) will be added to the player's rotation as well.

## How to Use

1\. Add multiple gameobjects to designate the spawn points, with attaching the VKC Setting Spawn component.
![HEOSpawn_2](./img/HEOSpawn_2.jpg)

For example, the `Cube_Spawn_1`~`Cube_Spawn_3` is added to the world, with the VKC Setting Spawn component attached to the `SpawnPoint` child object.

![HEOSpawn_3](./img/HEOSpawn_3.jpg)　

Also, to avoid the player being buried to the ground on spawning, the `SpawnPoint` position is designated to be on the cube.

![HEOSpawn_4](./img/HEOSpawn_4.jpg)　

2\. Enter the world, and check that the player's initial spawn position changes randomly, as below:

![HEOSpawn_5](./img/HEOSpawn_5.jpg)　

![HEOSpawn_6](./img/HEOSpawn_6.jpg)　

3\. When respawning after actions such as falling down than the despawn height, the respawn position will be the [HEOPlayer](HEOPlayer.md)'s position.

![HEOSpawn_7](./img/HEOSpawn_7.jpg)　