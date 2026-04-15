# VketCloudSDK 16.5 Release Notes

This document summarizes the changes in VketCloudSDK 16.5.

!!! info "Release Information"
    **Version**: 16.5
    **Release Date**: April 15, 2026
    **Supported Unity Version**: 2021.3 LTS and later

## Overview

VketCloudSDK 16.5 brings significant performance improvements, new components, and enhanced developer experience. We've focused particularly on optimizations for mobile devices.

## New Features

### VKC Component Enhancements

- **VKCItemAdvancedCollider**: Provides advanced collision detection control
- **VKCNodePerformanceProfiler**: Real-time performance monitoring functionality
- **VKCAttributeCondition**: Dynamic control system with conditional branching

### HeliScript API Extensions

```javascript
// New screen recording API
hsSystemOutput.StartScreenRecording();
hsSystemOutput.StopScreenRecording();

// Advanced audio control
hsAudioManager.SetSpatialBlend(audioId, spatialBlend);
hsAudioManager.SetReverb(audioId, reverbPreset);
```

### Developer Tools

- **VketCloud Debug Console**: More detailed debug information display
- **Performance Analyzer**: Bottleneck identification support tool
- **Asset Validation Tool**: Asset quality checking functionality

## Improvements

### Performance Optimization

- Rendering process optimization resulting in 30% framerate improvement
- 20% reduction in memory usage (especially for texture and mesh data)
- Reduced loading times (40% improvement on average)

### Usability Enhancements

- Redesigned component inspector UI in editor
- More intuitive arrangement of settings
- Enhanced real-time preview functionality

### Mobile Support Improvements

- Enhanced stability on iOS/Android
- Improved touch operation responsiveness
- Optimized battery consumption

## Bug Fixes

### Major Fixes

- **VKCItemObject**: Fixed crashes with large meshes
- **VKCNodeMirror**: Resolved rendering issues with mirror reflections
- **HeliScript**: Fixed memory leaks in async/await processing

### Other Fixes

- Improved collider detection accuracy
- Resolved synchronization issues during animation playback
- Fixed UI element display order problems
- Resolved multi-platform compatibility issues

## Known Issues

### Limitations

- Some shaders may display incompletely on mobile devices
- Performance degradation may occur when loading large assets in WebGL environments

### Workarounds

These issues are scheduled to be resolved in the next update.
For details, please refer to the [Troubleshooting Guide](../troubleshooting/GeneralChecklist.md).

## Upgrade Instructions

1. Create a backup of your existing project
2. Install VketCloudSDK 16.5 from Package Manager
3. Rebuild your project
4. Review component settings to take advantage of new features

!!! warning "Breaking Changes"
    Some APIs include breaking changes. Please be sure to check the [Migration Guide](../troubleshooting/VersionUpdateTroubleshooting.md).

---

## Support

If you have any questions, please contact us through:

- [VketCloud Official Website](https://cloud.vket.com/)
- [Developer Community](https://discord.gg/vket)