# Building the Scene

To launch VketCloud, your scene must contain GameObjects with the following Components.

- HEOWorldSetting
- HEOField
- HEOPlayer

You can automatically add these by right clicking in the Hierarchy and choosing "Add essential Objects for VketCloud"

![AddEssentialObjects](img/AddEssentialObjects.jpg)  
  
Add Cube under "World" and adjust the size arbitrarily.
![SetCube](img/SetCube.png)
  
  
Once these objects are in place, run VketCloudSDK > BuildAndRun.
You can confirm that the browser is open and works!
  
![BuildAndRun](img/BuildAndRun.jpg)
![BuildAndRun](img/buildsuccess.png)
  
  *If you can't build
・Stop the server once, VketCloudSDK -> preferences -> delete cache
・Clear browser cache
try it.

If that doesn't work, see [Build Error](https://vrhikky.github.io/VketCloudSDK_Documents/3.3/troubleshooting/BuildError.html).
