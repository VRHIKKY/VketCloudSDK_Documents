# VKC Node Draco
3Dモデルのファイルサイズを削減し、ロード時間を短縮するためのDraco圧縮機能を提供するコンポーネントです。  
Dracoは、Googleが開発した3Dジオメトリの圧縮技術で、メッシュデータを効率的に圧縮してファイルサイズを大幅に削減できます。

!!! note "このガイドについて"
    このガイドではVKC Node Dracoの基本的な使い方と設定について説明します。パフォーマンス最適化の詳細については[ワールド最適化](../WorldOptimization/WorldOptimization.ja.md)を参照してください。

## プロパティ一覧

![VKCNodeDraco_01](img/VKCNodeDraco_01.jpg)

| Category | Label | 名称 | 機能 |
| ---- | ---- | ---- | ---- |
| Compression | Compression Level | `圧縮レベル` | Draco圧縮のレベルを設定します。値が高いほど圧縮率が向上しますが、品質が低下する場合があります。 |
| | Position Quantization | `位置量子化` | 頂点位置の量子化レベルを設定します。値が小さいほど精度が向上します。 |
| | Normal Quantization | `法線量子化` | 法線ベクトルの量子化レベルを設定します。 |
| | UV Quantization | `UV量子化` | テクスチャ座標の量子化レベルを設定します。 |
| | Color Quantization | `色量子化` | 頂点カラーの量子化レベルを設定します。 |
| Quality | Preserve Quality | `品質を保持` | 圧縮時に可能な限り元の品質を保持するかどうかを設定します。 |
| Performance | Enable GPU Decompression | `GPU展開を有効` | GPUを使用した高速展開を有効にします。対応デバイスでのパフォーマンスが向上します。 |

!!! tip "圧縮レベルと品質のバランス"
    圧縮レベルを高くするとファイルサイズは小さくなりますが、モデルの精度が低下する可能性があります。
    用途に応じて適切なバランスを見つけることが重要です。

### Dracoの詳細

#### 1. **圧縮レベルについて**
Draco圧縮では、0-10の範囲で圧縮レベルを設定できます。

- **レベル 0-3**: 低圧縮、高品質 - 精密さが重要なモデルに適用
- **レベル 4-6**: 中圧縮、バランス型 - 一般的な用途に推奨
- **レベル 7-10**: 高圧縮、低品質 - ファイルサイズを最優先する場合

#### 2. **量子化パラメータ**
各量子化パラメータは、対応するデータタイプの精度を制御します。

| パラメータ | 推奨値 | 用途 |
| ---- | ---- | ---- |
| Position Quantization | 14 | 一般的なモデル |
| Normal Quantization | 10 | 法線マップを使用するモデル |
| UV Quantization | 12 | テクスチャ付きモデル |
| Color Quantization | 8 | 頂点カラーを使用するモデル |

#### 3. **パフォーマンス考慮事項**
- **ファイルサイズ**: 通常、元のサイズの10-30%まで削減可能
- **ロード時間**: ファイルサイズの削減により、特にモバイル環境でのロード時間が大幅に短縮
- **メモリ使用量**: 展開時のメモリ使用量は元のモデルとほぼ同等
- **展開処理**: GPU展開を有効にすることで、対応デバイスでの展開速度が向上

!!! warning "互換性について"
    古いデバイスやブラウザではDraco展開がサポートされていない場合があります。
    対象環境での動作確認を行ってください。

## 使用方法

### 基本的な設定手順
1. 3Dモデルを含むGameObjectにVKC Node Dracoコンポーネントを追加
2. 用途に応じて圧縮レベルを設定
3. 必要に応じて量子化パラメータを調整
4. ビルド時にDraco圧縮が自動的に適用される

![VKCNodeDraco_02](img/VKCNodeDraco_02.jpg)

### 実践的な設定例

#### シナリオ1: モバイル環境向け最適化
```
Compression Level: 7
Position Quantization: 12
Normal Quantization: 8
UV Quantization: 10
Color Quantization: 6
Preserve Quality: false
Enable GPU Decompression: true
```
- **効果**: ファイルサイズを最大80%削減
- **用途**: スマートフォンでの快適な体験を重視する場合

#### シナリオ2: 高品質デスクトップ向け
```
Compression Level: 4
Position Quantization: 14
Normal Quantization: 12
UV Quantization: 14
Color Quantization: 10
Preserve Quality: true
Enable GPU Decompression: true
```
- **効果**: ファイルサイズを50-60%削減、高品質を維持
- **用途**: VRやハイエンドPC向けコンテンツ

#### シナリオ3: バランス型（推奨設定）
```
Compression Level: 6
Position Quantization: 13
Normal Quantization: 10
UV Quantization: 12
Color Quantization: 8
Preserve Quality: true
Enable GPU Decompression: true
```
- **効果**: ファイルサイズを70%削減、適度な品質を維持
- **用途**: 幅広いデバイスでの安定した動作を目指す場合

### パフォーマンス比較例

| モデル種類 | 元サイズ | Draco圧縮後 | 削減率 | ロード時間短縮 |
| ---- | ---- | ---- | ---- | ---- |
| シンプルなキューブ | 150KB | 45KB | 70% | 65% |
| 詳細な建築物 | 2.5MB | 600KB | 76% | 73% |
| キャラクターモデル | 800KB | 180KB | 77.5% | 75% |
| 複雑な機械パーツ | 1.2MB | 320KB | 73% | 70% |

### トラブルシューティング

#### よくある問題と解決策

**問題1: 圧縮後にモデルが歪んで見える**
- **原因**: 量子化レベルが低すぎる
- **解決策**: Position QuantizationとNormal Quantizationの値を増やす

**問題2: ファイルサイズがあまり小さくならない**
- **原因**: シンプルすぎるジオメトリ、または既に最適化されているモデル
- **解決策**: 圧縮レベルを上げる、または他の最適化手法と併用

**問題3: 古いデバイスで表示されない**
- **原因**: Draco展開非対応のブラウザ・デバイス
- **解決策**: フォールバック用の非圧縮モデルを用意

### パフォーマンス最適化のコツ
- モバイル環境では圧縮レベル6-8を推奨
- デスクトップ環境では品質重視で圧縮レベル3-5を推奨
- 複雑なジオメトリほど圧縮効果が高い
- テクスチャサイズも合わせて最適化することで相乗効果が得られる
- 大量のモデルがある場合は、LOD（Level of Detail）システムとの併用を検討

!!! note "ベストプラクティス"
    Draco圧縮は3Dモデルのジオメトリに対してのみ効果があります。
    テクスチャファイルの圧縮については[テクスチャ圧縮](../WorldOptimization/TextureCompression.ja.md)を参照してください。

## 関連項目
- [VKC Node LOD Level](./VKCNodeLODLevel.ja.md) - レベルオブディテール最適化
- [ワールド最適化](../WorldOptimization/WorldOptimization.ja.md) - 総合的な最適化ガイド  
- [テクスチャ圧縮](../WorldOptimization/TextureCompression.ja.md) - テクスチャファイルの最適化