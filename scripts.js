

let map;

// List of Castles
var castles = [
  ['Pine Grove Castle', 42.473110, -70.958504, 4],
  ['Cronulla Castle', 42.4508, -70.9495, 4],
  ['Manly Castle', 42.473800, -70.902730, 3],
  ['Maroubra Castle', 42.5462760925293, -70.9640696, 4]
];

// List of Forest
var forest = [
  ['Forest', 42.4648183, -71,010051, 2],
  ['Pine Grove Forest', 42.491943, -70.974853, 4],
  ['Forest River Conservation Area', 42.4909148, -70.8955844, 4],
  ['Salem Woods', 42.506456, -70.906572, 3],
  ['Lynn Woods', 42.4791487, -70.9903823, 4],
  ['Another Forest', 42.6064768,-71.096531, 3],
  ['Another Forest 2', 42.6315109,-70.9207041, 3]
  
];

// List of Catacombs
var catacombs = [
  ['Gannon Catacombs', 42.487000, -70.976110, 2],
  ['Pine Grove Catacombs', 42.524773,-70.910499, 4],
  ['Greenlawn Cemetery', 42.5329222,-70.9020436, 4]
];

// List of Caves
var caves = [
  ['Zombie Cemetery', 42.4889127, -71.0200009, 4],
  ['Breakheart Cave', 42.4807153, -71.0264971, 3]
]

// List of Towns
var towns = [
  ['Marketstreet', 42.51519012451172, -71.0320816040039, 3],
  ['Christmas Town', 42.5029985, -71.0147199, 2],
  ['Fenwick Town', 42.5390151,-70.9153565, 4]
]

// List of Caves
var caves = [
  ['Cave 1', 42.5280321,-70.9990256, 3],
  ['Cave 2', 42.4807153,-71.0264971, 2]
]

// List of Shrines
var shrines = [
  ['Shrine 1', 42.5970161,-70.9703007, 3],
]

// List of Ruins
var ruins = [
  ['Ruin 1', 42.5888528,-70.8203006, 3],
]

// List of Zones
var zones = [
  ['Zone 1', 42.528938,-70.95585, 3]
]




//************************************************************* */

// Displays the map itself
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(42.4668, -70.9495),
  });
  
  // Castle location on Map
  for (i = 0; i < castles.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(castles[i][1],castles[i][2]),
      map:map,
      icon:'/images/mansion.png'
    });
  }
  
  // Forest Location on Map
  for (i = 0; i < forest.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(forest[i][1],forest[i][2]),
      map:map,
      icon:'/images/forest.png'
    });
  }
  
  // Catacombs Location on Map
  for (i = 0; i < catacombs.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(catacombs[i][1],catacombs[i][2]),
      map:map,
      icon:'/images/catacomb.png'
    });
  }
  
  // Town Location on Map
  for (i = 0; i < towns.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(towns[i][1],towns[i][2]),
      map:map,
      icon:'/images/town.png'
    });
  }
  
  // Cave Location on Map
  for (i = 0; i < caves.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(caves[i][1],caves[i][2]),
      map:map,
      icon:'/images/cave.png'
    });
  }
  
  // Shrine Location on Map
  for (i = 0; i < shrines.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shrines[i][1],shrines[i][2]),
      map:map,
      icon:'/images/shrine.png'
    });
  }
  
  // Zone Location on Map
  for (i = 0; i < zones.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(zones[i][1],zones[i][2]),
      map:map,
      icon:'/images/zone.png'
    });
  }
  
  // Ruin Location on Map
  for (i = 0; i < ruins.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(ruins[i][1],ruins[i][2]),
      map:map,
      icon:'/images/ruins.png'
    });
  }
  
  require('dotenv').config()
  console.log(process.env)
  
  const api_key = process.env.API_KEY;
  const URL = `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap&libraries=&v=weekly`
  console.log(URL)
  
}