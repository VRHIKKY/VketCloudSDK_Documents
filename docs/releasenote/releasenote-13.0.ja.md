# Version 13.0.0

## SDK (Editor extension tools for creating worlds in Unity)

### New Features
- **HEOActivity Editing:** Added functionality for editing HEOActivity.
- **File Deployment Config:** New configuration options for file deployment.
- **VKC Attribute Clickable UI:** Added clickable UI attributes within VKC.
- **VKC Node Alpha Animation:** Added alpha animation options for VKC nodes.
- **GUITools Package Distribution:** Distributed the GUITools package for enhanced GUI editing capabilities.

### Modified Features
- **Debug Console Updates:**
  - Now throws an error if HEO Fields are overlapping in the hierarchy.
  - Displays a warning if the Mesh setting 'Read/Write Enabled' is not active in FBX files when imported into Unity projects, and automatically sets FBX file R/W to true.
- **Compression Function Speed Improvement:** Enhanced the function to compress to powers of two for faster operation.
- **Avatar File Organization:**
  - Removed the 'Emotion' field.
  - Removed the 'Height' field (now automatically retrieved from the avatar's VRM by the engine).
- **HEOActivity JSON Selection:** Restricted search functionality to JSON files within the Assets folder only.
- **File Icon Asset Updates:** Updated the asset for file icons.
- **Component Name Changes:** Renamed various components.
- **Name Change from HEOObjectType to VKCNodeReflectionProbeDetectType.**
- **Action Trigger Type PopUp Consolidation:** Reviewed and consolidated the states of Type PopUp for Action Triggers.
- **Basic Settings:**
  - Changed the label from 'World Name' to 'World ID'.
  - Added 'File Deployment Config' settings.
- **Avatar Settings:**
  - Made default avatar files (e.g., Vketchan_v1.6_MToon_blendshape.asset, vketnyan) non-editable.
  - Added a new 'File Mode' setting for avatar files (options include VRM/HRM).
- **HEO Collider Updates:**
  - Added a new 'Player' option to Collider Target settings.

### Deprecated Features
- **Build Options > UI-less Build Acceleration:** Removed the feature that sped up builds without UI.
- **My Avatar Setting > Emotion:** Removed the Emotion functionality.
- **Avatar File > Emotion:** Removed the Emotion functionality from avatar files.

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

### HeliScript

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