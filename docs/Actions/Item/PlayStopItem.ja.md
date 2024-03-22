# Play/StopItem

![PlayStopItem](img/PlayStopItem.jpg)

## 概要

PlayItemは、オーディオ・パーティクル・**アバター以外の**オブジェクトアニメーションを再生します。

Targetに指定できるオブジェクトは、

- [HEOAudio](../../HEOComponents/HEOAudio.md)
- [HEOParticle](../../HEOComponents/HEOParticle.md)
- [HEOObject](../../HEOComponents/HEOObject.md)

を持つシーン上のオブジェクトです。

※アバターアニメーションの再生については[Motion](../Avatar/Motion.md)をご参照ください。

[HEOObject](../../HEOComponents/HEOObject.md)を指定した場合のみ、Indexを追加で設定することができます。
その場合、設定したIndex番号のモーションが再生されます。

また、TargetがBeginActionsを持つItemであれば、それも同時に実行します。

!!! info "オブジェクトアニメーションのより詳細な解説"
    オブジェクトのアニメーションについてより詳しい解説が知りたい場合は、[ワールド制作ガイド / オブジェクトをアニメーションさせる](../../WorldMakingGuide/PropAnimation.md)をご参照ください。

## StopItemについて

StopItemは、オーディオ・パーティクルを停止します。実行中のBeginActionsがあれば、それも停止します。

StopItemは一見、再生中のアニメーションを停止しそうなアクションですが、 StopItemの効果はBeginActionsの停止であり、**再生中の「オブジェクトアニメーション」**はBeginActionsに該当しないので止まりません。<br>
StopItemはパーティクルやサウンドを止めるのに使うことができます。

したがって、オブジェクトアニメーションを停止させたい際は自然停止もしくは以下の手順でアニメーションがないMotionを用意して呼び出す必要があります。

### 停止用のMotionを作る

1. ワールド制作ガイド「オブジェクトをアニメーションさせる」ページにおける[HEOObjectにアニメーションを付与する方法](../../WorldMakingGuide/PropAnimation.md#heoobject)を参考に、以下のように[HEOObject](../../HEOComponents/HEOObject.md)と付随するアニメーションを用意します。

    このとき、1番目のMotionは空白としておきます。この1番目のMotionがワールド入場時の初期状態と待機時のMotionとなり、アニメーションを停止させたい際に呼び出すMotionを兼ねます。

2. ここでは例として[HEOAreacollider](../../HEOComponents/HEOAreacollider.md)を使用し、指定範囲入場時にPlayItemを使用してCubeの2番目のMotionを呼び出し、退場時にはPlayItem・1番目のモーションを呼び出します。

3. ワールドに入場すると以下のような挙動となります。
