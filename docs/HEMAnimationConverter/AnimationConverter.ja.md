# HEM Animation Converterの使い方

VketCloudで取り扱うアニメーションファイルの形式は、UnityでいうLegacyタイプ(直接ボーンを指定する形式)を使用する必要があります。<br>
通常、Unity上でのHumanoidアニメーションからLegacyアニメーションへの変換は、ボーンの名前や構造の違いから、同一のキャラクターモデルでしか行うことはできません。<br>
HEM Animation ConverterはキャラクターモデルAのHumanoidアニメーションをキャラクターモデルBのLegacyアニメーションに変換することができます。

## HEM Animation Converterの起動方法

「VketCloudSDK」タブから「Tool」-->「HEMAnimationConverter」を選択します。

![AnimationConverter_1](img/AnimationConverter_1.jpg)

## HEM Animation ConverterのGUIの説明

### オブジェクトタブ

オブジェクトタブでは、変換対象のアニメーションと変換先のモデルを指定します。

![AnimationConverter_2](AnimationConverter_2.jpg)

| 番号 | 名称 | 機能 |
|-----|-----|-----|
|1| オブジェクト　| アニメーション出力に使用するオブジェクトを取り扱う画面のタブ |
|2| 設定 | 詳細設定画面を表示するタブ |
|3| 変換対象のアニメーション | 変換対象のアニメーションを指定します。<br> HumanoidタイプのClipのみ受け付けます |
|4|「+」 | 追加ボタン。クリックするとデフォルト値としてT-poseのAnimationClipを追加します |
|5| 変換モデル | HEMアニメーションで動かしたいキャラクターモデルを指定します。<br>　AnimationTypeがHumanoidのFBXとそのプレハブのみ受け付けます |
|6|「+」 | 追加ボタン。クリックするとデフォルト値としてSDKに内蔵されるvketchan_vrm.fbxを追加します |
|7| アニメーションを変換する |コンバート実行ボタン。デフォルト設定だとAssets/HEMAnimationConverter/exportにHEMアニメーションを出力します|
|8| 「-」 | 削除ボタン。クリックすると登録したアニメーションを解除します |
|9| Animations | 3. 変換対象のアニメーションにて登録されたアニメーションクリップ |
|10| Hand IK | アニメーションに対してIKを設定するトグル。チェックを入れるとIKが適用されます |
|11| Foot IK | アニメーションに対してIKを設定するトグル。チェックを入れるとIKが適用されます |
|12| 「-」 | 削除ボタン。クリックすると登録したFBXアセットを解除します |
|13| Model | 5. 変換モデルにて登録された変換対象のFBX |

###　設定タブ

![AnimationConverter_3](AnimationConverter_3.jpg)

| 番号 | 名称 | 機能 |
|----|-----|-----|
|1| オブジェクト　| アニメーション出力に使用するオブジェクトを取り扱う画面のタブ |
|2| 設定 | 詳細設定画面を表示するタブ |
|3| 保存先フォルダ | HEMファイルを保存するフォルダパス |
|4| Prefix | 保存名の前に付ける名前 |
|5| Suffix | 保存名の後に付ける名前 | 
|6| 出力名のプレビュー | Prefix_アニメーションClip名_Suffixを表示します |
|7| Animation Clip | チェックを入れるとLegacyタイプのアニメーションクリップを出力します<br>出力先は保存先フォルダ/AnimationClipです |
|8| モーションのRootノード | Humanoid AnimationClipに紐づけられたRootT,RootQを適用するノード<br> Noneの時、Hipsを選択します |
|9| 階層 | Humanoid AnimationClipに紐づけられたRootT,RootQを適用するノード<br> Noneの時、Hipsを選択します |
|10| アニメーション | 各アニメーションクリップの[InspectorView](https://docs.unity3d.com/ja/2019.4/Manual/class-AnimationClip.html)を表示します。|

| 番号 | 名称 | 機能 |
|----|-----|-----|
|10.a| StartTime | AnimationClipの開始時間 |
|10.b| StopTime | AnimationClipの終了時間 |
|10.c| Orientation Offset Y | ルートの回転値に対するオフセット（指定する値は回転値）|
|10.d| Level | ルートの高さに対するオフセット |
|10.e| Cycle Offset | ループモーションの開始フレーム |
|10.f| Loop Time | チェックが有効な時、ループ再生します |
|10.g| Loop Blend | シームレスなループアニメーションを有効にします |
|10.h| Loop Blend Orientation | ルートの回転をボーンの動きに焼き付けることができます<br>ルートの回転値をルート モーションとして保存するには無効にします |
|10.i| Loop Blend Position(Y) | ルートボーンに垂直方向の動きを焼き付けることができます<br>ルートの垂直方向の移動値をルート モーションとして保存するには無効にします |
|10.j| Loop Blend Position(XZ) | ルートボーンに水平方向の動きを焼き付けることができます<br>ルートの水平方向の移動値をルート モーションとして保存するには無効にします |
|10.k| Keep Original Orientation | チェックが有効な時、ソース ファイルで作成されたままの回転を保持します。<br>無効な時、0F目の回転値を(0,0,0)に設定します |
|10.l| Keep Original Position(Y) | チェックが有効な時、ソース ファイルで作成されたままの高さを保持します。<br>無効な時、0F目の高さを原点に設定します |
|10.m| Keep Original Position(XZ) | チェックが有効な時、ソース ファイルで作成されたままの水平位置を保持します。<br>無効な時、0F目の水平位置を原点に設定します |
|10.n| Height From Feet | チェックが有効な時、Keep Original Position(Y) の基準点を足に設定します。<br>※Keep Original Position(Y) が有効な時、この項目は適用されません |
|10.o| Mirror | チェックが有効な時、YZ平面を軸としてモーションを左右反転させます |

!!! note
        **10.アニメーション**の各項目の詳細は公式に記載されたエリアCの項目を参照してください。<br>
        [Animationタブ - Unity マニュアル](https://docs.unity3d.com/ja/2019.4/Manual/class-AnimationClip.html)

## 使い方

### 1. Animation Converterの選択
Windowツールバーの「VketCloud SDK」タブから、「HEM Animation Converter」を選択する。
![altツールバー説明](images/1.jpg)

### 2. 変数の設定
アニメーション変換前に変数を設定する必要があります。それぞれの変数の意味は下記のとおりです。
・Target Model…VKetCloudでアニメーションを再生するキャラモデルです。このモデルはRigタイプがHumanoidである必要があります。アニメーションを変換したのちに、Unity上で該当モデルのRigタイプをLegacyに変換して、アニメーションが変換されるか確認してください。
・Target Animation…Legacyアニメーションに変換する対象のHumanoidアニメーション
・Root Bone…キャラクターモデルのルートボーン。例えば、Vketちゃん2号の場合、キャラクターオブジェクトの直下には「Reference」があり、これがルートボーンになります。この子に「Hip」「Spine」などが続きます。このように、もしキャラクターモデルの直下に「Hip」ボーンの親となるボーンがある場合、ルートとして設定する必要があります。
・Save Folder…変換したアニメーションを保存するフォルダになります。「Select Save Folder」ボタンを押すと、保存先フォルダを直接指定することができます
・Animation Name…変換後のアニメーションファイルの名前
・Apply SubBone Animation…変換元のアニメーションのサブボーンを変換対象のモデル用に変換します。ただし、モデルAとモデルBはボーン構造が異なるので、通常はそのまま使用することはできません。使用する場合、同じ親子関係、ボーンの名前にする必要があります。
・Export HEM File…変換したLegacyアニメーションをHEM形式に変換します
下記図は、元々Vket2号ちゃん向けに制作されたHumanoidアニメーション(Target)です。そのままLegacy RigタイプのVketちゃん1号(Target Model)に割り当てることはできません。適切なパラメータを設定すると下記図のようになります
![alt変数設定](images/2.jpg)
![altRootボーン](images/3.jpg)
![alt設定済み変数](images/4.jpg)

### 3. アニメーションの変換
全ての変数を設定し終わった後、Convert Animationボタンを押してください。
変換処理が数秒間行われます。変換処理の終了後、指定のフォルダに変換されたアニメーションが入っています。

### 4. 確認テスト
試しに変換したアニメーションを再生してみましょう。まず、先ほど変換モデルに使用したHumanoid RigタイプのキャラクターモデルのRigタイプをLegacyに変換し、変換したLegacyアニメーションを割り当ててください。
元々は左のVketちゃん2号用のHumanoidアニメーションでしたが、変換後はVketちゃん1号が使えるLegacyアニメーション向けに再変換しました。うまく変換が行われていると、図のように同じポーズが再生されるはずです

![alt動作確認](images/5.jpg)

### 5. 制約
現在、Animation Converterはβ版です。下記の問題が確認されており、順次解決していく予定です。
その他のコンポーネントのアニメーション（オブジェクトのOnOffなど）を変換できない
変換処理における効率的なイテレーションによる変換速度の高速化
