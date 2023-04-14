# ワールドの基本要素

VketCloudSDKでビルドするには、以下のコンポーネントを含むオブジェクトがシーンに配置されている必要があります。  
  
|  コンポーネント名  |  概要  |
| ---- | ---- |
|  HEOWorldSetting  |  ワールド名やアバター等の設定をするコンポーネント  |
|  HEOField  |  3Dモデルを入れるためのコンポーネント |
|  HEOPlayer  |  プレイヤーの初期スポーン位置を指定するコンポーネント  |  
|  DespawnHeight  |  プレイヤーをリスポーンする高さを指定するコンポーネント  |  

!!! note tip
    これらのコンポーネントがプリセットされたオブジェクトは、ヒエラルキーで右クリックし、Add essential Objects for VketCloudから呼び出すことができます。

    ![AddEssentialObjects](img/AddEssentialObjects.jpg)   
  
!!! note question
    - 連続して初期のスポーンポイントに戻される　　

    以上の場合は、意図せずリスポーン判定されている可能性があります。DespawnHeightの高さ（y軸）やHEOPlayerの位置を調整してみてください。  
  



