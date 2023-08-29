
# Play/StopItem
![PlayStopItem](img/PlayStopItem.jpg)

PlayItemは、オーディオ・パーティクル・オブジェクトアニメーションを再生します。

Targetに指定できるオブジェクトは、

- HEOObject
- HEOParticle
- HEOAudio

を持つシーン上のオブジェクトです。

HEOObjectを指定した場合のみ、Indexを追加で設定することができます。
その場合、設定したIndex番号のモーションが再生されます。

また、Targetがbeginactionsを持つItemであれば、それも同時に実行します。

StopItemは、逆に再生を停止します。実行中のbeginactionsがあれば、それも停止します。