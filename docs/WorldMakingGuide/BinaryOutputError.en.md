# Error "Binary Output Failed" Occurs and Freezes During Loading Screen

## Issue
During loading after a build, the console displays the error "Binary output failed," causing the application to freeze.

!!! info Environment Details
    SDK Version: 13.7<br>
    OS: Windows<br>
    Unity: 2022.3.6f1<br>
    Browser: Google Chrome

## Cause and Solution

The issue arises when using `new` to initialize fields or global variables in Heliscript classes. Moving the initialization to the constructor resolves the problem.

```
class Test {
    // Incorrect
    list<Transform> _list = new list<Transform>();

    // Correct
    List<Transform> _list;

    public Test()
    {
        // Initialize with 'new' in the constructor
        _list = new list<Transform>();
    }
}
```
