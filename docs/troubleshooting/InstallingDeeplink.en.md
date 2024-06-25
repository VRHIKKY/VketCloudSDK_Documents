# SDK does not appear after install

If the VketCloudSDK does not boot after installing / show up on the tabs, there is high chance that the Deeplink package failed to be imported automatically.<br>
In such cases, the issue may be solved by manually importing the Deeplink package.

!!! warning "Note to macOS users"
    If you using macOS and Safari and Uniy 2019 and Unity 2022 are installed in the same environment, you may experience an issue where you cannot log in properly.  <br>
    In such case, please uninstall Unity 2022 from the Unity Hub, restart the OS, and try logging in again.

## How to import the Deeplink package

1. Open the Unity Package Manager window via **Window-->Package Manager**.

    ![InstallingDeeplink_1](./img/InstallingDeeplink_1.jpg)

2. Click the `+` button on the Package Manager, then click the `Add Package from git URL / name` button.

    ![InstallingDeeplink_2](./img/InstallingDeeplink_2.jpg)

3. Copy the Deeplink URL on below: <br>
    `https://github.com/needle-tools/unity-deeplink.git?path=/package`

4. Paste the Deeplink URL on the URL box of the Package Manager, then click `Add`.

![InstallingDeeplink_3](./img/InstallingDeeplink_3.jpg)

Completing the instructions above, the installation progress bar for the Deeplink package will appear.<br>
When the progress bar disappears, the Deeplink installation is completed.

![InstallingDeeplink_4](./img/InstallingDeeplink_4.jpg)

After completing the installation, the information of Deeplink (e.g. current version) will appear on the Package Manager.

![InstallingDeeplink_5](./img/InstallingDeeplink_5.jpg)
