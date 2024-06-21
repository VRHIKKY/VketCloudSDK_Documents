# VKC Node UV Scroller

オブジェクトのマテリアルに設定してあるUVのスクロールアニメーションを設定します

![HEOUVScroller](img/HEOUVScroller.jpg)

| Label | function |
| ---- | ---- |
| Wait Time |スクロール1回毎の停止時間 |
| Scroll Time |スクロール1回の再生時間 |

## Step UV List
| Label | function |
| ---- | ---- | 
| Size |1セットのUVスクロール数 | 
| X/Y |X(横)方向/Y(縦)方向のスクロール量 | 

例として下記のような設定にした場合
![HEOUVScrollerSample](img/HEOUVScrollerSample.jpg)
![HEOUVScrollerSampleAnimation](img/UVScrollerSampleAnimation.gif)

2秒間：左方向に0.5

↓

1秒間：停止

↓

2秒間：下方向に5

↓

1秒間：停止

↓

2秒間：左方向に1.5 / 上方向に1

↓

1秒間：停止

↓

...以降ループ