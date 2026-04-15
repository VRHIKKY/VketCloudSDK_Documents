# VKC Node Draco
This component provides Draco compression functionality to reduce 3D model file sizes and improve loading times.  
Draco is a compression technology for 3D geometry developed by Google that can efficiently compress mesh data to significantly reduce file sizes.

!!! note "About this guide"
    This guide explains the basic usage and settings of VKC Node Draco. For detailed performance optimization information, please refer to [World Optimization](../WorldOptimization/WorldOptimization.en.md).

## Property List

![VKCNodeDraco_01](img/VKCNodeDraco_01.jpg)

| Category | Label | Function |
| ---- | ---- | ---- |
| Compression | Compression Level | Sets the Draco compression level. Higher values improve compression ratio but may reduce quality. |
| | Position Quantization | Sets the quantization level for vertex positions. Smaller values improve precision. |
| | Normal Quantization | Sets the quantization level for normal vectors. |
| | UV Quantization | Sets the quantization level for texture coordinates. |
| | Color Quantization | Sets the quantization level for vertex colors. |
| Quality | Preserve Quality | Sets whether to preserve original quality as much as possible during compression. |
| Performance | Enable GPU Decompression | Enables high-speed decompression using GPU. Improves performance on compatible devices. |

!!! tip "Balance between compression level and quality"
    Higher compression levels result in smaller file sizes but may reduce model precision.
    It's important to find the right balance for your use case.

### Draco Details

#### 1. **About Compression Levels**
Draco compression allows you to set compression levels in the range of 0-10.

- **Level 0-3**: Low compression, high quality - suitable for models where precision is critical
- **Level 4-6**: Medium compression, balanced - recommended for general use
- **Level 7-10**: High compression, low quality - when file size is the top priority

#### 2. **Quantization Parameters**
Each quantization parameter controls the precision of the corresponding data type.

| Parameter | Recommended Value | Use Case |
| ---- | ---- | ---- |
| Position Quantization | 14 | General models |
| Normal Quantization | 10 | Models using normal maps |
| UV Quantization | 12 | Textured models |
| Color Quantization | 8 | Models using vertex colors |

#### 3. **Performance Considerations**
- **File Size**: Typically reducible to 10-30% of original size
- **Loading Time**: Significantly reduced loading times, especially in mobile environments, due to smaller file sizes
- **Memory Usage**: Memory usage during decompression is approximately equivalent to the original model
- **Decompression Process**: Enabling GPU decompression improves decompression speed on compatible devices

!!! warning "About compatibility"
    Draco decompression may not be supported on older devices or browsers.
    Please verify operation in your target environment.

## Usage

### Basic Setup Steps
1. Add VKC Node Draco component to GameObject containing 3D model
2. Set compression level according to your use case
3. Adjust quantization parameters as needed
4. Draco compression is automatically applied during build

### Performance Optimization Tips
- Compression levels 6-8 are recommended for mobile environments
- Compression levels 3-5 are recommended for desktop environments focusing on quality
- More complex geometry achieves higher compression efficiency
- Combining with texture size optimization creates synergistic effects

!!! note "Best Practices"
    Draco compression only affects 3D model geometry.
    For texture file compression, please refer to [Texture Compression](../WorldOptimization/TextureCompression.en.md).