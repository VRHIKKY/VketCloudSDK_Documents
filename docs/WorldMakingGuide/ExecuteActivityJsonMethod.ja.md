# Activityのjsonのメソッドを実行する 

ActivityScene.json(アクティビティフォルダのjson)で定義されるComponentクラスのメソッドを、Scene.jsonで定義されるComponentクラスから実行する方法

!!! info
    SDKバージョン : 13.7<br>
    OS : Windows 11<br>
    Unity : 2022.3.6f1<br>
    ブラウザ : Google Chrome<br>

## 対応内容

下記図のようなケースを考える。

- ComponentAからComponentBのHogeメソッドを実行したい
    - サブシーンのコンポーネントは参照できない(図の赤線)
        -同じ環境であればsystem.Item_GetComponent などを使って参照をもてる
    - そこでアイテム経由で実行する必要がある

![ExecuteActivityJsonMethod](img/ExecuteActivityJsonMethod.jpg)

## 手順

### ① まずComponentBを持つアイテムBを取得しておく
サブシーンのものでも、ComponentでなくItemであればhsItemGetで参照をとれる

!!! info hsItemGet でサブシーンのItemを取得する
    hsItemGet("ActivityItem/ItemB") のように、(アクティビティタイプのアイテム名)/(サブシーン内の指定したい相手名)と階層パスで取得する。 これはアクティビティタイプのアイテムがサブシーンをもっているため。

### ② 取得したアイテムBを使って、直接メソッドを実行
- 具体的にはitmB.CallComponentMethod("ComponentB","Hoge","HogeParam")のように実行
    - CallComponentMethod なのでメソッドHogeは引数string一個で、かつ、戻り値型はvoidである必要がある
