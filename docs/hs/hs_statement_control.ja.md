# 制御構文

条件分岐や繰り返しなどの、制御構文について説明します。

## if - 条件分岐

`if (条件式)` の後に *{}* で処理を書き分けることで、条件分岐を実現できます。

```
int x = 100;
int y = 200;

if (x == y) {
    // x == y の評価結果が true だった場合の処理
} else {
    // x == y の評価結果が false だった場合の処理
}
```

## while - 繰り返し

`while (条件式) { }` と書くことで、条件式が *false* になるまで、*{}* の中を繰り返し実行する処理が書けます。

ループを強制的に抜けるには *break* を利用します。

```
int x = 0;
while (x < 100) {
    // x が 100より小さい間は、この処理を繰り返し実行する
    hsSystemWriteLine("x=%d" % x);
    ++x;
}

int y = 0;
// 条件式が常にtrueなので、breakで明示的に抜けるまで中の処理を繰り返す
while (true) {
    if (y >= 100) {
        // 強制的にループを抜ける
        break;
    }
    ++y;
}
```

## for - 初期化と反復子込みの繰り返し

`for (初期化処理; 条件式; 反復子) { }` と書くことで、

1. 初期化処理を行い、
2. 条件式を評価した結果が *true* の場合は *{}* 内の処理を実行し、
3. 反復子を処理したあと、
4. 再度条件式を確認し、*true* であれば 2. に戻り処理を繰り返す 

という処理を実現できます。
```
// ループ開始前に、初期化処理によって i が 0 で初期化される。
// ループ処理の開始前に、条件式の i < 100 が毎回判定され、trueの間はループを繰り返す。
// ループの末尾で、反復子である ++i が毎回実行される。
for (int i = 0; i < 100; ++i) {
    // i が 100 より小さい間、この処理を繰り返す。
    hsSystemWriteLine("i=%d" % i);
}
```

##  ループからの脱出 (break, continue)

*break* または *continue* を利用することで、while や for によるループ処理の流れを制御することができます。

### break

*break* によって、ループ処理の途中で処理を中断させることができます。
```
int i = 0;
// 条件式が常にtrueなので、breakで明示的に抜けるまで中の処理を繰り返す。
while (true) {
    if (i >= 100) {
        // breakで強制的にループを終了させる。
        break;
    }
    ++i;
}
```

### continue

*continue* によって、ループ処理の途中で処理をスキップし、次のループ処理に移ることができます。
```
// 変数 i の値を100回表示するループ処理。
for (int i = 0; i < 100; ++i) {
    if (i == 5) {
        // ただし i = 5 の場合にだけ、continueで処理を切り上げるため、何も表示されない。
        continue;
    }
    hsSystemWriteLine("i=%d" % i);
}
```

## switch - 多数の分岐条件を簡潔に記述

```
switch (条件判定に利用する値) {
    case 判定に利用する値:
        // 処理A
        break;
    case 判定に利用する値:
        // 処理B
        break;
    // ...
}
```

と書くことで、1つの値に対して、複数の条件判定式と、それが真である場合に実行する処理を簡潔に書くことができます。

*case* の末尾に *default* 節を置くことで、それより上にある全ての *case* に一致しない場合の処理を書くことができます。

```
int id = 100;
string message;

switch (id) {
    case -1:
        message = "dummy account";
        break;
    case 0:
        message = "root user";
        break;
    default:
        message = "restricted user";
        break;
}
```

??? warning "戻り値のある関数内では、switch文のスコープ外でreturnする必要があります"
    ```
    string GetStatus(int status){
        switch (status)
        {
            case 0:
                return "off";
            default:
                return "on";
        }
        return "on"; // default節があっても、この記述が必要です
    }
    ```

??? warning "他クラスの定数は分岐条件として使用できません"
    グローバルスコープもしくは同クラス内で定義された定数であれば使用可能です。
    ```
    const int GlobalConstant = 0;

    class ClassConstant
    {
        public const int Value = 1;
    }

    class NewComponent
    {
        const int MyConstant = 2;

        public NewComponent()
        {
            int id = 2;
            ClassConstant OtherClassConstant = new ClassConstant();

            switch (id)
            {
                case GlobalConstant: // OK
                    break;
                case OtherClassConstant.Value: //NG: コンパイルエラーになります
                    break;
                case MyConstant: // OK
                    break;
            }
        }
    }
    ```

## { } - ブロックによるスコープ
メソッド内の*{ }*によって、スコープの定義が可能です。

```
public void example() {
    int x = 10;
    { 
        int y = 20;
    }

    // -> "x:10"
    hsSystemOutput("x: %d" % x);

    // スコープ外のためエラー
    hsSystemOutput("y: %d" % y); 
}
```