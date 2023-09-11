
# Random

![RandomNode](img/ActionRandomJP.jpg)

このノード以下に続くアクションを指定範囲の中からランダムに実行します。
`範囲`には、Randomノードからいくつ先までを抽選するかを指定します。
たとえば、`範囲`が3で以下のようなノード順序になっていた場合、

![RandomSample](img/RandomSample.jpg)

ランダムノードによる抽選で実行される可能性があるノードは、`OpenWeb` `Warp` `JumpWorld` です。`ShowNode`は四つ先のノードになるので、抽選の対象からは外れます。逆に、`ShowNode`は上記三つのノードのうちどれかが実行された後に必ず実行されます。 