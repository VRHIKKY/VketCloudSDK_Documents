# ChatGPT / useChatGpt

ChatGPTの操作を行うJavaScriptの関数群です。

## chatWithChatGptCharacterInRoom

同一ルーム内の、ChatGPTのAIモデルに文章を送り、応答を得ることができる非同期関数です。

```typescript
  /**
   * @param characterId {string} AIモデルのキャラクターID
   * @param roomId {string} ルームID
   * @param userId {string} ユーザーID
   * @param content {string} チャット内容
   * @returns {Promise<string | null>} JSON.stringify(result: ChatWithChatGptCharacterInTheRoomResponse)
   */
const chatWithChatGptCharacterInRoom = async (
    characterId: string,
    roomId: string,
    userId: string,
    content: string
  ): Promise<string | null> => {...}

```

処理に成功した場合は文字列化されたJsonオブジェクトが、失敗した場合はnullが返されます。
```typescript
// 成功した場合の返答(文字列化する前のJsonオブジェクト)
type ChatWithChatGptCharacterInTheRoomResponse = {
  characterRoom: { // ChatGPTのキャラクターが存在するルーム情報
    id: number, // ルームID
    total_tokens: number, // 合計トークン利用量
    character: { // AIモデルのキャラクターの情報
      id: number, // ID
      description: string, // 説明
      name: string, // 名前
      total_tokens: number, // 合計トークン利用量
      train_message_count: number, // 学習したメッセージ数のカウント
    };
    roomid: string, // ルームID
    message_count: number, // AIモデルとやり取りした現在のmessageの総数
    drop_message_count: number, // AIモデルとやり取りした現在のmessageでtokenオーバーでドロップした総数
  },
  content: string, // 返答の内容
};

// 成功した場合の返答(文字列化したJsonオブジェクト)
return `{
  characterRoom: {
    id: number,
    total_tokens: number,
    character: {
      id: number,
      description: string,
      name: string,
      total_tokens: number,
      train_message_count: number,
    };
    roomid: string,
    message_count: number,
    drop_message_count: number,
  },
  content: string,
}`

// 失敗した場合の返答
return null
```