# ワールドアップロード

ワールドを制作したら、公開のためにVket Cloud / My VketのサーバーへSDKの機能を使ってアップロードすることができます。

## アップロード方法
  
1. メニューの「VketCloudSDK」から「Upload to Remote Server」をクリックしてください。

    ![UploadToRemoteServer](img/UploadToRemoteServer.jpg)

2. Unity上でポップアップが開くので、その中からアップロードしたい先のワールドを選択してください。

    ![WorldListForUpload](img/WorldListForUpload.jpg)

3. アップロードが完了するとダイアログが表示されます。

    ![UploadSuccess](img/UploadSuccess.jpg)

4. アップロードしたワールドへ入室するには、ワールドIDの管理画面から`check the world`をクリックしてください。

    ![CheckTheWorld](img/CheckTheWorld.jpg)

!!! note caution
    アップロード先ワールドは、アカウント管理画面であらかじめIDだけ作成しておく必要があります。<br>
    リストにワールド名が表示されない場合は、[こちら](https://cloud.vket.com/account/world){target=blank}よりワールドIDを作成してください。

    ![CreateWorldID](img/CreateWorldID.jpg)

!!! caution "複数シーンのアップロードについて"
    同プロジェクトで2つシーンを作成し、それぞれ別のワールドにアップロードした際、先にアップロードしたワールドが2つアップロードされてしまう事があったり、アップロード後に入場を試みた際に404 / ビルドエラーとなってしまうことがあります。<br>
    本現象の防止としては、異なるワールドのシーンを同じプロジェクトで管理しないようにすることが考えられます。<br>
    また、本現象が生じた場合は、プロジェクトを閉じた上でプロジェクトフォルダー内のuploadフォルダを削除し、プロジェクトを再起動して再アップロードを行う必要があります。
