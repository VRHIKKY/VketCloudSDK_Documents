# ビルドエラー / ワールドが動かないときは

## ビルドエラー

![BuildError](img/BuildError.jpg)

Build And Runでブラウザが起動しますが、稀にエラーによってコンテンツが表示されない場合があります。

この原因には、いくつかのケースが考えられますが、よくある原因は以下の通りです。

|  原因 |  対策  |
| ----   | ---- |
| アバターリストが空になっている | 最低1体以上、アバターを登録してください |
| [VketCloudSettings/BasicSettings/HeliScript](../VketCloudSettings/BasicSettings.md)の中身が空になっている | [`None`あるいは`Missing`](../VketCloudSettings/BasicSettings.md)となっている項目を削除してください　|
| .heoファイルの出力に失敗している | Unityのコンソールあるいは[デバッグコンソール](../debugconsole/debugconsole.md)にエラー（赤文字）が出ていないか確認してください |
| Unity側のキャッシュによる不具合 | Vket Cloud SDK --> Clear Cache からキャッシュをクリアしてください |
| ブラウザのキャッシュによる不具合 | 使用しているブラウザのキャッシュをクリアしてください |
| 必要なファイルが見つからない(404) | 後述の方法するエラーログから、404なファイルを確認し、Vket Cloudがサポートしないファイルなら変更してください |
| Unityプロジェクトが配置されたディレクトリ、配置されたファイル名にスペースや二バイト文字が含まれている | スペースや二バイト文字を抜いてください |
| HeliScript実装エラー | [エラーログを確認](#_4)して原因を解消してください |

!!! warning "Mac環境における初回ビルドについて"
    お使いのMacの環境によっては、 初回のBuild and Runの際に「サーバに接続できません」の表示あるいはビルドエラーのいずれかが発生する場合があります。<br>
    本現象が発生した際はもう一度Build and Runを行うか、ブラウザの再読み込みによって不具合が解消されます。

### 変更が更新されない・ギミックが動かない場合

Unityで編集した / SDKをアップデートしたにもかかわらず、その変更がブラウザに反映されないケースがあります。<br>
多くの場合、**キャッシュが残っているため、前の内容が表示されてしまっている**ことが原因です。

|  原因 |  対策  |
| ----   | ---- |
| ブラウザにキャッシュが残っている | Ctrl + Shift + R で、スーパーリロードを実行する |

Unity側のキャッシュはSDKツールバーのVket Cloud SDK > Clear Cacheを実行すると消去されます。

![VersionUpdateTroubleshooting_3](img/VersionUpdateTroubleshooting_3.jpg)

ブラウザ側のキャッシュが原因でHeliScript・ギミックが動かない場合があります。<br>
該当の現象が発生した際はブラウザのキャッシュクリアをお試しください。

![VersionUpdateTroubleshooting_4_jp](img/VersionUpdateTroubleshooting_4_jp.jpg)

### エラーログを確認する

ビルドエラーの原因を調べるには、お使いのブラウザのコンソールをチェックします。

ブラウザによって方法は異なりますが、Google Chromeの場合は、右上の三点リーダーから **その他のツール > デベロッパーツール** を開きます。

![DeveloperTool](img/DeveloperTool.jpg)

必ずしもコンソールに出ている内容が、VketCloudのビルドエラーに直結しているとは限りませんが、赤字でエラーが出ている場合はその内容がビルドエラーの原因になっている可能性があります。

![DeveloperToolConsole](img/DeveloperToolConsole.jpg)

!!! warning "ロード中のHeliScriptの実装エラーの確認方法"
    SDK Ver13.4以降、UI調整の一環として[デバッグモード](../WorldEditingTips/DebugMode.md)が有効な際の「ワールドのローディング中に発生したHeliScript由来のエラーメッセージ」が非表示になるように変更されました。<br>
    ワールドのロードが停止した際はブラウザの開発者モードを開き、コンソールタブを開いてエラーをご確認ください。<br>
    なお、ロード画面を抜けた後は従来通りの個所に表示されます。

### インポートしたライブラリを確認する

Package Managerなどからインポートしたライブラリまたはスクリプトによってエラーの原因になっている可能性があります。

このケースでは後から追加した対象のライブラリをインポートし直すことで解消される場合があります。

!!! warning "caution"
        稀に必須パッケージであるEditorTutorialSystemが自動インポートされず、ビルドエラーの原因となる場合があるため、その際は[Package Manager](../AboutVketCloudSDK/SetupSDK_external.md)を通じて該当のパッケージを導入してください。

### デバッグコンソール / DebugModeを使用する

デバッグのためのSDKのツールとして、Unityエディタ―上ではデバッグコンソールを、ブラウザではデバッグモードを使用して問題解決ができます。
詳細はそれぞれのページをご確認ください。

[デバッグコンソール](../debugconsole/debugconsole.md)

[デバッグモード](../WorldEditingTips/DebugMode.md)

## ブラウザウィンドウが暗転したまま動かない

ワールド入場時にブラウザウィンドウが暗転したまま動かない場合は、以下の点をチェックしてみてください。

|  原因 |  対策  |
| ----   | ---- |
| ブラウザのハードウェアアクセラレーションが無効になっている | ブラウザの設定から「ハードウェアアクセラレーション」を有効にしてください |
| PCにゲームパッドが接続されている | 該当のゲームパッドの接続を切断してください |
| ビルドエラーが発生している | [ビルドエラー](./BuildError.md#build-error)の有無を確認してください |

例として、Chromeを使用している場合は設定ページの「システム」から「ハードウェアアクセラレーションが使用可能な場合は使用する」を有効にすることでワールド入場時の暗転が解消される場合があります。

![BrowserBlackWindow](./img/BrowserBlackWindow_ja.jpg)

## エラーメッセージ一覧

| エラーメッセージ | メッセージの出るタイミング | 原因 | 備考 |
|----------------|------------------------|------|------|
| バイナリ出力に失敗しました | ローディングのHeliScriptチェック時 | メンバ変数であるリスト(list<T>)で、Tがクラスであった場合に、定義箇所でnewしている | ローディング画面の途中で「バイナリ出力に失敗しました」というエラーが出てフリーズする |
| return文の最後に【;】がありません | ローディングのHeliScriptチェック時 | return文の最後で;を忘れている | |
| クラスの中でのオブジェクト初期化は出来ません | ローディングのHeliScriptチェック時 | クラスの中でオブジェクト初期化をしている | |
| 【Vector3】は定数型として有効ではありません | ローディングのHeliScriptチェック時 | constでVector3クラス定数を定義しようとした<br>constが付与できる型は、int, float, bool, stringのみ | |
| 引数配列型次元数【1】に対して、引数の次元数は【0】です | ローディングのHeliScriptチェック時 | listの引数に対してlistじゃないものを渡そうとしている | |
| 【◯◯】はクラスメンバ名としては無効です | ローディングのHeliScriptチェック時 | メソッドの戻り値の指定を忘れている | |
| 関数【×××】の第◯引数は◯◯値ではなく◯◯参照です | ローディングのHeliScriptチェック時 | 引数にいれる型が間違っている | |
| float値に剰余演算は適用できません | ローディングのHeliScriptチェック時 | floatで剰余演算をしようとした(float % intのような) | |
| クラス【◯◯】にメンバ【××】は存在しません | ローディングのHeliScriptチェック時 | クラスメソッド名を間違えている | |
| delegate型でないオブジェクトを使って関数が呼び出されました | ローディングのHeliScriptチェック時 | メソッド名を間違えている | |
| 関数定義ブロックの最後に【}】がありません | ローディングのHeliScriptチェック時 | メソッド名を間違えていると上記と合わせて出る<br>}を忘れている | |
|【 REF 】命令 範囲外アクセスエラー (Page = ◯, Index = ◯) 要素数 = ◯ at {クラス名}::{メソッド名} |メソッド実行時|何かしらで範囲外を指定した<br>nullのVector3やQuaternionを参照しようとした|ページが何を指しているのか不明<br>ページや要素数がマイナスになることもある|
|【 CALLMETHOD 】命令 Null reference error: Method "{クラス名}@{メソッド名}" was called from null object. at Helicopter::Helicopter | メソッド実行時 | メソッドを実行したクラスインスタンスがnull<br>初期化忘れや、初期化の前に実行したり||
|関数呼び出しの深さ制限に到達しました|メソッド実行時|繰り返し処理で無限ループになった||
