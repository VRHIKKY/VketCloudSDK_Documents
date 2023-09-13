
# HEOVideoTrigger

![HEOVideoTrigger](img/HEOVideoTrigger.jpg)

HEOVideoTriggerは動画を再生するために使用します。

| Label | 詳細 |
| ---- | ---- |
| Enable | ビデオトリガーのクリック判定を有効にします。 |
| Video Material | 動画を表示するマテリアルを指定します。 |
| Video Path Mode | ビデオのパスを指定します。<br> Clip Mode：Asset上の動画ファイルを指定するためのモードです。<br> String Mode：URL等、文字列で指定するためのモードです。 |
| Autoplay | 動画を自動で再生するか指定します。<br>シーン上で同時に再生可能なビデオは1つのみです。<br> シーン上にこれをTrueにしたオブジェクトが2つ以上ある場合、最後のもののみが流れます。 |
| Loop | 動画が終了した際にループ再生するか指定します。|
| Access in HEOObject | 映像反映対象を[HEOObject](HEOObject.md)内のマテリアルにするためのモードです。<br> `True`にした場合に表示される`Target Object Name`には、対象となるマテリアル名を記載してください。 |

## 注意事項
本コンポーネントだけでは動画ファイルを.heoにパッキングすることができないため、[HEOField](HEOField.md)を必ず追加してください。</br>

VketCloudSDKでは複数のビデオを同時に再生できない仕様です。
複数のビデオを同時に再生しているように見せかけたい場合、動画ファイル内で画面分割を行い、映し出す側のスクリーンで動画の映し出す範囲を調整することで可能です。<br>

autoplayを設定しない場合にはアクション等いずれかの手段で再生開始をコントロールする必要があります。</br>
画像では[HEOActionTrigger](HEOActionTrigger.md)を使用したクリックによる動画再生を実装しています。

![HEOVideoTrigger](img/HEOVideoTriggerAdd.jpg)


##VideoMaterialについて
マテリアルに使用するShaderはUnlit/Textureである必要があります。

##VideoPathModeについて</br>
ClipModeはプロジェクトの内部にあるデータを参照します。</br>
StringModeはURLを指定して参照します。動画ストリーミング等に利用できます。

!!! note caution
    StringModeは現在内部開発者向けの機能となっております。
    
    動画を再生する際はClipModeをご利用ください。

##使用する動画ファイルについて
以下のフォーマットに従ってください。

| Label | 詳細 |
| ---- | ---- |
| ファイル形式 | .mp4 |
| 解像度 | 1280x720 H.264|
| AAC | 44.1kHz |
| フレームレート | 29.97 or 30 |
| プロファイルレベル | 4.1, AAC 44.1kHz, yuv420 |