# pass block

## Overview
The `pass` block represents a unit of rendering pass and draw call. The pass name can be written next to `pass` to determine the rendering order.
Note that pass names are predetermined as constants, and you can assign the following pass names. When writing multiple `pass` blocks, it is fine whether you specify the same pass name or different pass names.
If there are multiple `pass` blocks with the same pass name, they will be rendered in order from top to bottom, so if you wish to change the rendering order within the same pass, change the order of the `pass` blocks.
To use alpha blending, use a pass name with "AlphaBlending". Other passes are opaque rendering passes.

* Note: Rendering order is descending.

- Background_Opaque
- Background_AlphaBlending
- Geometry_Opaque
- Geometry_AlphaBlending
- GeometryEdge_Opaque
- GeometryEdge_AlphaBlending
- Geometry_ShadowMap
- PostGeometry_Opaque
- PostGeometry_AlphaBlending
- Foreground_Opaque
- Foreground_AlphaBlending

```
pass Geometry_Opaque
{

}
```

## Special Passes
### Geometry_ShadowMap
`Geometry_ShadowMap` is a rendering pass for generating shadow maps. To cast shadows from an object with a custom shader onto a ShadowReceiver, you need to implement the shader for this rendering pass. Since the only information required for a shadow map is the depth, the implementation can be as simple as outputting the vertex position converted to projection coordinates and outputting black color.
You can also apply custom processing to depth information by using the `FS_DEPTH` semantic (e.g. casting shadows for ray-marching).

```
pass Geometry_ShadowMap
{
    attribute
    {
        vec3 _Position : VS_POSITION;
    }

    // Vertex shader output
    output vertex
    {
        vec4 outPos : VS_OUT_POSITION;
    }

    // Vertex shader
    shader vertex
    {
        void main()
        {
            // For shadow mapping, simply converting the position is enough as long as a value gets written into the depth buffer
            outPos = HEL_MATRIX_P * HEL_MATRIX_V * HEL_MATRIX_W * vec4(_Position, 1.0);
        }
    }
    
    output fragment
    {
        vec4 outColor : FS_COLOR;
    }

    // Fragment shader
    shader fragment
    {
        void main()
        {
            outColor = vec4(0.0);
        }
    }
}
```