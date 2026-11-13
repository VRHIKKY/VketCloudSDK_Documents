# 組み込み変数

**HCSLの座標系・ベクトル・行列はすべて「右手系・列優先（column-major）」で格納・演算されます。**

HCSLでは以下の組み込み変数を使用可能です

|名前|説明|型|
|:--|:--|:--|
|HEL_MATRIX_W|ワールド行列|mat4|
|HEL_MATRIX_V|ビュー行列|mat4|
|HEL_MATRIX_P|プロジェクション行列|mat4|
|HEL_MATRIX_INV_W|逆ワールド行列|mat4|
|HEL_MATRIX_INV_V|逆ビュー行列|mat4|
|HEL_MATRIX_INV_P|逆プロジェクション行列|mat4|
|HEL_CAMERA_POS|カメラ座標|vec4|
|HEL_LIGHT_COLOR|ディレクショナルライトの色|vec4|
|HEL_LIGHT_DIR|ディレクショナルライトの方向|vec4|
|HEL_TIME|シーン経過時間。秒単位|float|
|HEL_REFLECTION_CUBE|リフレクションプローブのキューブマップ|samplerCube|
|HEL_REFLECTIONCUBE_MIPCOUNT|リフレクションプローブのキューブマップが持つミップマップ数|float|
|HEL_LIGHTMAP|ライトマップ|sampler2D|
|HEL_LIGHTMAP_ST|ライトマップのスケールオフセット|vec4|
|HEL_IBL_DIFFUSE_MAP|IBLディフーズマップ|samplerCube|
|HEL_IBL_SPECULAR_MAP|IBLスペキュラーマップ|samplerCube|
|HEL_IBL_SPECULAR_MIPCOUNT|IBLのスペキュラーマップが持つミップマップ数|float|