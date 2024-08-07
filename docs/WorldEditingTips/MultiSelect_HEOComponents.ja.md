# 複数のHEOコンポーネントの一括編集

Hierarchyにて同じHEOコンポーネントがアタッチされたオブジェクトを選択すると、コンポーネントの設定項目を一括で編集できます。

## 使い方

例として、ここでは[VKC Node Shadow](../VKCComponents/VKCNodeShadow.md)を登録したオブジェクトを二つ用意します。

![MultiSelect_1](img/MultiSelect_1.jpg)

オブジェクトを複数選択すると、Inspectorでは共通のHEOコンポーネントが表示され、設定の一括編集が可能です。

![MultiSelect_2](img/MultiSelect_2.jpg)

オブジェクト複数選択時にHEOコンポーネントの設定を編集すると、それぞれのコンポーネントへ設定が適用されます。

![MultiSelect_3](img/MultiSelect_3.jpg)

![MultiSelect_4](img/MultiSelect_4.jpg)

## 注意点

HEOコンポーネントにおけるボタンのうち、add/create/generate/deleteなど生成削除を制御するボタン、[VKC Node Video Trigger](../VKCComponents/VKCNodeVideoTrigger.md)のPlayボタンは一括編集に対応していません。<br>
なお、[VKC Attribute Click Guide](../VKCComponents/VKCAttributeClickGuide.md)のOn/Off, 各リストの+/-による項目の追加は一括編集に対応しております。

複数選択したオブジェクトの内どれかひとつが該当のHEOコンポーネントを有していない場合、あるいは共通のコンポーネントがない場合は以下のように案内が表示され編集ができません。<br>
本表示が表示された際はオブジェクトの選択を変更するか、Add ComponentでHEOコンポーネントを該当のオブジェクトに追加します。

![MultiSelect_5](img/MultiSelect_5.jpg)