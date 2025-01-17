# ローディング画面の途中で「バイナリ出力に失敗しました」というエラーが出てフリーズする

## 現象
ビルド後のローディング途中でコンソールに「バイナリ出力に失敗しました」というエラーが出てフリーズする。ビルド後のローディング50%ぐらいで発生。

!!! info 検証環境
    SDKバージョン : 13.7<br>
    OS : Windows<br>
    Unity : 2022.3.6f1<br>
    ブラウザ : Google Chrome<br>

## 原因と解決方法

Heliscriptのクラスでフィールドやグローバル変数定義時に`new`を使っている。
コンストラクタ内などに移動すれば動くようになります。

```
class Test {
    // NG
    list<Transform> _list = new list<Transform>();

    // OK
    List<Transform> _list;

    public Test()
    {
        // コンストラクタ内でnew
        _list = new list<Transform>();
    }
}

```
