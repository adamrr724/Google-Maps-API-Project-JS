// exports.locateRestaurants = function() {
//   var places =  new google.maps.places();
//   var latitude = 0;
//   var longitude = 0;
//   places.TextSearchRequest( { 'query': 'restaurants' }, function(results, status) {
//     if (status == google.maps.PlacesStatus.OK) {
//       latitude = results[0].geometry.location.lat();
//       longitude = results[0].geometry.location.lng();
//       generateMap(latitude, longitude);
//     } else {
//       alert("Something got wrong " + status);
//     }
//   });
// }
