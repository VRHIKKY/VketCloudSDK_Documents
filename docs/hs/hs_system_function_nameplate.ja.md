
# 組み込み関数 - ネームプレート

プレイヤーアバターの頭上に表示されるネームプレートを、動的にカスタマイズするための関数です。

各プレイヤーを一意に識別するため、(ネットワーク機能)[hs_system_function_net.md]のカスタムステート・カスタムデータ受信時のIDを利用します。

IDに空文字列を指定した場合は、自分自身のネームプレートへの操作となります。また、引数 name はプレイヤーの名前ではなく、ネームプレート自身の "name" 要素を意味します。


***

## 表示・非表示

### hsNamePlateSetShow(string, string, bool)
`bool hsNamePlateSetShow(string id, string name, bool show)`

ID と name でネームプレートを指定し、true で表示、false で非表示にする。


## テキスト要素の操作

### hsNamePlateClearText(string, string)
`bool hsNamePlateClearText(string id, string name)`

ID と name でネームプレートを指定し、テキストを消去する。

### hsNamePlateWriteText(string, string, int, int, string)
`bool hsNamePlateWriteText(string id, string name, int x, int y, string text)`

ID と name でネームプレートを指定し、新しいテキストを設定する。x, y でオフセットを指定できる。


## 画像要素の操作

### hsNamePlateSetImage(string, string, string)
`bool hsNamePlateSetImage(string id, string name, string fileName)`

ID と name でネームプレートを指定し、新しい画像を適用する。



