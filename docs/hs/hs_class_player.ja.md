
# Playerクラス

!!! 情報 Info
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

***

## メソッド
### GetID
`string GetID()`

プレイヤーを識別するIDを取得する。

### GetHeadHeight()
`public float GetHeadHeight()`

アバターの身長を取得する。

### GetCustomState()
`public string GetCustomState(string CustomStateName)`

カスタムステートを任意のタイミングで取得する。

### SetPos
`public void SetPos(Vector3 pos)`

座標を設定する。

### GetPos
`public Vector3 GetPos()`

座標を取得する。

### SetRotate
`public void SetRotate(float angle)`

プレイヤーの向きを設定する。

### GetRotate
`public float GetRotate()`

プレイヤーの向きを取得する。

### GetName
`public string GetName()`

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