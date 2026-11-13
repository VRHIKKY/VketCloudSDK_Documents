# 組み込み関数 - レイキャスト

レイキャストに関するユーティリティ関数

## Item関連

### hsItemRaycast
`HSRaycastHIT hsItemRaycast( Vector3 Origin, Vector3 Direction, float length )`
Origin 位置から Direction 方向（単位ベクトル）に、長さ length のレイをとばし、最も近い Item を探して HSRaycastHIT に設定します。
レイキャストの対象は、衝突判定が有効（ Item.IsCollisionDetection() が true ）なItemです。HIT対象が存在しない場合、HSRaycastHIT が null になります。
※Direction は「向きの単位ベクトル」です。回転の弧度（ラジアン）や度ではありません。

```
class HSRaycastHIT
{
    public  Item    Item;       // レイがヒットした Item オブジェクト
    public  int		NodeIndex;  // レイがヒットした Nodeのインデックス
    public  float   Distance;   // レイがヒットした Pos からの距離
    public  Vector3 Pos;        // レイがヒットした位置
    public  Vector3 Normal;     // レイがヒットした面の法線
    public	Vector2	UV;         // レイがヒットした位置におけるUV座標※ メッシュコライダーのみUVが返ってきます
}
```
