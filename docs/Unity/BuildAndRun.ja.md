
# ビルド
シーンのビルド方法について、解説します。

## Build And Run
VketCloudSDK > Build And Run を実行してください。  
  
![BuildAndRun](img/BuildAndRun.jpg)  
  
※ビルドが出来ない場合  
・一回サーバーを停止して、 VketCloudSDK -> preferences -> Clear data cache  
・ブラウザのキャッシュクリア  
を試してみてください。

それでも解決しない場合、[ビルドエラー](../troubleshooting/BuildError.md)を参照してください。

## ビルドプロセス - Build and Runを押すと起きること

Build and Runを押すと、HEO Fieldコンポーネントが付いたGame Objectとそのすべての子オブジェクトがheoファイルに変換されます。「HEO」はVket Cloudの描画エンジンで使われている専用の3Dフォーマットです。  
ビルドされたファイルは[project]\release\dataフォルダにコピーされます。これにより、3Dワールドをブラウザで動かすのに必要なアセットがすべてこのフォルダに入ります。

ビルドが成功したら、SDKは自動的にローカルサーバーとブラウザを立ち上げて、結果をテストできます。

![BuildAndRun](img/buildsuccess.png)  

#### dataフォルダ内の重要なファイル
|  場所  |  ファイル  |  説明  |
| ---- | ---- | ---- |
|  \release  |  main.html  |  このhtmlをブラウザで開いて3Dワールドを起動  |
|  \release\data\Field\ [world name]\ [gameobject]  |  [gameobject].heo  |  ワールドの3Dオブジェクト  |
|  \release\data\Scene  |  [world name].json  |  ワールドのシーンデータ  |
