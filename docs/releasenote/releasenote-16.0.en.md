# Version 16.0.0

## HeliodorLib (Engine used in browser-displayed worlds)

### Core Functionality

#### Feature Additions
- Support for cloning Activity type items
- Support for cloning Plane type items
- Support for cloning Particle type items
- Support for specifying AmbientColor in scene files
- Support for automatic video playback on iOS

#### Bug Fixes
- Fixed issue where directional lights were not updated when instance draw was enabled
- Fixed issue where components were not generated when cloning items within activities

### Custom Shaders

#### Feature Additions
- Implementation of custom shader compiler
- Integration of generated shaders into Heliodor rendering pipeline
- Abstraction of materials with interfaces
- Integration of custom shaders into Heliodor
- Addition of Shader Fallback mechanism
- Update of UniformValue from HeliScript
- HEO export considering custom shaders
- SDK tool to convert shaders to ShaderLab
- Development of Mac version of HCSLCompiler
- Addition of inverse and transpose functions
- Support for skinned mesh animation
- Support for receiving IBL textures
- Support for instance drawing
- HEO export of cube maps
- Library system
- Updated HCSL to ShaderLab conversion tool to use GLSLPROGRAM
- Preprocessor support
- CubeMap packing and low-resolution texture generation
- Support for PBR-related functionality

### HeliScript

#### Feature Additions
- Support for defining variables with the same name in global variables, class fields, and local variables
- Support for function and method overloading
- Support for directly adding instances to class type lists with new
- Introduction of enums
- Introduction of interfaces

#### Feature Adjustments
- Adjusted to allow selection of clickable nodes and UI elements that don't cast rays when clicked

#### Function Additions
- Added function to receive NodeName in OnClickNode
- Added JavaScript-style event listener functions
- Added functions for local communication without network synchronization
- Support for string replace function
- Added function to get bone position and rotation of object type
- Added local coordinate system transform setter/getter functions
- Added SetPosNode function
- Added function to detect when fingers touch virtual pad
- Added UI delayed load completion callback
- Added function to set FontWeight of UI text elements
- Added function to return currently active camera name
- Added function to get node rotation
- Added functions to set each element of TextPlane
- Added Set/GetUVOffset and Set/GetUVScale functions for UI
- Added functions to call action fade in/fade out
- Added function to get window size
- Added functions to get UVScale and UVOffset
- Added function to get MaterialColor of items
- Added GUIElement class for manipulating GUI
- Added callback to detect motion changes
- Added functions to manipulate point light type items
- Added functions to get player bone position and rotation information
- Added functions to get VR controller position, rotation, and input
- Added function to detect long press input on smartphones
- Added functions to get click and tap input

#### Bug Fixes
- Fixed scale changes to be reflected on particles
- Fixed incorrect Layer search results in ReleaseReservedResources
- Modified to output logs instead of errors when calling HS methods from JS with different argument counts
- Added processing to detect circular inheritance in interfaces
- Removed restriction where "item" was treated as a reserved word
- Fixed freezing issue when executing clone in for loops 4 times in constructor
- Modified to cancel click movement when ResetVelocity is called

### GUI Engine

#### Feature Additions
- Accelerated GUI Engine loading
- Improved GUI responsiveness

### UI/UX

#### Feature Additions
- Improved ability to easily close virtual keyboard during smartphone input
- Added re-entry button for coordinate channel entry error dialogs for undefined errors in addition to full capacity
- Support for client-side configuration of avatar polygon count display limits
- Changed preset avatar selection from traditional scroll style to page style similar to MyAvatar
- Support for camera X-axis rotation with RF keys
- Added dialog to change microphone devices in-game

### Particle

#### Bug Fixes
- Fixed issue where particle coordinate specification was affected by scaling specification

### WebXR

#### Feature Additions
- Implementation of virtual keyboard in VR mode

#### Bug Fixes
- Fixed issue where arm position relationships became twisted when performing a 180° turn in player space while wearing HMD

### ParticleEditor
- CDN distribution of particle editor