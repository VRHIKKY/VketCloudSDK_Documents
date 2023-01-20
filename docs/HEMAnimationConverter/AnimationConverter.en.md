# Usage of HEM Animation Converter
In VketCloud, the type of animation must be Legacy in Unity. Normally, the conversion from Humanoid to Legacy animation in Unity can only be done on the same character model due to differences in bone names and the structure. HEM Animation Converter can convert the Humanoid animation of character "modelA" to a Legacy animation of character "modelB".

## How to use
### 1. Select HEM Animation Converter
Select "HEM Animation Converter" from the "VketCloud SDK" tab on the Window toolbar.
![altdiscription for toolbar](images/1.png)

### 2. Set variables
Variables must be set before animation conversion. The meaning of each variable is as follows:
・Target model... This is a character model to be animated in VKetCloud. This model must have a Rig type of Humanoid. After converting the animation, convert the Rig type of the model in question to Legacy in Unity and check if the animation is converted.
・Target Animation...Humanoid animation to be converted to a Legacy animation
・Root...The root bone of the character model. For example, in the case of Vket-chan #2, there is a "Reference" directly below the character object, which is the root bone. This child is followed by "Hip", "Spine", etc. Thus, if there is a bone directly under the character model that is the parent of the "Hip" bone, it must be set as the root.
・Save Folder...This is the folder where the converted animation will be saved. Click the "Select Save Folder" button to directly specify the destination folder
Animation Name...Name of the converted animation file.
Apply SubBone Animation...Converts the subbones of the source animation to the target model. However, since Model A and Model B have different bone structures, they usually cannot be used as they are. If used, they must have the same parent-child relationship and bone names.
Export HEM File...Converts the converted Legacy animation to HEM format.
The following figure shows a Humanoid animation (Target) originally created for Vket2. It cannot be assigned to the Legacy Rig type Vket-Chan No. 1 (Target Model) as it is. If the appropriate parameters are set, it will look like the figure below.
![altSettingVariables](images/2.png)
![altRootBone](images/3.png)
![altParameters](images/4.png)

### 3. Conversion Animation
After all variables have been set, press the Convert Animation button.
The conversion process will take place for a few seconds. After the conversion process is finished, you will find the converted animation in the designated folder.

### 4. Confirm Converted Animation
Let's play back the converted animation as a test. First, convert the Rig type of the Humanoid Rig type character model used for the conversion model to Legacy, and assign the converted Legacy animation.
Originally, the Humanoid animation was for Vket-chan No. 2 on the left, but after conversion, it was re-converted for the Legacy animation that Vket-chan No. 1 can use. If the conversion was successful, the same pose should play as shown in the figure.

![altConfirm Converted Animation](images/4.png)

### 5. Limitation
5. Other component animations (e.g., object OnOff) cannot be converted
6. Efficient iteration in conversion process for faster conversion speed