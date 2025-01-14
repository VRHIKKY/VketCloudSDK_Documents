# The .mp3 audio file in the activity is not output during the build

## Phenomenon
How to handle cases where the audio material enclosed in an activity does not enter the release folder during the SDK build.

## Cause

The ID3 metadata of the audio file does not conform to the specified standards.

The ID3 metadata that can pass the SDK check is as follows.

| ID3 Version | Binary |
| --- | --- |
| ID3v1 | 54 41 47 |
| ID3v2.3 | 49 44 33 |
| ID3v2.4 | FF FB A0 |
| ID3v2.5 | FF FB B0 |

.mp3 data that cannot pass this check is rejected.

## Solution

![AudioExportWithMeta_1](img/AudioExportWithMeta_1.gif)

1. Select the rejected .mp3 audio file

2. Open properties and move to the "Details" tab

3. Select "Remove Properties and Personal Information" at the bottom of the window

4. Change the toggle to "Remove the following properties from this file"

    *Note: It is also okay to leave it as "Create a copy with all possible properties removed," but it will create a copy and increase the workload.

5. Press the "Select All" button

6. Press OK to complete the property removal

7. Try the SDK build again (if you are working with a copied file, don't forget to copy the file back)
