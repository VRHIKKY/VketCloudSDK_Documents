# How to install VketCloud SDK

To install VketCloud SDK, you need to use the Package Manager of Unity.
  
---
### Step 1. Open a project in Unity
Open a project of a supported version ([Unity Pre-prep](OperatingEnvironment.md){target=_blank}) or create a new project.
Select "3D" as the template, if you need one.

!!! note caution
If you put a space in the project name, the build may fail.
OK) MyProject NG) My Project

---
### Step 2. Register Registry information
Open the "Project Settings" window from the Unity menu Edit > Project Settings.
  
Select "Package Manager" from the left tab in the window and describe as follows.
  
| item | value |
| ---- | ---- |
| Name | VketCloudSDK Install Wizard |
| URL | https://registry.npmjs.com |
| Scope(s) | com.hikky.vketcloudsdk-install-wizard |  

   ![Package](img/package.jpg)
  Finally, press the "Save" button to save the settings.
  
---
### Step 3. Install VketCloudSDK package from Package Manager
  
Open the "Packages" window from Unity's menu Window > Package Manager.

Select "My Registries" from the dropdown at the top of the window.

   ![registry](img/registry.jpg)

Select VketCloudSDK from the displayed list and press the “Install” button to start the installation.<br>
As on default the latest SDK version will be installed, follow the instructions below if you want to [install a specified version](#installing-a-specified-version--updating-an-existing-sdk).

Installation is complete if the item "VketCloudSDK" is added to the Unity menu.

![InstallationWizard_Window](img/InstallationWizard_Window.jpg)

![InstallationWizard_Menu](img/InstallationWizard_Menu.jpg)

## Step 4. インストールウィザードを使用してSDKをインストールする

新規にSDKをインストールする際はSDKインストールウィザードを使用します。

1\. Unityのメニューから SDK Installation Wizardを選択します。

![InstallationWizard_Menu](img/InstallationWizard_Menu.jpg)

    インストールウィザードを開くと、以下の画面が起動します。

![InstallationWizard_Window](img/InstallationWizard_Window.jpg)

2\. 「次へ」ボタンを押して、言語設定画面に移動します。言語設定画面でWizard内で使用する言語を設定できます。

![InstallationWizard_2_en](img/InstallationWizard_2_en.jpg)

3\. VketCloud SDKの初期設定をガイドする画面です。主に三つの設定を完了させてください。<br>初期設定しないことも可能ですが、その場合、SDKの動作保証はできません。

![InstallationWizard_3_en](img/InstallationWizard_3_en.jpg)

4\. 設定が完了されるとそれぞれの設定項目の左にチェックマークが表示されます。<br>設定されない状態で「次へ」ボタンを押すと以下警告画面が表示されます。

![InstallationWizard_4_en](img/InstallationWizard_4_en.jpg)

5\.「次へ」ボタンを押すと、バージョン選択画面が表示されます。<br>安定版、最新版、バージョンアーカイブからバージョンを選択できます。

!!! note caution
    バージョンアーカイブ内のバージョンは廃止が予定されております。<br>新規のワールド制作には使用しないようご注意ください。

![InstallationWizard_5_en](img/InstallationWizard_5_en.jpg)

6\. バージョンを選択し、インストールボタンを押すとパッケージのインポートが開始します。

![InstallationWizard_6_en](img/InstallationWizard_6_en.jpg)

7\.　およそ２～５分待つと、インストールが完了して以下の画面が表示されます。この画面からSDKマニュアルやコミュニティDiscordサーバーへとアクセスできます。

![InstallationWizard_7_en](img/InstallationWizard_7_en.jpg)

# 任意のバージョンの導入・既存バージョンSDKのアップデート

既にSDKを導入しているプロジェクトについては、SDK Version Managerを使用してバージョンの切り替え・アップデートが可能です。<br>
また、以前のSDKバージョンのようにPackage Managerあるいはmanifest.jsonの編集によるバージョン切り替えも引き続き利用可能です。

## SDK Version Managerによるバージョン切り替え

1\. VketCloudSDK_Wizard > SDK Version Managerを押して、バージョン選択画面が表示されます。

![SDKVersionManager_1](img/SDKVersionManager_1.jpg)

2\. バージョン選択画面でバージョンを選択し、インストールボタンを押してください。

!!! note caution
    バージョンアーカイブ内のバージョンは廃止が予定されております。<br>新規のワールド制作には使用しないようご注意ください。

![InstallationWizard_5_en](img/InstallationWizard_5_en.jpg)

3\. インストールボタンを押すと、インポート画面に移動します。

![SDKVersionManager_3_en](img/SDKVersionManager_3_en.jpg)

4\. インストールが完了すると、バージョン選択完了画面が表示されます。

![SDKVersionManager_4_en](img/SDKVersionManager_4_en.jpg)

この画面からSDKマニュアルやコミュニティDiscordサーバーへとアクセスできます。

!!! note caution
      既存のSDKのバージョンアップを行う際、アップデート後にComponentが欠落する現象が確認されています。<br>
      バージョンアップを行う際はプロジェクトの複製などによってバージョンアップ前の状態のバックアップを取ることを強くおすすめします。

### Version switching via Package Manager

After registering the registry information on [Step 2.](#step-2-register-registry-information), open the Package Manager via "Window" --> "Package Manager".<br>
In the Package Manager, make sure that the VketCloudSDK shows up on switching the registry view to "My Registries".<br>

![SetupSDK_PackageManager_1](./img/SetupSDK_PackageManager_1.jpg)

On selecting "See all versions", all released SDK versions will be listed.<br>
Select the SDK version to be installed, then proceed by selecting the "Install" or "Update to [Version]" on the bottom right to install the SDK.

![SetupSDK_PackageManager_2](./img/SetupSDK_PackageManager_2.jpg)

### Version switching via manifest.json

Editing the manifest.json is also available for switching versions.<br>
To open the project's manifest.json, right click on the Project window and select "Show in Explorer", which enables to locate the file in "Projects"-->[Project Name]-->"Packages".

![SetupSDK_ManifestJson_1](./img/SetupSDK_ManifestJson_1.jpg)

![SetupSDK_ManifestJson_2](./img/SetupSDK_ManifestJson_2.jpg)

By editing the version number on the right side of `"com.hikky.vketcloudsdk"`, the installing / updating version will be switched.

![SetupSDK_ManifestJson_3](./img/SetupSDK_ManifestJson_3.jpg)

!!! note 
      If VketCloudSDK fails to show on the Unity menu, it may appear by rebooting the editor.<br>
      One of the reasons may be the lack of essential SDK packages, as the Deeplink package may fail to be imported automatically.<br>
      If such cases occur, please try a [manual package import](../troubleshooting/InstallingDeeplink.md).<br>
      
      As the EditorTutorialSystem may also rarely fail to be imported automatically, add the package below following the instructions on [Step 2.](#step-2-register-registry-information) on such occurence.

|  item  |  value  |
| ---- | ---- |
|  Name  |  EditorTutorialSystem  |
|  URL  |  https://registry.npmjs.org  |
|  Scope(s)  |  com.hikky.editortutorialsystem  |