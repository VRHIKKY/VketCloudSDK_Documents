# HEOMeshCollider
![MeshCollider](img/HEOMeshCollider.jpg)

ワールドのビルド時に3Dモデルのメッシュ情報からそのメッシュにもとづくコライダーを生成します。

## 設定手順

1. はじめに、3Dモデルのメッシュ部分とメッシュコライダー部分をそれそれ別のゲームオブジェクトに分離します。

![meshcollider_separate](img/meshcollider_separate.jpg)
   
2. 書き出したいメッシュコライダーがアタッチされたオブジェクトにHEOMeshColliderをアタッチします。

![attach_heomeshcollider](img/attach_heomeshcollider.jpg)

3. この状態でビルドすると、3Dモデルのメッシュを基にコライダーが生成されます。