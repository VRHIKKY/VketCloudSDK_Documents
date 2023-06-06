
# VketCloudSDKの動作環境
VketCloudSDKは、以下のUnity環境が必要です。

- **Unity 2019.4.31f1**

該当のUnityをお持ちでない方は[こちら](https://unity.com/releases/editor/archive){target=_blank}より対応バージョンをダウンロードしてください。

また、上記Unityバージョンを動作させるPC環境は以下を推奨します。

- Windows 10, 64-bit
- macOS 10.12+.

ならびに、VketCloudSDKでビルドしたワールドに入室する端末スペックは以下を推奨します。

- PC: Chrome / Firefox / Safari / Edge等のWebブラウザが使用できるもの。
- iOS: iPhone X以降、iPhone SE（第2世代）以降
- Android: Android 11.0以降、RAM 8GB以上（Google Pixelなら Pixel 5以降）

---
!!! warning API互換レベル 
    以下の項目は、SDKが自動で設定しますが、稀に設定が無効化されてしまう場合があります。
    その場合、手動で設定しなおしてください。

    **API互換性レベルの変更**

    1. UnityのメニューバーのEditからProject Settings...をクリックしてください。  

    2. Project Settingsウインドウが表示されたら、一覧からPlayerをクリックしてください。

    3. PCの設定中にあるConfigurationを確認し、API Compatibility Levelの項目をプルダウンメニューから「.NET 4.x」に変更してください。

    ![ApiCompatibilityLevelSetting](img/ApiCompatibilityLevelSetting.jpg)


    **Color Spaceの変更**
    
    Edit > Project SettingsよりColor SpaceをLinearに変更します。
    ![liner](img/liner.jpg)
