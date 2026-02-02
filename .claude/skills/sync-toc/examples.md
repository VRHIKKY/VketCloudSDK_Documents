# sync-toc 出力フォーマット例

このファイルは sync-toc スキルの出力フォーマット詳細を定義します。

---

## directory-structure.md

```markdown
# VketCloudSDK ドキュメント フォルダ構成

## ディレクトリ構造

nav_translationsを使用して日本語名でツリーを表示:

```
docs/
├── はじめに/
├── Vket Cloud SDKについて/
│   └── img/
├── ワールド制作の基本/
├── ワールド制作ガイド/
│   └── img/
├── トラブルシューティング/
...
```

## 主要フォルダの説明

| 日本語名 | 英語名 | .ja.md数 |
|----------|--------|----------|
| Vket Cloud SDKについて | AboutVketCloudSDK | 5 |
| ワールド制作ガイド | WorldMakingGuide | 41 |
...

## 総ファイル数

- **.ja.md ファイル**: XXX個
- **ディレクトリ数**: XX個
```

---

## file-url.md

```markdown
# Vket Cloud SDK ドキュメント 目次

- [はじめに](docs/index.ja.md)
- Vket Cloud SDKについて
    - [アカウント準備](docs/AboutVketCloudSDK/SetupAccount.ja.md)
    - [動作環境](docs/AboutVketCloudSDK/OperatingEnvironment.ja.md)
    - [SDKの導入方法](docs/AboutVketCloudSDK/SetupSDK_external.ja.md)
...
```

---

## history.md

```markdown
# sync-toc 実行履歴

## YYYY-MM-DD HH:MM:SS
- **ディレクトリ数**: XX
- **ファイル数**: XXX (.ja.md)
- **差分**: +Xファイル, -Xファイル
- **changelog参照**: SDK X.X (YYYY-MM-DD)
- **整合性**: OK / 警告あり（詳細）
- **更新ファイル**: directory-structure.md, file-url.md

[既存の履歴...]
```

---

## 完了報告

```
## sync-toc 完了

### 生成ファイル
- toc/directory-structure.md
- toc/file-url.md
- toc/history.md

### 統計
- ディレクトリ数: XX
- ファイル数: XXX (.ja.md)
- 差分: +X, -X

### 整合性チェック
- 結果: OK / 警告あり

### 警告（あれば）
- [警告内容をリスト表示]

### SKILL.mdアップデート提案（あれば）
- [ステップ10で検出した提案内容をリスト表示]
```

---

## エラー報告

```
## sync-toc エラー

### 発生箇所
ステップX: [ステップ名]

### エラー内容
[具体的なエラー内容]

### 推奨アクション
[ユーザーが取るべきアクション]
```
