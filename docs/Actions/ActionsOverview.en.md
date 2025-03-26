# About Actions

![ActionsListSample](img/ActionsListSample.jpg)

Actions are a part of your gimmick.
By using Actions, you can implement basic gimmicks like:

- [Open Links in New Tab](./Web/Openweb.md)
- [Show/Hide Object](./Object/ShowHideObject.md)
- [Enable/Disable Collider](./Node/EnableDisableCollider.md)
- Play [Motion](./Motion/Motion.md)
- [Play/Stop Item](./Item/PlayStopItem.md) such as Audio, Particle ...etc

!!! info "caution"
    Keep in mind these points when setting up your Actions:

    - Actions are executed in order from the top
    - Changes made by Actions are only applied locally (the world on your device)
    - Unity's Play function is not supported. To check if your Actions are working, use Build And Run