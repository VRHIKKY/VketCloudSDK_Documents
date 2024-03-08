# Setting up a Skybox

![Skybox_1](img/Skybox_1.jpg)

VketCloudSDK cannot handle a Unity Skybox. Therefore, a Box or Sphere object with a reversed normal can be used as a pseudo-Skybox instead.

While an object with reversed normal is usually created by using Blender and other 3D modeling software, the SDK has a Skybox object in its tutorial scene, which can be used in your creation by placing the object / replacing texture in your project.

## How to setup a background

!!! note "Adding Skybox and Background Texture using Quick Menu"
    On Ver12.3, a new quick menu feature has been added, which includes easier Skybox and Background Texture setup. <br>
    For details, refer to [Quick Menu for adding Vket Cloud objects](../WorldEditingTips/QuickMenu.md).

1. Select the tutorial scene (Basic) in the SDK settings (VketCloudSDK menu > Settings), which will download the tutorial scene data and related assets.
    ![Skybox_2](img/Skybox_2.jpg)

2. The Skybox object used in the tutorial scene is located in "Assets > Samples > Vket Cloud SDK > [Current_SDK_Version] > Tutorial -basic- > Used Files > Models".
    Select the "Sky_Sphere" object in the "Models" folder and drag & drop to place it in your scene.

    ![Skybox_3](img/Skybox_3.jpg)

3. The scale of the Sky_Sphere can be edited in the Inspector. Also, the texture can be replaced by your own by editing the Skybox material located in the Inspector.
    ![Skybox_4](img/Skybox_4.jpg)

4. Build & Run to see the Skybox in scene.
    ![Skybox_5](img/Skybox_5.jpg)

## Tips

By selecting "Unlit/Texture" for the material shader, the Skybox object will be displayed without shadows.

![Skybox_1](img/Skybox_1.jpg)

!!! note "about HEOBackgroundTexture"
    As an alternative method to setup a background, the [HEOBackgroundTexture](../HEOComponents/HEOBackgroundTexture.md) component can be used to designate background textures.

    ![HEOBackgroundTexture_2](../HEOComponents/img/HEOBackgroundTexture_2.jpg)
