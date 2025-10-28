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

## コールバック - 遅延レイヤーのロード完了

UI等のレイヤーは遅延ローディングしています。すべての遅延ロードレイヤーのロードが完了したときに一回だけOnDelayLayersLoaded()が呼び出されます。

```
public void OnDelayLayersLoaded()
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
または
```
public bool OnClickNode(string NodeName)
```

何らかの処理をおこなった場合はtrueを返すことで、エンジン側のクリック移動などが無効化されます。
int版ではノードのインデックス、string版ではノード名が引数に渡されます。

互換性のために以下の戻り値の型がvoidのものも定義できますが、Sceneファイルのclickablenodesに定義されていない場合はクリック移動などが実行されます。

```
public void OnClickNode(int NodeIndex)
```

## コールバック - 無効空間クリック

以下のようにOnClickEmptyメソッドを定義しておくと、何もない空間をクリックしたときに呼び出されます。

```
public void OnClickEmpty()
```

## コールバック - 無効空間長押し

以下のようにOnLongPressedEmptyメソッドを定義しておくと、何もない空間を長押ししたときに呼び出されます。

```
public void OnLongPressedEmpty()
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

## コールバック - ItemCollider

以下のようにOnItemEnterCollider, OnItemLeaveColliderメソッドを定義しておくと、このコンポーネントを持つItemが別のItem内ノードのコライダーに侵入・退出した時に呼び出されます。  
現在対応している衝突形状はボックスコライダーのみです。  

```
component CollisionTest
{
    public void OnItemEnterCollider(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);
        hsSystemOutput("[OnItemEnterCollider] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }
    public void OnItemLeaveCollider(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);
        hsSystemOutput("[OnItemLeaveCollider] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }
}
```

## コールバック - コライダー侵入

以下のようにOnItemTriggerEnter, OnItemTriggerLeaveメソッドを定義しておくと、このコンポーネントを持つItemが別のItem内ノードのコライダーに侵入・退出した時に
コールバックが呼び出されます。

また、衝突するアイテム・衝突されるアイテムが以下の要件で実装されている必要があります

* 衝突するアイテム
    * アイテムタイプがObject
* 衝突されるアイテム
    * コライダー形状がボックス
    * コライダータイプがColliderもしくはArea

衝突する側にコライダーを持たせるかは任意ですが、現時点の仕様ではOnItemTriggerEnter, OnItemTriggerLeaveを呼び出す衝突判定には使われません。

```
component CollisionTest
{
    public void OnItemTriggerEnter(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);

        hsSystemOutput("[OnItemTriggerEnter] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }

    public void OnItemTriggerLeave(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);

        hsSystemOutput("[OnItemTriggerLeave] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }
}
```

## コールバック - コライダー衝突

以下のようにOnItemCollisionEnter, OnItemCollisionLeaveメソッドを定義しておくと、このコンポーネントを持つItemがItem.MovePosで移動中に別のItem内ノードのコライダーに衝突・退出した時に
コールバックが呼び出されます。

また、衝突するアイテム・衝突されるアイテムが以下の要件で実装されている必要があります

* 衝突するアイテム
    * アイテムタイプがObject
* 衝突されるアイテム
    * コライダー形状がボックス
    * コライダータイプがColliderもしくはArea

衝突する側にコライダーを持たせるかは任意ですが、現時点の仕様ではOnItemCollisionEnter, OnItemCollisionLeaveを呼び出す衝突判定には使われません。

```
component CollisionTest
{
    public void OnItemCollisionEnter(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);

        hsSystemOutput("[OnItemCollisionEnter] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }

    public void OnItemCollisionLeave(int ItemInstanceID, int NodeIndex)
    {
        Item CollidedItem = hsItemGetByInstanceID(ItemInstanceID);
        string NodeName = CollidedItem.GetNodeNameByIndex(NodeIndex);

        hsSystemOutput("[OnItemCollisionLeave] ItemName: %s, NodeName: %s\n" % CollidedItem.GetName() % NodeName);
    }
}
```

## コールバック - アイテムクローン生成

アイテムクローンが生成されたときに呼び出されます。

```
public void OnItemCreatedClone()
{
}
```

## コールバック - アイテムクローン破棄

アイテムクローンが破棄されたときに呼び出されます。

```
public void OnItemDestroyedClone()
{
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

ルーム内の任意のプレイヤーから送信された任意のデータを受信するコールバックメソッドです。

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

## コールバック - GUIスライダー
 `public void OnSliderRateChanged(string GUIName, float Rate)`

GUI要素のスライダーの値を変更した際に呼び出されるコールバックメソッドです。

引数 GUIName には操作が行われたスライダーの名前、引数 Rate には変更されたスライダーの値が 0 から 1 までの数値として渡されます。

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

[VKC Node Collider](../VKCComponents/VKCNodeCollider.md)で「In View」を指定したコライダーが視野内に入った場合または視野外に出た場合に呼び出されます。

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

Itemのプロパティが削除されたときに呼び出されます。

```
public void OnRemovedProperty(string Key)
```

## コールバック - メッセージ

```
public void OnReceiveMessage(HSMessage message)
```

Itemがメッセージを受信した際に呼ばれます。引数 message に、受信したデータや送信者の情報が含まれています。

## コールバック - エモートチェンジ

```
public void OnEmoteChanged(int EmoteIndex)
```

Playerのエモートが変更（再生）された際に呼ばれます。  
EmoteIndex に、変更（再生）されたエモートのインデックス値が入ります。

## コールバック - モーションチェンジ

```
public void OnMotionChanged(string MotionName)
```

Playerのモーションが変更（再生）された際に呼ばれます。MotionName に、変更（再生）されたモーション名が入ります。