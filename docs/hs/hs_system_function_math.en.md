
# Built-in functions - Math

!!! info "Note"
    Functions that enable math operations.

## hsMathCos(float)

`float hsMathCos(float radian)`
Find the cosine.

## hsMathSin(float)

`float hsMathSin(float radian)`
Find the sine.

## hsMathTan(float)

`float hsMathTan(float radian)`
Find the tangent.

## hsMathAcos(float)

`float hsMathAcos(float value)`
Calculates the arc cosine (inverse cosine).

!!! info
    Input: Values from -1 to 1 (-1≤value≤1). If input is outside this domain, -nan is returned<br>
    Output: Radian values from 0 to π (0≤θ≤π radians)<br>

## hsMathAsin(float)

`float hsMathAsin(float value)`
Calculates the arc sine (inverse sine).

!!! info
    Input: Values from -1 to 1 (-1≤value≤1). If input is outside this domain, -nan is returned<br>
    Output: Radian values from -π/2 to π/2 (-π/2≤θ≤π/2 radians)<br>

## hsMathAtan2(float, float)

`float hsMathAtan2(float y, float x)`
Find the arc tangent of y / x.

## hsMathSqrt(float)

`float hsMathSqrt(float f)`
Find the square root.

## hsMathRandom(int)

`int hsMathRandom(int n)`
Find a random number between 0 and less than n.

## hsMathDegToRad(float)

`float hsMathDegToRad(float degree)`
Converts degrees to radians.

## hsMathRadToDeg(float)

`float hsMathRadToDeg(float radian)`
Converts radians to degrees.
