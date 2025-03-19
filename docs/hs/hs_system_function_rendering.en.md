# Built-in functions - Rendering

Utility functions related to rendering

***

## hsRenderingSetLightDir

`void hsRenderingSetLightDir(Vector3 Dir)`

Designates light direction.

## hsRenderingSetLightColor

`void hsRenderingSetLightColor(float R, float G, float B)`

Designates light color.

### hsRenderingGetLightColor
`void hsRenderingGetLightColor(float& refR,float& refG,float& refB)`

Retrieves the light color as `(refR, refG, refB)`.

### hsRenderingGetLightIntensity
`float hsRenderingGetLightIntensity()`

Retrieves the light intensity.

### hsRenderingSetLightIntensity
`void hsRenderingSetLightIntensity()`

Sets the light intensity.

### hsRenderingGetShadowType
`string hsRenderingGetShadowType()`

Retrieves the shadow type.

### hsRenderingSetShadowType
`bool hsRenderingSetShadowType(string refShadowType)`

Sets the shadow type.

Available types:

- "round"
- "normalshadowmap"

※ If the setting is successful, it returns `true`. If an invalid value is provided, it returns `false` and outputs the following error to the console:

"ShadowType [hogehoge] is not defined."

## Bloom Related

### hsRenderingSetBloom
`void hsRenderingSetBloom(float threshold, float intensity)`

Configures the bloom effect.

### hsRenderingSetBloomUse
`void hsRenderingSetBloomUse(bool use)`

Enables or disables the bloom effect.

### hsRenderingGetBloomUse
`bool hsRenderingGetBloomUse()`

Retrieves the current bloom effect status.

### hsRenderingSetBloomThreshold
`void hsRenderingSetBloomThreshold(float threshold)`

Sets the bloom threshold.

### hsRenderingGetBloomThreshold
`float hsRenderingGetBloomThreshold()`

Retrieves the bloom threshold.

### hsRenderingSetBloomIntensity
`void hsRenderingSetBloomIntensity(float intensity)`

Sets the bloom intensity.

### hsRenderingGetBloomIntensity
`float hsRenderingGetBloomIntensity()`

Retrieves the bloom intensity.

## Light Scattering Related

## hsRenderingSetLightScattering

`void hsRenderingSetLightScattering(float BetaR, float BetaM, float G, float Distance, float LightColorR, float LightColorG, float LightColorB, float SunColorR, float SunColorG, float SunColorB)`

Designates settings related to light scattering.

### hsRenderingGetLightColor
`void hsRenderingGetLightColor(float& refR,float& refG,float& refB)`

Retrieves the light color as `(refR, refG, refB)`.

### hsRenderingGetLightIntensity
`float hsRenderingGetLightIntensity()`

Retrieves the light intensity.

### hsRenderingSetLightIntensity
`void hsRenderingSetLightIntensity()`

Sets the light intensity.

### hsRenderingGetShadowType
`string hsRenderingGetShadowType()`

Retrieves the shadow type.

### hsRenderingSetShadowType
`bool hsRenderingSetShadowType(string refShadowType)`

Sets the shadow type.

Available types:

- "round"
- "normalshadowmap"

※ If the setting is successful, it returns `true`. If an invalid value is provided, it returns `false` and outputs the following error to the console:

"ShadowType [hogehoge] is not defined."

## Bloom Related

### hsRenderingSetBloom
`void hsRenderingSetBloom(float threshold, float intensity)`

Configures the bloom effect.

### hsRenderingSetBloomUse
`void hsRenderingSetBloomUse(bool use)`

Enables or disables the bloom effect.

### hsRenderingGetBloomUse
`bool hsRenderingGetBloomUse()`

Retrieves the current bloom effect status.

### hsRenderingSetBloomThreshold
`void hsRenderingSetBloomThreshold(float threshold)`

Sets the bloom threshold.

### hsRenderingGetBloomThreshold
`float hsRenderingGetBloomThreshold()`

Retrieves the bloom threshold.

### hsRenderingSetBloomIntensity
`void hsRenderingSetBloomIntensity(float intensity)`

Sets the bloom intensity.

### hsRenderingGetBloomIntensity
`float hsRenderingGetBloomIntensity()`

Retrieves the bloom intensity.

## Light Scattering Related

### hsRenderingGetLightScatteringUse
`bool hsRenderingGetLightScatteringUse()`

Retrieves the current state of light scattering.

### hsRenderingSetLightScatteringUse
`void hsRenderingSetLightScatteringUse(bool use)`

Enables or disables light scattering.

### hsRenderingSetLightScatteringBetaR
`void hsRenderingSetLightScatteringBetaR(float betaR)`

Sets the value of BetaR.

### hsRenderingGetLightScatteringBetaR
`float hsRenderingGetLightScatteringBetaR()`

Retrieves the value of BetaR.

### hsRenderingSetLightScatteringBetaM
`void hsRenderingSetLightScatteringBetaM(float betaM)`

Sets the value of BetaM.

### hsRenderingGetLightScatteringBetaM
`float hsRenderingGetLightScatteringBetaM()`

Retrieves the value of BetaM.

### hsRenderingSetLightScatteringG
`void hsRenderingSetLightScatteringG(float g)`

Sets the value of G.

### hsRenderingGetLightScatteringG
`float hsRenderingGetLightScatteringG()`

Retrieves the value of G.

### hsRenderingSetLightScatteringDistance
`void hsRenderingSetLightScatteringDistance(float distance)`

Sets the value of Distance.

### hsRenderingGetLightScatteringDistance
`float hsRenderingGetLightScatteringDistance()`

Retrieves the value of Distance.

### hsRenderingGetLightScatteringLightColor
`void hsRenderingGetLightScatteringLightColor(float& refR, float& refG, float& refB)`

Retrieves the light color as `(refR, refG, refB)`.

### hsRenderingSetLightScatteringLightColor
`void hsRenderingSetLightScatteringLightColor(float R, float G, float B)`

Sets the light color.

### hsRenderingGetLightScatteringSunColor
`void hsRenderingGetLightScatteringSunColor(float& refR, float& refG, float& refB)`

Retrieves the sun color as `(refR, refG, refB)`.

### hsRenderingSetLightScatteringSunColor
`void hsRenderingSetLightScatteringSunColor(float R, float G, float B)`

Sets the sun color.

## Tone Map

### hsRenderingGetToneMapUse
`bool hsRenderingGetToneMapUse()`

Retrieves the current state of tone mapping.

### hsRenderingSetToneMapUse
`void hsRenderingSetToneMapUse(bool use)`

Enables or disables tone mapping.

### hsRenderingGetToneMapType
`string hsRenderingGetToneMapType()`

Retrieves the tone map type.

### hsRenderingSetToneMapType
`bool hsRenderingSetToneMapType(string Type)`

Sets the tone map type.

Available type:

- "gttonemap"

※ If the setting is successful, it returns `true`. If an invalid value is provided, it returns `false` and outputs the following error to the console:

"ToneMapType [hogehoge] is not defined."

### hsRenderingGetToneMapPeakLuminance
`float hsRenderingGetToneMapPeakLuminance()`

Retrieves the peak luminance value.

### hsRenderingSetToneMapPeakLuminance
`void hsRenderingSetToneMapPeakLuminance(float peakLuminance)`

Sets the peak luminance value.

### hsRenderingGetToneMapContrast
`float hsRenderingGetToneMapContrast()`

Retrieves the contrast value.

### hsRenderingSetToneMapContrast
`void hsRenderingSetToneMapContrast(float contrast)`

Sets the contrast value.

### hsRenderingGetToneMapLinearStart
`float hsRenderingGetToneMapLinearStart()`

Retrieves the starting point of the linear part of the tone curve.

### hsRenderingSetToneMapLinearStart
`void hsRenderingSetToneMapLinearStart(float linearStart)`

Sets the starting point of the linear part of the tone curve.

### hsRenderingGetToneMapLinearLength
`float hsRenderingGetToneMapLinearLength()`

Retrieves the length of the linear part of the tone curve.

### hsRenderingSetToneMapLinearLength
`void hsRenderingSetToneMapLinearLength(float linearLength)`

Sets the length of the linear part of the tone curve.

### hsRenderingGetToneMapBlackTightness
`float hsRenderingGetToneMapBlackTightness()`

Retrieves the black tightness value.

### hsRenderingSetToneMapBlackTightness
`void hsRenderingSetToneMapBlackTightness(float blackTightness)`

Sets the black tightness value.

### hsRenderingGetToneMapBlackLowerLimit
`float hsRenderingGetToneMapBlackLowerLimit()`

Retrieves the lower limit value for dark areas.

### hsRenderingSetToneMapBlackLowerLimit
`void hsRenderingSetToneMapBlackLowerLimit(float blackLowerLimit)`

Sets the lower limit value for dark areas.

