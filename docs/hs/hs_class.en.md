# Class/Structure

## Class definition

After the reserved word class, define a block that specifies the class name.

```
class class_name {
}
```

## Constructor

If you define a public method with the same name as the class name inside the block, it becomes a constructor. This is called only once when the class object is created.

Below is a minimal sample code.

```
class Test {
     public Test()
     {
     }
}
```

## member variables

```
class Test {
     float Data;
}
```


## method definition

```
class Test {
     float Data;

     public void Foo()
     {
         Data = 0.0f;
     }
}
```


## access specifier
By specifying public before a member or method declaration, this member will become accessible from outside the class.

If you specify private, the member cannot be accessed from the outside. If the access specifier is omitted, the behavior is the same as the private specification.