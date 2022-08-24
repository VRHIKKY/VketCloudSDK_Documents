
# ビルド
シーンのビルド方法について、解説します。

VketCloudを起動するには、以下のコンポーネントを含むオブジェクトがシーンに配置されている必要があります。

|  項目  |  値  |
| ---- | ---- |
|  HEOWorldSetting  |  VketCloudにおけるワールド名やアバター等の設定をするオブジェクト  |
|  HEOField  |  Fieldというワールド本体のモデル等を入れるためのオブジェクト |
|  HEOPlayer  |  スポーン位置  |  

なお、これらを追加するには、ヒエラルキーで右クリックし、Add essential Objects for VketCloudを呼び出すと簡単です。

![AddEssentialObjects](img/AddEssentialObjects.jpg)  
  
「World」の配下にCubeを追加して、大きさを任意に調整します。  
![SetCube](img/SetCube.png)  
  

これらのオブジェクトが配置できたら、VketCloudSDK > BuildAndRun を実行してください。  
ブラウザが開き動かせるのが確認出来ます！  
  
![BuildAndRun](img/BuildAndRun.jpg)  
![BuildAndRun](img/buildsuccess.png)  
  
※ビルドが出来ない場合  
・一回サーバーを停止して、 VketCloudSDK -> preferences -> キャッシュ削除  
・ブラウザのキャッシュクリア  
を試してみてください。

それでも解決しない場合、[ビルドエラー](http://127.0.0.1:8000/ja/troubleshooting/BuildError.html)を参照してください。
