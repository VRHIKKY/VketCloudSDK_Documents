# テクスチャ

HCSLでは、シェーダー内でテクスチャを利用することができます。

## 対応しているテクスチャ型
- 現在サポートされているのは2Dテクスチャ（`sampler2D`）とキューブマップ(`samplerCube`)です
- 3Dテクスチャには対応していません。

## テクスチャスロット数について
- HCSL自体には明示的なテクスチャ枚数制限はありません。
- ただし、実際に利用できるテクスチャスロット数は端末やブラウザによって異なります。
- 一般的な環境では8枚程度までの利用が推奨されます。
- 端末によっては8枚を超えると正しく動作しない場合があるため、8枚以内に収めることを推奨します。

## サンプル
```hlsl
uniform fragment {
    sampler2D _MainTex;
    sampler2D _SubTex;
    samplerCube _TestCube;
}

shader fragment {
    void main() {
        vec4 col1 = helTexture(_MainTex, uv);
        vec4 col2 = helTexture(_SubTex, uv);

        // LODを指定してリフレクションプローブを取得する
        float Roughness = 0.5; // Roughness値を適当に設定
        float mipIndex = Roughness * HEL_REFLECTIONCUBE_MIPCOUNT;
        // HEL_REFLECTION_CUBEはuniform宣言不要
        vec4 reflectColWithLOD = helTextureCubeLOD(HEL_REFLECTION_CUBE, refVec, mipIndex);

        // ライトマップを取得する
        vec2 lightMapUV = uv * HEL_LIGHTMAP_ST.xy + HEL_LIGHTMAP_ST.zw;
        vec3 LightMapCol = helTexture(HEL_LIGHTMAP, lightMapUV).rgb; 

        // キューブマップのサンプリング
        vec3 eyeVec = normalize(WorldPos - HEL_CAMERA_POS.xyz);
        vec3 refVec = reflect(eyeVec, normalize(WorldNormal));
        vec4 reflectCol = helTextureCube(_TestCube, refVec);
    }
}
```

## テクスチャの特殊な使い方
### ビデオテクスチャ
HCSLでは、特定の条件を満たすことでビデオテクスチャを利用することができます。

- テクスチャ名を`_MainTex`とし、描画パスを`Geometry_Opaque`(不透明描画)に設定してください。
- これにより、最初の描画パスの`_MainTex`がビデオテクスチャに自動的に差し替えられます。
- 動画の再生や制御方法については、別途提供されている資料をご参照ください。

※ ビデオテクスチャのアルファブレンドは将来的に対応予定です

#### サンプルコード
```hlsl
pass Geometry_Opaque {
    uniform fragment {
        sampler2D _MainTex;
    }
    shader fragment {
        void main() {
            vec4 col = helTexture(_MainTex, uv);
            outColor = col;
        }
    }
}
```