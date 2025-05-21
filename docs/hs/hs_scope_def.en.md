# Scopes and Definitions 
This section explains scope and the definition of variables/constants/functions/classes.

## Scopes
Based on where they are defined, you get the following scopes:

* Global scope: Top-level scope of the file. Variables/constants/functions/classes can be defined.
* Class scope: Scope inside a class but outside functions. Variables/constants/functions can be defined.
* Local scope: Scope inside a function. Variables/constants can be defined.

```
// Variable in global scope
int globalInt = 100;

// Function in global scope
void GlobalFunc() {
    
    // Variable in local scope
    string name = "";
}
// Class in global scope
class MyClass {

    // Variable in class scope
    string secretID;

    // Function in class scope
    public string GetName(){}
}
```
## Variables
### Global Variables
Declaring a variable in global scope allows you to declare a global variable that can be used throughout the source file and the entire application.<br>
You can declare variables of both [basic types](hs_var.md) and [classes](hs_class.md) as global variables, but for [classes](hs_class.md), you cannot initialize them at the same time as declaration.

```
// Basic types can be initialized at the same time as declaration
int value = 100;

// Classes can only be declared
MyClass myClass;
```

### Instance Variables
Variables declared in class scope are called instance variables.<br>
Instance variables hold separate data for each instance of that class.<br>
Both [basic types](hs_var.md) and [classes](hs_class.md) can be declared as instance variables.

```
class MyClass {
    // Instance variable of basic type
    int value;

    // Instance variable of class type
    OtherClass otherClass;
}
```

### Local Variables
By declaring "type name" in local scope, you can declare local variables that can only be used within that scope.
Local variables can also be initialized at the same time as declaration.

```
void TestFunc() {
    // Assignment of initial value is optional
    string emptyText;
    int value = 100;
}
```

## Constants
By adding *const* before a variable that is declared and initialized at the same time, that variable becomes a constant and cannot be changed.<br>
The types that can be made into constants are the [basic types](hs_var.md) *int*, *float*, *bool*, *string*.<br>
Constants can be defined in all scopes: global, class, and local.

```
// Define an int constant
const int immutable = 999;
```

!!! info "Only constants can be initialized in class scope"
    Constants can be declared and initialized in class scope.<br>
    Variables can be declared in class scope, but cannot be initialized here.
    ```
    class MyClass {
        // Declaration and initialization of a constant
        const int value = 999;

        // NG example: variables cannot be initialized here
        // int value2 = 999;

        // Variables can only be declared
        int value2;
    }
    ```

## Function
You can define a function in the form "return_value function_name(argument1, argument2, ...)". To define a function that does not return a value, specify *void*.

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

## Class
By writing *class* followed by a class name, and then code enclosed in *{ }*, you can define a class, which is a type with structure.
If you define a function with the same name as the class with *public* inside the class definition, it becomes a constructor.<br>
When creating an instance of a class, please call the class constructor after the *new* operator.

```
// Class definition
class MyAvatar {

    // Constructor
    public MyAvatar() {}
}
void main() {
    // Create an instance of the class
    MyAvatar avatar = new MyAvatar();
}
```

!!! note "How to access instance variables of a class from outside"
    Class scope variables and constants become accessible from outside by adding *public* to them.
    ```
    class MyAvatar {
        public string name;
        const int age = 20;
    }
    void main() {
        MyAvatar avatar = new MyAvatar();

        // name can be accessed because it has public attached
        avatar.name = "my name";
        
        int age;

        // age is not set to public, so accessing it will result in a compile error
        // age = avatar.age;
    }
    ```

!!! warning "Currently, HeliScript does not support constructors with arguments."
    Since constructors with arguments are not supported, please pass data using normal methods.