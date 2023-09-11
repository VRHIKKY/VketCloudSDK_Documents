
# Play/StopItem
![PlayStopItem](img/PlayStopItem.jpg)

PlayItem lets you play audio, particle, or an object animation.

The Object you specify needs to have any of the following component.

- HEOObject
- HEOParticle
- HEOAudio

When you specify an HEOObject, you can additionally set an Index.
If you set one, the motion of the Index number will be played.
Additionally, if the HEOObject is an Item that contain Beginactions, it will also be played.

StopItem will stop whatever is playing, including any Beginactions.
