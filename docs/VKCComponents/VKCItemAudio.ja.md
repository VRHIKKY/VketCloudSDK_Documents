# VKC Item Audio

![HEOAudio_1](img/HEOAudio_1_jp.jpg)

|  Label |  function  |
| ----   | ---- |
| `オーディオタイプ` | BGM、効果音、システム効果音から選択できます。 |
| `オーディオクリップ` | オーディオファイルを指定します。<br>なお、現時点ではmp3ファイルの再生にのみ対応しております。 |
| `ループ` | 繰り返し再生するかどうか設定します。 |
| `自動再生` | ワールドBGMのように、入室後から自動で再生する場合に使用します。 |

それぞれのオーディオタイプは、インゲームコンフィグのラベルに対応しています。

|  Audio Type |  In-game config label  |
| ---- | ---- |
| `BGM` | BGM |
| `効果音` | 効果音 |
| `システム効果音` | システム音 |

ユーザーはワールド内の設定画面から各オーディオタイプの音量が調整できます。

![HEOAudio_2](img/HEOAudio_2_jp.jpg)

## オーディオファイルのフォーマット

オーディオファイルを設定する際、以下のフォーマットに従ってください：

| 名称 | 数値 |
| ---- | ---- |
| ファイル形式 | mp3 |
| サンプリングレート | 44100 Hz |
| ビットレート | 160 kbps |

!!! note caution
    BGMは以下の点に注意が必要です。

    - 動画再生時には、動画の音声が優先されます。
    - 距離減衰には対応していません。
