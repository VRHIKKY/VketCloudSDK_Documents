# 4.1.1
- 言語選択がリセットされる問題を修正しました。
- HEOPlayerの初期生成時オブジェクト名をPlayerに変更しました。
- HEOFieldの翻訳を追加しました。
- HEOActionTriggerで追加されるAddVelocityとEnableが逆になっている問題を修正しました。
- HEOWorldSettingから一部フィールドを非表示にしました。
- アクションのEnableをSetPhysicsEnableと表記するように変更しました。


# 4.1.0
- 入室ダイアログを追加しました。
- Sceneファイルに最前面描画指定をおこなうforegroundrenderingを追加しました。
- チャットメッセージ受信時にバッジが表示されない場合がある問題を修正しました。
- MToonのリムライトテクスチャが正しく反映されない問題を修正しました。
- MToon使用時にBloomを使うと画面にゴミが表示される場合がある問題を修正しました。
- 物理エンジン／CenterOffsetが反映されない問題を修正しました。
- 物理エンジン／Enableでないオブジェクトが動かせる問題を修正しました。
- スプライトがClamp指定になっていない問題を修正しました。
- タブが非アクティブ時に複数テキストチャットが届くと表示位置が重なってしまう場合がある問題を修正しました。
- typeがobjectのコリジョンが正しく計算されない問題を修正しました。
- Item.SetScale/GetScaleをHeliScriptに追加しました。
- hsPhysicsSetEnableをHeliScriptに追加しました。
- hsPhysicsIsFixedをHeliScriptに追加しました。
- SetPhysicsEnableをHeliScriptに追加しました。
- IsPhysicsFixedをHeliScriptに追加しました。
- iblとlighteningのuseがオフになった際に、折りたたんだ数値がシーンファイルに書き込まれないようにしました。
- Essential Scene for VketCloudSDKのオプションをアセットメニューに追加しました。
- 毎回のビルドでキャッシュを削除するオプションをメニューに追加しました。
- キャッシュクリアをメニューからも実行できるようにしました。
- コントロールの画像ファイル名を綴りミスを修正しました。
- DespawnHieghtのサイズがリセットされる問題を修正しました。
- シーンファイルの構成順序をできるだけ保持するようにしました。
- HEONameplateにshowを追加しました。
- AvatarFileに圧縮テクスチャの設定フィールドを追加しました。
- HEOSpawnを追加しました。