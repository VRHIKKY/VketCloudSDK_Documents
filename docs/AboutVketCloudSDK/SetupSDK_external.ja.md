
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

   ![Package](img/package.jpg)
  最後に「Save」ボタンを押して設定内容を保存します。

---

## Step 3. UPMよりSDKパッケージをインストール
Unityのメニュー Window > Package Manager から「Packages」ウィンドウを開きます。ウィンドウ上部のドロップダウンより「My Registries」を選択します。

   ![registry](img/registry.jpg)

表示されたリスト内から VketCloudSDK を選択し、「Install」ボタンを押してインストールを開始します。<br>
デフォルトでは最新のSDKバージョンがインストールされますが、特定のバージョンを導入したい場合は以下の手順に従ってバージョンを選択してください。  

Unityのメニューに「VketCloudSDK」の項目が追加されていれば導入は完了です。  

   ![header](img/header.jpg)

## 任意のバージョンの導入・既存バージョンSDKのアップデート
特定のバージョンを導入したい、あるいは既存のSDKをアップデートしたい際はPackage Managerから選択するか、manifest.jsonの編集によってバージョンが切り替えできます。

!!! note caution
      既存のSDKのバージョンアップを行う際、アップデート後にComponentが欠落する現象が確認されています。<br>
      バージョンアップを行う際はプロジェクトの複製などによってバージョンアップ前の状態のバックアップを取ることを強くおすすめします。

### Package Managerによるバージョン切り替え

Step 2.にてレジストリ情報を登録した後、「Window」-->「Package Manager」からPackage Managerを開きます。<br>
Package Managerではレジストリ表示を"My Registries"に切り替え、VketCloudSDKが表示されることを確認します。<br>

![SetupSDK_PackageManager_1](./img/SetupSDK_PackageManager_1.jpg)

ここで"See all versions"を選択すると、現在リリースされているバージョンの一覧が表示されます。<br>
インストールしたいバージョンを選択し、ウィンドウ右下の"Install"または"Update to [任意のバージョン]"を選択するとSDKがインストールされます。

![SetupSDK_PackageManager_2](./img/SetupSDK_PackageManager_2.jpg)

### manifest.jsonによるバージョン切り替え

バージョンの切り替えはmanifest.jsonを直接編集することでも可能です。<br>
プロジェクトのmanifest.jsonを開くには、Projectウィンドウにて右クリックした上で"Show in Explorer"を選択し、「Projects」-->[任意のプロジェクト]-->「Packages」から開きます。

![SetupSDK_ManifestJson_1](./img/SetupSDK_ManifestJson_1.jpg)

![SetupSDK_ManifestJson_2](./img/SetupSDK_ManifestJson_2.jpg)

,anifest.json内の`"com.hikky.vketcloudsdk"`の右側を使用したいバージョンに書き換えると、インストール時(インストール済みの場合は読み込み時)のバージョンが切り替わります。

![SetupSDK_ManifestJson_3](./img/SetupSDK_ManifestJson_3.jpg)

!!! note
      UnityのメニューにVketCloudSDKが表示されない場合は、再起動すると表示される場合があります。<br>
      上記の原因の一つであるSDK付随のDeeplinkパッケージが自動インポートされない現象が発生した場合は[手動での導入](../troubleshooting/InstallingDeeplink.md)をお試しください。
      
      また、稀に必須パッケージであるEditorTutorialSystemも自動インポートされない場合があるため、その際はStep 2.と同じ手順で以下のパッケージを導入してください。

|  項目  |  値  |
| ---- | ---- |
|  Name  |  EditorTutorialSystem  |
|  URL  |  https://registry.npmjs.org  |
|  Scope(s)  |  com.hikky.editortutorialsystem  |  