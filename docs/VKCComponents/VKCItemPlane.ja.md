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
| Texture in JP / EN | 空欄 | 表示するテクスチャを指定します。Texture in ENはブラウザの言語設定が英語の場合、こちらを表示します。必要がない場合は空欄で構いません。|
| World Position | TransformのPosition値と同一 | テキストを表示する位置を指定します |
| World Rotation | TransformのRotation値と同一 | テキストを表示する角度を指定します |
| World Scale | TransformのScale値と同一 | テキストを表示する大きさを指定します |
| Alpha Blending | false | 半透明やカットアウトを使用できます |
| Show | false | あらかじめ表示したい場合はオンにします |
| Z-Bias | 0 | z値が高いと、ほかのオブジェクトよりも手前に表示されます |
| Look at Camera | false | カメラ方向に対して常に正面を向くようになります |
| Double Side | false | 両面表示するか否かを切り替えます |
| Overrides | | ワールド入場時に`Overrides`にて設定された`Material`及び`Texture`がVKC Item Planeにて設定したTextureに代わって使用されます |

!!! note caution
    Overrides項目は現在実装中の機能です。<br>
    本機能については今後のアップデートで使い方が更新される予定です。

!!! note
    Ver9.3以前の`Billboard`設定は`Look at Camera`に名称が変更されました。<br>
    以前のSDKバージョンからシーンデータを移植した場合、`Billboard`の設定は`Look at Camera`に引き継がれます。