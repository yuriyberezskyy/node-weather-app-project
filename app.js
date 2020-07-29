const request = require("request");

//http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233

const url =
  "http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  console.log(response.body.current.weather_descriptions[0]);
  console.log(
    "It is currently " +
      response.body.current.temperature +
      ". It feels like " +
      response.body.current.temperature
  );
});

const locationUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieXVyaXliZXJlenNreXkiLCJhIjoiY2tkNmYwanY2MXMydDJybDVicGV0eTVrNiJ9.lFm9S1mFngtkE8weei7WVg&limit=1";

request({ url: locationUrl, json: true }, (error, response) => {
  console.log("Latitude " + response.body.features[0].center[1]);
  console.log("Longtitude " + response.body.features[0].center[0]);
});
//
