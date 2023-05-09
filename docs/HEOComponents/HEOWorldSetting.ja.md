HEOWorldSettingはワールドの基本設定を取りまとめるコンポーネントで、以下の設定を管理しています。

- 基本情報
- カメラ設定
- 描画設定
- アバター設定
- マイアバター設定

---

## 基本設定
![BasicInfo](img/HEOWorldSetting_BasicInfo.jpg)

|  Label |  function  |
| ----   | ---- |
|  `World Name` |  ワールド名を設定する項目です。URLなどに反映されます。|
|  `Debug Mode` |  デバッグモードを切り替えることができます。オンにするとブラウザ上で`F1`または`F2`からデバッグ機能を使用することが可能になります。|
| `VRM Drop` |  ブラウザ上へのVRMドロップによるローカルの(他プレイヤーから見えない)アバター変更を許可します。 |
| `Occulusion Culling` | オクルージョンカリングをオンにします。　|
| `World Name Directory` | .heoファイルなどの出力時に、ワールド名の付いたフォルダにまとめます。(ex. data/field/`ワールド名`/world.heo)|
| `Multi Play Mode In Local Build` | ローカルビルド時にマルチプレイモードで入室します。 |

---

## カメラ設定
![Camera](img/HEOWorldSetting_Camera.jpg)

|  Label |  function  |
| ----   | ---- |
|  `Smoothing` | カメラの上下の動きにスムージングをかけるかどうかを指定します。 |
|  `far Offset` | TPSカメラの注視点を上下に調整できます。 |
|  `near Offset` | TPSカメラの注視点を上下に調整できます。 |

---

## 描画設定
![Rendering](img/HEOWorldSetting_Rendering.jpg)

|  Label |  function  |
| ----   | ---- |
| `PBR` |  PBRライティングをオンにします。|
| `Directional Light` | シーンに設置されたディレクショナルライトをワールドライトとして指定します。 |
| `Projection Near` |  近傍のクリッピング距離を指定します。 |
| `Projection Far` | 遠方のクリッピング距離を指定します。  |
| `Projection Degree` | 画角を指定します。（デフォルト値推奨） |
| `Bloom` | ブルームのオンオフを切り替えます。 |
| `Bloom Intensity` | ブルームの強さを設定します。|
| `Bloom Threshold` | ブルームの閾値を設定します。 |
| `Light Scattering` | ライトスキャッタリングのオンオフを切り替えます。 |
| `Scattering Intensity` | 空気散乱強度を設定します。 |
| `Scattering Directivity` | 拡散指向性を調整します。 |
| `G` | IBLの強さを調整するパラメータを設定します。 |
| `Distance` | 効果開始距離を設定します。 |
| `LightColor` | ライトカラーを指定します。 |
| `SunColor` | 太陽光色を設定します。 |
| `IBL` | IBL（Image-Based Lighting）のオンオフを切り替えます。 |
| `DiffuseSize` | ディフューズマップのサイズを指定します。 |
| `SpecularSize` | スペキュラマップのサイズを指定します。 |

---

## アバター設定
![Avatars](img/HEOWorldSetting_Avatars.jpg)

|  Label |  function  |
| ----   | ---- |
| `Dummy Avatar` | 遠方や描画制限がかかった場合に描画するダミーアバターを指定します。 |
| `Avatar Files` | アバター情報をまとめたアバターファイルを指定します。アバターファイルについては、[こちら](../WorldMakingGuide/AvatarFile.md)をご覧ください。 |

---

## マイアバター設定
![MyAvatar](img/HEOWorldSetting_MyAvatar.jpg)

|  Label |  function  |
| ----   | ---- |
| `NSFW` |  NSFW（Not Safe For Work: 閲覧注意）なアバターの表示を制限します。|
| `Polygon` | そのワールド内で使用できるマイアバターのポリゴン上限を指定します。 |