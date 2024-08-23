# Auto Texture Compressor

## 概要

Auto Texture Compressorとは、

!!! caution "ビルド時の圧縮について"

## 事前準備

1. 本ツールを使用するには、以下の外部ツールをインストールする必要があります。

    - [PVRTexTool](https://developer.imaginationtech.com/pvrtextool/){_target=blank}

    インストール後、`PVRTexTool\CLI\Windows_x86_64\PVRTexToolCLI.exe`が格納されているフォルダのPATHを通しておきます。（本項では手順について省略いたします。）

2. メニューバーにて**VketCloudSDK -> Build And Run**を選択し、テクスチャ圧縮の対象となるワールド内のテクスチャをreleaseフォルダ下にあらかじめ生成します。

---

## 起動方法

Auto Texture Compressorは、メニューバーにて**VketCloudSDK --> Tools --> Auto Texture Compressor**を選択するとウィンドウが表示されます。

![AutoTextureCompressor_1](img/AutoTextureCompressor_1.jpg)

## 機能説明

![AutoTextureCompressor_2](img/AutoTextureCompressor_2.jpg)

| 英語 | 日本語 | 説明 |
|----|----|----|
| Target Files | 対象ファイル | テクスチャ圧縮の対象となっているファイルのリストが表示されます |
| Checkbox (unchecked) | チェックボックス（無効） | チェックボックスを無効にすると、HEOSameTexOptimizerを使わずに1つのHEOファイルだけを圧縮する |
| Group Name | グループ名 | HEOSameTexOptimizerが自らの処理を終えた途端、どのフォルダ名で新しいフォルダーを作って新ファイルを入れるのか決定する |
| Export Path | 出力パス | HEOSameTexOptimizerがどこで新しいフォルダを作成すべきか設定する |
| Files In Group | グループ内容 | このグループに入っているファイルリストにファイルを追加したり削除したりすることができる |
| File Checkbox (checked) | チェックボックス（有効） | チェックボックスを有効にすると、複数のHEOFieldをグループで纏めてHEOSameTexOptimizerで最適化することになる |
| Auto Add Fields | 自動フィールド追加 | 【任意のオプション】現在開かれているシーンにて[HEOField](../HEOComponents/HEOField.md)が追加された場合、自動的にこのツールのウィンドウに追加できます |
| Remove Existing Fields | 既存フィールド削除 | このチェックボックスを有効にすると、自動的にフィールドを追加する場合、その前に書いてあったフィールドの全部が削除され、ゼロから新しく見つけたHEOFieldが追加される |
| Proceed | 進む | 自動フィールド追加機能を起動するボタン |
| Start | スタート | テクスチャ圧縮を開始します |

## 使用例

その上に添付されたキャプチャー通りに設定して起動してみたら、以下の処理が行われる：

1. `World.heo`の圧縮用`.bat`ファイルが起動される

2. `World.heo`に対して`HEOTexComp`というツールが動作する

3. `World (1).heo`の圧縮用`.bat`ファイルが起動される

4. `World (1).heo`に対して`HEOTexComp`というツールが動作する

5. `HEOSameTexOptimizer`が起動され、圧縮結果を`Scene1`という名前のフォルダで纏めて、`release/data/Field`にコピーする

6. `World (2).heo`の圧縮用`.bat`ファイルが起動される

7. `World (2).heo`に対して`HEOTexComp`というツールが動作する

## 注意点

### 自動フィールド追加について

自動フィールド追加は、  既存フィールド削除というチェックボックスが無効になっている場合、重複せずにまだ入っていないファイルだけを追加する

Proceed / 進むボタンを押さなくても、以下の場合には自動フィールド追加が行われます：

- ウィンドウが開いた時

- シーンのヒエラルキーが更新された時

### Auto Texture Compressorに関する注意

- 実際に存在するHEOファイルが1つでも選択されていない場合、スタートボタンが無効になって、押せなくなる
