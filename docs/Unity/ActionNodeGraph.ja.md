
# ActionNodeGraph
![ActionNodeGraph1](img/ActionNodeCompiler.jpg)
![ActionNodeGraph2](img/ActionNodeCompiler2.jpg)
ActionNodeGraphの使用方法について、解説します。<br>
※この機能はβ機能です。お気づきの点がございましたら、お問い合わせにてご連絡いただけますと幸いです。

## 概要

本コンポーネントは[HEOActionTrigger](HEOActionTrigger.md)の代替として使用できるコンポーネントです。<br>
HEOActionTriggerと比べ、

- アクションをノードで視覚的に管理することが可能
- アクション実行順の変更が容易
- 別オブジェクトにアクションリストを容易に移植可能

といった特徴があります。

## 使用方法

①クリック時にアクションを実行したいオブジェクトにActionNodeCompilerをアタッチします。<br>
![ActionNodeGraph3](img/ActionNodeCompiler3.jpg)<br>
<br>
②"Create New Action Graph"を選択し、ActionNodeGraphを作成します。<br>
クリックすると保存画面が立ち上がるので、お好きな名前を付けて保存してください。<br>
![ActionNodeGraph4](img/ActionNodeCompiler4.jpg)<br>
<br>
③Openをクリックすることで、ノードグラフ編集画面が立ち上がります。<br>
初めからStartNode、Resultの2ノードが入っています。<br>
![ActionNodeGraph5](img/ActionNodeCompiler5.jpg)<br>
<br>
④右クリックで"Create Node"を選択することで新しいActionNodeGraphを作成することができます。<br>
![ActionNodeGraph6](img/ActionNodeCompiler6.jpg)<br>
<br>
![ActionNodeGraph7](img/ActionNodeCompiler7.jpg)<br>
Create Node > Actionsにアクションノードが入っています。<br>
上部の検索枠から検索することもできます。<br>
<br>
⑤Start NodeからResultまでAction Streamを接続します。<br>
![ActionNodeGraph8](img/ActionNodeCompiler8.jpg)<br>
StartNodeのAction StreamからアクションノードのAction Streamへノードを繋ぎます。<br>
○をクリックしたまま接続先のノードへドラッグ&ドロップすることで接続可能です。<br>
Start NodeからResultまでの間にあるノードが実際に発生するアクションの対象となります。<br>
<br>
接続を削除する場合、<br>
<br>
1.接続している線をクリック<br>
2.Deleteキーを押す<br>
<br>
ことで可能です。<br>
接続先を変更する場合にお使いください。<br>
<br>
ノードを削除する際は、<br>
削除したいノードを選び、Deleteを選択します。<br>
<br>
⑥左上Parametersタブで変数を作成することができます。<br>
![ActionNodeGraph9](img/ActionNodeCompiler9.jpg)<br>
「+」ボタンをクリックすることで、作成する変数の種類を選択できます。<br>
<br>
![ActionNodeGraph10](img/ActionNodeCompiler10.jpg)<br>
作成すると上記のようなノードが生成されます。<br>
作成した変数はInspector上で値を設定することができます。<br>
"Hide in Inspector"にチェックを入れるとInspector上で非表示となります。<br>
<br>
![ActionNodeGraph11](img/ActionNodeCompiler11.jpg)<br>
右クリックで変数の改名、削除ができます。<br>
<br>
変数はノード空間にドラッグ&ドロップし、対応する○に繋げることで使用可能です。<br>
<br>
<br>
■例：HEO Object名"music"の1番目のアニメーションを再生する(再生は1度きり)　を作る場合■<br>
![ActionNodeGraph12](img/ActionNodeCompiler12.jpg)<br>
<br>
"music"をString型の変数で、"1"をint型の変数で作ります。<br>
<br>
IfequalのNameに"music"、NValueに"1"を接続します。<br>
これで、「musicの中身が1の場合、先の処理を発生させない」処理が完成します。<br>
<br>
PlayItemのNameに"music"、Indexに"1"を接続します。<br>
これで、「HEO Object"music"のIndex番号"1"に登録されたアニメーションを再生する」処理が完成します。<br>
<br>
SetVarのNameに"music"、Indexに"1"を接続します。<br>
これで、「変数musicの中身を1にする」処理が完成します。<br>
<br>
初回はPlayItem以降の処理が発生しますが、2回目以降はSetVarにより変数musicの中身が1となっているため、<br>
IfEqual以降の処理が発生しません。<br>
<br>
変数ノードは複数のノードにつなぐことが可能なので、同じ数にしたい箇所に接続することで管理が容易になります。<br>
<br>
Primitivesタブ内には、ノード空間上で編集できる変数を作成することができます。<br>
![ActionNodeGraph13](img/ActionNodeCompiler13.jpg)<br>
<br>
Parameter上で作成する変数と同様の使い方をすることができます。<br>
<br>
<br>
## Tips
<br>
①Target_is_selfについて<br>
一部のアクションノードには"Target_is_self"というチェックボックスがついています。<br>
これにチェックを入れることで、動作の対象をActionNodeCompilerがアタッチされたオブジェクト自身にすることができます。<br>
<br>
例：クリックされたときに非表示にする<br>
![ActionNodeGraph14](img/ActionNodeCompiler14.jpg)<br>
<br>
クリックした際に非表示となるオブジェクトを複数個用意する際、<br>
HEOActionTriggerであれば1つ1つ当たり判定と表示を消す対象を変更する作業が必要がありますが、<br>
この例の場合、NodeNameの部分にActionNodeCompilerがアタッチされたオブジェクトが自動で入るため、<br>
ActionNodeCompilerにこのActionNodeGraphをアタッチしたものを非表示にしたいオブジェクトにアタッチするだけで、<br>
当たり判定と表示を変更する作業を行うことなく実装することができます。<br>
<br>
②ActionNodeGraphの切り替え<br>
ActionNodeGraphではアクションリストを保存することができます。<br>
![ActionNodeGraph15](img/ActionNodeCompiler15.jpg)<br>
ActionNodeCompilerのAssetでActionNodeGraphを選択することができます。<br>
HEOActionTriggerでは困難なアクションリストの変更を容易に行うことができます。<br>