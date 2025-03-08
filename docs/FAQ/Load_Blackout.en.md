# The screen goes completely black after loading is complete

## Phenomenon
The build progresses without issues, but once the loading is complete, the entire screen turns black. The engine itself does not stop functioning as the console logs continue to run, and the background music can still be heard.

Additionally, the DrawCall count is unusually high.

When switching to debug mode and enabling fly mode, the screen becomes visible, and the DrawCall count decreases. However, interactive elements such as gimmicks and UI cannot be operated. The display in fly mode may occasionally appear sepia-toned.


!!! info "Environment"
    SDK Version: 9.3<br>
    Unity: 2019.4.31.f1<br>

## Steps Taken to Resolve the Issue
### Checked in Debug Mode
Observed that the DrawCall count was high, but enabling fly mode displayed the screen while still disabling interaction with gimmicks and UI. It was also confirmed that the DrawCall count significantly decreased in fly mode.

### Disabled Scene Objects and Rebuilt
Investigated problematic objects by systematically deactivating scene objects, starting with suspicious ones or deactivating them in halves to efficiently narrow down the issue.

As a result, the issue was resolved when an object assigned to the recently updated HEO object was deactivated. Re-exporting the HEO object without any changes also fixed the issue.

It’s possible that the folder location during output was incorrect or a similar problem occurred.

## Conclusion
It was determined that this issue arises from errors related to materials. The phenomenon is known to occur in cases of material or rendering-related errors. By deactivating recently updated game objects one by one, the problematic object can be identified. Once identified, it’s advisable to suspect visual-related issues. In the case of the HEO object, re-exporting or similar actions may resolve the problem.