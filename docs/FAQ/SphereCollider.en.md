# Solution for When Clicking on SphereCollider Does Not Respond

## Issue
Clicking on the SphereCollider does not elicit any response.

## Cause
The scale value of the GameObject with the SphereCollider is too small.

## Solution
Align the scale values of the GameObject.

## Pitfall
As shown in the figure below, in the "Non-responsive Case," the apparent size of the SphereCollider is the same as in the "Normal Case," but it becomes non-responsive.

### Normal Case

*Scale values are all 0.5*

![SphereCollider_1](img/SphereCollider_1.jpg)

### Non-responsive Case

The apparent size (green sphere) does not change, but it becomes non-responsive.

*Scale values for x and y are 0*

![SphereCollider_2](img/SphereCollider_2.jpg)

## Additional Information
It is not a problem if the scale value of the parent GameObject of the GameObject with the SphereCollider is small.

*Scale.x = 0 but still responds*

![SphereCollider_3](img/SphereCollider_3.jpg)