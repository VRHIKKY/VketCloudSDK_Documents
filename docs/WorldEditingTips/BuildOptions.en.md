# Build Options

ビルド設定において、制作者はビルド時にワールドを構成するファイルに対して様々な操作を行うことができます。

ビルド設定を編集するには、VketCloudSDK > Settingsより設定ウィンドウを開き、「Build」タブを選択します。

なお、ワールドのアップロード時には`Use override settings for image conversion`を除いた全ての設定項目が`true`に上書きされた状態でアップロードされます。

![BuildOptions_1](img/BuildOptions_1.jpg)

## テクスチャオーバーライド設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Use override settings for image conversion | true | trueのとき、テクスチャのオーバーライド設定を使用します。 |
| Set the texture size to a power of 2 during build | true | テクスチャのInspectorで指定したMaxSizeを基にファイルを変換します。 |

テクスチャのMaxSize(ビルド時に変換されるサイズ)はInspectorから指定が可能です。<br>
これによって、どの程度圧縮がかけられるか設定が可能です。

![BuildOptions_2](img/BuildOptions_2.jpg)

## モデル書き出し設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Convert the model's texture for smartphone use | false | heoファイルのテクスチャを圧縮し、スマートフォン用に軽量化します。 |

## アバター書き出し設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Convert the avatar's VRM for smartphone use | false | vrmファイルをhrmファイルへと変換し、軽量化を行った上でvrmをリソースに置かないように設定します。 |

## パーティクル書き出し設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Convert the particle's texture for smartphone use | false | パーティクルファイルを圧縮し、スマートフォン用に軽量化します。 |
