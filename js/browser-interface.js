var locateUser = require("./locateUser.js").locateUser;
var locateCity = require("./locateCity.js").locateCity;
var locateRestaurants = require("./locateRestaurants.js").locateRestaurants;
var generateMap = require("./generateMap.js").generateMap;

$( document ).ready(function() {

  $('#locateUser').submit(function(event) {
    event.preventDefault();
    locateUser();
  });

  $('#myForm').submit(function(event) {
    event.preventDefault();
    var address = $('#city_name').val();
    locateCity(address);
  });
  
  // $('#restaurants').submit(function(event) {
  //   event.preventDefault();
  //   locateUser();
  // });

});
