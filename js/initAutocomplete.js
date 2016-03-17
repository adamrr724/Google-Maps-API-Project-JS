var directionsDisplay;
var directionsService = new google.maps.DirectionsService();


exports.initAutocomplete = function(lat, long) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: long},
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  directionsDisplay.setMap(map);

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();

    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };


      // Create a marker for each place.
      var marker;
      marker = new google.maps.Marker({
        map: map,
        icon: icon,
        animation: google.maps.Animation.DROP,
        title: place.name,
        position: place.geometry.location,

        //added to save google markers
        // place: {
        //   location: {lat: lat, lng: long},
        //   query: place
        // },

        // Attributions help users find your site again.
        attribution: {
          source: 'Google Maps JavaScript API',
          webUrl: 'https://developers.google.com/maps/'
        },
      });

      //content for marker info window
      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + place.name +'</h1>'+
      '<div id="bodyContent">'+
      '<p>' + place.formatted_address +'</p>';
      //shows existing place rating
      if (place.rating !== undefined) {
        contentString += '<p>Rating:' + place.rating + '</p></div></div>';
      } else {
        contentString += '</div></div>';
      }
      //Construct a new InfoWindow
      var infoWindow = new google.maps.InfoWindow({
        content: contentString
      });
      // Opens the InfoWindow when marker is clicked.
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
      //push new marker to array of all markers
      markers.push(marker);

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }

    });
    map.fitBounds(bounds);

  });
};

exports.calcRoute = function() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;

  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
};
