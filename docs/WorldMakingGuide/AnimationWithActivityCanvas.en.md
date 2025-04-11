# Animation With ActivityCanvas

## Overview

You can implement animations in CanvasJson. However, animation implementation has some quirks. This article explains how to implement animations in a Canvas within an Activity and highlights important points to be aware of.

<video src="./img/AnimationWithActivityCanvas.mp4" controls="true"></video>

!!! info "Test Environment"
    SDK Version: SDK14.2.1<br>
    OS: Windows 10<br>
    Unity: 2022.3.6.f1<br>
    Browser: Google Chrome

## Steps

### ① Writing the Animation

Add animation definitions to CanvasJson.

The supported animation properties are alpha, position, and rotation.  
Alpha and rotation are particularly important, as they can only be defined here.

!!! info "Animation Rules"
    - The animation starts from the state defined in "Begin".
    - During animation, it transitions to the specified state over the defined duration.
    - In the "default" state, image loading is triggered.

In the example at the top of this article:

```
Animation starts
↓
All HUDs hidden + screen fade to black (1 second)
↓
Dialog fades in and moves from top to center
↓
If the user clicks during fade-in or steps on a warp portal to show entrance message, animation ends
↓
If ended by click, all HUDs are shown again
```

This sequence is achieved by combining Canvas animation with HeliScript.  
The reason for using both is explained later in "Weaknesses of the Animation Feature" → ③.

Below is the actual animation definition.  
We want the object to start fully transparent, so we set the Alpha in "Begin" to 0.0.  
The "End" state has Alpha 1.0.  
The `NextState` is set to `"End"`—this is also related to point ① in the weaknesses section.

<details><summary>Background Animation Definition</summary>

```
{
  "Name": "gameclear_back_close_button",
  "Type": "button",
  "Platform": "",
  "Language": "",
  "Show": true,
  "Pos":[ 0, 0],
  "Size":[ 4000, 4000],
  "Z": -1,
  "Alpha": 1.0,
  "InputActive": true,
  "Pivot":[ 0.5, 0.5],
  "Anchor":"CM",
  "ParamButton": {
    "FileName": "./gui/popup_background.png",
    "LTRB": [8,8,8,8]
  },
  "Animation":
  {
    "State" : 
    {
      "Begin":
      {
        "Pos": [ 0, 0 ],
        "Rotate": 0.0,
        "Alpha": 0.0,
        "InputActive": false,  
        "NextState": "End"
      },
      "End":
      {
        "Pos": [ 0, 0 ],
        "Rotate": 0.0,
        "InputActive": true,
        "NextState": "End" 
      }
    }
  },
  "GUIAction" :[]
}
```

</details>

<details><summary>Dialog Animation Definition</summary>

```
{
  "Name": "gameclear_image_button",
  "Type": "button",
  "Platform": "",
  "Language": "_en",
  "Show": true,
  "Pos":[ 0, 0],
  "Size":[ 800, 600],
  "Alpha": 1.0,
  "InputActive": true, 
  "Z": 2,
  
  "Pivot":[ 0.5, 0.5],
  "Anchor":"CM",
  "ParamButton": {
    "FileName": "./gui/stageclear.png",
    "OnCursorFileName": "./gui/stageclear.png",
    "DownFileName": "./gui/stageclear.png"
  },
  "Animation":
  {
    "State" : 
    {
      "Begin":
      {
        "Alpha": 0.0,
        "InputActive": false,  
        "NextState": "End"
      },
      "End":
      {
        "InputActive": true,
        "NextState": "End" 
      }
    }
  },
  "GUIAction" :[]
}
```

</details>

### ② Executing HeliScript

To run a Canvas animation in an Activity, use LayerBundle.StartGUIAnimation().

!!! info “LayerBundle.StartGUIAnimation(string GUIName, string stateName, int ms)”
Animates the GUI element specified in the first argument from its current state to the second argument (state name) over the duration in milliseconds (third argument).

In this case, we want to stagger the background and dialog animations, so we implemented it as follows:

<details><summary>Implemented HeliScript</summary>

```
// Parent item
Item _parentItem;

// Time management and animation flags (background, dialog)
float _timer;
bool _isAnimating, _dialogAnimating;

// Layer info for animation
LayerBundle _animationLayer;

// Helper function to get full layer name
string GetLayerName(string layerName) { return "%s/%s" % _parentItem.GetName() % layerName; } 
const string _LayerName = "LayerName";

// GUI name constants and state names
const string _AnimationBackgroundGUI = "gameclear_background";
const string _AnimationDialogGUI = "gammeclear_gialog";
const string _AnimationStateBegin = "Begin";
const string _AnimationStateEnd = "End";

// Animation duration constants (background + dialog = total)
const float _BackgroundAnimationTime = 1;
const float _DelayTime = 0.1;
const float _DialogAnimationTime = 2;

// Duration in milliseconds
int _backgroundAnimationTimeMs, _dialogAnimationTimeMs;

// Dialog movement positions
const float _DialogHidePosY = -10000;
const float _DialogMoveStartPosY = -200;

// Constructor
public Example(){
  _animationLayer = hsLayerGet(GetLayerName(_LayerName));
  _parentItem = hsItemGetSelf().GetParentItem();
  _backgroundAnimationTimeMs = _BackgroundAnimationTime * 1000;
  _dialogAnimationTimeMs = _DialogAnimationTime * 1000;
}

// Called when animation should start
public void ShowGameClearDialog(){
    hsCanvasSuspendVisibleLayers();
    hel_set_HTMLElement_visibility(_TextchatElementName,false);
    hel_set_HTMLElement_visibility(_ChannelnameElementName,false);
    _animationLayer.SetShow(true);
    
    _animationLayer.StartGUIAnimation(
      _AnimationBackgroundGUI,
      _AnimationStateBegin,
      _backgroundAnimationTimeMs);
    _isAnimating = true;
}

public void Update(){
  if(_isAnimating){
    _timer += hsSystemGetDeltaTime();
    if(_timer > _BackgroundAnimationTime){
      if(!_dialogAnimating){
        _dialogAnimating = true;
        _anmationLayer.StartGUIAnimation(
          _AnimationDialogGUI,
          _AnimationStateBegin,
          _dialogAnimationTimeMs);
      }
      if(_timer < _BackgroundAnimationTime + _DelayTime){return;}
      if(_timer < _BackgroundAnimationTime + _DialogAnimationTime){
        _animationLayer.GetCurrent().SetGUIPos(
          _AnimationDialogGUI,
          0,
          _DialogMoveStartPosY+(_timer-_BackgroundAnimationTime)*-_DialogMoveStartPosY/_DialogAnimationTime);
      }else{
        _animationLayer.GetCurrent().SetGUIPos(
          _AnimationDialogGUI,
          0,
          0);
      }
    }else{
      _animationLayer.GetCurrent().SetGUIPos(
        _AnimationDialogGUI,
        0,
        _DialogHidePosY);
    }
  }
}
```

</details>

!!! info “Key Point”
    In ShowGameClearDialog(), we display the layer that includes animations and trigger the background animation.
    We also set flags and start time tracking.
    In Update(), we track elapsed time. Once the background animation ends (after 1 sec), we start the dialog animation.
    The dialog GUI is moved using SetGUIPos().
    Note: SetGUIPos() exists only on Layer, so we call GetCurrent() from the LayerBundle to get the current Layer instance, and apply updates there.

## Weaknesses of the Animation Feature

As of 2025/3/26 (Lib15.2), using Canvas animations in Activities has the following limitations:

### ① Using default in states causes errors

When transitioning to the default state, the system attempts to load images defined in the GUI element.
However, in an Activity, if the UI was newly created, the system constructs a path by appending a relative path to the CDN base URL.
This can result in a failed download and an error.

Therefore, avoid using default.
Stick to Begin and End only.

(Begin → End → End… is valid, but if it transitions from Begin to default, animation still plays.)

### ② Not intuitive

Canvas animations are designed to transition from Begin to default over a set duration.

So, for example, to animate from transparent to opaque, you must set Alpha: 1.0 in default, and Alpha: 0.0 in Begin.

Since default is defined first, it feels like the order is reversed.
You need to get used to thinking in terms of “Begin → default”.

### ③ Cannot transition through more than two states; using SetGUIShow midway causes issues

The reason we use SetPos in HeliScript is because more than two states are not supported (or recommended).

Besides Begin and End, there are only OnCursor and OnPress states—these are not suitable for animation sequences.

So we must stick to two states. But the GUI element will be in the default state until the animation starts, which causes the dialog to appear immediately if the default Pos is centered.

Trying to hide the dialog until it’s needed using SetGUIShow(false/true) can lead to leftover GUI elements that never disappear.

So instead, we hide the dialog by moving it offscreen, then bring it in when needed.
However, this introduces three states: offscreen, start position, and end position—hence the need for manual control via SetGUIPos.

That’s why we must use HeliScript in combination.

## Conclusion

Unexpected behaviors can occur when using GUI in Activities.
But if you’re implementing new UI in Activities, Canvas will likely be involved.
If you want to add animations, refer to this article and plan accordingly.
