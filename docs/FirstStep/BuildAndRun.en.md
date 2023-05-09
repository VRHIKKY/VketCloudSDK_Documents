# Build And Run
Here is how you can build a scene.  

## Build And Run
Run VketCloudSDK > BuildAndRun.
  
![BuildAndRun](img/BuildAndRun.jpg)
  
*If you cannot build, please try the following.

・Stop the server once, VketCloudSDK -> preferences -> Clear data cache   
・Clear browser cache

If that doesn't work, see [Build Error](../troubleshooting/BuildError.md).

## Build process - what happens when you press Build and Run

When you press Build and Run, all gameobjects with HEO Field component and all of its children objects will be converted to heo file. HEO is the proprietary 3D format used in Vket Cloud rendering engine.  
The exported data can be found in [project]\release\data folder, which should contain all necessary assets to run the 3D world on browsers.

Once successfully built, the SDK will automatically launch a local server and browser to test the result.

![BuildAndRun](img/buildsuccess.jpg)

#### Outline of important files in data folder
|  Location  |  File  |  Description  |
| ---- | ---- | ---- |
|  \release  |  main.html  |  Open this html on browser to run the 3D world.  |
|  \release\data\Field\ [world name]\ [gameobject]  |  [gameobject].heo  |  3D object of the world  |
|  \release\data\Scene  |  [world name].json  |  Scene data of the world  |