!!! note
    3.5系のリリースはスキップしました。ただし、以降のバージョンでも以下の機能修正は取り込まれています。

# 3.5.4
- 別タブに遷移して戻ってきたときに音量が復帰しない場合があるバグを修正しました。

# 3.5.3
- Androidの一部の機種でLightMapの精度が低いバグを修正しました。
- ワールド遷移後にローディングが失敗する場合があるバグを修正しました。
- Bloomがオフの場合でもBloom値が書き込まれるバグを修正しました。
- releaseディレクトリを開くメニューを追加しました。

# 3.5.2
- PCで見えないジャンプボタンがクリック出来てしまうバグを修正しました。
- ボーンアニメーション時に法線が再計算されないバグを修正しました。
- 撮影モードでチャットログビューが表示されたままになるバグを修正しました。
- チャットログビューが縦画面の時にテキストがズレてしまうバグを修正しました。
- コンフィグのネームプレート非表示設定が反映されないバグを修正しました。
- 吹き出しの２回目の表示状態が異なるバグを修正しました。
- Pixel6でBloomが動作しないバグを修正しました。
- ダミーアバターの設定フィールドを追加しました。
- HepExporterを削除しました。

# 3.5.1
- SpringBoneを持たないVRMのモーションが正しく再生されないバグを修正しました。

# 3.5.0
- HeliScriptを公開しました。
- コライダーによる遮断時のカメラ挙動を調整しました。
- 一定距離以上はダミーアバターを表示するようにしました。（Sceneファイルに"dummyavatar"の追記が必要です）
- actionにopenmovieviewerを追加しました。
- 画面外のアバターのモーション処理をおこなわないようにして高速化しました。
- アバターの自動まばたきを実装しました。
- アバターのリップシンクを実装しました。
- 無効なアバター番号が指定されたときに安全なものに差し替えるようにしました。（Cookieに保存される場合の対応）
- バーチャルパッドで移動速度を調整出来るようにしました。
- アバターVRMを一部BlendShape対応版に差し替えました。（自動まばたき・リップシンク対応のため）
- ネームプレートがカメラを遮らないように改善しました。
- カメラ回転時に補正を入れるようにしました。
- 十字キーでも移動出来るようにしました。
- コンフィグにマスター音量のスライダーを追加しました。
- 地面からアバターが離れた時に丸影の濃さを変更するようにしました。
- ホワイトフェードイン時間をSceneファイルで指定出来るようにしました。
- パーティクルを２回目以降再生出来ないバグを修正しました。
- TPS/FPSモード切り替え時にズーム状態が復元されないバグを修正しました。
- ボイスミュートしていても新規ユーザーの声が聞こえてしまうバグを修正しました。
- 初回ローディング中に他のプレイヤーの音声が聞こえてしまうバグを修正しました。
- 名前入力の文字数制限が正常におこなわれていないバグを修正しました。
- FPSモードでバーチャルパッドが動かないバグを修正しました。
- Releaseフォルダに出力されるファイル一式がワールド名を含むフォルダに格納されるようになりました。
