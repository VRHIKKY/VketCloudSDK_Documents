# バージョンアップ後によくあるトラブル

## バージョンアップ後にComponentがMissingとして表示される

[SDKのバージョンアップ](../AboutVketCloudSDK/SetupSDK_external.md)を行った際に、バージョンアップ前のコンポーネントがMissingとして表示される場合があります。

![VersionUpdateTroubleshooting_1](./img/VersionUpdateTroubleshooting_1.jpg)

Missingになったコンポーネントについては該当のコンポーネントを再度アタッチ・設定し直すことで正常に動きます。<br>
バージョンアップの際はバージョンアップ前の状態を確認できるようにバックアップを行うことを**強く**おすすめします。

以下のコンポーネントについてMissingになる可能性を確認しております：

- HEO Animation
- HEO Collider
- HEO Cylinder Collider
- HEO lbl Cube Map
- HEO Info
- HEO Mesh Collider
- HEO Mirror
- HEO Object Type
- HEO Reflection Probe
- HEO Shadow
- HEO LOD Level
- HEO UV Scroller

!!! note caution
    Ver5.4からVer9.3へのアップデート時においてはHEOWorldSetting > Avatars > Avatar Fileの設定が欠落する恐れがあるため、こちらもバックアップを取った上での作業をお願い致します。

## 設定画面でのバージョン表記が旧バージョンのままになっている

既存のプロジェクトからバージョンを9.3へアップデートした後、ビルドを行ったワールドにて設定画面の右下に表示されているバージョン表記が旧バージョンのままになっている場合があります。

![VersionUpdateTroubleshooting_2](./img/VersionUpdateTroubleshooting_2.jpg)

その際はSDKツールバーのVketCloudSDK > Clear Cacheを実行すると解消されます。

![VersionUpdateTroubleshooting_3](./img/VersionUpdateTroubleshooting_3.jpg)