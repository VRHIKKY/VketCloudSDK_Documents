# VKC Item Fieldの使い方

[VKC Item Field](../VKCComponents/VKCItemField.md)を使うことで、ビルド後のシーンにUnity上のオブジェクトを反映することができますが、使い方を誤るとエラーが発生したり、オブジェクトが思わぬ位置に現れたりします。

本記事では[VKC Item Field](../VKCComponents/VKCItemField.md)の使い方を解説していきます。

## 基本的な使い方

![VKCItemFieldTips_1](img/HEOFieldTips_1.jpg)

上記のような[VKC Item Field](../VKCComponents/VKCItemField.md)をアタッチしたオブジェクトにObjectA、ObjectB、ObjectC、ObjectC2、ObjectC3を子オブジェクトに入れた場合、これらのオブジェクトは[VKC Item Field](../VKCComponents/VKCItemField.md)によって生成されるアイテムに含まれ、シーン上に表示されます。(ここでの「アイテム」については [Itemクラス](../hs/hs_class_item.md) を参照)

一方、[VKC Item Field](../VKCComponents/VKCItemField.md)の子オブジェクトではないObjectDはアイテムに含まれず、シーン上に表示されません。

また、この状態でのObjectA、ObjectB、ObjectC、ObjectC2、ObjectC3は「[ノード](../hs/hs_overview.md#player-item-node)」と呼ばれる状態になっており、[Show/HideNode](../Actions/Node/ShowHideNode.md)、 [Enable/DisableCollider](../Actions/Node/EnableDisableCollider.md)、 [Enable/DisableClickableNode](../Actions/Node/EnableDisableClickableNode.md)アクションの対象とすることができます。

![VKCItemFieldTips_2](img/HEOFieldTips_2.jpg)

上記のように、[VKC Item Field](../VKCComponents/VKCItemField.md)をアタッチしたVKCItemField2にObjectD、ObjectE、ObjectF、ObjectF2を子オブジェクトに入れた場合、これらのオブジェクトは[VKCItemField](../VKCComponents/VKCItemField.md)によって生成されるアイテム「VKCItemField2」に含まれ、シーン上に表示されます。

VKCItemField2はObjectD、ObjectE、ObjectF、ObjectF2をノードに持ちます。<br>
したがって、これらのノードに対し表示/非表示を行う時のアクション設定は下記画像のようになります：

![VKCItemFieldTips_3](img/HEOFieldTips_3.jpg)

1つ目のTargetにノードが所属するアイテムが入るため、親オブジェクトとなるVKC Item Field2が入り、2つ目のTargetにアクションの対象となるオブジェクトが入ります。

この時、1つ目のTargetがVKC Item Fieldなのに2つ目のTargetがObjectEといった、アイテムとノードの組み合わせが正しくない状態だと動作しません。

## 間違った使い方

以下の使い方は正しくないので注意してください。

1\. VKC Item Fieldの親子構造

![VKCItemFieldTips_4](img/HEOFieldTips_4.jpg)

上記画像のように[VKC Item Field](../VKCComponents/VKCItemField.md)を持ったオブジェクトの子オブジェクトの中に[VKC Item Field](../VKCComponents/VKCItemField.md)を持ったオブジェクトを入れるのは誤りです。

[VKCItemField](../VKCComponents/VKCItemField.md)を入れるのは最上位オブジェクトのみ、と覚えておきましょう。

2\. オブジェクトごとにVKC Item Fieldをアタッチする

![VKCItemFieldTips_5](img/HEOFieldTips_5.jpg)

「[VKCItemField](../VKCComponents/VKCItemField.md)をアタッチすることでシーン上にオブジェクトが表示される」ことから、このような実装をやってしまいがちですが、[VKC Item Field](../VKCComponents/VKCItemField.md)は[動的ローディング](../VKCComponents/VKCItemField.md#_1)を実装しない場合、基本的に1つだけで大丈夫です。

ビルド時に[VKC Item Field](../VKCComponents/VKCItemField.md)をアタッチしたオブジェクトを元に.heoファイルが生成されます。
上記のような実装を行うと大量に.heoファイルが生成され、容量を大幅に取ってしまいます。

可能な限り、[VKC Item Field](../VKCComponents/VKCItemField.md)を使う数は最小に抑えましょう。

3\. VKC Item Fieldをアタッチしたオブジェクトに他のアイテム生成系HEOコンポーネントをアタッチする

![VKCItemFieldTips_6](img/HEOFieldTips_6.jpg)

上記画像のように、[VKC Item Field](../VKCComponents/VKCItemField.md)と[VKC Item Audio](../VKCComponents/VKCItemAudio.md)を同じオブジェクトにアタッチした状態でビルドすると、同一のオブジェクトが別アイテムとして二重計上されてしまいます。

同名のアイテムが存在する場合、誤作動が起きてしまうので、このような実装はNGです。

### OKな組み合わせ

1\. +[VKC Attribute Script](../VKCComponents/VKCAttributeScript.md)

![VKCItemFieldTips_7](img/HEOFieldTips_7.jpg)

[VKC Item Field](../VKCComponents/VKCItemField.md)と[VKCAttributeScript](../VKCComponents/VKCAttributeScript.md)は併用可能です。

[VKC Item Field](../VKCComponents/VKCItemField.md)で定義したアイテムに[VKC Attribute Script](../VKCComponents/VKCAttributeScript.md)で定義したComponentを入れることができます。

## まとめ

!!! info "VKC Item Fieldの使い方"
    - 基本1シーンにつき1つ
    - 最上位オブジェクトにアタッチする(空のオブジェクトが好ましい)
    - 動的ローディングを使う時は2つ以上VKC Item Fieldを使う 