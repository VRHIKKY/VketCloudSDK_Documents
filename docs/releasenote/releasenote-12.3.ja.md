# 12.3.4

## SDK(Unityでワールドを作るためのEditor拡張ツール)

### AvatarFileとMyAvatarのバグ修正
- Avatar FileのMotionファイル等を更新し、ビルドを行っても、シーンjsonにAvatarFileの更新が適用されない
- AvatarfileとMyAvatarにて、ビルドせずにUnity再起動した場合、Actionリスト内の変更が消える。
- AvatarfileのUse Actionにて、ビルド時にシーンファイルへActionsの記述がされない
- AvatarfileのUse ActionにてUnityオブジェクトを指定していた際、Unity再起動時に指定がnoneとなる
- Avatarfileにて、Nodeを指定するActionを設定した場合、Unity再起動時にNodeの指定が外れる

### HEOScriptコンポーネントのバグ修正

- BasicSettingsにHeliscriptが登録された状態で、HEOScriptを追加すると、Heliscriptには設定が自動で入るが、コンポーネントが登録されない

### HEOTextplaneコンポーネントのバグ修正

- HEO Text PlaneのScene Previewがtrueの状態でUnity上でDuplicateすると、コピー先のTextを編集した際に、コピー元のプレビューも変わったり、文章の変更が意図しない形で適用される

- HEO Text Planeにて、一度Scene Previewをオフにして文字をプレビューしようとすると、表示がされない

### VKC ActivityExporterで、HEOVideoTriggerを含むItemをActivityエクスポートしたときのバグ修正
- WindowsとMacで、.jsonに記述されているビデオファイルパスが違う 
- Macにて、出力した.jsonにloopの設定が記述されない 


### VKC ActivityExporterで、HEOParticleを含むItemをActivityエクスポートしたときのバグ修正
- WindowsとMacで、.jsonに記述されているビデオファイルパスが違う 

### ツールバーのVketCloudSDK > Helpのバグを修正
- 英語設定時にHelpを押すと、日本語のマニュアルが表示される

### Install Wizard2.0.1のバグを修正
- GraphicsのTier1とTier2とTier3の設定を推奨設定に組み込まれていない
- ライトモード時のInstall Wizardの表示が適切ではない
- HIKKYロゴ
- 必須ページのヘルプリンクの文字
- Install Wizardに含まれるTests.metaファイルを削除できていないので、warning警告が表示される
- Install Wizardで最新版のcom.hikky.editortutorialsystemがインストールできない


# 12.3.0

## HeliodorLib(ブラウザで表示されるワールドで使われているエンジン)

### バグ修正
- ダミーアバターを使用している時にアバターのクリック判定が誤動作する
- MToonの_Colorパラメータが乗算されていない
- 英語版のブロック表記が「強制退室」になっている
- 一部VRMの目が白くなる
- サブシーンでOnNetReceivePosJoin, OnNetReceivePosLeaveの受信対応
- サブシーンとアクティビティでカスタムステート・カスタムデータを受け取れない
- iOSにてプロフィールが即時反映されない


### 機能追加調整
- TPSモードの時のみ透過アニメーションを実行するようにしました
- 初回入室処理・入室失敗時の処理をシーンファイルで設定できるようにしました
- (HeliScript) スタック使用量削減：listのnew, Resize(), Add()で命令実行ループを回さない

