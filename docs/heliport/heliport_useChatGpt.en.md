# ChatGPT / useChatGpt

A set of JavaScript functions that perform operations on ChatGPT.

## chatWithChatGptCharacterInRoom

An asynchronous function that allows you to send a sentence to a ChatGPT AI model, in the same room, and get a response.

```typescript
  /**
   * @param characterId {string} Character ID of a AI model
   * @param roomId {string} Room ID
   * @param userId {string} User ID
   * @param content {string} the content of chat
   * @returns {Promise<string | null>} JSON.stringify(result: ChatWithChatGptCharacterInTheRoomResponse)
   */
const chatWithChatGptCharacterInRoom = async (
    characterId: string,
    roomId: string,
    userId: string,
    content: string
  ): Promise<string | null> => {...}

```

If the operation succeeds, a stringified Json object is returned; if it fails, null is returned.

```typescript
// Success reponse not stringified
type ChatWithChatGptCharacterInTheRoomResponse = {
  characterRoom: { // Information of the room AI model existing
    id: number, // Room ID
    total_tokens: number, // Amount of used tokens
    character: { // The character of AI model
      id: number, // ID
      description: string, // Description
      name: string, // Name
      total_tokens: number, // Amount of used tokens
      train_message_count: number, // Total number of messages this AI model trained
    };
    roomid: string, // Room ID
    message_count: number, // Total number of current messages exchanged with this AI model.
    drop_message_count: number, // Total number dropped over token in messages exchanged with this AI model.
  },
  content: string, // The reply from AI model
};

// Success response stringified
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

// Failed response
return null
```