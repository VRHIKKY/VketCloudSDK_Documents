
# 動作環境
VketCloudSDKは、以下の環境が必要です。

- **Unity 2019.4.31f1**

該当のUnityをお持ちでない方は[https://unity.com/releases/editor/archive](https://unity.com/releases/editor/archive)より対応バージョンをダウンロードしてください。

## Unity上での設定
### Android Build Supportモジュールの設定
1. Unityの**Android Build Supportモジュール**をインストールする必要があります。

2. インストール後、自身が作業するプロジェクトを開き、Build SettingsからPlatformをAndroidに変更してください。

![AddModules](img/AddModules.jpg)
![AndroidSupportInstall](img/AndroidSupportInstall.jpg)  
![PlatformSetting](img/PlatformSettings.png)  

### **API互換性レベルの変更**
1. UnityのメニューバーのEditからProject Settings...をクリックしてください  

2. Project Settingsウインドウが表示されたら、一覧からPlayerをクリックしてください  

3. PCの設定中にあるConfigurationを確認し、Api Compatibility Levelの項目をプルダウンメニューから「.NET 4.x」に変更してください

![ApiCompatibilityLevelSetting](img/ApiCompatibilityLevelSetting.png)


### **Color Spaceの変更**
Edit >Project SettingsよりColor SpaceをLinearに変更します。
![liner](img/liner.png)
