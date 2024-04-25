# セキュリティソフトによってインストールが止まるときは

お手元の環境によっては、VketCloudSDK Install Wizardを導入する際にUnity Package Managerの作動が差止められて以下の画像のようにエラーが表示される場合があります。

これはUnityのPackageManagerがアクセスしようとしているアドレスの中にドメインの証明書が切れているものがあり、それを原因としてセキュリティソフトが検知していることが原因です。

```
Cannot perform upm operation: unable to verify the first certificate [NotFound]
UnityEditor.EditorApplication:Internal_CallUpdateFunctions ()
```

![SecuritySoftware_1](img/SecuritySoftware_1.jpg)

## 対処方法
