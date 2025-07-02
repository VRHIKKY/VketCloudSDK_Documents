# Troubleshooting Multiplayer Issues After Entering a World

## Issue

You may be able to enter the world, but multiplayer functionality might not be working.
Here are the things to check in such cases.

!!! info "Info"
    SDK Version : 9.5.2<br>
    OS : Windows 10<br>
    Unity : 2019.4.31.f1<br>
    Browser : Google Chrome

## Prerequisites

Make sure that you can enter the world and play multiplayer properly in the following environment.

## Cases and Causes

### 1.Loading does not complete

!!! warning "Error Details"
    Issue: When accessing the world from a different environment, an error occurs during loading:
    `heliodor.js:1 Uncaught DOMException: Failed to execute 'texImage2D' on 'WebGL2RenderingContext': The image element contains cross-origin data, and may not be loaded.`
    The timing of the error varies, and sometimes the world can still be entered.

!!! info "Investigation Result"
    Cause: The world was being accessed from a PC using tethering.
    When tethering, the connection is treated as a mobile network, so the assets being downloaded are tailored for mobile devices.

!!! note "Conclusion"
    Check the network environment.

### 2.Unable to Play Multiplayer

!!! warning "Error Details"
    Issue: Despite being in the same voice chat room in a different environment, multiplayer cannot be played. Multiplayer works fine in this environment.
    In the other environment, other players may appear briefly.

!!! info "Investigation Result"
    Cause 1: The microphone device was not connected.
    Without a microphone device, RTC (Real-Time Communication) connection cannot be established.
    Cause 2: The security software was blocking SSO (Single Sign-On) communication.

!!! note "Conclusion"
    The issue might be related to the device. Check the hardware environment as well.
    Background software can also cause problems. You may need to check the settings of security software, especially to see if any blocks occur on .dev domains or localhost domains.

### Other Insights

Here are the things to check in order to resolve the issue:

!!! info "Checklist for When Multiplayer is Not Working (or You Can't Enter the World)"
    - Can you play multiplayer in your own environment?
    - Is the network environment special (e.g., tethering, Ethernet based on a mobile connection, etc.)?
    - Does the connected device have a microphone?
    - Is there a gamepad with a limited number of buttons connected to the device?
    - Is there any security software running on the connected device?
