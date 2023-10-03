# HEOInfo

!!! note caution
    This component cannot be used in this SDK version.<br>

![HEOInfo_1](./img/HEOInfo_1.jpg)

HEOInfoはHEMキャラモーション出力の時に使用するコンポーネントです。<br>
出力したHEMファイルは[プリセットアバター](../WorldMakingGuide/PresetAvatar.md)や[HEOObjectでのアニメーションの再生](./HEOObject.md)に使用できます。

| Label | Function |
| ---- | ---- | 
| Src Name | 変換前のモーション名 |
| Dest Name | 変換後のモーション名 |

## 使用方法

Humanoid側のアニメーションを作成した後、Legacyに変換するとBlendShape名が「eye_mabataki」など元のSkinnedMeshRendererのBlendShapes内の名前のままになっています。<br>
このままHEMファイルを出力しても、VRMファイルではそのBlendhape名が失われているため反映されません。

![HEOInfo_2](./img/HEOInfo_2.jpg)

そこで、HEMファイルを出力するキャラクターにHEOExporter/HEOInfoコンポーネントを追加し、BlendShapeTransNameTableのSizeを変更し、SrcName/DestNameに変換前と変換後の名前を設定します。

![HEOInfo_3](./img/HEOInfo_3.jpg)

この状態でHEMファイルを出力すると、BlendShape名が変換された状態で出力されます。