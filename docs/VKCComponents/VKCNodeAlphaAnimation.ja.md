# VKCNodeAlphaAnimation

Vket Cloudには、カメラがオブジェクトによって遮られるような場面の際に視界確保のためにカメラに近いオブジェクトを距離に応じて透過させる機能が用意されています。<br>
VKCNodeAlphaAnimationコンポーネントでは、この透過および透過アニメーションのフラグを設定して透過の有無を設定できます。

## 基本設定

| 名称 (英語) | 名称 (日本語) | 初期値 | 機能 |
| ---- | ---- | ---- | ---- |
| Enable | 有効化 | false | 透過を有効にします |

!!! caution "透過が適用されるオブジェクトについて"
    透過が設定できるオブジェクトはVKCItemFieldのNodeにできるオブジェクトのみです。<br>
    これ以外のオブジェクト(例：[右クリックメニューから生成できるオブジェクト](../../WorldEditingTips/QuickMenu.md))には透過は適用されないため、ご注意ください。<br>
    Nodeについての詳細は[HeliScript概要 / Node](../../hs/hs_overview.md#node)をご覧ください。

## 使い方

設定前のワールド内の視界は以下のようになっています。

![VKCNodeAlphaAnimation_01](img/VKCNodeAlphaAnimation_01.gif)

1. VKCItemFieldのAdvanced Optionタブを開き、Alpha Animation Targetを有効にします。

    ![VKCNodeAlphaAnimation_02](img/VKCNodeAlphaAnimation_02.jpg)

1. Hierarchyにて透過アニメーションを適用したいItemField下のオブジェクトを選択し、VKCNodeAlphaAnimationコンポーネントを追加します。<br>追加したコンポーネントのEnable値をTrueにしておきます。

    ![VKCNodeAlphaAnimation_03](img/VKCNodeAlphaAnimation_03.jpg)

1. ワールドをビルドすると、カメラが近づいた際にオブジェクトへ透過が適用されます。

![VKCNodeAlphaAnimation_04](img/VKCNodeAlphaAnimation_04.gif)
