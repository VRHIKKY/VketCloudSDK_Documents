# SDKがインストール後に立ち上がらない

VketCloudSDKをインストール後に再起動しても立ち上がらない・VketCloudSDKタブが表示されない際は、Deeplinkパッケージが何らかの原因によって自動インポートされなかった可能性があります。<br>
手動でDeeplinkパッケージをインポートすることで解決する場合があります。

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
