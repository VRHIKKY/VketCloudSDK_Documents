# HeliScriptでJsonを読み込む

## 概要

JsValとプロパティを使うことで、格納したJsonファイル情報を読み込むことができます。

このページではHeliScriptでのJsonファイルの読み込み方について説明します。

!!! info "検証環境"
    SDKバージョン : 12.3.4<br>
    OS : Windows 10<br>
    Unity : 2019.4.31.f1<br>  
    ブラウザ : Google Chrome

---

## 事前知識：JsValクラスって？

HeliScriptでは、JsValクラスが用意されています。  
これは、JavaScriptのデータを読み込むためのクラスです。  
連想配列の形式を使用することが可能です。  
詳しくは[JsValのページ](https://vrhikky.github.io/VketCloudSDK_Documents/latest/ExternalAPI/JsVal.html) をご覧ください。

```
JsVal shopInfo;
```

のように定義することでJsValクラスの変数を作成することができます。

---

## ①JsValクラス変数にデータを入れる

JsValクラス変数にデータを入れるには、コールバック関数を使用します。  
今回は`heliport.v3.api.worlds.getWorldList()`を利用し取得したワールドリストのデータをJsValを利用し取得、それを反映します。

予め、

```
delegate void fJsValCallback(JsVal);
```

を定義しておき、

```
    public void _FetchWorldListCallback(JsVal val)
    {
    
    }
    
    //この関数を発火したタイミングでJsVal変数にデータが入る
    heliport.v3.api.worlds.getWorldList(_FetchWorldListCallback, 6, 0, "myvket", "", "", "official");
```

関数を定義します。

ここまで用意出来たら、関数を発火することでコールバック関数内にてJsValクラス変数valにデータが入った状態で使用することが出来ます。

---

## ②JsValから必要な情報を取り出す

今回使用するデータは、

```
data {  
world\_portals \[  
id　: int型  
name　: string型  
visit\_count　: int型  
ingame\_url　: string型  
thumbnail　: string型  
\]  
}
```

という階層構造を持っています。  
(world\_portalsは、id, name, visit\_count, ingame\_url, thumbnailの5要素がセットになっています)

JsValのデータの取り出しには`GetProperty()`と`GetProperty().At()`の2種類を使用します。

要素は`GetProperty()`、連想配列は`GetProperty().At()`でキーと配列番号を指定して対応するキーにアクセスすることが可能です。  
末端まで辿り着いたら、int型であればGetNum()、string型であればGetStr()で値を取得することが可能です。

したがって、1番目のid, name, visit\_count, ingame\_url, thumbnailを取得するためには、下記のようなコードを書く必要があります。

```
_id = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("id").GetNum(); _name = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("name").GetStr(); _visit_count = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("visit_count").GetNum(); _ingame_url = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("ingame_url").GetStr(); _thumb_url = val.GetProperty("data").GetProperty("world_portals").At(0).GetProperty("thumbnail").GetStr();
```

取り出したデータはそれぞれint型やstring型として使うことが出来るため、  
hsSystemWriteLineに反映したり、計算に使ったりし、取得結果をワールドに反映することが可能です。

---

## 参考ページ

[ブローカーAPIについて](https://vrhikky.github.io/VketCloudSDK_Documents/latest/ExternalAPI/BrokerAPI.html) ：ブローカーAPIでもJsValを使ったデータ取得を行います。
