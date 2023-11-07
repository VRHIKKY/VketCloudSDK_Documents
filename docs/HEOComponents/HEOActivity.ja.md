# HEOActivity

![HEOActivity_1](img/HEOActivity_1.jpg)

HEOActivityはアクティビティを使用する際に設定するコンポーネントです。<br>
アクティビティとはモデル・スクリプトをひとまとめに統合し、ワールドへの配置と設定を便利にするための機能です。

| 名称 | 機能 |
| ---- | ---- |
| World Position | アクティビティを配置する位置を指定します。 |
| World Rotation | アクティビティを配置する角度を指定します。 |
| .json | アクティビティの情報をまとめたjsonファイルを指定します。|
| Overrides | 各アクティビティに定義されている設定項目を編集します。 |

## 設定方法

例として、ここではアセットストアにて入手したアナログ時計アクティビティを使用します。<br>
アクティビティの入手方法は後述のマニュアルをご確認ください。

1\. ダウンロードしたActivityファイルを解凍します。OSごとに方法が異なりますが、お好みの方法で解凍してください。

![HEOActivity_2](img/HEOActivity_2.jpg)

2\. ファイル内容を確認し、必ずREADMEをご確認ください。

![HEOActivity_3](img/HEOActivity_3.jpg)

3\. 以下READMEの内容を確認し、どのパラメータがカスタマイズできるのかを事前に「アクティビティ設定」項目でご確認ください。

![HEOActivity_4](img/HEOActivity_4_ja.jpg)

4\. 解凍したanalogclockフォルダーをVketCloudSDKがインストールされているUnityのProjectのアセット内任意のパスに配置してください。

![HEOActivity_5](img/HEOActivity_5.jpg)

5\. 空のシーンを作成し、シーンにて右クリックした上で "Add Essential Objects for Vket Cloud"を選択して必須コンポーネントを配置します。<br>その後、アクティビティの配置のために空のオブジェクトを作成します。

![HEOActivity_6](img/HEOActivity_6.jpg)

![HEOActivity_7](img/HEOActivity_7.jpg)

6\. 作成した空のオブジェクトの名前をAnalogClockなどに変更します。（他オブジェクトとは別の名称にしてください。）

![HEOActivity_8](img/HEOActivity_8.jpg)

7\. HEO ActivityコンポーネントをAnalogClockオブジェクトにアタッチします。

![HEOActivity_9](img/HEOActivity_9.jpg)

8\. activity\analogclock\AnalogClockActivity.jsonをHEO Activityのjson項目にセットします。

![HEOActivity_10](img/HEOActivity_10.jpg)

9\. HEOActivityのoverridesで"useSecondHand"の設定をします。パラメーターの説明に関してはREADME.mdの「アクティビティ設定」項目を参照して下さい。

10\. オブジェクトの原点にアナログ時計が出現するので、設置場所をTransformで調整します。

![HEOActivity_11](img/HEOActivity_11.jpg)

11\. ビルドしてアナログ時計が出現していれば完了です。

![HEOActivity_12](img/HEOActivity_12.jpg)

## アクティビティの入手方法について

Vket Cloudのアクティビティはアセットストアにて入手が可能です。<br>

アセットストアは[Vket Cloudマイページ](https://cloud.vket.com/)にログイン後、画面上部のタブにおける「アセットストア」からアクセスが可能です。

![HEOActivity_13](img/HEOActivity_13.jpg)

アセットストアのアクセス方法、使い方の詳細は以下のマニュアルページをご確認ください。
[便利機能をお手軽にインストール！Vket Cloudアセットストア・アクティビティの使い方](https://magazine.vket.com/n/n7d554dbeb552)