# Version 16.2.0

## HeliodorLib(ブラウザで表示されるワールドで使われているエンジン)

### HeliScript

#### 関数追加
- QuaternionクラスにLerp関数とSlerp関数を追加
- XYZの軸ベクトルからクォータニオンを計算するmakeQuaternionFromAxisを追加
- makeVector2Dotを追加
- 3Dのワールド座標を2Dのスクリーン座標に変換するhsInputWorldToScreenPosを追加
- hsMathMin・hsMathMax・hsMathClampを追加

#### 不具合修正
- 関数オーバーロードによりJsValの後方互換性がなくなっていた問題を修正
- 引数無しのOnResizeコールバックを追加
- privateメソッドがクラス外部からアクセスできてしまう不具合を修正