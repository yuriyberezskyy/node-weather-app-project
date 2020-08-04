const request = require("request");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log("The weather for today: ");

geocode("Brooklyn", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
  if (!data) {
    forecast(undefined, undefined, (error, data) => {
      console.log("Error:", error);
      console.log("Data:", data);
    });
  } else {
    forecast(data.latitude, data.longitude, (error, data) => {
      console.log("Error:", error);
      console.log("Data:", data);
    });
  }
});
