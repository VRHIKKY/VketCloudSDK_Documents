# VKC Item Background Texture

![HEOBackgroundTexture_1](img/HEOBackgroundTexture_1.jpg)

設定した画像をシーンの背景として配置するために使用するコンポーネントです。<br>
Skyboxのように上下左右で画像は変わらず、常に同じ画像が投影されるためご注意ください。

また、使用する画像の比率は必ず**『1 : 1』**にしてください。

例として、ここでは1 : 1にフォーマットされた空の画像を使用してシーン背景として設定しております。

![HEOBackgroundTexture_2](img/HEOBackgroundTexture_2.jpg)

![HEOBackgroundTexture_3](img/HEOBackgroundTexture_3.jpg)

### 高度な設定

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| Clickable | false | オブジェクトがクリックされた際の判定を発生させるか否かを設定します。 |
| Auto Loading | true | [動的ローディング](VKCItemField.md)にて使用します。<br> デフォルトはtrueで初回ローディング時に読み込まれます。 |
| Show Photo Mode | true | 写真撮影モードの際、Activityを表示するかどうかを変更します |
