# World upload / How to use the World Uploader

Using the SDK, the world can be uploaded to the Vket Cloud / My Vket server for publishing.

Uploading is also needed for private world testing with multiple people.

## How to upload
  
1. Open the "VketCloudSDK" tab and select "Upload to Remote Server".

     ![UploadToRemoteServer](img/UploadToRemoteServer.jpg)

2. By selecting "Upload to Remote Server", the World Uploader window will open.

    On this window, the World ID and related information (world name, thumbnail, world description) registered on the [Vket Cloud](https://cloud.vket.com/account/world){target=blank} official website will be shown as a list.

    Select the world ID to upload the data.

     ![WorldListForUpload](img/WorldListForUpload.jpg)

    Also, if the creator is subscribed to [Basic Plan](https://cloud.vket.com/plan){target=blank} and higher licenses, team collaboration features will be accessible. The team and world can be switched via the upper left team name display.

    ![TeamName](img/TeamName.jpg)

    By selecting "Check the World", the uploaded world can be entered for testing purposes.<br>
    Please note that nothing will be shown before upload.

    ![CheckTheWorld_WorldUploader](img/CheckTheWorld_WorldUploader.jpg)

    On selecting "Upload", a confirmation window will appear.<br>
    Selecting "Yes" will begin the upload process.

    ![UploadConfirmation](img/UploadConfirmation.jpg)

3. A dialog will appear when the upload is complete.

     ![UploadSuccess](img/UploadSuccess.jpg)

4. To enter the uploaded world, click `check the world` from the [World ID management page](https://cloud.vket.com/account/world){target=blank}.

    ![CheckTheWorld_Web](img/CheckTheWorld_Web.jpg)

    Also, the "Check the World" button in the World Uploader will open the uploaded world as well.

    ![CheckTheWorld_WorldUploader](img/CheckTheWorld_WorldUploader.jpg)

!!! caution "Update timing of the uploaded world"
    Updating the uploaded world may cause 5 ~ 15 minutes depending on server process and network environment factors.<br>
    If the world hasn't been updated on after upload and selecting `check the world`, please wait shortly until the update process is completed.

## Publishing the World

The published world will be listed on My Vket's [World List](https://vket.com/play/world){target=blank}.

Also, if a private world URL is shared, the world can be accessed while it is not public on My Vket.<br>
This is useful for world testing with multiple people or to create a closed-community world.

!!! note caution
     To upload the world data, the world ID must be created in advance on the account management screen. If you don't see your world name in the list, please create a world ID from [here](https://cloud.vket.com/account/world){target=blank}.

![CreateWorldID](img/CreateWorldID.jpg)

!!! caution "Issues when uploading multiple scenes"
    If a single Unity project contains more than two scenes, which may be uploaded to different worlds, the first uploaded world may be duplicated, or cause 404 / build errors when entering.<br>
    To prevent this, consider containing only one scene/world per project.<br>
    Also, if this issue happened, it can be fixed by closing the project and deleting the `upload` folder located in the project files, and reboot/reupload the world.
