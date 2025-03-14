# HeliScriptでJsonを扱う

## 概要

HeliScript上でJsonを定義する方法と活用方法を紹介します。

!!! info "検証環境"
    **SDKバージョン** : 15.1.0<br>
    **OS** : Windows 10<br>
    **Unity** : 22019.4.31.f1<br>
    **ブラウザ** : Google Chrome

!!! success "Jsonの状況設定"
    本ページで扱うJsonはショップワールド内で展示する商品の情報一覧を模したものとなります。<br>
    ※あくまで設定なので、本ページで扱うテストデータには適当な値が入っています。<br><br>
    〇パラメータ一覧<br>
    **position** : ワールド内で設置する場所の番号です。<br>
    **item_id** : 商品に割り振られた番号です。<br>
    **name** : 商品名です。<br>
    **category_name** : 商品が所属するカテゴリ名称です。<br>
    **item_type** : アイテムのタイプ(3Dモデル・アバター・テクスチャ など)が入ります。<br>
    **like_count** : アイテムに付いたいいね数です。<br>
    **price_range** : 価格帯の設定です。<br>
    **image** : 商品サムネイルの画像URLです。<br>
    **shop_name** : 商品の出店者名です。<br>
    **shop_icon** : 出店者のアイコン画像URLです。

## ① 変数定義

HeliScriptでは、Jsonクラスが用意されています。
したがって、

```js
Json _shopInfo;
```

のように定義することでJsonクラスの変数を作成することができます。

## ② Jsonクラス変数にデータを入れる

`hsLoadJson(string)`でJsonクラス変数の中にJsonを入れることができます。

今回は下記String型関数`GetRawData()`を使用します。

```hs
string GetRawData(){
    return
    "{" +
        "\"status\":\"ok\"," +
        "\"data\":{" +
            "\"items\":[" +
                "{" +
                    "\"position\":1," +
                    "\"item_id\":10," +
                    "\"name\":\"テストテスト\", " +
                    "\"category_name\":\"てすと\", " +
                    "\"item_type\":\"test\", " +
                    "\"like_count\":2," +
                    "\"price_range\":\"￥0～1,000\", " +
                    "\"image\":\"URLURL\", " +
                    "\"shop_name\":\"URLURLURL\", " +
                    "\"shop_icon\":\"URL\"" +
                "}," +
                "{" +
                    "\"position\":2," +
                    "\"item_id\":11," +
                    "\"name\":\"テスト2テスト2\", " +
                    "\"category_name\":\"てすと2\", " +
                    "\"item_type\":\"test2\", " +
                    "\"like_count\":3," +
                    "\"price_range\":\"￥3～1,000\", " +
                    "\"image\":\"URL2URL2\", " +
                    "\"shop_name\":\"URL2URL2URL2\", " +
                    "\"shop_icon\":\"URL2\"" +
                "}" +
            "]" +
        "}" +
    "}";
}
```

データを入れる際のHeliScriptの記載は下記の通りです。

```c#
_shopInfo = hsLoadJson(GetRawData());
```

## ③ Jsonから必要な情報を取り出す

今回使用するJsonは、

```c#
・status
・data
　├items
　├position
　├item_id
　├name
　├category_name
　├item_type
　├like_count
　├price_range
　├image
　├shop_name
　└shop_icon
```

という階層構造になっています。
ここでは、`item_id`と`name`について取り出してみます。

### 1. 全体のJsonからdataを取り出し、新しいJsonファイルとして定義する

Jsonクラスで定義されている`Find`関数では、指定したデータタイプの指定したキーの中身を探し出し、
新しいJsonファイルとして定義することができます。

したがって、

```c#
Json datablock = _shopInfo.Find(EJSONDataType_Block, "data");
```

とすることで、data以下が入ったJsonの`datablock`を定義することができます。

### 2. dataからitemを取り出し、新しいJsonファイルとして定義する

同じく`Find`関数を使用し、`datablock`からitems以下を取り出します。

```c#
Json items = datablock.Find(EJSONDataType_Array, "items");
```

これで、items以下が入ったJsonのitemsを作り出すことができます。

!!! info "EJSONDataTypeの違いについて"
    datablockを取り出すときはFind関数内で`EJSONDataType_Block`をitemsを取り出すときは`EJSONDataType_Array`を使用していますが、これらはJsonでのデータ定義形式によって使い分けます。<br><br>
    `{}` で囲まれたデータの要素を取り出すときは `Block`<br>
    `[]` で囲まれたデータの要素を取り出すときは `Array`<br>

### 3. itemsからArrayListを作成する

items内では15個のアイテムが定義されています。  
これらの各要素にアクセスできるようにするため、Jsonのリストとする必要があります。

```c#
list<Json> dataJsons = items.GetArrayList();
```

とすることで、`dataJsons` にitems内の15個のアイテムがそれぞれ別のJsonとしてリスト化されます。

### 4. アイテム内の各要素のデータを取り出す

ここまで下準備を行ったうえで、ようやくデータの取り出しが可能になります。

データの取り出しには `FindValueString`、`FindValueInt` といった、  
取り出す型に合わせた関数を使用します。

これらの関数では、指定した項目の値を指定した変数に代入することができます。  
したがって、下記のようなコードになります。

```c#
int itemId; // 取り出したitem_idを入れるための変数
string itemName; // 取り出したnameを入れるための変数

for(int i =  0; i < dataJsons.Count; i++){ // アイテムの数だけ繰り返し
  itemId = -1; // 変数の初期化
  itemName = ""; // 変数の初期化
  dataJsons[i].FindValueInt("item_id",itemId); // item_idの値をitemId変数に代入
  dataJsons[i].FindValueString("name",itemName); // nameの値をitemName変数に代入
  hsSystemOutput("dataJsons[%d] item_id : %d , name : %s\n" % i %itemId % itemName);
}
```

ここまでのコードをまとめるとこのようになります。

```c#
component SetProductData
{
    Json _shopInfo;

    public SetProductData()
    {
        _shopInfo = hsLoadJson(GetRawData());
        FindJsonContents();
    }

    public void Update()
    {
        
    }

    string GetRawData(){
        return
        "{" +
            "\"status\":\"ok\"," +
            "\"data\":{" +
                "\"items\":[" +
                    "{" +
                        "\"position\":1," +
                        "\"item_id\":10," +
                        "\"name\":\"テストテスト\"," +
                        "\"category_name\":\"てすと\"," +
                        "\"item_type\":\"test\"," +
                        "\"like_count\":2," +
                        "\"price_range\":\"￥0～1,000\"," +
                        "\"image\":\"URLURL\"," +
                        "\"shop_name\":\"URLURLURL\"," +
                        "\"shop_icon\":\"URL\"" +
                    "}," +
                    "{" +
                        "\"position\":2," +
                        "\"item_id\":11," +
                        "\"name\":\"テスト2テスト2\"," +
                        "\"category_name\":\"てすと2\"," +
                        "\"item_type\":\"test2\"," +
                        "\"like_count\":3," +
                        "\"price_range\":\"￥3～1,000\"," +
                        "\"image\":\"URL2URL2\"," +
                        "\"shop_name\":\"URL2URL2URL2\"," +
                        "\"shop_icon\":\"URL2\"" +
                    "}," +
                "]" +
            "}" +
        "}";
    }

    void FindJsonContents(){
        int itemId;
        string itemName;
        Json datablock = _shopInfo.Find(EJSONDataType_Block, "data");
        Json items = datablock.Find(EJSONDataType_Array, "items");
        list<Json> dataJsons = items.GetArrayList();
        for(int i =  0; i < dataJsons.Count; i++){ // アイテムの数だけ繰り返し
            itemId = -1; // 変数の初期化
            itemName = ""; // 変数の初期化
            dataJsons[i].FindValueInt("item_id",itemId); // item_idの値をitemId変数に代入
            dataJsons[i].FindValueString("name",itemName); // nameの値をitemName変数に代入
            hsSystemOutput("dataJsons[%d] item_id : %d , name : %s\n" % i %itemId % itemName);
        }
    }
}
```
このコードを実行した結果は下記のようになります。

```c#
dataJsons[0] item_id : 10 , name : テストテスト
dataJsons[1] item_id : 11 , name : テスト2テスト2
```

## 注意点

Jsonを扱う際、入ってくるデータによっては `Shift_JIS` では動作不良を起こす可能性があります。そのため、`.hs` ファイルの文字コードを `UTF-8` にしておきましょう。

また、[JsVal](../ExternalAPI/JsVal.md) を使用した読み込みの方が利便性が高いです。 