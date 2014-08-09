function init() {

	// initialize map object with view
  var map = L.map('map').setView([0, 0], 3);

  // add tile layer
  L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  // add custom data and make reusable object
  // geojson defined in data.js
  var data = L.geoJson(geojson).addTo(map);

  // fit map view to the bounds of your data
  map.fitBounds(data.getBounds());

}

window.onLoad = init();