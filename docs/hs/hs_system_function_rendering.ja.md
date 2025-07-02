# 組み込み関数 - レンダリング

レンダリングに関するユーティリティ関数

***

## Light関連

### hsRenderingSetLightDir

`void hsRenderingSetLightDir(Vector3 Dir)`

ライト方向を設定します。

### hsRenderingSetLightColor

`void hsRenderingSetLightColor(float R, float G, float B)`

ライトの色を設定します。

### hsRenderingGetLightDir
`void hsRenderingGetLightDir(float& refX,float& refY,float& refZ)`

ライト方向を(refX, refY, refZ)で取得します。


### hsRenderingGetLightColor
`void hsRenderingGetLightColor(float& refR,float& refG,float& refB)`

ライトの色を(refR, refG, refB)で取得します。


### hsRenderingGetLightIntensity
`float hsRenderingGetLightIntensity()`

ライトの強さを取得します


### hsRenderingSetLightIntensity
`void hsRenderingSetLightIntensity()`

ライトの強さを設定します。


### hsRenderingGetShadowType
`string hsRenderingGetShadowType()`

シャドウタイプを取得します。


### hsRenderingSetShadowType
`bool hsRenderingSetShadowType(string refShadowType)`

シャドウタイプを設定します。
設定できるタイプは、以下の２つです。

- "round"
- "normalshadowmap"

※設定ができた場合はtrue、設定できない値が来た場合はfalseが返り、コンソールに以下のエラーが表示されます。

"ShadowType [hogehoge] is not defined."

## Bloom関連

### hsRenderingSetBloom
`void hsRenderingSetBloom(float threshold, float intensity)`

ブルームの設定を行います


### hsRenderingSetBloomUse
`void hsRenderingSetBloomUse(bool use)`

ブルームの利用状態を切り替えます。


### hsRenderingGetBloomUse
`bool hsRenderingGetBloomUse()`

ブルームの利用状態を取得します。


### hsRenderingSetBloomThreshold
`void hsRenderingSetBloomThreshold(float threshold)`

ブルームの閾値を設定します。


### hsRenderingGetBloomThreshold
`float hsRenderingGetBloomThreshold()`

ブルームの閾値を取得します。


### hsRenderingSetBloomIntensity
`void hsRenderingSetBloomIntensity(float intensity)`

ブルームの強さを設定します。


### hsRenderingGetBloomIntensity
`float hsRenderingGetBloomIntensity()`

ブルームの強さを取得します。


## LightScattering関連

### hsRenderingSetLightScattering

`void hsRenderingSetLightScattering(float BetaR, float BetaM, float G, float Distance, float LightColorR, float LightColorG, float LightColorB, float SunColorR, float SunColorG, float SunColorB)`

ライトスキャタリングの設定をおこないます。

### hsRenderingGetLightScatteringUse
`bool hsRenderingGetLightScatteringUse()`

ライトスキャッタリングの利用状態を取得します。


### hsRenderingSetLightScatteringUse
`void hsRenderingSetLightScatteringUse(bool use)`

ライトスキャッタリングの利用状態を切り替えます。


### hsRenderingSetLightScatteringBetaR
`void hsRenderingSetLightScatteringBetaR(float betaR)`

BetaRの値を設定します。


### hsRenderingGetLightScatteringBetaR
`float hsRenderingGetLightScatteringBetaR()`

BetaRの値を取得します。


### hsRenderingSetLightScatteringBetaM
`void hsRenderingSetLightScatteringBetaM(float betaM)`

BetaMの値を設定します。


### hsRenderingGetLightScatteringBetaM
`float hsRenderingGetLightScatteringBetaM()`

BetaMの値を取得します。


### hsRenderingSetLightScatteringG
`void hsRenderingSetLightScatteringG(float g)`

Gの値を設定します。


### hsRenderingGetLightScatteringG
`float hsRenderingGetLightScatteringG()`

Gの値を取得します。


### hsRenderingSetLightScatteringDistance
`void hsRenderingSetLightScatteringDistance(float distance)`

Distanceの値を設定します。


### hsRenderingGetLightScatteringDistance
`float hsRenderingGetLightScatteringDistance()`

Distanceの値を取得します。


### hsRenderingGetLightScatteringLightColor
`void hsRenderingGetLightScatteringLightColor(float& refR, float& refG, float& refB)`

ライトカラーの値を(refR, refG, regB)の形で取得します。


### hsRenderingSetLightScatteringLightColor
`float hsRenderingSetLightScatteringLightColor(R, G, B)`

ライトカラーの値を設定します。


### hsRenderingGetLightScatteringSunColor
`void hsRenderingGetLightScatteringSunColor(float& refR, float& refG, float& refB)`

サンカラーの値を(refR, refG, regB)の形で取得します。


### hsRenderingSetLightScatteringSunColor
`float hsRenderingSetLightScatteringSunColor(R, G, B)`

サンカラーの値を設定します。


## ToneMap

### hsRenderingGetToneMapUse
`bool hsRenderingGetToneMapUse()`

トーンマップの利用状態を取得します。


### hsRenderingSetToneMapUse
`void hsRenderingSetToneMapUse(bool use)`

トーンマップの利用状態を切り替えます。


### hsRenderingGetToneMapType
`string hsRenderingGetToneMapType()`

トーンマップのタイプを取得します


### hsRenderingSetToneMapType
`bool hsRenderingSetToneMapType(string Type)`

シャドウタイプを設定します。
設定できるタイプは、以下のみです。

- "gttonemap"

※設定ができた場合はtrue、設定できなかった場合はfalseが返り、コンソールに以下のエラーが表示されます。

"ToneMapType [hogehoge] is not defined."


### hsRenderingGetToneMapPeakLuminance
`float hsRenderingGetToneMapPeakLuminance()`

最大輝度値を取得します。


### hsRenderingSetToneMapPeakLuminance
`void hsRenderingSetToneMapPeakLuminance(float peakLuminance)`

最大輝度値を設定します。


### hsRenderingGetToneMapContrast
`float hsRenderingGetToneMapContrast()`

コントラストを取得します。


### hsRenderingSetToneMapContrast
`void hsRenderingSetToneMapContrast(float contrast)`

コントラストを設定します。


### hsRenderingGetToneMapLinearStart
`float hsRenderingGetToneMapLinearStart()`

トーンカーブの線形部分の開始位置を取得します。


### hsRenderingSetToneMapLinearStart
`void hsRenderingSetToneMapLinearStart(float linearStart)`

トーンカーブの線形部分の開始位置を設定します。


### hsRenderingGetToneMapLinearLength
`float hsRenderingGetToneMapLinearLength()`

トーンカーブの線形部分の長さを取得します。


### hsRenderingSetToneMapLinearLength
`void hsRenderingSetToneMapLinearLength(float linearLength)`

トーンカーブの線形部分の長さを設定します。


### hsRenderingGetToneMapBlackTightness
`float hsRenderingGetToneMapBlackTightness()`

黒の締まり具合を取得します。


### hsRenderingSetToneMapBlackTightness
`void hsRenderingSetToneMapBlackTightness(float blackTightness)`

黒の締まり具合を設定します。


### hsRenderingGetToneMapBlackLowerLimit
`float hsRenderingGetToneMapBlackLowerLimit()`

黒（暗い部分）の下限値を取得します。


### hsRenderingSetToneMapBlackLowerLimit
`void hsRenderingSetToneMapBlackLowerLimit(float blackLowerLimit)`

黒（暗い部分）の下限値を設定します。
