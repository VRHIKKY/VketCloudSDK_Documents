# デリゲート関数内でhsItemGetOwnScene()してもアイテムが取得出来ないことがある

## 概要

アクティビティクラス内HeliScriptでdelegate関数を用いた場合、その中でhsItemGetOwnScene()を使用しても対象のアイテムが取得出来ないことがある。

!!! info "発生環境"
    SDKバージョン : 13.7.7 <br>
    OS : Windows 10 <br>
    Unity : 2019.4.31.f1 <br> 
    ブラウザ : Google Chrome

## 原因

通常のメソッド実行では、VM(仮想マシン)側で「このコンポーネントがどのItemに所属しているか」を管理しているが、デリゲート実行時にはこの情報がないため、状況に応じてItemやLayerを取得できなくなってしまう。

## 対策

### 1. hsItemGet()で名前指定する
hsItemGet("(アクティビティクラス元アイテム)/(アクティビティクラス内アイテム)")で記載します。

### 2. デリゲート実行前にItemを取っておく
デリゲート実行以外の場所でアイテムを取っておきます。
