const request = require("request");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log("The weather for today: ");

geocode(process.argv[2], (error, data) => {
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      console.log(error);
    }

    console.log("Location: " + data.location);
    console.log("Temperature: " + forecastData.temperature);
    console.log("Feels like: " + forecastData.feelslike);
  });
});
