---
description: VketCloudSDKドキュメントのディレクトリ構造とファイルURLを自動同期
allowed-tools: Read, Write, Glob, Grep
thinking: ultra
user-invocable: true
---

# sync-toc スキル

VketCloudSDK_Documentsリポジトリの最新状況から、ディレクトリ構造とファイルURLを自動生成・更新するスキルです。

## 出力ファイル

| ファイル | 説明 |
|----------|------|
| `toc/directory-structure.md` | 日本語名形式のASCIIツリー + 統計テーブル |
| `toc/file-url.md` | ローカルURI形式の目次 |
| `toc/history.md` | 実行履歴（最新が上） |

## 処理フロー

以下の順序で処理を実行してください。

### ステップ1: 前回記録の読み込み

1. `toc/history.md` を読み込む（存在しない場合は初回実行として扱う）
2. 前回の同期日時、ディレクトリ数、ファイル数を取得

### ステップ2: changelog確認

1. `docs/changelog/` 配下の最新ファイルを確認
2. Glob で `docs/changelog/*.ja.md` を検索し、最新のchangelogを特定
3. 前回同期以降の変更をリストアップ

### ステップ3: mkdocs.yml解析

1. `mkdocs.yml` を読み込む
2. `nav:` セクションからナビゲーション構造を取得
3. `plugins:` > `i18n:` > `languages:` > `ja:` > `nav_translations:` から日本語翻訳マッピングを取得

**nav_translations の場所:**
```yaml
plugins:
  - i18n:
      languages:
        - locale: ja
          nav_translations:
            Introduction: はじめに
            About Vket Cloud SDK: Vket Cloud SDKについて
            ...
```

### ステップ4: ディレクトリスキャン

1. Glob で `docs/**/*.ja.md` を検索し、全ての日本語ドキュメントをリストアップ
2. Glob で `docs/**/` を検索し、ディレクトリ構造を取得
3. 各ディレクトリの .ja.md ファイル数を集計

### ステップ5: 差分検出

1. 前回記録と現在の状態を比較
2. 新規追加されたファイル/ディレクトリを検出
3. 削除されたファイル/ディレクトリを検出
4. changelogに記載があるが反映されていない項目があれば記録

### ステップ6: directory-structure.md生成

以下の形式で `toc/directory-structure.md` を生成:

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

### ステップ7: file-url.md生成

mkdocs.ymlのnav構造に基づいて `toc/file-url.md` を生成:

**変換ルール:**
- ファイルパス: `index.md` → `docs/index.ja.md`
- ナビ名: nav_translationsで英語→日本語変換
- インデント: 4スペース単位
- セクション: 子要素あり→リンクなし、子要素なし→リンクあり

**除外対象セクション（出力しない）:**
以下のセクションは file-url.md に含めない：
- リリースノート (Release Note)
- チェンジログ (Changelog)
- タグ規約 (Tag Conventions)
- 利用規約 (Terms of Use / License)
- トラブルシューティング (Troubleshooting)
- FAQ

**出力形式:**
```markdown
# Vket Cloud SDK ドキュメント 目次

- [はじめに](docs/index.ja.md)
- Vket Cloud SDKについて
    - [アカウント準備](docs/AboutVketCloudSDK/SetupAccount.ja.md)
    - [動作環境](docs/AboutVketCloudSDK/OperatingEnvironment.ja.md)
    - [SDKの導入方法](docs/AboutVketCloudSDK/SetupSDK_external.ja.md)
...
```

### ステップ8: 整合性チェック

以下の3つの観点で確認:

1. **パス存在確認**: file-url.mdで参照しているパスが実際に存在するか
   - Glob で該当ファイルの存在を確認
   - 存在しないパスがあれば警告リストに追加

2. **changelog反映確認**: changelogの変更がfile-url.mdに反映されているか
   - 新規追加されたドキュメントがnavに含まれているか確認

3. **漏れチェック**: docs/配下にあるがnavに含まれていないファイルを検出

警告がある場合は、ユーザーに報告する。

### ステップ9: 履歴記録

`toc/history.md` に実行記録を追加（最新が上）:

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

**履歴の追加方法:**
1. 既存のhistory.mdを読み込む（存在しない場合は新規作成）
2. ヘッダー（`# sync-toc 実行履歴`）の直後に新しいエントリを挿入
3. 既存のエントリはそのまま保持

### ステップ10: SKILL.mdのアップデート提案

処理を通じて発見した改善点があれば、当スキルを最適化するための提案をリストアップする。

例:
- 新しいセクションタイプへの対応が必要
- 変換ルールの追加・修正が必要
- パフォーマンス改善の余地がある
- エラーハンドリングの強化が必要

## 完了報告

処理完了後、以下の形式で報告:

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
