# Enabling JS Upload Feature in SDK 13.7 (Paid Plans Only, SDK 13.7 and Later)

## Purpose

By uploading JavaScript (aka JS), you can execute JS in your world. 

You can implement various gimmicks using JavaScript-based scripts (programming) in Vket Cloud, such as "browser games," "3D websites," and "online events."

JavaScript is a programming language that is commonly used in the development of web browser-based applications. JavaScript is often used in combination with HTML and CSS, making it easy for beginners to start developing on the web browser. JavaScript is also characterized by its rich library support.

With this feature, Vket Cloud developers can achieve the following:

- **Implementation of Game World Save Functionality**: Implement a full-fledged online game with server synchronization and game world save functionality.

- **Weather Animation in the World Using Public Weather APIs**: Change the weather animation in the world using publicly available weather APIs.

- **Operation of a Membership-based Web Metaverse Space Linked to Your Own Database**: Operate a membership-based web metaverse space linked to your own database.


## Supported SDK Versions

- **SDK 13.7 and Later**

## Eligible Users

Users subscribed to the following paid plans can enable the JS upload feature in SDK 13.7 and later, allowing them to upload JavaScript. For users on free plans, JavaScript will be automatically excluded from the uploadable files.

- Basic Plan
- Business Plan
- Business Plus Plan
- Enterprise Plan

For more information on pricing plans, please check [here](https://cloud.vket.com/plan){target=_blank}.

## JS Submission Procedure

1. **Right-click in the Project Window** and create the `File Deployment Config` item.

   ![Create File Deployment Config](img/JsUpload_1.jpg)

2. **Access Base Setting** and change `File Deployment Mode` to `Custom`. Then, create the file in your Asset by clicking the `Create File Deployment Config` button.

   ![Set File Deployment Mode](img/JsUpload_2.jpg)

3. Set the JavaScript you want to include in the target `File Deployment Config`.

   **Sample JS**: `vkc_sample.js`

   ![Set JavaScript](img/JsUpload_3.jpg)

4. Set the target `Scriptable Object` in the **Base Setting's File Deployment Config**.

   ![Set Scriptable Object](img/JsUpload_4.jpg)
   ![Set Scriptable Object](img/JsUpload_5.jpg)

5. Finally, perform **Build And Run** or **Upload**.

This completes the procedure for setting up the JS upload feature in SDK 13.7.