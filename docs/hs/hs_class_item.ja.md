# Item クラス

Vket Cloud上でワールドを構成する際、Player以外の各要素はItemとして表現されます。<br>

Itemは、VKC Item Field、VKC Item Objectなど、Vket Cloud SDKによって追加されたコンポーネントを持つゲームオブジェクトを配置・設定することでシーンに出力することが可能です。

Itemクラスは、上記のItemをHeliScriptにて操作するためのものです。

hsItemGet() などの関数を呼び出すことで、Itemクラスのインスタンスを取得できます。

Itemクラスは多くのメソッドを持ち、これらのメソッドを呼び出すことで、様々な操作を行うことが可能です。

## コンポーネントからItemクラスオブジェクトの取得方法

コンポーネント内のメソッドから以下のような呼び出しを行うことで、Itemクラスのインスタンスを取得できます。

```
Item instance = hsItemGet("アイテム名");
```

hsItemGetSelf() を利用することで、コンポーネントが所属しているアイテムのインスタンスを取得できます。
```
Item myitem = hsItemGetSelf();
```

***

## Itemのユーティリティー関数

### hsItemGet

`Item hsItemGet(string itemName)`

グローバル関数。指定した名前でItemを取得する。

### hsItemGetSelf

`Item hsItemGetSelf()`

グローバル関数。コンポーネントのコンストラクタや、Update(), OnClickNode() 等のメソッド内から呼び出すことで、コンポーネント自身が所属しているItemインスタンスを取得します。

### hsItemCreateClone

`Item hsItemCreateClone(Item Origin, string Name = "")`

グローバル関数。指定したアイテムのクローンを同じ場所に作成します。クローン可能なアイテムタイプは`object`です。  
Originにはオリジナルのアイテムオブジェクトを渡します。  
Nameにはクローンアイテムに設定したいアイテム名を任意で渡します。指定が無い場合は自動的に名前が付けられます。

### hsItemDestroyClone

`void hsItemDestroyClone(Item item)`

グローバル関数。指定したクローンアイテムを削除します。クローン以外のアイテムを削除することはできません。

***

## メソッド

### Equals

`public bool Equals(Item obj)`

引数 obj と自身の同一性を判定する。

hsItemGet() などで Item を取得する場合、同一の Item であっても別のインスタンスが返る場合があるため、同一性の確認には "===" 演算子ではなく Equals() を利用してください。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetName

`public string GetName()`

Item の名前を取得する。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetParentItem

`public Item GetParentItem()`

Item 自身から見て、親に相当する Item を取得する。

アクティビティはItem内にItemを持つ構造であるため、アクティビティ内Itemから GetParentItem() を呼び出すと、親のItemを取得できる。

親Itemが存在しない場合、nullを返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetPos

`public void SetPos(Vector3 pos)`

Item を指定した座標に移動させる。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetPos

`public Vector3 GetPos()`

Item の座標を取得する。

このItemがActivityの中にある場合、取得できる値はActivityからの相対座標になります。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetWorldPos

`public Vector3 GetWorldPos()`

Item のワールド座標を取得する。

このItemがどこにあるのか(Activityの外か中か)に関わらず、常にワールド空間における座標を返します。

???+ warning "使用上の注意"
    Activityの場合でワールド座標を取得したいときはこちらを使用してください。
    
    Activityではない場合は通常はGetPosを使用してください。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetQuaternion

`public bool SetQuaternion(Quaternion Rotate)`

Itemの回転を設定します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetQuaternion

`public Quaternion GetQuaternion()`

Itemの回転をQuaternionとして取得します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetWorldQuaternion

`public Quaternion GetWorldQuaternion()`

Itemのワールド回転をQuaternionとして取得します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetWorldRotate

`public Vector3 GetWorldRotate()`

Itemのワールド回転をVector3（オイラー角）として取得します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetScale

`public Vector3 GetScale()`

ItemのスケールをVector3として取得します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetScale

`public void SetScale(Vector3 Scale)`

ItemのスケールをVector3で設定します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### MovePos

`public void MovePos(Vector3 pos, float time, bool CollisionDetection = false)`

posで指定した座標に、time秒かけて Item を移動させる。

CollisionDetectionがtrueの場合は、プレイヤーアバターと同等の衝突判定がおこなわれます。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsMoving

`public bool IsMoving()`

Item が移動中の場合はtrueを返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### Play

`public bool Play()`

サウンドやパーティクルの再生を開始する。再生処理の開始に成功すると true を返す。失敗した場合は false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)

### Stop

`public void Stop()`

サウンドやパーティクルの再生を停止する。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)

### IsPlay

`public bool IsPlay()`

オブジェクトのモーションやサウンドやパーティクルが再生中の場合は true を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    ??? caution "返り値について"
        - [VKC Item Audio](../VKCComponents/VKCItemAudio.md): オーディオクリップで設定したサウンドが再生中の場合はtrueを返す
        - [VKC Item Object](../VKCComponents/VKCItemObject.md): オブジェクトモードがMotionの際に、Motionリストに設定したhemが再生中の場合はtrueを返す
        - [VKC Item Particle](../VKCComponents/VKCItemParticle.md): .hepで設定したパーティクルが再生中の場合はtrueを返す

### Pause

`public bool Pause()`

オブジェクトのモーション再生を一時停止します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### Restart

`public bool Restart()`

オブジェクトの一時停止したモーション再生を再開します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetPlayTime

`public bool SetPlayTime(float PlayTimeMS)`

オブジェクトのモーション再生時間の位置を変更します。<br>
単位はミリセカンドです。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetPlayTime

`public float GetPlayTime()`

オブジェクトのモーション再生時間の位置を取得します。<br>
単位はミリセカンドです。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetShow

`public void SetShow(bool flag)`

true で Item を表示する。false で Item を非表示にする。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsShow

`public bool IsShow()`

Item が表示状態の場合は true を、そうでない場合は false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### ChangeMotion

`public bool ChangeMotion(string MotionName, float BlendTimeMS = 0.0f)`

MotionName で指定したモーションに動作を切り替えます。<br>
BlendTimeMSはブレンディングする時間をミリセカンド単位で指定します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### LoadMotion

`public bool LoadMotion(string MotionName, string FileName, bool Loop)`

モーションをロードします。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### FacialEmoteFixed

`public bool FacialEmoteFixed(int FacialEmoteType)`

表情を切り替えます。切り替えは即時おこなわれ、プレイヤーアバターのように一定時間で戻ることはありません。

指定出来るタイプは以下になります。

- FACIALEMOTETYPE_NEUTRAL
- FACIALEMOTETYPE_JOY
- FACIALEMOTETYPE_ANGRY
- FACIALEMOTETYPE_SORROW
- FACIALEMOTETYPE_FUN

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### Load

`public bool Load()`

Item のロードを開始する。ロード処理の開始に失敗した場合は false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### Unload

`public bool Unload()`

Item をアンロードする。アンロード処理に失敗した場合は false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsLoading

`public bool IsLoading()`

Item がロード中の場合は true を、そうでない場合は false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsLoaded

`public bool IsLoaded()`

Item のロードが完了していた場合は true を、そうでない場合は false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetNodeIndexByName

`public int GetNodeIndexByName(string nodeName)`

名前でノードを検索し、該当するノードを識別するインデックスを返す。
見つからない場合は、-1 を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetNodeNameByIndex

`public string GetNodeNameByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの名前を返す。
見つからない場合は、空文字列を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetNodePosByIndex

`public Vector3 GetNodePosByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの座標を返す。
見つからない場合は、Vector3.zeroを返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetShowNode

`public bool SetShowNode(string nodeName, bool flag)`

名前でノードを指定し、そのノードを true で表示、false で非表示にする。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### IsShowNode

`public bool IsShowNode(string nodeName)`

名前でノードを指定し、そのノードが表示されている場合は true を、非表示の場合は false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetRotateNode

`public bool SetRotateNode(string nodeName, Vector3 rotate)`

名前でノードを指定し、そのノードを回転させる。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetEnableCollider

`public bool SetEnableCollider(string nodeName, bool flag)`

名前でコライダーを指定し、そのコライダーを true で有効、false で無効にする。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### IsEnableCollider

`public bool IsEnableCollider(string nodeName)`

名前でコライダーを指定し、そのコライダーが有効なら true を、無効なら false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetClickableNode

`public bool SetClickableNode(string nodeName, bool flag)`

名前でクリック可能なノードを指定し、true でクリックを有効に、false でクリックを無効にする。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### IsClickableNode

`public bool IsClickableNode(string nodeName)`

名前でノードを指定し、そのノードをクリック可能なら true を、そうでないなら false を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetUVScale

`public bool SetUVScale(string materialName, float u, float v)`

名前でマテリアルを指定し、uvスケールを変更する。変更に失敗すると false を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### SetUVOffset

`public bool SetUVOffset(string materialName, float u, float v)`

名前でマテリアルを指定し、**原点を左上として**uv座標を変更する。変更に失敗すると false を返す。

!!! warning "UV座標原点について"
    通常のUnityプロジェクトではUVの原点(0,0)はUVの左下にありますが、HeliScriptでは**左上**を原点としていることにご注意ください。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### SetMaterialColor

`public bool SetMaterialColor(string materialName, float R, float G, float B, float A)`

指定したマテリアルの色を変更します。

オブジェクトがロードされていない場合や、未対応のオブジェクトタイプの場合はfalseが返ります。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetAlpha

`public bool SetAlpha(float Alpha)`

アルファブレンディングをおこなうα値を設定します。値の範囲は0.0f～1.0fです。

オブジェクトがロードされていない場合や、未対応のオブジェクトタイプの場合はfalseが返ります。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### PlayVideo

`public void PlayVideo(string materialName, string url, bool loop)`

再生するマテリアルを指定し、ビデオ再生を開始する。loop に true を指定するとループ再生を行う。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### StopVideo

`public void StopVideo()`

再生中のビデオを停止する。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### IsPlayVideo

`public bool IsPlayVideo()`

ビデオが再生中であれば true を返す。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)

### ClearTextPlane

`public void ClearTextPlane()`

テキストを消去する。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### WriteTextPlane

`public void WriteTextPlane(string text)`

テキストを設定する。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetCamera

`public bool SetCamera()`

カメラタイプのアイテムをカメラとして設定する。<br>
使い方については[VKC Item Camera](../VKCComponents/VKCItemCamera.md)を参照してください。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)

### ResetCamera

`public void ResetCamera()`

SetCameraで設定したものを解除する。<br>
使い方については[VKC Item Camera](../VKCComponents/VKCItemCamera.md)を参照してください。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)

### ReplaceItem

`public bool ReplaceItem(string URL)`

指定したモデルデータでItemの内容を置き換えます。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### ReplaceTexture

`public bool ReplaceTexture(string MaterialName, string URL)`

MaterialNameで指定したマテリアルのテクスチャを、URLの内容で置き換えます。

関連ページ: [ReplaceTextureでテクスチャの差し替えが正常に出来ない](https://vrhikky.github.io/VketCloudSDK_Documents/latest/WorldMakingGuide/ReplaceTexture.html)

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### ReplaceBackupTexture

`public bool ReplaceBackupTexture(string MaterialName)`

ReplaceTexture() で変更したマテリアルのテクスチャを、直前の内容に戻します。

変更に成功するとtrueを返します。マテリアルが見つからないなどの理由で、変更に失敗するとfalseを返します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetPhysicsEnable

`public bool SetPhysicsEnable(string NodeName, bool Flag)`

NodeName で指定したノードに対し、trueで物理演算を有効化、falseで無効化します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### IsPhysicsFixed

`public bool IsPhysicsFixed(string NodeName)`

物理演算において、このItemが固定されている場合は true を返します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### GetPhysicsIDByNodeName

`public int GetPhysicsIDByNodeName(string NodeName)`

ノード名を指定して、ItemのPhysicsIDを取得します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)

### SetProperty

`public bool SetProperty(string Key, string Value)`

プロパティを設定します。同じKeyが存在すれば上書きされ、なければ追加されます。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetProperty

`public string GetProperty(string Key)`

プロパティを取得します。Keyが存在しない場合は空文字列が返ります。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### CallComponentMethod

`public void CallComponentMethod(string ComponentName, string MethodName, string Params)`

Item に設定されているコンポーネントのメソッドを呼び出します。<br>
ComponentNameでコンポーネント名を、MethodNameでメソッド名を指定し、メソッドを呼び出します。その際、Paramsで指定した文字列が引数として渡されます。

呼び出せるメソッドには、以下の制限があります。

- 引数として string を 1つだけ持つこと。
- 戻り値がvoidであること。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetOverridesProperty

`public bool SetOverridesProperty(string Key, string Value, string ItemName)`

overridesを設定します。同じKeyが存在すれば上書きされ、なければ追加されます。"itemname"を使用していない場合はItemNameには空文字列を指定します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetOverridesProperty

`public bool GetOverridesProperty(string Key, ref string Value, ref string ItemName)`

overrides設定を取得します。

???+ note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetNumofPolygon

`public int GetNumofPolygon()`

ポリゴン数を取得します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SendMessage

`public bool SendMessage(HSMessage message)`

このItemにメッセージを送信します。送信したメッセージは、Itemに設定されているコンポーネントの OnReceiveMessage() メソッドに通知されます。

メッセージの送信は同期的であり、つまり同一フレーム中で送信と受信までが行われます。メッセージを受信した側が送信元にメッセージを送り返し、それを受けた側が再度メッセージを送信し…と処理が続く場合でも、全て同一フレーム内で処理されます。

送信したメッセージは対象Itemが持つすべてのコンポーネントに通知されますが、そのうち1つでも送信に成功した場合、つまりメッセージが1つでも OnReceiveMessage() コールバックメソッドに到達した場合、SendMessage() は戻り値として ture を返します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetVolume

`public void SetVolume(float Volume)`

音量を設定します

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)

### GetVolume

`public float GetVolume()`

SetVolume()で設定した音量を取得します
初期値は0.2です

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)

### IsCollisionDetection

`public bool IsCollisionDetection()`

アイテム単位で衝突判定が有効かどうかを取得します。  
trueの場合、レイとItemの当たり判定を行う関数 hsItemRaycast() の対象になります。
