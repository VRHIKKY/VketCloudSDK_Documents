# 【HeliScript - 知識】Date型の特殊仕様について

## 概要

HeliScriptで使用可能なDate型ですが、Lib14環境現在、やや特殊な仕様があります。
本記事では特殊仕様の紹介と対策について紹介します。


!!! info "発生環境"<br>
    SDKバージョン : 14.2.1  
    Libバージョン：14.4
    Unity : 2022.3.6.f1  

## 初期化
Date型の初期値として最古の値を入れる時、

```
Date _newDate;
_newDate = hsCreateDateUTC(0,0,0,0,0,0,0);
```
のような入力をしても、適切な値が入りません(現在時刻の情報が入ります)。
```
Date _newDate;
_newDate = hsCreateDateUTC(1970,1,1,0,0,0,0);
```
のように、1970年1月1日0時0分0.000秒を指定しましょう。

## Date型のリストは正常に機能しない
Date型のリストを作成した場合、各要素にhsCreateDate()などでDate型を代入しようとすると、「デストラクタを含んでいるクラスDateへは代入できません」というエラーが出てしまいます。

![DateSpecialSpecifications](img/DateSpecialSpecifications.jpg)

Date型のリストを作りたいときは、string型のリストを作成し、Date型をToString()でstring型に変換したうえで、Date型として使用する際に適宜hsParseDate()を使用します。
```
// Date型リスト(代替)の作成
list<string> _dateList;
_dateList = new list<string>(10);

// リストの初期化
for(int i=0;i<_dateList.Count();i++){
  _dateList[i] = hsCreateDateUTC(1970,1,1,0,0,0,0).ToString();
}

---
// Date型リスト(代替)の使用
Date _date;
int _index;

_index = 5;

// Date型リスト(代替)の6番目の要素を取得
_date = hsParseDate(_dateList[_index]);
```
## string型で初期化する際の注意点
hsParseDate()を使ってstring型からDate型を作成する際、string型の中身が空の場合、中身がnullのDate型が出来てしまいます。
hsCreateDateUTC(1970,1,1,0,0,0,0).ToString()などでString型変数の中にDate型の値を入れましょう。

