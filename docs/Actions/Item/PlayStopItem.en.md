# Play/StopItem

![PlayStopItem_1](img/PlayStopItem_1.jpg)

## Overview

PlayItem will play audio, particle, or an object's animation.

The designated object needs to have either of the following components:

- [VKC Item Audio](../../VKCComponents/VKCItemAudio.md)
- [VKC Item Particle](../../VKCComponents/VKCItemParticle.md)
- [VKC Item Object](../../VKCComponents/VKCItemObject.md)

*For playing avatar animation, see the [Motion](../Motion/Motion.md) page.

If a [VKC Item Object](../../VKCComponents/VKCItemObject.md) component is designated, its Index will be also available for designation.
The Index will be referred to play the Object's motion.

If the designated Item also has a BeginActions, this will also be played.

!!! info "Reference for object animations"
    For further explanation about object animations, see the [World Making Guide / How to Animate Objects](../../WorldMakingGuide/PropAnimation.md) page.

## About StopItem

StopItem will stop the playing audio and particle. If a BeginActions is running, this will be stopped as well.

While StopItem seems to stop a playing object animation at first look, this is used to stop BeginActions, which **playing object animations** are not considered as BeginActions.<br>
StopItem can used for stopping particle and audio.

Therefore, to stop object animations, the animation's Loop must be turned off to end animation, or the following instructions can be used to create/play a Motion for stopping animation using PlayItem.

### Creating a Motion for stopping animations

1. Following the instructions of [How to add animation to VKC Item Object](../../WorldMakingGuide/PropAnimation.md#VKCItemObject) on  "World Making Guide / How to Animate Objects", create a default pose-animation for [VKC Item Object](../../VKCComponents/VKCItemObject.md) and export as hem file. As an example, this animation is named as Idle.

    ![PlayStopItem_2](img/PlayStopItem_2.jpg)

2. Place the Idle animation in [VKC Item Object](../../VKCComponents/VKCItemObject.md) as 1st Motion, and the animation to be played as 2nd and later Motions.  The 1st Motion will be the default Motion on world entry, which will be later used to stop playing animations.
    ![PlayStopItem_3](img/PlayStopItem_3.jpg)

3. As an example for stopping animation, the [VKC Item AreaCollider](../../VKCComponents/VKCItemAreaCollider.md) component will be used.<br> When the player enters the area collider's range, the PlayItem action will call the Cube's 2nd Motion (Index **1**), and 1st Motion (Index **0**) on leaving the area.

    ![PlayStopItem_4](img/PlayStopItem_4.jpg)

4. Entering the world, the animations will act as below:

    ![PlayStopItem_Result](img/PlayStopItem_Result.gif)
