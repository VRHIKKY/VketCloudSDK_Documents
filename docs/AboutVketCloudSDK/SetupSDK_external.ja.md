# Vket Cloud SDKの導入方法

Vket Cloud SDKをインストールするには、はじめにUnityのPackage Managerを使用し、SDKインストールウィザードを導入します。  

## Step 1. Unityでプロジェクトを開く

対応しているバージョン（[動作環境](OperatingEnvironment.md){target=_blank}）のプロジェクトを開く、またはプロジェクトを新規作成します。テンプレートを使用する場合は「3D」を選択してください。

!!! warning "プロジェクト名・プロジェクトパスの名前について"
    プロジェクト名およびプロジェクトディレクトリにスペースを入れるとビルドに失敗する場合があります。<br>
    また、日本語など2バイト文字の使用も避けることをおすすめします。

    OK例) MyProject　　NG例) My Project , マイ　プロジェクト

![SetupSDK_External](img/SetupSDK_External_01.jpg)

---

## Step 2. レジストリ情報を登録する  

!!! note caution
    Version 9.3リリース以降、Vket Cloud SDK導入時に入力するレジストリがインストールウィザードのものに変更となりました。<br>
    既存のプロジェクトにインストールウィザードを導入する際は**必ず**「+」ボタンを選択して新規のレジストリを追加し、SDKのレジストリを上書きしないようご注意ください。<br>
    インストールウィザードをインストールした後、[任意のバージョンの導入・既存バージョンSDKのアップデート](#sdk)に移行してください。

![SetupSDK_External](img/SetupSDK_External_02.jpg)

Unityのメニュー Edit > Project Settings から「Project Settings」ウィンドウを開きます。ウィンドウ左側のタブから「Package Manager」を選択し、以下のように記載します。  
  
| 項目 | 値 |
| ---- | ---- |
| Name | Vket Cloud SDK Install Wizard |
| URL | https://registry.npmjs.com |
| Scope(s) | com.hikky.vketcloudsdk-install-wizard |  

最後に右下の「Save」ボタンを押して設定内容を保存します。

!!! note
    上記レジストリをコピー&ペーストした際にスペース等不要な文字が含まれている場合、以下のようなエラーが出る場合があります。<br>
    以下のエラーが出現した際はスペースが含まれていないかご確認ください。

![SetupSDK_External](img/SetupSDK_External_03.jpg)

---

## Step 3. Unity Package ManagerよりSDKインストールウィザードをインストール

Unityのメニュー Window > Package Manager から「Packages」ウィンドウを開きます。

![SetupSDK_External](img/SetupSDK_External_04.jpg)

ウィンドウ上部のドロップダウンより「My Registries」を選択します。

![SetupSDK_External](img/SetupSDK_External_05.jpg)

表示されたリスト内から Vket Cloud SDK Install Wizard を選択し、「Install」ボタンを押してインストールを開始します。<br>

![SetupSDK_External](img/SetupSDK_External_06.jpg)

Unityに以下のインストールウィザード画面とメニュー表示がされれば導入は完了です。

![SetupSDK_External](img/SetupSDK_External_07.jpg)

![SetupSDK_External](img/SetupSDK_External_08.jpg)

プロジェクトパスにスペースもしくは2バイト文字が入っている場合は、起動時に以下警告が表示されます。

![SetupSDK_External](img/SetupSDK_External_28.jpg)

## Step 4. インストールウィザードを使用してSDKをインストールする

新規にSDKをインストールする際はSDKインストールウィザードを使用します。

1\. 上記手順で開いたウィザードを使用するか、Unityのメニューから SDK Installation Wizardを選択します。

![SetupSDK_External](img/SetupSDK_External_08.jpg)

  Install Wizardを開くことで、以下のウィンドウが開きます。

![InstallationWizard_Window](img/InstallationWizard_Window.jpg)

2\.「次へ」ボタンを押して、言語設定画面に移動します。言語設定画面でWizard内で使用する言語を設定できます。

![SetupSDK_External](img/SetupSDK_External_09.jpg)

3\. VketCloud SDKの初期設定をガイドする画面です。

Unity 2019の場合、4つの設定を完了させてください。

![SetupSDK_External](img/SetupSDK_External_10.jpg)

Unity 2022の場合、3つの設定を完了させてください。
* SDK13.7以降、Unity 2019とUnity 2022の両方に対応しております。

![SetupSDK_External](img/SetupSDK_External_27.jpg)

### Standard Shader設定の変更

!!! warning "Standard Shader設定の変更について"
    SDK Ver12.3以降はStandard Shader設定の変更も必須となりました。<br>
    設定されていない場合はビルドエラーが発生するため、導入時に必ず設定してください。

VketCloudの物理ベースレンダリングは、UnityのMediumレベルのものと同じアルゴリズム(GGX)を使用しているので、設定を揃える必要があります。

1. UnityのメニューバーのEditからProject Settings...をクリックしてください。  

  ![SetupSDK_External](img/SetupSDK_External_11.jpg)

2. Project Settingsのウィンドウが開いたら、Graphicsの設定画面の中で、「Tier Setting」の「Low (Tier 1)」の項目の中の「Use Defaults」のチェックを外し、「Standard Shader Quality」の項目を「Medium」 へと変更します。

  ![SetupSDK_External](img/SetupSDK_External_12.jpg)

3. 上記を「Low(Tier 1)」の下にある「Medium(Tier 2)」、「High(Tier 3)」の3つの項目とも行います。

  ![SetupSDK_External](img/SetupSDK_External_13.jpg)

### Color Spaceの変更

その後、同じく「Project Settings」のウィンドウ内、「Player」タブの中の「Other Settings」の中にある「Color Space」の項目を探し、プルダウンメニューから「Linear」に変更してください。

  ![SetupSDK_External](img/SetupSDK_External_14.jpg)

### LightMapEncodingの変更

次に、同じく「Other Settings」の中から、「Lightmap Encoding」の項目をプルダウンメニューから「Normal Quality」に変更してください。 

![SetupSDK_External](img/SetupSDK_External_15.jpg)

### API Compatibility Level (API互換性レベル)の変更 (Unity 2019.4のみ)

!!! warning "API Compatibility Levelの変更について"
    Unity 2022以降はAPI Compatibility Levelの変更は不要です。
    SDK13.7以降、Unity 2019とUnity 2022の両方に対応しております。

最後に「Other Settings」にある、「Api Compatibility Level」の項目をプルダウンメニューから「.NET 4.x」に変更してください。

![SetupSDK_External](img/SetupSDK_External_16.jpg)

---

4\. 各設定が満たされると、それぞれの設定項目の左にチェックマークが表示されます。<br>設定されない状態で「次へ」ボタンを押すとエラーが表示されます。

  ![SetupSDK_External](img/SetupSDK_External_17.jpg)

5\.「次へ」ボタンを押すと、バージョン選択画面が表示されます。<br>安定版、最新版、バージョンアーカイブからバージョンを選択できます。

!!! note caution
    バージョンアーカイブ内のバージョンは廃止が予定されております。<br>新規のワールド制作には使用しないようご注意ください。

  ![SetupSDK_External](img/SetupSDK_External_18.jpg)

6\. バージョンを選択し、インストールボタンを押すとパッケージのインポートが開始します。

![SetupSDK_External](img/SetupSDK_External_19.jpg)

7\.　およそ2～5分待つと、インストールが完了して以下の画面が表示されます。この画面からSDKマニュアルやコミュニティDiscordサーバーへとアクセスできます。

![SetupSDK_External](img/SetupSDK_External_20.jpg)

8\. Unityメニューの「Vket Cloud SDK」の項目から、「Login」を押してください。<br>
自動でWebブラウザが開きます。

![SetupSDK_External](img/SetupSDK_External_21.jpg)

9\. WebブラウザからVketアカウントにログインし、「Unity Editorを開く」ボタンを押してください。

![SetupSDK_External](img/SetupSDK_External_22.jpg)

!!! warning "SDKインストール後、error CS0234: 'EditorCoroutines'"
    Unityの不具合でSDKが依存しているEditorCoroutinesがインストール出来ていないケースがあります。その場合はお手数ですがEditorCoroutinesを単体でインストールをお願いします。Package ManagerでUnity Registryを選択し検索ボックスでEditorCoroutinesと入力してください。出てきたPackageをInstallすれば解決します。![SetupSDK_External](img/EditorCoroutines.jpg)

## 任意のバージョンの導入・既存バージョンSDKのアップデート

既にSDKを導入しているプロジェクトについては、SDKバージョンマネージャーを使用してバージョンの切り替え・アップデートが可能です。<br>

### SDK Version Managerによるバージョン切り替え

1\. VketCloudSDK_Wizard > SDK Version Managerを押して、バージョン選択画面が表示されます。
す。

![SetupSDK_External](img/SetupSDK_External_23.jpg)

2\. バージョン選択画面でバージョンを選択し、インストールボタンを押してください。

!!! note caution
    バージョンアーカイブ内のバージョンは廃止が予定されております。<br>新規のワールド制作には使用しないようご注意ください。

![SetupSDK_External](img/SetupSDK_External_24.jpg)

3\. インストールボタンを押すと、インポート画面に移動します。

![SetupSDK_External](img/SetupSDK_External_25.jpg)

4\. インストールが完了すると、バージョン選択完了画面が表示されます。

![SetupSDK_External](img/SetupSDK_External_26.jpg)

この画面からSDKマニュアルやコミュニティDiscordサーバーへとアクセスできます。

!!! note caution
      既存のSDKのバージョンアップを行う際、アップデート後にComponentが欠落する現象が確認されています。<br>
      バージョンアップを行う際はプロジェクトの複製などによってバージョンアップ前の状態のバックアップを取ることを強くおすすめします。

!!! note caution
    SDKアップデート後にビルドエラー等の不具合が発生する場合は以下のページをご確認ください。
    [バージョンアップ後によくあるトラブル](../troubleshooting/VersionUpdateTroubleshooting.md)

!!! note caution
    以下にて解説しているPackage Managerあるいはmanifest.jsonの編集によるバージョン切り替えは引き続き利用可能ですが、基本的にはSDKバージョンマネージャーの利用を推奨します。<br>

### Package Managerによるバージョン切り替え

Step 2.にてレジストリ情報を登録した後、「Window」-->「Package Manager」からPackage Managerを開きます。<br>
Package Managerではレジストリ表示を"My Registries"に切り替え、Vket Cloud SDKが表示されることを確認します。<br>

![SetupSDK_PackageManager_1](./img/SetupSDK_PackageManager_1.jpg)

ここで"See all versions"を選択すると、現在リリースされているバージョンの一覧が表示されます。<br>
インストールしたいバージョンを選択し、ウィンドウ右下の"Install"または"Update to [任意のバージョン]"を選択するとSDKがインストールされます。

![SetupSDK_PackageManager_2](./img/SetupSDK_PackageManager_2.jpg)

### manifest.jsonによるバージョン切り替え

バージョンの切り替えはmanifest.jsonを直接編集することでも可能です。<br>
プロジェクトのmanifest.jsonを開くには、Projectウィンドウにて右クリックした上で"Show in Explorer"を選択し、「Projects」-->[任意のプロジェクト]-->「Packages」から開きます。

![SetupSDK_ManifestJson_1](./img/SetupSDK_ManifestJson_1.jpg)

![SetupSDK_ManifestJson_2](./img/SetupSDK_ManifestJson_2.jpg)

manifest.json内の`"com.hikky.VketCloudSDK"`の右側を使用したいバージョンに書き換えると、インストール時(インストール済みの場合は読み込み時)のバージョンが切り替わります。

![SetupSDK_ManifestJson_3](./img/SetupSDK_ManifestJson_3.jpg)

!!! warning "UnityメニューにてVket Cloud SDKが表示されない場合は"
    UnityのメニューにVket Cloud SDKが表示されない場合は、再起動すると表示される場合があります。<br>
    上記の原因の一つであるSDK付随のDeeplinkパッケージが自動インポートされない現象が発生した場合は[手動での導入](../troubleshooting/InstallingDeeplink.md)をお試しください。

    また、稀に必須パッケージであるEditorTutorialSystemも自動インポートされない場合があるため、その際はStep 2.と同じ手順で以下のパッケージを導入してください。

|  項目  |  値  |
| ---- | ---- |
|  Name  |  EditorTutorialSystem  |
|  URL  |  https://registry.npmjs.org  |
|  Scope(s)  |  com.hikky.editortutorialsystem  |
