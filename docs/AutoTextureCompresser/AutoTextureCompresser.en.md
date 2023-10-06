# How to Use the AutoTextureCompresser

## How to Use
### 1. Install Tools
At First, please install [PVRTexTool](https://developer.imaginationtech.com/pvrtextool/) and [TexConv](https://github.com/Microsoft/DirectXTex/wiki/ Texconv). TexConv can be found at the top of the page under "DOWNLOADS@LATEST" to install the files.

また、ツールを実行するためには最新(Ver. 3.11以降)の[Pythonのインストール](https://www.python.org/downloads/)が必要です。

### 2. 必要テクスチャの書き出し
テクスチャを圧縮するにあたって、メニューバーより`VketCloudSDK->BuildAndRun`を選択してreleaseフォルダ下に必要なテクスチャを書き出す必要があります。

### 3. テクスチャ変換
ツールバー上の「VketCloudSDK」から、AutoTextureCompresserを選択してください。<br>

![AutoTextureCompresser_1](img/AutoTextureCompresser_1.jpg)

下図のようなウィンドウが出てくるので、UIのパラメータに必要な項目を設定します。

圧縮を行うために必要な手順は以下の通りです。

1. **Python Alias for shell** にpythonのエイリアス名を設定します。
    エイリアスが設定されていない場合、Python Path(python.exeが置かれているファイル位置)の設定が必要です。

    ![AutoTextureCompresser_2](img/AutoTextureCompresser_2.jpg)

2. **PythonKeyword**にpythonのバージョンを指定します。

    ![AutoTextureCompresser_3](img/AutoTextureCompresser_3.jpg)

3. **CompressorLocation**にHEOTexComp.pyのフォルダまでのフルパスを指定します。<br>見つからない場合はAssetsにて"HEOTexComp"と検索をかけ、出現したフォルダをエキスプローラから開いてパスを取得します。
    ![AutoTextureCompresser_4](img/AutoTextureCompresser_4.jpg)

4. **OptimizerLocation**にHEOSameTexOptimizer.pyのフォルダまでのフルパスを指定します。

    ![AutoTextureCompresser_5](img/AutoTextureCompresser_5.jpg)

5. **BuildPath**にVketCloudSDKでビルドしたreleaseフォルダまでのパスを指定します。

    ![AutoTextureCompresser_6](img/AutoTextureCompresser_6.jpg)

!!! note caution
        Ver4.8 / Ver5.4では初期値にJRWorldという文字列が混じっているため、該当の文字列を削除した上でのツールの使用をお願いいたします。
        本不具合は次回のアップデートで修正される予定です。
    ![AutoTextureCompresser_Issue](img/AutoTextureCompresser_Issue.jpg)

6. IList内に**Path0**にField毎の**BuildPath以下の相対パス**を指定します。<br>具体的にはプロジェクトをエキスプローラにて開き、upload/data/Field下にある[HEOField](../HEOComponents/HEOField.md)がアタッチされたオブジェクトと同名のパスを指定します。<br>複数指定する必要がある場合は改行します。
例)
　data\Field\World
　data\Field\PartyRoom
　data\Field\*
    ![AutoTextureCompresser_7](img/AutoTextureCompresser_7.jpg)

7. **Optimize Files**ボタンをクリック

圧縮中は下記画像が出て待機状態になります。<br>
現状のツールでは、外部ツール実行時のハンギング状態を解除されないので、フリーズしたような挙動を取りますが5分程度お待ちください。
![AutoTextureCompresser_8](img/AutoTextureCompresser_8.jpg)

すべての圧縮が完了すると「プロジェクト名/release/data/field」以下にあるHEOファイルに「texastc」「texdtx」「texetc2」というフォルダができ、HEOファイルも最新のものに上書きされた状態となります。

## UIのパラメータ説明
以下の各パラメータに対して設定を行います。

#### Python Path Config

![AutoTextureCompresser_2](img/AutoTextureCompresser_2.jpg)

| 変数 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Python Alias for Shell | なし | cmdにて使用されるpythonのエイリアス名です。<br>Pythonに対してエイリアスを設定していない場合は`Python Path`を必ず設定します。 |
| Python Path | なし |python.exeのディレクトリパスを設定します。 |

#### Python Data Config

![AutoTextureCompresser_9](img/AutoTextureCompresser_9.jpg)

| 変数 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Python Keyword | python3.11 | 実行するpython.exeの名前。Python Aliasと一致する |
| Compressor Filename | HEOTexComp.py | HEOTexCompスクリプトのファイル名 |
| Compressor Location | C:\Project\ |HEOTexComp.pyのフォルダパスを指定します。<br> {PROJECT_PATH}\Packages\VketCloudSDK\PackageResources\tools\HEOTexComp |
| Optimizer Filename |HEOSameTexOptimizer.py |HEOSameTexOptimizerスクリプトのファイル名 |
| Optimizer Location |C:\Project\ | HEOSameTexOptimizer.pyのフォルダパスを指定します。<br> {PROJECT_PATH}\Packages\VketCloudSDK\PackageResources\tools\HEOSameTexOptimizer |
| BuildPath | C:\Project\release |VketCloudSDKでビルドしたreleaseフォルダまでのパス |
| Batch Type |astc dxt etc2 pvrtc | PVRTextToolやTexconvを使うバッチファイル名のリストです。|
| OptimizerSrcFolderName | Src |HEOSameTexOptimizerが求めるSourceフォルダの名前 |
| OptimizerDestFolderName |Dest |HEOSameTexOptimizerが出力用に使うフォルダ名 |

#### Compress File

![AutoTextureCompresser_2](img/AutoTextureCompresser_2.jpg)

| 変数 | 初期値 | 機能 |
| ---- | ---- | ---- |
|IList |　なし | 変換するHEOが含まれるフォルダーパスを列挙したtxtファイル |