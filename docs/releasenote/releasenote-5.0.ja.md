# 5.0.1
- PreferenceとControll Panelを統合し、Settingsを新設しました。
- Controll Panelの一部機能を代替するStartup Windowを新設しました。
- ローカル環境にスマートフォンから入室するためのQRコード生成機能を追加しました。
- エラーコードの追跡を容易にするデバッグログシステムを追加しました。
- デバッグログシステムの追加により、チェックツールがobsoleteになりました。

-----------

# 5.0.0
■機能追加・仕様変更等

- チャットバルーンを名札の上に同時に表示する仕様に戻しました。
- エモーション時は自由落下と衝突判定をおこなわないようにしました。
- textplaneのテクスチャサイズの２の累乗制限がなくなりました。
- iOS/iPadOS/MacOSではFXAAを用いてアンチエイリアシング処理をおこなうようにしました。
- F9キーでHUDを非表示に出来るようにしました。
- QEキーによるカメラ回転を出来るようにしました。
- ParticleEditor／MaxParticleを追加しました。
- ParticleEditor／ColorOverLifeTimeを追加しました。
- ParticleEditor／Shapeにhemisphereを追加しました。
- プレイヤーの動的リフレクションプローブを調整しました。

■機能追加／Sceneファイル

- motionsに"drawcircleshadow"を追加しました。
- itemのtypeにcameraを追加しました。（itemの姿勢をカメラとして利用する機能）
- textplane向けにfontfamily,textalignment,charaspace,linespace,overflowwrapを追加しました。
- playerにtpsrotateを追加しました。（カメラをアバターの正面から捉える等に利用）
- itemに”circleshadow”を追加しました。（アイテムと一緒に丸影を表示するときに利用）

■機能追加／HeliScript

- Player.ShowChatBalloon（吹き出しの表示）を追加しました。
- Player.ChangeMotion/SetNextMotionを追加しました。
- Item.GetWorldQuaternion/GetWorldRotateを追加しました。
- Item.GetWorldPosを追加しました。
- Item.SetCamera/ResetCameraを追加しました。（itemの姿勢をカメラとして利用する機能）
- OnWindowsActivateを追加しました。
- hsCanvasGetGUIPosを追加しました。
- hsClipBoardWriteTextを追加しました。（クリップボードにテキストコピー）
- OnClickEmptyを追加しました。（無効な範囲をクリック）
- Vector3.GetNormalizeを追加しました。
- hsItemGetSelfを追加しました。
- hsStartLayerAnimation/hsStartGUIAnimationを追加しました。（UIアニメーション）

■バグ修正

- VketChanDoubleSidedCutoffシェーダが両面描画されない問題を修正しました。
- Item.IsPlay()がtype:objectでは機能しない問題を修正しました。