const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("No connection", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        feelslike: response.body.current.feelslike,
        temperature: response.body.current.temperature,
      });
    }
  });
};

module.exports = forecast;
