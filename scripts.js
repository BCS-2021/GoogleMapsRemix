let map;

// Displays the map itself
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.3601, lng: -71.0589 },
    zoom: 13,
  });

  // puts a mark on the google maps
  marker = new google.maps.Marker({
    position:{lat:42.4668, lng: -70.9495},
    map:map,
    icon:'/images/town.png'
  });
}