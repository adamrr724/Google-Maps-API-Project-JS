exports.locateCity = function(address) {
  var geocoder =  new google.maps.Geocoder();
  var latitude = 0;
  var longitude = 0;
  geocoder.geocode( { 'address': address }, function(results, status) {
    console.log(results);
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      generateMap(latitude, longitude);
    } else {
      alert("Something got wrong " + status);
    }
  });
}
