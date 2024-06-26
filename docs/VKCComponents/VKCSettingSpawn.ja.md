# VKC Setting Spawn

![HEOSpawn_1](./img/HEOSpawn_1.jpg)

VKC Setting Spawnは、ワールド内に本コンポーネントをアタッチしたゲームオブジェクトを複数置くことでプレイヤーの入場時のスポーン（初期配置）位置をランダムに決定します。

プレイヤーはVKC Setting SpawnのWorld Position 及び World Rotationの座標に沿ってスポーンします。<br>
なお、三人称視点時のカメラはスポーン時にVKC Setting SpawnのX軸回転値が加わった角度で初期配置されます。<br>
リスポーン時にプレイヤーは[HEOPlayer](HEOPlayer.md)の位置に配置されます。

なお、[シングルプレイモード](HEOWorldSetting.md)では[HEOPlayer](HEOPlayer.md)の回転値が反映されます。

## 使い方

1\. スポーン位置の対象となるゲームオブジェクトを複数用意し、それぞれにVKC Setting Spawnコンポーネントを付けます。
![HEOSpawn_2](./img/HEOSpawn_2.jpg)

例として、ここでは`Cube_Spawn_1`~`Cube_Spawn_3`というオブジェクトを用意し、それぞれの子オブジェクト`SpawnPoint`に対してVKC Setting Spawnを付けます。

![HEOSpawn_3](./img/HEOSpawn_3.jpg)　

また、プレイヤーが床に埋まるのを回避するために`SpawnPoint`の座標はキューブの上に置きます。

![HEOSpawn_4](./img/HEOSpawn_4.jpg)　

2\. ワールドに入場し、プレイヤーのスポーン位置がランダムに変わることを確認します。

![HEOSpawn_5](./img/HEOSpawn_5.jpg)　

![HEOSpawn_6](./img/HEOSpawn_6.jpg)　

3\. 奈落に落ちるなどの行為によってリスポーンする際は、リスポーン位置が[HEOPlayer](HEOPlayer.md)の位置になります。

![HEOSpawn_7](./img/HEOSpawn_7.jpg)　