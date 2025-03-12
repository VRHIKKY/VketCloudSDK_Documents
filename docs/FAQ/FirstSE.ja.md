# 効果音の初回再生が遅い問題の解消

HeliScriptで効果音を再生する際に、キャッシュクリア後の初回の音声再生に時間がかかる問題の対処法です。

!!! info "発生環境"
    SDKバージョン : 13.7.7<br>
    OS : win10<br>
    Unity : 2019.4.31.f1または2022.3.6f1<br>
    ブラウザ : chrome<br>

## 手順

①コンストラクタでItemをLoad()する


```
public QuizManager()//コンストラクタ
    {
        PreloadSEs();
    }
---------------------------------------------------------
void PreloadSEs()
    {
        //事前にLoadすることで初回の効果音再生が遅い問題を解消する
        Item correctSE1 = hsItemGet("CorrectSE_1");
        correctSE1.Load();
        Item incorrectSE1 = hsItemGet("IncorrectSE_1");
        incorrectSE1.Load();
    }
```
## その他知見

- Play()/Stop()を同フレームで発火すると音声のローディングはされますが、以後そのItemで再生できなくなるので不適切です。

- シーンファイルでAutoLoadingをtrueにしてもローディング画面時には読み込まれないみたいです。

- 同じ音声ファイルを使用している別Itemはキャッシュから再生されるので、どれか一つのItemをLoadすれば大丈夫です。

