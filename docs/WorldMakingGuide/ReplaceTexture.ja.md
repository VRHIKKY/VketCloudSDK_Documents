# ReplaceTextureでテクスチャの差し替えが正常に出来ない

## 問題1:  ReplaceTextureでテクスチャが差し替わらない
### 現象
`Item.ReplaceTexture()`を使用して特定のマテリアルにテクスチャを指定しても、テクスチャが差し替わりません。

!!! info "発生環境"
    SDKバージョン : 14.5<br>
    OS : Windows11<br>
    Unity : 2022.3.6f1<br>
    ブラウザ : Google Chrome

### 原因
差し替え対象のマテリアルに予めテクスチャが設定されていないことが問題です。

### 解決方法
マテリアルに予めテクスチャを設定してから`Item.ReplaceTexture()`を使用してください。


---

## 問題2: 複数のテクスチャが同時に差し替わってしまう
### 現象
あるマテリアルのテクスチャを差し替えると、意図せず他のマテリアルのテクスチャも同時に差し替わってしまいます。

![ReplaceTexture_1](./img/ReplaceTexture01.jpg)

![ReplaceTexture_2](./img/ReplaceTexture02.jpg)

!!! info "発生環境"
    SDKバージョン : 14.4.12<br>
    OS : Windows10<br>
    Unity : 2019.3.6f1<br>
    ブラウザ : Google Chrome

### 原因
差し替え対象のマテリアルが持つテクスチャと同じテクスチャが別のマテリアルでも使用されている場合、そのマテリアルのテクスチャも一緒に差し替わってしまいます。

### 解決方法
差し替え対象のマテリアルには、他のマテリアルで使われていないテクスチャを使用するようにしてください。

![ReplaceTexture_3](./img/ReplaceTexture03.jpg)

![ReplaceTexture_4](./img/ReplaceTexture04.jpg)

!!! note
    `Item.ReplaceTexture()`を使用する場合は、マテリアルとテクスチャファイルの関連性に十分注意する必要があります。