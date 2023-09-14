# オブジェクトをアニメーションさせる

VketCloudSDKでは、[HEOAnimation](../HEOComponents/HEOAnimation.md)コンポーネントあるいは.heoファイルと.hemを使用してワールド上にアニメーション付きのオブジェクトを置くことができます。
動くオブジェクトがワールド上に設置されることで、見栄えが大きく向上します。

各ステップで躓いた際はオブジェクトをアニメーションさせる[オブジェクトをアニメーションさせる - できないときは]()を参照してください。

## HEOAnimationのアタッチ

[HEOAnimation](../HEOComponents/HEOAnimation.md)コンポーネントの`使い方`項目をご参照ください。

## HEOObjectにアニメーションを付与させる方法
オブジェクトを.heoに書き出し、アニメーションを.hemに書き出し、シーン上に配置することで、[HEOAnimation](../HEOComponents/HEOAnimation.md)より自由に動くオブジェクトを作成することができます。

なお、ここで使用できるアニメーションのパラメータは**Transformの値変更のみ**です。

