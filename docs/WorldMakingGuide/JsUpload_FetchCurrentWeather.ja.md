# Web APIを使用し現在の天気を取得する

## 概要

[JS入稿](../WorldMakingGuide/JsUpload.md)するJavaScriptにより、任意のWeb APIを使用して現在の天気情報を取得することが可能です。この例では、OpenStreetMapとOpen Meteo APIを利用しています。

!!! failure "注意"
    - 有料プラン限定の機能を使用します。<br>

!!! note "検証環境"
    - **SDKバージョン** : 14.5<br>
    - **OS** : Windows 11<br>
    - **Unity** : 2022.3.6.f1<br>
    - **ブラウザ** : Google Chrome

## 手順  

### ① JSファイルの用意

JS入稿により、下記の `weather_api.js` を使用ワールドに組み込みます。このスクリプトは、指定した都市の天気情報を取得します。

```javascript
// 地名から緯度経度を取得するWeb API
const GEOCODE_BASE_URL = "https://nominatim.openstreetmap.org/search";

// 天気予報のWeb API
const WEATHER_BASE_URL = "https://api.open-meteo.com/v1/forecast";
const QUERY_PARAMS = "current_weather=true";

const fetchWeatherByCity = async (city) => {
    // 緯度・経度を取得する
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

    // 取得した緯度・経度で天気を取得する
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

#### ポイント

- `fetchWeatherByCity` 関数は指定した都市の現在の天気情報を取得します。
- 戻り値の `weatherData` は後述のHeliScriptのコールバック関数に渡されます。

### ② HeliScriptで使用する

外部の関数を使用するための設定を行います。

```javascript
extern customJS
{
    void fetchWeatherByCity(async fJsValCallback, string);
}
```

#### ポイント

- `extern` キーワードを使用して、JavaScript側で定義した関数 `fetchWeatherByCity` をHeliScriptで利用できるようにします。
- `fetchWeatherByCity` メソッドは非同期のため、`async` キーワードが必要です。
- コールバック関数として渡す際は、グローバル関数またはcomponent内のメソッドを指定する必要があります。

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
        // その他の処理
    }
}
```

#### ポイント

- `customJS.fetchWeatherByCity(CacheWeather, "Tokyo")` により、Tokyoの天気情報を取得し、`CacheWeather` メソッドに結果が返されます。
- `CacheWeather` メソッドの引数 `val` は、JavaScript側で定義した関数の戻り値に対応する型です。

以上が、現在の天気情報を取得する手順です。