# コンポーネント / コールバック関数

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

上記の Update() のように、あらかじめ決められた名前と引数を持つメソッドをcomponent内に定義すると、特定のイベントが発生した際に呼び出し(コールバック)が行われます。

## コールバック - ロード完了

Vket Cloudエンジンが起動し、リソースのロードや初期化処理が完了した際に1回だけ OnLoaded() が呼び出されます。

```
public void OnLoaded()
```

## コールバック - タブの表示・非表示

ブラウザのタブがアクティブ・非アクティブ化した際にコールバックを受け取ることができます。

タブがアクティブ化すると IsActivate が true に、非アクティブ化すると IsActivate が false として呼ばれます。

```
public void OnWindowActivate(bool IsActivate)
```

## コールバック - ページのアンロード開始

ブラウザのタブを閉じたり、別のURLへ遷移する際に、現在のページのアンロード開始を通知するコールバック処理です。

このイベントが発生したタイミングでは、ページの内容はまだ保持されています。

```
public void OnBeforeUnload()
```

## コールバック - ページのアンロード

現在のページが完全にアンロードされる直前に通知されるコールバック処理です。

```
public void OnUnload()
```

## コールバック - クリックノード

以下のようにOnClickNodeメソッドを定義しておくと、そのアイテムのノードがクリックされた時に呼び出されます。

```
public bool OnClickNode(int NodeIndex)
```

何らかの処理をおこなった場合はtrueを返すことで、エンジン側のクリック移動などが無効化されます。

互換性のために以下の戻り値の型がvoidのものも定義出来ますが、Sceneファイルのclickablenodesに定義されていない場合はクリック移動などが実行されます。

```
public void OnClickNode(int NodeIndex)
```

## コールバック - 無効空間クリック

以下のようにOnClickEmptyメソッドを定義しておくと、何もない空間をクリックしたときに呼び出されます。

```
public void OnClickEmpty()
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

## コールバック - オブジェクト選択解除

### ノードの選択解除：OnUnselectNode

```
public void OnUnselectNode(int NodeIndex)
```
直前にアイテムのノードをクリックした状態で、その後にアバターをクリックすると、ノードの選択が解除されたと判断されます。

この際に、選択解除されたノードのインデックスを引数として、OnUnselectNode() が呼び出されます。

### アバターの選択解除：OnUnselectAvatar

```
public void OnUnselectAvatar(string Name)
```
直前にアバターをクリックした状態で、その後にアイテムのノードをクリックすると、アバターの選択が解除されたと判断されます。

この際に、選択解除されたアバターの名前を引数として、OnUnselectAvatar() が呼び出されます。

## コールバック - スクリーンサイズ変更

スクリーンサイズが変更された際に OnResize() が呼び出されます。引数 width と height には、変更語のスクリーンの縦横サイズが渡されます。

```
public void OnResize(int width, int height)
```

## コールバック - カスタムステート/カスタムデータ

ルームの管理者から送信された任意のデータを受信するコールバックメソッドです。

```
public void OnReceiveCustomState(string id, string type, string data)
public void OnReceiveCustomData(string id, string type, string data)
```

## コールバック - GUIボタン

 `public void OnClickedButton(string layerName, string buttonName)`

以下のようにOnClickedButton()メソッドを定義しておくと、GUIのボタンがタップされたときに呼び出されます。

```
component ButtonClickable
{
    public void OnClickedButton(string layerName, string buttonname)
    {
        if (layerName == "MenuUI") {
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

[VKC Node Collider](../VKCComponents/VKCNodeCollider.md)で「InView」を指定したコライダーが視野内に入った場合または視野外に出た場合に呼び出されます。

コンポーネントは同一のアイテムに設定する必要があります。

## コールバック - テキストチャット

```
public void OnReceiveTextChat(string ID, string PlayerName, string Text)
```

ユーザーがテキストチャットを送信した場合に呼び出されます。

## コールバック - プレイヤーアバタークリック

```
public void OnClickedAvatar(string PlayerID)
```

他のプレイヤーのアバターがクリックされた時に呼び出されます。

## コールバック - 動画再生

動画の再生開始時に呼び出されます。

```
public void OnPlayVideo()
```

動画の一時停止の際に呼び出されます。

```
public void OnPauseVideo()
```

動画の再生を再開した時に呼び出されます。

```
public void OnResumeVideo()
```

動画の再生を停止した時に呼び出されます。

```
public void OnStopVideo()
```

## コールバック - プロパティ

Itemのプロパティが更新されたときに呼び出されます。同一のValueの場合は呼び出されません。

```
public void OnChangedProperty(string Key, string Value)
```
