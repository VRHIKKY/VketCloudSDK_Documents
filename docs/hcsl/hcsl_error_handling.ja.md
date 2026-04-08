# エラーメッセージについて

HCSLコンパイラでは以下のような形式でエラーが出力されます

```
[エラー種別] shader: ファイル名
ファイル名(エラー行): エラーメッセージ
> エラー実装
```

```
[ShaderCompileError] shader: Resource\WavePlane.hcsl.
Resource\WavePlane.hcsl(35) : Shader parsing error occurred.
>         vec4 outPos : ;
An unexpected token appeared.
```