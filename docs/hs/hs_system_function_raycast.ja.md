# 組み込み関数 - レイキャスト

レイキャストに関するユーティリティ関数

## Item関連

### hsRenderingSetLightDir
`HSRaycastHIT hsItemRaycast( Vector3 Origin, Vector3 Direction, float length )`

Origin 位置から Direction 方向に、長さ length のレイをとばし、最も近い Item を探して HSRaycastHIT に設定します。
レイキャストの対象は、衝突判定が有効（ Item.IsCollisionDetection() が true ）なItemです。

```
class HSRaycastHIT
{
    public  Item    Item;       // レイがヒットした Item オブジェクト
    public  float   Distance;   // レイがヒットした Pos からの距離
    public  Vector3 Pos;        // レイがヒットした位置
    public  Vector3 Normal;     // レイがヒットした面の法線
}
```