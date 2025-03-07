# Resolving the Issue of Slow Initial Sound Effect Playback

This guide addresses the issue where the initial sound effect playback takes time after clearing the cache when using HeliScript.

!!! info "Environment"
    SDK Version: 13.7.7<br>
    OS: Windows 10<br>
    Unity: 2019.4.31.f1 or 2022.3.6f1<br>
    Browser: Chrome<br>

## Steps

### 1. Load Items in the Constructor

```csharp
public QuizManager() // Constructor
{
    PreloadSEs();
}
---------------------------------------------------------
void PreloadSEs()
{
    // Preloading resolves the issue of slow initial sound effect playback
    Item correctSE1 = hsItemGet("CorrectSE_1");
    correctSE1.Load();
    Item incorrectSE1 = hsItemGet("IncorrectSE_1");
    incorrectSE1.Load();
}
```

## Additional Insights

- If `Play()` and `Stop()` are triggered within the same frame, the audio will be loaded, but the item will no longer be playable afterward. This is not recommended.

- Even if `AutoLoading` is set to `true` in the scene file, it appears that the sound is not loaded during the loading screen.

- Items using the same audio file will be played from the cache, so loading just one of them is sufficient.