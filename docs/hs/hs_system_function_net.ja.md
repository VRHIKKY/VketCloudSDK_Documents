
# 組み込み関数 - ネットワーク


!!! 情報 Info
    ルームのプレイヤー全体に、任意のデータを送信します。

    プレイヤーにデータを送信する方法として、カスタムステートとカスタムデータの2種類があります。

    カスタムステートは、新しくルームに入ってきたプレイヤーへ自動的にデータが送信されます。

    カスタムデータは、1回きりの送信を実現するものです。

    それぞれ、以下の関数を利用してデータを送信します。type には任意の文字列を指定できますが、利用目的に応じた適切な名前を選択することが好ましいです。

***

### hsNetSetCustomState(string, string)
`void hsNetSetCustomState(string type, string data)`

あらかじめ type と data を設定しておくことによって、ルームに入場したユーザーに (type, data) を自動で通知する。

### hsNetSendCustomData(string, string)
`void hsNetSendCustomData(string type, string data)`

ルーム内のユーザーに (type, data) を通知する。


### データ受信コールバックメソッド

送信されたデータは、コンポーネントに定義された `OnReceiveCustomState()` と `OnReceiveCustomData()` メソッドで取得できます。引数 id は送信したプレイヤーの識別子です。

```
component CustumDataReceivere
{
    public void OnReceiveCustomState(string id, string type, string data)
    {
    }

    public void OnReceiveCustomData(string id, string type, string data)
    {
    }
}
```


