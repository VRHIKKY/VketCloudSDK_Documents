# ワールドの基本要素

VketCloudSDKでビルドするには、以下のコンポーネントを含むオブジェクトがシーンに配置されている必要があります。  
  
| オブジェクト名  |  概要  |
| ---- | ---- |
|  VketCloudSettings  |  設定モードをBase/Advancedと切り替えを行うオブジェクト |
|  BasicSettings  |  ワールドの基本情報の設定を行うオブジェクト |
|  PlayerSettings  |  プレイヤーにおけるプレイヤーの挙動、初期スポーン位置を指定するオブジェクト  |  
|  DespawnHeightSettings  |  プレイヤーをリスポーンする高さを指定するオブジェクト  |  

なお、VketCloudSettingsをAdvancedの設定に切り替えることで、追加で4オブジェクトに追加で以下の4つのオブジェクトが配置されます。

| オブジェクト名  |  概要  |
| ---- | ---- |
| Camera Settings  |  カメラの挙動に関する設定を行うオブジェクト  |  
|  Rendering Settings  |  ワールドにおける描画設定を行うオブジェクト  |  
|  Avatar Settings  |  ワールド内におけるアバターに関する設定するオブジェクト  |  
|  MyAvatar Settings  |  ワールド内におけるマイアバターの扱いを設定するオブジェクト  |  

より詳しい情報は、[Vket Cloud Settings - 概要](./VketCloudSettings/Overview.md)のページをご参照ください。

!!! note tip
    これらのコンポーネントがプリセットされたオブジェクトは、ヒエラルキーで右クリックし、Add essential Objects for VketCloudから呼び出すことができます。

    ![AddEssentialObjects](img/AddEssentialObjects.jpg)   
  
!!! note question
    - 連続して初期のスポーンポイントに戻される　　

    という現象が起きている場合は、意図せずリスポーン判定されている可能性があります。DespawnHeightSettingsの高さ（y軸）やPlayerSettingsの位置を調整してみてください。    
