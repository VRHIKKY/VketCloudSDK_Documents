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

![VKCNodeDraco_02](img/VKCNodeDraco_02.jpg)

### Practical Configuration Examples

#### Scenario 1: Mobile Environment Optimization
```
Compression Level: 7
Position Quantization: 12
Normal Quantization: 8
UV Quantization: 10
Color Quantization: 6
Preserve Quality: false
Enable GPU Decompression: true
```
- **Effect**: Up to 80% file size reduction
- **Use Case**: Prioritizing smooth experience on smartphones

#### Scenario 2: High-Quality Desktop
```
Compression Level: 4
Position Quantization: 14
Normal Quantization: 12
UV Quantization: 14
Color Quantization: 10
Preserve Quality: true
Enable GPU Decompression: true
```
- **Effect**: 50-60% file size reduction while maintaining high quality
- **Use Case**: VR or high-end PC content

#### Scenario 3: Balanced (Recommended Settings)
```
Compression Level: 6
Position Quantization: 13
Normal Quantization: 10
UV Quantization: 12
Color Quantization: 8
Preserve Quality: true
Enable GPU Decompression: true
```
- **Effect**: 70% file size reduction with moderate quality preservation
- **Use Case**: Stable operation across a wide range of devices

### Performance Comparison Examples

| Model Type | Original Size | After Draco | Reduction | Loading Time Saved |
| ---- | ---- | ---- | ---- | ---- |
| Simple Cube | 150KB | 45KB | 70% | 65% |
| Detailed Building | 2.5MB | 600KB | 76% | 73% |
| Character Model | 800KB | 180KB | 77.5% | 75% |
| Complex Machinery | 1.2MB | 320KB | 73% | 70% |

### Troubleshooting

#### Common Issues and Solutions

**Issue 1: Model appears distorted after compression**
- **Cause**: Quantization levels set too low
- **Solution**: Increase Position Quantization and Normal Quantization values

**Issue 2: File size doesn't reduce significantly**
- **Cause**: Too simple geometry or already optimized model
- **Solution**: Increase compression level or combine with other optimization techniques

**Issue 3: Model doesn't display on older devices**
- **Cause**: Browser/device doesn't support Draco decompression
- **Solution**: Provide fallback uncompressed models

### Performance Optimization Tips
- Compression levels 6-8 are recommended for mobile environments
- Compression levels 3-5 are recommended for desktop environments focusing on quality
- More complex geometry achieves higher compression efficiency
- Combining with texture size optimization creates synergistic effects
- For scenes with many models, consider combining with LOD (Level of Detail) systems

!!! note "Best Practices"
    Draco compression only affects 3D model geometry.
    For texture file compression, please refer to [Texture Compression](../WorldOptimization/TextureCompression.en.md).

## Related Topics
- [VKC Node LOD Level](./VKCNodeLODLevel.en.md) - Level of detail optimization
- [World Optimization](../WorldOptimization/WorldOptimization.en.md) - Comprehensive optimization guide  
- [Texture Compression](../WorldOptimization/TextureCompression.en.md) - Texture file optimization