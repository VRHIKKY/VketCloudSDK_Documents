# ワールドアップロード

ワールドの制作が完了したら、公開のためにVket Cloud / My VketのサーバーへSDKの機能を使ってアップロードすることができます。

また、ワールドが非公開の状態で複数人でワールドテストを行いたい際もアップロードを行う必要があります。

## アップロード方法
  
1. メニューの`VketCloudSDK`>`Upload to Remote Server`をクリックしてください。

    ![UploadToRemoteServer](img/WorldUpload01.jpg)

2. `Upload to Remote Server`をクリックすると、World Uploaderウィンドウが開かれます。

    ここでは[Vket Cloud](https://cloud.vket.com/account/world){target=blank}公式サイトにてあらかじめ発行したワールドIDとそれに紐づいている情報（ワールド名、サムネイル、ワールド説明）が一覧表示されます。

    アップロードしたいワールドIDを選択してください。

    ![WorldListForUpload](img/WorldUpload02.jpg)

    また、[Basicプラン](https://cloud.vket.com/plan){target=blank}以上のライセンスを使用している場合、チーム制作機能が解放され所属チームと管理しているワールドの表示の切り替えが左上のチーム名より行えます。

    ![TeamName](img/WorldUpload03.jpg)

    `World Preview`を選択すると、アップロードされたワールドが確認できます。<br>
    まだアップロードされていない初回の状態では何も表示されないためご注意ください。

    ![CheckTheWorld_WorldUploader](img/WorldUpload04.jpg)

    `Upload`を選択すると、アップロードを行うか確認するウィンドウが表示されます。<br>
    `Yes`を選択するとアップロードが開始されます。

    ![WorldUpload](img/WorldUpload05.jpg)

    ![UploadConfirmation](img/WorldUpload06.jpg)

3. アップロードが完了すると以下のように成功した旨のダイアログが表示されます。

    ![UploadSuccess](img/WorldUpload07.jpg)

4. アップロードしたワールドへ入室するには、[ワールドIDの管理画面](https://cloud.vket.com/account/world){target=blank}から`World preview`をクリックしてください。

    ![CheckTheWorld_Web](img/WorldUpload08.jpg)

    また、World Uploader内の`World preview`を選択しても同様にアップロードされたワールドが確認できます。

    ![CheckTheWorld_WorldUploader](img/WorldUpload04.jpg)

!!! caution "アップロードの反映タイミングについて"
    サーバーの内部処理・通信環境によって、アップロードされたワールドの更新に5~15分程度かかります。<br>
    アップロード / ワールド更新後に`World preview`を選択し、ワールドの更新が反映されていない際はしばらくお待ちください。

!!! note "アップロード時のビルドオプションについて"
    [VketCloudSDK Settings](../SDKTools/VketCloudSDKSettings.md)では、Build & Run及びワールドデータのアップロード時にエンジン側でファイルを圧縮するか否かを[設定できる機能](../WorldEditingTips/BuildOptions.md)があります。<br>
    本機能を使うことによって、スマートフォンなど軽量さが要求される環境での動作を改善させられます。<br>
    アップロードにかかる時間が長い・ビルドに失敗する場合は本設定を見直すか、[ビルドエラー / ワールドが動かないときは](../troubleshooting/BuildError.md)をご参照ください。

## ワールドの公開について

公開されたワールドは、My Vketの[ワールド一覧](https://vket.com/play/world){target=blank}にて一覧化されて表示されます。

また、非公開の状態でURLを共有すると、My Vketでは非公開の状態でワールドにアクセスできるようになります。<br>
複数人でのテスト、限定的な公開を行いたい際に有効です。<br>
新規ワールドIDを作成すると、始めは非公開ワールドとして作成されます。公開したい場合は、ワールド管理画面より`ワールドの公開設定`を選択し、`公開`を選択してください。

![WorldPublish](img/WorldUpload09.jpg)

!!! note caution
    アップロード先ワールドは、アカウント管理画面であらかじめIDだけ作成しておく必要があります。<br>
    リストにワールド名が表示されない場合は、[こちら](https://cloud.vket.com/account/world){target=blank}の`ワールドを追加`ボタンよりワールドIDを作成してください。

![CreateWorldID](img/WorldUpload10.jpg)

!!! caution "複数シーンのアップロードについて"
    同プロジェクトで2つシーンを作成し、それぞれ別のワールドにアップロードした際、先にアップロードしたワールドが2つアップロードされてしまう事があったり、アップロード後に入場を試みた際に404 / ビルドエラーとなってしまうことがあります。<br>
    本現象の防止としては、異なるワールドのシーンを同じプロジェクトで管理しないようにすることが考えられます。<br>
    また、本現象が生じた場合は、プロジェクトを閉じた上でプロジェクトフォルダー内のuploadフォルダを削除し、プロジェクトを再起動して再アップロードを行う必要があります。
