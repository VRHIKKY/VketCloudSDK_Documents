
# 組み込み関数 - 数学

!!! note "概要"
    演算を実現する関数。

***

## hsMathCos(float)

`float hsMathCos(float radian)`
余弦(コサイン)を求める。

## hsMathSin(float)

`float hsMathSin(float radian)`
正弦(サイン)を求める。

## hsMathTan(float)

`float hsMathTan(float radian)`
正接(タンジェント)を求める。

## hsMathAcos(float)

`float hsMathAcos(float value)`
逆余弦(アークコサイン)を求める。

!!! info
    入力: −1から1までの値 (−1≤value≤1)。定義域外の入力の場合、-nanが出力されます<br>
    出力: 0からπまでのラジアン値 (0≤θ≤π ラジアン)<br>

## hsMathAsin(float)

`float hsMathAsin(float value)`
逆正弦(アークサイン)を求める。

!!! info
    入力: −1から1までの値 (−1≤value≤1)。定義域外の入力の場合、-nanが出力されます<br>
    出力: −π/2からπ/2までのラジアン値 (−π/2≤θ≤π/2 ラジアン)<br>

## hsMathAtan2(float, float)

`float hsMathAtan2(float y, float x)`
y / x の逆正接(アークタンジェント)を求める。

## hsMathSqrt(float)

`float hsMathSqrt(float f)`
平方根を求める。

## hsMathRandom(int)

`int hsMathRandom(int n)`
0からn未満の間のランダムな数値を求める。

## hsMathDegToRad(float)

`float hsMathDegToRad(float degree)`
度数をラジアンに変換する。

## hsMathRadToDeg(float)

`float hsMathRadToDeg(float radian)`
ラジアンを度数に変換する。
