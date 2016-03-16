var generateMap = require("./../js/generateMap.js").generateMap;

function generateCoordinates(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("I am working!");
  generateMap(latitude, longitude);
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