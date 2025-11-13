# enum Type

## Handling enum Types

An enum type is a collection of named constants.

It is distinguished from int type but internally holds integer values.

When declared without specifying values, 0, 1, 2... are assigned from the beginning.

```
enum MyEnum {
    Apple,
    Orange,
    Banana
}
// MyEnum.Apple = 0, MyEnum.Orange = 1, MyEnum.Banana = 2
```

You can specify values. Subsequent values increase by 1 from there.

```
enum MyEnum2 {
    Dog = 10,
    Cat,
    Mouse
}
// MyEnum2.Dog = 10, MyEnum2.Cat = 11, MyEnum2.Mouse = 12
```

For %d in format strings, it behaves as an int type.

```
"%d" % MyEnum.Banana // = "2"
```

enum types can be cast to int type.

```
int(MyEnum.Banana) // = 2
```

int type values can be cast to enum type.

```
MyEnum(1) // = MyEnum.Orange
```
