#HEOVideoTrigger

![HEOVideoTrigger](img/HEOVideoTrigger.jpg)

HEOVideoTrigger is used to play a video in the world.

| Label | Function |
| ---- | ---- | 
| Enable | Toggles the clickability of the HEOVideoTrigger. |
| Video Material | Specify the material where the video will be displayed. |
| Video Path Mode | Specify how to find the path to video data. <br> `Clip Mode`: designates a video file to be played from the Asset folder. <br> `String Mode`: designates a video file via string input (e.g. URLs, directory, etc. ).|
| Autoplay | Specify whether to automatically play the video.<br>Each scene enables a single video to be played at a time. <br> If more than two objects are designated as `True`, only the last one will be played. |
| Loop | Specify whether the video should loop at the end. |
| Access in HEOObject | Mode to access a material in [HEOObject](HEOObject.md) for displaying the video. <br> On setting this to `true`, specify the target material name on `Target Object Name`.|

## Notes
Make sure to add a [HEOField](HEOField.md), for this component alone cannot pack video files into .heo. </br>

VketCloudSDK enables only a single video to be played at a time.
To make a pseudo-display of multiple videos, split the display within one video to two, and designate the display range within the screen's material.<br>

If you don't set autoplay, you need to control the start of playback by some means, such as an action. </br>
The below image uses [HEOActionTrigger](HEOActionTrigger.md) to implement video playback on click.

![HEOVideoTrigger](img/HEOVideoTriggerAdd.jpg)


## About Video Materials
The Shader of the material needs to be Unlit/Texture.

## About VideoPathMode</br>
ClipMode refers to data inside the project. </br>
StringMode refers to the specified URL. It can be used for video streaming, etc.

!!! note caution
    StringMode is currently able only for internal developers. 

    For playing videos, please use the ClipMode.

## About video files to use
Please follow the format below.

| Label | Details |
| ---- | ---- |
| File Format | .mp4 |
| Resolution | 1280x720 H.264 |
| AAC | 44.1 kHz |
| Frame rate | 29.97 or 30 |
| Profile level | 4.1, AAC 44.1kHz, yuv420 |

!!! note caution
    The SDK does not support distance falloff for video audio.
    
    As an alternative implementation, the [HEOAreaCollider](../HEOComponents/HEOAreacollider.md) can be used to stop the video when the player goes out from a certain range.