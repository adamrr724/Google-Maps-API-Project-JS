var locateUser = require("./../js/locateUser.js").locateUser;
var locateCity = require("./../js/locateCity.js").locateCity;
var locateRestaurants = require("./../js/locateRestaurants.js").locateRestaurants;
var generateMap = require("./../js/generateMap.js").generateMap;
var initAutocomplete = require("./../js/initAutocomplete.js").initAutocomplete;

$(document).ready(function() {

  initAutocomplete();

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
