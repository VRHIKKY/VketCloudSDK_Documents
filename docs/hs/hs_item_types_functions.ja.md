# Itemの種類 / VKCComponentとの対応一覧

## 概要

Vket Cloud上でワールドを構成する際、Player以外の各要素はItemとして表現されます。<br>
HeliScriptにてこれを扱うためのItemクラスには様々なメソッドが用意されていますが、Itemのtype(種類)によって使用できるかどうかが異なります。

ここではその一覧と対応するHeliScript関数を表としてまとめます。

---

## Itemのtype

Vket Cloudでは、一口にItemと言っても様々なtypeが存在します。

各Itemはそれぞれ該当するVKCItemコンポーネントをUnity上でオブジェクトに割り当てて表現されます。HeliScriptから思った動作ができない場合は、各オブジェクトに紐づいているItemの種類をご確認ください。

また、Unityシーン内のゲームオブジェクトがSDKによって設定される条件に合致する場合は、シーン直下や空のオブジェクト以下にあっても出力されます。(VKC Item Field以下でも別Itemとして出力されます。)

下表に各typeの説明を示します。ギミック実装時に思っていたtypeじゃなくて困るということが減るように、SDKによって設定される条件も記します。

| Itemのtype / 該当のVKCComponent | typeの説明 |
|----|----|
| [field / VKC Item Field](../VKCComponents/VKCItemField.md) | 基本的なワールドオブジェクトで使用するItem<br>・ビルド時にVKCItemField以下のオブジェクトをまとめて一つのVKCItemファイルとして出力できる。<br>・VKCItemField以下のゲームオブジェクトはノードという概念となるが、孫の概念はない。<br>・ノード操作系やMaterial操作系機能を使用可能<br>・VKCItemFieldが入れ子構造になると、下層のFieldもItemとして出力されるが、下層以下のノードは親のノードとして出力されたりするので避けること。<br>・ノードの指定は名前なので、名前の重複は避けること |
| [object / VKC Item Object](../VKCComponents/VKCItemObject.md) | 移動させたりすることがあるオブジェクトに使用するItem<br>・glTF/VRM/[HRM](../WorldEditingTips/BuildOptions.md)を配置するのに使用<br>・移動系の機能が使用可能<br>・HEMアニメーションが使用可能 |
|  [plane / VKC Item Plane](../VKCComponents/VKCItemPlane.md) | テクスチャをそのまま表示できるItem<br>・日本語向けと英語向けとで2種類の画像を設定可能<br>・billboardや両面描写にも対応 |
| [textplane / VKC Item Text Plane](../VKCComponents/VKCItemTextPlane.md) | 任意の文字列を描画することができるItem<br>・文字の書き換えが必要なときに使用<br>・TextPlane系の機能が使用可能 |
| [bgm/se / VKC Item Audio](../VKCComponents/VKCItemAudio.md) | BGMや効果音を再生することができるItem<br>・Play/Stop/IsPlayが使用可能<br>・2種類のtypeは機能としてはどれも同じで、音量設定のどの項目に対応するかが変わる<br> |
| [particle / VKC Item Particle](../VKCComponents/VKCItemParticle.md) | パーティクルを再生することができるItem<br>・Play/Stop/IsPlayが使用可能 |
|  [spot / VKC Item Spot](../VKCComponents/VKCItemSpot.md) | URLで直接任意の場所の前から開始出来るようにするための位置指定に使用するItem<br>・Spot0から連番で好きな位置に配置してURLに&amp;spaceindex=1等のパラメーターを追記することで選んだ位置から開始できる。 |
|  [areacollider / VKC Item Area Collider](../VKCComponents/VKCItemAreaCollider.md) | 「侵入するとギミックを発火する」という機能のためのItem<br>Unity上ではFieldの子に配置されるのが正しい<br>・コライダーに入るときと出るときとでそれぞれActionを設定できる |
|  [bgtexture / VKC Item Background Texture](../VKCComponents/VKCItemBackgroundTexture.md) | シーンの背景に画像を配置するために使用するItem<br>・必ず一番はじめに描画される<br>・使用する画像の比率は『1 : 1』である必要がある |
| [activity / VKC Item Activity](../VKCComponents/VKCItemActivity.md) | アクティビティ配置のためのItem<br>・JSONファイルの紐づけによって、ギミックをそのまま配置することが可能 |
| [camera / VKC Item Camera](../VKCComponents/VKCItemCamera.md) | 演出目的等で通常のカメラから切り替えるためのItem<br>・HeliScriptから切り替えることで任意のCameraに切り替えることができる※SDK5.0以降使用可能 |

---

Itemクラス各関数の説明、VKCItemコンポーネントに対して使える関数の対応については以下のページをご参照ください。

- [Itemクラス](hs_class_item.md)
