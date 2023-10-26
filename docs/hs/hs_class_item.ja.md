
# Item クラス

Itemクラスは、Sceneファイルの"items"で定義された個々のアイテムを操作するためのものです。

hsItemGet() でアイテム名を指定して、Itemクラスオブジェクトを取得することが出来ます。


## クラス定義

```
class Item {
}
```


## コンポーネントからItemクラスオブジェクトの取得方法

コンポーネント内のメソッドから以下のような呼び出しをおこなうことで、コンポーネントが持つItemクラスオブジェクトを取得できます。

```
Item myItem = hsItemGet("アイテム名");
```


***


## Itemのユーティリティー関数

### hsItemGet
`Item hsItemGet(string itemName)`

グローバル関数。指定した名前でコンポーネントの "items" を取得し、Itemクラスのインスタンスとして返す。

***


## メソッド

### Equals
`public bool Equals(Item obj)`

引数 obj と自身の同一性を判定する。

hsItemGet() などで Item を取得する場合、同一の Item であっても別のインスタンスが返る場合があるため、同一性の確認には "===" 演算子ではなく Equals() を利用してください。

### GetName
`public string GetName()`

Item の名前を取得する。

### SetPos
`public void SetPos(Vector3 pos)`

Item を指定した座標に移動させる。

### GetPos
`public Vector3 GetPos()`

Item の座標を取得する。

### GetWorldPos
`public Vector3 GetWorldPos()`

Item のワールド座標を取得する。

### SetQuaternion
`public bool SetQuaternion(Quaternion Rotate)`

Itemの回転を設定します。

### GetQuaternion
`public Quaternion GetQuaternion()`

Itemの回転をQuaternionとして取得します。

### GetWorldQuaternion
`public Quaternion GetWorldQuaternion()`

Itemのワールド回転をQuaternionとして取得します。

### GetWorldRotate
`public Vector3 GetWorldRotate()`

Itemのワールド回転をVector3として取得します。

### GetScale
`public Vector3 GetScale()`

ItemのスケールをVector3として取得します。

### SetScale
`public void SetScale(Vector3 Scale)`

ItemのスケールをVector3で設定します。

### MovePos
`public void MovePos(Vector3 pos, float time, bool CollisionDetection = false)`

posで指定した座標に、time秒かけて Item を移動させる。

CollisionDetectionがtrueの場合は、プレイヤーアバターと同等の衝突判定がおこなわれます。

### IsMoving
`public bool IsMoving()`

Item が移動中の場合はtrueを返す。

### Play
`public bool Play()`

サウンドやパーティクルの再生を開始する。再生処理の開始に成功すると true を返す。失敗した場合は false を返す。

### Stop
`public void Stop()`

サウンドやパーティクルの再生を停止する。

### IsPlay
`public bool IsPlay()`

サウンドやパーティクルが再生中の場合は true を返す。

### SetShow
`public void SetShow(bool flag)`

true で Item を表示する。false で Item を非表示にする。

### IsShow
`public bool IsShow()`

Item が表示状態の場合は true を、そうでない場合は false を返す。

### ChangeMotion
`public bool ChangeMotion(string MotionName)`

MotionName で指定したモーションに動作を切り替えます。

### Load
`public bool Load()`

Item のロードを開始する。ロード処理の開始に失敗した場合は false を返す。

### Unload
`public bool Unload()`

Item をアンロードする。アンロード処理に失敗した場合は false を返す。

### IsLoading
`public bool IsLoading()`

Item がロード中の場合は true を、そうでない場合は false を返す。

### IsLoaded
`public bool IsLoaded()`

Item のロードが完了していた場合は true を、そうでない場合は false を返す。

### GetNodeIndexByName
`public int GetNodeIndexByName(string nodeName)`

名前でノードを検索し、該当するノードを識別するインデックスを返す。

### GetNodeNameByIndex
`public string GetNodeNameByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの名前を返す。

### GetNodePosByIndex
`public Vector3 GetNodePosByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの座標を返す。

### SetShowNode
`public bool SetShowNode(string nodeName, bool flag)`

名前でノードを指定し、そのノードを true で表示、false で非表示にする。

### IsShowNode
`public bool IsShowNode(string nodeName)`

名前でノードを指定し、そのノードが表示されている場合は true を、非表示の場合は false を返す。

### SetRotateNode
`public bool SetRotateNode(string nodeName, Vector3 rotate)`

名前でノードを指定し、そのノードを回転させる。

### SetEnableCollider
`public bool SetEnableCollider(string nodeName, bool flag)`

名前でコライダーを指定し、そのコライダーを true で有効、false で無効にする。

### IsEnableCollider
`public bool IsEnableCollider(string nodeName)`

名前でコライダーを指定し、そのコライダーが有効なら true を、無効なら false を返す。

### SetClickableNode
`public bool SetClickableNode(string nodeName, bool flag)`

名前でクリック可能なノードを指定し、true でクリックを有効に、false でクリックを無効にする。

### IsClickableNode
`public bool IsClickableNode(string nodeName)`

名前でノードを指定し、そのノードをクリック可能なら true を、そうでないなら false を返す。

### SetUVOffset
`public bool SetUVOffset(string naterialName, float u, float v)`

名前でマテリアルを指定し、そのマテリアルの uv座標を変更する。変更に失敗すると false を返す。

### PlayVideo
`public void PlayVideo(string materialName, string url, bool loop)`

再生するマテリアルを指定し、ビデオ再生を開始する。loop に true を指定するとループ再生を行う。

### StopVideo
`public void StopVideo()`

再生中のビデオを停止する。

### IsPlayVideo
`public bool IsPlayVideo()`

ビデオが再生中であれば true を返す。

### ClearTextPlane
`public void ClearTextPlane()`

テキストを消去する。

### WriteTextPlane
`public void WriteTextPlane(string text)`

テキストを設定する。

### SetCamera
`public bool SetCamera()`

カメラタイプのアイテムをカメラとして設定する。

### ResetCamera
`public void ResetCamera()`

SetCameraで設定したものを解除する。

### ReplaceItem
`public bool ReplaceItem(string URL)`

指定したモデルデータでItemの内容を置き換えます。

### ReplaceTexture
`public bool ReplaceTexture(string MaterialName, string URL)`

MaterialNameで指定したマテリアルのテクスチャを、URLの内容で置き換えます。

### SetPhysicsEnable
`public bool SetPhysicsEnable(string NodeName, bool Flag)`

NodeName で指定したノードに対し、trueで物理演算を有効化、falseで無効化します。

### IsPhysicsFixed
`public bool IsPhysicsFixed(string NodeName)`

物理演算において、このItemが固定されている場合は true を返します。

### SetProperty
`public bool SetProperty(string Key, string Value)`

プロパティを設定します。

### GetProperty
`public string GetProperty(string Key)`

プロパティを取得します。Keyが存在しない場合は空文字列が返ります。

### CallComponentMethod
`public void CallComponentMethod(string ComponentName, string MethodName, string Params)`

Item に設定されているコンポーネントのメソッドを呼び出します。
ComponentNameでコンポーネント名を、MethodNameでメソッド名を指定し、メソッドを呼び出します。その際、Paramsで指定した文字列が引数として渡されます。

呼び出せるメソッドには、以下の制限があります。

* 引数として string を 1つだけ持つこと。
* 戻り値がvoidであること。

!!! note caution
    Overrides関連の関数は現在実装中の機能です。<br>
    本機能については今後のアップデートで使い方が更新される予定です。

### SetOverridesProperty
`public bool SetOverridesProperty(string Key, string Value, string ItemName)`

overridesを設定します。同じKeyが存在すれば上書きされ、なければ追加されます。"itemname"を使用していない場合はItemNameには空文字列を指定します。

### GetOverridesProperty
`public bool GetOverridesProperty(string Key, ref string Value, ref string ItemName)`

overrides設定を取得します。