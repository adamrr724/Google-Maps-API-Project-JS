// var generateMap = require("./../js/generateMap.js").generateMap;
var initAutocomplete = require("./../js/initAutocomplete.js").initAutocomplete;

function generateCoordinates(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("I am working!");
  initAutocomplete(latitude, longitude);
}

function geolocationError() {
  alert("Sorry, search failed.");
}

exports.locateUser = function(){
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(generateCoordinates, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
};
