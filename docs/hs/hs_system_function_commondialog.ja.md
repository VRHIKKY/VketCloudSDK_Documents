
# 組み込み関数 - 汎用ダイアログ

汎用ダイアログを操作するユーティリティー関数。

汎用ダイアログには、タイトルあり/なし・OKボタン１つ/YesNoボタン２つ・ボタン長短の組み合わせ計８種類が使用出来ます。

***

## 関数の一覧

### hsCommonDialogIsOpened

`bool hsCommonDialogIsOpened()`

汎用ダイアログが既に開かれているか確認します。開かれていればtrueが返ります。汎用ダイアログは１つしか開くことが出来ないため、他のHeliScriptのコードから開かれている場合があり、その場合は開かないようにして下さい。

### hsCommonDialogSetUseTitle

`void hsCommonDialogSetUseTitle(bool Use)`

タイトルを使用するかの設定をおこないます。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetUseYesNoButton

`void hsCommonDialogSetUseYesNoButton(bool Use)`

Yes/Noボタンを使用するかの設定をおこないます。使用しない場合はOKボタンのみになります。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetUseLongButton

`void hsCommonDialogSetUseLongButton(bool Use)`

長いボタンを使用するかの設定をおこないます。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetTitle

`void hsCommonDialogSetTitle(string Text)`

タイトルの文字列を設定します。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetText

`void hsCommonDialogSetText(string Text)`

本文のテキストを設定します。改行をおこないたい場合は文字列中に"\n"を記述します。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetTextAlignment

`void hsCommonDialogSetTextAlignment(int Alignment)`

本文テキストのアライメントを指定します。指定する定義値は以下の表の左側になります。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

|定義値|アライメント|
|---------|----|
|HSAlignLT|左上|
|HSAlignCT|中上|
|HSAlignRT|右上|
|HSAlignLM|左中|
|HSAlignCM|中中|
|HSAlignRM|右中|
|HSAlignLB|左下|
|HSAlignCB|中下|
|HSAlignRB|右下|

### hsCommonDialogSetTextOverflowWrap

`void hsCommonDialogSetTextOverflowWrap(bool OverflowWrap)`

自動改行するかどうかを設定します。

### hsCommonDialogSetTextURLClickable

`void hsCommonDialogSetTextURLClickable(bool URLClickable)`

URLクリック可能かどうかを設定します。

### hsCommonDialogSetOKButtonText

`void hsCommonDialogSetOKButtonText(string Text)`

OKボタンのテキストを設定します。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetYesButtonText

`void hsCommonDialogSetYesButtonText(string Text)`

Yesボタンのテキストを設定します。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetNoButtonText

`void hsCommonDialogSetNoButtonText(string Text)`

Noボタンのテキストを設定します。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetOKButtonDelegate

`void hsCommonDialogSetOKButtonDelegate(hsDGCommonDialog dg)`

OKボタンがクリックされたときのdelegate関数を設定します。delegateの型はvoid func(void)です。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

```csharp
hsCommonDialogSetOKButtonDelegate(OnDialogOK);

public void OnDialogOK(void)
{
	system.Output("OnDialogOK callback\n");
	
	hsCommonDialogClose();
}
```

### hsCommonDialogSetYesButtonDelegate

`void hsCommonDialogSetYesButtonDelegate(hsDGCommonDialog dg)`

Yesボタンがクリックされたときのdelegate関数を設定します。delegateの型はvoid func(void)です。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogSetNoButtonDelegate

`void hsCommonDialogSetNoButtonDelegate(hsDGCommonDialog dg)`

Noボタンがクリックされたときのdelegate関数を設定します。delegateの型はvoid func(void)です。後述のhsCommonDialogOpenを呼び出す前に設定する必要があります。

### hsCommonDialogOpen

`bool hsCommonDialogOpen()`

汎用ダイアログを開きます。既に開かれている場合等のエラーがある場合はfalseが返ります。<br>
CanvasのHeliScriptで使用する場合は引数に`"canvas"`を追加して`hsCommonDialogOpen("canvas")`のように呼ぶ必要があります。Canvas以外の場合は引数は不要です。

### hsCommonDialogClose

`bool hsCommonDialogClose()`

汎用ダイアログを閉じます。既に閉じられている場合等のエラーがある場合はfalseが返ります。

***

## トースト通知

### hsSendToastNotice

`void hsSendToastNotice(int noticeTypeID, string message, float viewTime, string identifyKey)`

画面右端からアニメーション付きでトースト通知を表示します。

**パラメータ**:
- `noticeTypeID`: 通知タイプ（0=INFO, 10=WARNING, 20=ERROR）
- `message`: 表示メッセージテキスト
- `viewTime`: 表示時間（秒）。0.5秒のアニメーション時間は含まれません
- `identifyKey`: コールバック用のユーザー定義識別キー

**機能**:
- 最大5個の同時通知をサポート。それを超えた場合は内部キューで管理
- INFO・WARNING通知はクリックで手動削除可能（ERROR通知は自動削除のみ）
- 通知との相互作用は `OnReceiveLocalData` イベントを通じてコールバック
- コールバックデータはJSON形式で提供

**使用例**:
```csharp
// 情報通知の表示
hsSendToastNotice(0, "メッセージが送信されました", 3.0, "info_msg");

// 警告通知の表示
hsSendToastNotice(10, "接続が不安定です", 5.0, "warning_conn");

// エラー通知の表示
hsSendToastNotice(20, "処理に失敗しました", 4.0, "error_proc");
```

**コールバック例**:
```csharp
// OnReceiveLocalData でトースト通知のイベントを受信
public void OnReceiveLocalData(string data)
{
    // JSON形式のコールバックデータを処理
    // 例: {"type": "toast", "action": "clicked", "identifyKey": "info_msg"}
}
```

***
