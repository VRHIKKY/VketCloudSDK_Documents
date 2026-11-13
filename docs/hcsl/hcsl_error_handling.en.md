# About Error Messages

In the HCSL compiler, errors are output in the following format:

```text
[Error Type] shader: File Name
File Name(Error Line): Error Message
> Error Implementation
```

```text
[ShaderCompileError] shader: Resource\WavePlane.hcsl.
Resource\WavePlane.hcsl(35) : Shader parsing error occurred.
>         vec4 outPos : ;
An unexpected token appeared.
```