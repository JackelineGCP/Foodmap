$(document).ready(function() {
  setTimeout(function() { 
    window.location.href = 'views/home.html';
  }, 4000);
  

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


  var nameRestaurant = Object.keys(data);
  var container = $('#container');

  function displaynameRestaurants() {
    $.each(nameRestaurant, function(i) {
      var availableFood = '<li class="collection col-xs-6 col-md-3"><a id=' + nameRestaurant[i] + ' href="#" data-toggle="modal" data-target="#infoModal"><span class="caption"><span>' + data[nameRestaurant[i]].nameRestaurant + '</span><img class="center-block" src="../assets/images/mmm.png" alt="Info"></span></a></li>';
      $('#results .row ul').append(availableFood);
      $('#' + nameRestaurant[i]).css({
        'background-image': 'url(' + data[nameRestaurant[i]].image + ')'});
    });
  }
});