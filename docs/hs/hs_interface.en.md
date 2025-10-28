# Interface

Interfaces allow you to define types that do not have concrete implementations and are limited only to procedures that classes should implement.

## Interface Definition

Define a block with the interface name specified after the reserved word interface.

Only methods can be defined in interfaces. Also, you cannot implement the contents of methods; only the name and type (return value and arguments) of methods can be defined.

```
// Interface representing a shape
interface Shape {
  // Declares that Shape has the behavior of being drawable by Draw
  public void Draw();
}
```

### Detailed Specifications of Interface Definition

- Interface method definitions must always be public. You can omit the public specification for methods, but in that case they are automatically considered public.
- You cannot write the actual implementation of methods, that is, the {} block and the code inside it.
- Method overloading is possible just like with classes. This allows you to define multiple "methods with the same name and same return type but different number or types of arguments" within one interface.

## Implementing Interfaces in Classes

By placing ":" after the class name and then writing the interface name, a class can implement an interface.

A class that implements an interface must implement all methods defined by that interface.

```
// Circle class implements the Shape interface
class Circle : Shape {
  // Since we implemented the Shape interface, we need to implement the Draw() method defined in Shape.
  public void Draw() {
    hsSystemWriteLine(" *   *");
    hsSystemWriteLine("*     *");
    hsSystemWriteLine(" *   *");
  }
}
```

## Classes Implementing Multiple Interfaces

Classes can implement multiple interfaces simultaneously.

```
// Flying capability interface
interface Flyable {
    public void fly(); // fly
}

// Shooting capability interface
interface Shootable {
    public void takePicture(); // take pictures
}

// Transportation capability interface
interface Transportable {
    public void load(String item); // load cargo
}

// Drone class implementing all the above interfaces
class Drone : Flyable, Shootable, Transportable {
  public void fly() { ... }

  public void takePicture() { ... }

  public void load(String item) { ... }
}
```

## Interface Extension

Interfaces can implement other interfaces and extend functionality by adding their own methods.

```
// IDrone interface inherits all method definition information from Flyable, Shootable, Transportable
interface IDrane : Flyable, Shootable, Transportable {
  // Add unique method GetID in IDrone
  public void GetID();
}

// Drone class implements the IDrone interface
class Drone : IDrone {
  public void fly() { ... }

  public void takePicture() { ... }

  public void load(String item) { ... }

  public void GetID() { ... }
}
```

## Sample Code

```
// Interface defining the capabilities that Shape should have
interface Shape {
  // Declares that Shape has the behavior of being drawable by Draw
  public void Draw();
}

// Circle class implements the Shape interface
class Circle : Shape {
  // Since we implemented the Shape interface, we need to implement the Draw() method defined in Shape
  public void Draw() {
    hsSystemWriteLine(" *   *");
    hsSystemWriteLine("*     *");
    hsSystemWriteLine(" *   *");
  }
}

// Rectangle class implements the Shape interface
class Rectangle : Shape {
  public void Draw() {
    hsSystemWriteLine("*******");
    hsSystemWriteLine("*******");
    hsSystemWriteLine("*******");
    hsSystemWriteLine("*******");
  }
}

component Comp {
  public Comp() {
    // Classes that implement an interface can be assigned to interface type variables

    // Interface type variable representing a shape
    Shape shape;

    // Assign Circle to Shape
    shape = new Circle();
    hsSystemWriteLine("[Draw Circle]");
    shape.Draw();

    // Assign Rectangle to Shape
    shape = new Rectangle();
    hsSystemWriteLine("[Draw Rectangle]");
    shape.Draw();
  }
}
```

Sample code execution result:

```
[Draw Circle]
 *   *
*     *
 *   *
[Draw Rectangle]
*******
*******
*******
*******
```
