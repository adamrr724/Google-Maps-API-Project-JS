$( document ).ready(function() {
  // $('#locateUser').click(locateUser);
  $('#myForm').submit(locateRestaurant())
});

//google maps functions
// function locateUser() {
//   // If the browser supports the Geolocation API
//   if (navigator.geolocation){
//     var positionOptions = {
//       enableHighAccuracy: true,
//       timeout: 10 * 1000 // 10 seconds
//     };
//     navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//   }
//   else {
//     alert("Your browser doesn't support the Geolocation API");
//   }
// }

function locateRestaurant(address) {
  var geocoder =  new google.maps.Geocoder();
  var latitude = 0;
  var longitude = 0;
  geocoder.geocode( { 'address': address }, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    latitude = results[0].geometry.location.lat();
    longitude = results[0].geometry.location.lng();
  } else {
    alert("Something got wrong " + status);
  }
  });
  geolocationSuccess(latitude, longitude);
}

// this is the success callback from telling the navigator (your browser) to get the current user's position
// we do this on line 13 above. We pass in a function to call on success, a function to call on error, and some options to tell the geolocation api how we want it to run.
// on successfully locating the user, geolocationSuccess() gets called automatically, and it is passed the user's position as an argument.
// on error, geolocationError is called.


function geolocationSuccess(lat, long) {
  // here we take the `position` object returned by the geolocation api
  // and turn it into google maps LatLng object by calling the google.maps.LatLng constructor function
  // it 2 arguments: one for latitude, one for longitude.
  // You could refactor this section to pass google maps your own coordinates rather than using geolocation for the user's current location.
  // But you must use coordinates to use this method.
  var userLatLng = new google.maps.LatLng(lat, long);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // Draw the map - you have to use 'getElementById' here.
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // Place the marker
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  alert(positionError);
}

//
// var APIKey = require('./../.env').APIKey;
// var initMap = require('./../js/Map.js').initMap;
//
// $(document).ready(function(){
//
//   // initMap();
//   $('#city_search').click(function(event){
//     var city = $('#city_name').val();
//     $.get(//api request that will take in a city name and return a city object with )
//     var latitude = getLatitude(city);
//     var longitude = getLongitude(city);
//     google.maps.event.addDomListener(window, 'load', initMap(latitude, longitude));
//     });
//   });
// });
//
//
// startMap = function() {
//   var mapDiv = document.getElementById('map');
//   var map = new google.maps.Map(mapDiv);
// }
//
// $.get("https://maps.googleapis.com/maps/api/js?key=" + APIKey + "&callback=initMap").then(function(response) {
// https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
