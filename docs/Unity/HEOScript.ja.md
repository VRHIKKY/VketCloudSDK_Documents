# HEOScript
![HEOScript](img/HEOScript_jp.jpg)

| ラベル |  機能  |
| ----   | ---- |
| `ヘリスクリプト` | [HEOWorldSetting](../HEOComponents/HEOWorldSetting.md)内の`BasicInfo/HeliScript`リストから実行したい`HeliScript`ファイルを指定します。<br>実行したい`HeliScript`ファイルがない場合は`選択`ボタンから[HEOWorldSetting](../HEOComponents/HEOWorldSetting.md)に追加します。|
| `コンポーネント` | `ヘリスクリプト`で選択した`HeliScript`ファイルの使用したいコンポーネント名を指定します。 |

##　注意点
- HEOScriptをアタッチ可能なGameObjectは、スクリプトの対象となる[HEOField](./HEOField.md)がアタッチされているオブジェクト及びその子オブジェクトです (下記画像を参照)
- 詳しいHeliScriptの書き方は以下をご覧ください。
- [クラス](../hs/hs_class.md)
- [コンポーネント](../hs/hs_component.md)

![HEOScript_attachable](./img/HEOScript_attachable.jpg)

!!! note
    `HeliScript`ファイルを新規作成した際、ファイル名の一部重複などの原因によって`HEOScript`内のヘリスクリプト一覧に表示されない場合があります。
    その際は`HEOScript`コンポーネントを一度削除し、再度ゲームオブジェクトにアタッチすることで解消されます。