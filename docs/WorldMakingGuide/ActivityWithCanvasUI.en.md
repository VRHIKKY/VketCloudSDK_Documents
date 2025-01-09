# Activity Class With CanvasUI
Since SDK12, it has become possible to set UI images inside activity classes, allowing general users to modify UI without editing the release folder after building.

This page explains how to create an activity class that shows a UI when clicked.

!!! info Verification Environment
    SDK Version: 12.1<br>
    OS: Windows 10<br>
    Unity: 2019.4.31.f1<br>
    Browser: Google Chrome

## Steps

### ① Create a Folder for Canvas

Add the Canvas-related directories within the activity class, following the same structure as the usual release folder.  
The directory structure with the added Canvas folder is as follows:  
Brown text represents folders, black text represents files.  
*Note: The added parts are in bold.*

ActivityClassFile  
┣**Canvas**  
┃┣**HeliScript**  
┃┃┗**Canvas HeliScript**  
┃┣**landscape**  
┃┃┗**Canvas json for Landscape**  
┃┣**portrait**  
┃┃┗**Canvas json for Portrait**  
┃┗**Activity Canvas List json**  
┣**gui**  
┃┗**UI images**  
┣HEO  
┃┗Objects  
┣Activity HeliScript  
┗Activity json

## ② Add CanvasList json Information to Activity json

In the Activity json, include the information for the CanvasList used by the activity.

**Vket Cloud UI Structure**

1. Read the required Canvas json information from the CanvasList.  
2. Load each Canvas json and the necessary HeliScript or UI images.

Therefore, it is necessary to load the CanvasList first.

To include this, write the path to the CanvasList json in the "canvaslist" field.

![ActivityWithCanvasUI](img/ActivityWithCanvasUI01.jpg)

The name doesn't have to be CanvasList.json.  
It should be written with a relative path from the Activity json.

## ③ Edit the Activity CanvasList json

![ActivityWithCanvasUI](img/ActivityWithCanvasUI02.jpg)

Create the CanvasList json for the activity.  
For more details, refer to [GUITools - Overview and Setup](https://vrhikky.github.io/VketCloudSDK_Documents/latest/en/GUITools/Setup.html).

The path should be relative from the Activity json.

## ④ Create the Activity Canvas json

![ActivityWithCanvasUI](img/ActivityWithCanvasUI03.jpg)

Create the json file specified in step ③.  

The path should be relative from the Activity json.

## ⑤ Create the Display Process in Activity HeliScript

Like regular Canvas, you can use Canvas functions such as hsSetLayerShow().  
The naming rules for Layout layers are the same as usual.

For actions when pressing Canvas buttons, please use the HeliScript on the Canvas side.

---

## Usage Example

Comic Viewer Activity

![ActivityWithCanvasUI](img/ActivityWithCanvasUI04.jpg)

Images and buttons are displayed using the GUI activity.

## Other Insights

If it doesn't work, try clearing the browser cache.