# SDKがインストール後に立ち上がらない

VketCloudSDKをインストール後に再起動しても立ち上がらない・VketCloudSDKタブが表示されない際は、Deeplinkパッケージが何らかの原因によって自動インポートされなかった可能性があります。<br>
手動でDeeplinkパッケージをインポートすることで解決する場合があります。

!!! warning "macOSをお使いの方へ"
    macOSとSafariを使用している環境において、Unity 2019とUnity 2022が同じ環境にインストールされている場合、[VketCloudSDKに正常にログインできない](../AboutVketCloudSDK/LoginSDK.md)事象が発生する場合がございます。  
    その場合、Unity HubからUnity 2022をアンインストールの上、OSを再起動の上、再度ログインをお試しください。

## Deeplinkパッケージの導入方法

1. **「Window→Package Manager」**でUnityのPackage Managerを開けます。

    ![InstallingDeeplink_1](./img/InstallingDeeplink_1.jpg)

2. Package Managerの`+`ボタンをクリックして、次の`Add Package from git URL / name`ボタンをクリックします。

    ![InstallingDeeplink_2](./img/InstallingDeeplink_2.jpg)

3. 以下のDeeplinkのURLをコピーします。<br>
    `https://github.com/needle-tools/unity-deeplink.git?path=/package`

4. Package ManagerのURLを入力する枠にDeeplinkのURLをペーストして、`Add`ボタンをクリックします。

![InstallingDeeplink_3](./img/InstallingDeeplink_3.jpg)

上記の操作が完了すると、Deeplinkパッケージのインストール用のプログレスバーが表示されます。<br>プログレスバーが消えると、Deeplinkのインストールが完了したことになります。

![InstallingDeeplink_4](./img/InstallingDeeplink_4.jpg)

インストールできたら、Package ManagerでDeeplinkのバージョンなどのインフォメーションが表示します。

![InstallingDeeplink_5](./img/InstallingDeeplink_5.jpg)
