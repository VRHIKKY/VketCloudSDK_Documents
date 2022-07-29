
# アップロード方法
Vket Cloud公式のサーバーをお使いの場合は、SDKの機能を使ってUnityから直接アップロードができます。  
Build and Runでできた「Release」フォルダ内のワールドがクローズドなリモートサーバーにアップされます。

ご利用にあたっては、まず「VketAccount」　https://account.vket.com/?locale=ja　の登録が必要です。

VketAccountを作って数日経過したら、以下の手順でアップロードができます。  
①トップメニューの「VketCloudSDK」から「Upload to Remote Server」をクリック  
②ブラウザ上でページが開き、VketAccountの認証コードが表示される  
③認証コードをコピーして、Unity側で表示された「VketCloudSDK」ウィンドウに入力し、「Submit」する  
④アップロードが完了して数分待つと、以下のURLからワールドに入れるようになります  
https://make-test.vketcloud.com/worlds/[VketID]/index.html  
※IDとパスワードは別途連絡が行っているはずです。  
※登録した以外のVketAccountでログインしているとエラーが出ます。

![WorldUpload](img/WorldUpload.jpg)