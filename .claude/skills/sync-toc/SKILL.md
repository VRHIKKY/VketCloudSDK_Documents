---
description: VketCloudSDKドキュメントのディレクトリ構造とファイルURLを自動同期
allowed-tools: Read, Write, Glob, Grep
user-invocable: true
---

# sync-toc スキル

VketCloudSDK_Documentsリポジトリの最新状況から、ディレクトリ構造とファイルURLを自動生成・更新するスキルです。

## 出力ファイル

すべての出力ファイルはリポジトリルート直下の `toc/` ディレクトリに配置されます:

| ファイル | 説明 |
|----------|------|
| `toc/directory-structure.md` | 日本語名形式のASCIIツリー + 統計テーブル |
| `toc/file-url.md` | ローカルURI形式の目次 |
| `toc/history.md` | 実行履歴（最新が上） |

## 関連スキル

- `sync-toc-context`: 要約とリンク一覧を `toc/context/` に生成する姉妹スキル

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
2. 取得したファイルパスからディレクトリ一覧を抽出（パスの親ディレクトリを重複排除）
3. 各ディレクトリの .ja.md ファイル数を集計

### ステップ5: 差分検出

1. 前回記録と現在の状態を比較
2. 新規追加されたファイル/ディレクトリを検出
3. 削除されたファイル/ディレクトリを検出
4. changelogに記載があるが反映されていない項目があれば記録

### ステップ6: directory-structure.md生成

`toc/directory-structure.md` を生成。nav_translationsを使用して日本語名でASCIIツリーを表示し、主要フォルダの統計テーブルを含める。

※出力形式の詳細は `examples.md` を参照

### ステップ7: file-url.md生成

mkdocs.ymlのnav構造に基づいて `toc/file-url.md` を生成。

**変換ルール:**
- ファイルパス: `index.md` → `docs/index.ja.md`
- ナビ名: nav_translationsで英語→日本語変換
- インデント: 4スペース単位
- セクション: 子要素あり→リンクなし、子要素なし→リンクあり

**除外対象セクション（出力しない）:**
- リリースノート (Release Note)
- チェンジログ (Changelog)
- タグ規約 (Tag Conventions)
- 利用規約 (Terms of Use / License)
- トラブルシューティング (Troubleshooting)
- FAQ

※出力形式の詳細は `examples.md` を参照

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

`toc/history.md` に実行記録を追加（最新が上）。

**履歴の追加方法:**
1. 既存のhistory.mdを読み込む（存在しない場合は新規作成）
2. ヘッダー（`# sync-toc 実行履歴`）の直後に新しいエントリを挿入
3. 既存のエントリはそのまま保持

※出力形式の詳細は `examples.md` を参照

### ステップ10: SKILL.mdのアップデート提案

処理を通じて発見した改善点があれば、当スキルを最適化するための提案をリストアップする。

例:
- 新しいセクションタイプへの対応が必要
- 変換ルールの追加・修正が必要
- パフォーマンス改善の余地がある
- エラーハンドリングの強化が必要

## エラーハンドリング

各ステップでエラーが発生した場合の対応:

| ステップ | エラー | 対応 |
|----------|--------|------|
| ステップ1 | history.mdが存在しない | 初回実行として扱い、処理を継続 |
| ステップ3 | mkdocs.ymlが存在しない | エラーを報告し、処理を中止 |
| ステップ3 | nav_translationsが見つからない | 警告を出し、英語名のまま処理を継続 |
| ステップ3 | navセクションが解析できない | エラーを報告し、処理を中止 |
| ステップ4 | .ja.mdファイルが0件 | 警告を報告し、処理を中止 |
| ステップ6-7 | toc/ディレクトリが存在しない | ディレクトリを作成して処理を継続 |

## 完了報告・エラー報告

処理完了時またはエラー発生時は、所定の形式で報告する。

※報告形式の詳細は `examples.md` を参照
