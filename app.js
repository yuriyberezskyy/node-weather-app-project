const request = require("request");

//http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233

const url =
  "http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
