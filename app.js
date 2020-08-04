const request = require("request");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log("The weather for today: ");

// const url =
//   "http://api.weatherstack.com/current?access_key=378ded7c846cfd0a53dfadaed48d1df5&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       "It is currently " +
//         response.body.current.temperature +
//         ". It feels like " +
//         response.body.current.temperature
//     );
//   }
// });

geocode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast();
