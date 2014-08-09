function init() {
	// initialize map object with view
  var map = L.map('map').setView([0, 0], 3);

  // add tile layer
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i86nkdio/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
  }).addTo(map);

  // add custom data and make reusable object
  // geojson defined in data.js
  var data = L.geoJson(geojson).addTo(map);

  // fit map view to the bounds of your data
  map.fitBounds(data.getBounds());

}

window.onLoad = init();