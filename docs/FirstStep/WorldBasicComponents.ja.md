# ワールドの基本要素

Vket Cloud SDKでビルドするには、最低限、以下のオブジェクトがシーンに配置されている必要があります。  

|  オブジェクト名  |  概要  |
| ---- | ---- |
|  VketCloudSettings  |  ワールドの設定を管理するためのオブジェクト群  |
|  BasicSettings  |  ワールドの基本的な設定 |
|  PlayerSettings  |  スポーン位置など、ワールドにおけるプレイヤーの挙動を設定  |  
|  DespawnHeightSettings  |  プレイヤーをリスポーンする高さを設定  |  

これらの設定項目の詳細については[Vket Cloud Settings - 概要](../VketCloudSettings/Overview.md)を参照してください。

!!! note tip
    これらのオブジェクトは、ヒエラルキーで右クリックし、Add essential Objects for VketCloudから呼び出すことができます。

    ![AddEssentialObjects](img/AddEssentialObjects.jpg)   
  
!!! note question
    - 連続して初期のスポーンポイントに戻される　　

    という現象が起きている場合は、意図せずリスポーン判定されている可能性があります。DespawnHeightSettingsの高さ（y軸）やPlayerSettingsの位置を調整してみてください。    
