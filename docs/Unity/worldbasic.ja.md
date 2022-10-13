
# ワールドの基本要素

VketCloudを起動するには、以下のコンポーネントを含むオブジェクトがシーンに配置されている必要があります。  
  
|  項目  |  値  |
| ---- | ---- |
|  HEOWorldSetting  |  VketCloudにおけるワールド名やアバター等の設定をするオブジェクト  |
|  HEOField  |  Fieldというワールド本体のモデル等を入れるためのオブジェクト |
|  HEOPlayer  |  スポーン位置  |  
|  DespawnHeight  |  プレイヤーやアイテムをリスポーンする高さを決めるコンポーネント  |  

これらを追加するには、ヒエラルキーで右クリックし、Add essential Objects for VketCloudを呼び出すと簡単です。  
![AddEssentialObjects](img/AddEssentialObjects.jpg)   
  
  
・ビルドしてもアバターが現れない、cubeから落下する
・ジャンプしたら着地時に初期のスポーンポイントに戻される　　

以上の場合は「DespawnHeight」が高い場合があります。　　
DespawnHeightの高さ（y軸）を低くしてみてください。  
  



