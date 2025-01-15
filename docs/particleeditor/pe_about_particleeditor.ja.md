# パーティクルエディター概要

![pe_particleeditor_overview](pe_image/pe_particleeditor_overview.gif)

ParticleEditorはVket Cloud専用のパーティクルファイルフォーマットである『HEP』を作成する為のツールです。  
Vket Cloudと同一エンジンを用いて描画しているので、エディター上の見た目そのままでVket Cloudで再生することができます。

## 起動条件
- Chrome(Safari・Firefox非対応)  
- Python3.10以降

!!! bug "MacOSでの動作不具合について"
    現在、MacOSにてパーティクルエディターを使用する際、パーティクルとして使用される画像が変更できない現象が報告されております。<br>
    こちらの不具合についての原因は開発チームにて特定されましたが、解決のためにはパーティクルエディターの根本的な挙動から改修する必要があるため、長期的な開発によって不具合の解消を行う予定です。<br>
    大変恐れ入りますが、修正まで今しばらくお待ちいただければ幸いです。

## 起動方法

パーティクルエディターを開くには、Vket Cloud SDK > Tools > ParticleEditorを選択します。

![pe_about_particleeditor_1](pe_image/pe_about_particleeditor_1.jpg)

選択すると、ブラウザ上にてパーティクルエディターが起動します。

![pe_about_particleeditor_2](pe_image/pe_about_particleeditor_2.jpg)

## 起動方法（旧バージョン）

!!! note
    Ver5.4以前のパーティクルエディタは以下の方法で起動します。

ParticleEditorはWebアプリとして配布されているのでローカルで実行するためにはWebサーバを起動する必要があります。  
ここではpythonを使用する方法を解説します。  

1. ターミナルソフトで`Tools\ParticleEditor`に移動する  
2. `python -m http.server`と入力しWebサーバーを起動する  
3. ブラウザで`http://localhost:65535/`を開く  

## HEPファイルの保存・読み込みについて
保存・読み込みはファイル単位ではなくフォルダ単位で行います。  
その為以下の条件があります。

- HEPのファイル名はフォルダ名と同一でなければならない  
- 保存時はあらかじめ保存先のフォルダを作成しなければならない  
- 一つのフォルダに複数のHEPファイルを置いてはならない

パーティクルエディタにてパーティクルを作る際は、作りたいパーティクルの名前のフォルダをあらかじめ用意します。