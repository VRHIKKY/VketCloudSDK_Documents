# World Upload

Using the SDK, the world can be uploaded to the Vket Cloud / My Vket server for publishing.

Uploading is also needed for private world testing with multiple people.

## How to upload
  
1. Open the "Vket Cloud SDK" tab and select "Upload to Remote Server".

    ![UploadToRemoteServer](img/WorldUpload01.jpg)

2. By selecting "Upload to Remote Server", the World Uploader window will open.

    On this window, the World ID and related information (world name, thumbnail, world description) registered on the [Vket Cloud](https://cloud.vket.com/en/account/world){target=_blank} official website or by [Registering a new world on SDK](#registering-a-new-world) will be shown as a list.

    ![WorldListForUpload](img/WorldUpload02.jpg)

    Also, if the creator is subscribed to [Basic Plan](https://cloud.vket.com/en/plan){target=_blank} and higher licenses, team collaboration features will be accessible. The team and world can be switched via the upper left team name display.

    ![TeamName](img/WorldUpload03.jpg)

    By selecting "World Preview", the uploaded world can be entered for testing purposes.<br>
    Please note that nothing will be shown before upload.

    ![CheckTheWorld_WorldUploader](img/WorldUpload04.jpg)

### Registering a New World

From SDK Ver14.1, registering a new world / World ID creation can now be done on the SDK aside from the [Vket Cloud](https://cloud.vket.com/en/account/world){target=_blank} official website.

1. Click the `Add World` button on the bottom left.

    ![WorldUpload11](img/WorldUpload11.jpg)

2. By clicking `Add World`, a window for registering a new world will open.<br>
    Follow the instructions to enter the required information:

    - Creator Team *Switchable on [Basic Plan](https://cloud.vket.com/plan){target=_blank} and higher licenses
    - World Name
      - Up to 30 characters
    - World Description
      - Up to 500 characters
    - World Thumbnail Image
      - jpg / png format
      - Recommended Size: 382px × 696 px (Aspect Ratio 16:9)
      - File Size: 3MB or under

    ![WorldUpload12](img/WorldUpload12.jpg)

3. The `Advanced Settings (Optional)` tab includes additional information to be configured.

    - World Detail Images
    - Loading Images *If none, the thumbnail image will be used instead
      - PC / Mobile Landscape
      - Mobile Portrait

    ![WorldUpload13](img/WorldUpload13.jpg)

4. After adding all information, click `Create World` to submit world information.

    ![WorldUpload14](img/WorldUpload14.jpg)

5. If world registration is complete, a window showing completion will be shown, and the new world will be added to the world list. <br>
  If you wish to edit the registered information, access the [Manage Worlds](https://cloud.vket.com/account/world){target=_blank} page on the official website.<br>
  This page can be accessed by the "My Page" button located on the window's top right.

    ![WorldUpload15](img/WorldUpload15.jpg)

    ![WorldUpload16](img/WorldUpload16.jpg)

### Uploading World Data

1. Select the world ID to upload the data.

    ![WorldListForUpload](img/WorldUpload02.jpg)

2. On selecting "Upload", a confirmation window will appear.<br>
   Selecting "Yes" will begin the upload process.

    ![WorldUpload](img/WorldUpload05.jpg)

    ![UploadConfirmation](img/WorldUpload06.jpg)

3. A dialog will appear when the upload is complete.

    ![UploadSuccess](img/WorldUpload07.jpg)

4. To enter the uploaded world, click `World Preview` from the [World ID management page](https://cloud.vket.com/en/account/world){target=_blank}.

    ![CheckTheWorld_Web](img/WorldUpload08.jpg)

    Also, the "World Preview" button in the World Uploader will open the uploaded world as well.

    ![CheckTheWorld_WorldUploader](img/WorldUpload04.jpg)

!!! warning "Update timing of the uploaded world"
    Updating the uploaded world may cause 5 ~ 15 minutes depending on server process and network environment factors.<br>
    If the world hasn't been updated on after upload and selecting `World Preview`, please wait shortly until the update process is completed.

!!! note "Build Options on World Upload"
    In [Vket Cloud SDK Settings](../SDKTools/VketCloudSDKSettings.md), there is a feature for [configuring build options](../WorldEditingTips/BuildOptions.md) to enable engine-side file compression on Build & Run and world data upload.<br>
    Using this feature will improve performance on tight-spec environments such as smartphones.<br>
    If upload time seems long, or build fails repeatedly, please reconsider this settings, or see [Build Error / How to troubleshoot issues](../troubleshooting/BuildError.md).

## Publishing the World

The world's public/private status may be chosen from the following 3 options:

!!! note "World Publish Settings"
    Public: Open this world for all users.<br>
    Limited: The world will be open only to those who know the world's URL. World will not be displayed on search engines.<br>
    Private: Only team members can access.

World set to "Public" will be listed on My Vket's [World List](https://vket.com/en/play/world){target=_blank}.

Also, if the world is set to "Limited," only the users who know the world URL may access.
This is useful for world testing with multiple people or to create a closed-community world.

Worlds set to "Private" may only be accessed by the team members within the world author's license.

When you create a new World ID, it is initially set as a private world. If you want to make it public, go to the World Management screen, select `"World Publish Settings"`, and choose `"Publish"`.

![WorldPublish](img/WorldUpload09.jpg)

!!! warning "Note"
     To upload the world data, the world ID must be created in advance on the account management screen. If you don't see your world name in the list, please create a world ID from [here](https://cloud.vket.com/en/account/world){target=_blank}.

![CreateWorldID](img/WorldUpload10.jpg)

!!! warning "Issues when uploading multiple scenes"
    If a single Unity project contains more than two scenes, which may be uploaded to different worlds, the first uploaded world may be duplicated, or cause 404 / build errors when entering.<br>
    To prevent this, consider containing only one scene/world per project.<br>
    Also, if this issue happened, it can be fixed by closing the project and deleting the `upload` folder located in the project files, and reboot/reupload the world.
