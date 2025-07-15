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

## データ受信コールバックメソッド

送信されたデータは、コンポーネントに定義された `OnReceiveLocalData()` メソッドで取得できます。

```
component LocalDataReceiver
{
    public void OnReceiveLocalData(string type, string data)
    {
    }
}
```