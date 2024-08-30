
# Control structure

Describes control constructs such as conditional branching and repetition.

## if - conditional branch
Conditional branching can be realized by dividing the processing with *{}* after `if (conditional expression)`.

```
int x = 100;
int y = 200;

if (x == y) {
     // what to do if x == y evaluates to true
} else {
     // What to do if x == y evaluates to false
}
```

## while - repeat
By writing `while (conditional expression) { }`, you can write a process that repeatedly executes *{}* until the conditional expression becomes *false*.

Use *break* to force exit from the loop.

```
int x = 0;
while (x < 100) {
     // repeat this process while x is less than 100
     ++x;
}

int y = 0;
// Since the conditional expression is always true, repeat the processing until you explicitly exit with break
while (true) {
     if (y >= 100) {
         // force exit from loop
         break;
     }
     ++y;
}
```

## for - iteration with initialization and iterators
By writing `for (initialization; conditional expression; iterator) { }`, the following process will occur.

1. Initialize variable,
2. If the result of evaluating the conditional expression is *true*, execute the processing within *{}*.
3. After processing the iterator,
4. Check the conditional expression again, and if it is *true*, return to 2. and repeat the process

Conditional branching is achieved by containing the processing statements in *{}*.

```
int i;
for (i = 0; i < 100; ++i) {
     // repeat this process 100 times
     hsSystemOutput("%d\n" %i);
}
```

## Exiting Loops (break, continue)

Using *break* or *continue*, you can control execution of loop process.

### break

*break* allows you to exit the loop in the middle of its execution.

```csharp

int i = 0;
// This loop will continue indefinitely since the condition is always true, unless explicitly exited with break.
while (true) {
    if (i >= 100) {
        // Forcefully exit the loop with break.
        break;
    }
    ++i;
}

```

### continue

*continue* allows you to skip the remaining loop process and move on to the next iteration.

```csharp

// This loop displays the value of i 100 times.
for (int i = 0; i < 100; ++i) {
    if (i == 5) {
        // However, when i equals 5, continue skips the rest of the loop, so nothing is displayed.
        continue;
    }
    hsSystemWriteLine("i=%d" % i);
}

```

## switch - Concise description of many branch conditions
```
switch (value used for condition judgment) {
     case judgment_value_A:
         // Process A
         break;
     case judgment_value_B:
         // process B
         break;
     // ...
}
```

You can concisely write multiple conditional expressions and the processing to be executed when true for one value.

By putting a *default* clause at the end of a *case*, you can write the processing statements when none of the *cases* are met.

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