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
    Ver5.4からVer9.3へのアップデート時においてはHEOWorldSetting > Avatars > Avatar Fileの設定が欠落する恐れがあるため、欠落している場合は再設定をお願いいたします。

HEOWorldSetting > Avatars > Avatar Fileにて空欄がある、Avatar Fileが1つも設定されていない場合はビルドエラーが発生したり、初期状態のアバターが表示されない状態となります。<br>

![HEOWorldSetting_AvatarFileError_1](img/HEOWorldSetting_AvatarFileError_1.jpg)

SDKでは初期状態のアバターとして用意しているAvatarFileがあるため、バージョンアップ後に空欄が発生している際はこちらをご利用ください。

![HEOWorldSetting_AvatarFileError_2](img/HEOWorldSetting_AvatarFileError_2.jpg)

## 設定画面でのバージョン表記が旧バージョンのままになっている / HeliScript・ギミックが動かない

既存のプロジェクトからバージョンを9.3へアップデートした後、ビルドを行ったワールドにて設定画面の右下に表示されているバージョン表記が旧バージョンのままになっている場合があります。<br>

![VersionUpdateTroubleshooting_2](./img/VersionUpdateTroubleshooting_2.jpg)

その際はSDKツールバーのVketCloudSDK > Clear Cacheを実行すると解消されます。

![VersionUpdateTroubleshooting_3](./img/VersionUpdateTroubleshooting_3.jpg)

!!! note caution
    バージョンアップ後にブラウザ側のキャッシュが原因でHeliScript・ギミックが動かない場合があります。<br>
    該当の現象が発生した際はブラウザのキャッシュクリアをお試しください。