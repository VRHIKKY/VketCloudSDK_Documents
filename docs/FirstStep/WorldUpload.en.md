# World upload

Using the SDK, the world can be uploaded to the Vket Cloud / My Vket server for publishing.

## How to upload
  
1. Click "VketCloudSDK" and choose "Upload to Remote Server" in the top menu.

     ![UploadToRemoteServer](img/UploadToRemoteServer.jpg)

2. A pop-up will open on Unity. Select the world name to upload.

     ![WorldListForUpload](img/WorldListForUpload.jpg)

3. A dialog will appear when the upload is complete.

     ![UploadSuccess](img/UploadSuccess.jpg)

4. To enter the uploaded world, click `check the world` from the World ID management screen.

     ![CheckTheWorld](img/CheckTheWorld.jpg)

!!! note caution
     To upload the world data, the world ID must be created in advance on the account management screen. If you don't see your world name in the list, please create a world ID from [here](https://cloud.vket.com/account/world){target=blank}.

     ![CreateWorldID](img/CreateWorldID.jpg)

!!! caution "Issues when uploading multiple scenes"
    If a single Unity project contains more than two scenes, which may be uploaded to different worlds, the first uploaded world may be duplicated, or cause 404 / build errors when entering.<br>
    To prevent this, consider containing only one scene/world per project.<br>
    Also, if this issue happened, it can be fixed by closing the project and deleting the `upload` folder located in the project files, and reboot/reupload the world.
