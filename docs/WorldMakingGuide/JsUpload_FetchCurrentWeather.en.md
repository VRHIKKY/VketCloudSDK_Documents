# Get Current Weather Using Web API

## Overview

Using [JS uploaded](../WorldMakingGuide/JsUpload.md), it is possible to retrieve current weather information using any Web API. In this example, we utilize OpenStreetMap and Open Meteo API.

!!! failure "Attention"
    - Utilizes features limited to paid plans.<br>

!!! note "Test Environment"
    - **SDK Version**: 14.5<br>
    - **OS**: Windows 11<br>
    - **Unity**: 2022.3.6.f1<br>
    - **Browser**: Google Chrome

## Procedure

### Step 1: Prepare the JS File

Integrate the following `weather_api.js` into your world. This script fetches weather information for a specified city.

```javascript
// Web API to retrieve latitude and longitude from a location name
const GEOCODE_BASE_URL = "https://nominatim.openstreetmap.org/search";

// Web API for weather forecast
const WEATHER_BASE_URL = "https://api.open-meteo.com/v1/forecast";
const QUERY_PARAMS = "current_weather=true";

const fetchWeatherByCity = async (city) => {
    // Fetch latitude and longitude
    const GEOCODE_URL = `${GEOCODE_BASE_URL}?q=${city}&format=json&limit=1`;
    const geoResponse = await fetch(GEOCODE_URL);
    if (!geoResponse.ok) {
        console.error("Failed to fetch geolocation", geoResponse.status);
        return;
    }

    const geoData = await geoResponse.json();
    if (geoData.length === 0) {
        console.error("Location not found");
        return;
    }

    const { lat, lon } = geoData[0];

    // Fetch weather using obtained latitude and longitude
    const WEATHER_API_URL = `${WEATHER_BASE_URL}?latitude=${lat}&longitude=${lon}&${QUERY_PARAMS}`;
    console.log("Weather API URL:", WEATHER_API_URL);

    const weatherResponse = await fetch(WEATHER_API_URL);
    if (!weatherResponse.ok) {
        console.error("Failed to fetch weather", weatherResponse.status);
        return;
    }

    const weatherData = await weatherResponse.json();
    return weatherData;
};

window.customJS = {
    fetchWeatherByCity,
};
```

#### Points to Note

- The `fetchWeatherByCity` function retrieves current weather information for a specified city.
- The return value `weatherData` is passed to the callback function in HeliScript, as described later.

### Step 2: Usage in HeliScript

Configure to use external functions.

```javascript
extern customJS
{
    void fetchWeatherByCity(async fJsValCallback, string);
}
```

#### Points to Note

- Using the `extern` keyword, make the JavaScript-defined function `fetchWeatherByCity` available for use in HeliScript.
- Since `fetchWeatherByCity` is asynchronous, the `async` keyword is required.
- When passing as a callback function, specify either a global function or a method within a component.

```c#
component WeatherComponent
{
    void FetchWeather()
    {
        customJS.fetchWeatherByCity(CacheWeather, "Tokyo");
    }

    void CacheWeather(JsVal val)
    {
        if (!val.HasProperty("current_weather")) return;
        hsSystemWriteLine(val.ToString());
        // Other processing
    }
}
```

#### Points to Note

- `customJS.fetchWeatherByCity(CacheWeather, "Tokyo")` retrieves weather information for Tokyo and returns the result to the `CacheWeather` method.
- The argument `val` in `CacheWeather` corresponds to the return type of the function defined in JavaScript.

This concludes the procedure for retrieving current weather information.