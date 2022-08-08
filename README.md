# VketCloudSDKドキュメント制作へようこそ
このリポジトリは、VketCloudSDKのドキュメントを管理するリポジトリです。

# Contribution policy
社外コントリビューターの参加も絶賛受付中です。
誤字脱字の修正から文言のブラッシュアップまで、どんな些細なリクエストであっても、気軽にコミットいただいて結構です。
なお、プルリクエストされた時点で、以下の規約にご同意いただいたとみなします。ご了承ください。

- プルリクエストが承認されたとしても、いかなる報酬も発生しません。
- プルリクエストは却下される場合があり、かつ将来にわたって再度修正されることがあります。
- コミット内容に関して、著作権はHIKKYに帰属します。
- 悪質なコミットや嫌がらせに関しては、法的なしかるべき処置を持って対応します。

# 執筆環境の導入
執筆環境の導入は、以下の二通りが可能です。

## ①pipを使う
もっともシンプルな環境構築になります。コマンドから執筆に必要な環境を導入します。<br>
使用するフレームワークおよびプラグインは、以下の通りです。

- git
- mkdocs
- mkdocs-material
- mkdocs-static-i18n
- mike

## ②venvを使う
venvを用いて仮想環境を構築で執筆が可能です。<br>
vketclouddocsというフォルダーがディレクトリに移動し、以下のコマンドを実行してください。

- Windows<br>`vketclouddocs\Scripts\activate`
- Mac & Linux<br>
`source vketclouddocs/bin/activate`

仮想環境を終了する場合は`deactivate`を実行してください。


## ③dockerを使う
dockerによる環境構築も可能です。
dockerを使用する場合は、あらかじめdockerとdocker-composeがインストールされている必要があります。
dockerの詳しい使い方は省略しますが、docker-compose.ymlがあるディレクトリに移動し、docker-compose upでコンテナを起動します。

# mkdocsを起動する
mkdocsを起動するには、

```
cd 〇〇〇/VketCloudSDK/source #mkdocs.ymlがあるディレクトリ
mkdocs serve
```

とコマンドを打ち、ブラウザから http://127.0.0.1:8000/ を開いてください。

# お問い合わせ
執筆環境の導入や掲載内容についてのお問い合わせは、このリポジトリにissueを立てていただくか、VketCloudSDKのDiscordサーバー内にて、お問い合わせください。