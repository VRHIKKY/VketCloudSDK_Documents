
# Item クラス

Vket Cloud上でワールドを構成する際、Player以外の各要素はItemとして表現されます。<br>
[VKC Item Field](../VKCComponents/VKCItemField.md), [VKC Item Object](../VKCComponents/VKCItemObject.md), [VKC Item Plane](../VKCComponents/VKCItemPlane.md), [VKC Item Activity](../VKCComponents/VKCItemActivity.md)などがこれにあたります。

Itemクラスは、ワールド内に配置された[VKC Item Field](../VKCComponents/VKCItemField.md)及びその子オブジェクトであるNodeなど、個々のアイテムをHeliScriptにて操作するためのものです。

hsItemGet() などの関数を呼び出すことで、特定のアイテムを表すItemクラスのインスタンスを取得できます。

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

グローバル関数。指定した名前で VKC Item Field 以下のアイテムを取得し、Itemクラスのインスタンスとして返す。

### hsItemGetSelf

`Item hsItemGetSelf()`

グローバル関数。コンポーネントのコンストラクタや、Update(), OnClickNode() 等のメソッド内から呼び出すことで、コンポーネント自身が所属しているItemインスタンスを取得します。

***

## メソッド

### Equals

`public bool Equals(Item obj)`

引数 obj と自身の同一性を判定する。

hsItemGet() などで Item を取得する場合、同一の Item であっても別のインスタンスが返る場合があるため、同一性の確認には "===" 演算子ではなく Equals() を利用してください。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item BackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetName

`public string GetName()`

Item の名前を取得する。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item BackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetPos

`public void SetPos(Vector3 pos)`

Item を指定した座標に移動させる。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetPos

`public Vector3 GetPos()`

Item の座標を取得する。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item BackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### GetWorldPos

`public Vector3 GetWorldPos()`

Item のワールド座標を取得する。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### SetQuaternion

`public bool SetQuaternion(Quaternion Rotate)`

Itemの回転を設定します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
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

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
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

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetWorldRotate

`public Vector3 GetWorldRotate()`

Itemのワールド回転をVector3として取得します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### GetScale

`public Vector3 GetScale()`

ItemのスケールをVector3として取得します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### SetScale

`public void SetScale(Vector3 Scale)`

ItemのスケールをVector3で設定します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### MovePos

`public void MovePos(Vector3 pos, float time, bool CollisionDetection = false)`

posで指定した座標に、time秒かけて Item を移動させる。

CollisionDetectionがtrueの場合は、プレイヤーアバターと同等の衝突判定がおこなわれます。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item TextPlane](../VKCComponents/VKCItemTextPlane.md)

### IsMoving

`public bool IsMoving()`

Item が移動中の場合はtrueを返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### Play

`public bool Play()`

サウンドやパーティクルの再生を開始する。再生処理の開始に成功すると true を返す。失敗した場合は false を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)

### Stop

`public void Stop()`

サウンドやパーティクルの再生を停止する。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)

### IsPlay

`public bool IsPlay()`

オブジェクトのモーションやサウンドやパーティクルが再生中の場合は true を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    ??? caution "返り値について"
        - [VKC Item Audio](../VKCComponents/VKCItemAudio.md): オーディオクリップで設定したサウンドが再生中の場合はtrueを返す
        - [VKC Item Object](../VKCComponents/VKCItemObject.md): オブジェクトモードがMotionの際に、Motionリストに設定したhemが再生中の場合はtrueを返す
        - [VKC Item Particle](../VKCComponents/VKCItemParticle.md): .hepで設定したパーティクルが再生中の場合はtrueを返す

### SetShow

`public void SetShow(bool flag)`

true で Item を表示する。false で Item を非表示にする。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsShow

`public bool IsShow()`

Item が表示状態の場合は true を、そうでない場合は false を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### ChangeMotion

`public bool ChangeMotion(string MotionName)`

MotionName で指定したモーションに動作を切り替えます。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)

### Load

`public bool Load()`

Item のロードを開始する。ロード処理の開始に失敗した場合は false を返す。

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

### Unload

`public bool Unload()`

Item をアンロードする。アンロード処理に失敗した場合は false を返す。

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

### IsLoading

`public bool IsLoading()`

Item がロード中の場合は true を、そうでない場合は false を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKC Item Activity](../VKCComponents/VKCItemActivity.md)
    - [VKC Item AreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKC Item Audio](../VKCComponents/VKCItemAudio.md)
    - [VKC Item BackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKC Item Camera](../VKCComponents/VKCItemCamera.md)
    - [VKC Item Field](../VKCComponents/VKCItemField.md)
    - [VKC Item Object](../VKCComponents/VKCItemObject.md)
    - [VKC Item Particle](../VKCComponents/VKCItemParticle.md)
    - [VKC Item Plane](../VKCComponents/VKCItemPlane.md)
    - [VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md)

### IsLoaded

`public bool IsLoaded()`

Item のロードが完了していた場合は true を、そうでない場合は false を返す。

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

### GetNodeIndexByName

`public int GetNodeIndexByName(string nodeName)`

名前でノードを検索し、該当するノードを識別するインデックスを返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### GetNodeNameByIndex

`public string GetNodeNameByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの名前を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### GetNodePosByIndex

`public Vector3 GetNodePosByIndex(int nodeIndex)`

インデックスでノードを指定し、そのノードの座標を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetShowNode

`public bool SetShowNode(string nodeName, bool flag)`

名前でノードを指定し、そのノードを true で表示、false で非表示にする。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### IsShowNode

`public bool IsShowNode(string nodeName)`

名前でノードを指定し、そのノードが表示されている場合は true を、非表示の場合は false を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### SetRotateNode

`public bool SetRotateNode(string nodeName, Vector3 rotate)`

名前でノードを指定し、そのノードを回転させる。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetEnableCollider

`public bool SetEnableCollider(string nodeName, bool flag)`

名前でコライダーを指定し、そのコライダーを true で有効、false で無効にする。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### IsEnableCollider

`public bool IsEnableCollider(string nodeName)`

名前でコライダーを指定し、そのコライダーが有効なら true を、無効なら false を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetClickableNode

`public bool SetClickableNode(string nodeName, bool flag)`

名前でクリック可能なノードを指定し、true でクリックを有効に、false でクリックを無効にする。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### IsClickableNode

`public bool IsClickableNode(string nodeName)`

名前でノードを指定し、そのノードをクリック可能なら true を、そうでないなら false を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetUVOffset

`public bool SetUVOffset(string materialName, float u, float v)`

名前でマテリアルを指定し、**原点を左上として**uv座標を変更する。変更に失敗すると false を返す。

!!! warning "UV座標原点について"
    通常のUnityプロジェクトではUVの原点(0,0)はUVの左下にありますが、HeliScriptでは**左上**を原点としていることにご注意ください。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)

### PlayVideo

`public void PlayVideo(string materialName, string url, bool loop)`

再生するマテリアルを指定し、ビデオ再生を開始する。loop に true を指定するとループ再生を行う。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)

### StopVideo

`public void StopVideo()`

再生中のビデオを停止する。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)

### IsPlayVideo

`public bool IsPlayVideo()`

ビデオが再生中であれば true を返す。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)

### ClearTextPlane

`public void ClearTextPlane()`

テキストを消去する。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### WriteTextPlane

`public void WriteTextPlane(string text)`

テキストを設定する。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetCamera

`public bool SetCamera()`

カメラタイプのアイテムをカメラとして設定する。<br>
使い方については[VKCItemCamera](../VKCComponents/VKCItemCamera.md)を参照してください。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)

### ResetCamera

`public void ResetCamera()`

SetCameraで設定したものを解除する。<br>
使い方については[VKCItemCamera](../VKCComponents/VKCItemCamera.md)を参照してください。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)

### ReplaceItem

`public bool ReplaceItem(string URL)`

指定したモデルデータでItemの内容を置き換えます。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### ReplaceTexture

`public bool ReplaceTexture(string MaterialName, string URL)`

MaterialNameで指定したマテリアルのテクスチャを、URLの内容で置き換えます。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetPhysicsEnable

`public bool SetPhysicsEnable(string NodeName, bool Flag)`

NodeName で指定したノードに対し、trueで物理演算を有効化、falseで無効化します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### IsPhysicsFixed

`public bool IsPhysicsFixed(string NodeName)`

物理演算において、このItemが固定されている場合は true を返します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### GetPhysicsIDByNodeName

`public int GetPhysicsIDByNodeName(string NodeName)`

ノード名を指定して、ItemのPhysicsIDを取得します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemField](../VKCComponents/VKCItemField.md)

### SetProperty

`public bool SetProperty(string Key, string Value)`

プロパティを設定します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetProperty

`public string GetProperty(string Key)`

プロパティを取得します。Keyが存在しない場合は空文字列が返ります。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### CallComponentMethod

`public void CallComponentMethod(string ComponentName, string MethodName, string Params)`

Item に設定されているコンポーネントのメソッドを呼び出します。
ComponentNameでコンポーネント名を、MethodNameでメソッド名を指定し、メソッドを呼び出します。その際、Paramsで指定した文字列が引数として渡されます。

呼び出せるメソッドには、以下の制限があります。

* 引数として string を 1つだけ持つこと。
* 戻り値がvoidであること。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### SetOverridesProperty

`public bool SetOverridesProperty(string Key, string Value, string ItemName)`

overridesを設定します。同じKeyが存在すれば上書きされ、なければ追加されます。"itemname"を使用していない場合はItemNameには空文字列を指定します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)

### GetOverridesProperty

`public bool GetOverridesProperty(string Key, ref string Value, ref string ItemName)`

overrides設定を取得します。

??? note "このメソッドを呼び出し可能なオブジェクトタイプ"
    - [VKCItemActivity](../VKCComponents/VKCItemActivity.md)
    - [VKCItemAreaCollider](../VKCComponents/VKCItemAreaCollider.md)
    - [VKCItemAudio](../VKCComponents/VKCItemAudio.md)
    - [VKCItemBackgroundTexture](../VKCComponents/VKCItemBackgroundTexture.md)
    - [VKCItemCamera](../VKCComponents/VKCItemCamera.md)
    - [VKCItemField](../VKCComponents/VKCItemField.md)
    - [VKCItemObject](../VKCComponents/VKCItemObject.md)
    - [VKCItemParticle](../VKCComponents/VKCItemParticle.md)
    - [VKCItemPlane](../VKCComponents/VKCItemPlane.md)
    - [VKCItemTextPlane](../VKCComponents/VKCItemTextPlane.md)
