# Particle Editor - Properties

Using the particle editor, diverse particle effects can be created by editing the following settings.

!!! bug "Input issue on Particle Editor"
    When clicking on the numerical input field for a property and entering a number, the value is not properly reflected, and subsequent operations (such as checking checkboxes) do not function correctly.<br>
    This issue affects the particle editor included in the following versions of the Vket Cloud SDK, which therefore cannot be used normally:<br>
    - SDK 14.4.12<br>
    - SDK 14.2.1<br>
    - SDK 13.7.7<br>
    - SDK 13.4.1<br>
    - SDK 12.3.4<br>
    An updated SDK (version 14.5.X) including the fix to the mentioned issue is planned to be released in the near future. We will notify users as soon as the update is released.

## Transform

![pe_property_1](pe_image/pe_property_1.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Position | 0,0,0 | Emitting position of particles |
| Rotation | -90,0,0 | Emitting rotation of particles  |
| Scale | 1,1,1 | Scale of each particle |

## Main

![pe_property_2](pe_image/pe_property_2.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Name | Particle00 | Name of particle |
| Texture |  | Base texture of particle |
| Color | RGBA(255,255,255,255) | Base color of particle |
| Emission Color | RGBA(0,0,0,0) | Emission color of particle |
| Duration | 5.00 | Particle duration (seconds) |
| Loop | True | Toggles loop emission of particles after its duration is over |
| Start Delay | 0.00 | Delay time for particle emission  (seconds) |
| Start Lifetime | 5.00 | Initial Lifetime of particle on emission (seconds) |
| Start Speed | 5.00 | Initial speed of particle on emission (m/s) |
| Start Size | 1.00 | Initial size of particle on emission |
| Gravity Modifier | 0.00 | Gravity bias on particles |
| Max Particles | 1000 | Maximum particle count allowed to be emitted |

!!! note "Designating particle colors"
    The particle colors are decided as below:<br>
    Color + Emission Color (Addition) <br>
    Please note that the color decided will not be used when [Color over Lifetime](#color-over-lifetime) is enabled.<br>

!!! note "About Constant / Rand Two"
    The Constant / Rand Two options on designating values is defined as follows:<br>
    Constant: Constant value  Rand Two: Value moves randomly between the designated two values

## Emission

![pe_property_3](pe_image/pe_property_3.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Rate Over Time | 10.00 | Particle emission rate per second |
| Rate Over Distance | 0.00 | Particle Emission rate change per emitting position change from its original position |

## Shape

![pe_property_4](pe_image/pe_property_4.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Shape | Cone | Shape of particle's trajectory. Options are as follows: <br>Sphere, Cone, Circle, Hemisphere |
| Angle | 25.00 | Angle of particle emission shape |
| Radius | 1.00 | Radius of particle emission shape |
| Radius Thickness | 1.00 | Thickness rate for particle emission.<br> 0.00: Emission from the rim of the trajectory 1.00: Emission from the entire shape of the trajectory |
| Arc | 360.00 | Angle of the emission arc |
| Arc Mode | Random | Emission mode of how to emit particles on the arc.<br> Random: Random emission around the arc Loop: Ordered emission around the arc |
| Arc Speed | 1.00 | Designates speed of changing emission positions |

## Velocity over Lifetime

![pe_property_5](pe_image/pe_property_5.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Enable | false | Enable/Disable this feature |
| Linear | 0,0,0 | Velocity change during particle emission on each axis |

## Size over Lifetime

![pe_property_7](pe_image/pe_property_7.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Enable | false | Enable/Disable this feature |
| Separate Axis | false | Separates axis to X, Y, and Z for each value settings |
| Size | 0.00 | Set the size value change over lifetime |
| Curve Mode | Constant | Designates the method of size change. <br> Constant: Changes value on a constant value Two Constants: Changes value from Min (Particle spawn) --> Max(Particle despawn) according to easing curve |
| Easing Type | Linear | Designates the easing curve |

## Color over Lifetime

![pe_property_8](pe_image/pe_property_8.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Enable | false | Enable/Disable this feature |
| Gradient | Blend | Designates whether to blend to designated color over lifetime. <br> Blend: Particle color will change to Color1, after blending Color0 and Color1 <br> Fixed: Particle color will change to Color1 without blending  |
| Num Colors | 2 | Designates the number of passing colors |
| Color0 | 0.00 , RGBA(255,255,255,255) | Designates the particle's color on the specified time (second) after emission |
| Color1 | 1.00 , RGBA(255,255,255,255) | Same as above |
| Num Alpha | 2 |  Designates the number of passing alpha values |
| Alpha0 | 0.00 , 0.00 | Designates the particle's alpha value on the specified time (second) after emission |
| Alpha1 | 1.00 , 1.00 | Same as above |

## Rotation over Lifetime

![pe_property_9](pe_image/pe_property_9.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Enable | false | Enable/Disable this feature |
| Curve Mode | Constant | Designates the method of rotation change. <br> Constant: Changes value on a constant value Two Constants: Changes value from Min (Particle spawn) --> Max(Particle despawn) according to easing curve |
| Velocity | 0,0,0 | Designates the rotation change over lifetime |
| Easing Type | Linear | Designates the easing curve |

## Noise

![pe_property_10](pe_image/pe_property_10.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Enable | false | Enable/Disable this feature |
| Strength | 0.00 | Designates the noise strength (velocity bias strength when noise is on) |
| Frequency | 0.50 | Designates the frequency of noise, which affects the particle direction and speed |
| Scroll Speed | 0.00 | Designates the irregularity of noise being on |
| Damping | false | Enable/Disable the Strength value damping according to Frequency |
| Octave Count | 1.00 | Designates layers(octaves) for noise |
| Octave Multiplier | 0.50 | Designates the Strength decrease rate according to octave count |
| Octave Scale | 2.00 |  Designates the Frequency decrease rate according to octave count |
| Quality | High(3D) | Designates noise quality from Low(1D), Medium(2D), and High(3D) |

## Sub Emitters

![pe_property_11](pe_image/pe_property_11.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Enable | false | Enable/Disable this feature |
| Particle Index | 0 | Emits the designated particle by particle no. |
| Type | Birth | Emits the sub particle on the main particle's Birth or Death |
| Probability | 0.00 | Designates the probability of sub particle emitting |

!!! caution "Performance Instability"
    This feature is unstable on the current version's particle editor.<br>
    Creating another particle is recommended for using multiple particles.

## Texture Sheet Animation

![pe_property_12](pe_image/pe_property_12.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Tiles | 0,0 | Designates the number of tiles created by splitting the texture |

## Render Setting

![pe_property_14](pe_image/pe_property_14.jpg)

| Label | Initial Value | Function |
| ---- | ---- | ---- |
| Render Mode | Billboard | Designates the particle render mode<br> Billboard: Always face the camera <br> Stretched: Faces the camera, and allows scale change. Creates a pseudo-trail effect |
| Speed Scale | 0.00 | Designates the scale change according to particle speed |
| Length Scale | 0.00 | Changes the particle scale horizontally |
| Render Alignment | View | Designates the particle alignment. <br> View: align according to camera Local: align according to gameobject's Transform component<br> Velocity: align according to particle direction |

## About Easing Type

On each features which includes `Easing Type`, an easing curve can be designated to determine its behavior.<br>
As a reference, see [Easing Functions Cheat Sheet](https://easings.net){target=_blank} for easing curve definition and examples.
