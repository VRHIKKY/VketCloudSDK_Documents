# Skybox

!!! note "about HEOBackgroundTexture"
    As an alternative method to setup background, the [HEOBackgroundTexture](../HEOComponents/HEOBackgroundTexture.md) component can be used to designate background textures.

VketCloudSDK cannot output Unity SkyBox. Therefore, instead, we need to place a Box or Sphere object whose face is reversed and output it as a pseudo skybox.

!!! note
     If you select "Unlit/Texture" for the material shader, the object will be displayed as is, without shadows.

    ![Skybox](img/Skybox.jpg)

     You can obtain and use the Skybox sample by installing the tutorial scene (Basic) from the control panel (VketCloudSDK menu > Control Panel).

    ![ControlPanel](img/ControlPanel.jpg)
