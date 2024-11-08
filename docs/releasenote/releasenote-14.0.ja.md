# Version 14.1.0

## HeliodorLib(ブラウザで表示されるワールドで使われているエンジン)

### バグ修正
- エモートリストの数が12の倍数の時に、最終ページが空のリストになる 
- エモートパレットを表示して再び非表示にしてもUI当たり判定が残っている 
- hsCanvasAddGUIでtype:Textが機能していない 
- シャドウマップ使用時、シャドウキャスターが１つも存在しないとプレイヤーの影も消えてしまう 
- iOSでタブ非アクティブから復帰後にBGM再生が再開されないので、非アクティブ時に音楽をsuspendしてアクティブ後のタップでresumeして復帰するようにしました。 
- 起動時にエラー停止する場合がある（未初期化のHeliodorに対するJS側からのアクセスを拒否） 
- エモート非サーバ時に、エラーログが出力される 
- ItemCamera使用時、componentのUpdate関数内でhsCanvasWorldToScreenPosを呼び出すとデフォルトカメラの座標を返してしまう 
- PlaneItemにHSからSetRotateしたあと、見た目がおかしくなる場合がある 
- adjustposdownward=trueが指定されている場合は、HSからのSetPosで丸影がオブジェクトと同じ位置に戻ってしまう 
- 縦画面の撮影プレビューの上下に白の余白が大きすぎる 
- TextPlaneアイテムのSetRotate/GetRotateで内部で保持する回転順序が描画と異なり見た目がおかしくなる 

### 機能追加調整
- 一部ビデオメモリの消費量を削減しました 
- Sceneファイルのitems-overridesに"uvscale","uvoffset"を追加しました 
- トーンマッピング機能を追加しました。Sceneファイルの”rendering”-”tonemap”で設定出来ます。 
- Sceneファイルのitems-overridesにマテリアルカラーを上書き設定する”materialcolor”を追加しました 
- 設定にエモート吹き出しを追加しました 
- Sceneファイルでクリック移動のデフォルト値を指定出来るようにしました(X埋め込み時は強制オン) 
- itemのコライダーを強制的に無効にする”forcecolliderdisable”設定を追加しました 
- アイテムピックアップ機能 
- スケールを含む法線計算の改善 
- Webカメラモーションキャプチャ機能 
- スプライトデバッガにクリックエリアサイズを追加しました 
- textplane itemでフォントの太さを指定する"fontweight"を追加しました 
- アクティビティクラスの鏡も描画されるように対応しました 
- canvasカテゴリーのcallscriptでグローバル関数呼び出しに対応しました 
- GUI要素上にマウスカーソルがある場合はクリック移動カーソルを非表示にするようにしました 
- 使われなくなったCanvasListの"WorldList"を削除しました 
- クリック移動でクリックした位置に近い場所で停止するように調整しました 
- Sceneファイルの"player"に"forcerespawny"を追加し、プレイヤーのＹ座標が指定値以下になれば強制的にリスポーンするようにしました 
- ItemPlaneでzwriteenableの設定を有効にしました 
- テキストチャット受信時にリストを開いていなければバッチが表示されるようにしました(種類は判別していない) 
- 各種ネットワーク関連エラー発生時にダイアログを表示するようにしました 
- 自分自身のプレイヤーはカメラ範囲外でも入力処理によるモーション更新をおこなうようにしました 
- アクティビティからのリソースアクセス時に、CDNではなく常にローカルURLを参照させる 
- VRMAアニメーションフォーマット対応 
- 共通トーストの表示時間を8秒に変更しました 
- HEOテクスチャパックファイル対応 
- MToonの見た目の再現性向上（UniVRMの実装に基づき、ShadeColorのアルファではなくColorのアルファをアルファとして採用した） 
- TextPlaneの文字描画バッファをまとめて高速化しました 
- ローディング関連の改善（LoadWorkerで効果音以外はPostLoadのリストに追加せず、PlayerObjectなどが次のクリックまでメモリを保持し続けないようにしました） 
- モーダルウィンドウ機能 
 
### HeliScript
- bgm,seタイプのItem.IsLoadedの実装 
- Layer.GetToggleState,hsCanvasToggleGetStateの追加 
- DateクラスにTimeSpan関連のメソッドの追加 
- キーダウン状態の取得と抑止する設定関数hsInputIsKeyDown,hsInputSetKeyValidを実装しました 
- Func<T>でlistを扱う際に、nullを許容する対応 
- 現在表示されているレイヤーを一時的に非表示にして後で復帰させるhsCanvasSuspendVisibleLayers/hsCanvasResumeVisibleLayersを実装しました 
- hsGetSDKVersion() 
- マテリアルの色を設定するItem.SetMaterialColor()を実装しました 
- アイテム単位でα値を設定するItem.SetAlpha()を実装しました 
- サーバー側の時刻で補正されたDateクラスを生成する機能 
- type=planeでもItem.SetUVScale/SetUVOffsetを利用出来るようにしました 
- Cookieの読み書きを行う機能 
- hsWebReload() 
- マニュアルにItem.GetNumofPolygonを追加しました 
- デリゲートの引数と戻り値に、基本型のlistを使えるようにした 
- Item.ReplaceTexture() を実行後、元のテクスチャに戻すReplaceBackupTexture()の実装 
- Item.SetUVScale 
- 三項演算子でクラスインスタンスを扱えるようにした 
- レイヤーが閉じた際にコールバックされるコンポーネントメソッドの OnCloseLayer() を追加 
- Player.ResetVelocity() の説明を追加 
- hsNetGetSpatiumCode() で常にメインシーンのコードを見にいくようにした 
- Dateクラスの追加 
