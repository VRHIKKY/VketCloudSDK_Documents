# hcsl block

The `hcsl` block is the parent element of the entire shader. It assigns a shader name by enclosing it in double quotes next to the `hcsl` string.
Additionally, this shader name serves as an internal key for the engine to identify which custom shader a material is using, so it must be unique to avoid duplication.

```
hcsl "Test/WavePlane"
{

}
```