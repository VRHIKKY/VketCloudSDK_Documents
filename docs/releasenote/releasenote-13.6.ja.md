# 13.6.0

## HeliodorLib(ブラウザで表示されるワールドで使われているエンジン)

### バグ修正
- クリック移動のカーソルが手前のコライダーにヒットして大きく表示される問題を改善しました

### HeliScript
- Player.SetRotateにCameraRotateのデフォルト引数を追加しました
- アクティビティ側でも hsCreateItemByInstanceID() でItemのindexが正しく取れるようにした
- Item間でメッセージを送受信する機能
