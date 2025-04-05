# HEODespawnHeight

!!! warning "Note"
    本コンポーネントはSDK Ver12.0にて廃止されました。<br>
    新機能として[Vket Cloud Settings](../VketCloudSettings/Overview.md)が追加されたため、そちらをお使いください。

HEODespawnHeightを使用することにより、プレイヤーが指定した位置に到達した際に[VKC Setting Player](../VketCloudSettings/PlayerSettings.md)へリスポーンするようになります。
また、プレイヤーが落下してしまった場合、永続的に落下し続ける状態になってしまうのを防ぐことができます。

![HEODespawnHeight](img/HEODespawnHeight.jpg)

|  ラベル  |  機能  |
| ----   | ---- |
| `エリアサイズ` | リスポーンエリアのサイズを調整します。 |

コンポーネントを追加するとUnityのシーン上に赤いPlaneが出現します。サイズの調整は`エリアサイズ`のX値Y値を調整してください。高さはシーンビューから直接操作します。

![Setting](img/HEODespawnHeightSetting.jpg)
