# EditorOnlyタグの使用方法

UnityのEditorOnlyタグが付加されたオブジェクトは、VketCloudSDKでのビルド時にビルドの対象から外れます。

## 使い方

ビルドの対象から外したいオブジェクトを選択し、Inspector > TagのプルダウンメニューからEditorOnlyタグを選択します。

![EditorOnlyTag_1](img/EditorOnlyTag_1.jpg)

この状態でビルドすると、EditorOnlyがアタッチされたオブジェクトはビルドの対象から外れ、ワールドにて存在しない状態となります。<br>
この時、ワールドにて必須なコンポーネント/リソースが付いているオブジェクトを誤ってEditorOnlyに指定しないようにご注意ください。

![EditorOnlyTag_2](img/EditorOnlyTag_2.jpg)

オブジェクトのEditorOnlyタグを外すと、ビルド時に存在する状態になります。

![EditorOnlyTag_3](img/EditorOnlyTag_3.jpg)