# Assertionを使ったスクリプトエラーチェック

HeliScriptの[グローバルスコープで関数を定義できる特性](../hs/hs_scope_def.md)を活用することで、Assertionのような機能を独自に実装できます。
この記事では、条件が満たされない場合に自動的にエラーメッセージを表示するAssertion関数の実装例と使い方を紹介します。

!!! note "動作環境"
    SDKバージョン : 14.1.2 以降<br>
    OS : Windows11<br>
    Unity : 2022.3.6f1<br>
    ブラウザ :Google Chrome<br>

## Assertion関数とは

Assertion関数は、条件が「真(true)」であることを確認するための便利な機能です。条件が「偽(false)」の場合は、指定したエラーメッセージを表示します。これにより、デバッグ時にスクリプトの問題を早期に発見できます。

## 実装例

以下は、カスタムAssertion関数の実装例です。このコードを[グローバルスコープ](../hs/hs_scope_def.md)でファイルに追加してください：

```
void chsSystemAssert(bool condition, string errorMessage)
{
    // デバッグモードでない場合は何もしない
    if (!hsSystemIsDebugMode()) return;
    if (condition) return;
    hsSystemWriteLine("Error: %s" % errorMessage);
}
```

!!! warning 
    - 関数はデバッグモードがオンの時のみ機能します。この制限はアップロード後でも同様で、デバッグモードがオンになっていれば機能します。<br>
    - エラーが見つかった場合でも、プログラムは停止せずに続行します。これは、HeliScriptには現在プログラムを強制的に停止させる機能がないためです。<br>

!!! note "関数名について"
    HeliScriptでは、SDK標準で用意されているグローバル関数は基本`hs`で始まります（例：`hsSystemWriteLine`）。上記の例では、カスタムで作成したグローバル関数であるため、区別するために`chs`というプレフィックスを使用しています。
    
    なお、カスタム関数の名前は自由に決めることができます。自身のスタイルに合った命名で実装してください。

## 使い方

スクリプト内でエラーチェックしたい箇所で、この関数を呼び出します：

```
chsSystemAssert(condition, errorMessage);
```

- `condition`: チェックしたい条件（trueであるべき）
- `errorMessage`: 条件が満たされない場合に表示するメッセージ

例えば、プレイヤーの位置が特定の範囲内にあることを確認したい場合：

```
// プレイヤーのx座標が0〜100の範囲内かチェック
float posX = GetPlayerPosX();
chsSystemAssert(posX >= 0 && posX <= 100, "プレイヤーが有効範囲外です！");
```