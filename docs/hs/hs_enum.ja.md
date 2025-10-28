# enum型

## enum型の取り扱い
enum型は、名前が付いた定数の集まりです。

int型とは区別されますが、内部的に整数値を持っています。

値を指定せずに宣言すると先頭から0,1,2...が割り当てられます。
```
enum MyEnum {
    Apple,
    Orange,
    Banana
}
// MyEnum.Apple = 0, MyEnum.Orange = 1, MyEnum.Banana = 2
```

値を指定することができます。その後の値はそこから1ずつ増えていきます。
```
enum MyEnum2 {
    Dog = 10,
    Cat,
    Mouse
}
// MyEnum2.Dog = 10, MyEnum2.Cat = 11, MyEnum2.Mouse = 12
```

書式文字列中の%dに対してはint型として振る舞います。
```
"%d" % MyEnum.Banana // = "2"
```

enum型はint型にキャスト出来ます。
```
int(MyEnum.Banana) // = 3
```

int型の値をenum型にキャストすることが出来ます。
```
MyEnum(2) // = MyEnum.Orange
```
