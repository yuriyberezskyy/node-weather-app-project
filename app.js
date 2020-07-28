const request = require("request");

//http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233

const url =
  "http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  console.log(
    "It is currently " +
      response.body.current.temperature +
      ". It feels like " +
      response.body.current.temperature
  );
});
