# HCSL (Heliodor Custom Shader Language)

## Overview
Heliodor now supports custom shaders. HCSL (Heliodor Custom Shader Language) is Heliodor's proprietary shader language.

## Implementation

### Shader Compilation

1. Right-click in the Project view and create a ShaderLab by selecting "Create → Shader → UnlitShader", then name it "sample"

    ![Create UnlitShader](img/customshader01.jpg)

2. Right-click the generated sample shader and create a material from the Material button. Name it "sample" as well

    ![Create Material](img/customshader02.jpg)

3. Add a Plane to the Unity scene as a child element of HCSL_Test and place it near WavePlane

    ![Add Plane](img/customshader03.jpg)

4. Attach the sample material to the Plane. Also, remove the mesh collider as it is not needed

5. Duplicate WavePlane.hcsl with Ctrl + D and rename it to "sample"

    ![Duplicate HCSL](img/customshader04.jpg)

6. Double-click sample.hcsl to open it in your preferred editor

    !!! note "Note"
        Open with Shift JIS encoding

7. Change the shader name in the hcsl file to "sample" and save

    ![Edit HCSL](img/customshader05.jpg)

8. Add the HEOCustomShader component to the Plane via Add Component

    ![Add Component](img/customshader06.jpg)

9. Attach the sample material and sample.hcsl

    ![Attach Files](img/customshader07.jpg)

10. Click the three-dot button on HEOCustomShader and find and press the Compile button

    ![Compile](img/customshader08.jpg)

11. The HCSL will be converted to ShaderLab. If "Success!!" appears in the Unity console, it was successful

    ![Success](img/customshader09.jpg)

### Using HCSL In-Game

1. Select HCSL_Test and export HEO via VketCloudSDK → Export Field

    ![Export Field](img/customshader10.jpg)

2. Export the HEO to "release/data/Field/HCSL_Test"

    ![Export Path](img/customshader11.jpg)

3. Copy the created sample.hcsl to "release/data/Shaders"

    ![Copy HCSL](img/customshader12.jpg)

4. Open `release\data\Scene\streamingvideo.json` in a text editor

    ![Open JSON](img/customshader13.jpg)

5. Find the shaders field and add the path to the sample.hcsl you just added: `"Shaders/sample.hcsl"`

    ![Edit JSON](img/customshader14.jpg)

6. Finally, set up a local server as you did in the preparation phase, enter the game, and verify that the created shader is reflected

    ![In Game](img/customshader15.jpg)
