var locateUser = require("./../js/locateUser.js").locateUser;
var locateCity = require("./../js/locateCity.js").locateCity;
var locateRestaurants = require("./../js/locateRestaurants.js").locateRestaurants;
var generateMap = require("./../js/generateMap.js").generateMap;
var initAutocomplete = require("./../js/initAutocomplete.js").initAutocomplete;
var calcRoute = require("./../js/directions.js").calcRoute;
var initialize = require("./../js/directions.js").initialize;

$(document).ready(function() {

  // locateUser();
  initialize();

  $('#locateUser').submit(function(event) {
    event.preventDefault();
    console.log("locating user from form");
    $('#map').empty();
    //input field must be reinstantiated here, or else it the search bar will not show when a new map is created.
    $('#locateUser').prepend('<input id="pac-input" class="controls" type="text" placeholder="Search Box">');
    locateUser();
  });

  $('#myForm').submit(function(event) {
    event.preventDefault();
    $('#map').empty();
    var address = $('#city_name').val();
    //input field must be reinstantiated here, or else it the search bar will not show when a new map is created.
    $('#locateUser').prepend('<input id="pac-input" class="controls" type="text" placeholder="Search Box">');
    locateCity(address);
  });

  $('#directions').submit(function(event) {
    event.preventDefault();
    calcRoute();

  });

});
