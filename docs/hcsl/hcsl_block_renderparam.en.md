# renderparam block

The `renderparam` block specifies rendering parameters.

List of usable parameters:

| Variable Type | Variable Name | Default Value | Description | Permitted Values |
|:--|:--|:--|:--|:--|
| bool | hel_z_write | true | Whether to perform depth testing | true, false |
| int  | hel_depth_func | HEL_DEPTH_FUNC_LESS | How depth testing is run | HEL_DEPTH_FUNC_LESS, HEL_DEPTH_FUNC_EQUAL, HEL_DEPTH_FUNC_LEQUAL, HEL_DEPTH_FUNC_GREATER, HEL_DEPTH_FUNC_NOTEQUAL, HEL_DEPTH_FUNC_GEQUAL, HEL_DEPTH_FUNC_ALWAYS |
| int  | hel_cull_mode | HEL_CULL_BACK | How culling is performed | HEL_CULL_NONE, HEL_CULL_BACK, HEL_CULL_FRONT |
| int  | hel_render_queue_offset | 0 | Specifies the render queue offset within a certain drawing pass. For example, if there are two shaders rendering in the `Geometry_AlphaBlending` pass, and one has an offset of "0" and the other "10", the latter will be rendered later. Using this requires enabling RenderQueue in the SDK rendering settings. | Any integer value |
| int  | hel_color_space | HEL_COLOR_SPACE_LINEAR | Works only on Heliodor (VketCloud). Specifies whether the color space calculation in HCSL is in linear space or gamma space. | HEL_COLOR_SPACE_LINEAR, HEL_COLOR_SPACE_GAMMA |

```
renderparam
{
    bool hel_z_write = true;
    int  hel_depth_func = HEL_DEPTH_FUNC_GEQUAL;
    int  hel_cull_mode = HEL_CULL_BACK;
    int  hel_render_queue_offset = 10;
    int  hel_color_space = HEL_COLOR_SPACE_GAMMA;
}
```