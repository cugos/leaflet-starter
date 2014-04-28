function init() {
	var map = L.map('map').setView([0, 0], 3);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/YOUR_MAP_ID/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18
	}).addTo(map);

	L.geoJson(geojson).addTo(map);

}

window.onLoad = init();