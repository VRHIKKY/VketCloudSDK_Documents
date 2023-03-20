
# Playerクラス

Playerクラスは、自分自身のプレイヤー（アバター）を表すものです。


## クラス定義

```
class Player {
    public void SetPos(Vector3 pos)
    public Vector3 GetPos()
 
    public void SetRotate(float angle)
    public float GetRotate()

    public string GetName()

	public int GetPhysicsID()
}
```


***


## Playerのユーティリティー関数
### hsPlayerGet()
`Player hsPlayerGet()`

自分自身の Player インスタンスを取得する。


***


## メソッド
### SetPos(Vector3)
`public void SetPos(Vector3 pos)`

座標を設定する。

### GetPos()
`public Vector3 GetPos()`

座標を取得する。

### SetRotate(float)
`public void SetRotate(float angle)`

プレイヤーの向きを設定する。

### GetRotate()
`public float GetRotate()`

プレイヤーの向きを取得する。

### GetName()
`public string GetName()`

プレイヤーの名前を取得する。

### GetPhysicsID()
`int GetPhysicsID()`

PhysicsIDを取得する。

