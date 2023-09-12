# 4.2.3
- Control Panelのマニュアルボタンがバージョンに合わせたリンク先になるように変更されました。
- ActionTriggerにてDisenableColliderを追加すると、EnableColliderが追加される問題を修正しました。
- HEOWorldSettingsにおいて、bloomのthreshold値とintensity値が逆に書き込まれている問題を修正しました。
- HEOVideoTriggerにloopの項目を追加しました。
- 一部のスクリプトがログイン前でもアタッチできてしまう問題を修正しました。
- HEOVideoTriggerにEnableフィールドを追加しました。

# 4.2.2
- Preferencesからローカルビルド時のポート番号を設定できる機能を追加しました。
- Preferencesから実行中サーバーの状態を表示する機能を追加しました。
- HEOReflectionProbeのUIを改善しました。
- HEOWorldSettingsから複数のDummyAvatarを設定できるようになりました。

# 4.2.1
- ログイン中にプレイモードに切り替えた場合に「Login Success」が毎回表示される問題を修正しました。
- HEOWorldSettingのLightColorとSunColorのデフォルト値を修正しました。
- HEMAnimationConverterでコンバート後のモーションがガクガクになるバグを修正しました。
- HEMAnimationConverterでAnimationClipのキーが複数重なるバグを修正しました。
- HEMAnimationConverterのGUIを刷新しました。
- HEMAnimationConverterで複数アニメーションを一括処理できるようになりました。
- HEMAnimationConverterで最適なRootボーンを自動で選択する機能を追加しました。
- HEMAnimationConverterでHips以外のボーン名の時変換に失敗していたバグを修正しました。
- HEMAnimationConverterでRootボーンを指定するとアニメーションが保存できなくなっていたバグを修正しました。
- HEMAnimationConverterでコンバート時にIKを適用できる機能を追加しました。
- HEMAnimationConverterでT型以外をD&Dさせない処理を追加しました。
- HEMAnimationConverterの出力時に、同一ファイル名が存在する場合に3桁の番号を追加する機能を追加しました。
- HEMAnimationConverterでprefixとsuffixを設定できる機能を追加しました。


# 4.2.0
- Sceneファイルにraycastmaxdistance設定を追加しました。
- iOSでテキストチャットの吹き出しがはみ出す場合があるバグを修正しました。
- チャットログのクローズボタンの表示が残るバグを修正しました。
- VRM/MToonのアウトライン描画にBlendShapeが反映されないバグを修正しました。
- ２回目以降の動画再生でループフラグが反映されないバグを修正しました。
- 動画のフルスクリーンボタンが表示されないバグを修正しました。
- iOSで動画再生時にフリーズする場合があるバグを修正しました。
- アイテム差し替えでReflectionProbe関連のメモリリークが発生するバグを修正しました。
- iOS16.4以降でZ-Fightingが発生するバグを修正しました。
- itemをUnloadして再Loadすると強制終了するバグを修正しました。
- アクションRandomからExperimentalを削除しました。
- HEOWorldSetttingsのタブ名が言語によって切り替わるようになりました。
- ExportFieldとExportMotionにチェックマークが付いている問題を修正しました。
- コントロールパネルのUpdate Logが言語変更時に変更されない問題を修正しました。
- PreferencesのLanguage設定の最新の情報に更新するボタンを削除しました。