# Loading Stack at 20%

## Issue Occurred

The loading AStack at 20%.  
When the loading stops, no messages are displayed in the console.  
According to the network tab, the loading halts after guideframe.png is loaded.  
Normally, the avatar file png.hrm should be loaded next, but it does not even start loading.

## Investigation Steps

### ① Investigation of Existing Error Messages

It is possible that an existing error is causing the loading to stop, preventing even an error message from being displayed.  
Therefore, we compare the error messages between the local environment, where loading works correctly, and the test2 environment, where it fails.  

However, no differences in error messages are found.  
Thus, it is unlikely that existing error messages are obstructing the loading process.

### ② Investigation of the Avatar File png.hrm

The avatar file is loaded from the scene JSON.  
A possible reason for the issue could be that the scene JSON is not being loaded correctly.  

However, guideframe.png is also a file loaded from the scene JSON (it is the image for the click guide).  
Additionally, the network tab confirms that the scene JSON itself has been loaded successfully.  

Therefore, it is likely that an issue exists within the scene JSON, preventing it from being properly processed without triggering an error.

### ③ Investigation of Scene JSON Differences

There may be differences in the scene JSON files between the local environment, where loading works, and the test2 environment, where it fails.  
To check for differences, we download the scene JSON from the test2 environment via the network tab and compare it with the local environment's scene JSON (overwriting the local file and checking the differences using GitHub Desktop).  

As a result, we find that the file path for the heo object is different.

### ④ Investigation of the heo Object's File Path

If there is an issue with the file path for the heo object, it could be the cause of the problem.  
Checking the tex_sample directory where the heo object is located, we find that there are half-width spaces in the image file names, causing texture compression to fail.  

Based on this, we conclude our investigation with the hypothesis that this issue is causing the loading failure.

## Summary

- The loading stops within the scene JSON → Suggesting an issue with file loading in the scene JSON.
- The scene JSON contents differ between the local environment and the test2 environment.
- The differences reveal that different files are being loaded.
- The texture compression fails because the texture names contain half-width spaces.
