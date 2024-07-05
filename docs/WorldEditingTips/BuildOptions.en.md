# Build Options

In build settings, creators can perform various operations on the files that make up the world during the Build and Run process. There are two ways to change the build settings:

1. You can toggle the simple settings on or off by navigating to **VketCloudSDK > Build Option**.

   ![BuildOptions_0](img/BuildOptions_0.jpg)

2. To edit the detailed build settings, open the settings window via **VketCloudSDK > Settings** and select the "Build" tab.

   ![BuildOptions_1](img/BuildOptions_1.jpg)

## Build Option Settings
| Name | Default Value | Function |
| ---- | ------------- | -------- |
| Auto Clear Cache | false | Sets whether to clear the release folder before Build And Run. When enabled, the release folder is cleared before Build And Run. |

## Texture Override Settings

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Convert texture size to Max size at build time | false | Convert texture size depending on the Maxsize designated on the texture's Inspector.<br> This function has been revised on Ver13.4, which reduced the build time and world load time when this configuration is enabled. |

The texture's MaxSize(convert size on build) can be designated in the Inspector.<br>
This designates how much the texture will be compressed.<br>
For example, by setting MaxSize to 64 and enabling "Convert texture size to Max size at build time," the total world load time is expected to be reduced.

![BuildOptions_2](img/BuildOptions_2.jpg)

## Model Export Settings

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Convert the model's texture for smartphone use | false | Optimizes heo file textures for smartphone use by compressing file textures. |

## Avatar Export Settings

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Convert the avatar's VRM for smartphone use | false | Toggles conversion of vrm files to hrm files, optimizing size and preventing vrm files to be uploaded as resource. |

## Particle Export Settings

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Convert the particle's texture for smartphone use | false | Optimizes particles for smartphone use by compressing files. |
