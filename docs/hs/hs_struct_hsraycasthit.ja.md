# HSRaycastHIT クラス

Raycastの結果を受け取るクラス。

## クラス定義

```
class HSRaycastHIT
{
    public  Item    Item;
    public  float   Distance;
    public  Vector3 Pos;
    public  Vector3 Normal;
}
```

## 使用例

```
HSRaycastHIT hit  = hsItemRaycast( Origin, Direction, length );
if( hit !== null ) {
    hsSystemOutput("*** hit.Name[%s]\n" % hit.Item.GetName() );
    hsSystemOutput("*** hit.Distance[%.2f]\n" % hit.Distance );
    hsSystemOutput("*** hit.Pos.x[%.2f]\n" % hit.Pos.x );
    hsSystemOutput("*** hit.Pos.y[%.2f]\n" % hit.Pos.y );
    hsSystemOutput("*** hit.Pos.z[%.2f]\n" % hit.Pos.z );
    hsSystemOutput("*** hit.Normal.x[%.2f]\n" % hit.Normal.x );
    hsSystemOutput("*** hit.Normal.y[%.2f]\n" % hit.Normal.y );
    hsSystemOutput("*** hit.Normal.z[%.2f]\n" % hit.Normal.z );
}
```

hsRaycastItem() の戻り値として使う。対象がなければ hit に null が入る。

***

## メンバ変数

### Item

`public  Item    Item`

レイがヒットしたItemオブジェクト。

### Distance

`public  float Distance`

レイがヒットした Pos からの距離。

### Pos

`public  Vector3 Pos`

レイがヒットした位置。

### Normal

`public  Vector3 Normal`

レイがヒットした面の法線。

***