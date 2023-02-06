
# アップロード方法
Vket Cloud公式のサーバーをお使いの場合は、SDKの機能を使ってUnityから直接アップロードすることができます。  
Build and Runの実行によって生成された「Release」フォルダー内のワールドが、クローズドなリモートサーバーにアップロードされます。

## コンテンツのアップロード  
  
1. メニューバーの「VketCloudSDK」から「Upload to Remote Server」をクリックしてください
2. ブラウザ上でページが開き、VketAccountの認証コードが表示されます
3. 認証コードをコピーして、Unity側で表示された「VketCloudSDK」ウィンドウに入力し、「Submit」をクリックします  
4. アップロードが完了すると「Successfully uploaded!」と表示されるので、OKをクリックしてください<br>
![Successfully uploaded](img/SuccessfullyUploaded.png)
5. アップロードが完了して数分待つと、以下のURLからワールドへ入れるようになります<br>
https://lab.vketcloud.com/make-test/worlds/<span style="color: red;">[VketID]</span>/index.html 

※IDとパスワードは、ベータユーザー登録の際に別途ご連絡をお届けしています。そちらをご確認ください。  
※事前に登録したVketAccount以外でログインしている場合はエラーとなります。

![WorldUpload](img/WorldUpload.jpg)
