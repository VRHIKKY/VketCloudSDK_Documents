# Executing JSON Methods of the Activity

This explains how to execute methods of a Component class defined in ActivityScene.json (within the activity folder) from a Component class defined in Scene.json.

!!! info
    SDK Version : 13.7<br>
    OS : Windows 11<br>
    Unity : 2022.3.6f1<br>
    Browser : Google Chrome<br>

## Details

Consider the scenario illustrated below:

- From ComponentA, you want to execute the `Hoge` method of ComponentB.
    - You cannot directly reference the component of a sub-scene (indicated by the red line in the figure).
        - However, if they are within the same environment, you can use `system.Item_GetComponent` or similar methods to obtain a reference.
    - Therefore, you need to execute it through an item.

![ExecuteActivityJsonMethod](img/ExecuteActivityJsonMethod.jpg)

## Steps

### 1. Obtain the Item that Contains ComponentB
If you have the item, even if it is in a sub-scene, you can refer to it using `hsItemGet` as long as it’s an Item (not a Component).

!!! info Using hsItemGet to obtain an Item in a sub-scene
    For example, `hsItemGet("ActivityItem/ItemB")` uses a hierarchical path `(Activity-type item name)/(Name of the target in the sub-scene)`.  
    This works because the activity-type item includes the sub-scene.

### 2. Use the Retrieved Item to Execute the Method Directly
- For example:
    ```csharp
    itmB.CallComponentMethod("ComponentB", "Hoge", "HogeParam");
    ```
    - Since this is `CallComponentMethod`, the `Hoge` method must have a single string parameter and return void.
