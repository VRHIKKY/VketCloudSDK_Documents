# Sprit関数について

Split関数はLib10.0以降、HeliScriptのString型の標準機能になりました。

それより前のバージョンでSplit関数を使用したい場合は、下記の展開を開いて、メソッドをご使用ください

CallScriptを行った際、parameterに変数を複数登録したいときに、下記のSplit関数で、listに分割して、それぞれの番号で選択して変数に格納してあげることで、Unity上で設定できる変数が増えます。

また、それぞれの役割ごとに変数設定もしやすくなります。（スクリーンショットは、”,”で変数を分割するようにしています）

![HSSprit](img/HSSprit.jpg)


```C#
//第1引数の文字列を、第2引数の文字で分割して、リストを返す。
    public list<string> Split(string str, string separator)
    {
        list<string> result = new list<string>();
        int startIndex = 0;
        int separatorIndex = str.IndexOf(separator);
        if(str.IndexOf(separator) == -1)
        {
            result.Add(str);
        }
        else
        {
            while (separatorIndex != -1)
            {
                result.Add(str.SubString(startIndex, separatorIndex - startIndex));
                str = str.SubString(separatorIndex + 1, str.Length() - separatorIndex + 1);
                separatorIndex = str.IndexOf(separator);
                if(separatorIndex == -1)
                {
                    result.Add(str.SubString(startIndex, separatorIndex - startIndex));
                    break;
                }
            }
        }          
        return result;
    }
```