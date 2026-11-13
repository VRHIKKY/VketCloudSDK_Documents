# pass block

## 概要
passブロックは描画パス・ドローコールの単位を表します。passの横にPass名を書いて描画順を決めることができます。
なお、パス名はあらかじめ定数として決まっており、以下のパス名をつけることができます。passを複数個書くときに同じパス名指定しても違うパス名を指定しても問題ありません。
同じパス名のpassが複数個あるときは上に記述してあるものから順番に描画されるので、同パス内で描画順を変えたいときはpassの順番を変えてください。
アルファブレンドを行いたいときは、「AlphaBlending」とついているパス名を使います。それ以外のパスは不透明描画パスです。

※ 描画順は降順です

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

## 特別なパス
### Geometry_ShadowMap
`Geometry_ShadowMap`はシャドウマップ生成用の描画パスです。カスタムシェーダーを適応しているオブジェクトの影をShadowReceiverに落とすにはこの描画パスのシェーダーを実装しておく必要があります。なお、シャドウマップに必要な情報はその深度情報だけなので実装はシンプルにプロジェクション座標に変換した頂点位置を書き出し、色は黒で書き出すだけで問題ありません。
FS_DEPTHセマンティックを使い、深度情報にひと手間加えることもできます(例. レイマーチングの影を落とす)

```
pass Geometry_ShadowMap
{
    attribute
    {
        vec3 _Position : VS_POSITION;
    }

    // 頂点シェーダーアウトプット
    output vertex
    {
        vec4 outPos : VS_OUT_POSITION;
    }

    // 頂点シェーダー
    shader vertex
    {
        void main()
        {
            // シャドーマップはデプスバッファに値が書き込まれさえすればよいので、単純に位置を変換するだけでよい
            outPos = HEL_MATRIX_P * HEL_MATRIX_V * HEL_MATRIX_W * vec4(_Position, 1.0);
        }
    }
    
    output fragment
    {
        vec4 outColor : FS_COLOR;
    }

    // フラグメントシェーダー
    shader fragment
    {
        void main()
        {
            outColor = vec4(0.0);
        }
    }
}
```