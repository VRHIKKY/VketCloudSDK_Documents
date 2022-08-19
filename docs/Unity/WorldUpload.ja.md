
# アップロード方法
Vket Cloud公式のサーバーをお使いの場合は、SDKの機能を使ってUnityから直接アップロードができます。  
Build and Runの実行によって生成された「Release」フォルダー内のワールドがクローズドなリモートサーバーにアップロードされます。

## コンテンツのアップロード  
  
1. メニューバーの「VketCloudSDK」から「Upload to Remote Server」をクリックしてください
2. ブラウザ上でページが開き、VketAccountの認証コードが表示されます
3. 認証コードをコピーして、Unity側で表示された「VketCloudSDK」ウィンドウに入力し、「Submit」をクリックします  
4. アップロードが完了すると「Successfully uploaded!」と表示されるので、OKをクリックしてください<br>
![Successfully uploaded](img/SuccessfullyUploaded.png)
5. アップロードが完了して数分待つと、以下のURLからワールドへ入れるようになります<br>
https://make-test.vketcloud.com/worlds/<span style="color: red;">[VketID]</span>/index.html  

※IDとパスワードは別途連絡が行っているはずですので必ずご確認ください。  
※事前に登録したVketAccount以外でログインしている場合はエラーとなります。

![WorldUpload](img/WorldUpload.jpg)