# Actionについて

![ActionsListSample](img/ActionsListSample.jpg)

アクションは、ギミックを構成するパーツです。
アクションを使用することで、

- [新しいタブでWEBページを開く](./Web/Openweb.md)
- [アイテム表示/非表示](./Object/ShowHideObject.md)
- [コライダー有効化/無効化](./Node/EnableDisableCollider.md)
- [モーション](./Motion/Motion.md)の再生
- 音声ファイルやパーティクルなどの[アイテム再生/停止](./Item/PlayStopItem.md) ...etc

といった基本的なギミックを実装できます。

詳しい使い方については [VKC Attribute Action Trigger](../VKCComponents/VKCAttributeActionTrigger.md)のコンポーネントページを参照してください。

!!! 注意点 Info
    アクションを設定する上で重要なことは、以下のとおりです。
    
    - アクションはリストの上から順番に実行されます。
    - アクションによるワールドの変化は、ご自身の端末（ローカル）にしか反映されません。
    - Unityエディター上でのシーン再生機能には対応していません。アクションの設定が正しいか確認するには、Build And Runからブラウザで確認してください。