exports.locateUser = function(){
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(generateCoordinates, geolocationError, positionOptions);
    function generateCoordinates(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      generateMap(latitude, longitude);
    }
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}
