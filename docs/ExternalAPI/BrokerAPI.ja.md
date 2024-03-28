# ブローカーAPIについて

ブローカーAPIとは、Vket Cloudにおいて外部APIとの連携を行う際、該当のAPIをホワイトリストに登録した上で通信を行うためのAPIです。

!!! caution "APIの実装予定について"
    SDK Ver12.3.4現在、ブローカーAPIはGETにのみ対応しております。<br>
    今後のアップデートによってPOST, PUT, DELETEなどに対応する予定です。

## 使い方

!!! caution "外部API連携機能の公開について"
    外部API連携機能は現在Vket Cloud開発者コミュニティに向けて限定公開されております。<br>
    当機能をお使いになりたい場合は[Vket CloudコミュニティDiscord](https://discord.com/invite/vsFDNTKdNZ){target=_blank}にご参加の上、[ロール取得チャンネル](https://discord.com/channels/900943744575103017/1178589689393975317){target=_blank}にて「開発コミュニティ」ロールをご取得ください。<br>
    開発者コミュニティにご参加いただくと、APIをホワイトリストに入れる手順のほか、最新の更新情報などが受け取れるようになります。ぜひご参加ください！

1\. 使いたいAPIをVket Cloud公式サイトにてホワイトリストに入れます。

[Vket Cloud公式サイト](https://cloud.vket.com/){target=_blank}にてマイページにログインし、外部API一覧ページへ移動します。<br>
ここではブローカーAPIのホワイトリストとして扱うAPIが一覧として表示されます。

![BrokerAPI_1](img/BrokerAPI_1.jpg)

「外部APIを追加する」を選択し、API名とURLを記載します。<br>
API名は識別のために任意の名前を付け、URLは使用したいAPIのものを指定し、保存します。<br>
例として、この後のサンプルコードで用いる[Youtube Data API](https://developers.google.com/youtube/v3/getting-started?hl=ja){target=_blank}の情報を以下のように記載します。

![BrokerAPI_2](img/BrokerAPI_2.jpg)

なお、APIを使用する際はあらかじめ認証に必要なAPIキーなどのセットアップと取得を済ませる必要があります。

2\. ワールドをセットアップし、APIを呼び出すためのHeliScriptを[JsVal](JsVal.md)を使用しつつ作成します。

例として、以下にYoutube Data APIを使用してオブジェクトがクリックされた際に指定の動画の検索結果を取得・表示するHeliScriptの実装を示します。

```c#
delegate void fJsValCallback(JsVal);//コールバック用
extern api.broker//ブローカーAPIの関数を呼び出すための宣言
{
    bool registerAgreement(string url, string spatiumCode, string worldCode, string guestUuid);
    bool connectExternalApi(async fJsValCallback, string method, string url, string spatiumCode, string worldCode, string guestUuid, JsVal data);
}
extern console
{
    void log(JsVal);//JsValの中身確認用。ブラウザのコンソールで確認できる
}
component BrokerAPI
{
    Item thisItem;//BrokerAPIコンポーネントが割り当てられているItem
    Item resultTextPlane;//取得結果を表示するTextPlane
    //定数
    const string GET_SWITCH_NAME = "Button_Get";//Worldで押すボタンのgameObject名を入れる
    const string API_URL = "https://www.googleapis.com/youtube/v3/search";//アクセス許可に表示するURL兼疎通URL
    const string YOUTUBE_API_KEY = "XXXXXXXXXXXXXXX";//youtube APIのapiキーを入れる
    const string SPATIUM_CODE = "Default";//特殊なことをしなければDefault
    const string SEARCH_WORD = "VketCloud";//検索するワードを入れる
    const int MAX_RESULTS = 10;//検索結果の数を入れる。1～50
    const string RESULT_ITEM_NAME = "Result";//取得結果を表示するTextPlaneの名前。12.3だとFontSize大きくすると文字化けし易い
    //----------------------------------------
    public BrokerAPI()
    {
        //BrokerAPI.hsが割り当てられているItemを取得。
        //ボタン(GET_SWITCH_NAME)のGameObjectが存在するFieldにBrokerAPI.hsのHEOScriptを割り当てる必要がある。
        thisItem = hsItemGetSelf();
        resultTextPlane = hsItemGet(RESULT_ITEM_NAME);
    }
    public void OnClickNode(int NodeIndex)
    {
        string clickedNodeName = thisItem.GetNodeNameByIndex(NodeIndex);//クリックされたノードの名前を取得
        switch (clickedNodeName)
        {
            case GET_SWITCH_NAME://GET用のボタン
                if(!hsCommonDialogIsOpened())
                {
                    ComfirmApiAccess();
                }
                break;
            default://その他
                hsSystemWriteLine("未登録のNodeName:" + clickedNodeName);
        }
    }
    void ComfirmApiAccess()//APIアクセス許可のための汎用ダイアログを設定、表示する
    {
        //汎用ダイアログについては下記マニュアルを参照
        //https://vrhikky.github.io/VketCloudSDK_Documents/12.3/hs/hs_system_function_commondialog.html#hscommondialogsettitle
        hsCommonDialogSetUseTitle(true);//タイトルを表示
        hsCommonDialogSetUseYesNoButton(true);//YES/NOボタンを表示
        string url = GetAPIUrl();//APIアクセス許可のためのURLを取得
        if(hsIsLangJA())//ブラウザ設定が日本語かどうか
        {
            hsCommonDialogSetTitle("Youtube検索");//ダイアログのタイトル
            hsCommonDialogSetText(API_URL + "\nにアクセスします。よろしいですか?");//ダイアログの本文
        }
        else
        {
            hsCommonDialogSetTitle("Youtube Search");//ダイアログのタイトル
            hsCommonDialogSetText("Do you allow access to \n" + API_URL);//ダイアログの本文
        }
        hsCommonDialogSetTextAlignment(HSAlignLM);//本文の配置。左詰め中央表示
        hsCommonDialogSetTextOverflowWrap(true);//本文の折り返しをする設定
        hsCommonDialogSetTextURLClickable(false);//URLをクリック不可に
        hsCommonDialogSetYesButtonText("YES");//YESボタンのテキスト設定
        hsCommonDialogSetNoButtonText("NO");//NOボタンのテキスト設定
        hsCommonDialogSetYesButtonDelegate(YesButtonCallback);//YESボタンを押したらNoButtonCallbckを実行
        hsCommonDialogSetNoButtonDelegate(NoButtonCallback);//NOボタンを押したらNoButtonCallbckを実行
        hsCommonDialogOpen();//ダイアログを開く
    }
    void NoButtonCallback()//Noボタンを押したら実行
    {
        hsCommonDialogClose();//汎用ダイアログを閉じる
    }
    void YesButtonCallback()//Yesボタンを押したら実行
    {
        APIGetTest();
        hsCommonDialogClose();
    }
    void APIGetTest()//youtubeの検索結果を取得
    {
        hsSystemWriteLine("APIGetTest");
        string url = GetAPIUrl();
        string worldID = hsGetCurrentWorldId();

        //本来は将来的な機能に対応するためguestの場合ここでuuidを取得する必要があるが、現在はuuidを固定値として設定
        /*
        string SelfUserType = GetSelfUserType();
        string guestUuid = GetSelfGuestUuid();

        //guestでuuidがない場合またはSelfUserTypeが空の場合は疎通しない。ローカルホストでの動作確認では起こり得る。
        if (guestUuid == "" && SelfUserType == "guest" || SelfUserType == "")
        {
            hsSystemWriteLine("UserInfoError");
            return;
        }
        */
        string guestUuid = "Uuid";

        //許可を取ったURLを登録
        bool result = api.broker.registerAgreement(url, SPATIUM_CODE, worldID, guestUuid);
        BoolLogOutput("registerAgreement: ",result);//agreementの結果をlogで確認

        string method = "get";//HTTPリクエストメソッド。今回はget
        JsVal data = makeJsNull();//connectExternalApiの第7引数用のJsVal。getの場合はnullでよい

        //APIに接続。第一引数に指定したメソッドにdataが入って呼ばれる
        api.broker.connectExternalApi(GetCallback, method, url, SPATIUM_CODE, worldID, guestUuid, data);
    }
    string GetAPIUrl()
    {
        string apiUrl = API_URL;//APIのURL
        apiUrl += "?key=" + YOUTUBE_API_KEY;//Apiキーを指定
        apiUrl += "&part=snippet";
        apiUrl += "&type=video";//検索したいものを指定
        apiUrl += "&q=" + SEARCH_WORD;//=の後に検索したいワードを入力
        apiUrl += "&maxResults=" + MAX_RESULTS.String();//検索結果の数を指定
        return apiUrl;
    }
    void BoolLogOutput(string logStr, bool flag)
    {
        string resultStr = flag ? "true" : "false";
        hsSystemWriteLine(logStr + resultStr);
    }
    string GetSelfGuestUuid()
    {
        //本来は将来的な機能のため、guestの場合ここでuuidを取得する必要があるが、現在はuuidを固定値として設定
        string guestUuid = "Uuid";//
        return guestUuid;
    }
    string GetSelfUserType()
    {
        string SelfUserType = "";//UserTypeを取得する方法は未公開なため、空文字を設定
        return SelfUserType;
    }
    void GetCallback(JsVal data)//youtubeの検索結果を処理
    {
        hsSystemWriteLine("GetCallback");
        console.log(data);//JsValの中身確認用
        string outputText = "";
        if (!IsDataValid(data)) return;//dataが有効かどうかを判定

        int resultsPerPage = data.GetProperty("data").GetProperty("data").GetProperty("pageInfo").GetProperty("resultsPerPage").GetNum();//結果の数を取得
        for (int i = 0; i < resultsPerPage; i++)//titleをoutputTextに格納
        {
            string title = data.GetProperty("data").GetProperty("data").GetProperty("items").At(i).GetProperty("snippet").GetProperty("title").GetStr();
            //hsSystemWriteLine(title);
            outputText += title + "\n";
            if (i != resultsPerPage - 1) outputText += "\n";
        }
        resultTextPlane.WriteTextPlane(outputText);
    }
    bool IsDataValid(JsVal data)
    {
        bool result = true;
        if (data.IsNull())
        {
            result = false;//dataがnullの場合にはfalse
            hsSystemWriteLine("Data is Null");
        } 
        string status = data.GetProperty("status").GetStr();
        if (status == "ng")
        {
            //statusがngの場合にはfalse。ローカルホスト等で認証サーバーにアクセスできない場合に起こる
            result = false;
            hsSystemWriteLine("Data is NG");
        }
        return result;
    }
}
```

3\. ワールドをビルドし、結果を確認します。

![BrokerAPI_Result](img/BrokerAPI_Result.gif)
