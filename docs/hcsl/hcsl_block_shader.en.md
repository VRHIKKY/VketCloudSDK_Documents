# shader block

**The coordinate system, vectors, and matrices in HCSL are all "right-handed, column-major".**

 The `shader` block is where shader code is written. The `main` function is the entry point. Shader programming is performed using vertex attributes, `input`, `output`, `uniform` specified earlier, as well as the built-in variables and built-in functions described below.
Specify the target shader stage name next to `shader` (e.g. `vertex` or `fragment`).

```
shader vertex
{
    float g_Offset;

    float wave(vec2 st)
    {
        return sin(st.x * 50.0 + HEL_TIME) * 1.5;
    }

    void main()
    {
        g_Offset = 10.0;

        vec4 pos = vec4(_Position, 1.0);
        pos.y += wave(_TexCoord0 * _Size + vec2(_Seed + g_Offset));

        outPos = HEL_MATRIX_P * HEL_MATRIX_V * HEL_MATRIX_W * pos;
        WorldNormal = (HEL_MATRIX_W * vec4(_Normal, 0.0)).xyz;
        uv = _TexCoord0;
    }
}

shader fragment
{
    vec3 hsv2rgb( vec3 c )
    {
        vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );
        return c.z * mix( vec3(1.0), rgb, c.y);
    }

    void main()
    {
        vec4 col = vec4(1.0);

        vec2 st = uv;
        st *= _MainTex_ST.xy;
        st += _MainTex_ST.zw;

        col.rgb *= helTexture(_MainTex, st).rgb;
        col.rgb *= _MainColor.rgb;
        col.rgb *= hsv2rgb(vec3(mod(HEL_TIME, 1.0), 1.0, 1.0));

        outColor = col;
    }
}
```