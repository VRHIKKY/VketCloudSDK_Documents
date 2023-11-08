# HEOUVScroller

Sets scroll animation on the UV of the object's material.

![HEOUVScroller](img/HEOUVScroller.jpg)

| Label | function |
| ---- | ---- |
|Wait Time |Pause time for each scroll |
|Scroll Time|Playback time for one scroll |

## Step UV List
| Label | function |
| ---- | ---- |
| Size | Number of UV scrolls in one set |
|X/Y|X (horizontal) direction/Y (vertical) direction scroll amount|

For example, if you set the following
![HEOUVScrollerSample](img/HEOUVScrollerSample.jpg)
![HEOUVScrollerSampleAnimation](img/UVScrollerSampleAnimation.gif)

2 seconds: 0.5 to the left

↓

1 second: stop

↓

2 seconds: 5 downwards

↓

1 second: stop

↓

2 seconds: 1.5 left / 1 up

↓

1 second: stop

↓

...then loop