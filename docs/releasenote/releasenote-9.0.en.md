# 9.0.0
- Enabled the use of wildcards in the MaterialName for ReplaceTexture.
- Optimized by not calling the drawing process for sprites that are rectangle-clipped.
- Flick-based scrolling implemented.
- Added the ability to add a seek bar to layers.
- Reduced memory usage by generating text textures just before they are displayed.
- Pressing the F9 key toggles the visibility of all GUI displays.
- Reflected the polygon count within the Activity class.
- Implemented URL clicking support in text chat.
- Support for compressed texture in GUI images.
- Added URLClickable parameter to Canvas's text.
- ParticleEditor/ColorOverLifetime feature.
- When receiving a message while scrolling in text chat, input is no longer accepted.
- Clamp setting isn't applied when reloading the same texture.
- Corrections related to IBL (Image-Based Lighting) rendering quality.
- The AvatarOnly specification doesn't work correctly for colliders other than Field.