# RenderingSettings

![RenderingSettings_1](./img/RenderingSettings_1.jpg)

RenderingSettingsでは、ワールドにおける描画設定を編集します。

| 名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| `PBR` | true |  PBRライティングをオンにします。|
| `Background Color` | #000000 | |
| `Directional Light` | 空欄 | シーンに設置されたディレクショナルライトをワールドライトとして指定します。 |
| `Light Intensity` | 1.0 | ワールドライトの強度を設定します。 |
| `Lightmap Intensity` | 1.0 | ライトマップの強度を設定します。 |
| `Fade In Time` | 2.0 |　ワールド入場時のホワイトフェードインの時間を秒単位で指定します。|
| `Shadow Type`| Round |　影の描画方法を指定します。`round`は 丸影、`normalshadowmap`は通常のシャドウマップです。<br>`normalshadowmap`は[VKC Node Shadow](../VKCComponents/VKCNodeShadow.md)と組み合わせて使用します。|
| `Shadow Bias` | 0.001 |　影描画のバイアス値を設定します。|
| `Shadow Area Size` | 3.0 |　シャドウを描画する距離をメートル単位で指定します。|
| `Shadow Fade Size` | 1.0 |　シャドウ外周に向かってフェードアウトする距離をメートル単位で指定します。 |
| `Projection Near` | 0.1 |  近傍のクリッピング距離を指定します。 |
| `Projection Far` | 500.0 | 遠方のクリッピング距離を指定します。  |
| `Projection Degree` | 70.0 | 画角を指定します。（デフォルト値推奨） |
| `Bloom` | false | ブルームのオンオフを切り替えます。 |
| `Light Scattering` | false | ライトスキャッタリングのオンオフを切り替えます。 |
| `IBL` | false | IBL（Image-Based Lighting）のオンオフを切り替えます。 |
| `SSAO` | false | SSAO (screen-space ambient occlusion)のオンオフを切り替えます。 |
| `Priority List` | | ワールド内のオブジェクトの描画優先度を管理します。<br>数字の小さいアイテムから順番に描画され、数字が同じアイテムは同時に描画されます。 |

---

## Bloom

![RenderingSettings_2](./img/RenderingSettings_2.jpg)

|  名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| `Bloom` | false | ブルームのオンオフを切り替えます。 |
| `Bloom Intensity` | 0.2 | ブルームの強さを設定します。|
| `Bloom Threshold` | 0.8 | ブルームの閾値を設定します。 |

---

## Light Scattering

![RenderingSettings_3](./img/RenderingSettings_3.jpg)

|  名称 | 初期値 | 機能 |
| ---- | ---- | ---- |
| `Light Scattering` | false | ライトスキャッタリングのオンオフを切り替えます。 |
| `Scattering Intensity` | 0.8 | 空気散乱強度を設定します。 |
| `Scattering Directivity` | 0.68 | 拡散指向性を調整します。 |
| `G` | 0.0 | IBLの強さを調整するパラメータを設定します。 |
| `Distance` | 150.0 |効果開始距離を設定します。 |
| `LightColor` | #FFFFFF | ライトカラーを指定します。 |
| `SunColor` | #D9D9FF | 太陽光色を設定します。 |

---

## IBL

![RenderingSettings_4](./img/RenderingSettings_4.jpg)

|  名称 | 初期値 | 機能 |
| ----   | ---- | ---- |
| `IBL` | false | IBL（Image-Based Lighting）のオンオフを切り替えます。 |
| `DiffuseSize` | 512 | ディフューズマップのサイズを指定します。 |
| `SpecularSize` | 512 | スペキュラマップのサイズを指定します。 |
| `SpecularMipMapCount` | 6.0 | スペキュラ用キューブマップのミップマップの数を指定します。|
| `Diffuse Map` | | ディフューズマップの画像ファイルを指定します。 |
| `Specular Map` | | スペキュラマップの画像ファイルを指定します。<br> 設定出来る面数は`SpecularMipMapCount`に応じて増減します。 |

---

## SSAO

![RenderingSettings_5](./img/RenderingSettings_5.jpg)

|  名称 | 初期値 | 操作範囲 | 機能 |
| ----   | ---- | ---- | ---- |
| `SSAO` | false | | SSAO (screen-space ambient occlusion)のオンオフを切り替えます。 |
| `Radius` | 0.7 | 0.1 ~ 1.0 | AOの範囲を設定します。正確なAO描画のために0.5~0.8内に収めることをお勧めします。 |
| `Self Shadow Counter` | 0.2 | 0.1 ~ 1.0 | AOが発生しない想定の平面において、自分自身を誤検知してしまう現象を防止します。<br>正確なAO描画のために0.1~0.2内に収めることをお勧めします。 |
| `Attenuation` | 3.0 | 0.0 ~ 3.0 | 柱や浮いている看板の背後など、距離が空いているのにAOが出てしまう箇所を押さえます。 |
| `Minimum Depth` | 0.02 | 0.0 ~ 0.1 |オクルージョンとみなす閾値の調整を行います。<br> AOの強度を強めた際、何もないところが暗くなってしまったら本値を上げると改善されます。（基本的には操作しないことをお勧めします） |
| `Color Bleed` | 0.2 |  0.0 ~ 0.4 | 光の反射によって、範囲内の色がAOに乗る現象を疑似的に再現します。<br> 本値が0.0、もしくは`HSP`がfalseの際は機能しません。 |
| `AO Ratio` | 3.0 | 0.25 ~ 5.0 | AOの強さ（濃度）を設定します。 |
| `HSP` | true | | AOの黒色に背景の色を乗せるか設定します。これによって明るい部分が暗くなりすぎないようになります。<br> 基本的には`true`にしておくことを推奨します。 |
| `Fake Bloom` | false | | ブラーのサンプルデータを疑似的なbloom表現のために使用するか否か設定します。<br> `Colbleed`値の設定に応じて強さが変化します。 |
