# Version 14.4.12

## SDK(Unityでワールドを作るためのEditor拡張ツール)

## 修正された不具合
- VKCItemAreaCollider、VKCNodeActionTrigger、VKCSettingNameplate を設定するとビルド時にエラーが発生する
- VKCAttributeScriptでアナログクロックアクティビティを選択して13.7.7から14.1.0にアップデートするとHeliscriptの項目が外れる
- 一部条件下でVKC Attribute Clickable UIの指のアイコンが2つ表示される
- ワールドアップローダーでサムネイル画像を選択後に特定の手順を実行すると意図せず未選択状態に戻る
- ワールドアップローダーの詳細設定の横に3つ並んでる画像選択部分で、画像選択するとレイアウトが崩れる
- ワールドアップローダーの画像選択において、AllFiles指定にするとpng/jpeg以外のファイルを選択できてしまう
- エディター上の再生ボタンを押してもシーン上にVketちゃんが出現しない
- VKC TextPlaneで任意のテキストを入力しても、scene上でプレビューが表示されない
- Gizmosアイコンのレンダー優先度の数字がシーンを保存すると消える
- SDK14.2.1で[フィールドをエクスポート]で出力したHEOの詳細データを閲覧することができない問題を修正しました
- Hierarchyに表示されるアイコン類に関して、一部他と比較して小さく表示されているものがある
- Hierarchyに表示されるアイコン類に関して、アタッチ時に複数のコンポーネントが選択される物の場合最初についたコンポーネントが優先され本来出るはずのアイコンが出ない
- シーン上に表示されているVKCAreaColliderのGizmosアイコンが選択解除すると消える
- ショートカットが動作していない
- VKCItemobjectのRotationの数値を特定の値(X:90/Y:90/Z:180)にした場合に、オブジェクトが表示されなくなる・画面が真っ暗になるなどの現象が発生する 
- VKCItemActivityの.json欄にJSONファイルをアタッチした後にNoneに設定するとオーバーライドの値が残ったままになってしまう
- UnityEditorを一定時間起動し続けていると、BuildAndRunやフィードバックのデータがFirebaseに送信されなくなる
- VKCSettingNameplateで画像を選択した状態のオブジェクトがあるとビルドランに失敗する
- VKCNodeVideoTriggerにて動画を差し替えることができない
- VKCAreaCollider以外のギズモアイコンが選択解除すると消えるようになっている
- VKC Item Cameraがアタッチされている場合、選択しないとギズモアイコンが表示されない
- VKCコンポーネントの優先度設定の値を4桁にすると不正な表示になります
- UI>Editor>VKCItemPlaneでTextureの値が設定できなかった不具合修正
- UI > EdiotorWindow Startup InfoのWindowの表示設定の初期値変更
- HEMExporter > HEMExporter > hemファイルが出力できないバグを修正
- Editor > VKCItemActivity > activityのjsonをnullにしたときにOverrideのリストが空にならないのを修正
- Editor > UI > ツールバーにビルドボタン等を配置(以前のSDK14.2.1バージョンでは表示されない不具合がありました。)
- UI>Editor>VKCItemCameraのあるオブジェクトから選択を外してもカメラプレビューが残っていた不具合修正
- VKCItemobjectのRotationの数値を特定の値にした場合に、オブジェクトが表示されなくなる・画面が真っ暗になるなどの現象が発生する
- UI>Editor>VKCItemVideoTriggerで一度動画をScenePreviewしてしまうと動画を差し替えても変更されない
- UI>EditorWindow>ワールドアップローダー内の各種テキスト・ボタン類の表記や挙動周りに関して指摘事項があります
- Editor > Hierarchy View > Gizmos > レンダリングPriorityの値がマイナスを入れれるバグを修正
- UI > EditorWindow SDKデバッグコンソールのテキストを左上揃え、アイコンを中心揃え
- Core > Build > CopyOperation > 拡張子を大文字小文字両方で処理するように変更
- SDK内部でFile Streamなどの使い終わったリソースがCloseされていない処理がある可能性がある

## 既知バグ
- SDK14.4.12では、Tutorial-Visual-はメンテナンスのため、一時的に利用できません。
  - Visualを使用したい場合はひとつ前のバージョン14.2.1か13.7.7で作成したものを流用してください
- [WindowsとMac]VKCNodeActionTriggerとVKC Item ActivityとVKC Setting NameplateとVKCSetting Spawnが、13.7.7から14.4.12に引き継ぐと表示が崩れる
  - こちらUnityのReordable ListのSerializeの問題であることが分かったので、SDKでの対応が出来ませんでした。なので、こちら引継ぎ際は、手動で設定し直していただく必要があります。
- VKC Item Text Planeの見え方がビルド後のインゲームとUnityのPlayモード時で相違がある
  - こちらは、ビルド後のインゲームでの見え方が正しいので、テキストの表示を確認する際は、Build And Runを実行してください。
- 【Mac限定】Hierarchyに表示されるアイコンのエラーが即時反映されないことがある
  - こちらは、VketCloudSDK > Tools > Debug Consoleで再度確認すれば、問題ございません。
- VKC Attribute Clickable UIの指アイコンが初期状態だとGizmosアイコンと被っていて見えない
  - Gizmosの表示をUnity Editorでオフすれば指アイコンが表示されます
- PlayModeScenePreview実行時、Gameウインドウ右下に表示されているエモート機能が動作していない
  - エモートの表示を確認する際は、Build And Runを実行してください。
  