
# ビルド
シーンのビルド方法について、解説します。

VketCloudを起動するには、以下のコンポーネントを含むオブジェクトがシーンに配置されている必要があります。

|  項目  |  値  |
| ---- | ---- |
|  HEOWorldSetting  |  VketCloudにおけるワールド名やアバター等の設定をするオブジェクト  |
|  HEOField  |  Fieldというワールド本体のモデル等を入れるためのオブジェクト |
|  HEOPlayer  |  スポーン位置  |  

なお、これらを追加するには、ヒエラルキーで右クリックし、Add essential Objects...を呼び出すと簡単です。

![AddEssentialObjects](img/AddEssentialObjects.jpg)

これらのオブジェクトが配置できたら、VketCloudSDK > BuildAndRun を実行してください。

![BuildAndRun](img/BuildAndRun.jpg)  
  
ビルドが出来ない場合、[ビルドエラー](http://127.0.0.1:8000/ja/troubleshooting/BuildError.html)を参照