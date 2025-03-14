# Restrict World Entry Time

## Overview

With Vket Cloud’s event feature, you cannot schedule an event longer than 24 hours.  
Therefore, if you want to create an event that spans multiple days or only allows access during specific timeframes (e.g., from 7:00 AM to 10:00 AM daily), you may find it difficult to meet these requirements using the default event features.

This page demonstrates how to use JavaScript to create a world that can be entered for more than 24 hours in total or only during specific times, which is challenging with the standard event features.

!!! failure "caution"
    - A paid plan feature is used here.<br>
    - If the world is set to “Public,” the access link to the world will remain visible even when it’s outside of the allowed timeframe.<br>
    - This does not forcibly remove people already inside the world when it’s outside of the permitted time.

!!! note "Test Environment"
    - **SDK Version**: 13.7.7<br>
    - **OS**: Windows 10<br>
    - **Unity**: 2019.4.31.f1<br>
    - **Browser**: Google Chrome

## Procedure

### ① Upload JavaScript

Upload the `accsesfilter.js` script shown below via JS Upload, then incorporate it into the world where it will be used.  
You must configure the redirect page URL for times outside the event period and the time settings in the “Custom Items” section.

```javascript
const urlParams = new URLSearchParams(window.location.search);
const worldId = urlParams.get('worldid') || 0;

// Custom Items
const redirectURL = ""; // URL of the redirect page when it’s outside the event time
const termList = { // Time period settings. Specify the date in MM-DD format, and the start and end times in hh:mm format.
    "4-1" : { "StartDate": "17:00", "EndDate":"22:00"}, // On April 1, entry is allowed from 17:00 to 22:00
    "4-2" : { "StartDate": "10:00", "EndDate":"20:00"}, // On April 2, entry is allowed from 10:00 to 20:00
};

const currentDate = new Date();
var termKey = (currentDate.getMonth() + 1) + "-" + currentDate.getDate();

const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const currentTime = `${hours}:${minutes}`;

console.log("Current time is " + termKey + " " + currentTime);

// If there is no entry for this day, redirect unconditionally
if(termList[termKey] == null) { OpenRedirectPage(); }

console.log("Open hours are " + termList[termKey]["StartDate"] + " to " + termList[termKey]["EndDate"]);

let isInterm = false;
// Check if current time falls within specified timeframe
if (currentTime <= termList[termKey]["EndDate"]) {
    if (currentTime >= termList[termKey]["StartDate"]) {
        // If within the time period, allow entry
        isInterm = true;
    }
}

// If outside the timeframe, redirect to normal world
if (!isInterm) {
    OpenRedirectPage();
}

function OpenRedirectPage() {
    // Specify the normal world’s URL if you want to redirect there
    window.location.href = redirectURL;
}
```

The settings will be complete once you integrate the above.