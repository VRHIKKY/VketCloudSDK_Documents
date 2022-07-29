
# HEOWorldSetting
![HEOWorldSetting](img/HEOWorldSetting.jpg)

HEOWorldSettingはワールド基本情報を管理します。
このコンポーネントでは、基本情報、描画設定、アバター設定の三種類を設定することができます。

# Basic Info
|  Label |  function  |
| ----   | ---- |
|  World Name |  ワールド名を設定できます。おもにURLなどに使用されます。  |
|  Debug Mode  |  デバッグモードを切り替えることができます。オンにするとF1やF2からデバッグ機能を使用できます（ブラウザ上で）。|
|  Show Avatar Icon  |  使用しません。  |
|  VRM Drop  |  ブラウザ上へのVRMドロップによる着替えを許可します。  |
|  Occulusion Culling  | 使用しません。  |

# Rendering
|  Label |  function  |
| ----   | ---- |
|  PBR |  PBRライティングをオンにします。  |
|  Light Direction  |  デバッグモードを切り替えることができます。オンにするとF1やF2からデバッグ機能を使用できます（ブラウザ上で）。|
|  Light Color  |  ワールドのメインライト色を変更します。|
|  Projection Near  |  近傍のクリッピング距離を変更します。  |
|  Projection Far  | 遠方のクリッピング距離を変更します。  |
|  Projection Degree  | 画角を変更します（デフォルト値推奨） |

# Avatars
![Avatars](img/Avatars.jpg)

!!! note info 
    アバターリストが空だと、BuildAndRunに失敗します。

### Avatarブロック
|  Label |  function  |
| ----   | ---- |
|  .vrm | アバターに使用するモデルを設定します。 |
|  height  | アバターのカメラ基準位置を設定します。0にすると、足元を中心にカメラが追従します。 |

### Motionブロック
|  Label |  function  |
| ----   | ---- |
| .hem | モーションファイルを設定します。 |
| loop | モーションをループ再生します。歩きや待機モーションはオンにしてください。 |
| useAction | モーション再生開始時に呼び出すアクションを設定します。 |

### ObjectOnAvatarブロック
|  Label |  function  |
| ----   | ---- |
| name | 固有の名前を設定します。 |
| objecttype | 持たせるオブジェクトのタイプを指定します。.heo、.hep、audioが使用できます。 |
| file | アセットを指定します。 |
| pos | targetからのオフセットを設定できます。 |
| rotate | 回転角度を設定できます。 |
| target | 座標基準となるボーンを指定します。ex. right, left, ... |