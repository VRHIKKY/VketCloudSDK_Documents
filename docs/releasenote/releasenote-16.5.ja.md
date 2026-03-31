# Version 16.5.0

## SDK(Unityでワールドを作るためのEditor拡張ツール)

### メイン機能

- **マイアセット/Activityインポート機能**
    - cloud.vket.comのマイアセットを一覧にして表示し、インポートできる機能を追加

- **ワールドプロファイラー**
    - ワールドのパフォーマンスを分析・可視化するプロファイラー機能を追加

- **Unity 6対応**
    - Unity 6環境での動作をサポート

### 新機能

- **VKC World Setting > Rendering Setting**
    - レンダリングJSONから値をインポートできる機能を追加

- **VKC Item Object > Instance Draw**
    - Instance Draw項目を追加

- **Build Setting > フォルダー削除機能**
    - アップロードする際に、自動でフォルダーを削除する機能をオフにできる設定を追加（社内用）

- **CopyOperation > ファイル圧縮**
    - Activity内の各種ファイル（テクスチャ、HEO、VRM、HEP）を圧縮する仕様を追加

- **hsファイル改行コード統一**
    - CRLFとLFが混在するhsファイルをビルドできるよう、LFに統一する処理を追加

- **Upload UI Panel幅保存**
    - アップロードUIの左Panel幅を保存できるように改善

- **VKC Item Camera > ItemCamera**
    - ItemCamera項目を追加

- **HeliScriptファイル作成ボタン**
    - ラベルをわかりやすくするように更新

- **DebugConsole > エラーダイアログ**
    - Activityが編集中のときのエラーダイアログをわかりやすく表記するように改善

- **HEOCamera > autoscreensize**
    - autoscreensizeパラメータを追加

- **BaseSetting > ワールド名警告**
    - ワールド名が長い場合の警告表示および自動的に長さ調整する機能を追加

- **DRACO圧縮/解凍機能**
    - DRACO圧縮/解凍機能を追加

- **ReadHEOFile リファクタ**
    - 不要な依存を切って、dll化のスクリプトを作成

- **VKC Item Object > collider**
    - colliderパラメータを追加

- **VKC系コンポーネント > アクション非表示**
    - 複数ノード系アクションを非表示化

- **CameraSettings > 各種パラメータ**
    - xrotatereverse、yrotatereverse、defaulttpscamerapitchangletype、cameraspeedパラメータを追加
      - ※こちらの機能は近日のシステム(HeliodorLib)更新後に使用可能になります。

- **Texture Import Viewer > 警告**
    - 要シーン保存の警告を追加

- **HeliScriptテンプレート登録画面**
    - テンプレートの登録画面を作成

- **VKC Video Node > EventMap**
    - EventMap自動生成インターフェースを実装

- **Heliodor検証時Ver切り替え**
    - SDK開発者機能でHeliodor検証時にVerを切り替える拡張を追加

- **Asset Name Validator > 警告改善**
    - 複数ファイル名を変更する際、警告を一度だけ表示するようにする選択肢ボタンを追加

- **VKC Item PointLight > Show項目**
    - Show項目を追加

### 不具合修正

- **VketCloudSetting > PlayModeManager**
    - 標準シーンを再生するとエラーが発生するバグを修正

- **VKC Helper > Create VKC Object**
    - メインスレッドがデッドロックされるバグを修正

- **DebugConsole > 多重ビルド**
    - 多重ビルドするとテクスチャがはがれるバグを修正

- **Build&Run > hemファイル**
    - Activity内にhemファイルをおくと、ビルドエラーになるバグを修正

- **HEO Script > 削除処理**
    - 設定側の削除でHEOScript側のスクリプトが残ってしまう問題を修正

- **FileDeploymentConfig**
    - アセット選択で作成した場合チェックボックスが有効になっていないバグを修正

- **WorldCameraSetting > UI**
    - ラベルのテキストがボタンより広いので、ボタンを横に広くする修正

- **VketCloudSetting > BasicInfo**
    - HeliScriptにNullがあってもビルドできるように修正

- **HeliodorLib暗号化png**
    - 独自で暗号化されたpngをImport SettingをOverrideして、エラーが出ないようにする修正（フェーズ2）

- **GameObjectGenerator**
    - Asset Generator > GameObject生成の修正

- **VKCItemActivity > ScenePreview**
    - ScenePreviewをONにするとExceptionを吐く問題を修正

- **Translation Database**
    - 改行等のような文字が正しく表示されない問題を修正

- **Hierarchy > HierarchyHelper**
    - MissingScriptがあるとエラーが出て該当オブジェクトが触れなくなる問題を修正

- **VKCAttributeScript**
    - SDK15.1.0でhsファイルを設定するとビルド時にエラーが発生する問題を修正

- **VKCNodeRotateAnimation**
    - シーン内可視化が動作しない問題を修正

- **シーンプレビュー > チェックマーク**
    - 一度ONにするとOFFにできない問題を修正

- **HEO > ScenePreview**
    - Shaderが正常に適用されない問題を修正

- **VKCVideoTrigger > ラベル表示**
    - ItemObject連携フラグのラベルが長すぎて見切れてしまう問題を修正

- **VKC Text Plane > Rotation**
    - Rotationした際、ビルドランまたはシーン内可視化を押下すると表示が0の値で再表示される問題を修正

- **VKC Item Pointlight/Clone**
    - HeliScriptのComponentのシーンファイル書き込みを一部修正
