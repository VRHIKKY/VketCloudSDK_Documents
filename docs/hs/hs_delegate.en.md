# delegate

## Overview

A delegate is a type that represents a reference to a function or class method.<br>
A delegate type variable can store a reference to a function and also call a stored method.

## Declaring a Delegate

To use a delegate, you need to declare a delegate type by specifying the function's signature (return type and parameter types).

A delegate type is declared in the following format:

```
delegate "ReturnType" "DelegateTypeName"("Parameter1", "Parameter2", ...);
```

Here is an example of declaring a specific delegate type.
 In this example, a `PerformAction` type is defined with a return type of `int`, the first parameter type is `string`, and the second parameter type is `bool`.

```csharp
// Declare the PerformAction delegate type
delegate int PerformAction(string text, bool flag);

// The parameter names are optional, so it can also be declared like this
delegate int PerformAction(string, bool);
```

!!! warning "Only basic types int, float, bool, string, and JsVal can be used as arguments"
    Custom classes and other types cannot be used as arguments.

    ```
    // Custom classes cannot be used as arguments
    // delegate int PerformAction(CustomData);

    class CustomData{}
    ```

!!! warning "Declare and define in the global scope"
    Delegates must be declared in the global scope.
    Additionally, delegate type variable definitions must also be in the global scope.

    ```
    // Declaration possible in global scope
    delegate void fCallback();

    // Definition possible in global scope
    fCallback SimpleCallback;

    class SampleClass{
        // Cannot declare in class scope
        // delegate void fBoolCallback(bool);

        // Cannot define in class scope
        // fCallback MyCallback;
    }
    ```

## Using a Delegate

Here is an example of code that registers and invokes a function using a delegate type variable.

```csharp
// Declare the PerformAction delegate type
delegate int PerformAction(string text, bool flag);

// Define a variable of PerformAction type
PerformAction action;

// Register the pre-defined function TestFunc
action += &TestFunc;

// Invoke the registered function (TestFunc)
action("id", true);
```

## Registering Functions

* To register a function to a delegate type variable, you need to prefix the function name with "&".
* When registering a class method to a delegate type variable, you can use the method name directly.

```csharp
// Define a function
int TestFunc(string text, bool flag) {
    // ...
}

// Prefix the function name with "&"
PerformAction action = &TestFunc;
```

```csharp
// Define a class method
class SampleClass {
    int TestMethod(string text, bool flag) {
        // ...
    }
}

// Register using the method name directly
SampleClass sample = new SampleClass();
PerformAction action = sample.TestMethod;
```

## Additional Information

### Delegates as Value Types

Delegates are value types, therefore these can be created without calling `new`. Also, `null` cannot be assigned to a delegate type variable.

When a delegate type variable is assigned to another variable or passed as a function argument, the content of the delegate type variable is copied to the new variable.

```csharp
// No need to use new during initialization
PerformAction action;

// Define another delegate type variable and assign the previous one. This will perform a copy.
PerformAction action2nd = action;

// Changes made to action2nd will not affect action, and vice versa.
action2nd += &DummyFunc;
```

### Return Values When Multiple Functions Are Executed

When calling a delegate that has multiple registered functions with return values, the returned value will be from the last registered function.

---

## Method

(Parameter `T` refers to a function that matches the delegate type variable's signature.)

### Add(T)

`void Add(T func)`

Adds the specified function to this object.

If the function is already registered, no action is taken.

This is equivalent to the `+=` operator.

### Set(T)

`void Set(T func)`

Clears all functions registered to this object and registers the specified function.

This is equivalent to the `=` operator.

### Erase(T)

`void Erase(T func)`

Removes the specified function from this object if it is registered.

If the function does not exist, no action is taken.

This is equivalent to the `-=` operator.

### Clear()

`void Clear()`

Removes all functions registered to this object.

### Count()

`int Count()`

Returns the number of functions registered to this object.

### IsEmpty()

`bool IsEmpty()`

Returns `true` if no functions are registered to this object.

### Exist(T)

`bool Exist(T func)`

Returns `true` if the specified function is registered to this object.

---

## Operators

### `+=` Operator

This operator has the same functionality as `Add()`.

It adds the function specified on the right-hand side to the object.

### `-=` Operator

This operator has the same functionality as `Erase()`.

It removes the function specified on the right-hand side from the object.

### `=` Operator

This operator has the same functionality as `Set()`.

It sets the function specified on the right-hand side to the object and removes all existing registered functions.
