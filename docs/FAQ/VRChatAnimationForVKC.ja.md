# 【実務 / Unity】VRChat用のアニメーションシェーダー素材をVketCloudに移植する手順

## 現象

VRChat用のアニメーションシェーダー素材「FX/FlareSC」はVketCloudで使用できない。
VketCloudで使用できるシェーダーで再現するため、いくつか手順を踏む必要がある。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_1.jpg)

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_2.jpg)

左では上部に水色の表示があるが、オブジェクトをそのまま実装すると水色の表示が無くなる。
水色の表示は常に回転している。

!!! info "発生環境"
    SDKバージョン : 4.1.1 <br>
    OS : Windows 10 <br>
    Unity : 2019.4.31.f1 <br>
    ブラウザ : Google Chrome 

# 手順
## ①GIMPのダウンロード
FlareSCで用いられている画像は、黒が透過色に設定されています。<br>
[窓の杜](https://forest.watch.impress.co.jp/library/software/gimp/) でダウンロード可能なGIMPを使用して、透過色を黒に設定していきます。

同じ機能を持つ画像編集ソフトがある場合、不要です。

## ②画像の読み込み
GIMPを起動し、画像をドラッグ&ドロップで開きます。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_3.jpg)

このような表示が出た場合、「変換」を選択します。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_4.jpg)

画像がGIMP上に表示されます。

## ③「色を透明度に」の設定

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_5.jpg)

色タブの下部にある「色を透明度に」を選択します。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_6.jpg)

Colorウィンドウを選択し、色を黒(RGB#000000)に設定し、OKを選択します。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_7.jpg)

画像が透過されます。

## ④画像の書き出し

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_8.jpg)

ファイルタブから「名前を付けてエクスポート」を選択します。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_9.jpg)

名前を元の名前と変更し、エクスポートを選択します。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_10.jpg)

この画面では何も設定を変更せず「エクスポート」を選択して問題ないです。

## ⑤MToonの用意

ここからはUnityでの操作となります。
VketCloudで動くシェーダーは「VRM/MToon」を使用します。

VketCloudSDK設定の、拡張からインストール可能です

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_15.jpg)

## ⑥MToonの設定

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_11.jpg)

該当マテリアルのShader項目をVRM/MToonに変更しましょう。
MTで検索をかけると出てくると思います。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_12.jpg)

設定を画像のように変更していきます。

!!! info "重要な点"
    Mode : TransparentWithZWhiteに変更
    Color Emitssion : 各テクスチャをGIMPで作った物に変更

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_13.jpg)

最も重要なアニメーション設定です。
Scroll X Scroll Yで横方向/縦方向のスクロール速度を調整することができます。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_14.jpg)

動いている様子はPlayモードにすることで確認可能です。
SDKのバージョンによってはPlayモードにした瞬間VketCloudのログイン認証が発生することがあります。

![VRChatAnimationForVKC](img/VRChatAnimationForVKC_16.gif)

最後にビルドして動くことを確認したら完了です。

# 結論

MToonを使えばVRC用のアニメーションシェーダーもある程度動かせる！

# その他知見

HEOObjectに書き出しても動きます。

# 関連リンク

GIMP公式ページ [GIMP](https://www.gimp.org/)
MToon公式ページ [Releases · Santarh/MToon](https://github.com/Santarh/MToon/releases)
