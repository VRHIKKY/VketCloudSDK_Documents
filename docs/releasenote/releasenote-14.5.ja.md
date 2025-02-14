# Version 14.5.6

## SDK(Unityでワールドを作るためのEditor拡張ツール)

## 修正された不具合
不具合内容：1月15日にリリースされた安定版 14.4.12ですが、10月30日にリリースされた最新版 14.2.1で実装された一部機能が実際には実装されていなかったことを確認いたしました。
現在、以下の機能においてロールバックの発生を確認しております。
- VKC Item ObjectのPickable
- VKC Setting Renderingの Tone Map
- VKC Item TextPlaneのFont Weight
- VKC Setting PlayerのEnable Click to Move
- VKC Setting PlayerのDespawn Height(y)
- VKC Item FieldのForce Collider Disable項目が追加

## パーティクルエディター
不具合内容：プロパティの数値入力欄をクリックし、数値を入力しても、数値が正常に反映されず、操作後はチェックボックスへの入力などが正常に行えなくなることを確認いたしました。
この不具合に関しては、現在ご利用いただけるパーティクルエディターのうち、下記のバージョンのVket Cloud SDKに含まれるパーティクルエディターが正常に利用できない状態を確認しております。
SDK14.4.12
SDK14.2.1
SDK13.7.7
SDK13.4.1
SDK12.3.4

## その他の不具合
SDK14.4.12を新規に導入した際、もしくは、Install WizardでSDK13.7.7→SDK14.4.12、SDK14.2.1→SDK14.4.12にアップデートした際に、ロードが終わらない場合がございます。
こちらに関しては、強制的にUnityを再起動すると問題なくアップデートが可能になります。
