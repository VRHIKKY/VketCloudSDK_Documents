# Light Scattering

By configuring light scattering settings, you can achieve effects such as fog-like expressions or distant scenery appearing hazy and blue.

!!! info Test Enviroment
    SDK version: 4<br>
    OS: Windows 10<br>
    Unity: 2019.4.31.f1<br>
    Browser: Google Chrome<br>

!!! info The location of settings has changed in Vket Cloud SDK version 12 and later
    HEOWorldSetting →  It is located in RenderingSettings in VketCloudSettings<br>
    ![LightScattering00](img/LightScattering00.jpg)<br>
    Also, in order to display RenderingSettings, you need to set the setting mode to Advanced in VketCloudSettings.<br>
    ![LightScattering01](img/LightScattering01.jpg)

## Difference between with and without light scattering

![LightScattering02](img/LightScattering02.jpg)

With light scattering (cloudy expression)

![LightScattering03](img/LightScattering03.jpg)

No light scattering

## How to check the light scattering settings

In HEOWorldSetting, with Debug Mode checked, press the F2 key during execution to open the debug window, select the Renderring tab, expand the LightScattering item, and check the light scattering settings while adjusting them. You can.

!!! info 
    Before Vket Cloud SDK9, the UI looks different, but the functions that can be used are roughly the same.

![LightScattering04](img/LightScattering04.jpg)

By reducing the Distance, you can express deep fog,

![LightScattering05](img/LightScattering05.jpg)

By adjusting LightColor/SunColor, it is possible to create a sunset-like effect. However, I think it will look more natural if it matches the reflection probe.

After checking the setting values, check the Light Scattering of Rendering in WorldSetting,
Enter the numerical value in the input field that appears.

![LightScattering06](img/LightScattering06.jpg)

By building in this state, you can create a world that reflects the light scattering settings.

![LightScattering07](img/LightScattering07.jpg)

## Exclude light scattering by material

You may want to exclude light scattering for each material, such as SkyBox. In that case, use "VketChanUnlit.shader" included in the SDK,

![LightScattering07](img/LightScattering08.jpg)

Build with the "UseLightScattering" checkbox unchecked.

![LightScattering09](img/LightScattering09.jpg)

## Other findings

![LightScattering10](img/LightScattering10.jpg)

If you click the "Use" checkbox if Light Scattering was set during build, it will switch to a state where Light Scattering is not applied.
