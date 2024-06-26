# VKC Item Audio

![HEOAudio_1](img/HEOAudio_1_en.jpg)

|  Label |  function  |
| ----   | ---- |
| `Audio Type` | Choose from BGM, SE, or SystemSE |
| `Audio Clip` | Specify the audio file. <br> Currently, only mp3 files are supported. |
| `loop` | Set if you want it to loop. |
| `autoplay` | If you want the audio to play automatically after joining. e.g. world BGM. |

Each `Audio Type` matches the In-game config label.

|  Audio Type |  In-game config label  |
| ----   | ---- |
| `BGM` | Music |
| `SE` | Effects |
| `System SE` | Interface |

By accessing the in-game config, the player may set the volume of each audio type.

![HEOAudio_2](img/HEOAudio_2_en.jpg)

## Audio file format

When setting an audio file, please follow the format below:

| Label | Value |
| ---- | ---- |
| File format | mp3 |
| Sampling rate | 44100 Hz |
| Bit rate | 160 kbps |

!!! note caution
    Upon using VKC Item Audio for playing BGM, consider the following:

    - When a video file is playing, the video audio will be prioritized.
    - SDK does not support distance falloff.
