# VKC Item Audio

![VKCItemAudio_1](img/VKCItemAudio_01.jpg)

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Audio Type| BGM | BGM、効果音から選択できます。 |
| Audio Clip | なし | オーディオファイルを指定します。<br>なお、現時点ではmp3ファイルの再生にのみ対応しております。 |
| Loop | False | 繰り返し再生するかどうか設定します。 |
| Autoplay | False | ワールドBGMのように、入室後から自動で再生する場合に使用します。 |

それぞれのオーディオタイプは、インゲームコンフィグのラベルに対応しています。

|  Audio Type |  In-game config label  |
| ---- | ---- |
| `BGM` | BGM |
| `SE` | 効果音 |

ユーザーはワールド内の設定画面から各オーディオタイプの音量が調整できます。

![VKCItemAudio_2](img/VKCItemAudio_02_jp.jpg)

???+ note "このオブジェクトタイプを使用可能なItemクラス"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [Play](../hs/hs_class_item.md#play)
    - [Stop](../hs/hs_class_item.md#stop)
    - [IsPlay](../hs/hs_class_item.md#isplay)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [ReplaceItem](../hs/hs_class_item.md#replaceitem)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [GetProperty](../hs/hs_class_item.md#getproperty)
    - [CallComponentMethod](../hs/hs_class_item.md#callcomponentmethod)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

## 詳細設定

| 名称 | 初期値 |  説明  |
| ---- | ---- | ---- |
| Auto Loading | True | 動的ローディングの有効/無効を切り替えます。 |
| Clickable | False | クリックできるようになります。 |
| Item Render Priority | 0 | ワールド内のItemの描画優先度を変更できます。 |
| Show Photo Mode | True | 撮影モードで再生されるかどうかを指定します。 |
| Override | - | ワールド入場時に`Overrides`にて設定された`Audio Clip`がVKC Item Audioにて設定した`Audio Clip`に代わって使用されます。 |

## オーディオファイルのフォーマット

オーディオファイルを設定する際、以下のフォーマットに従ってください：

| 名称 | 数値 |
| ---- | ---- |
| ファイル形式 | .mp3 |
| サンプリングレート | 44100 Hz |
| ビットレート | 160 kbps |

!!! note caution
    BGMは以下の点に注意が必要です。

    - 動画再生時には、動画の音声が優先されます。
    - 距離減衰には対応していません。
