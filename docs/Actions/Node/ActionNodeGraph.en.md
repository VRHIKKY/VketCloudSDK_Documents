
# ActionNodeGraph
![ActionNodeGraph1](img/ActionNodeCompiler.jpg)
![ActionNodeGraph2](img/ActionNodeCompiler2.jpg)
This article will explain how to use ActionNodeGraph. <br>
*This function is in beta state. If you have any questions, please feel free to contact us.

## Overview

This component can be used as an alternative to [VKC Attribute Action Trigger](../../VKCComponents/VKCAttributeActionTrigger.md). <br>
It has the following advantages compared to VKC Attribute Action Trigger.  

- Actions can be managed visually with nodes
- Easy to change action execution order
- Easy portability of action lists to different objects

## How to use

① Attach the ActionNodeCompiler to the object you want to execute the action when clicked. <br>
![ActionNodeGraph3](img/ActionNodeCompiler3.jpg)<br>
<br>
② Select "Create New Action Graph" to create an ActionNodeGraph. <br>
You will see a save screen launched. Give it a name of your choice and save it. <br>
![ActionNodeGraph4](img/ActionNodeCompiler4.jpg)<br>
<br>
③Click Open to launch the node graph edit screen. <br>
Initially it should contain two nodes: StartNode and Result. <br>
![ActionNodeGraph5](img/ActionNodeCompiler5.jpg)<br>
<br>
④You can create a new ActionNodeGraph by right-clicking and selecting "Create Node". <br>
![ActionNodeGraph6](img/ActionNodeCompiler6.jpg)<br>
<br>
![ActionNodeGraph7](img/ActionNodeCompiler7.jpg)<br>
The action node should be found in Create Node > Actions. <br>
You can also search using the search box at the top. <br>
<br>
⑤ Connect Action Stream from Start Node to Result. <br>
![ActionNodeGraph8](img/ActionNodeCompiler8.jpg)<br>
Wire a node from the StartNode's Action Stream to the Action Node's Action Stream. <br>
Click ○ and drag and drop it to the destination node to connect. <br>
Any node between Start Node and Result is subject to the action that actually occurs. <br>
<br>
If you want to remove the connection, <br>
<br>
1. Click the connecting line<br>
2. Press the Delete key<br>

Use this when changing the connection destination. <br>
<br>
When deleting a node, select the node you want to delete and select Delete. <br>
<br>
⑥ You can create a parameter in the Parameters tab on the upper left. <br>
![ActionNodeGraph9](img/ActionNodeCompiler9.jpg)<br>
Click "+" button and select the type of parameter to create. <br>
<br>
![ActionNodeGraph10](img/ActionNodeCompiler10.jpg)<br>
When clicked, a node like the above will be generated. <br>
You can set the value of the parameter on the Inspector. <br>
If you check "Hide in Inspector", it will be hidden on the Inspector. <br>
<br>
![ActionNodeGraph11](img/ActionNodeCompiler11.jpg)<br>
Right click on the parameter to rename or delete the parameter. <br>
<br>
Parameters can be used by dragging and dropping them into the node space and connecting them to the corresponding ○. <br>
<br>
<br>
■ Example: Play the first animation of VKC Item Object name "music" (playback only once)■<br>
![ActionNodeGraph12](img/ActionNodeCompiler12.jpg)<br>
<br>
"music" is created as a String type parameter and "1" an int type parameter. <br>
<br>
Connect "music" to Ifequal's Name and "1" to NValue. <br>
This completes the process of "if the content of music is 1, the subsequent processes does not occur". <br>
<br>
Connect "music" to the PlayItem's Name and "1" to the Index. <br>
This completes the process of "playing the animation registered at Index number "1" of VKC Item Object "music"". <br>
<br>
Connect SetVar's Name to "music" and Index to "1". <br>
This completes the process of "setting the contents of the parameter music to 1". <br>
<br>
For the first time, the processes after PlayItem will be run, but on and after the second time, SetVar sets the content of the variable music to 1, negating the processes after IfEqual. <br>
<br>
Since parameter nodes can be connected to multiple nodes, it is easier to manage them by connecting them to places where you want to have the same number. <br>
<br>
In the Primitives tab you can create parameters that can be edited in node space. <br>
![ActionNodeGraph13](img/ActionNodeCompiler13.jpg)<br>
<br>
It can be used in the same way as parameters created on Parameter. <br>
<br>
<br>
##Tips
<br>
①Target_is_self<br>
Some action nodes have a checkbox "Target_is_self". <br>
By checking this, the target of the operation can be the object itself to which the ActionNodeCompiler is attached. <br>
<br>
Example: Hide when clicked<br>
![ActionNodeGraph14](img/ActionNodeCompiler14.jpg)<br>
<br>
When preparing multiple objects that are hidden when clicked, if it is VKC Attribute Action Trigger, you will need to change the collider setting and the target to be hidden one by one. In this example's case, however, the NodeName will be automatically filled with the object with ActionNodeCompiler attached. Thus, you will only need to attach the ActionNodeCompiler with this ActionNodeGraph to the object you want to hide, without the need to change the colliders and hide target. <br>
<br>
②Switch ActionNodeGraph<br>
ActionNodeGraph can save action lists. <br>
![ActionNodeGraph15](img/ActionNodeCompiler15.jpg)<br>
ActionNodeGraph can be selected in Asset of ActionNodeCompiler. <br>
VKC Attribute Action Trigger makes it easy to change the action list. <br>