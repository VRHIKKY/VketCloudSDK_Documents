# World Optimization - Overview

Vket Cloud SDK provides viable methods of optimization for better world performance on web browsers / smartphones.

## Occlusion Culling

In [Occlusion Culling](./OcclusionCulling.md), the objects beyond a certain occluder in the player's PoV (e.g. giant buildings, walls, etc. ) can be cut out from the draw process, optimizing the performance as a result.

![OcclusionCulling_Result](img/OcclusionCulling_Result.gif)

## Texture Compression

In [Texture Compression](./TextureCompression.md), the textures used in the world can be compressed using external tools.
By compressing textures, the texture load time causing longer world loading can be shortened.

## Dynamic Loading

Using the [VKC Item Field](../VKCComponents/VKCItemField.md) component, world resources can be [Dynamically Loaded / Unloaded](../VKCComponents/VKCItemField.md#configure-dynamic-loading) depending on the player's position.

By dynamic loading, the world load can be split to optimize resource loading, such as loading **only** the initial resources for world entrance, and controlling resources according to the player's actions.
