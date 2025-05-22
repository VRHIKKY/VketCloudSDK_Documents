# VKC Item Camera

![HEOCamera_1](img/HEOCamera_1.jpg)

VKC Item Cameraコンポーネントは演出目的等で通常のカメラから別のカメラ制御に切り替えるために使用します。<br>
この機能を使うことにより、イベントシーンなどでのカメラの切り替えや特殊カメラワークを作ることができます。<br>
カメラの切り替えは後述するようにHeliScriptからおこないます。

???+ note "このオブジェクトタイプを使用可能なItemクラス"
    - [Equals](../hs/hs_class_item.md#equals)
    - [GetName](../hs/hs_class_item.md#getname)
    - [SetPos](../hs/hs_class_item.md#setpos)
    - [GetPos](../hs/hs_class_item.md#getpos)
    - [SetQuaternion](../hs/hs_class_item.md#setquaternion)
    - [GetQuaternion](../hs/hs_class_item.md#getquaternion)
    - [Load](../hs/hs_class_item.md#load)
    - [Unload](../hs/hs_class_item.md#unload)
    - [IsLoading](../hs/hs_class_item.md#isloading)
    - [IsLoaded](../hs/hs_class_item.md#isloaded)
    - [SetCamera](../hs/hs_class_item.md#setcamera)
    - [ResetCamera](../hs/hs_class_item.md#resetcamera)
    - [ReplaceItem](../hs/hs_class_item.md#replaceitem)
    - [SetProperty](../hs/hs_class_item.md#setproperty)
    - [GetProperty](../hs/hs_class_item.md#getproperty)
    - [CallComponentMethod](../hs/hs_class_item.md#callcomponentmethod)
    - [SetOverridesProperty](../hs/hs_class_item.md#setoverridesproperty)
    - [GetOverridesProperty](../hs/hs_class_item.md#getoverridesproperty)

## 設定項目

| 名称 | 初期値 | 機能 |
| ---- | ---- | ----|
| Show | true | オンにすると表示します |

### 高度な設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ----|
| Auto Loading | true | 自動ローディングの有効/無効を切り替えます。|
| Clickable | false | クリック可能かどうかを変更します |
| Item Render Priority | 0 | Itemの描画順序を決定します。<br>詳細は[RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md)をご参照ください。 |
| Show Photo Mode | true | 写真撮影モードの際、itemを表示するかどうかを変更します |

## 使い方

1\. 空のGameObjectを作成し、VKC Item Cameraコンポーネントをアタッチしてシーン上に配置します。

![HEOCamera_2](img/HEOCamera_2.jpg)

なお、本オブジェクトはVKCItemFieldとは別個の[アイテム](../hs/hs_class_item.md)として扱われるため、Worldオブジェクトの外に置かれても問題ございません。

![HEOCamera_3](img/HEOCamera_3.jpg)


2\. HeliScriptを書く

VKC Item Cameraをアタッチした空オブジェクトはアイテムとして出力されます。
そのため、[SetPos](../hs/hs_class_item.md#setpos)や[SetQuaternion](../hs/hs_class_item.md#setquaternion)といったアイテムクラス用の関数を使用することができるほか、[Camera専用の関数](../hs/hs_class_item.md#setcamera)も使用することが可能です。

!!! note "Camera専用の関数"
    1. bool SetCamera()<br>
    現在の映像を映すカメラを該当のカメラアイテムにします。<br>
    成功したらtrue、失敗したらfalseが返ってきます。

    2. void ResetCamera()<br>
    現在の映像を映すカメラをデフォルトのプレイヤー追従のものに戻します。

上記の関数を利用したHeliScriptの例が下記になります。

```cs
component EventCameraTest
{
    Item m_Camera;
    bool is_evented;
    float Timer;

    public EventCameraTest()
    {
        m_Camera = hsItemGet("CameraObj");
        is_evented = false;
    }

    public void Update()
    {
        Timer += 10*hsSystemGetDeltaTime();
        m_Camera.SetPos(makeVector3(7*hsMathSin(DEGtoRAD(Timer)),2,7*hsMathCos(DEGtoRAD(Timer))));
        m_Camera.SetQuaternion(makeQuaternionYRotation(DEGtoRAD(Timer + 180)));
    }

    public void ChangeCamera(string dummy){
        is_evented = !is_evented;
        if(is_evented){
            m_Camera.SetCamera();
        }else{
            m_Camera.ResetCamera();
        }
    }
}
```

これを実装したシーンが下記のようになります。<br>
イベントカメラが有効となっている時、ワールドの中心を軸として回転するカメラワークとなります。<br>
以下の画像ではSphereに[CallScript](../Actions/HeliScript/CallScript.md)を入れており、クリックするたびカメラが切り替わるように実装されています。

![HEOCamera_4](img/HEOCamera_4.jpg)

![HEOCamera_Result](img/HEOCamera_Result.gif)

## その他知見

イベントカメラには下記の特徴があります。

- プレイヤーの操作はカメラの影響を受ける
- 一人称視点にするとプレイヤーはカメラの位置にワープする

したがって、イベントカメラを使用する場合は、UIの操作を制限するか、プレイヤーの動きを制限しておかないと、予期せぬ動作の元となってしまいます。
