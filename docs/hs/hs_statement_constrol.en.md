# Control Statements

This section explains control statements such as conditional branching and loops.

## if - Conditional Branching
You can implement conditional branching by writing processes in *{}* after `if (condition)`.

```
int x = 100;
int y = 200;

if (x == y) {
    // Process when x == y evaluates to true
} else {
    // Process when x == y evaluates to false
}
```

## while - Loop
By writing `while (condition) { }`, you can create a process that repeatedly executes the contents of *{}* until the condition becomes *false*.

```
int x = 0;
while (x < 100) {
    // Repeatedly execute this process while x is less than 100
    hsSystemWriteLine("x=%d" % x);
    ++x;
}
```

## for - Loop with Initialization and Iterator
By writing `for (initialization; condition; iterator) { }`, you can implement a process that:

1. Performs initialization,
2. If the condition evaluates to *true*, executes the process inside *{}*,
3. After processing the iterator,
4. Checks the condition again, and if *true*, returns to step 2 to repeat the process

```
// Before the loop starts, i is initialized to 0 by the initialization process.
// Before each loop iteration, the condition i < 100 is evaluated, and the loop continues while true.
// At the end of each loop, the iterator ++i is executed.
for (int i = 0; i < 100; ++i) {
    // Repeat this process while i is less than 100.
    hsSystemWriteLine("i=%d" % i);
}
```

## Breaking Out of Loops (break, continue)
You can control the flow of loop processing using *break* or *continue* in while or for loops.

### break
*break* allows you to interrupt loop processing in the middle.

```
int i = 0;
// Since the condition is always true, the inner process repeats until explicitly exited with break.
while (true) {
    if (i >= 100) {
        // Forcibly terminate the loop with break.
        break;
    }
    ++i;
}
```

### continue
*continue* allows you to skip processing in the middle of a loop and move to the next loop iteration.

```
// Loop process to display the value of variable i 100 times.
for (int i = 0; i < 100; ++i) {
    if (i == 5) {
        // However, only when i = 5, continue cuts off the process, so nothing is displayed.
        continue;
    }
    hsSystemWriteLine("i=%d" % i);
}
```

## switch - Concisely Describe Multiple Branch Conditions

```
switch (value used for condition judgment) {
    case value used for judgment:
        // Process A
        break;
    case value used for judgment:
        // Process B
        break;
    // ...
}
```

By writing this way, you can concisely write multiple conditional judgment expressions for one value and the processes to execute when they are true.

By placing a *default* clause at the end of the *case* statements, you can write the process for when none of the *case* statements above match.

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
