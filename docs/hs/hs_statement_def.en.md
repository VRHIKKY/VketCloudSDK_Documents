# Definition/declaration

Here we will go over the definitions of variables, functions, and constants.

## Local Variables

By declaring variables with "type name variable name" within a function or class method, you can create variables that are only accessible within that scope. Variables can also be initialized at the time of declaration.

```
// Do not specify initial values, only define variables
string emptyText;
// Initialize to be 100 upon declaration
int value = 100;
```

## Global Variables
By declaring a variable outside of functions or methods, you can create a global variable that is accessible within the source file and throughout the entire application.

```
// Declare and initialize a global variable
int value = 100;
void TestFunc(){
  // ...
  }
```

Both [basic types](hs_var.md) and [classes](hs_class.md) can be declared as global variables. However, for [classes](hs_class.md), they cannot be initialized at the time of declaration.

## Class Variables
By declaring a variable within a class definition, you can create a variable that belongs to that class.

```
class MyClass {
    // Declare a class variable
    int value = 100;
}
```

## Definition of constant

If *const* is added before the variable definition of [basic type](hs_var.md), the variable cannot be changed after initialization.

The following types are able to be defined as const: int, float, bool, and string.

```
// Define an immutable constant integer variable
const int immutable = 999;
```

It is possible to declare all local variables, global variables, and class variables as constants by adding const.

## Definition of functions

Functions can be defined in the form of "[return value] [function name] ([argument 1], [argument 2], ...)". Specify *void* to declare a function that does not return a value.

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

## Definition of class

You can define a class, which is a structured type, by writing *class* followed by the class name, thereafter followed by code enclosed in *{ }*.

```
// Class definition
class MyAvatar {
     string name;
     int age;

     public MyAvatar() {
         // write initialization here
     }
}

void main() {
     // create class
     MyAvatar avatar = new MyAvatar();
    
     // age is not set to be public, so accessing it will result in a compilation error
     avatar.age = 999;
}
```

If you define *public* function with the same name as the class name inside the class definition, it becomes a constructor. When creating an instance of a class, call the class constructor after the *new* operator.

HeliScript currently does not support constructors with arguments.

## Scope of variables and functions

Variables get the following scopes depending on where they are defined. Global variables and global functions defined globally can be called and used from files other than the file in which they are defined.

* Global scope: defined at the top level of the file. It can be accessed from other files as well. Class and function definitions can only be written globally.
* Local scope: defined within a function. It disappears when the function ends. Not accessible from the outside.
* Class scope: defined within a class. Class scope variables have separate data for each instance. If *public* is given, it can be accessed from outside the class.

```
// global variables
int globalInt = 100;

// global function
void GlobalFunc() {
     //.....
}

// global class definition
class MyClass {
     // class scope (private)
     string secretID = "xxxx";
     // class scope (public)
     pubic const int value = 123;
}
```
