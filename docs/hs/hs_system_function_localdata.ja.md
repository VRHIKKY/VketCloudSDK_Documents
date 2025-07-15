# 組み込み関数 - ローカルデータ

!!! info "情報"
    ユーザー本人のみに任意のデータを送信します。

    Net系の関数とは違い、実行したそのユーザー本人にのみデータを通知します。
    type には任意の文字列を指定できますが、利用目的に応じた適切な名前を選択することが好ましいです。

***

## データ送信関数

### hsSendLocalData
`void hsSendLocalData(string type, string data)`

ユーザー本人に (type, data) を通知する。

| 引数 | 型 | 説明 |
|------|------|------|
| type | string | データの種類を表す任意の文字列 |
| data | string | 送信するデータ |

!!! example "使用例"
    ```
    // プレイヤーのスコアを自分にのみ通知
    hsSendLocalData("score", "1000");
    
    // プレイヤーの設定を自分にのみ通知
    hsSendLocalData("settings", "volume:80,quality:high");
    ```

***

## データ受信コールバックメソッド

送信されたデータは、コンポーネントに定義された `OnReceiveLocalData()` メソッドで取得できます。

```
component LocalDataReceiver
{
    public void OnReceiveLocalData(string type, string data)
    {
        // データを受信したときの処理
        if (type == "score")
        {
            // スコアデータの処理
            int score = hsParseInt(data);
            hsSystemWriteLine("スコア: " + score);
        }
        else if (type == "settings")
        {
            // 設定データの処理
            hsSystemWriteLine("設定データ: " + data);
        }
    }
}
```

!!! note "注意"
    - このコールバックは、同じプレイヤーが送信したデータのみを受信します
    - 他のプレイヤーからのデータは受信されません
    - typeパラメータを使用してデータの種類を判別することを推奨します