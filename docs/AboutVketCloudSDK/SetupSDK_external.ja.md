
# VketCloudSDKの導入方法

VketCloudSDKをインストールするには、UnityのPackage Managerを使用します。  

## Step 1. Unityでプロジェクトを開く  
対応しているバージョン（[動作環境](OperatingEnvironment.md){target=_blank}）のプロジェクトを開く、またはプロジェクトを新規作成します。テンプレートを使用する場合は「3D」を選択してください。      

!!! note caution
    プロジェクト名にスペースを入れるとビルドに失敗する場合があります。

    OK例) MyProject　　NG例) My Project  

---

## Step 2. レジストリ情報を登録する  
Unityのメニュー Edit > Project Settings から「Project Settings」ウィンドウを開きます。ウィンドウ左側のタブから「Package Manager」を選択し、以下のように記載します。  
  
|  項目  |  値  |
| ---- | ---- |
|  Name  |  VketCloudSDK  |
|  URL  |  https://registry.npmjs.com  |
|  Scope(s)  |  com.hikky.vketcloudsdk  |  

   ![Package](img/package.png)
  最後に「Save」ボタンを押して設定内容を保存します。

---

## Step 3. UPMよりSDKパッケージをインストール
Unityのメニュー Window > Package Manager から「Packages」ウィンドウを開きます。ウィンドウ上部のドロップダウンより「My Registries」を選択します。

   ![registry](img/registry.png)

表示されたリスト内から VketCloudSDK を選択し、「Install」ボタンを押してインストールを開始します。  
  

Unityのメニューに「VketCloudSDK」の項目が追加されていれば導入は完了です。  

   ![header](img/header.png)