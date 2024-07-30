# VKC Item Plane

![HEOPlane_1](img/HEOPlane_1.jpg)

VKC Item Planeは、画像ファイルをインスタンス生成する機能です。<br>
Vket Cloudでは以下のフォーマットのテクスチャ画像が使用できます。

- 大きさが2048x2048以下のpng形式のファイル　※jpg, psd形式などは使えません
- ２の累乗サイズの正方形（2048x2048,1024x1024,512x512等）または2の累乗サイズの長方形
- ビット深度は24bitまたは32bit
- png換算で80MB以下
- 拡張子は小文字(.png)にする。”.PNG”になっているとサーバーアップロードでエラーが出ることがあります。

詳しくは[Unity制作ガイドライン](../WorldMakingGuide/UnityGuidelines.md)をご覧ください。

| 名称 | 初期値 | 機能 |
| ----   | ---- | ---- |
| Show | true | あらかじめ表示したい場合はオンにします |
| Texture in JP / EN | 空欄 | 表示するテクスチャを指定します。Texture in ENはブラウザの言語設定が英語の場合、こちらを表示します。必要がない場合は空欄で構いません。|
| Scene Preview | false | trueでシーン内に表示します。|
| Look at Camera | false | カメラ方向に対して常に正面を向くようになります |
| Alpha Blending | false | 半透明やカットアウトを使用できます |
| Z-Bias | 0 | z値が高いと、ほかのオブジェクトよりも手前に表示されます |
| Double Side | false | 両面表示するか否かを切り替えます |

### 高度な設定

| 名称 | 機能 |
| ---- | ---- |
| Clickable | クリック可能かどうかを変更します |
| Auto Loading | 有効の場合、本Itemはワールド入場時に自動で読み込まれます。<br>無効の場合は自動で読み込まれないため、[動的ローディング](VKCItemField.md)を使用するか、HeliScriptで[Load()](../hs/hs_class_item.md#load)を使用して読み込みます。|
| Item Render Priority | Itemの描画順序を決定します。<br>詳細は[RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md)をご参照ください。 |
| Show Photo Mode | 写真撮影モードの際、Activityを表示するかどうかを変更します |
| Overrides |ワールド入場時に`Overrides`にて設定された`Material`及び`Texture`がVKC Item Planeにて設定したTextureに代わって使用されます |

!!! note caution
    Overrides項目は現在実装中の機能です。<br>
    本機能については今後のアップデートで使い方が更新される予定です。

!!! note
    Ver9.3以前の`Billboard`設定は`Look at Camera`に名称が変更されました。<br>
    以前のSDKバージョンからシーンデータを移植した場合、`Billboard`の設定は`Look at Camera`に引き継がれます。