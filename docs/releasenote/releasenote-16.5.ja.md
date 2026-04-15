# VketCloudSDK 16.5 リリースノート

このドキュメントは、VketCloudSDK 16.5の変更内容をまとめています。

!!! info "リリース情報"
    **バージョン**: 16.5
    **リリース日**: 2026年4月15日
    **サポートUnityバージョン**: 2021.3 LTS以降

## 概要

VketCloudSDK 16.5では、パフォーマンスの大幅な向上、新しいコンポーネントの追加、そして開発体験の改善を実現しました。特に、モバイル端末での動作を重視した最適化を行っています。

## 新機能

### VKCコンポーネント強化

- **VKCItemAdvancedCollider**: より高度な当たり判定制御を提供
- **VKCNodePerformanceProfiler**: リアルタイムパフォーマンス監視機能
- **VKCAttributeCondition**: 条件分岐による動的制御システム

### HeliScript API拡張

```javascript
// 新しい画面録画API
hsSystemOutput.StartScreenRecording();
hsSystemOutput.StopScreenRecording();

// 高度なオーディオ制御
hsAudioManager.SetSpatialBlend(audioId, spatialBlend);
hsAudioManager.SetReverb(audioId, reverbPreset);
```

### 開発者ツール

- **VketCloud Debug Console**: より詳細なデバッグ情報表示
- **Performance Analyzer**: ボトルネック特定支援ツール
- **Asset Validation Tool**: アセット品質チェック機能

## 改善

### パフォーマンス最適化

- レンダリング処理の最適化により、フレームレート30%向上
- メモリ使用量20%削減（特にテクスチャとメッシュデータ）
- ロード時間の短縮（平均40%改善）

### ユーザビリティ向上

- エディター内のコンポーネントインスペクタUI刷新
- より直感的な設定項目の配置
- リアルタイムプレビュー機能の強化

### モバイル対応強化

- iOS/Androidでの安定性向上
- タッチ操作の応答性改善
- バッテリー消費量の最適化

## バグ修正

### 重要な修正

- **VKCItemObject**: 大きなメッシュでのクラッシュを修正
- **VKCNodeMirror**: ミラー反射での描画不正を解決
- **HeliScript**: async/await処理でのメモリリークを修正

### その他の修正

- コライダー判定精度の向上
- アニメーション再生時の同期問題解決
- UI要素の表示順序問題を修正
- マルチプラットフォーム対応での互換性問題解決

## 既知の問題

### 制限事項

- 一部のシェーダーでモバイル端末での表示が不完全な場合があります
- WebGL環境での大容量アセットロード時にパフォーマンス低下が発生する可能性があります

### 回避方法

これらの問題については、次回アップデートで解決予定です。
詳細は[トラブルシューティングガイド](../troubleshooting/GeneralChecklist.md)をご参照ください。

## アップグレード手順

1. 既存プロジェクトのバックアップを作成
2. Package ManagerからVketCloudSDK 16.5をインストール
3. プロジェクトのリビルドを実行
4. 新機能を活用するためのコンポーネント設定見直し

!!! warning "重要な変更"
    一部のAPIに破壊的変更が含まれています。[マイグレーションガイド](../troubleshooting/VersionUpdateTroubleshooting.md)を必ず確認してください。

---

## サポート

ご不明な点がございましたら、以下までお問い合わせください：

- [VketCloud公式サイト](https://cloud.vket.com/)
- [開発者コミュニティ](https://discord.gg/vket)