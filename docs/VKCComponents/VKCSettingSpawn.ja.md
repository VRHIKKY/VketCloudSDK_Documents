# VKC Setting Spawn

![VKCSettingSpawn_1](./img/VKCSettingSpawn_01.jpg)

VKC Setting Spawnは、ワールド内に本コンポーネントをアタッチしたゲームオブジェクトを複数置くことでプレイヤーの入場時のスポーン（初期配置）位置をランダムに決定します。

プレイヤーはVKC Setting SpawnのWorld Position 及び World Rotationの座標に沿ってスポーンします。<br>
なお、三人称視点時のカメラはスポーン時にVKC Setting SpawnのX軸回転値が加わった角度で初期配置されます。<br>
リスポーン時にプレイヤーは[PlayerSettings](../VketCloudSettings/PlayerSettings.md)で設定した座標へ配置されます。

## 使い方

1\. スポーン位置の対象となるゲームオブジェクトを複数用意し、それぞれにVKC Setting Spawnコンポーネントを付けます。
![VKCSettingSpawn_2](./img/VKCSettingSpawn_02.jpg)

例として、ここでは`Cube_Spawn_1`~`Cube_Spawn_3`というオブジェクトを用意し、それぞれの子オブジェクト`SpawnPoint`に対してVKC Setting Spawnを付けます。

![VKCSettingSpawn_3](./img/VKCSettingSpawn_03.jpg)　

また、プレイヤーが床に埋まるのを回避するために`SpawnPoint`の座標はキューブの上に置きます。

![VKCSettingSpawn_4](./img/VKCSettingSpawn_04.jpg)　

2\. ワールドに入場し、プレイヤーのスポーン位置がランダムに変わることを確認します。

![VKCSettingSpawn_5](./img/VKCSettingSpawn_05.jpg)　

![VKCSettingSpawn_6](./img/VKCSettingSpawn_06.jpg)　

3\. 奈落に落ちるなどの行為によってリスポーンする際は、リスポーン位置が[PlayerSettings](../VketCloudSettings/PlayerSettings.md)の位置になります。

![VKCSettingSpawn_7](./img/VKCSettingSpawn_07.jpg)　
