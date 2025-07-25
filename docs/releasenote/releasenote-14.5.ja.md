# Version 14.5.14

## SDK(Unityでワールドを作るためのEditor拡張ツール)

### 新機能

- アップロードのプログレス表示機能を実装しました。
- ダイアログまたはプログレスバーで「アップロード中」の状態と進捗率が確認できるようになりました。

### 修正された不具合

- VKC Item Activityを編集するとActivityのJSONの中身が壊れる不具合を修正しました。
  - VKC Item Activityの編集モードを離脱する（On/Offの切り替えまたはApply）際に、変更がなくてもActivity.jsonの内容が変更される問題

---

# Version 14.5.10

## SDK(Unityでワールドを作るためのEditor拡張ツール)

### 修正された不具合

- テクスチャオーバーライドが有効なビルド・アップロード処理中に再度ビルド・アップロードを実行すると、マテリアルに設定されたテクスチャが外れる不具合を修正しました。
- ビルド・アップロード処理中は再度ビルド・アップロードボタンを押下できないようにUIを改善しました。

---

# Version 14.5.7

## SDK(Unityでワールドを作るためのEditor拡張ツール)

### 修正された不具合

- HeliodorLibが15.3の時に、ローカルビルド(Build And Run)時に、インゲームが適切にロードされない不具合を修正しました。

---

# Version 14.5.6

## SDK(Unityでワールドを作るためのEditor拡張ツール)

## 修正された不具合

以下14.4.12でロールバックされた機能が14.5.6で機能が復活いたしました<br>

- VKC Item ObjectのPickable
- VKC Setting Renderingの Tone Map
- VKC Item TextPlaneのFont Weight
- VKC Setting PlayerのEnable Click to Move
- VKC Setting PlayerのDespawn Height(y)
- VKC Item FieldのForce Collider Disable

## パーティクルエディター

プロパティの数値入力欄をクリックし、数値を入力しても、数値が正常に反映されない不具合が修正されました。<br>
また、操作後はチェックボックスへの入力などが正常に行えなくなる不具合も修正されました。<br>

ただ、注意点として、SDK14.5.6時点でも、画面解像度が100%より上ですと、不具合が再発する可能性がありまますので、「ディスプレイ」の設定から画面解像度を100%に設定してください。

## その他の不具合（無限ロード）

SDK14.4.12を新規に導入した際、もしくは、Install WizardでSDK13.7.7→SDK14.4.12、SDK14.2.1→SDK14.4.12にアップデートした際に、ロードが終わらない場合がありました。<br>

こちらは、SDK13.7.7 -> 14.5.6にアップデートする際は、無限ロード問題が修正されました。<br>

ただし、SDK14.2.1、14.4.12　-> SDK14.5.6の場合は依然と、無限ロードは修正されておりません。<br>