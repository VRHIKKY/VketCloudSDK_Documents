# 12.0.0

## HeliodorLib(ブラウザで表示されるワールドで使われているエンジン)

### バグ修正
- itemの移動で衝突判定ありの場合にワールド座標系で計算をおこなっていない
- MToonで頂点カラーの影響を受けないようにしました
- Webフォントが読み込まれなくなっている
- 近距離のダミーアバターのネームプレートが表示されない
- MacOS Chrome120で画面表示が壊れるようになったため、内部的にWebGL1.0を強制使用するようにしました
- 他ユーザーを一時ブロックするとアイコンがグレーアウトせず、アイコンが非表示になる
- ビデオテクスチャの場合は必ずClamp設定するようにしました（WebGL1.0で真っ黒になってしまうため）
- HeliScriptからのエモート実行でgtag呼び出しがおこなわれない
- 画面共有中のプレイヤーがタブを閉じたとき画面共有が終了せず、他のプレイヤーが画面共有を開始出来ない
- 圧縮テクスチャリストのprepareが終わるまでIsTextureLoadedがtrueにならないようにする
- エモートのセットを変更後、再読み込みするとエモートとアイコンが不一致状態になる
- PostLoadでオーディオ要素を初めて追加するときに失敗する
- メニューのアバターを押してアバタータブを開くとマイアバターとプリセットアバターのトグルが戻っていない
- 安定性向上のため、浮動小数点テクスチャ作成の際、WebGL1でのinternal formatの指定を間違えていたのを修正
- WebGL1.0使用時に動画テクスチャの差し替え元の設定がClampでない場合に画面が真っ黒になってしまうため、強制的にClamp設定におこなうようにしました
- Android Chrome 120で画面の描画が壊れてしまうようになったため、WebGL1.0を強制的に使用するようにし回避しました
- テキスト描画で不要なWebGL関数呼び出しがあったので削除しました
- EC連携関連の修正
- MyRoomButtonが機能するようにしました
- 地面に小さなオブジェクトがある場合、衝突判定が不安定になるためパラメータを調整
- ブロック中に一時ブロックできる
- 動画ウィンドウの再生ボタンの挙動を調整
- エモートのセットを変更後、再読み込みするとエモートとアイコンが不一致状態になる
- メニューのアバターを押してアバタータブを開くとマイアバターとプリセットアバターのトグルが戻っていない
- 一部iOSで関数呼び出し回数制限でエラー停止する場合がある
- iOS16.4以前でメモリ範囲外アクセスが発生している
- 動的にUI要素生成時にメモリ範囲外アクセスが発生する場合がある
- プリセットアバター選択後、タブがプリセットアバターから戻っていない
- 旧UIでMovieViewerの全画面表示をやめると全てのUIが消えてしまう
- 画面共有終了後でも新しくプレイヤーがジョインしてきた場合、全員に画面共有開始の通知を送ってしまう
- glTFモデルでレンダリングが一部暗くなる
- UIクローンを使うとテキストが表示されない
- アバター表示数と、マイク許可の英訳の修正
- ブロック相手がテキストチャットから見える
- 「ブロックされた側」がリロードすると、ブロックされた側からブロックした側が見える
- 一時ブロック解除したのに、ブロック解除された側からブロックユーザーが見えない
- (ParticleEditor)Particleを複数作るとGUIが増殖
- glbオブジェクトのバウンディングボックス計算でWorldMatrixを考慮するようにした

### UI機能追加・調整
- Canvasに遅延ローディングを設定しました
- 9slice
- UVArea

### UIバグ修正
- ボイスチャットのチャンネル名から20文字制限を除く
- 動画再生ウィンドウの再生ボタンの表示が元に戻らない
- ワールド詳細UIの判定が大きすぎる
- 名前を20文字より多く入力してもエラーにならないようにしました
- スライダーのオンとオフのつまみをスライドできるようにしました

### 機能追加調整
- Carnelian対応
- カメラを遮るオブジェクトをアルファブレンドで非表示になる機能を実装しました
- エモート実行時にネームプレートの上にポップアップ表示
- アクションパレットの表情切り替え追加
- キック・ＢＡＮ機能の有効化
- アクティビティクラスで使用するため、Sceneファイルのルートに”motions”の指定を出来るようにしました
- コンフィグにエリア情報の表示
- TPSカメラの最大距離を10.0mに変更し、Sceneファイルの"camera"で"tpsmaxdistance"にて変更出来るようにしました
- カメラの左中央右の設定幅を２倍に変更しました
- Sceneファイルのitemsのpropertiesの記述方法を変更しました（古い方式でも読み込めます）
- ゲストユーザーアイコンを灰色のシルエットのものに統一しました
- iOSでhel_openPageを非同期で呼び出した場合別タブを開けないが、その場合同一ページに開く仕様に変更しました
- 初回ローディングの比率をCanvasとGUIとで５０％を割り当てました。
- AutoLoadingがfalse指定のレイヤーの画像は読み込み優先度を下げるようにしました
- コンフィグに低解像度レンダリング使用設定を追加
- コンフィグにSSAO設定を追加
- SSAOに対応し、Sceneファイルに設定を追加
- devicePixelRatioを参照するようにし、viewportでwidth=device-width指定された場合でも正しいスケールになるようにしました。
- glTFボーンアニメーション対応
- 表情エモーション対応
- PCでは60fps前後になるように調整しました
- 自身が非アクティブになった時に自分以外のマイアバターを一時的にダミーアバターに差し替える
- マイアバターを使用中のユーザーが非アクティブになった時ダミーアバターに一時的に差し替える
- Sceneファイルのrenderingにlightmapintensityを追加しました。
- Sceneファイルのrenderingにlightintensityを追加しました。
- F2キーによるデバッグ機能にSprite,Textureを追加しました
- 移動速度のイージングを実装しました
- MyAvatarListのPagerを実装しました
- VarianceShadpwMapの閾値を修正（影が細る現象を修正するため）
- Fresnelの計算を調整
- テキストテクスチャの座標補正を修正
- クリップ矩形によってTextImageの描画をクリップする
- VRM/MToonアウトライン描画のときにもテクスチャを有効にするようにした
- VRMのMixedLightingに対応した
- キャラクリック判定をカプセル型に変更
- Sceneファイルのitemプロパティに"forcecollidertargetavataronly"を追加し、コライダーターゲットを強制的にAvatarOnlyに出来るようにしました。
- ダミーアバターの表示時のネームプレート高さを固定しました
- アバター変更時ロード待ちにダミーアバターを表示する
- プレイヤーのアバターロード中もネームプレートを表示するように変更
- マイアバター選択画面にページ切り替えを実装しました
- ブラウザが非アクティブになったときに一時的にダミーアバターに切り替えるようにしました
- MirrorのNodeかItemViewが非表示のときは鏡の処理をスキップする
- デバッグステータスにテクスチャメモリ使用量を表示するようにしました
- (HRMExporter)テクスチャが存在しない場合でもASTC, ETC2タイプのHRMを書き出すようにしました

### Heliscript
- int,float型の文字列化メソッド名をToString()に変更
- アクティビティに設定されたモーションを再生するPlayer.ChangeActivityMotion(), SetNextActivityMotion() を追加
- 入れ子になったアクティビティにも対応できるように、hsItemGet()などの関数の “/” 区切り処理を修正
- HeliScriptからGtagの送信に対応するため、hsSendGtag() を追加。
- アクティビティの中にあるItemのコンポーネントから、hsNetSetCustomState() と hsNetSendCustomData() にを呼び出した場合に、正常にカスタムステートとカスタムデータをよう修正しました。
- 直前にタップしたものと異なる種類のオブジェクトをタップした際に、コンポーネント側で OnUnselectNode() と OnUnselectAvatar() イベントを受け取れるようにしました。
- HEOObject に設定したHeliScriptのコンポーネントから SetUVOffset() を呼べるようにしました。
- アクティビティ内のItemのコンポーネントから呼び出すことで、親(アクティビティのItem自身)を取得するItem.GetParentItem()を追加しました。
- 実行環境がモバイルか、そうでないかを判別する hsIsMobile() を追加。
- stringに Split() メソッドを追加。
- Itemプロパティ変更時に OnChangedProperty() コールバックが呼び出されるようにしました。
- AreaCollider に張り付いたコンポーネントで、Update()コールバックを受けられるようにしました。
- "object"タイプでもItem.SetUVOffsetが利用できるようにしました
- アクティビティの親を取得する Item.GetParentItem() を追加
- hsIsMobile() の追加
- string.Split()追加
- hsCameraGetPos(), hsCameraGetPosVector3() の追加。カメラの位置を取得する関数
- hsMD5HashFromString() の追加
- hsGetDateLocal() の追加

## SDK(Unityでワールドを作るためのEditor拡張ツール)

### バグ修正
- 外部のVRMの読み込むエラーを修正
- HEMプレビューのエラー修正
- クリップ出力時に最終フレームが出力されない場合があるバグを修正しました
- UI上で対象のオブジェクトが更新された瞬間にシーンの更新マークが表示されるように修正
- UpdateTextureListを押したとき発生するバグを修正
- HEM可視化エラー修正
- MyAvatarが編集できないエラーを修正
- 3D Item>HEOファイルが無くなったエラーを修正

###　機能追加
- HEO系のコンポーネントに詳細オプション(Advanced Options)のアコーディオンを作る
- OtherSettings/Gitignoreをテンプレから呼び出すボタンを追加
- Fast Build without UI機能を追加（CanvasList.jsonをビルド時にemptyにする
- ActionsにEnableNode, DisableNodeを追加しました
- HEO、VRM、HEMのインスペクターでのプレビュー
- HEOBackgroundColorを追加しました
- VRMファイルの読み込みのシェーダーをMToonに設定
- Priorityの項目を追加してItemがPriorityの値でソートされるように設定
- HEOTextPlaneにCharacter Space機能を実装
- ログイン失敗時に登録していないことへのメッセージを出す
- EditorOnly タグをつけたItem/Nodeオブジェクトはビルドから除外される
- VketCloudSettingsのSettingsにライセンスプランの表示にチーム名を表示するようにした
- 安全なファイルかどうかバイナリを解析する機能を追加
- Disable Nodeがworld.jsonに書き込まれるよう修正しました
- チュートリアルシーンのインポート導線の追加「Menuからのインポート」「独立したLearning画面」
- インポートしたチュートリアルの最初に該当するシーンをPing、ロードする機能を実装
- VketCloudSDKからcom.hikky.heliodorlibにPackage Directoryを変更
- 右クリックで項目を追加
- 主要モジュールの動作安定化の上、機能改善
- 「HeliScript」日本語表示変更
- UX/UIを分解してVketCloudSettingを使用
- 設定画面アイコン改修
- videotiggerのオーバーライドをHEOFieldからVideoTriggerに移した
- HELScript hsファイルを直接指定した際にHEOScriptの方のリストに追加されるようにする
- Export Fieldの処理後にAssetDatabse.Refreshを更新
- ワールドアップローダー画面の機能追加実装(Ver.2.0)
- Rendering SettingにIBLにdiffuse,specularを設定する機能を追加
- Debug Console 2.0を実装
- アバターアイコン表示メニュー追加
- TextureImportViewer2.0を実装
- Activity可視化と編集機能
- VRMデータ圧縮プロセスをオプションにExport Process Systemに追加
- 優先度設定UI機能の追加

### 機能変更
- .heo or .vrm > .heo or .vrm or .glbに変更
- EssentialObjectsGenerator.csのDespawnHeight値を-1から-10に更新
- HEOActivityUIを改修しました。
- SearchTextインプットフィールドに初期フォーカスが設定されるように修正
- アクションをカテゴリー毎に表示する仕様に変更しました
- ボタンの一覧をpackage.json、Samples~ディレクトリから動的に表示するように変更
- HEOAudioのAudioTypeからSystemSEを削除しました

### パーティクルエディタ
- 特定条件でのセーブ時にエラーが出るバグを修正
- 機能していないものをUIから削除
- Scaleプロパティの挙動変更
- EmissionパラメータのRate over Distanceが機能するようにした
- 一部値域を[0,1]にした
- ShapeのHemiSphereがUnityのものと比較して-90°回転している問題を修正
- Positionを変更すると、二重に平行移動してしまう問題を修正
- ColorOverLifetimeModuleのColorKeyでアルファも保存するようにした
