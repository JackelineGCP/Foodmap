$(document).ready(function() {
  setTimeout(function() { 
    window.location.href = 'views/home.html';
  }, 4000);
});

// Agregando nuestro mapa
var map;
function addMap() {
  var coord = new google.maps.LatLng(47.6145, -122.3418); 
  map = new google.maps.Map($('#map')[0], {
    center: coord,
    zoom: 10
  });
}

function maps() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      infoWindow = new google.maps.InfoWindow({ map: map });
      var pos = { lat: position.coords.latitude,
        lng: position.coords.longitude };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Found your location <br />Lat : ' + position.coords.latitude + ' </br>Lang :' + position.coords.longitude);
      map.panTo(pos);
    });
  } else {
    console.log('Browser doesn\'t support geolocation!');
  }
}
