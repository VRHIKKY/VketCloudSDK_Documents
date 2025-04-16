# スコープと定義

スコープと、変数/定数/関数/クラスの定義について解説します。

## スコープ

定義された場所によって、以下のスコープを得ます。

* グローバルスコープ：ファイルのトップレベルのスコープ。変数/定数/関数/クラスの定義が可能。
* クラススコープ：クラスの中で関数の外のスコープ。変数/定数/関数が定義可能。
* ローカルスコープ：関数の中のスコープ。変数/定数が定義可能。

```
// グローバルスコープの変数
int globalInt = 100;

// グローバルスコープの関数
void GlobalFunc() {
    
    // ローカルスコープの変数
    string name = "";
}

// グローバルスコープのクラス
class MyClass {

    // クラススコープの変数
    string secretID;

    // クラススコープの関数
    public string GetName(){}
}
```

## 変数
### グローバル変数
グローバルスコープで変数を宣言すると、そのソースファイルの中と、アプリ全体で利用できるグローバル変数を宣言できます。<br>
[基本型](hs_var.md) と[クラス](hs_class.md) のどちらの型もグローバル変数として宣言できますが、[クラス](hs_class.md) に関しては宣言と同時に初期化することができません。

```
// 基本型は宣言と同時に初期化が可能
int value = 100;

// クラスは宣言のみ可能
MyClass myClass;
```

### インスタンス変数
クラススコープで宣言された変数を、インスタンス変数といいます。<br>
インスタンス変数は、そのクラスのインスタンスごとに個別のデータを持ちます。<br>
[基本型](hs_var.md) と[クラス](hs_class.md) のどちらの型もインスタンス変数として宣言できます。

```
class MyClass {
    // 基本型のインスタンス変数
    int value;

    // クラスのインスタンス変数
    OtherClass otherClass;
}
```

### ローカル変数

ローカルスコープで「型名 変数名」と宣言することで、そのスコープの中でのみ利用可能なローカル変数を宣言できます。
ローカル変数は宣言と同時に初期化することもできます。

```
void TestFunc() {
    // 初期値の割り当ては任意
    string emptyText;
    int value = 100;
}
```

## 定数

同時に宣言と初期化された変数の前に *const* を付与することで、その変数は定数となり変更できなくなります。<br>
定数にできる型は、[基本型](hs_var.md)の *int*, *float*, *bool*, *string* となります。<br>
グローバル、クラス、ローカルの全スコープで、定数を定義できます。

```
// int型の定数を定義
const int immutable = 999;
```

!!! info "クラススコープでは定数のみ初期化できます"
    定数はクラススコープで宣言と初期化が可能です。<br>
    変数はクラススコープで宣言可能ですが、ここで初期化することはできません。

    ```
    class MyClass {
        // 定数の宣言と初期化
        const int value = 999;

        // NG例: 変数はここで初期化できません
        // int value2 = 999;

        // 変数は宣言のみ可能
        int value2;
    }
    ```

## 関数

「戻り値 関数名(引数1, 引数2, ...)」という形で、関数を定義できます。戻り値を返さない関数を定義するには、*void* を指定します。

```
int Add(int x, int y) {
    return x + y;
}

string CreateName(string firstName, string lastName) {
    string name = firstName + " " + lastName;
    return name;
}

void LogOutput(string log) {
    hsSystemOutput(log);
}
```

## クラス

*class* の後にクラス名を、その後に *{ }* で囲んだコードを記述することで、構造を持った型であるクラスを定義できます。

クラス定義の中に、クラス名と同じ名前の関数を *public* で定義すると、それはコンストラクタになります。<br>
クラスのインスタンスを生成する際には、*new* 演算子の後にクラスのコンストラクタを呼び出してください。

```
// クラスの定義
class MyAvatar {

    // コンストラクタ
    public MyAvatar() {}
}

void main() {
    // クラスのインスタンスを生成
    MyAvatar avatar = new MyAvatar();
}
```

!!! note "クラスのインスタンス変数に外部からアクセスする方法"
    クラススコープの変数や定数に*public*を付与することで、外部からアクセス可能になります。

    ```
    class MyAvatar {
        public string name;
        const int age = 20;
    }

    void main() {
        MyAvatar avatar = new MyAvatar();

        // nameにpublicが付与されているのでアクセス可能
        avatar.name = "my name";
        
        int age;

        // ageは公開設定されていないので、アクセスするとコンパイルエラーになる
        // age = avatar.age;
    }
    ```

!!! warning "現時点で、HeliScriptは引数を持つコンストラクタに対応していません。"
    引数を持つコンストラクタに対応していないため、通常のメソッドでデータを渡してください。
