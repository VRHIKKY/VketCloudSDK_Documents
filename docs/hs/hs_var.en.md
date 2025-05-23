
# Basic Types

## Kinds of built-in types

HeliScript provides the following basic types.

|type|content|
|:--|:--|
|int|32bit signed integer value|
|float|32bit floating-point number|
|bool| boolean (*true*, or *false*)|
|[string](hs_string.md)|UTF-8 string|

## class type

A class type is provided as a type that has a structure and can be independently defined and generated by the user.

|type|content|
|:--|:--|
|[class](hs_class.md)|structured reference type (valid reference value, or *null*)|

## Manage references

Instances of class are treated as references.

HeliScript uses reference counter to manage the life of references. It increments an internally recorded "reference counter" when an object is referenced from anywhere, and decrements the "reference counter" when it is unreferenced. Objects that are no longer referenced will have a reference counter of 0 and proceed to be automatically deleted.

HeliScript provides *null* as a value that represents an "empty reference" that does not point to anything.

## Get reference

If *ref* is added to the argument definition of a function, the argument will be passed by reference.

As such, you can change the variable of the calling function by assigning the variable at the destination of the argument.

??? quote "Code example of *ref*"
     ```
     void RefFunc(ref int x, ref int y) {
          x = 100;
          y = 200;
     }

     void Test() {
          int x = 0;
          int y = 0;
     
          // pass arguments by ref
          RefFunc(x, y);
     
          // -> "x=100, y=200"
          hsSystemOutput("x=%d, y=%d\n" %x%y);
     }
     ```

Additionally, within a class method, this allows you to reference the current instance itself.

??? quote "Code example of *this*"
    ```
    Printer printer = new Printer();
    Person person = new Person();
    person.Construct(20);

    // -> "age: 20"
    person.PrintAge(printer);

    class Person{
        public int Age;

        public void Construct(int age){
            Age = age;
        }

        public void PrintAge(Printer printer){
            printer.PrintAge(this);
        }
    }

    class Printer{
        public void PrintAge(Person person){
            hsSystemWriteLine("age: %d" % person.Age); 
        }
    }
    ```

## "string" and 'character'

HeliScript recognizes a string enclosed in double quotation marks (" ") as a string object.

Enclosing a single character in single quotes (' ') makes it a character type. Character types are represented internally as 32-bit integer values.

```
// string type object
string str = "VketCloud";
// character type (actually integer value)
int chr = 'V';
```

## Automatic initialization of uninitialized variables

When you define a variable, if you do not initialize it, the following initial values are automatically set depending on the type.

|type|initial value|
|:--|:--|
|int|0|
|float|0.0f|
|bool|*false*|
|[string](hs_string.md)|empty string|
|[class](hs_class.md)|*null*|

The bool type is treated internally as a 32-bit integer value, with 1 assigned to *true* and 0 to *false*.
If you assign an integer value to a bool type variable, 0 will be converted to *false* and everything else will be converted to *true*.

## Instance methods defined on basic types

### int.ToString()

`public string ToString()`

Converts integer-type variable values to string.

### float.ToString()

`public string ToString()`

Converts float-type variable values to string.

### bool.ToString()

`public string ToString()`

Converts bool-type variable values to string.
