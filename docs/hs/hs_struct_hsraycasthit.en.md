# HSRaycastHIT Class

Class to receive Raycast results.

## Class Definition

```
class HSRaycastHIT
{
    public  Item    Item;
    public  float   Distance;
    public  Vector3 Pos;
    public  Vector3 Normal;
}
```

## Example Usage

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

## Member Variables

### Item

`public Item Item`

Item object that the ray hit.

### Distance

`public float Distance`

Distance from Pos where the ray hit.

### Pos

`public Vector3 Pos`

Position where the ray hit.

### Normal

`public Vector3 Normal`

Normal of the face the ray hit.

***