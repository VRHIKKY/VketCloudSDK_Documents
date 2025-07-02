# Playerクラス

!!! info "情報"
    Playerクラスは、自分自身のプレイヤー（アバター）を表すものです。

## クラス定義

```
class Player {

}
```

***

## Playerのユーティリティー関数

### hsPlayerGet

`Player hsPlayerGet()`

自分自身の Player インスタンスを取得する。

### hsPlayerGetByID

`Player hsPlayerGetByID(string PlayerID)`

PlayerIDを指定して他のプレイヤーの Player インスタンスを取得する。

!!! warning "Playerクラス関数の呼び出し仕様変更について"
    SDK Ver12.x以降より、Playerクラスの関数はコンストラクタでの呼び出しができなくなりました。<br>
    インスタンスの取得を行いたい際は、例として以下のようなフラグとなるbool変数を用意して呼び出してください。

```
component PlayerInitSample
{   
    //Playerオブジェクトを定義
    //ここではhsPlayerGetなどの取得関数を含め、オブジェクトの初期化はできないためにご注意ください
	Player	ex_player;

    bool    ex_isPlayerInit; //Playerクラス初期化管理

    //コンストラクタ関数
    public PlayerInitSample()
    {
    ex_isPlayerInit = false;
    //ここでhsPlayerGet()は実行できません
    }

    //アップデート関数
    public void update()
    {
        //Playerのインスタンス取得がまだの場合、一度だけhsPlayerGet()を実行する
        if(!ex_isPlayerInit){
        //Playerを認識・取得
        ex_player = hsPlayerGet();
        ex_isPlayerInit = true;
        }
    }
}
```

***

## メソッド

### GetID

`string GetID()`

プレイヤーを識別するIDを取得する。

### SetControlEnabled

`bool SetControlEnabled(bool Enabled)`

プレイヤーの操作許可を設定します。falseに設定すると、WASDキーによる移動、マウスドラッグによるカメラ回転などがおこなえなくなります。

### GetHeadHeight()

`public float GetHeadHeight()`

アバターの身長を取得する。

### GetCustomState()

`public string GetCustomState(string CustomStateName)`

カスタムステートを任意のタイミングで取得する。

### SetPos

`void SetPos(Vector3 pos, bool CameraRotate = true)`

座標を設定する。TPSモードかつCameraRotateがfalseの場合はカメラ回転はおこなわれません。

### GetPos

`Vector3 GetPos()`

座標を取得する。

### SetRotate

`void SetRotate(float angle)`

プレイヤーの向きを設定する。

### GetRotate

`float GetRotate()`

プレイヤーの向きを取得する。

### SetJumpVelocity

`void SetJumpVelocity(float JumpVelocity)`

プレイヤーのジャンプ時の初速度を設定します。
デフォルト値は[Player Settings](../VketCloudSettings/PlayerSettings.md)にて設定した数値が参照されます。

### GetName

`string GetName()`

プレイヤーの名前を取得する。

### GetPhysicsID

`int GetPhysicsID()`

PhysicsIDを取得する。

### Emote

`bool Emote(int EmoteIndex)`

エモートを再生する。

### SetEmotion

`bool SetEmotion(int Index, string FileName, bool Loop, string ActionList)`

エモーションを読み込む。

ActionListの文字列はSceneファイルに記述する"actions":{}の文字列を渡します。

### ChangeMotion

`bool ChangeMotion(string MotionName)`

モーションを再生する。

### SetNextMotion

`bool SetNextMotion(string MotionName)`

次に再生するモーションを設定する。

### ChangeActivityMotion

`bool ChangeActivityMotion(string MotionName)`

[アクティビティファイル](../SDKTools/VKCActivityExporter.md)で定義されたモーションを再生する。

### SetNextActivityMotion

`bool SetNextActivityMotion(string MotionName)`

次に再生する[アクティビティファイル](../SDKTools/VKCActivityExporter.md)で定義されたモーションを設定する。

### ShowChatBalloon

`bool ShowChatBalloon(string Text)`

チャットバルーンに指定のテキストを表示します。

### SetMoveSpeed

`bool SetMoveSpeed(float MoveSpeed)`

移動速度を設定します。単位はm/sです。

### GetMoveSpeed

`float GetMoveSpeed()`

移動速度を取得します。単位はm/sです。

### SetMoveSpeedupRatio

`bool SetMoveSpeedupRatio(float MoveSpeedupRatio)`

高速移動の倍率を設定します。

### GetMoveSpeedupRatio

`float GetMoveSpeedupRatio()`

高速移動の倍率を取得します。

### ResetVelocity

`public void ResetVelocity()`

プレイヤーの速度をリセットします。

### SetPresetAvatar

`bool SetPresetAvatar(int AvatarIndex)`

プリセットアバターに切り替えます。自分自身のPlayerオブジェクトにのみ有効です。

### GetPresetAvatar

`int GetPresetAvatar()`

プリセットアバターのインデックスを取得します。

マイアバターを使用していたり、Playerオブジェクトが無効な状態の場合は-1が返ります。
