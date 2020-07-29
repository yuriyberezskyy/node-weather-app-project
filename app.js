const request = require("request");
// "http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233&units=f"

const url =
  "http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      "It is currently " +
        response.body.current.temperature +
        ". It feels like " +
        response.body.current.temperature
    );
  }
});

const locationUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoieXVyaXliZXJlenNreXkiLCJhIjoiY2tkNmYwanY2MXMydDJybDVicGV0eTVrNiJ9.lFm9S1mFngtkE8weei7WVg&limit=1";

request({ url: locationUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location");
  } else {
    console.log("Latitude " + response.body.features[0].center[1]);
    console.log("Longtitude " + response.body.features[0].center[0]);
  }
});
