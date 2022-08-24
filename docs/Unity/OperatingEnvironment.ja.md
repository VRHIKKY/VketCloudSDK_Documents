
# **Unity事前設定**
VketCloudSDKは、以下の環境が必要です。

- **Unity 2019.4.31f1**

該当のUnityをお持ちでない方は  
Step 1.Unity Hubのダウンロード([こちら](https://unity3d.com/jp/get-unity/download)より)  

Step 2.対応バージョンをダウンロード([Unity -Download Archive](https://unity3d.com/jp/get-unity/download/archive)から対応バージョンの「Unity Hub」ボタンを押す)  
![DownloadVersion](img/DownloadVersion.png)

## **Unity上での設定**
### Android Build Supportモジュールの設定
1. Unityの**Android Build Supportモジュール**をインストールする必要があります。
    ![AddModules](img/AddModules.jpg)
    ![AndroidSupportInstall](img/AndroidSupportInstall.jpg)  

2. インストール後、自身が作業するプロジェクトを開き、Build SettingsからPlatfromをAndroidに変更してください<br>
UnityのメニューバーのFileからBuild Settingsを選択し、Andoroidをクリックしてください
    ![PlatformSetting](img/PlatformSettings.png)  

3. Androidの項目にUnityのマークが表示されていれば設定されていれば本手順は完了です

### **API互換性レベルの変更**
1. UnityのメニューバーのEditからProject Settings...をクリックしてください  

2. Project Settingsウインドウが表示されたら、一覧からPlayerをクリックしてください  

3. PCの設定中にあるConfigurationを確認し、Api Compatibility Levelの項目をプルダウンメニューから「.NET 4.x」に変更してください
    ![ApiCompatibilityLevelSetting](img/ApiCompatibilityLevelSetting.png)


### **Color Spaceの変更**
Edit >Project Settingsより各項目を以下の通り設定します。

|  項目  |  値  |
| ---- | ---- |
| Player > Other Settings > Rendering > Color Space | Linear | 

   ![liner](img/liner.png)
