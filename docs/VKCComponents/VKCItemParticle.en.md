# VKC Item Particle
![HEOParticle](img/HEOParticle.jpg)

VKC Item Particle is a component that expands particles based on .hep format files. <br/>

You can output a .hep file with UnityEditor menu > VketCloudSDK > ExportParticle, but it is currently deprecated. <br/>
Please use [Particle Editor](../particleeditor/pe_about_particleeditor.md) to create .hep files instead.

## Settings

| Label | Initial Value | function |
| ---- | ---- | ---- |
| .hep | None | Specifies the hep file. |
| autoplay | false | Automatically play particles. |
| loop | false | Loops particle playback. |

### Advanced

| Label | Initial Value | function |
| ---- | ---- | ---- |
| Auto Loading | true | Used for setting up [Dynamic Loading](VKCItemField.md). <br> The object will be loaded on the first load by default.  |
| Clickable | false | Toggle mouse interaction on object. |
| Item Render Priority | 0 | Designates the Item's render priority. <br> For details, refer to [RenderingSettings / Priority List](../VketCloudSettings/RenderingSettings.md) |
| Show Photo Mode | true | Specifies whether it is displayed in photo mode |