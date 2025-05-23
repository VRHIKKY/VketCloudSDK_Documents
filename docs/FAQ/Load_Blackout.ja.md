# ロードが完了すると画面が真っ暗になる

## 現象
ビルドは問題なくすすみ、ロードが完了すると画面全体が真っ暗になる。エンジンが停止しているわけではなく、コンソールログは流れるしBGMも聞こえる。

また、やたらDrawCallが高い。

デバッグモードにして飛行モードにすると画面が表示され、DrawCallも下がる。ただしギミックやUI等は触ることができない。飛行モード時の表示はセピア色になることがある。


!!! info "発生環境"
    SDKバージョン : 9.3<br>
    Unity : 2019.4.31.f1<br>

## 解決までに試したこと
### Debugモードで確認
DrawCallが高く飛行モードにすると画面が表示され、ギミックやUIを触ることはできない。飛行モードにすると何故かDrawCallが小さくなることを確認。

### シーン上のオブジェクトを非アクティブにして再ビルド
シーン上のオブジェクトを怪しいところから非アクティブにしたり、半分ずつ非アクティブにしたりなるべく効率よく問題のあるオブジェクトをを調査していく。

結果、最近更新したHEOオブジェクトが割り当てられているオブジェクトを非表示にしたときに症状は直った。何も変更せずHEOオブジェクトを再出力すると直った。

出力したときのフォルダ位置を間違えたとかそういうやつかもしれない。

## 結論
マテリアル関係のエラーが起きると発生する症状ということを教えていただいた。
マテリアルや表示系のエラー時に起きる症状とのことで、最近変更したゲームオブジェクトを非アクティブにしていき、どのオブジェクトが問題なのかを特定していき、問題のあるオブジェクトがわかったら、見た目に関する修正を疑う。HEOオブジェクトであれば、再度出力したりしてみる。

