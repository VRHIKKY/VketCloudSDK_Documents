# VKC Node Rotate Animation

`VKC Node Rotate Animation`をアタッチしたオブジェクトに回転アニメーションを再生します。<br>
アニメーションはループで再生されます。

![HEOAnimation_1](img/HEOAnimation_1.jpg)

| Label | function |
| ---- | ---- | 
| Rotate Per Sec |1秒間に回転する角度 |

`Rotate Per Sec`の設定値に応じて、それぞれX軸、Y軸、Z軸で回転します。

##　使い方

### オブジェクト自身を中心に回転する

1\. 任意のオブジェクトにインスペクター画面中の`Add Component`から`VKC Node Rotate Animation`をアタッチします。<br>
例として、ここではCubeに`VKC Node Rotate Animation`をアタッチします。

![HEOAnimation_2](img/HEOAnimation_2.jpg)

2\. `VKC Node Rotate Animation`の`Rotate Per Sec`にX軸 / Y軸 / Z軸が1秒間あたりの回転する角度(°)を設定します。

![HEOAnimation_3](img/HEOAnimation_3.jpg)

ワールドに入場すると、該当のオブジェクトが自身の中心を起点として回転します。

![HEOAnimation_Result_1](img/HEOAnimation_Result_1.gif)

### 別のオブジェクトを中心軸として回転する

ある親オブジェクトに`VKC Node Rotate Animation`をアタッチし、そのオブジェクトの子要素として回転させたいオブジェクトをつけることで親オブジェクトを中心に回転するオブジェクトを作れます。

1\. 親オブジェクトに`VKC Node Rotate Animation`をアタッチし、秒あたりの回転角度を設定します。<br>
例として、ここでは回転の中心となる空のゲームオブジェクトを作成し`VKC Node Rotate Animation`を設定します。

![HEOAnimation_4](img/HEOAnimation_4.jpg)

2\. 子オブジェクトとして回転させたいオブジェクトを親オブジェクトにドラッグ＆ドロップし、ヒエラルキーにて親子関係を設定します。<br>
以下の画像ではCubeオブジェクトを子オブジェクトに設定しています。

![HEOAnimation_5](img/HEOAnimation_5.jpg)

!!! note
    UnityのSceneビューでは親オブジェクトの位置は含まれる子オブジェクトの中心にあるように表示（下記画像参照）されますが、Inspectorタブの`Transform - Position`は子オブジェクトを持った前後で変化しません。<br>
    親オブジェクトの位置は`Transform - Position`の値を参照すると良いでしょう。
![HEOAnimation_6](img/HEOAnimation_6.jpg)

なお、親子関係を設定した際、子オブジェクトの`Transform - Position`について原点からの距離として表されていた数値が親オブジェクトからの距離の値に変化するため、ご注意ください。

![HEOAnimation_7](img/HEOAnimation_7.jpg)

ワールドに入場すると、子オブジェクトが親オブジェクトの中心を起点として回転します。<br>
このときコライダーの当たり判定も子オブジェクトの回転に応じて移動します。

![HEOAnimation_Result_2](img/HEOAnimation_Result_2.gif)