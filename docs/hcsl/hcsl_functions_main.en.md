# main Function

The `main` function is the entry point (the starting point of processing) in shader programming. It is defined as a `void` type function.

```
void main()
{
    
}
```

# discard (Pixel Discard)

`discard` is a special instruction that can be used within a fragment shader.
It is used when you want to discard (skip) the rendering of the current pixel under certain conditions.

It is written inside the `main` function of the fragment shader as follows:

```
void main()
{
    if (/* Some condition */)
    {
        // Discard pixel
        discard;
    }
    else
    {
        // Render normally
    }
}
```

> * Note: `discard` is only valid within the fragment shader.