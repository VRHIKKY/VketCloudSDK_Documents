# Unable to Retrieve Item with hsItemGetOwnScene() Inside Delegate Function
## Overview
When using the delegate function in the HeliScript of an activity class, there are cases where the target item cannot be retrieved using hsItemGetOwnScene().

!!! info "Environment" SDK Version: 13.7.7
OS: Windows 10
Unity: 2019.4.31.f1
Browser: Google Chrome

## Cause
Under normal method execution, the VM (Virtual Machine) manages "which item this component belongs to." However, during delegate execution, this information is not available, which can result in the inability to retrieve items or layers depending on the context.

## Countermeasures
### 1. Specify by Name Using hsItemGet()
Use hsItemGet("(Original Activity Class Item)/(Activity Class Internal Item)").

### 2. Retrieve the Item Before Delegate Execution
Retrieve the item in a location other than during delegate execution.

## Additional Information
This issue is planned to be fixed in Lib15.