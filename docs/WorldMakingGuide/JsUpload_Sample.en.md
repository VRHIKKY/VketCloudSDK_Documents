# Introducing Sample JS Upload

## Prerequisites
Make sure the following prerequisites are met:
- [Requirements for enabling the JS Submission Feature in SDK 13.7](https://vrhikky.github.io/VketCloudSDK_Documents/en/13.7/WorldMakingGuide/JsUpload.html#Prerequisites)

## Sample JS Submission Steps

1. From the top menu, navigate to `VketCloudSDK > Tutorial > Tutorial - Scripts -`
2. Open `Assets/Samples/Vket Cloud SDK/13.7.7/Tutorial - Scripts -/02_JSUpload.unity`.
3. From the top menu, click on `VketCloudSDK > Upload To Remote Server`.
4. Select the world you prepared during setup and click the `Upload` button.

## Overview of the Sample JS Submission World

In this sample world, the state of the keyboard (Up or Down) is displayed as text. The system detects keyboard inputs from the user (key presses and releases) in real-time and displays their status (Down, Up) as text. This functionality is enabled through bidirectional communication between Vket Cloud's HeliScript and JavaScript.

## Explanation of the Communication Flow

Data is exchanged bidirectionally between HeliScript and the JavaScript running on the browser. The process consists of sending input data from the Unity side to JavaScript, which processes the data.

- **Data Communication between HeliScript and JavaScript:**
   - Data is sent from HeliScript to JavaScript, and vice versa.
   - The `heliport.customApi` namespace handles this communication, where methods like `sendData` and `receiveData` are used for sending and receiving data.

## Data Flow Overview

1. When a keyboard input is detected, JavaScript captures the event and pushes the data into the `keyEventStream$`.
2. When the state of the key changes (Down/Up), JavaScript sends the data to HeliScript.
3. HeliScript receives the data via the `OnReceive()` method and updates the text display accordingly.
4. If needed, HeliScript can also send data to JavaScript, for instance, to handle click events.

## JavaScript Implementation

On the JavaScript side, the `rxjs` library is used to handle reactive data processing. The keyboard input events are monitored, and the data is sent to HeliScript based on state changes.

```javascript
const { Subject, zipWith, groupBy, distinctUntilChanged } = rxjs;
// Data received from the in-game side flows into fromIngame$
const fromIngame$ = new Subject();
// Handler for data sent from in-game
fromIngame$.subscribe((data) =>
  console.warn(`Data received from in-game: ${data}`)
);
/**
 * 1. Data to be sent from JS to in-game is pushed into toIngame$
 * 2. Requests for data from the in-game side are received via receiveRequest$
 * When both 1 and 2 are available, the data from 1 is provided as a response to the data request.
 */
const toIngame$ = new Subject();
const receiveRequest$ = new Subject();
toIngame$.pipe(zipWith(receiveRequest$)).subscribe(([v, f]) => f(v));
const keyEventStream$ = new Subject();
// Classify the key event data by key and send only when there is a down/up state change
keyEventStream$.pipe(groupBy((i) => i.key)).subscribe((g) => {
  g.pipe(distinctUntilChanged((p, c) => p.state === c.state)).subscribe((i) => {
    toIngame$.next(i);
  });
});
function handleKeyEvent(e, state) {
  if (
    e.target &&
    "nodeName" in e.target &&
    e.target.nodeName in ["INPUT", "TEXTAREA"]
  ) {
    // Ignore input fields
    return;
  }
  // Extract necessary data from JS events and push it into the RxJS stream for processing
  const item = { key: e.key, state };
  keyEventStream$.next(item);
}
document.addEventListener("keydown", (e) => {
  handleKeyEvent(e, "down");
});
document.addEventListener("keyup", (e) => {
  handleKeyEvent(e, "up");
});
// API for data communication between the in-game system and JS
const receiveData = async () =>
  new Promise((resolve) => receiveRequest$.next(resolve));
const sendData = (data) => {
  fromIngame$.next(data);
};
window.heliport.customApi = {
  sendData,
  receiveData,
};
```

- **handleKeyEvent() Function:**
   - Listens for `keydown` and `keyup` events and pushes the corresponding key state into the `keyEventStream$` RxJS stream.
- **Data Communication:**
   - The `toIngame$` stream is used to send data to HeliScript, while `fromIngame$` receives data from HeliScript.
   - The `receiveData()` method asynchronously returns data upon request from HeliScript.

## HeliScript Implementation

In HeliScript, the state of the keyboard input is monitored and sent to JavaScript. Additionally, data from JavaScript is received and processed accordingly.

```csharp
// Delegate declaration. Takes the data received from JavaScript as an argument and returns nothing.
delegate void fJsValCallback(JsVal);

// Declares the JavaScript console object externally, providing a function to log messages.
extern console
{
    void log(JsVal); // Equivalent to JavaScript's console.log
}

// Declares custom API functions for sending and receiving data externally.
extern heliport.customApi {
    void sendData(JsVal data); // For sending data
    void receiveData(async fJsValCallback); // For receiving data (asynchronously)
}

// Component for monitoring and logging keyboard input state
component keyLogging
{
    Item thisItem; // Item associated with this component
    Item resultTextPlane; // Text plane for displaying results

    // Constructor. Retrieves the item and starts monitoring keyboard input.
    public keyLogging()
    {
        thisItem = hsItemGetSelf(); // Get the item linked to this component
        resultTextPlane = hsItemGet("KeyStatusText"); // Get the item for displaying text
        Watch(); // Start monitoring keyboard input
    }

    // Update function called every frame (currently unused)
    public void Update()
    {
        // Additional update logic can be added here
    }

    // Monitoring function for receiving data from JavaScript
    void Watch()
    {
        heliport.customApi.receiveData(OnReceive); // Asynchronously receive data from JavaScript
    }

    // Callback function for processing data received from JavaScript
    void OnReceive(JsVal data)
    {
        console.log(data); // Log received data to the console
        string key = data.GetProperty("key").GetStr(); // Retrieve the "key" property from the data
        string state = data.GetProperty("state").GetStr(); // Retrieve the "state" property from the data

        handleKeyInput(key, state); // Process the key input state

        Watch(); // Start monitoring for the next data
    }

    // Process key input state and display it on the text plane
    void handleKeyInput(string key, string state)
    {
        string text = key + " " + state; // Concatenate key and state into a string
        hsSystemWriteLine(text); // Output to system log
        resultTextPlane.WriteTextPlane(text); // Display on the text plane
    }

    // Event handler for when a node is clicked
    public bool OnClickNode(int NodeIndex)
    {
        string clickedNodeName = thisItem.GetNodeNameByIndex(NodeIndex); // Get the name of the clicked node
        sendClick(clickedNodeName); // Send the clicked node name to JavaScript
        return false; // End the click processing here
    }

    // Event handler for when an empty area is clicked
    public void OnClickEmpty()
    {
        sendClick("Empty"); // Send a notification that an empty area was clicked to JavaScript
    }

    // Send the name of the clicked object to JavaScript
    void sendClick(string objName)
    {
        JsVal data = makeJsStr(); // Create the data to send
        data.SetStr(objName + " clicked."); // Set the name of the clicked object
        heliport.customApi.sendData(data); // Send the data to JavaScript
    }
}
```

- **keyLogging Component:**
   - Manages the state of keyboard input and waits for data from JavaScript via the `Watch()` function.
   - The received data (`OnReceive()` method) represents the state of key presses, which is then reflected in Unity's UI.
- **Key Features:**
   - `heliport.customApi.receiveData()` is used to asynchronously receive data from JavaScript.
   - The `sendClick()` method sends click events to JavaScript when a node is clicked.