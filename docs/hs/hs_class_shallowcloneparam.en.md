# HSShallowCloneParam Class

The HSShallowCloneParam class is a class that manages the settings for ShallowClone specified in hsItemCreateShallowClone.

## Creating HSShallowCloneParam

Here is an example of performing ShallowClone:

```
Item origin = hsItemGet("ItemName");

HSShallowCloneParam param = new HSShallowCloneParam();
param.SetPos(makeVector3(1.0, 0.0, -5.0));

hsItemCreateShallowClone(origin, param);
```

## HSShallowCloneParam - Functions

### SetPos

`public void SetPos(Vector3 p)`

Specifies the coordinates when rendering the instance.

### SetQuaternion

`public void SetQuaternion(Quaternion q)`

Specifies the rotation when rendering the instance.

### SetScale

`public void SetScale(Vector3 s)`

Specifies the size when rendering the instance.

### SetColor

`public void SetColor(float R, float G, float B, float A)`

Specifies the color when rendering the instance.

### SetUVScale

`public void SetUVScale(float U, float V)`

Specifies the UV scale when rendering the instance.

### SetUVOffset

`public void SetUVOffset(float U, float V)`

Specifies the UV offset when rendering the instance.
