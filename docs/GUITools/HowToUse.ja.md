# 基本実装

## 作業前の準備

Unityで作業をする前にUIの編集をしやすいレイアウトに変更しましょう。  
右上のドロップダウンメニューからTallを選択し、上下に分かれたHierarchyとProjectのProjectのタブをドラッグして、Hierarchyの隣に持っていきます。

![GUITools_HowToUse_01](img/GUITools_HowToUse_01.jpg)

左上の方の「2D」と書かれたボタンをオンにします。

![GUITools_HowToUse_02](img/GUITools_HowToUse_02.jpg)

2Dの3つ隣にあるキラキラマークがついたボタンをクリックしてオフにします。

![GUITools_HowToUse_03](img/GUITools_HowToUse_03.jpg)
オフにする

Main CameraとDirectional Lightは選択した後、Inspectorに表示されるチェックボックスのチェックを外して一旦非表示にしておきます。

![GUITools_HowToUse_04](img/GUITools_HowToUse_04.jpg)

Projectタブを開き、Assetsを右クリックしCreate → FolderでUIの画像素材を入れるフォルダを作成します。一時的に素材を入れる場所なので名前は任意でOK。(ただし全角NG)

![GUITools_HowToUse_05](img/GUITools_HowToUse_05.jpg)

## サンプルActivity Canvasの読み込み（テンプレート）

![GUITools_HowToUse_12](img/GUITools_HowToUse_12.jpg)

Import Into Projectでインストールします。

![GUITools_HowToUse_13](img/GUITools_HowToUse_13.jpg)

その後、Assetsにインストールされます。


## Jsonファイルのインポート

メニューの VketCloudGUITools → GUI Importer をクリック

![GUITools_HowToUse_06](img/GUITools_HowToUse_06.jpg)

インポート用のダイアログで読み込みたいjsonファイルと素材のコピー先とスケールの設定をしてインポートします。

サンプルActivity Canvasのjsonファイルは以下の場所にありますのでそちらを選択してください。

`C:\{UnityProject}\Assets\Samples\VketCloud GUI Tools\13.0.0\Sample\Canvas\landscape\activity_modal.json`

![GUITools_HowToUse_07](img/GUITools_HowToUse_07.jpg)

Importをクリックして100%の表示が出ていれば完了していますのでダイアログを閉じてください。

読み込まれたはずなのに何も表示されない！となりますが、慌てずHierarchy内の読み込まれたひとつ下の階層を開いて選択し、Inspectorの一番上のチェックボックスにチェックを入れると表示されます。

![GUITools_HowToUse_08](img/GUITools_HowToUse_08.jpg)

Inspector一番上のチェックボックスで表示非表示がコントロールできます

## Unityの操作方法

![GUITools_HowToUse_09](img/GUITools_HowToUse_09.jpg)

Hierarchyはレイヤーのような構造ですが、Photoshopなどとは違い、上にあるものほど下に描画されるので注意です。

![GUITools_HowToUse_10](img/GUITools_HowToUse_10.jpg)

**マウスホイール**  
画面の拡大縮小  
**マウス右クリックのドラッグ**  
ハンドツール  
UI編集の際は**Rect Tool (四角いアイコン)**にしておくと編集しやすいです。

![GUITools_HowToUse_11](img/GUITools_HowToUse_11.jpg)

Inspectorの一番上にチェックを入れているにも関わらず、何も表示されていないという場合は、Inspector内のImageの所にチェックを入れると表示されます。
