# Version 14.4.0

## HeliodorLib(ブラウザで表示されるワールドで使われているエンジン)

### 機能追加調整
* 汎用ダイアログを複数個表示できる機能をオミットしました
    * 根本的な設計部分に問題があり、Canvas以外のHeliScriptで汎用ダイアログを開くことができなくなっていたのでその一時的な対処となります

### HeliScript
* LayerBundleとLayerのSetShow()の挙動を、hsCanvasSetLayerShow()に合わせました
