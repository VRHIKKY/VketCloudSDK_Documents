MeshColliderの書き出し方法についてご説明いたします。

## 書き出し手順
1. ColliderとMeshRendererを分離する。

![meshcollider_separate](he_image/meshcollider_separate.png)
   
2. 書き出したいMeshColliderがアタッチされたオブジェクトにHEOMeshColliderをアタッチする。意図しない書き出しの対策でこちらをアタッチしない限り、MeshColliderは書き出されないです。

![attach_heomeshcollider](he_image/attach_heomeshcollider.png)