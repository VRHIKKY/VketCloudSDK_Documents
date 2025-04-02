# Implementing a Feature to Close a Dialog When Click(Tap) Outside the Canvas

## Overview

This page introduces how to implement the feature "close the dialog when tapping outside the dialog" using the UI functionality of Vket Cloud.

To create a behavior where tapping outside the dialog closes it, you need to prepare an invisible close button detection outside the dialog.

!!! note "Test Environment"
    SDK Version: Originally 4.2, migrated to 7.0<br>
    OS: Windows 10<br>
    Unity: 2019.4.31.f1<br>
    Browser: Chrome

## Prerequisite - What is a Dialog?

A "dialog" refers to a window displayed on the screen, as shown in the image below.  
As shown in the image below, possible actions to remove the dialog from the screen include pressing "Cancel" or "×".  
However, the time spent figuring out how to close the dialog can be stressful for users.

Therefore, by allowing users to close the dialog by clicking anywhere unrelated to the dialog, it becomes a more user-friendly dialog.

![CloseCanvas](./img/CloseCanvas01.jpg)
Example of a dialog that can be checked in the Vket Cloud entrance

Additionally, to add a new dialog in Vket Cloud, you need to use the Activity class.
For more details, please refer to [Creating an Activity Class with Canvas UI Display Functionality](https://vrhikky.github.io/VketCloudSDK_Documents/latest/WorldMakingGuide/ActivityWithCanvasUI.html).

## Steps

### 1. Add a Transparent Button for Tap Detection to the Relevant Layer

```
{
  "Name": "popup_button_close_bg",
  "Type": "button",
  "Platform": "",
  "Language": "",
  "Portrait": "",
  "ParamButton": {
    "FileName": "",
    "OnCursorFileName": "",
    "DownFileName": ""
  },
  "GUIAction": [
    {
      "SetShowLayer": {
        "Name": "GameWindow",
        "Show": false
      }
    }
  ],
  "Show": true,
  "Pos": [
    0,
    0
  ],
  "Size": [
    6000,
    6000
  ],
  "Z": 0,
  "Pivot": [
    0.5,
    0.5
  ],
  "Anchor": "CM"
},
```

Add a large transparent button to the JSON file of the Canvas that constitutes the dialog.  
Since this is a button without an image, leave the image file name blank.

In the above example, an action to close the GameWindow layer is added.  
This implements the behavior of closing the GameWindow layer when clicking outside the dialog.

The size of the background button can be set to any large value.  
In this example, it is set to 6000*6000.

An important point is to set the Z value lower than all other buttons within the layer.  
If the Z value is higher, the close detection will exist above other buttons, making it impossible to perform actions other than closing.

## 2. Add a Transparent Button Matching the Size of the Dialog Background Image That Does Nothing

Since the image type used to display images does not have the ability to block button detection, set the dialog background as a button and configure it to do nothing when clicked.  
If this is not done, clicking anywhere on the dialog other than where buttons are present will close the dialog.

!!! warning "Caution"
    Since the transparent parts of the image set for the button also have button detection, if the dialog background image has transparent parts as margins, the clickable area must be smaller than the button size.

![CloseCanvas](./img/CloseCanvas02.jpg)  
Background image. Use it by placing it in the gui folder within the Activity class.

If the above image is used as an image and placed on the Canvas with a size of 550 * 400,  
a transparent button for detection blocking should be set to 376 * 282 for optimal results.

You can specify the clickable area size using ClickAreaSize, as shown below.

```
{
          "Name": "dialog_bg",
          "Type": "button",
          "Platform": "",
          "Language": "",
          "Portrait": "",
          "ParamButton": {
            "FileName": ".\gui\common_dialog_bg.png",
            "OnCursorFileName": ".\gui\common_dialog_bg.png",
            "DownFileName": ".\gui\common_dialog_bg.png"
          },
          "GUIAction": [],
          "Show": true,
          "Pos": [
            0,
            0
          ],
          "Size": [
            550,
            400
          ],
          "ClickAreaSize" : [
            376,
            282
          ]
          "Z": 1,
          "Pivot": [
            0.5,
            0.5
          ],
          "Anchor": "CM"
        },
```

Since this button does nothing, leave the action empty.

With this, you have created a dialog that closes when clicking outside of it.