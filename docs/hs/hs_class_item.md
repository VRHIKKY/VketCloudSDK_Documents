
# Item クラス

Itemクラスは、Sceneファイルの"items"で定義された個々のアイテムを操作するためのものです。

hsItemGet() でアイテム名を指定して、Itemクラスオブジェクトを取得することが出来ます。


## クラス定義

```
class Item {
    public string   GetName()

    public void     SetPos(Vector3 Pos)
    public Vector3  GetPos()

    public void     MovePos(Vector3 pos, float time)
    public bool     IsMoving()

    public bool     Play()
    public void     Stop()
    public bool     IsPlay()
    
    public void     SetShow(bool Flag)
    public bool     IsShow()
    
    // ローディング
    public bool     Load()
    public bool     Unload()
    public bool     IsLoading()
    public bool     IsLoaded()

    // ノード
    public int      GetNodeIndexByName(string nodeName)
    public string   GetNodeNameByIndex(int nodeIndex)
    public Vector3  GetNodePosByIndex(int nodeIndex)
    
    // ノード・表示
    public bool     SetShowNode(string nodeName, bool flag)
    public bool     IsShowNode(string nodeName)
    
    // ノード・姿勢
    public bool     SetRotateNode(string nodeName, Vector3 rotate)
    
    // ノード・コライダー
    public bool     SetEnableCollider(string nodeName, bool flag)
    public bool     IsEnableCollider(string nodeName)

    // ノード・クリッカブル
    public bool     SetClickableNode(string nodeName, bool flag)
    public bool     IsClickableNode(string nodeName)

	// ノード・物理
	public int		GetPhysicsIDByNodeName(string NodeName)

    // マテリアル
    public bool     SetUVOffset(string materialName, float u, float v)
    
    // Video
    public void     PlayVideo(string materialName, string url, bool loop)
    public void     StopVideo()

    // テキスト
    public void     ClearTextPlane()
    public void     WriteTextPlane(string text)
    
}
```


## コンポーネントからItemクラスオブジェクトの取得方法

コンポーネント内のメソッドから以下のような呼び出しをおこなうことで、コンポーネントが持つItemクラスオブジェクトを取得できます。

```
Item myItem = hsItemGet("アイテム名");
```


***


## Itemのユーティリティー関数
### hsItemGet(string itemName)
`Item hsItemGet(string itemName)`

グローバル関数。指定した名前でコンポーネントの "items" を取得し、Itemクラスのインスタンスとして返す。


***


## メソッド

### GetName()
`public string GetName()`

Item の名前を取得する。

### SetPos(Vector3)
`public void SetPos(Vector3 pos)`

Item を指定した座標に移動させる。

### GetPos()
`public Vector3 GetPos()`

Item の座標を取得する。

### MovePos(Vector3, float)
`public void MovePos(Vector3 pos, float time)`

posで指定した座標に、time秒かけて Item を移動させる。

### IsMoving()
`public bool IsMoving()`

Item が移動中の場合はtrueを返す。

### Play()
`public bool Play()`

サウンドやパーティクルの再生を開始する。再生処理の開始に成功すると true を返す。失敗した場合は false を返す。

### Stop()
`public void Stop()`

再生中のビデオを停止する。

### IsPlay()
`public bool IsPlay()`

ビデオが再生中の場合は true を返す。

### SetShow(bool)
`public void SetShow(bool flag)`

true で Item を表示する。false で Item を非表示にする。

### IsShow()
`public bool IsShow()`

Item が表示状態の場合は true を、そうでない場合は false を返す。

### Load()
`public bool Load()`

Item のロードを開始する。ロード処理の開始に失敗した場合は false を返す。

### Unload()
`public bool Unload()`

Item をアンロードする。アンロード処理に失敗した場合は false を返す。

### IsLoading()
`public bool IsLoading()`

Item がロード中の場合は true を、そうでない場合は false を返す。

### IsLoaded()
`public bool IsLoaded()`

Item のロードが完了していた場合は true を、そうでない場合は false を返す。

### GetNodeIndexByName(string)
`public int GetNodeIndexByName(string nodeName)`

名前でノードを検索し、該当するノードを識別するインデックスを返す。

### GetNodeNameByIndex(int)
`public string GetNodeNameByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの名前を返す。

### GetNodePosByIndex(int)
`public Vector3 GetNodePosByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの座標を返す。

### SetShowNode(string, bool)
`public bool SetShowNode(string nodeName, bool flag)`

名前でノードを指定し、そのノードを true で表示、false で非表示にする。

### IsShowNode(string)
`public bool IsShowNode(string nodeName)`

名前でノードを指定し、そのノードが表示されている場合は true を、非表示の場合は false を返す。

### SetRotateNode(string, Vector3)
`public bool SetRotateNode(string nodeName, Vector3 rotate)`

名前でノードを指定し、そのノードを回転させる。

### SetEnableCollider(string, bool)
`public bool SetEnableCollider(string nodeName, bool flag)`

名前でコライダーを指定し、そのコライダーを true で有効、false で無効にする。

### IsEnableCollider(string)
`public bool IsEnableCollider(string nodeName)`

名前でコライダーを指定し、そのコライダーが有効なら true を、無効なら false を返す。

### SetClickableNode(string, bool)
`public bool SetClickableNode(string nodeName, bool flag)`

名前でクリック可能なノードを指定し、true でクリックを有効に、false でクリックを無効にする。

### IsClickableNode(string)
`public bool IsClickableNode(string nodeName)`

名前でノードを指定し、そのノードをクリック可能なら true を、そうでないなら false を返す。

### SetUVOffset(string, float, float)
`public bool SetUVOffset(string naterialName, float u, float v)`

名前でマテリアルを指定し、そのマテリアルの uv座標を変更する。変更に失敗すると false を返す。

### PlayVideo(string, string, bool)
`public void PlayVideo(string materialName, string url, bool loop)`

再生するマテリアルを指定し、ビデオ再生を開始する。loop に true を指定するとループ再生を行う。

### StopVideo()
`public void StopVideo()`

再生中のビデオを停止する。

### ClearTextPlane()
`public void ClearTextPlane()`

テキストを消去する。

### WriteTextPlane(string)
`public void WriteTextPlane(string text)`

テキストを設定する。

