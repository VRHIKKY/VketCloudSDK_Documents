# VKC Node Mirror

![HEOMirror_1](img/HEOMirror_1.jpg)

VKC Node MirrorはQuadを使用して鏡のような挙動を再現するために設置します。

![HEOMirror_2](img/HEOMirror_2.jpg)

## 使い方

### 手順

1.鏡にしたいQuadを用意する

2.Textureを用意し、マテリアルの作成

3.鏡にしたいQuadにVKC Node Mirrorをアタッチ

### 実装方法

1\. 鏡にしたいQuadを用意する

![HEOMirror_3](img/HEOMirror_3.jpg)

Create > 3D ObjectからQuadを作成します。<br>
VKC Node Mirrorはノードに分類されるので、Quadは[VKC Item Field](VKCItemField.md)がアタッチされたオブジェクトの子オブジェクトである必要があります。

2\. Textureを用意

![HEOMirror_14](img/HEOMirror_14.jpg)

縦横サイズが2のべき乗のTextureを用意します。<br>
今回は、256×256の画像を使用しています。正方形である必要はありません。

3\. 鏡にしたいQuadにVKC Node Mirrorをアタッチ

![HEOMirror_6](img/HEOMirror_6.jpg)

QuadにVKC Node Mirrorをアタッチします。Enableはチェックを入れたままにします。ScenePreviewのチェックは外します。

4\. Textureをアタッチ

![HEOMirror_15](img/HEOMirror_15.jpg)

この状態でビルドすることで、該当のオブジェクトがMirrorになります。

## その他Tips

### エリア内にプレイヤーがいるときだけ鏡を有効にする

Box Colliderと[VKC Node Collider](VKCNodeCollider.md)をアタッチすることで、プレイヤーがコライダー内にいるときだけ鏡描画処理を行うように制御できます。このとき、VKC Node ColliderのCollider TypeをAreaに、Collider TargetをNoneに設定してください。<br>
Box Colliderをアタッチしない場合、鏡描画処理はプレイヤーの位置に依らず常に行われます。

![HEOMirror_7](img/HEOMirror_7.jpg)

### マテリアルの色変更について

Standardシェーダーなど、色を付けることができるシェーダーを使うことで、鏡像の色合いを変更することができます。

![HEOMirror_8](img/HEOMirror_8.jpg)

![HEOMirror_9](img/HEOMirror_9.jpg)

![HEOMirror_10](img/HEOMirror_10.jpg)

### VKC Node Mirrorをアタッチしたオブジェクトと同じマテリアルを別オブジェクトに用いた場合

ビデオ再生と異なり、マテリアルに鏡像を映すのではなく、VKC Node Mirrorがアタッチされたもののみが鏡になります。

したがって、同じマテリアルを入れたからといって別オブジェクトで鏡像を確認できるといったことはありません。

![HEOMirror_11](img/HEOMirror_11.jpg)

### 合わせ鏡について

VKC Node MirrorをアタッチしたオブジェクトはVKC Node Mirrorに映りこまない特徴があります。

したがって、合わせ鏡をした場合、それぞれの鏡像は鏡に映りこまず、鏡の奥にある景色が映りこみます。

例：45°ずつ回転させ8枚のVKC Node MirrorをアタッチしたQuadを作成した場合

![HEOMirror_12](img/HEOMirror_12.jpg)

![HEOMirror_13](img/HEOMirror_13.jpg)

!!! warning "Mirrorを設置した際の負荷について"
    スマートフォンにて鏡を多重に設置する・鏡の視界内で動画の再生を始めるなどを行うと、動作が不安定になる可能性があります。
    鏡の設置の際は負荷についてご留意ください。

!!! warning "14.xの不具合"
    鏡のQuadのMaterialにStandardやAutodesk Interactiveを設定し、0.0, 180.0, 0.0のRotationなどにすると鏡として機能しない不具合が確認されています。
    修正を予定しておりますが発生した場合は対応としてはUnlit/Textureに変更をお願いいたします。
