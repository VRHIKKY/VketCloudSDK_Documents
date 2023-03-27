
# コンポーネント

## コンポーネントの定義

コンポーネントとは、Sceneファイルに記述されたアイテムに対して追加するクラスオブジェクトです。

予約語のcomponentの次にコンポーネント名を指定したブロックを定義します。

```
component コンポーネント名 {
        // component内部にはクラスと同等のメソッド・フィールド定義が可能
}
```

また、ブロック内でコンポーネント名と同じ名前でpublicのメソッドを定義するとコンストラクタになります。これはコンポーネントオブジェクト生成時に一度だけ呼び出されます。

public void Update()メソッドを定義すると、画面描画時に毎フレーム呼び出されます。

以下が最小限のサンプルコードになります。

```
component Test
{
    public Test()
    {
    }

    public void Update()
    {
    }
}
```


## コールバック - クリックノード

以下のようにOnClickNodeメソッドを定義しておくと、そのアイテムのノードがクリックされた時に呼び出されます。

```
component Test
{
    public void OnClickNode(int NodeIndex)
    {
    }
}
```


## コールバック - AreaCollider

以下のようにOnEnterAreaCollider,OnLeaveAreaColliderメソッドを定義しておくと、"areacollider"タイプのアイテムに侵入・退出したときに呼び出されます。

```
component AreaCollider
{
    Item    m_Item;
    
    public CAreaCollider()
    {
        m_Item = hsItemGet("コンポーネント名");
    }
    
    public void OnEnterAreaCollider()
    {
        hsSystemOutput("OnEnterAreaCollider " + m_Item.GetName() + "\n");
    }
    
    public void OnLeaveAreaCollider()
    {
        hsSystemOutput("OnLeaveAreaCollider " + m_Item.GetName() + "\n");
    }
}
```

## コールバック - カスタムステート/カスタムデータ

ルームの管理者から送信された任意のデータを受信するコールバックメソッドです。

```
component CustumDataReceivere
{
    public void OnReceiveCustomState(string id, string type, string data)
    {
    }

    public void OnReceiveCustomData(string id, string type, string data)
    {
    }
}
```

## コールバック - GUIボタン
 `public void OnClickedButton(string layerName, string buttonName)`

以下のようにOnClickedButton()メソッドを定義しておくと、GUIのボタンがタップされたときに呼び出されます。

```
component ButtonClickable
{
    public void OnClickedButton(string layerName, string buttonname)
    {
        if (layerName == "MenuUI") {}
            hsSystemOutput("Button Clicked! :" + buttonname + "\n");
        }
    }
}
```

## コールバック - 物理衝突判定
 `public void OnPhysicsCollision(int ID0, int ID1)`

物理処理を設定しているオブジェクト同士が衝突したときに呼び出されます。

IDはPhysicsIDと呼ばれるもので、ItemクラスのGetPhysicsIDByNodeNameや、PlayerクラスのGetPhysicsIDから取得できます。

コンストラクタ等で前もってPhysicsIDを取得してメンバ変数に保存しておき、コールバック関数で比較して衝突したかどうかを判定します。

なお、衝突した直後に何度も同じIDの組み合わせでコールバック関数が呼び出される場合があるので、衝突によってパーティクル再生などをおこなう場合は、何度も再生しないように処理する必要があります。

```
component Test {
	Item	m_Field;
	
	int		m_PhysicsIDFloor,
			m_PhysicsIDCube;

	public Test()
	{
		m_Field = new Item();
		m_Field._SetItemFromStructPageNumber(system.GetStructPageNumber());
		
		m_PhysicsIDFloor = m_Field.GetPhysicsIDByNodeName("Floor");
		m_PhysicsIDCube = m_Field.GetPhysicsIDByNodeName("Cube");
	}

	public void OnPhysicsCollision(int ID0, int ID1)
	{
		if ((ID0 == m_PhysicsIDFloor && ID1 == m_PhysicsIDCube) ||
			(ID1 == m_PhysicsIDFloor && ID0 == m_PhysicsIDCube))
		{
			// FloorとCubeが衝突した
		}
	}
}
```

## コールバック - 視野内コライダー判定

```
public void OnEnterViewCollider(string NodeName)
public void OnLeaveViewCollider(string NodeName)
```

HEOColliderで「InView」を指定したコライダーが視野内に入った場合または視野外に出た場合に呼び出されます。

コンポーネントは同一のアイテムに設定する必要があります。

