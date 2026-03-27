# World Profiler Overview

## Overview
World Profiler is a tool that visualizes and analyzes various world loads (load time, rendering load, memory load) in the Unity Editor. It is provided as part of the SDK and can be used for world optimization and pre-upload checks.

## Key Features
**Load Time**

  - Initial load file count
  - Initial load texture size
  - Initial load mesh size
  - Initial load NPC size
  - Preset avatar size
  - Initial load audio size
  - Initial load motion size

**Rendering Load**

  - Shadow map usage
  - Bloom activation
  - Light scattering activation
  - IBL activation
  - SSAO activation

**Memory Load**

  - Total file size
  - Total polygon count
  - Texture size
  - Maximum texture resolution
  - Maximum video size

## How to Use
1. Open "World Profiler" from the Unity Editor menu.
2. Select the world to profile.
3. Detailed load information is displayed for each category (load time, rendering load, memory load).
4. In the detailed section, you can check information such as size and polygon count for each file.
5. Auxiliary functions such as threshold testing, report output, and real-time monitoring are also available.

## Icon Meanings
- **Low (Green)**: Low load
- **Medium (Yellow)**: Medium load
- **High (Red)**: High load
- **Fatal (Black)**: Fatal load

## Notes
!!! warning "Note"
    - Thresholds for each item may vary depending on the SDK version and plan.
    - Detailed analysis and report output can be executed from the dedicated button.

## Expansion & Customization
- The display/hide of categories can be toggled.
- Detailed data is automatically acquired from various components in the scene.
