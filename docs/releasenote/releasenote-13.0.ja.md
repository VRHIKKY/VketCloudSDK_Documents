# 13.0.0

## SDK(Unityでワールドを作るためのEditor拡張ツール)

### 新規機能
- HEOActivityにおいてのActivity編集機能
- File Deployment Config
- VKC Attribute Clickable UI
- VKC Node Alpha Animation項目の追加
- GUIToolsパッケージ配布

### 変更機能
- デバッグコンソールの新規項目
  - ヒエラルキー上で、HEO Fieldが多重に重なっている場合、エラーを出すようにする
  - fbxファイルのMesh設定のRead/WriteをEnableになっていない警告を表示する/Unityプロジェクトにインポート時に、FBXファイルのR/Wをtrueにする
- ２の累乗に圧縮する機能の高速化
- Avatar Fileの項目整理
  - Emotion項目を削除
  - Height項目の削除（Avatar のvrmからエンジン側で自動取得できるようにしている）
- HEOActivityのjsonの選択において、Assetsフォルダー内のjsonのみ検索できるようにする
- ファイルアイコン類アセット更新
- コンポーネントの名称変更
- 名称変更HEOObjectType → VKCNodeReflectionProbeDetectType
- Action TriggerのType PopUp の統廃合、統合後の状態の検討
- Basic Setting
  - World NameからWorld IDに項目のラベルを変更
  - File Deployment Config項目の追加
- Avatar Settings
  - デフォルトのavatarfile（Vketchan_v1.6_MToon_blendshape.asset、vketnyan等）を編集できないようにする（実装済み）
  - ファイルモード項目を追加（vrm/hrm）
  - Avatar Fileの項目整理
    - Emotion項目を削除
    - Height項目の削除（Avatar のvrmからエンジン側で自動取得できるようにしている）
- HEO ColliderのCollider Targetに新しい「プレーヤー」項目の追加

### 廃止機能
- ビルドオプション>UIなしビルド高速化機能の削除
- My Avatar Setting > Emotion機能
- Avatar File > Emotion機能

## HeliodorLib(ブラウザで表示されるワールドで使われているエンジン)

### 機能追加調整

- (HEOExporter)ゲームオブジェクトがルートに配置されていなくてもリフレクションプローブの親オブジェクトが正常に探査できるようにしました 
- 自分自身のプレイヤーの場合はカメラ範囲外でもモーション更新をおこなうようにしました 
- パーティクルエフェクトもDrawCallのカウントに含めるようにしました
- デバッガのRenderingに設定をクリップボードにコピーするボタンを追加しました
- type=objectのitemの丸影を下方向に衝突判定が起きる場所に位置を調整する"adjustposdownward"パラメータをSceneファイルに追加しました 
- 初回ローディングで20%で一時停止する問題を緩和しました 
- 表情BlendShapeの制限数を緩和しました 
- item単位でLightScatteringを有効にするかどうかを設定する"uselightscattering"をSceneファイルに追加
- クリック移動（ＰＣのみ利用可能）
- 足元にコライダーが無ければ丸影を描画しないようにしました
- HUD等のボタンクリック時にクリックしたことが分かりやすいように乗算カラー表示するようにしました
- GUI画像類の読み込みが完了するまでHUD等のボタンを非選択状態にするようにしました
- CanvasにUVAreaRateを追加 
- クリッカブルUIがシーンファイルだけで設定できるようになりました 
- インゲーム側のローディング画面表示要素の削除（全画面HTMLローディング対応）
- テキストチャットログウィンドウにエモートアイコン表示
- ターゲットフォーカス(クリック対象を注視する機能) 
- 同じタブでwebページを開くaction"transitiontopage"を追加
- Sceneファイルのitemに撮影モードで表示するかどうかのフラグ"showphotomode"を追加
- 向き直りモーションの追加 
- 切り返しモーションの追加 
- 汎用通知ウィンドウ 
- Sceneファイルのavatariconshowのデフォルト値をfalseに変更しました
- "DebugLog"actionの追加 
- HEOでもMToonのアウトラインマスクに対応
- CanvasやGUI画像のパックファイル化対応 
- AndroidChrome122からWebGL2.0を使っても画面が壊れなくなったので、122以降はWebGL2.0を使うようにしました
- 初回タッチ時のautoplay:true指定のクリック処理実行をアクティビティクラスでもおこなうようにしました 
- 撮影モードのプレビューの周囲を暗くし、枠を追加することによってプレビューであることを分かりやすくする 
- エモートサーバ対応 
- エモートポップアップについてはネームプレート表示フラグによらず描画するようにする 
- パーティクルItemのUnload処理を実装
- プリセットアバターを使用しているプレイヤーのダミーアバターインデックスはプリセットアバターインデックスから計算するようにしました 
- ネームプレートの幅を実際のフォント描画サイズで調整する 
- SceneファイルにTPSカメラＸ軸回転を許可する設定"tpsxrotateenable"を追加

### バグ修正
- type=camera使用時にTPSモードに切り替えるとそのカメラ位置がプレイヤー位置に反映されてしまう 
- (Script) 一部のItemTypeでGetPos/GetWorldPos/GetRotate/GetWorldRotateなどが正しい設定値を返さないバグを修正しました 
- SSAO使用時にR8ではなくRGBA8のテクスチャフォーマットが使われていた問題を修正しました 
- SeekBarのZ値をレイヤのマスクのZ値と同じにする 
- テクスチャサイズが取得できなかったときにApplyUVAreaが失敗を返すようにする 
- シークバーリサイズバグ 
- 効果音をStop()してonendedによって完了する前にPlay()を呼び出すとフリーズする
- アバターターゲットよりプロフィールボタンが上にくるようにした
- テキスト描画関連のバグ修正 
- ブロック時にリロードするとブロックされていない(反映に時間がかかる) 
- アクティビティクラス内のパーティクルエフェクトの位置がアクティビティクラスの相対位置にならない
- ブロックしてもリロード後にブロックユーザが表示される 
- ShadowMap使用時、アバターを切り替えると自分の影が描画されなくなる
- コライダーデバッグ表示時に誤ったモノが表示される
- 9sliceの表示がおかしい 
- 二本指ではボタンを押せないようにする 
- ボタン外をクリックしたのちカーソルを動かしてボタン内に入った際に押下処理が開始することがある 
- Button クライアント領域の外をクリックしても反応しないようにする 
- type=objectのItemをUnloadした後、Loadしても読み込まれない 
- ブラウザ環境で、ログ出力にシングルクォートが含まれるとJSの文法エラーになる問題を修正
- OnEnterView/OnLeaveViewでオクルージョンカリングされたものを対象から外す/返すように対応 

### 機能追加

アバター番号の取得）
- Player.SetControlEnabled（プレイヤー操作許可を設定する）
- Player.SetJumpVelocity（ジャンプ速度の設定変更）
- Player.SetPosにCameraRotateのデフォルト引数を追加し、falseが指定された場合がTPSモードではカメラ回転しないようにしました
- Json文字列とJsValの相互変換機能 
- hsLayerGetPortrait(), hsLayerGetLandscape()でパス指定のレイヤー検索ができるようにした
- hsLayerGet()でアクティビティCanvasを取得できるようにした
- LayerクラスにGUI操作用のメソッドを追加 
- Item.ChangeMotionにブレンド時間のデフォルト引数を追加しました
- Item.LoadMotion 
- hsCallComponentMethod(), hsCallCanvasComponentMethod() の追加 
- Item.SetBlendShapeRate 
- Item.SetPlayTime/GetPlayTimeを実装しました。type=objectの再生時間設定取得をおこなえます。
- Item.Pause/Restartを実装しました。type=objectのモーションに適用されます