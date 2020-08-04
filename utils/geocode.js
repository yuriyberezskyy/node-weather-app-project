const request = require("request");

const geocode = (address, callback) => {
  const locationUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoieXVyaXliZXJlenNreXkiLCJhIjoiY2tkNmYwanY2MXMydDJybDVicGV0eTVrNiJ9.lFm9S1mFngtkE8weei7WVg&limit=1";

  request({ url: locationUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try to find abnother search.");
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
