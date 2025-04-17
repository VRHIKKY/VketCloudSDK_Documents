# Script Error Checking with Assertions

By leveraging HeliScript's [ability to define global functions](../hs/hs_scope_def.md), you can implement custom assertion-like functionality. This article demonstrates how to implement and use an assertion function that automatically displays error messages when conditions are not met.

!!! note "Environment"
    SDK version: 14.1.2 or later<br>
    OS: Windows 11<br>
    Unity: 2022.3.6f1<br>
    Browser: Google Chrome<br>

## What is an Assertion Function?

An assertion function is a useful tool that verifies conditions are "true". If a condition is "false", it will display a specified error message. This helps identify script problems early during debugging.

## Implementation Example

Below is an implementation example of a custom Assertion function. Please add this code to a file in the [global scope](../hs/hs_scope_def.md):

```
void chsSystemAssert(bool condition, string errorMessage)
{
    // Do nothing if not in debug mode
    if (!hsSystemIsDebugMode()) return;
    if (condition) return;
    hsSystemWriteLine("Error: %s" % errorMessage);
}
```

!!! warning 
    This function only works when debug mode is enabled (it won't operate when debug mode is off)<br>
    This debug mode limitation applies even after uploading - the function will work if debug mode is enabled<br>
    Even when an error is found, the program will continue running. This is because HeliScript currently has no functionality to force program termination.<br>

!!! note "About Function Names"
    In HeliScript, global functions provided by the SDK typically begin with `hs` (e.g., `hsSystemWriteLine`). In the example above, we use the prefix `chs` to distinguish our custom global function.
    
    You can freely choose names for your custom functions. Implement with naming conventions that match your style.

## How to Use

Call this function wherever you want to check for errors in your script:

```
chsSystemAssert(condition, errorMessage);
```

- `condition`: The condition to check (should be true)
- `errorMessage`: Message to display if the condition is not met

For example, to verify that a player's position is within a specific range:

```
// Check if player's x-coordinate is within range 0-100
float posX = GetPlayerPosX();
chsSystemAssert(posX >= 0 && posX <= 100, "Player is outside valid range!");
```